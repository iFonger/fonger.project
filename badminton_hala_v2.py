# -*- coding: utf-8 -*-
"""
BADMINTONOVA HALA v2 - skript pro Blender (bpy)
================================================
Dřevěná klenutá hala podle vzoru Hamr Braník: půlkruhová klenba z dřevěných prken,
ocelové příhradové vazníky, modré gumové kurty s bílými čarami, cihlově červená PU podlaha,
oranžová stěna, tribuna, lavičky, rozhodcovské stoličky, ukazatele skóre, LED lišty
a dvě cvičební zóny vedle tribuny.

Použití: Blender -> Scripting -> New -> vložit -> Run Script (Alt+P).  Skript smaže celou scénu!
Souřadnice: X = šířka (-12..12), Y = délka (-11..11, vstup z předsíně je v Y = -11), Z = výška.
Kolekce: Hala, Kurty, Vybavení, Světla.
"""
import math
import random

import bpy
import bmesh

random.seed(7)

# ----------------------------------------------------------------------------
# PARAMETRY
# ----------------------------------------------------------------------------
HALL_W, HALL_L = 24.0, 22.0
HX, HY = HALL_W / 2, HALL_L / 2
HA = 12.05                              # polovina šířky klenby (stěny stojí 5 cm za podlahou)
HS, HC = 2.6, 10.5                      # výška svislých stěn / výška hřebene
HBV = HC - HS
RIB_N = 9
RIB_YS = [-10.0 + i * 2.5 for i in range(RIB_N)]

MAT_W, MAT_L, MAT_T = 7.1, 15.0, 0.012
COURT_W, COURT_L = 6.1, 13.4
COURT_X = [-6.6, 1.4]
LINE_W = 0.04
NET_H = 1.55

LIGHT_POWER_W = 250.0                   # výkon jednoho Area Light (uprav podle jasu renderu)
RENDER_SETUP = True

# ----------------------------------------------------------------------------
# POMOCNE FUNKCE: scena, kolekce, materialy
# ----------------------------------------------------------------------------


def clear_scene():
    """Smaze vsechno ve scene vcetne osirelych dat."""
    for obj in list(bpy.data.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
    for coll in list(bpy.data.collections):
        bpy.data.collections.remove(coll)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.lights, bpy.data.cameras, bpy.data.curves, bpy.data.images):
        for item in list(block):
            block.remove(item)


def make_collection(name):
    coll = bpy.data.collections.new(name)
    bpy.context.scene.collection.children.link(coll)
    return coll


def set_input(node, names, value):
    """Nastavi vstup uzlu; zkousi vic nazvu (Blender 3.x vs 4.x)."""
    if isinstance(names, str):
        names = [names]
    for n in names:
        if n in node.inputs:
            try:
                node.inputs[n].default_value = value
                return True
            except Exception:
                pass
    return False


def principled(name, color, rough, metal=0.0, emission=None, emission_strength=0.0, alpha=None, extra=None):
    """Vytvori material s Principled BSDF. extra = dict {nazev(y): hodnota}."""
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    bsdf = nt.nodes.get("Principled BSDF")
    set_input(bsdf, "Base Color", (color[0], color[1], color[2], 1.0))
    set_input(bsdf, "Roughness", rough)
    set_input(bsdf, "Metallic", metal)
    if emission is not None:
        set_input(bsdf, ["Emission Color", "Emission"], (emission[0], emission[1], emission[2], 1.0))
        set_input(bsdf, "Emission Strength", emission_strength)
    if alpha is not None:
        set_input(bsdf, "Alpha", alpha)
    for k, v in (extra or {}).items():
        set_input(bsdf, k, v)
    return mat


def bump_from_noise(mat, scale, strength, detail=6.0, rough_noise=0.5, color_mix=None):
    """Prida k materialu proceduralni sum jako bump (a volitelne zmenu barvy color_mix=(barvaA, barvaB))."""
    nt = mat.node_tree
    bsdf = nt.nodes.get("Principled BSDF")
    tc = nt.nodes.new("ShaderNodeTexCoord")
    noise = nt.nodes.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = scale
    noise.inputs["Detail"].default_value = detail
    noise.inputs["Roughness"].default_value = rough_noise
    nt.links.new(tc.outputs["Object"], noise.inputs["Vector"])
    bump = nt.nodes.new("ShaderNodeBump")
    bump.inputs["Strength"].default_value = strength
    nt.links.new(noise.outputs["Fac"], bump.inputs["Height"])
    nt.links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    if color_mix:
        mix = nt.nodes.new("ShaderNodeMixRGB")
        mix.inputs["Color1"].default_value = (*color_mix[0], 1.0)
        mix.inputs["Color2"].default_value = (*color_mix[1], 1.0)
        nt.links.new(noise.outputs["Fac"], mix.inputs["Fac"])
        nt.links.new(mix.outputs["Color"], bsdf.inputs["Base Color"])


def hashed_alpha(mat):
    """Zapne prusvitnost materialu (Blender 3.x i 4.2+)."""
    for attr, val in (("blend_method", "HASHED"), ("surface_render_method", "DITHERED"), ("shadow_method", "HASHED")):
        try:
            setattr(mat, attr, val)
        except Exception:
            pass


# ----------------------------------------------------------------------------
# POMOCNE FUNKCE: geometrie (bmesh)
# ----------------------------------------------------------------------------


def rot_point(p, rot):
    """Otoci bod p o Eulerovy uhly rot=(rx, ry, rz) v radianech (poradi X, Y, Z)."""
    x, y, z = p
    rx, ry, rz = rot
    if rx:
        c, s = math.cos(rx), math.sin(rx)
        y, z = y * c - z * s, y * s + z * c
    if ry:
        c, s = math.cos(ry), math.sin(ry)
        x, z = x * c + z * s, -x * s + z * c
    if rz:
        c, s = math.cos(rz), math.sin(rz)
        x, y = x * c - y * s, x * s + y * c
    return (x, y, z)


def add_box(bm, center, size, rot=(0.0, 0.0, 0.0), mat_index=0):
    """Kvadr o stredu center a velikosti size, otoceny o rot kolem sveho stredu."""
    hx, hy, hz = size[0] / 2, size[1] / 2, size[2] / 2
    corners = [(-hx, -hy, -hz), (hx, -hy, -hz), (hx, hy, -hz), (-hx, hy, -hz),
               (-hx, -hy, hz), (hx, -hy, hz), (hx, hy, hz), (-hx, hy, hz)]
    vs = []
    for c in corners:
        r = rot_point(c, rot)
        vs.append(bm.verts.new((center[0] + r[0], center[1] + r[1], center[2] + r[2])))
    for idx in ((0, 3, 2, 1), (4, 5, 6, 7), (0, 1, 5, 4), (1, 2, 6, 5), (2, 3, 7, 6), (3, 0, 4, 7)):
        f = bm.faces.new([vs[i] for i in idx])
        f.material_index = mat_index
    return vs


def vsub(a, b): return (a[0] - b[0], a[1] - b[1], a[2] - b[2])
def vadd(a, b): return (a[0] + b[0], a[1] + b[1], a[2] + b[2])
def vmul(a, k): return (a[0] * k, a[1] * k, a[2] * k)
def vlen(a): return math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2)
def vnorm(a):
    l = vlen(a)
    return (a[0] / l, a[1] / l, a[2] / l) if l > 1e-9 else (0.0, 0.0, 1.0)
def vcross(a, b): return (a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0])


def add_tube(bm, p0, p1, r, sides=6, mat_index=0):
    """Hranol (trubka) mezi dvema body - nosniky, diagonaly, nohy."""
    d = vsub(p1, p0)
    if vlen(d) < 1e-6:
        return
    d = vnorm(d)
    ref = (0.0, 0.0, 1.0) if abs(d[2]) < 0.9 else (1.0, 0.0, 0.0)
    u = vnorm(vcross(d, ref))
    v = vnorm(vcross(d, u))
    ring0, ring1 = [], []
    for k in range(sides):
        a = 2 * math.pi * k / sides
        off = vadd(vmul(u, math.cos(a) * r), vmul(v, math.sin(a) * r))
        ring0.append(bm.verts.new(vadd(p0, off)))
        ring1.append(bm.verts.new(vadd(p1, off)))
    for k in range(sides):
        k2 = (k + 1) % sides
        f = bm.faces.new((ring0[k], ring0[k2], ring1[k2], ring1[k]))
        f.material_index = mat_index


def add_quad(bm, p0, p1, p2, p3, mat_index=0, uvs=None):
    vs = [bm.verts.new(p) for p in (p0, p1, p2, p3)]
    f = bm.faces.new(vs)
    f.material_index = mat_index
    if uvs is not None:
        layer = bm.loops.layers.uv.verify()
        for loop, uv in zip(f.loops, uvs):
            loop[layer].uv = uv
    return f


def add_prism(bm, profile, axis_range, mat_index=0):
    """Vytlaci 2D profil [(x, z), ...] podel osy Y mezi y0 a y1 (steny s obloukem, schody tribuny)."""
    y0, y1 = axis_range
    front = [bm.verts.new((x, y0, z)) for x, z in profile]
    back = [bm.verts.new((x, y1, z)) for x, z in profile]
    f1 = bm.faces.new(front[::-1]); f2 = bm.faces.new(back)
    f1.material_index = f2.material_index = mat_index
    n = len(profile)
    for i in range(n):
        j = (i + 1) % n
        f = bm.faces.new((front[i], front[j], back[j], back[i]))
        f.material_index = mat_index


def finish(bm):
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])


def make_object(name, bm, coll, materials, smooth=False, modifiers=None):
    """Prevede bmesh na objekt, priradi materialy a ulozi do kolekce."""
    finish(bm)
    mesh = bpy.data.meshes.new(name + "_mesh")
    bm.to_mesh(mesh)
    bm.free()
    for m in materials:
        mesh.materials.append(m)
    if smooth:
        for p in mesh.polygons:
            p.use_smooth = True
    obj = bpy.data.objects.new(name, mesh)
    coll.objects.link(obj)
    for mod in (modifiers or []):
        mo = obj.modifiers.new(mod["name"], mod["type"])
        for k, v in mod.get("props", {}).items():
            setattr(mo, k, v)
    return obj


def bevel_mod(width=0.01, segments=2):
    return {"name": "Bevel", "type": "BEVEL", "props": {"width": width, "segments": segments}}



# ----------------------------------------------------------------------------
# KURTY: podlozka, cary BWF, sit, sloupky
# ----------------------------------------------------------------------------


def court_lines_bm(cx):
    """Cary BWF jako ploche kvadry v z = MAT_T + 0,6 mm (rozmery podle pravidel BWF)."""
    bm = bmesh.new()
    z = MAT_T + 0.0006
    w = LINE_W

    def strip(x0, y0, x1, y1):
        add_quad(bm, (cx + x0, y0, z), (cx + x1, y0, z), (cx + x1, y1, z), (cx + x0, y1, z))

    X2, X1, Y = COURT_W / 2, 2.59, COURT_L / 2           # 3,05 ctyrhra; 2,59 dvouhra; 6,7 zakladna
    LS, SS = Y - 0.76, 1.98                              # dlouha podavaci (ctyrhra), kratka podavaci
    strip(-X2, -Y, -X2 + w, Y)                           # postranni ctyrhra
    strip(X2 - w, -Y, X2, Y)
    strip(-X2, -Y, X2, -Y + w)                           # zakladni cary
    strip(-X2, Y - w, X2, Y)
    strip(-X1, -Y, -X1 + w, Y)                           # postranni dvouhra
    strip(X1 - w, -Y, X1, Y)
    for s in (-1, 1):
        y_lo, y_hi = sorted((s * SS, s * (SS - w)))
        strip(-X2, y_lo, X2, y_hi)                       # kratka podavaci
        y_lo, y_hi = sorted((s * LS, s * (LS - w)))
        strip(-X2, y_lo, X2, y_hi)                       # dlouha podavaci (ctyrhra)
        y_lo, y_hi = sorted((s * SS, s * Y))
        strip(-w / 2, y_lo, w / 2, y_hi)                 # stredova cara
    return bm


# ----------------------------------------------------------------------------
# VYBAVENI: tribuna, sedacky, lavicky, rozhodcovske stolicky, ukazatele skore
# ----------------------------------------------------------------------------


def build_tribune(coll, M):
    X0, STEP_D, STEP_H, N = 7.6, 1.1, 0.4, 4
    LEN = 12.0
    prof = [(X0, 0.0), (X0 + N * STEP_D, 0.0)]
    for i in range(N, 0, -1):
        xr = X0 + i * STEP_D
        prof.append((xr, STEP_H * i))
        prof.append((xr - STEP_D, STEP_H * i))
    bm = bmesh.new()
    add_prism(bm, prof, (-LEN / 2, LEN / 2))
    make_object("Tribuna_Beton_Schody", bm, coll, [M["beton"]])

    # sklapeci plastove sedacky (jedna joined mesh)
    bm = bmesh.new()
    seat_w, pitch = 0.46, 0.5
    n_per_row = int(LEN / pitch) - 1
    for s in range(N):
        top = STEP_H * (s + 1)
        xc = X0 + s * STEP_D + 0.5
        for k in range(n_per_row):
            y = -LEN / 2 + 0.5 + k * pitch
            add_box(bm, (xc, y, top + 0.42), (0.42, seat_w, 0.045), rot=(0, 0.04, 0))             # sedak
            add_box(bm, (xc + 0.21, y, top + 0.66), (0.045, seat_w, 0.42), rot=(0, 0.17, 0))      # operadlo (nakloneno)
            add_box(bm, (xc + 0.2, y, top + 0.21), (0.05, 0.05, 0.42))                            # noha
            add_box(bm, (xc - 0.1, y - seat_w / 2 + 0.01, top + 0.5), (0.3, 0.025, 0.03))         # podruckka
    make_object("Tribuna_Sedacky_Modre", bm, coll, [M["sedacka"]], modifiers=[bevel_mod(0.006, 2)])

    # zabradli pred tribunou
    bm = bmesh.new()
    add_tube(bm, (X0 - 0.15, -LEN / 2, 1.0), (X0 - 0.15, LEN / 2, 1.0), 0.025, sides=10)
    add_tube(bm, (X0 - 0.15, -LEN / 2, 0.55), (X0 - 0.15, LEN / 2, 0.55), 0.015, sides=8)
    for k in range(7):
        y = -LEN / 2 + k * LEN / 6
        add_tube(bm, (X0 - 0.15, y, 0.0), (X0 - 0.15, y, 1.0), 0.025, sides=10)
    make_object("Tribuna_Zabradli", bm, coll, [M["chrom"]], smooth=True)


def text_object(name, text, loc, size, mat, coll, rot=(math.pi / 2, 0.0, 0.0)):
    curve = bpy.data.curves.new(name + "_data", type="FONT")
    curve.body = text
    curve.size = size
    curve.align_x = "CENTER"
    curve.align_y = "CENTER"
    curve.extrude = 0.012
    obj = bpy.data.objects.new(name, curve)
    obj.location = loc
    obj.rotation_euler = rot
    obj.data.materials.append(mat)
    coll.objects.link(obj)
    return obj


# ----------------------------------------------------------------------------
# KAMERA, SVET, RENDER
# ----------------------------------------------------------------------------


def setup_render():
    scn = bpy.context.scene
    # svet: tmavy, jen slaby ambient
    world = bpy.data.worlds.new("Svet_Hala")
    world.use_nodes = True
    bg = world.node_tree.nodes.get("Background")
    bg.inputs[0].default_value = (0.03, 0.035, 0.045, 1.0)
    bg.inputs[1].default_value = 0.5
    scn.world = world
    # kamera
    cam_data = bpy.data.cameras.new("Kamera_Hala_data")
    cam_data.lens = 22
    cam = bpy.data.objects.new("Kamera_Hala", cam_data)
    cam.location = (10.5, -10.4, 3.4)
    scn.collection.objects.link(cam)
    target = bpy.data.objects.new("Kamera_Cil", None)
    target.location = (-2.0, 3.0, 3.2)
    scn.collection.objects.link(target)
    con = cam.constraints.new("TRACK_TO")
    con.target = target
    con.track_axis = "TRACK_NEGATIVE_Z"
    con.up_axis = "UP_Y"
    scn.camera = cam
    # render
    scn.render.engine = "CYCLES"
    try:
        scn.cycles.samples = 192
        scn.cycles.use_denoising = True
    except Exception:
        pass
    scn.render.resolution_x, scn.render.resolution_y = 1920, 1080
    for vt in ("AgX", "Filmic"):
        try:
            scn.view_settings.view_transform = vt
            break
        except Exception:
            continue
    try:
        scn.view_settings.exposure = 0.0
    except Exception:
        pass




# ----------------------------------------------------------------------------
# DALSI POMOCNE FUNKCE (valce, koule, kuzely, pas klenby s UV v metrech)
# ----------------------------------------------------------------------------


def add_cyl(bm, p0, p1, r, sides=14, mat_index=0):
    """Uzavreny valec mezi dvema body."""
    add_tube(bm, p0, p1, r, sides, mat_index)
    d = vnorm(vsub(p1, p0))
    ref = (0.0, 0.0, 1.0) if abs(d[2]) < 0.9 else (1.0, 0.0, 0.0)
    u = vnorm(vcross(d, ref)); v = vnorm(vcross(d, u))
    for p, flip in ((p0, True), (p1, False)):
        ring = [bm.verts.new(vadd(p, vadd(vmul(u, math.cos(2 * math.pi * k / sides) * r), vmul(v, math.sin(2 * math.pi * k / sides) * r)))) for k in range(sides)]
        f = bm.faces.new(ring[::-1] if flip else ring)
        f.material_index = mat_index


def add_sphere(bm, c, r, seg=16, rings=10, mat_index=0):
    ret = bmesh.ops.create_uvsphere(bm, u_segments=seg, v_segments=rings, radius=r)
    verts = ret["verts"]
    bmesh.ops.translate(bm, vec=c, verts=verts)
    for v in verts:
        for f in v.link_faces:
            f.material_index = mat_index


def add_cone(bm, c, r, h, seg=14, mat_index=0):
    ret = bmesh.ops.create_cone(bm, cap_ends=True, segments=seg, radius1=r, radius2=0.0, depth=h)
    verts = ret["verts"]
    bmesh.ops.translate(bm, vec=(c[0], c[1], c[2] + h / 2), verts=verts)
    for v in verts:
        for f in v.link_faces:
            f.material_index = mat_index


def add_strip(bm, pts, y0, y1, u0=0.0, mat_index=0):
    """Plocha vytazena z profilu [(x, z), ...] podel Y; UV = (delka oblouku v m, y). Normaly miri DOVNITR haly."""
    uv = bm.loops.layers.uv.verify()
    ring0, ring1, us = [], [], []
    u = u0
    for i, (x, z) in enumerate(pts):
        if i:
            u += math.hypot(x - pts[i - 1][0], z - pts[i - 1][1])
        us.append(u)
        ring0.append(bm.verts.new((x, y0, z)))
        ring1.append(bm.verts.new((x, y1, z)))
    for i in range(len(pts) - 1):
        f = bm.faces.new((ring1[i], ring1[i + 1], ring0[i + 1], ring0[i]))
        f.material_index = mat_index
        for loop, (uu, vv) in zip(f.loops, ((us[i], y1), (us[i + 1], y1), (us[i + 1], y0), (us[i], y0))):
            loop[uv].uv = (uu, vv)
    return u


def vault_y(x, off=0.0):
    """Vyska klenby (spodni plocha) nad podlahou v bode x."""
    a = HA - off
    return HS + (HBV - off) * math.sqrt(max(0.0, 1.0 - (x / a) ** 2))


def make_object_keep(name, bm, coll, materials, **kw):
    """Jako make_object, ale bez prepoctu normal (pro otevrene plochy se spravnou orientaci)."""
    mesh = bpy.data.meshes.new(name + "_mesh")
    bm.to_mesh(mesh)
    bm.free()
    for m in materials:
        mesh.materials.append(m)
    obj = bpy.data.objects.new(name, mesh)
    coll.objects.link(obj)
    obj["has_uv"] = True
    return obj


# ----------------------------------------------------------------------------
# MATERIALY
# ----------------------------------------------------------------------------


def wood_material():
    mat = principled("MAT_Drevo_Klenba", (0.62, 0.40, 0.17), 0.62)
    nt = mat.node_tree
    bsdf = nt.nodes.get("Principled BSDF")
    tc = nt.nodes.new("ShaderNodeTexCoord")
    brick = nt.nodes.new("ShaderNodeTexBrick")
    brick.offset = 0.5
    brick.offset_frequency = 2
    for k, v in (("Scale", 1.0), ("Mortar Size", 0.006), ("Mortar Smooth", 0.0), ("Bias", 0.0), ("Brick Width", 6.0), ("Row Height", 0.17)):
        if k in brick.inputs:
            brick.inputs[k].default_value = v
    brick.inputs["Color1"].default_value = (0.64, 0.41, 0.18, 1.0)
    brick.inputs["Color2"].default_value = (0.50, 0.30, 0.12, 1.0)
    brick.inputs["Mortar"].default_value = (0.10, 0.05, 0.02, 1.0)
    nt.links.new(tc.outputs["UV"], brick.inputs["Vector"])
    nt.links.new(brick.outputs["Color"], bsdf.inputs["Base Color"])
    noise = nt.nodes.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 18.0
    noise.inputs["Detail"].default_value = 8.0
    nt.links.new(tc.outputs["UV"], noise.inputs["Vector"])
    bump = nt.nodes.new("ShaderNodeBump")
    bump.inputs["Strength"].default_value = 0.25
    nt.links.new(noise.outputs["Fac"], bump.inputs["Height"])
    nt.links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    return mat


def build_materials():
    M = {}
    # podlaha haly: cihlove cervena PU, jemny pololesk
    M["podlaha"] = principled("MAT_PU_Podlaha", (0.36, 0.075, 0.04), 0.36, extra={"Specular IOR Level": 0.4, "Specular": 0.4})
    bump_from_noise(M["podlaha"], 70.0, 0.04, 8.0, 0.55, color_mix=((0.33, 0.065, 0.035), (0.40, 0.09, 0.05)))
    # gumove kurty: modra guma s jemnou texturou
    M["podlozka"] = principled("MAT_PVC_Podlozka", (0.075, 0.17, 0.46), 0.5, extra={"Specular IOR Level": 0.35, "Specular": 0.35})
    bump_from_noise(M["podlozka"], 420.0, 0.30, 4.0, 0.7, color_mix=((0.07, 0.16, 0.43), (0.085, 0.19, 0.50)))
    M["cary"] = principled("MAT_BWF_Cary", (0.85, 0.85, 0.83), 0.45)
    M["drevo"] = wood_material()
    M["ocel"] = principled("MAT_Ocel_Vazniky", (0.70, 0.72, 0.76), 0.5, metal=0.25)
    M["ocel_tmava"] = principled("MAT_Ocel_Tmava", (0.10, 0.10, 0.11), 0.45, metal=0.9)
    M["dvere_ram"] = principled("MAT_Dvere_Ram", (0.08, 0.085, 0.10), 0.5)
    M["banner"] = principled("MAT_Banner_Oranzovy", (0.93, 0.31, 0.012), 0.85)
    M["tabule_ekran"] = principled("MAT_Tabule_Ekran", (0.02, 0.03, 0.06), 0.25)
    M["zrcadlo"] = principled("MAT_Zrcadlo", (0.85, 0.9, 0.95), 0.02, metal=1.0)
    M["beton"] = principled("MAT_Pohledovy_Beton", (0.27, 0.27, 0.28), 0.86)
    bump_from_noise(M["beton"], 5.0, 0.4, 10.0, 0.62, color_mix=((0.22, 0.22, 0.23), (0.33, 0.33, 0.34)))
    M["sedacka"] = principled("MAT_Sedacka_Modra", (0.02, 0.07, 0.30), 0.38, extra={"Specular IOR Level": 0.5, "Specular": 0.5})
    M["lavicka_drevo"] = principled("MAT_Lavicka_Drevo", (0.55, 0.38, 0.20), 0.55)
    bump_from_noise(M["lavicka_drevo"], 30.0, 0.1, 5.0)
    M["stolicka"] = principled("MAT_Stolicka_Rozhodci", (0.04, 0.12, 0.45), 0.4)
    M["stolek"] = principled("MAT_Stolek_Rozhodci", (0.8, 0.8, 0.8), 0.6)
    M["chrom"] = principled("MAT_Chrom_Kov", (0.86, 0.87, 0.89), 0.2, metal=1.0)
    M["ukazatel_telo"] = principled("MAT_Ukazatel_Telo", (0.015, 0.015, 0.02), 0.35, metal=0.3)
    M["ukazatel_led"] = principled("MAT_Ukazatel_LED", (1.0, 0.55, 0.05), 0.4, emission=(1.0, 0.55, 0.05), emission_strength=7.0)
    M["gumova"] = principled("MAT_Guma_Cerna", (0.02, 0.02, 0.022), 0.8)
    M["zluta"] = principled("MAT_Zluta_Pasky", (0.9, 0.62, 0.03), 0.6)
    M["oranz"] = principled("MAT_Oranzova_Kuzel", (0.9, 0.2, 0.02), 0.6)
    M["bedna"] = principled("MAT_Plyo_Bedna", (0.62, 0.40, 0.17), 0.7)
    M["kettle_cerna"] = principled("MAT_Kettlebell", (0.02, 0.02, 0.025), 0.45, metal=0.4)
    M["kettle_cervena"] = principled("MAT_Kettlebell_Cervena", (0.5, 0.03, 0.02), 0.45, metal=0.4)
    M["medicinbal_zel"] = principled("MAT_Medicinbal_Zeleny", (0.04, 0.2, 0.06), 0.6)
    M["medicinbal_cerv"] = principled("MAT_Medicinbal_Cerveny", (0.2, 0.04, 0.04), 0.6)
    M["medicinbal_mod"] = principled("MAT_Medicinbal_Modry", (0.04, 0.09, 0.22), 0.6)
    M["gymball_modry"] = principled("MAT_Gymball_Modry", (0.02, 0.2, 0.9), 0.35)
    M["gymball_oranz"] = principled("MAT_Gymball_Oranzovy", (0.95, 0.25, 0.02), 0.35)
    M["gymball_zeleny"] = principled("MAT_Gymball_Zeleny", (0.05, 0.6, 0.18), 0.35)
    M["valec_seda"] = principled("MAT_Valec_Seda", (0.02, 0.02, 0.025), 0.8)
    M["valec_modry"] = principled("MAT_Valec_Modry", (0.04, 0.15, 0.7), 0.8)
    M["valec_oranz"] = principled("MAT_Valec_Oranzovy", (0.75, 0.2, 0.03), 0.8)
    for i, c in enumerate(((0.03, 0.4, 0.37), (0.28, 0.1, 0.65), (0.8, 0.1, 0.27), (0.9, 0.25, 0.02))):
        M["podlozka_%d" % i] = principled("MAT_Jogamat_%d" % (i + 1), c, 0.85)
    M["trx"] = principled("MAT_TRX_Popruh", (0.9, 0.62, 0.03), 0.7)
    # sit
    M["sit"] = principled("MAT_Sit_Pruhledna", (0.015, 0.015, 0.02), 0.6, alpha=0.9)
    hashed_alpha(M["sit"])
    nt = M["sit"].node_tree
    bsdf = nt.nodes.get("Principled BSDF")
    tc = nt.nodes.new("ShaderNodeTexCoord")
    sep = nt.nodes.new("ShaderNodeSeparateXYZ")
    nt.links.new(tc.outputs["UV"], sep.inputs["Vector"])
    masks = []
    for axis, count in (("X", 305.0), ("Y", 38.0)):
        mul = nt.nodes.new("ShaderNodeMath"); mul.operation = "MULTIPLY"; mul.inputs[1].default_value = count
        fr = nt.nodes.new("ShaderNodeMath"); fr.operation = "FRACT"
        lt = nt.nodes.new("ShaderNodeMath"); lt.operation = "LESS_THAN"; lt.inputs[1].default_value = 0.22
        nt.links.new(sep.outputs[axis], mul.inputs[0]); nt.links.new(mul.outputs[0], fr.inputs[0]); nt.links.new(fr.outputs[0], lt.inputs[0])
        masks.append(lt)
    mx = nt.nodes.new("ShaderNodeMath"); mx.operation = "MAXIMUM"
    nt.links.new(masks[0].outputs[0], mx.inputs[0]); nt.links.new(masks[1].outputs[0], mx.inputs[1])
    nt.links.new(mx.outputs[0], bsdf.inputs["Alpha"])
    M["sit_lem"] = principled("MAT_Sit_Horni_Lem", (0.95, 0.95, 0.95), 0.5)
    M["led_telo"] = principled("MAT_LED_Telo", (0.80, 0.80, 0.82), 0.35, metal=0.6)
    M["led_zarivka"] = principled("MAT_LED_Zarivka_Emise", (1.0, 0.97, 0.90), 0.3, emission=(1.0, 0.97, 0.90), emission_strength=9.0)
    return M


# ----------------------------------------------------------------------------
# HALA: podlaha, drevena klenba, steny, vazniky
# ----------------------------------------------------------------------------


def build_hall(coll, M):
    # podlaha (horni plocha v z = 0)
    bm = bmesh.new()
    add_box(bm, (0, 0, -0.05), (HALL_W, HALL_L, 0.1))
    make_object("Hala_Podlaha_PU", bm, coll, [M["podlaha"]])

    # drevena klenba (svisle steny + pul-elipsa), UV v metrech pro texturu prken
    N = 72
    arc = []
    for i in range(N + 1):
        t = math.pi - math.pi * i / N
        arc.append((HA * math.cos(t), HS + HBV * math.sin(t)))
    bm = bmesh.new()
    add_strip(bm, [(-HA, 0.0), (-HA, HS)], -HY, HY, 0.0)
    u_end = add_strip(bm, arc, -HY, HY, HS)
    add_strip(bm, [(HA, HS), (HA, 0.0)], -HY, HY, u_end)
    make_object_keep("Hala_Klenba_Drevo", bm, coll, [M["drevo"]])

    # celni stena s dvermi do predsine / satny, +0.11 m tloustka, stejny pudorys jako puvodni zed
    notches = [(-2.4, -0.6), (3.4, 4.8)]
    prof = [(-HA, 0.0)]
    for a, b in notches:
        prof += [(a, 0.0), (a, 2.2), (b, 2.2), (b, 0.0)]
    prof.append((HA, 0.0))
    for i in range(N, -1, -1):
        x = -HA + 2 * HA * i / N
        prof.append((x, vault_y(x)))
    bm = bmesh.new()
    add_prism(bm, prof, (-HY - 0.11, -HY + 0.11))
    make_object("Hala_Stena_Predni", bm, coll, [M["drevo"]])
    bm = bmesh.new()
    for a, b in notches:
        add_box(bm, (a, -HY, 1.1), (0.1, 0.3, 2.2)); add_box(bm, (b, -HY, 1.1), (0.1, 0.3, 2.2)); add_box(bm, ((a + b) / 2, -HY, 2.2), (b - a, 0.3, 0.1))
    make_object("Hala_Dvere_Ramy", bm, coll, [M["dvere_ram"]])
    # zadni stena: cela potazena oranzovym platnem (bez napisu), od podlahy az po klenbu
    prof_b = [(-HA, 0.0), (HA, 0.0)] + [(-HA + 2 * HA * i / N, vault_y(-HA + 2 * HA * i / N)) for i in range(N, -1, -1)]
    bm = bmesh.new()
    add_prism(bm, prof_b, (HY, HY + 0.22))
    make_object("Hala_Stena_Zadni", bm, coll, [M["banner"]])

    # prícne ocelove pritlove vazniky pod klenbou
    NS = 40
    outer, inner = [], []
    for i in range(NS + 1):
        x = -HA + 0.15 + (2 * HA - 0.3) * i / NS
        outer.append((x, vault_y(x, 0.18) - 0.05))
        inner.append((x, vault_y(x, 0.18) - 0.75 + abs(i - NS / 2) / (NS / 2) * 0.25))
    for r, y in enumerate(RIB_YS):
        bm = bmesh.new()
        for ch in (outer, inner):
            for k in range(NS):
                add_tube(bm, (ch[k][0], y, ch[k][1]), (ch[k + 1][0], y, ch[k + 1][1]), 0.07)
        for k in range(NS):
            add_tube(bm, (outer[k][0], y, outer[k][1]), (inner[k][0], y, inner[k][1]), 0.026)
            add_tube(bm, (inner[k][0], y, inner[k][1]), (outer[k + 1][0], y, outer[k + 1][1]), 0.026)
        add_tube(bm, (outer[NS][0], y, outer[NS][1]), (inner[NS][0], y, inner[NS][1]), 0.026)
        for sx in (-1, 1):
            add_box(bm, (sx * (HA - 0.14), y, (HS + 0.1) / 2), (0.28, 0.28, HS + 0.1))
            add_box(bm, (sx * (HA - 0.14), y, 0.02), (0.4, 0.4, 0.04))
        make_object("Hala_Vaznik_%02d" % (r + 1), bm, coll, [M["ocel"]], smooth=True)
    # vaznice (podelne) po horni a dolni tetive
    bm = bmesh.new()
    for k in range(0, NS + 1, 4):
        for r in range(RIB_N - 1):
            add_tube(bm, (outer[k][0], RIB_YS[r], outer[k][1]), (outer[k][0], RIB_YS[r + 1], outer[k][1]), 0.045, sides=8)
    make_object("Hala_Vaznice", bm, coll, [M["ocel_tmava"]], smooth=True)


# ----------------------------------------------------------------------------
# KURTY: podlozka, cary BWF, sit, sloupky s podstavci
# ----------------------------------------------------------------------------


def build_net(cx, idx, coll, M):
    half = COURT_W / 2
    bm = bmesh.new()
    add_quad(bm, (cx - half, 0, NET_H - 0.05 - 0.76), (cx + half, 0, NET_H - 0.05 - 0.76),
             (cx + half, 0, NET_H - 0.05), (cx - half, 0, NET_H - 0.05),
             uvs=[(0, 0), (1, 0), (1, 1), (0, 1)])
    make_object_keep("Kurt%d_Sit" % idx, bm, coll, [M["sit"]])
    bm = bmesh.new()
    add_box(bm, (cx, 0, NET_H - 0.025), (COURT_W, 0.012, 0.05))
    make_object("Kurt%d_Sit_Horni_Lem" % idx, bm, coll, [M["sit_lem"]])
    bm = bmesh.new()
    add_box(bm, (cx, 0, NET_H - 0.05 - 0.76), (COURT_W, 0.008, 0.012))
    make_object("Kurt%d_Sit_Dolni_Snura" % idx, bm, coll, [M["ocel_tmava"]])
    # sloupky: tyc + kulaty tezky podstavec + klika
    bm = bmesh.new()
    for sx in (-1, 1):
        px = cx + sx * (half + 0.04)
        add_cyl(bm, (px, 0, 0.04), (px, 0, NET_H + 0.07), 0.026, 12)
        add_cyl(bm, (px, 0, 0.0), (px, 0, 0.045), 0.27, 28)
        add_cyl(bm, (px, 0, 0.045), (px, 0, 0.16), 0.08, 16)
        add_cyl(bm, (px, 0, 0.5), (px - sx * 0.2, 0, 0.5), 0.011, 8)
    make_object("Kurt%d_Sloupky" % idx, bm, coll, [M["ocel_tmava"]], smooth=True)


def build_courts(coll, M):
    for i, cx in enumerate(COURT_X, start=1):
        bm = bmesh.new()
        add_box(bm, (cx, 0, MAT_T / 2), (MAT_W, MAT_L, MAT_T))
        make_object("Kurt%d_Podlozka_Guma" % i, bm, coll, [M["podlozka"]], modifiers=[bevel_mod(0.003, 1)])
        make_object("Kurt%d_Cary_BWF" % i, court_lines_bm(cx), coll, [M["cary"]])
        build_net(cx, i, coll, M)


# ----------------------------------------------------------------------------
# VYBAVENI: lavicky, rozhodcovske stolicky, ukazatele
# ----------------------------------------------------------------------------


def build_bench(bm_wood, bm_metal, x, y, rz, length, back):
    """Lavicka na kovovem ramu. Lokalni osy: delka podel X, sirka podel Y; opěradlo je na strane -Y (otoci se pomoci rz)."""
    c, s = math.cos(rz), math.sin(rz)

    def L(lx, ly, lz):
        return (x + lx * c - ly * s, y + lx * s + ly * c, lz)
    for k in (-1, 0, 1):
        add_box(bm_wood, L(0, k * 0.125, 0.45), (length, 0.115, 0.035), rot=(0, 0, rz))
    for sx in (-1, 1):
        lx = sx * (length / 2 - 0.14)
        for sy in (-1, 1):
            add_box(bm_metal, L(lx, sy * 0.19, 0.225), (0.045, 0.045, 0.45), rot=(0, 0, rz))
        add_box(bm_metal, L(lx, 0, 0.2), (0.04, 0.42, 0.04), rot=(0, 0, rz))
        add_box(bm_metal, L(lx, 0, 0.425), (0.04, 0.42, 0.04), rot=(0, 0, rz))
    add_box(bm_metal, L(0, 0, 0.2), (length - 0.2, 0.03, 0.03), rot=(0, 0, rz))
    if back:
        for sx in (-1, 1):
            add_box(bm_metal, L(sx * (length / 2 - 0.14), -0.19, 0.7), (0.045, 0.045, 0.5), rot=(0, 0, rz))
        for z in (0.68, 0.84):
            add_box(bm_wood, L(0, -0.215, z), (length, 0.03, 0.12), rot=(0, 0, rz))


def build_benches(coll, M):
    bw, bk = bmesh.new(), bmesh.new()
    # podel leve steny (x = -11,3), opěradlo ke zdi (tribuna je na prave strane)
    for y in (-6.0, -2.0, 2.0, 6.0):
        build_bench(bw, bk, -11.3, y, -math.pi / 2, 2.0, True)        # opěradlo na -X (ke zdi)
    # za zakladnou obou kurtu (zadni), opěradlo k zadni zdi (predni lavicka byla odstranena - misto ni jsou tabule lig)
    for cx in COURT_X:
        build_bench(bw, bk, cx, 9.3, math.pi, 1.5, True)                # opěradlo +Y (k zadní zdi)
    make_object("Vybaveni_Lavicky_Drevo", bw, coll, [M["lavicka_drevo"]], modifiers=[bevel_mod(0.004, 1)])
    make_object("Vybaveni_Lavicky_Kov", bk, coll, [M["ocel_tmava"]])


def build_umpire_chairs(coll, M):
    """Vyvysena stolicka u sloupku site; opěradlo na strane OD kurtu, stolek a zebrik k kurtu."""
    for i, cx in enumerate(COURT_X, start=1):
        out = -1.0 if i == 1 else 1.0                                  # kurt 1 (x=-6,6): ven je -X;  kurt 2 (x=1,4): ven je +X
        x = -10.4 if i == 1 else 5.4
        H = 1.5
        bf, bs, bw_ = bmesh.new(), bmesh.new(), bmesh.new()
        for sx in (-1, 1):
            for sy in (-1, 1):
                add_cyl(bf, (x + sx * 0.3, sy * 0.27, 0.0), (x + sx * 0.25, sy * 0.25, H), 0.022, 10)
        for z in (0.35, 0.8, 1.2):
            for sy in (-1, 1):
                add_box(bf, (x, sy * 0.27, z), (0.6, 0.025, 0.025))
            for sx in (-1, 1):
                add_box(bf, (x + sx * 0.3, 0, z), (0.025, 0.54, 0.025))
        add_box(bs, (x, 0, H + 0.02), (0.58, 0.58, 0.05))                         # sedak
        add_box(bs, (x + out * 0.27, 0, H + 0.33), (0.05, 0.52, 0.55), rot=(0, out * 0.08, 0))   # opěradlo od kurtu
        for sy in (-1, 1):
            add_box(bf, (x, sy * 0.3, H + 0.28), (0.45, 0.05, 0.04))
            add_box(bf, (x - out * 0.18, sy * 0.3, H + 0.15), (0.04, 0.04, 0.26))
        add_box(bw_, (x - out * 0.42, 0, H + 0.48), (0.32, 0.5, 0.02))             # stolek s tabulkou
        for sy in (-1, 1):
            add_box(bf, (x - out * 0.4, sy * 0.24, H + 0.24), (0.03, 0.03, 0.5))
        for k in range(4):                                                         # zebrik na strane ke kurtu
            add_box(bf, (x - out * (0.33 + k * 0.045), 0, 0.28 + k * 0.32), (0.05, 0.5, 0.03))
        for sy in (-1, 1):
            add_cyl(bf, (x - out * 0.44, sy * 0.25, 0.0), (x - out * 0.44 - out * 0.0, sy * 0.25, H), 0.015, 8)
        make_object("Vybaveni_Rozhodci_Stolicka_K%d_Konstrukce" % i, bf, coll, [M["chrom"]], smooth=True)
        make_object("Vybaveni_Rozhodci_Stolicka_K%d_Sedak" % i, bs, coll, [M["stolicka"]], modifiers=[bevel_mod(0.008, 2)])
        make_object("Vybaveni_Rozhodci_Stolicka_K%d_Stolek" % i, bw_, coll, [M["stolek"]])


def build_scoreboards(coll, M):
    """Dve zive tabule lig (VasaLiga, HobbyLiga) na celni stene, tam kde stala lavicka.
    Telo + ramecek + tmava obrazovka jsou z Blenderu; zivy obsah (vysledky) kresli web (JS) jako texturu
    na obrazovku a po stisku E otevre detail zapasu. Nastenne ukazatele nad kurty i stojany u vstupu uz nejsou."""
    y0 = -HY + 0.11                                        # vnitrni plocha celni steny
    for name, bx in (("VasaLiga", -5.3), ("HobbyLiga", -7.9)):
        bm = bmesh.new()
        add_box(bm, (bx, y0 + 0.03, 2.1), (2.45, 0.06, 1.55))
        make_object("Vybaveni_Tabule_%s_Telo" % name, bm, coll, [M["ukazatel_telo"]], modifiers=[bevel_mod(0.012, 2)])
        bm = bmesh.new()
        add_box(bm, (bx, y0 + 0.062, 2.1), (2.30, 0.004, 1.40))
        make_object("Vybaveni_Tabule_%s_Obrazovka" % name, bm, coll, [M["tabule_ekran"]])


# ----------------------------------------------------------------------------
# CVICEBNI ZONY vedle tribuny (u prave steny, x ~ +12)
# ----------------------------------------------------------------------------


def build_zones(coll, M):
    WX = 11.9                                            # vnitrni plocha prave steny
    # ---- A) rozcvicka a protahovani (pred tribunou, y -10.3 ... -7) ----
    bwood = bmesh.new()
    # sloupy (vazniky) stoji v y = -10 a -7.5 (sirka 0.28), zebriny jsou jen v poli mezi nimi: -9.86 ... -7.64
    for s in range(3):
        y0 = -9.80 + s * 0.72
        for dy in (0.0, 0.66):
            add_box(bwood, (WX, y0 + dy, 1.25), (0.05, 0.05, 2.5))
        for r in range(15):
            add_cyl(bwood, (WX - 0.02, y0, 0.2 + r * 0.155), (WX - 0.02, y0 + 0.66, 0.2 + r * 0.155), 0.016, 8)
    make_object("Zona_Rozcvicka_Zebriny", bwood, coll, [M["lavicka_drevo"]])
    bm = bmesh.new()                                      # zrcadlo na celni stene (nad nim a pod nim ramecek)
    add_box(bm, (8.2, -HY + 0.13, 1.5), (3.6, 0.02, 1.7))
    make_object("Zona_Rozcvicka_Zrcadlo", bm, coll, [M["zrcadlo"]])
    bm = bmesh.new()
    add_box(bm, (8.2, -HY + 0.13, 2.37), (3.7, 0.04, 0.05)); add_box(bm, (8.2, -HY + 0.13, 0.63), (3.7, 0.04, 0.05))
    make_object("Zona_Rozcvicka_Zrcadlo_Ram", bm, coll, [M["ocel_tmava"]])
    for i in range(4):
        bm = bmesh.new()
        add_box(bm, (10.2 - i * 0.75, -8.7, 0.008), (0.62, 1.75, 0.014))
        make_object("Zona_Rozcvicka_Jogamat_%d" % (i + 1), bm, coll, [M["podlozka_%d" % i]])
    for i, mk in enumerate(("valec_seda", "valec_modry", "valec_oranz")):
        bm = bmesh.new()
        yy = -9.6 + (i % 2) * 0.15
        add_cyl(bm, (7.5 - i * 0.25 - 0.3, yy, 0.075), (7.5 - i * 0.25 + 0.3, yy, 0.075), 0.075, 20)
        make_object("Zona_Rozcvicka_Valec_%d" % (i + 1), bm, coll, [M[mk]])
    for i, (x, y, mk) in enumerate(((7.2, -7.4, "gymball_modry"), (6.5, -7.7, "gymball_oranz"), (5.9, -7.1, "gymball_zeleny"))):
        bm = bmesh.new()
        add_sphere(bm, (x, y, 0.32), 0.32, 20, 14)
        make_object("Zona_Rozcvicka_Gymball_%d" % (i + 1), bm, coll, [M[mk]], smooth=True)
    t = text_object("Zona_Rozcvicka_Napis", "WARM-UP\nSTRETCH", (WX - 0.05, -8.75, 3.1), 0.30, M["led_zarivka"], coll, rot=(math.pi / 2, 0.0, -math.pi / 2))

    # ---- B) kondice a prace nohou (za tribunou, y 6.5 ... 10.8) ----
    bm = bmesh.new(); bd = bmesh.new()
    xr = 11.65
    for z in (0.55, 1.0):
        add_box(bm, (xr, 8.6, z), (0.5, 2.4, 0.05))
    for dy in (-1.15, 1.15):
        add_box(bm, (xr, 8.6 + dy, 0.52), (0.5, 0.05, 1.05))
    for i in range(6):
        for z in (0.6, 1.05):
            y = 7.5 + i * 0.36
            add_cyl(bd, (xr, y - 0.1, z + 0.04), (xr, y + 0.1, z + 0.04), 0.012, 8)
            for sy in (-1, 1):
                add_cyl(bd, (xr, y + sy * 0.1, z + 0.04), (xr, y + sy * 0.1 + sy * 0.05, z + 0.04), 0.055, 14)
    make_object("Zona_Kondice_Stojan_Cinky", bm, coll, [M["ocel_tmava"]])
    make_object("Zona_Kondice_Cinky", bd, coll, [M["kettle_cerna"]])
    bk, br = bmesh.new(), bmesh.new()
    for i in range(5):
        y = 7.0 + i * 0.5
        tgt = br if i == 2 else bk
        add_sphere(tgt, (10.4, y, 0.1), 0.1, 16, 12)
        add_tube(tgt, (10.4, y - 0.06, 0.2), (10.4, y + 0.06, 0.2), 0.012, 8)
    make_object("Zona_Kondice_Kettlebelly", bk, coll, [M["kettle_cerna"]], smooth=True)
    make_object("Zona_Kondice_Kettlebell_Cervena", br, coll, [M["kettle_cervena"]], smooth=True)
    bm = bmesh.new()
    for i, (h, w) in enumerate(((0.5, 0.45), (0.6, 0.6), (0.75, 0.75))):
        add_box(bm, (9.05 - i * 0.95, 10.1, h / 2), (w, w, h))
    make_object("Zona_Kondice_Plyo_Bedny", bm, coll, [M["bedna"]], modifiers=[bevel_mod(0.01, 1)])
    bm = bmesh.new()
    for k in range(9):
        add_box(bm, (9.55, 6.9 + k * 0.4, 0.007), (0.5, 0.04, 0.012))
    for sx in (-1, 1):
        add_box(bm, (9.55 + sx * 0.25, 8.7, 0.007), (0.03, 3.6, 0.012))
    make_object("Zona_Kondice_Zebrik_Agility", bm, coll, [M["zluta"]])
    bm = bmesh.new()
    for i in range(6):
        add_cone(bm, (7.85, 7.0 + i * 0.7, 0.0), 0.09, 0.2)
    make_object("Zona_Kondice_Kuzely", bm, coll, [M["oranz"]])
    for i, (x, y, mk) in enumerate(((11.1, 10.4, "medicinbal_zel"), (10.6, 10.5, "medicinbal_cerv"), (10.1, 10.3, "medicinbal_mod"))):
        bm = bmesh.new()
        add_sphere(bm, (x, y, 0.13), 0.13, 16, 12)
        make_object("Zona_Kondice_Medicinbal_%d" % (i + 1), bm, coll, [M[mk]], smooth=True)
    bm = bmesh.new()
    add_box(bm, (WX - 0.02, 8.55, 2.3), (0.05, 0.6, 0.06))
    for y in (8.3, 8.8):
        add_box(bm, (WX - 0.05, y, 1.8), (0.03, 0.012, 0.9))
        add_box(bm, (WX - 0.05, y, 1.3), (0.05, 0.05, 0.12))
    make_object("Zona_Kondice_TRX", bm, coll, [M["trx"]])
    text_object("Zona_Kondice_Napis", "CONDITIONING\nFOOTWORK", (WX - 0.05, 8.75, 3.1), 0.26, M["led_zarivka"], coll, rot=(math.pi / 2, 0.0, -math.pi / 2))


# ----------------------------------------------------------------------------
# SVETLA: linearni LED listy v ulickach, area lights sikmo dolu (anti-glare)
# ----------------------------------------------------------------------------


def build_lights(coll, M):
    lines = [(-11.0, [-28.0], "Levy_Okraj"), (-2.6, [28.0, -28.0], "Ulicka_Mezi_Kurty"), (6.0, [28.0], "Pravy_Okraj"), (9.8, [14.0], "Nad_Tribunou")]
    bm_body, bm_diff, bm_rod = bmesh.new(), bmesh.new(), bmesh.new()
    n_lights = 0
    for (x, tilts, name) in lines:
        ya = vault_y(x, 0.18) - 0.05
        z = ya - 1.05
        for i in range(RIB_N - 1):
            y = (RIB_YS[i] + RIB_YS[i + 1]) / 2
            add_box(bm_body, (x, y, z), (0.2, 2.2, 0.07))
            add_box(bm_diff, (x, y, z - 0.045), (0.15, 2.1, 0.015))
            for dy in (-0.9, 0.9):
                add_tube(bm_rod, (x, y + dy, z + 0.04), (x, y + dy, ya), 0.006, sides=6)
            for t in tilts:
                ld = bpy.data.lights.new("AreaLight_%s_%02d_%s" % (name, i + 1, "P" if t < 0 else "L"), "AREA")
                ld.shape = "RECTANGLE"
                ld.size = 0.3
                ld.size_y = 2.2
                ld.energy = LIGHT_POWER_W
                ld.color = (1.0, 0.96, 0.9)
                ld.spread = math.radians(140)
                lo = bpy.data.objects.new(ld.name, ld)
                lo.location = (x, y, z - 0.08)
                lo.rotation_euler = (0.0, math.radians(t), 0.0)
                coll.objects.link(lo)
                n_lights += 1
    make_object("Svetla_LED_Telesa", bm_body, coll, [M["led_telo"]])
    make_object("Svetla_LED_Difuzory_Emise", bm_diff, coll, [M["led_zarivka"]])
    make_object("Svetla_LED_Zavesy", bm_rod, coll, [M["ocel_tmava"]])
    return n_lights


# ----------------------------------------------------------------------------
# UV v metrech pro vsechny objekty, ktere je jeste nemaji (boxove mapovani)
# ----------------------------------------------------------------------------


def box_uv_all():
    n = 0
    for ob in bpy.data.objects:
        if ob.type != "MESH" or ob.get("has_uv") or ob.name.endswith("_Sit"):
            continue
        me = ob.data
        bm = bmesh.new()
        bm.from_mesh(me)
        uv = bm.loops.layers.uv.verify()
        for f in bm.faces:
            nx, ny, nz = (abs(c) for c in f.normal)
            for l in f.loops:
                x, y, z = l.vert.co
                if nx >= ny and nx >= nz:
                    l[uv].uv = (y, z)
                elif ny >= nz:
                    l[uv].uv = (x, z)
                else:
                    l[uv].uv = (x, y)
        bm.to_mesh(me)
        bm.free()
        n += 1
    return n


# ----------------------------------------------------------------------------
# HLAVNI FUNKCE
# ----------------------------------------------------------------------------


def main():
    clear_scene()
    M = build_materials()
    c_hala = make_collection("Hala")
    c_kurty = make_collection("Kurty")
    c_vyb = make_collection("Vybavení")
    c_svetla = make_collection("Světla")
    build_hall(c_hala, M)
    build_courts(c_kurty, M)
    build_tribune(c_vyb, M)
    build_benches(c_vyb, M)
    build_umpire_chairs(c_vyb, M)
    build_scoreboards(c_vyb, M)
    build_zones(c_vyb, M)
    n = build_lights(c_svetla, M)
    nuv = box_uv_all()
    if RENDER_SETUP:
        setup_render()
    print("Badmintonova hala v2 hotova: %d area lights, %d objektu, UV pro %d." % (n, len(bpy.data.objects), nuv))


if __name__ == "__main__":
    main()
