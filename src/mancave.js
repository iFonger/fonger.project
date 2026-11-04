import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const W = 1280, H = 720;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(W, H); renderer.setPixelRatio(1);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.style.margin = 0; document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x07070b);
const pm = new THREE.PMREMGenerator(renderer);
scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.28;
const cam = new THREE.PerspectiveCamera(70, W / H, 0.05, 120);

// ---------- helpers ----------
const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
function cv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function tx(c, rx = 1, ry = 1, srgb = true) { const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); t.anisotropy = 8; if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t; }
function noise(ctx, w, h, amt) { const d = ctx.getImageData(0, 0, w, h), a = d.data; for (let i = 0; i < a.length; i += 4) { const n = (rnd() - 0.5) * amt; a[i] += n; a[i + 1] += n; a[i + 2] += n; } ctx.putImageData(d, 0, 0); }
// procedural base textures (tile = 1 repeat)
const TEX = {};
TEX.concrete = (() => { const c = cv(512, 512), x = c.getContext('2d'); x.fillStyle = '#7d7e82'; x.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 40; i++) { const g = x.createRadialGradient(rnd() * 512, rnd() * 512, 5, rnd() * 512, rnd() * 512, 120); const px = rnd() * 512, py = rnd() * 512; const gg = x.createRadialGradient(px, py, 5, px, py, 90 + rnd() * 90); gg.addColorStop(0, rnd() > .5 ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.09)'); gg.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = gg; x.fillRect(0, 0, 512, 512); }
  noise(x, 512, 512, 22); x.strokeStyle = 'rgba(0,0,0,.35)'; x.lineWidth = 2; x.strokeRect(1, 1, 510, 510); return c; })();
TEX.parquet = (() => { const c = cv(512, 512), x = c.getContext('2d'); const pw = 256, ph = 42; for (let r = 0; r < 12; r++) { const off = (r % 3) * 85; for (let k = -1; k < 3; k++) { const hue = 24 + rnd() * 6, l = 28 + rnd() * 12; x.fillStyle = `hsl(${hue},48%,${l}%)`; x.fillRect(k * pw + off, r * ph, pw - 2, ph - 2);
      for (let g = 0; g < 14; g++) { x.strokeStyle = `rgba(30,12,0,${0.05 + rnd() * .1})`; x.lineWidth = 1; x.beginPath(); const gy = r * ph + rnd() * ph; x.moveTo(k * pw + off, gy); x.lineTo(k * pw + off + pw, gy + (rnd() - .5) * 3); x.stroke(); } } } noise(x, 512, 512, 10); return c; })();
TEX.brick = (() => { const c = cv(512, 512), x = c.getContext('2d'); x.fillStyle = '#3a2c28'; x.fillRect(0, 0, 512, 512); const bw = 128, bh = 42; for (let r = 0; r < 12; r++) for (let k = -1; k < 5; k++) { const ox = (r % 2) * 64; const h = 8 + rnd() * 8, l = 30 + rnd() * 14; x.fillStyle = `hsl(${h},${48 + rnd() * 14}%,${l}%)`; x.fillRect(k * bw + ox + 3, r * bh + 3, bw - 6, bh - 6); } noise(x, 512, 512, 26); return c; })();
TEX.carpet = (() => { const c = cv(256, 256), x = c.getContext('2d'); x.fillStyle = '#857f76'; x.fillRect(0, 0, 256, 256); noise(x, 256, 256, 26); return c; })();
TEX.slats = (() => { const c = cv(512, 512), x = c.getContext('2d'); for (let k = 0; k < 16; k++) { x.fillStyle = `hsl(${28 + rnd() * 5},38%,${24 + rnd() * 8}%)`; x.fillRect(k * 32, 0, 28, 512); x.fillStyle = '#0c0b0b'; x.fillRect(k * 32 + 28, 0, 4, 512); } noise(x, 512, 512, 10); return c; })();
TEX.oak = (() => { const c = cv(512, 512), x = c.getContext('2d'); const pw = 512, ph = 128; for (let r = 0; r < 4; r++) { const off = (r % 2) * 200; for (let k = -1; k < 2; k++) { x.fillStyle = `hsl(${32 + rnd() * 4},${28 + rnd() * 6}%,${66 + rnd() * 6}%)`; x.fillRect(k * pw + off, r * ph, pw - 2, ph - 2); for (let g = 0; g < 26; g++) { x.strokeStyle = `rgba(90,60,30,${0.04 + rnd() * .08})`; x.beginPath(); const gy = r * ph + rnd() * ph; x.moveTo(k * pw + off, gy); x.lineTo(k * pw + off + pw, gy + (rnd() - .5) * 6); x.stroke(); } } } noise(x, 512, 512, 8); return c; })();
TEX.greige = (() => { const c = cv(256, 256), x = c.getContext('2d'); x.fillStyle = '#a3a5ab'; x.fillRect(0, 0, 256, 256); noise(x, 256, 256, 8); return c; })();
TEX.graphite = (() => { const c = cv(256, 256), x = c.getContext('2d'); x.fillStyle = '#26272c'; x.fillRect(0, 0, 256, 256); noise(x, 256, 256, 10); return c; })();
TEX.plaster = (() => { const c = cv(256, 256), x = c.getContext('2d'); x.fillStyle = '#d9d8d4'; x.fillRect(0, 0, 256, 256); noise(x, 256, 256, 10); return c; })();
TEX.darkwall = (() => { const c = cv(256, 256), x = c.getContext('2d'); x.fillStyle = '#25252c'; x.fillRect(0, 0, 256, 256); noise(x, 256, 256, 12); return c; })();
TEX.pvc = (() => { const c = cv(256, 256), x = c.getContext('2d'); x.fillStyle = '#2f6b4f'; x.fillRect(0, 0, 256, 256); noise(x, 256, 256, 12); return c; })();
TEX.rubber = (() => { const c = cv(256, 256), x = c.getContext('2d'); x.fillStyle = '#23262f'; x.fillRect(0, 0, 256, 256); noise(x, 256, 256, 30); return c; })();
TEX.tile = (() => { const c = cv(256, 256), x = c.getContext('2d'); x.fillStyle = '#e4e4e2'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#a9a9a6'; x.lineWidth = 3; x.strokeRect(0, 0, 256, 256); noise(x, 256, 256, 8); return c; })();
function mat(name, tile, rough = 0.85, metal = 0, w = 1, h = 1, extra = {}) {
  const t = tx(TEX[name], w / tile, h / tile);
  return new THREE.MeshStandardMaterial(Object.assign({ map: t, bumpMap: t, bumpScale: name === 'brick' ? 3 : 0.8, roughness: rough, metalness: metal }, extra));
}
const S = (c, r = 0.6, m = 0, e) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: r, metalness: m }, e || {}));
const glow = (c, i = 1) => new THREE.MeshStandardMaterial({ color: 0x000000, emissive: c, emissiveIntensity: i, toneMapped: true });
function add(g, geo, m, x = 0, y = 0, z = 0, ry = 0, sh = true) { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.y = ry; o.castShadow = sh; o.receiveShadow = true; g.add(o); return o; }
const B = (g, w, h, d, m, x, y, z, ry = 0) => add(g, new THREE.BoxGeometry(w, h, d), m, x, y, z, ry);
const RB = (g, w, h, d, m, x, y, z, ry = 0, r = 0.04) => add(g, new THREE.BoxGeometry(w, h, d), m, x, y, z, ry) && add(g, new RoundedBoxGeometry(w, h, d, 3, r), m, x, y, z, ry);
const Cy = (g, rt, rb, h, m, x, y, z, seg = 24) => add(g, new THREE.CylinderGeometry(rt, rb, h, seg), m, x, y, z);
function label(g, text, w, h, color, x, y, z, ry = 0, font = 'bold 120px Arial Black, Arial', bg, lit = true) {
  const c = cv(1024, Math.round(1024 * h / w)), q = c.getContext('2d'); if (bg) { q.fillStyle = bg; q.fillRect(0, 0, c.width, c.height); }
  q.font = font; q.textAlign = 'center'; q.textBaseline = 'middle'; q.shadowColor = color; q.shadowBlur = 28; q.fillStyle = color; q.fillText(text, c.width / 2, c.height / 2); q.shadowBlur = 8; q.fillText(text, c.width / 2, c.height / 2);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: !bg, toneMapped: false })); m.position.set(x, y, z); m.rotation.y = ry; g.add(m);
  if (!lit) return m;
  const l = new THREE.PointLight(new THREE.Color(color), 3, 4, 2); l.position.set(x, y, z); l.position.add(new THREE.Vector3(Math.sin(ry), 0, Math.cos(ry)).multiplyScalar(0.4)); g.add(l); return m;
}
function plight(g, x, y, z, c, i, d = 12) { const l = new THREE.PointLight(c, i, d, 2); l.position.set(x, y, z); g.add(l); return l; }

const world = new THREE.Group(); scene.add(world);
const ceilings = new THREE.Group(); world.add(ceilings);

// ---------- wall with doorways ----------
const FW = [];
function wall(g, x1, z1, x2, z2, h, matFn, doors = [], t = 0.25, front = false) {
  const dx = x2 - x1, dz = z2 - z1, L = Math.hypot(dx, dz), ang = -Math.atan2(dz, dx);
  const segs = []; let p = 0; doors.sort((a, b) => a[0] - b[0]);
  for (const [a, b] of doors) { if (a > p) segs.push([p, a, 0]); segs.push([a, b, 1]); p = b; } if (p < L) segs.push([p, L, 0]);
  for (const [a, b, door] of segs) {
    const len = b - a, cx = x1 + dx / L * (a + b) / 2, cz = z1 + dz / L * (a + b) / 2;
    const yy = door ? 2.2 : 0, hh = door ? h - 2.2 : h;
    if (hh > 0.01) { const o = new THREE.Mesh(new THREE.BoxGeometry(len, hh, t), matFn(len, hh)); o.position.set(cx, yy + hh / 2, cz); o.rotation.y = ang; o.castShadow = o.receiveShadow = true; g.add(o); if (front) FW.push(o); }
    if (door) { for (const e of [a, b]) { const ex = x1 + dx / L * e, ez = z1 + dz / L * e; const o = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.2, t + 0.06), S(0x1c1c20, .6)); o.position.set(ex, 1.1, ez); o.rotation.y = ang; g.add(o); } }
  }
  // baseboard
  const o = new THREE.Mesh(new THREE.BoxGeometry(L, 0.12, t + 0.03), S(0x15151a, .7)); o.position.set((x1 + x2) / 2, 0.06, (z1 + z2) / 2); o.rotation.y = ang; g.add(o);
}
function floorPoly(g, pts, m) { const sh = new THREE.Shape(pts.map(p => new THREE.Vector2(p[0], -p[1]))); const geo = new THREE.ShapeGeometry(sh); geo.rotateX(-Math.PI / 2); const o = new THREE.Mesh(geo, m); o.receiveShadow = true; g.add(o); return o; }
function ceilPoly(pts, h, m) { const sh = new THREE.Shape(pts.map(p => new THREE.Vector2(p[0], -p[1]))); const geo = new THREE.ShapeGeometry(sh); geo.rotateX(-Math.PI / 2); m.side = THREE.DoubleSide; const o = new THREE.Mesh(geo, m); o.position.y = h; ceilings.add(o); }

// ---------- extra procedural textures (new) ----------
TEX.carpetDark = (() => { const c = cv(256, 256), x = c.getContext('2d'); x.fillStyle = '#1b1c22'; x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 6000; i++) { const l = 20 + rnd() * 22; x.fillStyle = `rgba(${l},${l},${l + 7},.5)`; x.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 1.4, 1 + rnd() * 2.2); }
  noise(x, 256, 256, 12); return c; })();
TEX.fabric = (() => { const c = cv(256, 256), x = c.getContext('2d'); x.fillStyle = '#3b3e46'; x.fillRect(0, 0, 256, 256);
  x.strokeStyle = 'rgba(0,0,0,.18)'; x.lineWidth = 1; for (let i = 0; i < 256; i += 4) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 256); x.stroke(); x.beginPath(); x.moveTo(0, i); x.lineTo(256, i); x.stroke(); }
  noise(x, 256, 256, 14); return c; })();
// one plywood sheet 1.22 x 2.44 m with a T-nut grid (20 cm)
TEX.plywood = (() => { const c = cv(512, 1024), x = c.getContext('2d'); const g = x.createLinearGradient(0, 0, 512, 0); g.addColorStop(0, '#c7a368'); g.addColorStop(.5, '#d2b077'); g.addColorStop(1, '#c39d62'); x.fillStyle = g; x.fillRect(0, 0, 512, 1024);
  for (let i = 0; i < 380; i++) { const px = rnd() * 512, py = rnd() * 1024; x.strokeStyle = `rgba(${95 + rnd() * 40},${60 + rnd() * 30},25,${0.05 + rnd() * .12})`; x.lineWidth = .6 + rnd() * 1.6; x.beginPath(); x.moveTo(px, py); x.bezierCurveTo(px + rnd() * 16 - 8, py + 120, px + rnd() * 16 - 8, py + 260, px + rnd() * 10 - 5, py + 380 + rnd() * 200); x.stroke(); }
  for (let k = 0; k < 4; k++) { const px = rnd() * 512, py = rnd() * 1024; for (let r = 3; r < 22; r += 4) { x.strokeStyle = `rgba(90,55,20,${.25 - r / 120})`; x.lineWidth = 1.5; x.beginPath(); x.ellipse(px, py, r * .7, r * 1.5, 0, 0, 7); x.stroke(); } }
  const sp = 512 / 1.22 * 0.2; for (let i = 0; i < 6; i++) for (let j = 0; j < 12; j++) { const px = 38 + i * sp, py = 40 + j * sp; if (px > 500) continue; x.fillStyle = 'rgba(30,18,8,.85)'; x.beginPath(); x.arc(px, py, 5, 0, 7); x.fill(); x.fillStyle = 'rgba(255,230,190,.35)'; x.beginPath(); x.arc(px - 1, py - 1, 1.6, 0, 7); x.fill(); }
  x.strokeStyle = 'rgba(40,24,10,.7)'; x.lineWidth = 3; x.strokeRect(1, 1, 510, 1022); noise(x, 512, 1024, 10); return c; })();
// crash-mat panel 1 x 2 m (seams + stitched edge)
TEX.matBlue = (() => { const c = cv(256, 512), x = c.getContext('2d'); x.fillStyle = '#244f9e'; x.fillRect(0, 0, 256, 512); noise(x, 256, 512, 26);
  x.strokeStyle = 'rgba(8,16,40,.9)'; x.lineWidth = 6; x.strokeRect(2, 2, 252, 508); x.strokeStyle = 'rgba(160,190,255,.35)'; x.lineWidth = 2; x.setLineDash([7, 6]); x.strokeRect(12, 12, 232, 488); return c; })();
TEX.steel = (() => { const c = cv(128, 128), x = c.getContext('2d'); x.fillStyle = '#5b6068'; x.fillRect(0, 0, 128, 128); noise(x, 128, 128, 18); return c; })();

// =====================================================================
//  1) MAIN HALL – architecture (hall 17.6 x 7.7 m + annex for the sofa)
// =====================================================================
const main = new THREE.Group(); world.add(main);
const MH = 3.2;
const MAIN_RECT = [[-8.8, -3.85], [8.8, -3.85], [8.8, 3.85], [-8.8, 3.85]];
const ANNEX_RECT = [[-3.9, -9.4], [4.3, -9.4], [4.3, -3.85], [-3.9, -3.85]];
let GC;   // gaming corner group (filled by the ported real desk setup)
function floorMat(name, tile, r) { const m = mat(name, tile, r, 0, 1, 1); m.map.repeat.set(1 / tile, 1 / tile); m.bumpMap = m.map; return m; }
const wallDark = (l, h) => mat('darkwall', 1.4, 0.9, 0, l, h);
const wallGraph = (l, h) => mat('graphite', 1.4, 0.85, 0, l, h);
const wallSlat = (l, h) => mat('slats', 1.0, 0.7, 0, l, h);

const carpet = floorMat('carpetDark', 0.6, 1);
floorPoly(main, MAIN_RECT, carpet); floorPoly(main, ANNEX_RECT, carpet);

wall(main, -8.8, -3.85, -3.9, -3.85, MH, wallDark);                       // north wall (left of the annex)
wall(main, -3.9, -3.85, -3.9, -9.4, MH, wallDark);                        // annex west
wall(main, -3.9, -9.4, 4.3, -9.4, MH, wallSlat);                          // annex TV wall (oak slats)
wall(main, 4.3, -9.4, 4.3, -3.85, MH, wallDark);                          // annex east
wall(main, 4.3, -3.85, 8.8, -3.85, MH, wallDark);                         // north wall (right)
wall(main, 8.8, -3.85, 8.8, 3.85, MH, wallGraph);                         // PC wall – straight, full length
wall(main, 8.8, 3.85, -8.8, 3.85, MH, wallDark, [[9.8, 11.6]], 0.25, true); // south wall, door to the foyer at x -2.8..-1.0
wall(main, -8.8, 3.85, -8.8, -3.85, MH, wallDark, [[2.65, 4.85]]);          // west wall, door to the locker block at z -1.0..1.2
for (const [px, pz] of [[-3.9, -3.85], [4.3, -3.85]]) { B(main, 0.5, MH, 0.5, S(0x2a2b31, .7), px, MH / 2, pz); B(main, 0.54, 0.12, 0.54, S(0x0d0d10, .6), px, 0.06, pz); }   // load-bearing columns

// ---- ceiling (two convex pieces) + layered light fixtures ----
const ceilM = () => S(0x1d1e24, .9);
ceilPoly(MAIN_RECT, MH, ceilM()); ceilPoly(ANNEX_RECT, MH, ceilM());
B(ceilings, 8.6, 0.34, 0.55, S(0x15161a, .85), 0.2, MH - 0.17, -3.85);       // beam joining the columns
// cove LED around the hall (violet) + annex (warm)
for (const [x, z, w, d, c] of [[0, -3.62, 17.2, 0.06, 0x6a4cff], [0, 3.62, 17.2, 0.06, 0x6a4cff], [-8.58, 0, 0.06, 7.2, 0x6a4cff], [8.58, 0, 0.06, 7.2, 0x6a4cff],
  [0.2, -9.18, 8.0, 0.06, 0xffc690], [-3.68, -6.6, 0.06, 5.2, 0xffc690], [4.08, -6.6, 0.06, 5.2, 0xffc690]]) B(ceilings, w, 0.025, d, glow(c, 3.5), x, MH - 0.015, z);
for (let i = 0; i < 6; i++) for (const z of [-1.8, 1.8]) Cy(ceilings, 0.07, 0.07, 0.02, glow(0xfff2e0, 8), -7 + i * 2.8 + 1.0, MH - 0.02, z);
for (let i = 0; i < 3; i++) for (const z of [-5.5, -8]) Cy(ceilings, 0.07, 0.07, 0.02, glow(0xfff2e0, 8), -2.4 + i * 2.6 + 0.2, MH - 0.02, z);

// ---- layered lighting: dim ambient (scene) + zone lights + coloured accents ----
scene.add(new THREE.AmbientLight(0xffffff, 0.55)); renderer.toneMappingExposure = 1.25; scene.environmentIntensity = 0.45;
plight(main, 0.2, 2.8, 0.0, 0xfff1de, 14, 14);         // general
plight(main, -6.2, 2.8, -2.2, 0xfff0dc, 10, 9);       // darts / beer pong
plight(main, -6.2, 2.8, 2.2, 0xfff0dc, 10, 9);        // hall of fame
plight(main, 0.2, 2.9, -6.6, 0xfff3e4, 16, 10);       // sofa / TV
plight(main, 4.9, 2.5, 2.5, 0xffc27a, 10, 8);         // bar (warm)
plight(main, 4.9, 0.35, 1.6, 0xb04cff, 3, 4);        // bar LED accent
plight(main, 7.3, 2.6, 0.0, 0x8a6cff, 5, 7);         // PC wall wash
plight(main, -0.6, 2.7, 0.4, 0x38d8ff, 3, 6);        // foosball cyan accent

// ===== ported from the real FUN room (desk setup, beer-pong table print, props) =====
const _box = (w, h, d, mat, x = 0, y = 0, z = 0, parent = world) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); parent.add(m); return m; };
function _ctex(w, h, fn, repeat) { const c = document.createElement('canvas'); c.width = w; c.height = h; fn(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); } return t; }
const _M = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: o.r ?? 0.6, metalness: o.m ?? 0.1, emissive: o.e ?? 0x000000, emissiveIntensity: o.ei ?? 1, side: o.side });
const _glowM = (color, k = 1) => new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), toneMapped: false });
function _texPlane(w, h, tex, parent, x, y, z, ry = 0) { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false })); m.position.set(x, y, z); m.rotation.y = ry; parent.add(m); return m; }
// ===== PORTED from the real FUN room: gaming corner =====
(function(){
const box=_box, ctex=_ctex, M=_M, glowM=_glowM, texPlane=_texPlane;
const UI={games:[["VAL","Valorant","#ff4655","#fff"],["LoL","League","#1b3a8a","#e9c46a"],["CS2","CS2","#e8793a","#1a0f05"],["RL","Rocket League","#1e7bff","#ff9a4a"],["ARK","Arkheron","#1fb89a","#032a22"],["S2","SMITE 2","#6a3ad0","#ffd68a"]]};
/* ============ gaming corner ============ */
const gc = new THREE.Group(); gc.position.set(8.19, 0, 0); gc.rotation.y = -Math.PI / 2; main.add(gc); GC = gc;
const deskM = M(0x0c1022, { r: 0.4, m: 0.4 });
box(1.9, 0.05, 0.85, deskM, 0, 0.75, 0, gc); [[-0.9, -0.38], [0.9, -0.38], [-0.9, 0.38], [0.9, 0.38]].forEach(([x, z]) => box(0.05, 0.75, 0.05, deskM, x, 0.375, z, gc));
box(1.9, 0.015, 0.02, glowM(0x3a5cff, 1.4), 0, 0.72, 0.43, gc);
const fonger = ctex(512, 300, (x, W, H) => {
  x.fillStyle = '#12062a'; x.fillRect(0, 0, W, H); x.strokeStyle = '#ff4fa6'; x.globalAlpha = 0.5; x.lineWidth = 2; x.beginPath(); x.moveTo(20, 40); x.quadraticCurveTo(70, 80, 40, 140); x.moveTo(490, 30); x.quadraticCurveTo(440, 90, 470, 150); x.stroke(); x.globalAlpha = 1;
  x.font = '900 100px Inter,Arial'; x.textAlign = 'center'; x.shadowColor = '#ff4f8a'; x.shadowBlur = 24; x.lineWidth = 6; x.strokeStyle = '#ff4f8a'; x.strokeText('FONGER', W / 2, 180); x.shadowBlur = 0; x.fillStyle = '#2a0a2e'; x.fillText('FONGER', W / 2, 180);
});
const GM = (UI && UI.games) || [];
const desktop = ctex(512, 300, (x, W, H) => {
  const g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#10163f'); g.addColorStop(0.55, '#2a1a6e'); g.addColorStop(1, '#5a1f78'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  GM.forEach((a, i) => { const px = 60 + (i % 3) * 150, py = 40 + Math.floor(i / 3) * 110; x.fillStyle = a[2]; x.beginPath(); x.roundRect(px, py, 90, 90, 20); x.fill(); x.fillStyle = a[3]; x.font = '900 30px Inter,Arial'; x.textAlign = 'center'; x.fillText(a[0], px + 45, py + 56); });
  x.fillStyle = 'rgba(5,6,15,.9)'; x.fillRect(0, H - 26, W, 26); x.fillStyle = '#38e8ff'; x.fillRect(10, H - 20, 14, 14);
});
function optLogo(file, w, h, parent, x, y, z, rx = 0, ry = 0, rz = 0) {
  new THREE.TextureLoader().load(file, t => {
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h * (t.image.height / t.image.width) / (h / w)), new THREE.MeshBasicMaterial({ map: t, transparent: true, toneMapped: false }));
    m.position.set(x, y, z); m.rotation.set(rx, ry, rz); parent.add(m);
  }, undefined, () => { });
}
const blk = M(0x07080e, { r: 0.55, m: 0.25 }), blkG = M(0x0b0d16, { r: 0.28, m: 0.6 });
const white = M(0xe9e9ee, { r: 0.45, m: 0.05 }), alu = M(0x15171f, { m: 0.8, r: 0.35 });
// left monitor: FONGER, slim bezel, round white disc stand (like the real desk)
function monitorStand(x, ry, tex) {
  const W = 0.56, H = 0.32;
  const g = new THREE.Group(); g.position.set(x, 0.775, -0.2); g.rotation.y = ry; gc.add(g);
  const sc = new THREE.Mesh(new RoundedBoxGeometry(W, H, 0.025, 3, 0.006), blkG); sc.position.y = 0.3; g.add(sc);
  texPlane(W - 0.018, H - 0.02, tex, g, 0, 0.3, 0.0135);
  box(0.03, 0.006, 0.001, M(0x1b1f2b, { m: 0.8 }), 0.0, 0.146, 0.0135, g);
  const led = new THREE.Mesh(new THREE.CircleGeometry(0.0035, 8), glowM(0x3dff9a, 2)); led.position.set(0.2, 0.145, 0.0135); g.add(led);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.014, 0.17, 12), white); neck.position.set(0, 0.2, -0.03); g.add(neck);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.115, 0.012, 40), white); disc.position.set(0, 0.006, -0.02); g.add(disc);
}
// right monitor: bigger, black arm clamped to the back edge of the desk
function monitorArm(x, ry, tex) {
  const W = 0.62, H = 0.355;
  const g = new THREE.Group(); g.position.set(x, 0.775, -0.2); g.rotation.y = ry; gc.add(g);
  const sc = new THREE.Mesh(new RoundedBoxGeometry(W, H, 0.028, 3, 0.006), blkG); sc.position.y = 0.36; g.add(sc);
  box(0.28, 0.2, 0.03, blk, 0, 0.36, -0.028, g);
  texPlane(W - 0.016, H - 0.018, tex, g, 0, 0.36, 0.0155);
  box(0.03, 0.006, 0.001, M(0x1b1f2b, { m: 0.8 }), 0, 0.1875 - 0.0, 0.0155, g);
  const P = new THREE.Group(); P.position.set(x, 0.775, -0.405); gc.add(P);
  box(0.06, 0.05, 0.05, alu, 0, -0.012, 0, P); box(0.05, 0.012, 0.085, alu, 0, -0.035, 0.0, P);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.42, 16), alu); pole.position.set(0, 0.21, 0); P.add(pole);
  const j1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.03, 16), alu); j1.position.set(0, 0.4, 0); P.add(j1);
  box(0.03, 0.022, 0.12, alu, 0, 0.4, 0.06, P);
  const j2 = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.03, 16), alu); j2.position.set(0, 0.4, 0.12); P.add(j2);
  box(0.03, 0.02, 0.06, alu, 0, 0.4, 0.15, P); box(0.1, 0.1, 0.012, alu, 0, 0.36, -0.05, g);
}
monitorStand(-0.52, 0.3, fonger); monitorArm(0.12, -0.04, desktop);
// small white wireless-charger disc + black cylinder (mic / speaker) as on the real desk
{ const d = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.047, 0.01, 32), white); d.position.set(-0.02, 0.78, -0.08); gc.add(d);
  const r = new THREE.Mesh(new THREE.RingGeometry(0.028, 0.033, 32), glowM(0x7a5cff, 1.2)); r.rotation.x = -Math.PI / 2; r.position.set(-0.02, 0.7855, -0.08); gc.add(r);
  const c = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.15, 24), M(0x0a0a0d, { r: 0.4, m: 0.6 })); c.position.set(0.5, 0.85, -0.14); gc.add(c);
  const cr = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, 0.012, 24), alu); cr.position.set(0.5, 0.92, -0.14); gc.add(cr); }
// desk mat
const matTex = ctex(1024, 440, (x, W, H) => {
  x.fillStyle = '#0c0d11'; x.fillRect(0, 0, W, H);
  x.strokeStyle = '#2b2e3a'; x.lineWidth = 4; x.setLineDash([12, 9]); x.strokeRect(12, 12, W - 24, H - 24);
  x.setLineDash([]); x.font = '700 64px Inter,Arial'; x.fillStyle = '#9aa0b4'; x.textAlign = 'right'; x.fillText('Logitech G', W - 52, H - 44);
});
const mat = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.38), new THREE.MeshStandardMaterial({ map: matTex, roughness: 0.95 })); mat.rotation.x = -Math.PI / 2; mat.position.set(-0.1, 0.7765, 0.2); gc.add(mat);
// keyboard – TKL, violet-blue per-key backlight (as photographed)
const kbTex = ctex(1480, 570, (x, W, H) => {
  x.fillStyle = '#0a0b10'; x.fillRect(0, 0, W, H);
  const U = 76, ox = 40, oy = 40; const G = '#6a4cff';
  const key = (cx, cy, w, lab, h = 1) => {
    const X = ox + cx * U + 3, Y = oy + cy * U + 3, Wd = w * U - 6, Hh = h * U - 6;
    x.shadowColor = G; x.shadowBlur = 16; x.fillStyle = '#12141c'; x.beginPath(); x.roundRect(X, Y, Wd, Hh, 10); x.fill(); x.shadowBlur = 0;
    x.strokeStyle = 'rgba(106,76,255,.65)'; x.lineWidth = 2; x.stroke();
    x.fillStyle = '#c4b8ff'; x.font = '600 21px Inter,Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(lab, X + Wd / 2, Y + Hh / 2 + 1);
  };
  const row = (cy, items, start = 0) => { let c = start; items.forEach(([l, w]) => { if (l !== null) key(c, cy, w, l); c += w; }); };
  row(0, [['Esc', 1], [null, 1], ['F1', 1], ['F2', 1], ['F3', 1], ['F4', 1], [null, .5], ['F5', 1], ['F6', 1], ['F7', 1], ['F8', 1], [null, .5], ['F9', 1], ['F10', 1], ['F11', 1], ['F12', 1], [null, .25], ['Prt', 1], ['Scr', 1], ['Pau', 1]]);
  const num = '1234567890'.split(''); row(1.5, [['`', 1], ...num.map(n => [n, 1]), ['-', 1], ['=', 1], ['⌫', 2], [null, .25], ['Ins', 1], ['Hm', 1], ['Pg↑', 1]]);
  row(2.5, [['Tab', 1.5], ...'QWERTYUIOP'.split('').map(n => [n, 1]), ['[', 1], [']', 1], ['\\', 1.5], [null, .25], ['Del', 1], ['End', 1], ['Pg↓', 1]]);
  row(3.5, [['Caps', 1.75], ...'ASDFGHJKL'.split('').map(n => [n, 1]), [';', 1], ["'", 1], ['Enter', 2.25]]);
  row(4.5, [['Shift', 2.25], ...'ZXCVBNM'.split('').map(n => [n, 1]), [',', 1], ['.', 1], ['/', 1], ['Shift', 2.75], [null, 1.25], ['↑', 1]]);
  row(5.5, [['Ctrl', 1.25], ['Win', 1.25], ['Alt', 1.25], ['', 6.25], ['Alt', 1.25], ['Fn', 1.25], ['Menu', 1.25], ['Ctrl', 1.25], [null, .25], ['←', 1], ['↓', 1], ['→', 1]]);
});
const kbG = new THREE.Group(); kbG.position.set(-0.2, 0.7765, 0.22); gc.add(kbG);
const kbBase = new THREE.Mesh(new RoundedBoxGeometry(0.365, 0.016, 0.142, 3, 0.006), M(0x0c0d12, { r: 0.4, m: 0.55 })); kbBase.position.y = 0.008; kbG.add(kbBase);
const kbTop = new THREE.Mesh(new THREE.PlaneGeometry(0.352, 0.352 * 570 / 1480 * 0.98), new THREE.MeshStandardMaterial({ map: kbTex, emissiveMap: kbTex, emissive: 0xffffff, emissiveIntensity: 0.55, roughness: 0.6 }));
kbTop.rotation.x = -Math.PI / 2; kbTop.position.y = 0.0166; kbG.add(kbTop);
optLogo('logos/razer.png', 0.03, 0.03, kbG, 0.14, 0.0168, -0.06, -Math.PI / 2);
// mouse – black, small G light
const mouseG = new THREE.Group(); mouseG.position.set(0.27, 0.7775, 0.21); mouseG.rotation.y = 0.12; gc.add(mouseG);
{
  const geo = new THREE.SphereGeometry(1, 40, 28); const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) { let x = p.getX(i), y = p.getY(i), z = p.getZ(i); y = Math.max(y, 0); const rear = z * 0.5 + 0.5; const w = 0.0225 + 0.0095 * rear; p.setXYZ(i, x * w * (1 - 0.18 * Math.max(0, y)), y * (0.0115 + 0.013 * rear), z * 0.0635); }
  geo.computeVertexNormals();
  mouseG.add(new THREE.Mesh(geo, M(0x0a0a0c, { r: 0.62, m: 0.1 })));
  box(0.0014, 0.0008, 0.034, M(0x000000), 0, 0.0185, -0.028, mouseG);
  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.0045, 0.0045, 0.006, 14), M(0x2a2c36, { r: 0.5, m: 0.5 })); wheel.rotation.z = Math.PI / 2; wheel.position.set(0, 0.0215, -0.026); mouseG.add(wheel);
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.0025, 10), glowM(0x3dff9a, 0.9)); dot.rotation.x = -Math.PI / 2; dot.position.set(0, 0.0195, 0.01); mouseG.add(dot);
  optLogo('logos/logitech-g.png', 0.012, 0.012, mouseG, 0, 0.0245, 0.032, -Math.PI / 2);
}
// headphones lying on the desk (orange cups), left of the keyboard
const hp = new THREE.Group(); hp.position.set(-0.7, 0.775, 0.26); hp.rotation.y = 0.5; gc.add(hp);
const og = M(0xd9792b, { r: 0.28, m: 0.85 }), padM = M(0x0c0c0e, { r: 0.9 });
{
  const hd = new THREE.Group(); hd.position.y = 0.05; hd.rotation.x = Math.PI / 2 - 0.15; hp.add(hd);
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.088, 0.0085, 10, 40, Math.PI), M(0x0a0a0c, { r: 0.7 })); band.position.y = 0.02; hd.add(band);
  [-1, 1].forEach(s => {
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.047, 0.044, 0.03, 36), og); cup.rotation.z = Math.PI / 2; cup.position.set(s * 0.093, -0.06, 0); hd.add(cup);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.005, 8, 32), M(0x0c0c0e, { m: 0.7, r: 0.35 })); ring.rotation.y = Math.PI / 2; ring.position.set(s * 0.108, -0.06, 0); hd.add(ring);
    const ep = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.048, 0.022, 36), padM); ep.rotation.z = Math.PI / 2; ep.position.set(s * 0.075, -0.06, 0); hd.add(ep);
  });
}
// PC on the desk – black mid tower, front with three violet hex-mesh fans, glass side to the left
const flow = [];
const PCV = 'n';
const tw = new THREE.Group(); tw.position.set(0.83, 0.775 + 0.25, -0.15); tw.rotation.y = 0.28; gc.add(tw);
{
  const CW = 0.22, CH = 0.5, CD = 0.46;
  const shell = M(0x0a0b12, { r: 0.4, m: 0.55 });
  box(CW, 0.014, CD, M(0x0a0b12, { r: 0.6, m: 0.4 }), 0, CH / 2 - 0.007, 0, tw); box(CW, 0.012, CD, shell, 0, -CH / 2 + 0.006, 0, tw);
  box(0.01, CH, CD, shell, CW / 2 - 0.005, 0, 0, tw); box(CW, CH, 0.01, M(0x07080d), 0, 0, -CD / 2 + 0.005, tw);
  [-1, 1].forEach(s => box(0.012, CH, 0.012, shell, -CW / 2 + 0.006, 0, s * (CD / 2 - 0.006), tw));
  // front panel with tall fan inset
  box(CW, CH, 0.012, M(0x0b0c14, { r: 0.5, m: 0.4 }), 0, 0, CD / 2 - 0.006, tw);
  const hexTex = ctex(256, 256, (x, W, H) => {
    x.fillStyle = '#17104a'; x.fillRect(0, 0, W, H);
    const rg = x.createRadialGradient(W / 2, H / 2, 10, W / 2, H / 2, W / 2); rg.addColorStop(0, '#9a7bff'); rg.addColorStop(1, '#4a2cff'); x.fillStyle = rg; x.fillRect(0, 0, W, H);
    x.strokeStyle = '#1a0f5a'; x.lineWidth = 3; const r = 14;
    for (let j = -1; j < 14; j++) for (let i = -1; i < 14; i++) { const cx = i * r * 1.75 + (j % 2) * r * 0.87, cy = j * r * 1.5; x.beginPath(); for (let k = 0; k < 6; k++) { const a = Math.PI / 3 * k + Math.PI / 6; x.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); } x.closePath(); x.stroke(); }
    x.fillStyle = '#05061a'; x.beginPath(); for (let k = 0; k < 6; k++) { const a = Math.PI / 3 * k; x.lineTo(W / 2 + Math.cos(a) * 34, H / 2 + Math.sin(a) * 34); } x.closePath(); x.fill();
  });
  box(0.13, CH - 0.04, 0.004, M(0x08091a), 0.02, 0, CD / 2 + 0.0005, tw);
  [0.155, 0, -0.155].forEach(y => { const f = new THREE.Mesh(new THREE.CircleGeometry(0.064, 40), new THREE.MeshBasicMaterial({ map: hexTex, toneMapped: false, color: new THREE.Color(1.1, 1.1, 1.4) })); f.position.set(0.02, y, CD / 2 + 0.0032); tw.add(f); });
  // glass side (-x) with AIO pump ring, tubes, GPU, RAM
  const sx = -CW / 2 + 0.03;
  const mb = box(0.006, CH - 0.06, CD - 0.1, M(0x10131f, { r: 0.6, m: 0.3 }), CW / 2 - 0.03, 0, -0.03, tw);
  const pump = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 0.03, 32), M(0x0a0b12, { r: 0.3, m: 0.7 })); pump.rotation.z = Math.PI / 2; pump.position.set(sx + 0.03, 0.09, 0.07); tw.add(pump);
  const pr = new THREE.Mesh(new THREE.RingGeometry(0.019, 0.03, 32), glowM(0x4a6cff, 1.8)); pr.rotation.y = -Math.PI / 2; pr.position.set(sx + 0.0125, 0.09, 0.07); tw.add(pr);
  const tube = (pts) => tw.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(...p))), 16, 0.0075, 8), M(0xdfe3ee, { r: 0.5 })));
  tube([[sx + 0.03, 0.12, 0.09], [sx + 0.03, 0.2, 0.1], [sx + 0.03, 0.235, 0.05]]); tube([[sx + 0.03, 0.12, 0.05], [sx + 0.03, 0.2, 0.0], [sx + 0.03, 0.235, -0.04]]);
  const gpu = new THREE.Mesh(new RoundedBoxGeometry(0.04, 0.05, 0.3, 2, 0.006), M(0x0a0b10, { r: 0.35, m: 0.7 })); gpu.position.set(sx + 0.03, -0.06, 0.02); tw.add(gpu);
  box(0.004, 0.004, 0.26, glowM(0xf4f6ff, 0.9), sx + 0.008, -0.06, 0.02, tw);
  [0, 0.016].forEach(z => box(0.012, 0.11, 0.008, glowM(0x6a4cff, 1.2), sx + 0.03, 0.13, -0.09 - z, tw));
  const rad = box(0.04, 0.03, 0.3, M(0x0b0c12, { r: 0.5, m: 0.5 }), 0, CH / 2 - 0.03, -0.02, tw);
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(CD - 0.02, CH - 0.02), new THREE.MeshPhysicalMaterial({ color: 0x0a1020, transparent: true, opacity: 0.2, roughness: 0.04, clearcoat: 1, side: THREE.DoubleSide, depthWrite: false })); glass.rotation.y = -Math.PI / 2; glass.position.set(-CW / 2 + 0.002, 0, 0); tw.add(glass);
  const frame = (y, h) => box(0.006, h, CD, shell, -CW / 2 + 0.003, y, 0, tw); frame(CH / 2 - 0.005, 0.012);
}
{ const pl = new THREE.PointLight(0x5a3cff, 3.2, 3.0, 1.6); pl.position.set(0.85, 1.2, -0.6); gc.add(pl); }
// gaming chair
const ch = new THREE.Group(); ch.position.set(0.05, 0, 0.9); ch.rotation.y = 0.22; gc.add(ch);
{
  const leath = M(0x0d1124, { r: 0.55, m: 0.05 }), acc = M(0x1a2f8a, { r: 0.5, e: 0x0a1a66, ei: 0.12 }), mt = M(0x07080d, { r: 0.4, m: 0.7 });
  const seat = new THREE.Mesh(new RoundedBoxGeometry(0.52, 0.09, 0.5, 4, 0.04), leath); seat.position.y = 0.5; ch.add(seat);
  [-1, 1].forEach(s => { const bo = new THREE.Mesh(new RoundedBoxGeometry(0.06, 0.1, 0.46, 3, 0.025), acc); bo.position.set(s * 0.25, 0.54, 0); ch.add(bo); });
  const back = new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.72, 0.09, 4, 0.04), leath); back.position.set(0, 0.92, 0.26); back.rotation.x = -0.12; ch.add(back);
  [-1, 1].forEach(s => { const bo = new THREE.Mesh(new RoundedBoxGeometry(0.07, 0.5, 0.1, 3, 0.03), acc); bo.position.set(s * 0.235, 0.88, 0.235); bo.rotation.x = -0.12; ch.add(bo); });
  const head = new THREE.Mesh(new RoundedBoxGeometry(0.26, 0.17, 0.08, 3, 0.04), acc); head.position.set(0, 1.28, 0.3); head.rotation.x = -0.12; ch.add(head);
  [-1, 1].forEach(s => { box(0.04, 0.2, 0.04, mt, s * 0.3, 0.68, 0.02, ch); const arm = new THREE.Mesh(new RoundedBoxGeometry(0.07, 0.03, 0.26, 2, 0.012), leath); arm.position.set(s * 0.3, 0.79, -0.03); ch.add(arm); });
  const lift = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.34, 12), mt); lift.position.y = 0.3; ch.add(lift);
  for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; const leg = box(0.3, 0.03, 0.045, mt, 0, 0.06, 0, ch); leg.position.set(Math.sin(a) * 0.15, 0.07, Math.cos(a) * 0.15); leg.rotation.y = a - Math.PI / 2; const w = new THREE.Mesh(new THREE.SphereGeometry(0.028, 10, 8), M(0x111218, { r: 0.8 })); w.position.set(Math.sin(a) * 0.31, 0.03, Math.cos(a) * 0.31); ch.add(w); }
}
// rug under the desk area
{ const rug = new THREE.Mesh(new THREE.CircleGeometry(1.5, 64), new THREE.MeshStandardMaterial({ map: ctex(512, 512, (x, W, H) => { const g = x.createRadialGradient(W / 2, H / 2, 20, W / 2, H / 2, W / 2); g.addColorStop(0, '#1a1f4e'); g.addColorStop(1, '#0c0f2a'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.strokeStyle = '#3a5cff'; x.globalAlpha = 0.6; x.lineWidth = 8; x.beginPath(); x.arc(W / 2, H / 2, W / 2 - 14, 0, 7); x.stroke(); }), roughness: 1 }));
  rug.rotation.x = -Math.PI / 2; rug.position.set(0.1, 0.006, 0.75); gc.add(rug); }
})();

function makeBP(){ const bp = new THREE.Group();
const box=_box, M=_M;

{
  const L = 2.4, W = 0.6, H = 0.7;
  const black = M(0x0b0c10, { r: 0.38, m: 0.65 }), rubber = M(0x050506, { r: 0.9 });
  const tex = new THREE.TextureLoader().load('fun-print.jpg'); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  const slab = new THREE.Mesh(new RoundedBoxGeometry(L, 0.042, W, 4, 0.014), black); slab.position.y = H - 0.021; bp.add(slab);
  const pr = new THREE.Mesh(new THREE.PlaneGeometry(L - 0.036, W - 0.036), new THREE.MeshPhysicalMaterial({ map: tex, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.35 }));
  pr.rotation.x = -Math.PI / 2; pr.position.y = H + 0.0012; bp.add(pr);
  const seamM = M(0x07080c); [-L / 4, 0, L / 4].forEach(x => box(0.005, 0.0012, W - 0.02, seamM, x, H + 0.0016, 0, bp));
  [-1, 1].forEach(s => box(L - 0.1, 0.03, 0.02, black, 0, H - 0.06, s * (W / 2 - 0.045), bp));
  const lx = L / 2 - 0.1, lz = W / 2 - 0.045;
  const cyl = (r, h, mat, x, y, z) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 16), mat); m.position.set(x, y, z); bp.add(m); return m; };
  [-1, 0, 1].forEach(a => [-1, 1].forEach(b => { const x = a * lx, z = b * lz; cyl(0.0175, 0.38, black, x, H - 0.23, z); cyl(0.024, 0.05, black, x, 0.36, z); cyl(0.0145, 0.36, black, x, 0.18, z); cyl(0.019, 0.02, rubber, x, 0.01, z); }));
  const tube = (a, b, r) => { const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A); const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, d.length(), 10), black); m.position.copy(A.clone().add(B).multiplyScalar(0.5)); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); bp.add(m); };
  [-lx, 0, lx].forEach(x => tube([x, 0.2, -lz], [x, 0.2, lz], 0.011)); [-lx, lx].forEach(x => tube([x, 0.56, -lz], [x, 0.56, lz], 0.009));
}
return bp; }
function cup(g, x, y, z, col) { Cy(g, 0.045, 0.034, 0.11, new THREE.MeshStandardMaterial({ color: col, roughness: .4, side: THREE.DoubleSide }), x, y + 0.055, z, 16); }
function trophy(g, x, y, z, s = 1, col = 0xd4a62a) {
  const pts = [[0.001, 0], [0.07, 0], [0.07, 0.015], [0.03, 0.03], [0.02, 0.12], [0.05, 0.15], [0.07, 0.17], [0.09, 0.26], [0.1, 0.34], [0.08, 0.36], [0.075, 0.34], [0.07, 0.25], [0.05, 0.18], [0.001, 0.17]].map(p => new THREE.Vector2(p[0], p[1]));
  const m = add(g, new THREE.LatheGeometry(pts, 24), new THREE.MeshStandardMaterial({ color: col, roughness: .18, metalness: 1 }), x, y, z); m.scale.setScalar(s); return m; }
function vit(g, w, h) { B(g, w, h, 0.03, S(0x0e0e10, .5), 0, h / 2 + 0.2, -0.18); for (const sx of [-1, 1]) B(g, 0.05, h, 0.4, S(0x0e0e10, .5), sx * (w / 2 - 0.025), h / 2 + 0.2, 0); B(g, w, 0.06, 0.4, S(0x0e0e10, .5), 0, h + 0.2, 0); B(g, w, 0.2, 0.4, S(0x0e0e10, .5), 0, 0.1, 0); B(g, w - 0.12, h - 0.2, 0.02, new THREE.MeshStandardMaterial({ color: 0xbfe8ff, transparent: true, opacity: .12, roughness: .02 }), 0, h / 2 + 0.2, 0.2);
  const rows = 4; for (let r = 0; r < rows; r++) { const y = 0.45 + r * ((h - 0.5) / rows); B(g, w - 0.1, 0.02, 0.34, S(0x3a3a40, .3, .4), 0, y, 0); B(g, w - 0.1, 0.01, 0.01, glow(0xdfeaff, 5), 0, y - 0.015, 0.14); for (let k = 0; k < 4; k++) { if ((r + k) % 3 === 0) trophy(g, -w / 2 + 0.25 + k * (w - 0.5) / 3, y + 0.01, 0, 0.3 + rnd() * 0.12, [0xd4a62a, 0xc0c4c8][k % 2]); else B(g, 0.16, 0.12 + rnd() * 0.05, 0.14, S([0x2b4fff, 0xff3b3b, 0x1ea05a, 0xc9843a][k], .5), -w / 2 + 0.25 + k * (w - 0.5) / 3, y + 0.07, 0); } } }

// ---- game props ----
// --- FOOSBALL ---
(function () {
  const g = new THREE.Group(); g.position.set(-0.6, 0, 0.4); g.rotation.y = Math.PI / 2; main.add(g);
  const cb = (() => { const c = cv(512, 256), q = c.getContext('2d'); q.fillStyle = '#2e7d3a'; q.fillRect(0, 0, 512, 256); q.strokeStyle = 'rgba(255,255,255,.8)'; q.lineWidth = 3; q.strokeRect(14, 14, 484, 228); q.beginPath(); q.moveTo(256, 14); q.lineTo(256, 242); q.stroke(); q.beginPath(); q.arc(256, 128, 34, 0, 7); q.stroke(); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  B(g, 1.35, 0.22, 0.78, S(0x1a1a1c, .4), 0, 0.84, 0); const f = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 0.58), new THREE.MeshStandardMaterial({ map: cb, roughness: .6 })); f.rotation.x = -Math.PI / 2; f.position.y = 0.955; g.add(f);
  for (const [x, z] of [[-.62, -.34], [.62, -.34], [-.62, .34], [.62, .34]]) B(g, 0.08, 0.84, 0.08, S(0x1a1a1c, .4), x, 0.42, z);
  const rods = [-0.5, -0.25, 0, 0.25, 0.5]; rods.forEach((rx, i) => { const rd = Cy(g, 0.009, 0.009, 0.95, S(0xcccccc, .15, 1), rx * 1.0, 1.02, 0); rd.rotation.x = Math.PI / 2; for (let k = 0; k < (i == 1 ? 5 : 3); k++) { const zz = -0.2 + k * (0.4 / (i == 1 ? 4 : 2)); B(g, 0.03, 0.09, 0.04, S(i % 2 ? 0xe03030 : 0x2f6bd9, .5), rx, 1.0, zz); } for (const zz of [-0.5, 0.5]) Cy(g, 0.03, 0.03, 0.08, S(0x111), rx, 1.02, zz).rotation.x = Math.PI / 2; });
})();
// --- DARTS (right wall) ---
(function () {
  const g = new THREE.Group(); g.position.set(-8.675, 0, -2.6); g.rotation.y = Math.PI / 2; main.add(g);
  B(g, 1.0, 1.0, 0.1, S(0x1d1e22, .6), 0, 1.73, 0.0); B(g, 0.08, 1.0, 0.25, S(0x1d1e22, .6), -0.5, 1.73, 0.09); B(g, 0.08, 1.0, 0.25, S(0x1d1e22, .6), 0.5, 1.73, 0.09);
  const c = cv(512, 512), q = c.getContext('2d'); q.translate(256, 256); const cols = ['#e8e1c0', '#111'];
  for (let r = 0; r < 20; r++) { for (const [r1, r2, c1, c2] of [[240, 215, '#d12', '#093'], [215, 150, '#e8e1c0', '#111'], [150, 135, '#d12', '#093'], [135, 40, '#e8e1c0', '#111']]) { q.beginPath(); q.moveTo(0, 0); q.arc(0, 0, r1, (r - 5.5) * Math.PI / 10, (r - 4.5) * Math.PI / 10); q.closePath(); q.fillStyle = r % 2 ? c1 : c2; q.fill(); q.beginPath(); q.moveTo(0, 0); q.arc(0, 0, r2, (r - 5.5) * Math.PI / 10, (r - 4.5) * Math.PI / 10); q.closePath(); q.fillStyle = r % 2 ? (r2 == 215 || r2 == 135 ? '#e8e1c0' : cols[1]) : cols[0]; } }
  q.setTransform(1, 0, 0, 1, 0, 0); q.fillStyle = '#111'; q.fillRect(0, 0, 512, 512);
  q.translate(256, 256); const seg = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
  for (let i = 0; i < 20; i++) { const a0 = (i - 0.5) * Math.PI / 10 - Math.PI / 2, a1 = a0 + Math.PI / 10; const even = i % 2 === 0; const rings = [[250, 220, even ? '#c8202a' : '#0b8a3e'], [220, 150, even ? '#111' : '#e8e1c0'], [150, 125, even ? '#c8202a' : '#0b8a3e'], [125, 40, even ? '#111' : '#e8e1c0']]; for (const [rr, r0, col] of rings) { q.beginPath(); q.arc(0, 0, rr, a0, a1); q.arc(0, 0, r0, a1, a0, true); q.closePath(); q.fillStyle = col; q.fill(); } }
  q.beginPath(); q.arc(0, 0, 40, 0, 7); q.fillStyle = '#0b8a3e'; q.fill(); q.beginPath(); q.arc(0, 0, 16, 0, 7); q.fillStyle = '#c8202a'; q.fill(); 
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const bd = new THREE.Mesh(new THREE.CircleGeometry(0.225, 48), new THREE.MeshStandardMaterial({ map: t, roughness: .8 })); bd.position.set(0, 1.73, 0.06); g.add(bd);
  label(g, 'DARTS', 0.8, 0.28, '#ff3b3b', 0, 2.45, 0.05, 0, 'bold 180px Arial Black');
  B(g, 0.6, 0.45, 0.04, S(0x161c18, .8), 0.95, 1.6, 0.05); B(g, 0.01, 0.01, 0.01, S(0)); // chalk board
  // oche line (2.37 m) + step
  B(g, 0.9, 0.012, 0.04, S(0xeeeeee, .5), 0, 0.007, 2.37); B(g, 0.9, 0.012, 0.01, glow(0xff3b3b, 3), 0, 0.012, 2.35);
  plight(g, 0, 2.5, 0.5, 0xffe9c2, 4, 5);
})();

// =====================================================================
//  2) MAIN HALL – furniture & zones
// =====================================================================
const fabricMat = (col, rough = .95) => { const m = mat('fabric', 0.5, rough, 0, 1, 1, { color: col }); return m; };
const RBm = (g, w, h, d, m, x, y, z, r = 0.07, rx = 0, rz = 0) => { const o = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, r), m); o.position.set(x, y, z); o.rotation.x = rx; o.rotation.z = rz; o.castShadow = o.receiveShadow = true; g.add(o); return o; };

// ---------- U-shaped sofa + rug + coffee table + TV ----------
let rugMat;
function buildSofaZone() {
  const g = new THREE.Group(); g.position.set(0.2, 0, -4.3); g.rotation.y = Math.PI; main.add(g);   // local +z points to the TV
  const base = fabricMat(0x4a4d56), cush = fabricMat(0x686c78), cush2 = fabricMat(0x737885);
  // ONE continuous extruded U base (5.4 x 2.6 m, seat depth 1.0)
  const U = [[-2.7, 0], [2.7, 0], [2.7, 2.6], [1.7, 2.6], [1.7, 1.0], [-1.7, 1.0], [-1.7, 2.6], [-2.7, 2.6]];
  const sh = new THREE.Shape(U.map(p => new THREE.Vector2(p[0], -p[1])));
  const bg = new THREE.ExtrudeGeometry(sh, { depth: 0.24, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 4, curveSegments: 4 });
  bg.rotateX(-Math.PI / 2); const bm = new THREE.Mesh(bg, base); bm.position.y = 0.1; bm.castShadow = bm.receiveShadow = true; g.add(bm);
  for (const [x, z] of [[-2.6, 0.1], [2.6, 0.1], [-2.6, 2.5], [2.6, 2.5], [-1.8, 0.9], [1.8, 0.9]]) Cy(g, 0.03, 0.03, 0.08, S(0x0b0b0d, .4, .6), x, 0.04, z, 10);
  const shadowStrip = glow(0x6a4cff, 0.9); B(g, 5.2, 0.012, 0.02, shadowStrip, 0, 0.075, 0.0 + 0.03);   // faint under-glow
  // backrests: rear + both outer sides (one continuous wrap), square corners overlap-free
  RBm(g, 5.4, 0.58, 0.28, base, 0, 0.67, 0.14, 0.09);
  for (const sx of [-1, 1]) RBm(g, 0.28, 0.58, 2.32, base, sx * 2.56, 0.67, 1.44, 0.09);
  // seat cushions: centre run, CORNER connectors, arm runs
  for (let i = 0; i < 3; i++) RBm(g, 1.1, 0.17, 0.7, cush, -1.13 + i * 1.13, 0.5, 0.65, 0.07);
  for (const sx of [-1, 1]) {
    RBm(g, 0.72, 0.17, 0.7, cush2, sx * 2.06, 0.5, 0.65, 0.07);                    // corner connector
    RBm(g, 0.72, 0.17, 0.78, cush, sx * 2.06, 0.5, 1.4, 0.07); RBm(g, 0.72, 0.17, 0.78, cush, sx * 2.06, 0.5, 2.2, 0.07);
    RBm(g, 0.22, 0.46, 0.9, cush, sx * 2.27, 0.9, 1.2, 0.09, 0, -sx * 0.16);   // arm back cushions (leaning outwards)
    RBm(g, 0.22, 0.46, 0.9, cush, sx * 2.27, 0.9, 2.1, 0.09, 0, -sx * 0.16);
  }
  for (let i = 0; i < 5; i++) RBm(g, 0.95, 0.5, 0.2, cush, -1.9 + i * 0.95, 0.88, 0.37, 0.09, -0.2);
  // throw pillows
  const pcol = [0xc98a2c, 0x2a6f78, 0xe6e0d2, 0x7a2f4a, 0x2a6f78, 0xc98a2c];
  [[-2.1, .75, .98, .45, -0.5], [-1.3, .72, .55, .4, .3], [2.15, .75, .97, .45, .5], [1.3, .72, .55, .4, -.3], [-2.2, .72, 2.35, .4, 1.4], [2.2, .72, 2.35, .4, -1.4]].forEach(([x, y, z, s, r], i) => {
    const p = RBm(g, s, s, 0.13, fabricMat(pcol[i], 1), x, y, z, 0.05, -0.3); p.rotation.y = r; });
  // massive dark-wood coffee table
  const wood = mat('slats', 1.0, .45, 0, 1.6, 0.9, { color: 0x4a3322 });
  RBm(g, 1.5, 0.1, 0.85, wood, 0, 0.44, 1.75, 0.03); RBm(g, 1.2, 0.3, 0.6, S(0x120d0a, .6), 0, 0.24, 1.75, 0.02); RBm(g, 1.4, 0.04, 0.8, S(0x1a120d, .7), 0, 0.1, 1.75, 0.01);
  B(g, 0.32, 0.05, 0.22, S(0x2a5a8a, .6), -0.35, 0.51, 1.7); B(g, 0.3, 0.04, 0.2, S(0xc0402a, .6), -0.35, 0.555, 1.7); Cy(g, 0.12, 0.09, 0.08, S(0x24262b, .4, .3), 0.35, 0.53, 1.8, 24);
  // separate rug with placeholder for a custom game texture
  const c = cv(1024, 700), q = c.getContext('2d'); const gr = q.createLinearGradient(0, 0, 1024, 700); gr.addColorStop(0, '#16182a'); gr.addColorStop(1, '#2a1740'); q.fillStyle = gr; q.fillRect(0, 0, 1024, 700);
  q.strokeStyle = '#7a5cff'; q.lineWidth = 8; q.setLineDash([26, 16]); q.strokeRect(40, 40, 944, 620); q.setLineDash([]);
  q.fillStyle = '#9aa0c8'; q.textAlign = 'center'; q.textBaseline = 'middle'; q.font = 'bold 74px Arial'; q.fillText('GAME RUG', 512, 300); q.font = '38px Arial'; q.fillText('placeholder – window.setRugTexture("moje.jpg")', 512, 380);
  const rt = new THREE.CanvasTexture(c); rt.colorSpace = THREE.SRGBColorSpace; rt.anisotropy = 8;
  rugMat = new THREE.MeshStandardMaterial({ map: rt, roughness: 1 });
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 2.6), rugMat); rug.rotation.set(-Math.PI / 2, 0, Math.PI); rug.position.set(0, 0.014, 1.75); rug.receiveShadow = true; g.add(rug);
  const rb = new THREE.Mesh(new THREE.PlaneGeometry(3.86, 2.66), S(0x0e0f12, 1)); rb.rotation.x = -Math.PI / 2; rb.position.set(0, 0.011, 1.75); g.add(rb);
}
buildSofaZone();
window.setRugTexture = (url) => new THREE.TextureLoader().load(url, t => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; rugMat.map = t; rugMat.needsUpdate = true; });

(function buildTV() {   // 86" TV on the annex wall + media console + soundbar
  const g = new THREE.Group(); g.position.set(0.2, 0, -9.2); main.add(g);
  B(g, 2.5, 1.45, 0.05, S(0x050506, .3, .5), 0, 1.65, 0);
  const c = cv(640, 360), q = c.getContext('2d'); const gr = q.createLinearGradient(0, 0, 640, 360); gr.addColorStop(0, '#0b2a4a'); gr.addColorStop(.5, '#4a1f8f'); gr.addColorStop(1, '#e8602e'); q.fillStyle = gr; q.fillRect(0, 0, 640, 360);
  q.fillStyle = 'rgba(255,255,255,.9)'; q.font = 'bold 54px Arial'; q.textAlign = 'center'; q.fillText('MAN CAVE', 320, 190);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const sc = new THREE.Mesh(new THREE.PlaneGeometry(2.42, 1.36), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); sc.position.set(0, 1.65, 0.03); g.add(sc);
  B(g, 2.8, 0.5, 0.42, S(0x15161a, .55), 0, 0.3, 0.17); B(g, 2.8, 0.03, 0.44, S(0x4a3322, .45), 0, 0.565, 0.17);
  B(g, 1.2, 0.07, 0.1, S(0x0b0b0d, .4, .5), 0, 0.62, 0.17);                                       // soundbar
  for (const sx of [-1.75, 1.75]) { B(g, 0.3, 1.5, 0.22, S(0x101114, .5), sx, 0.78, 0.12); B(g, 0.22, 0.22, 0.02, S(0x0a0a0c, .3, .6), sx, 1.2, 0.24); Cy(g, 0.09, 0.09, 0.02, S(0x1d1e22, .5), sx, 0.6, 0.235, 24).rotation.x = Math.PI / 2; }
  B(g, 2.6, 0.03, 0.03, glow(0xff5ac8, 3), 0, 0.9 + 0.0, 0.0 + 0.0 + 0.01).visible = false;
  B(g, 2.6, 0.02, 0.02, glow(0x6a4cff, 3.5), 0, 0.88, -0.0);   // glow line under the screen
  B(g, 2.7, 0.012, 0.01, glow(0xff5ac8, 3), 0, 0.5, 0.39);
  label(g, 'MAN CAVE', 1.9, 0.34, '#ff4fa6', 0, 2.75, 0.03, 0, 'bold 130px Arial Black', undefined, false);
})();

// ---------- PC wall: the real desk (unchanged centre) stretched along the whole wall ----------
function buildPCWall() {
  const gc = GC; const deskM = _M(0x0c1022, { r: 0.4, m: 0.4 });
  for (const sx of [-1, 1]) {
    const cx = sx * 1.775;
    _box(1.65, 0.05, 0.85, deskM, cx, 0.75, 0, gc);
    _box(0.05, 0.75, 0.05, deskM, sx * 2.575, 0.375, -0.38, gc); _box(0.05, 0.75, 0.05, deskM, sx * 2.575, 0.375, 0.38, gc);
    _box(1.65, 0.015, 0.02, _glowM(0x3a5cff, 1.4), cx, 0.72, 0.43, gc);                           // LED under the desk edge
  }
  // LED floor glow under the whole desk
  const gl = new THREE.Mesh(new THREE.PlaneGeometry(5.3, 0.9), new THREE.MeshBasicMaterial({ color: 0x2a3cff, transparent: true, opacity: .16, toneMapped: false })); gl.rotation.x = -Math.PI / 2; gl.position.set(0, 0.012, 0.05); gc.add(gl);
  // screens
  const stand = (x, h) => { Cy(gc, 0.012, 0.012, 0.22, S(0x0d0e12, .4, .8), x, 0.86, -0.28, 12); B(gc, 0.2, 0.01, 0.16, S(0x0d0e12, .4, .8), x, 0.78, -0.2); };
  const scr = (draw, w, h) => { const c = cv(1024, Math.round(1024 * h / w)); draw(c.getContext('2d'), c.width, c.height); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; };
  const tex1 = scr((x, W, H) => { const g = x.createLinearGradient(0, 0, W, 0); g.addColorStop(0, '#05103a'); g.addColorStop(.5, '#4a1f8f'); g.addColorStop(1, '#ff4f6a'); x.fillStyle = g; x.fillRect(0, 0, W, H);
    x.fillStyle = 'rgba(255,255,255,.12)'; for (let i = 0; i < 40; i++) x.fillRect(rnd() * W, rnd() * H * .7, 40 + rnd() * 120, 3);
    x.fillStyle = '#fff'; x.font = 'bold 70px Arial'; x.fillText('ULTRAWIDE 49"', 60, H - 70); x.strokeStyle = '#38e8ff'; x.lineWidth = 4; x.beginPath(); x.arc(W / 2, H / 2, 40, 0, 7); x.stroke(); }, 1.2, 0.34);
  const tex2 = scr((x, W, H) => { x.fillStyle = '#0b0d1c'; x.fillRect(0, 0, W, H); x.fillStyle = '#38e8ff'; for (let i = 0; i < 14; i++) x.fillRect(40, 60 + i * 110, 200 + rnd() * 600, 18); x.fillStyle = '#ff4f8a'; x.font = 'bold 56px Arial'; x.fillText('STATS', 40, 46); }, 0.34, 0.6);
  // ultrawide, curved (partial cylinder), left extension
  { const R = 1.1, ang = 1.2 / R, h = 0.34; const geo = new THREE.CylinderGeometry(R, R, h, 48, 1, true, Math.PI - ang / 2, ang); const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex1, toneMapped: false, side: THREE.BackSide })); m.scale.x = -1; m.position.set(-1.78, 1.12, -0.25 + R); gc.add(m);
    // backside shell + bezel glow
    const shell = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.02, R + 0.02, h + 0.03, 48, 1, true, Math.PI - ang / 2, ang), S(0x08090d, .4, .5)); shell.material.side = THREE.DoubleSide; shell.scale.x = -1; shell.position.copy(m.position); gc.add(shell);
    stand(-1.78, 0); B(gc, 1.24, 0.012, 0.03, glow(0x6a4cff, 3), -1.78, 0.94, -0.3); }
  // two portrait/side monitors on arms, right extension
  for (const [x, ry] of [[1.45, 0.35], [2.1, 0.7]]) {
    const gg = new THREE.Group(); gg.position.set(x, 0.775, -0.18); gg.rotation.y = ry; gc.add(gg);
    RBm(gg, 0.36, 0.62, 0.025, S(0x07080b, .4, .5), 0, 0.5, 0, 0.006); const s = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.6), new THREE.MeshBasicMaterial({ map: tex2, toneMapped: false })); s.position.set(0, 0.5, 0.0135); gg.add(s);
    Cy(gg, 0.012, 0.012, 0.25, S(0x0d0e12, .4, .8), 0, 0.1, -0.03, 12); B(gg, 0.18, 0.01, 0.14, S(0x0d0e12, .4, .8), 0, 0.004, -0.02); B(gg, 0.36, 0.012, 0.02, glow(0xff4f8a, 3), 0, 0.19, -0.02);
  }
  // wall: RGB backlit panels + neon sign
  const pw = (z, c) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.6), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(1.3), transparent: true, opacity: .85, toneMapped: false })); m.position.set(8.665, 1.9, z); m.rotation.y = -Math.PI / 2; main.add(m); };
  [[-2.1, 0x6a4cff], [-1.05, 0x38b8ff], [0, 0xff4fa6], [1.05, 0x38b8ff], [2.1, 0x6a4cff]].forEach(([z, c]) => pw(z, c));
  B(main, 0.03, 0.03, 5.4, glow(0x6a4cff, 3.5), 8.66, 1.2, 0); B(main, 0.03, 0.03, 5.4, glow(0xff4fa6, 3.5), 8.66, 2.7, 0);
  label(main, 'FONGER', 2.4, 0.5, '#ff4fa6', 8.64, 2.95, 0, -Math.PI / 2, 'bold 150px Arial Black', undefined, false);
}
buildPCWall();

// ---------- Kallax shelves with simplified collectible figurines ----------
const figCache = [];
function figure(kind) {
  if (!figCache[kind]) {
    const parts = [];
    const P = (geo, col, x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, rz = 0) => { geo.scale(sx, sy, sz); geo.rotateX(rx); geo.rotateZ(rz); geo.translate(x, y, z); const n = geo.attributes.position.count, a = new Float32Array(n * 3), c = new THREE.Color(col); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } geo.setAttribute('color', new THREE.BufferAttribute(a, 3)); parts.push(geo); };
    const skin = 0xf0c8a0, bx = (w, h, d) => new THREE.BoxGeometry(w, h, d), sp = (r) => new THREE.SphereGeometry(r, 12, 10), cn = (r, h) => new THREE.ConeGeometry(r, h, 8), cy = (r, h) => new THREE.CylinderGeometry(r, r, h, 12);
    P(cy(0.05, 0.012), 0x15151a, 0, 0.006, 0);
    if (kind === 0) {        // orange ninja with spiky blond hair
      P(bx(0.024, 0.07, 0.03), 0x1c3a8a, -0.016, 0.047, 0); P(bx(0.024, 0.07, 0.03), 0x1c3a8a, 0.016, 0.047, 0); P(bx(0.07, 0.075, 0.04), 0xf08a1c, 0, 0.12, 0); P(bx(0.02, 0.07, 0.02), 0xf08a1c, -0.045, 0.12, 0); P(bx(0.02, 0.07, 0.02), 0xf08a1c, 0.045, 0.12, 0);
      P(sp(0.036), skin, 0, 0.19, 0); P(bx(0.07, 0.014, 0.04), 0x2a3a6a, 0, 0.2, 0.005);
      for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2; P(cn(0.014, 0.05), 0xffd23a, Math.sin(a) * 0.026, 0.225, Math.cos(a) * 0.022, 1, 1, 1, Math.cos(a) * 0.5, -Math.sin(a) * 0.5); } }
    else if (kind === 1) {   // caped hero
      P(bx(0.07, 0.08, 0.04), 0x2a4ed0, 0, 0.1, 0); P(bx(0.024, 0.06, 0.03), 0x15197a, -0.016, 0.04, 0); P(bx(0.024, 0.06, 0.03), 0x15197a, 0.016, 0.04, 0); P(bx(0.09, 0.12, 0.008), 0xd01c2a, 0, 0.1, -0.026, 1, 1, 1, 0.1);
      P(sp(0.034), skin, 0, 0.17, 0); P(sp(0.036), 0x14141a, 0, 0.18, -0.006, 1, .8, 1); P(bx(0.03, 0.03, 0.01), 0xffd23a, 0, 0.11, 0.022); }
    else if (kind === 2) {   // mage with hat and staff
      P(cn(0.05, 0.14), 0x6a2fb0, 0, 0.08, 0); P(sp(0.032), skin, 0, 0.17, 0); P(cn(0.044, 0.1), 0x2a1470, 0, 0.245, 0, 1, 1, 1, -0.15); P(cy(0.056, 0.008), 0x2a1470, 0, 0.2, 0);
      P(cy(0.004, 0.24), 0x5a3a20, 0.06, 0.12, 0.02); P(sp(0.014), 0x38e8ff, 0.06, 0.25, 0.02); }
    else if (kind === 3) {   // mecha robot
      P(bx(0.07, 0.08, 0.05), 0xb8bcc8, 0, 0.1, 0); P(bx(0.03, 0.06, 0.035), 0x5a5e6c, -0.02, 0.04, 0); P(bx(0.03, 0.06, 0.035), 0x5a5e6c, 0.02, 0.04, 0); P(bx(0.05, 0.045, 0.045), 0xe6e8ee, 0, 0.17, 0);
      P(bx(0.036, 0.01, 0.01), 0x38e8ff, 0, 0.175, 0.024); P(bx(0.025, 0.07, 0.025), 0xd01c2a, -0.05, 0.11, 0); P(bx(0.025, 0.07, 0.025), 0xd01c2a, 0.05, 0.11, 0); P(cn(0.008, 0.04), 0xffd23a, 0, 0.215, 0); }
    else if (kind === 4) {   // swordsman, green hair
      P(bx(0.07, 0.085, 0.04), 0x15161c, 0, 0.1, 0); P(bx(0.024, 0.06, 0.03), 0x0b3a22, -0.016, 0.04, 0); P(bx(0.024, 0.06, 0.03), 0x0b3a22, 0.016, 0.04, 0); P(sp(0.034), skin, 0, 0.17, 0);
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; P(cn(0.012, 0.04), 0x2ee060, Math.sin(a) * 0.022, 0.2, Math.cos(a) * 0.02, 1, 1, 1, Math.cos(a) * .6, -Math.sin(a) * .6); }
      P(bx(0.008, 0.2, 0.012), 0xdfe6f0, 0.06, 0.13, 0.02, 1, 1, 1, 0, -0.25); }
    else if (kind === 5) {   // chibi big head
      P(bx(0.04, 0.05, 0.03), 0xf06aa8, 0, 0.04, 0); P(sp(0.055), skin, 0, 0.12, 0); P(sp(0.058), 0xf06aa8, 0, 0.135, -0.008, 1, .85, 1);
      P(sp(0.01), 0x111111, -0.02, 0.12, 0.05); P(sp(0.01), 0x111111, 0.02, 0.12, 0.05); }
    else {                   // blind-box / collector box
      P(bx(0.09, 0.12, 0.06), 0x1d1f28, 0, 0.07, 0); P(bx(0.07, 0.07, 0.005), 0xffd23a, 0, 0.08, 0.031); P(sp(0.025), 0xd01c2a, 0, 0.08, 0.034, 1, 1, .3); P(bx(0.09, 0.015, 0.062), 0x38e8ff, 0, 0.14, 0); }
    const merged = mergeGeometries(parts, false); parts.forEach(p => p.dispose());
    figCache[kind] = new THREE.Mesh(merged, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .5, metalness: .05 }));
  }
  const m = figCache[kind].clone(); m.castShadow = true; return m;
}
function kallax(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = -Math.PI / 2; main.add(g);
  const COLS = 3, ROWS = 6, P = 0.36, T = 0.028, D = 0.39, W = COLS * P + T, Hh = ROWS * P + T;
  const wood = S(0x241f1c, .55, .05), back = S(0x100e0d, .8);
  for (let i = 0; i <= COLS; i++) B(g, T, Hh, D, wood, -W / 2 + T / 2 + i * P, Hh / 2, 0);
  for (let j = 0; j <= ROWS; j++) B(g, W, T, D, wood, 0, T / 2 + j * P, 0);
  B(g, W, Hh, 0.01, back, 0, Hh / 2, -D / 2 + 0.01);
  for (let j = 1; j <= ROWS; j++) B(g, W - 2 * T, 0.006, 0.014, glow(0xffd9a8, 2.2), 0, j * P - 0.004, D / 2 - 0.05);
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
    const cx = -W / 2 + T / 2 + (c + 0.5) * P, fy = T + r * P + (r === 0 ? 0 : 0);
    const n = rnd() < 0.55 ? 2 : 1;
    for (let k = 0; k < n; k++) { const f = figure(Math.floor(rnd() * 7)); f.position.set(cx + (n === 2 ? (k ? 0.08 : -0.08) : 0), fy, 0.03 + (rnd() - .5) * .06); f.rotation.y = (rnd() - .5) * .8; f.scale.setScalar(.95 + rnd() * .25); g.add(f); }
    if (rnd() < 0.25) B(g, 0.1, 0.02, 0.07, S([0x2b4fff, 0xff3b3b, 0x1ea05a][Math.floor(rnd() * 3)], .6), cx, fy + 0.2 + 0.0, -0.12).visible = false;
  }
}
kallax(8.475, 3.17); kallax(8.475, -3.17);

// ---------- Beer pong: 2 printed tables, cups in tight 4-3-2-1 triangles on the back edges ----------
function beerPongZone() {
  const SP = 0.092, ROW = SP * Math.sqrt(3) / 2;
  for (const tx of [-6.95, -5.75]) {
    const tg = new THREE.Group(); tg.position.set(tx, 0, 0); tg.rotation.y = Math.PI / 2; main.add(tg);
    tg.add(makeBP());
    for (const end of [-1, 1]) {
      const col = end < 0 ? 0xe0302f : 0x2f6bd9;   // red cups on one end, blue on the other (like Red Solo Cups)
      for (let row = 0; row < 4; row++) { const n = 4 - row; for (let k = 0; k < n; k++) cup(tg, end * (1.08 - row * ROW), 0.702, (k - (n - 1) / 2) * SP, col); }
    }
    for (const bz of [-0.3, 0.3]) Cy(tg, 0.017, 0.017, 0.002, S(0xffffff, .3), 0, 0.703, bz, 12).visible = false;
  }
  plight(main, -6.35, 2.6, 0, 0xfff0d8, 4, 5);
  B(main, 2.2, 0.012, 0.012, glow(0xffc94a, 2.5), -6.35, MH - 0.35, 0).visible = true;
}
beerPongZone();

// ---------- Hall of Fame (south wall) + pedestals + glass cabinets ----------
(function () {
  const mw = new THREE.Group(); mw.position.set(-6.4, 0, 3.725); mw.rotation.y = Math.PI; main.add(mw);
  B(mw, 3.3, 2.5, 0.06, S(0x151317, .8), 0, 1.5, 0.03);
  for (let i = 0; i < 12; i++) B(mw, 0.02, 2.4, 0.03, S(0x2a2420, .5), -1.6 + i * 0.29, 1.5, 0.075);
  for (let r = 0; r < 3; r++) for (let k = 0; k < 8; k++) { const mx = -1.4 + k * 0.4, my = 2.2 - r * 0.38; const col = [0xd4a62a, 0xc0c4c8, 0xb26a35][(k + r) % 3]; B(mw, 0.05, 0.22, 0.01, S([0x2b4fff, 0xff3b3b, 0x1ea05a][(k * 2 + r) % 3], .6), mx, my + 0.15, 0.09); Cy(mw, 0.07, 0.07, 0.015, new THREE.MeshStandardMaterial({ color: col, roughness: .22, metalness: 1 }), mx, my, 0.1).rotation.x = Math.PI / 2; }
  B(mw, 3.2, 0.03, 0.18, S(0x3a2d22, .4), 0, 1.05, 0.14); for (let i = 0; i < 6; i++) trophy(mw, -1.3 + i * 0.5, 1.065, 0.14, 0.38 + (i % 2) * 0.08, [0xd4a62a, 0xc0c4c8, 0xb26a35][i % 3]);
  label(mw, 'HALL OF FAME', 2.6, 0.38, '#ffc94a', 0, 2.78, 0.08, 0, 'bold 125px Arial Black', undefined, false);
  for (const px of [-8.35, -4.45]) { const pg = new THREE.Group(); pg.position.set(px, 0, 3.35); main.add(pg);
    B(pg, 0.5, 1.0, 0.5, S(0x101012, .4), 0, 0.5, 0); B(pg, 0.5, 0.01, 0.5, glow(0xaee6ff, 3), 0, 1.0, 0); trophy(pg, 0, 1.01, 0, 1.0); B(pg, 0.5, 0.7, 0.5, new THREE.MeshStandardMaterial({ color: 0xbfe8ff, transparent: true, opacity: .13, roughness: .02, metalness: 0 }), 0, 1.36, 0); }
  for (const [vx, vz, rY] of [[-7.7, -3.55, 0], [-6.15, -3.55, 0], [-3.59, -6.6, Math.PI / 2], [4.0, -6.6, -Math.PI / 2]]) { const vg = new THREE.Group(); vg.position.set(vx, 0, vz); vg.rotation.y = rY; main.add(vg); vit(vg, 1.3, 2.1); }
})();

// ---------- BAR: modern lounge bar with LED, back cabinet, tap ----------
function buildBar() {
  const g = new THREE.Group(); g.position.set(4.9, 0, 3.725); g.rotation.y = Math.PI; main.add(g);   // local +z = into the room
  const matte = S(0x16171b, .85, .1), oak = mat('slats', 1.0, .6, 0, 3.6, 1.0, { color: 0xb08a5a }), walnut = mat('slats', 1.0, .35, 0, 4.2, 0.9, { color: 0x5b3a24 }), steel = S(0xc9ccd2, .22, 1);
  // counter
  RBm(g, 3.4, 1.0, 0.6, matte, -0.3, 0.5, 1.65, 0.02);
  const front = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.9, 0.04), oak); front.position.set(-0.3, 0.5, 1.97); g.add(front);
  RBm(g, 3.8, 0.06, 0.95, walnut, -0.3, 1.06, 1.83, 0.02);
  B(g, 3.3, 0.014, 0.014, glow(0xff4fd8, 4), -0.3, 1.02, 2.28 - 0.0);   // LED under the top edge
  B(g, 3.3, 0.02, 0.02, glow(0x38d8ff, 4), -0.3, 0.06, 2.0);            // plinth LED
  B(g, 3.4, 0.08, 0.03, S(0x0b0b0d, .5), -0.3, 0.04, 1.96);
  const rail = Cy(g, 0.022, 0.022, 3.2, steel, -0.3, 0.22, 2.3, 12); rail.rotation.z = Math.PI / 2;     // foot rail
  for (const x of [-1.7, 1.1]) Cy(g, 0.018, 0.018, 0.2, steel, x, 0.12, 2.3, 10);
  // back cabinet (dark, with oak slat doors) + countertop
  RBm(g, 3.6, 0.9, 0.5, matte, 0, 0.45, 0.27, 0.02); const bd = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.8, 0.03), oak); bd.position.set(0, 0.45, 0.535); g.add(bd);
  B(g, 3.7, 0.05, 0.56, walnut, 0, 0.925, 0.28);
  B(g, 3.5, 0.012, 0.012, glow(0x6a4cff, 4), 0, 0.03, 0.55);
  // illuminated upper display cabinet: bottles + glasses
  const panelTex = (() => { const c = cv(512, 256), q = c.getContext('2d'); const gr = q.createLinearGradient(0, 0, 512, 0); gr.addColorStop(0, '#ff3ea0'); gr.addColorStop(.5, '#7a4cff'); gr.addColorStop(1, '#2ab8ff'); q.fillStyle = gr; q.fillRect(0, 0, 512, 256); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  B(g, 3.6, 1.7, 0.05, S(0x0b0b0d, .6), 0, 1.85, 0.03);
  const bp = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 1.55), new THREE.MeshBasicMaterial({ map: panelTex, toneMapped: false, color: 0xcccccc })); bp.position.set(0, 1.85, 0.06); g.add(bp);
  for (const sx of [-1, 1]) B(g, 0.04, 1.7, 0.34, S(0x0b0b0d, .5), sx * 1.8, 1.85, 0.2); B(g, 3.64, 0.04, 0.34, S(0x0b0b0d, .5), 0, 2.72, 0.2);
  const bodyG = new THREE.CylinderGeometry(0.036, 0.036, 0.2, 10), neckG = new THREE.CylinderGeometry(0.012, 0.02, 0.1, 10), glG = new THREE.CylinderGeometry(0.036, 0.026, 0.1, 12, 1, true);
  const NB = 48, bodies = new THREE.InstancedMesh(bodyG, new THREE.MeshStandardMaterial({ roughness: .15, metalness: .1, transparent: true, opacity: .88 }), NB), necks = new THREE.InstancedMesh(neckG, bodies.material, NB), glasses = new THREE.InstancedMesh(glG, new THREE.MeshStandardMaterial({ color: 0xdfeaff, roughness: .05, transparent: true, opacity: .45, side: THREE.DoubleSide }), 20);
  const m4 = new THREE.Matrix4(), bcol = [0x2a8a3a, 0x7a3a12, 0xc9a02a, 0x3a5acf, 0xb8201f, 0x1a1a1a, 0xdfe6ea, 0x8a2a8a]; let bi = 0, gi = 0;
  for (let sh = 0; sh < 3; sh++) { const y = 1.4 + sh * 0.5; B(g, 3.4, 0.025, 0.3, S(0x0d0d10, .3, .3), 0, y, 0.2); B(g, 3.4, 0.008, 0.01, glow(0xffffff, 4), 0, y - 0.02, 0.34);
    for (let k = 0; k < 16 && bi < NB; k++) { const x = -1.55 + k * 0.206; if (sh === 0 && k > 9) { m4.makeTranslation(x, y + 0.05, 0.2); glasses.setMatrixAt(gi++, m4); continue; }
      m4.makeTranslation(x, y + 0.113, 0.2); bodies.setMatrixAt(bi, m4); bodies.setColorAt(bi, new THREE.Color(bcol[(k + sh * 3) % bcol.length])); m4.makeTranslation(x, y + 0.263, 0.2); necks.setMatrixAt(bi, m4); necks.setColorAt(bi, new THREE.Color(bcol[(k + sh * 3) % bcol.length])); bi++; } }
  bodies.count = bi; necks.count = bi; glasses.count = gi; g.add(bodies, necks, glasses);
  // built-in stainless tap tower with drip tray
  const tap = new THREE.Group(); tap.position.set(1.2, 0.95, 0.3); g.add(tap);
  Cy(tap, 0.05, 0.05, 0.3, steel, 0, 0.15, 0, 20); const arm = Cy(tap, 0.014, 0.014, 0.16, steel, 0, 0.3, 0.07, 10); arm.rotation.x = Math.PI / 2;
  for (const [x, c] of [[-0.025, 0xffc94a], [0.025, 0xff3b3b]]) { Cy(tap, 0.007, 0.007, 0.1, S(c, .4, .4), x, 0.38, 0, 8); Cy(tap, 0.01, 0.01, 0.025, steel, x, 0.26, 0.14, 8); }
  B(tap, 0.3, 0.02, 0.2, steel, 0, 0.0, 0.18); B(tap, 0.26, 0.004, 0.16, S(0x15161a, .4), 0, 0.012, 0.18);
  label(g, 'BAR', 0.9, 0.3, '#38d8ff', -0.3, 2.95, 0.05, 0, 'bold 170px Arial Black', undefined, false);
  // stools with backrests
  const leather = S(0x1d1d21, .55, .1), chrome = S(0xcfd2d8, .2, 1);
  for (const x of [-1.6, -0.75, 0.1, 0.95]) { const s = new THREE.Group(); s.position.set(x, 0, 2.85); s.rotation.y = Math.PI + (rnd() - .5) * .3; g.add(s);
    Cy(s, 0.22, 0.2, 0.08, leather, 0, 0.74, 0, 28); Cy(s, 0.21, 0.21, 0.025, S(0x0b0b0d, .5), 0, 0.69, 0, 24); Cy(s, 0.025, 0.025, 0.66, chrome, 0, 0.35, 0, 10); Cy(s, 0.2, 0.22, 0.03, chrome, 0, 0.015, 0, 24);
    const rr = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.012, 8, 24), chrome); rr.rotation.x = Math.PI / 2; rr.position.set(0, 0.3, 0); s.add(rr);
    RBm(s, 0.34, 0.22, 0.06, leather, 0, 1.0, -0.2, 0.03, -0.12); for (const sx of [-1, 1]) { Cy(s, 0.01, 0.01, 0.26, chrome, sx * 0.16, 0.86, -0.18, 8); const ar = RBm(s, 0.04, 0.03, 0.26, leather, sx * 0.18, 0.99, -0.06, 0.012); } }
  // lighting for the bar
}
buildBar();

// =====================================================================
//  3) BOULDER HALL – hexagonal hall, broken plywood walls, central boulder
// =====================================================================
const BO = { cx: -10.8, cz: -11.5, R: 7, H: 6.0 };
const bo = new THREE.Group(); world.add(bo);
const HEXV = [...Array(6)].map((_, k) => { const a = k * Math.PI / 3; return [BO.cx + BO.R * Math.cos(a), BO.cz + BO.R * Math.sin(a)]; });
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const plyMat = (tint = 0xffffff) => { const t = tx(TEX.plywood, 1, 1); return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: .6, roughness: .72, metalness: 0, side: THREE.DoubleSide, color: tint }); };
const PLY = plyMat(0xf2e2c8), PLY2 = plyMat(0xe0c9a4);

// quads -> one mesh (each quad = [p00, p10, p01, p11])
function quadMesh(quads, material, parent) {
  const pos = [], uv = [];
  for (const q of quads) {
    const [a, b, c, d] = q.p, w = a.distanceTo(b) / 1.22, h = a.distanceTo(c) / 2.44, w2 = c.distanceTo(d) / 1.22, ou = q.ou || 0, ov = q.ov || 0;
    const wm = Math.max(w, w2);
    pos.push(a.x, a.y, a.z, b.x, b.y, b.z, d.x, d.y, d.z, a.x, a.y, a.z, d.x, d.y, d.z, c.x, c.y, c.z);
    uv.push(ou, ov, ou + w, ov, ou + w2, ov + h, ou, ov, ou + w2, ov + h, ou, ov + h);
  }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, material); m.receiveShadow = true; parent.add(m); return m;
}
// ----- wall k of the hexagon: profile polyline [[depth_into_room, height], ...] -----
const T30 = Math.tan(Math.PI / 6);
function hexWall(k, prof, uRange) {
  const A = HEXV[k], Bv = HEXV[(k + 1) % 6]; const L = Math.hypot(Bv[0] - A[0], Bv[1] - A[1]); const t = { x: (Bv[0] - A[0]) / L, z: (Bv[1] - A[1]) / L };
  let n = { x: -t.z, z: t.x }; const mx = (A[0] + Bv[0]) / 2, mz = (A[1] + Bv[1]) / 2; if (n.x * (BO.cx - mx) + n.z * (BO.cz - mz) < 0) n = { x: -n.x, z: -n.z };
  const [ua, ub] = uRange || [0, L];
  const P = (d, u, y) => V3(A[0] + t.x * u + n.x * d, y, A[1] + t.z * u + n.z * d);
  const quads = [], capsA = [], capsB = [];
  for (let j = 0; j < prof.length - 1; j++) {
    const [d0, y0] = prof[j], [d1, y1] = prof[j + 1];
    const q = { p: [P(d0, ua + d0 * T30, y0), P(d0, ub - d0 * T30, y0), P(d1, ua + d1 * T30, y1), P(d1, ub - d1 * T30, y1)], ou: (ua + d0 * T30) / 1.22, ov: (prof.slice(0, j).reduce((s, p, i) => s + Math.hypot(prof[i + 1][0] - p[0], prof[i + 1][1] - p[1]), 0)) / 2.44 };
    quads.push(q);
    if (!uRange) {   // end caps on the corner (bisector) planes close the gap to a neighbouring wall with another profile
      capsA.push({ p: [V3(A[0], y0, A[1]), P(d0, d0 * T30, y0), V3(A[0], y1, A[1]), P(d1, d1 * T30, y1)] });
      capsB.push({ p: [V3(Bv[0], y0, Bv[1]), P(d0, L - d0 * T30, y0), V3(Bv[0], y1, Bv[1]), P(d1, L - d1 * T30, y1)] });
    }
  }
  return { quads, caps: [...capsA, ...capsB], P, L, n, t, A, prof };
}
const WALL_PROFILES = [
  [[1.0, 0], [0, 3.6], [0, 6]],                                          // 0  slab (leaning back) + vertical
  null,                                                                  // 1  vertical with the door (built separately)
  [[0, 0], [0, 1.2], [1.6, 3.4], [1.6, 4.6], [0.9, 6]],                  // 2  overhang with roof
  [[0, 0], [0, 1.0], [0.9, 2.4], [0.9, 3.4], [2.0, 5.0], [0.4, 6]],      // 3  broken cave
  [[0, 0], [0, 0.8], [2.0, 3.6], [2.0, 6]],                              // 4  steep overhang
  [[0, 0], [0, 3.0], [0.8, 4.2], [0.8, 6]],                              // 5  vertical with a bulge
];
const ROUTE_COL = [0xe8222a, 0x2b6bff, 0xffd22a, 0x22b05a, 0xff7a1c, 0xa23cf0, 0xff5fb0, 0xf2f2f2, 0x15151a, 0x2ad4d4];
const HOLD_INST = [[], [], [], [], [], [], []];     // per hold shape: {m: Matrix4, c: Color}
const holdDummy = new THREE.Object3D();
function quadPoint(q, s, t) { const [a, b, c, d] = q.p; const bot = a.clone().lerp(b, s), top = c.clone().lerp(d, s); return bot.lerp(top, t); }
function quadNormal(q, toward) { const [a, b, c] = q.p; const nrm = b.clone().sub(a).cross(c.clone().sub(a)).normalize(); if (nrm.dot(toward) < 0) nrm.negate(); return nrm; }
function placeHold(type, p, n, col, rollv) { holdDummy.position.copy(p).addScaledVector(n, 0.004); holdDummy.lookAt(p.clone().add(n)); holdDummy.rotateZ(rollv); holdDummy.scale.setScalar(1); holdDummy.updateMatrix(); HOLD_INST[type].push({ m: holdDummy.matrix.clone(), c: new THREE.Color(col) }); }
// organise holds on one quad into colour-coded routes (columns) and rows
function routesOnQuad(q, cols, colorBase, toward, sk = 0.55) {
  const h = q.p[0].distanceTo(q.p[2]); if (h < 0.5) return; const rows = Math.max(2, Math.round(h / sk)); const n = quadNormal(q, toward);
  for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) {
    const zig = Math.sin((r + c * 1.7) * 1.1) * 0.5 / cols, s = (c + 0.5) / cols + zig * 0.55, t = (r + 0.45) / rows, p = quadPoint(q, s, t);
    const ty = (r * 3 + c * 5) % 7; const type = r < 1 ? 5 : (ty === 6 ? 4 : ty === 5 ? 5 : ty % 5);
    placeHold(type === 5 && r > 0 ? 1 : type, p, n, ROUTE_COL[(colorBase + c) % ROUTE_COL.length], (rnd() - .5) * 1.6);
    if ((r + c) % 3 === 0) { const p2 = quadPoint(q, Math.min(.97, Math.max(.03, s + 0.07)), Math.min(.98, t + .5 / rows)); placeHold(5, p2, n, ROUTE_COL[(colorBase + c) % ROUTE_COL.length], rnd() * 3); }   // foot chips
  }
}
function buildHolds() {
  const geos = [
    () => { const g = new THREE.SphereGeometry(0.07, 12, 9); g.scale(1, .8, .65); g.translate(0, 0, .035); return g; },                 // 0 jug
    () => { const g = new RoundedBoxGeometry(0.11, 0.03, 0.05, 2, 0.012); g.translate(0, 0, .025); return g; },                         // 1 crimp
    () => { const g = new THREE.SphereGeometry(0.1, 14, 10); g.scale(1, 1, .38); return g; },                                            // 2 sloper
    () => { const g = new THREE.CapsuleGeometry(0.028, 0.09, 4, 8); g.rotateZ(Math.PI / 2); g.translate(0, 0, .04); return g; },           // 3 pinch
    () => { const g = new THREE.TorusGeometry(0.05, 0.022, 8, 14); g.translate(0, 0, .02); return g; },                                  // 4 pocket
    () => { const g = new THREE.ConeGeometry(0.032, 0.04, 6); g.rotateX(Math.PI / 2); g.translate(0, 0, .02); return g; },                // 5 foot chip
    () => { const g = new THREE.DodecahedronGeometry(0.2); g.scale(1, 1, .5); return g; },                                               // 6 volume
  ];
  const hm = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .5, metalness: 0 });
  geos.forEach((mk, i) => { const L = HOLD_INST[i]; if (!L.length) return; const im = new THREE.InstancedMesh(mk(), hm, L.length); L.forEach((h, k) => { im.setMatrixAt(k, h.m); im.setColorAt(k, h.c); }); im.castShadow = true; bo.add(im); });
}
// ----- perimeter walls -----
(function buildHexWalls() {
  const toCenter = (w, q) => V3(BO.cx - q.p[0].x, 0, BO.cz - q.p[0].z);
  for (let k = 0; k < 6; k++) {
    if (k === 1) {   // vertical wall with a door (x -9.8 .. -11.4 on the south edge, 2.3 m high)
      const W = hexWall(1, [[0, 0], [0, 6]], [0, 2.5]), W2 = hexWall(1, [[0, 0], [0, 6]], [4.1, 7]), W3 = hexWall(1, [[0, 2.3], [0, 6]], [2.5, 4.1]);
      for (const w of [W, W2, W3]) { quadMesh(w.quads, PLY, bo); w.quads.forEach(q => routesOnQuad(q, w === W3 ? 2 : 2, 0, toCenter(w, q), 0.6)); }
      const a = HEXV[1], dx = -1, fx = (u) => a[0] + dx * u;
      for (const u of [2.5, 4.1]) B(bo, 0.1, 2.3, 0.3, S(0x15161a, .5), fx(u), 1.15, a[1] + 0.02); B(bo, 1.7, 0.1, 0.3, S(0x15161a, .5), fx(3.3), 2.3, a[1] + 0.02);
      continue;
    }
    const w = hexWall(k, WALL_PROFILES[k]); quadMesh(w.quads, k % 2 ? PLY2 : PLY, bo); quadMesh(w.caps, PLY2, bo);
    w.quads.forEach(q => routesOnQuad(q, 4, k * 2, quadNormal(q, V3(BO.cx - q.p[0].x, 0, BO.cz - q.p[0].z)).add(V3(0, 0, 0)), 0.55));
  }
  // exterior wall shell (dark) behind the climbing surfaces so the hall is closed
  for (let k = 0; k < 6; k++) { const A = HEXV[k], Bv = HEXV[(k + 1) % 6]; const L = Math.hypot(Bv[0] - A[0], Bv[1] - A[1]); const o = new THREE.Mesh(new THREE.BoxGeometry(L + 0.3, BO.H, 0.2), S(0x17181c, .9)); const mx = (A[0] + Bv[0]) / 2, mz = (A[1] + Bv[1]) / 2; const dir = V3(mx - BO.cx, 0, mz - BO.cz).normalize(); o.position.set(mx + dir.x * 0.12, BO.H / 2, mz + dir.z * 0.12); o.rotation.y = -Math.atan2(Bv[1] - A[1], Bv[0] - A[0]); if (k !== 1) bo.add(o); }
})();
// ----- central free-standing boulder (7 sided, two tiers, climbable from all sides) -----
(function buildCentralBoulder() {
  const N = 7, rings = [{ y: 0, r: 1.75 }, { y: 2.1, r: 2.45 }, { y: 4.7, r: 1.45 }], ring = [];
  rings.forEach((rg, ri) => { const pts = []; for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2 + ri * 0.12, j = 0.9 + ((i * 37 + ri * 11) % 10) / 50; pts.push(V3(BO.cx + Math.sin(a) * rg.r * j, rg.y, BO.cz + Math.cos(a) * rg.r * j)); } ring.push(pts); });
  const quads = [];
  for (let ri = 0; ri < 2; ri++) for (let i = 0; i < N; i++) { const i2 = (i + 1) % N; quads.push({ p: [ring[ri][i], ring[ri][i2], ring[ri + 1][i], ring[ri + 1][i2]], ou: i * 0.37, ov: ri * 0.9 }); }
  const mesh = quadMesh(quads, new THREE.MeshStandardMaterial({ map: PLY.map, bumpMap: PLY.map, bumpScale: .6, roughness: .72, side: THREE.DoubleSide, color: 0xeed6b0, flatShading: true }), bo); mesh.castShadow = true;
  // top-out platform
  const topPts = ring[2].map(p => new THREE.Vector2(p.x, -p.z)); const tg = new THREE.ShapeGeometry(new THREE.Shape(topPts)); tg.rotateX(-Math.PI / 2); const tm = new THREE.Mesh(tg, S(0xc9aa78, .8)); tm.position.y = 4.7; bo.add(tm);
  quads.forEach((q, k) => { const cen = quadPoint(q, .5, .5); const out = V3(cen.x - BO.cx, 0, cen.z - BO.cz).normalize(); const nrm = quadNormal(q, out); routesOnQuad(q, k < N ? 2 : 2, 3 + k, nrm, 0.55); });
  // one big macro volume on the south side of the lower tier
  const q0 = quads[0]; { const p = quadPoint(q0, .5, .22), nn = quadNormal(q0, V3(p.x - BO.cx, 0, p.z - BO.cz)); placeHold(6, p, nn, 0x2b6bff, 0); const p2 = quadPoint(quads[3], .5, .3); placeHold(6, p2, quadNormal(quads[3], V3(p2.x - BO.cx, 0, p2.z - BO.cz)), 0xe8222a, 1); }
})();
buildHolds();
// ----- thick continuous crash mat -----
(function buildMat() {
  const R2 = 6.99, pts = [...Array(6)].map((_, k) => { const a = k * Math.PI / 3; return [BO.cx + R2 * Math.cos(a), BO.cz + R2 * Math.sin(a)]; });
  const ze = pts[1][1] + 0.1, poly = [pts[0], pts[1], [-9.7, ze], [-9.7, ze - 0.95], [-11.5, ze - 0.95], [-11.5, ze], pts[2], pts[3], pts[4], pts[5]];
  const sh = new THREE.Shape(poly.map(p => new THREE.Vector2(p[0], -p[1])));
  const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.26, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 3 }); geo.rotateX(-Math.PI / 2);
  const t = tx(TEX.matBlue, 1, 0.5); const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 1.2, roughness: .85 })); m.position.y = 0.0; m.receiveShadow = true; bo.add(m);
  floorPoly(bo, [...Array(6)].map((_, k) => HEXV[k]), floorMat('concrete', 1.5, .9));
  for (let k = 0; k < 6; k++) { if (k === 1) continue; const A = HEXV[k], Bv = HEXV[(k + 1) % 6], L = Math.hypot(Bv[0] - A[0], Bv[1] - A[1]); const o = new THREE.Mesh(new THREE.BoxGeometry(L - 0.3, 0.03, 0.05), S(0xffd22a, .5)); const mx = (A[0] + Bv[0]) / 2, mz = (A[1] + Bv[1]) / 2, dir = V3(BO.cx - mx, 0, BO.cz - mz).normalize(); o.position.set(mx + dir.x * 0.07, 0.32, mz + dir.z * 0.07); o.rotation.y = -Math.atan2(Bv[1] - A[1], Bv[0] - A[0]); bo.add(o); }
  // fall-zone mat around the boulder foot (extra soft landing pad)
  const pad = new THREE.Mesh(new THREE.CylinderGeometry(3.3, 3.4, 0.14, 7), new THREE.MeshStandardMaterial({ map: t, color: 0x6aa2ff, roughness: .9 })); pad.position.set(BO.cx, 0.33, BO.cz); bo.add(pad);
})();
// ----- ceiling, steel beams, light -----
(function buildBoulderCeiling() {
  ceilPoly(HEXV, BO.H, S(0x1b1c21, .9));
  for (let k = 0; k < 3; k++) { const ang = k * Math.PI / 3; const bm = new THREE.Mesh(new THREE.BoxGeometry(BO.R * 2 - 0.3, 0.36, 0.28), S(0x4d525c, .45, .8)); bm.position.set(BO.cx, BO.H - 0.2, BO.cz); bm.rotation.y = -ang; ceilings.add(bm);
    const lg = new THREE.Mesh(new THREE.BoxGeometry(BO.R * 2 - 1.2, 0.03, 0.06), glow(0xfff1da, 7)); lg.position.set(BO.cx, BO.H - 0.4, BO.cz); lg.rotation.y = -ang; ceilings.add(lg); }
  for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + Math.PI / 6; const x = BO.cx + Math.cos(a) * 4.6, z = BO.cz + Math.sin(a) * 4.6; Cy(ceilings, 0.12, 0.12, 0.14, S(0x0d0d10, .4, .5), x, BO.H - 0.1, z, 14); Cy(ceilings, 0.1, 0.1, 0.01, glow(0xfff6e8, 9), x, BO.H - 0.18, z, 14); }
  for (let i = 0; i < 3; i++) { const a = i * Math.PI * 2 / 3 + 0.5; plight(bo, BO.cx + Math.cos(a) * 4.2, BO.H - 0.6, BO.cz + Math.sin(a) * 4.2, 0xfff4e4, 22, 14); }
  plight(bo, BO.cx, BO.H - 0.8, BO.cz, 0xffffff, 18, 12);
  label(bo, 'BOULDER', 2.6, 0.5, '#ffb42a', -10.6, 4.4, HEXV[1][1] - 0.12, Math.PI, 'bold 170px Arial Black', undefined, false);
  B(ceilings, 14, 0.02, 0.02, glow(0xffb42a, 2.5), BO.cx, BO.H - 0.02, BO.cz + 5.0).visible = false;
})();

// =====================================================================
//  4) L-SHAPED SERVICE BLOCK – changing room (leg) + showers/WC (foot) + foyer
// =====================================================================
const lk = new THREE.Group(); world.add(lk);
const LH = 3.0;
const tileWall = (l, h) => mat('tile', 0.6, .35, 0, l, h);
const plasterWall = (l, h) => mat('plaster', 1.2, .9, 0, l, h);
floorPoly(lk, [[-12.4, -5.45], [-8.8, -5.45], [-8.8, 3.85], [-3.6, 3.85], [-3.6, 7.7], [-12.4, 7.7]], floorMat('tile', 0.6, .35));
floorPoly(lk, [[-3.6, 3.85], [0.4, 3.85], [0.4, 7.7], [-3.6, 7.7]], floorMat('graphite', 1.0, .6));
ceilPoly([[-12.4, -5.45], [-8.8, -5.45], [-8.8, 3.85], [-12.4, 3.85]], LH, S(0xe4e4e2, .9));
ceilPoly([[-12.4, 3.85], [-3.6, 3.85], [-3.6, 7.7], [-12.4, 7.7]], LH, S(0xe4e4e2, .9));
ceilPoly([[-3.6, 3.85], [0.4, 3.85], [0.4, 7.7], [-3.6, 7.7]], LH, S(0x25262c, .9));
wall(lk, -12.4, -5.45, -12.4, 7.7, LH, plasterWall);                       // west outer wall
wall(lk, -8.8, -5.45, -8.8, -3.85, LH, plasterWall);                        // leg east wall north of the main hall
wall(lk, -3.6, 3.85, -3.6, 7.7, LH, tileWall);                              // showers | foyer
wall(lk, 0.4, 3.85, 0.4, 7.7, LH, wallDark);                                // foyer east wall
// LED strips
for (const [x, z, w, d] of [[-10.6, -1.0, 3.4, 0.08], [-10.6, 2.6, 3.4, 0.08], [-8.2, 5.8, 0.08, 3.4], [-6.2, 5.8, 3.4, 0.08]]) B(ceilings, w, 0.03, d, glow(0xf4f8ff, 6), x, LH - 0.02, z);
// ----- changing room (leg, x -12.4..-8.8) -----
(function () {
  const lock = S(0x3b4a63, .45, .35), lock2 = S(0x2a3240, .5, .3);
  for (let i = 0; i < 14; i++) { const z = -4.7 + i * 0.5 + 0.0; B(lk, 0.45, 1.95, 0.48, i % 2 ? lock : lock2, -12.17, 1.0, z); B(lk, 0.01, 0.55, 0.3, S(0x1b2230, .6), -11.94, 1.5, z); B(lk, 0.012, 0.2, 0.012, S(0xd5d7dc, .2, 1), -11.94, 1.1, z + 0.12); B(lk, 0.012, 0.03, 0.2, glow(0x38d8ff, 1.2), -11.94, 1.92, z); }
  B(lk, 0.46, 0.06, 7.1, S(0x2a2f3a, .5), -12.17, 1.98, -1.1);
  for (const z0 of [-3.6, 0.9]) { B(lk, 0.45, 0.06, 2.6, S(0x7a5a38, .45), -10.9, 0.46, z0 + 1.0); for (const dz of [0.1, 2.0]) B(lk, 0.4, 0.44, 0.06, S(0x15151a, .4, .5), -10.9, 0.22, z0 + dz); B(lk, 0.1, 0.04, 2.6, S(0xcfd2d8, .3, 1), -10.55, 0.9, z0 + 1.0).visible = false; }
  for (let i = 0; i < 6; i++) { B(lk, 0.04, 0.04, 0.04, S(0xcfd2d8, .3, 1), -8.9, 1.7, -5.2 + i * 0.25); }
  B(lk, 0.03, 1.4, 1.2, new THREE.MeshStandardMaterial({ color: 0xcfe9ff, roughness: .04, metalness: .6 }), -8.93, 1.4, -4.7);      // mirror
  label(lk, 'ŠATNA', 1.5, 0.4, '#7fd0ff', -8.93, 2.6, 0.1, -Math.PI / 2, 'bold 170px Arial Black', undefined, false);
  plight(lk, -10.6, 2.6, -2.0, 0xf4f8ff, 7, 8); plight(lk, -10.6, 2.6, 2.4, 0xf4f8ff, 6, 8);
})();
// ----- showers + WC + basins (foot) -----
(function () {
  const glass = new THREE.MeshStandardMaterial({ color: 0xbfe8ff, transparent: true, opacity: .18, roughness: .02 }), steel = S(0xd5d7dc, .2, 1), tile = S(0xb9bcc2, .3);
  for (let i = 0; i < 4; i++) { const x = -8.0 + i * 1.1; B(lk, 1.05, 0.02, 1.2, tile, x, 0.011, 4.45);
    B(lk, 0.02, 2.0, 1.2, glass, x + 0.55, 1.0, 4.45); B(lk, 1.05, 2.0, 0.02, glass, x, 1.0, 5.07);
    Cy(lk, 0.012, 0.012, 1.0, steel, x, 1.9, 3.95, 8); const hd = Cy(lk, 0.1, 0.1, 0.012, steel, x, 2.25, 4.1, 16); hd.rotation.x = 0.4; Cy(lk, 0.06, 0.06, 0.004, S(0x111, .5), x, 0.016, 4.5, 14); }
  B(lk, 0.02, 2.0, 1.2, glass, -8.55, 1.0, 4.45);
  for (let i = 0; i < 3; i++) { const x = -6.0 + i * 0.9; B(lk, 0.55, 0.1, 0.4, S(0xf2f2f2, .2), x, 0.9, 7.45); Cy(lk, 0.012, 0.012, 0.12, steel, x, 1.0, 7.6, 8); B(lk, 0.6, 0.9, 0.02, new THREE.MeshStandardMaterial({ color: 0xcfe9ff, roughness: .04, metalness: .6 }), x, 1.55, 7.64); }
  for (let i = 0; i < 3; i++) { B(lk, 1.0, 2.0, 0.03, S(0xe4e4e2, .6), -9.1 - 0 + 0, 1.0, 7.0 - i * 0.9).visible = false; B(lk, 0.03, 2.0, 0.88, S(0xe4e4e2, .6), -11.8 + 0, 1.0, 4.6 + i * 1.0).visible = false; }
  // WC cubicles along the west wall of the corner
  for (let i = 0; i < 3; i++) { const z = 4.4 + i * 1.0; B(lk, 1.0, 1.95, 0.03, S(0xe4e4e2, .6), -11.9, 1.0, z + 0.5); B(lk, 0.03, 1.4, 0.8, S(0x2a6f78, .5), -11.4, 0.85, z + 0.05).visible = false; Cy(lk, 0.17, 0.2, 0.4, S(0xf2f2f2, .2), -12.1, 0.2, z, 16); }
  label(lk, 'SPRCHY · WC', 2.4, 0.4, '#7fd0ff', -6.2, 2.6, 4.0, 0, 'bold 140px Arial Black', undefined, false);
  plight(lk, -6.2, 2.6, 5.7, 0xeaf4ff, 7, 8);
})();
// ----- foyer -----
(function () {
  B(lk, 2.6, 0.42, 0.45, S(0x2a2c33, .6), -1.7, 0.21, 7.4); B(lk, 2.6, 0.06, 0.5, S(0x7a5a38, .45), -1.7, 0.45, 7.4);
  label(lk, 'BADMINTON  ›', 2.2, 0.36, '#6fd0ff', -1.9, 2.6, 7.45, Math.PI, 'bold 140px Arial Black', undefined, false);
  for (const x of [-3.3, 0.1]) { Cy(lk, 0.2, 0.15, 0.4, S(0x24262b, .6), x, 0.2, 4.2, 16); Cy(lk, 0.03, 0.03, 0.6, S(0x2a6f3a, .8), x, 0.7, 4.2, 6); const lf = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 9), S(0x1f6a34, .8)); lf.scale.y = 1.2; lf.position.set(x, 1.15, 4.2); lk.add(lf); }
  plight(lk, -1.6, 2.6, 5.8, 0xffe8cc, 6, 7);
})();

// white/tiled cladding on the service-block side of the dark main-hall walls
B(lk, 5.2, LH, 0.03, tileWall(5.2, LH), -6.2, LH / 2, 3.99); B(lk, 0.03, 2.85, 2.85, plasterWall(2.85, 2.85), -8.94, 2.85 / 2 + 0.0, -2.425); B(lk, 0.03, LH, 2.65, plasterWall(2.65, LH), -8.94, LH / 2, 2.525);
B(lk, 0.03, 0.15, 2.2, S(0x15161a, .6), -8.94, 0.075, 0.1).visible = false;

// =====================================================================
//  5) BADMINTON HALL – 18 m wide, vaulted (inverted U) with exposed steel truss ribs
// =====================================================================
const bh = new THREE.Group(); world.add(bh);
const HALL = { x0: -12.4, x1: 5.6, z0: 7.7, z1: 24.5, Hs: 4.2, Hc: 9.0 };
HALL.cx = (HALL.x0 + HALL.x1) / 2; HALL.a = (HALL.x1 - HALL.x0) / 2; HALL.b = HALL.Hc - HALL.Hs;
const arch = (x, off = 0) => { const u = (x - HALL.cx) / (HALL.a - off); return HALL.Hs + (HALL.b - off) * Math.sqrt(Math.max(0, 1 - u * u)); };
TEX.vinylBlue = (() => { const c = cv(256, 256), q = c.getContext('2d'); q.fillStyle = '#1f3f7a'; q.fillRect(0, 0, 256, 256); noise(q, 256, 256, 14); return c; })();
// floors: blue vinyl run-off, green courts with official BWF markings
{ const bm = mat('vinylBlue', 2, .35, 0, HALL.x1 - HALL.x0, HALL.z1 - HALL.z0); const f = new THREE.Mesh(new THREE.PlaneGeometry(HALL.x1 - HALL.x0, HALL.z1 - HALL.z0), bm); f.rotation.x = -Math.PI / 2; f.position.set(HALL.cx, 0.002, (HALL.z0 + HALL.z1) / 2); f.receiveShadow = true; bh.add(f); }
const courtTex = (() => { const c = cv(610, 1340), q = c.getContext('2d'); q.fillStyle = '#2c7a4e'; q.fillRect(0, 0, 610, 1340); noise(q, 610, 1340, 10);
  q.strokeStyle = '#fff'; q.fillStyle = '#fff'; const lw = 4, L = (x1, y1, x2, y2) => { q.lineWidth = lw; q.beginPath(); q.moveTo(x1, y1); q.lineTo(x2, y2); q.stroke(); };
  q.lineWidth = lw; q.strokeRect(2, 2, 606, 1336);                      // doubles boundary 13.40 x 6.10
  L(46, 0, 46, 1340); L(564, 0, 564, 1340);                              // singles side lines (0.46 m in)
  L(0, 76, 610, 76); L(0, 1264, 610, 1264);                              // doubles long service lines (0.76 m in)
  L(0, 472, 610, 472); L(0, 868, 610, 868);                              // short service lines (1.98 m from net)
  L(305, 0, 305, 472); L(305, 868, 305, 1340);                           // centre lines
  q.fillStyle = 'rgba(255,255,255,.55)'; q.fillRect(0, 668, 610, 4);     // net line
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 16; return t; })();
const COURT_X = [HALL.cx - 3.9, HALL.cx + 3.9], COURT_Z = 16.1;
for (const cx of COURT_X) {
  const court = new THREE.Mesh(new THREE.PlaneGeometry(6.1, 13.4), new THREE.MeshStandardMaterial({ map: courtTex, roughness: .32 })); court.rotation.x = -Math.PI / 2; court.position.set(cx, 0.012, COURT_Z); court.receiveShadow = true; bh.add(court);
  // posts (on the doubles side lines) + net
  for (const sx of [-1, 1]) { Cy(bh, 0.028, 0.034, 1.55, S(0x1c1c1f, .4, .7), cx + sx * 3.05, 0.775, COURT_Z, 12); Cy(bh, 0.14, 0.16, 0.05, S(0x3a3b40, .5, .5), cx + sx * 3.05, 0.025, COURT_Z, 16); }
  const nc = cv(512, 64), nq = nc.getContext('2d'); nq.fillStyle = '#fff'; nq.fillRect(0, 0, 512, 9); nq.strokeStyle = 'rgba(240,240,240,.75)'; nq.lineWidth = 1; for (let i = 0; i < 512; i += 7) { nq.beginPath(); nq.moveTo(i, 0); nq.lineTo(i, 64); nq.stroke(); } for (let j = 9; j < 64; j += 7) { nq.beginPath(); nq.moveTo(0, j); nq.lineTo(512, j); nq.stroke(); }
  const nt = new THREE.CanvasTexture(nc); nt.colorSpace = THREE.SRGBColorSpace; const net = new THREE.Mesh(new THREE.PlaneGeometry(6.1, 0.76), new THREE.MeshBasicMaterial({ map: nt, transparent: true, side: THREE.DoubleSide, alphaTest: .25 })); net.position.set(cx, 1.17, COURT_Z); bh.add(net);
  B(bh, 0.5, 0.05, 0.5, S(0x777a82, .5), cx + 3.7, 1.5, COURT_Z); B(bh, 0.06, 1.5, 0.06, S(0x777a82, .3, .8), cx + 3.7, 0.75, COURT_Z - 0.2); B(bh, 0.06, 1.5, 0.06, S(0x777a82, .3, .8), cx + 3.7, 0.75, COURT_Z + 0.2);
}
// walls, wall pads, gables
const hallWall = (l, h) => mat('plaster', 1.2, .9, 0, l, h);
wall(bh, HALL.x0, HALL.z0, HALL.x0, HALL.z1, HALL.Hs, hallWall); wall(bh, HALL.x1, HALL.z0, HALL.x1, HALL.z1, HALL.Hs, hallWall);
const padM = (l, h) => mat('rubber', 1.2, .8, 0, l, h, { color: 0x4a76ff });
B(bh, 0.1, 1.3, HALL.z1 - HALL.z0, padM(16, 1.3), HALL.x0 + 0.1, 0.65, (HALL.z0 + HALL.z1) / 2); B(bh, 0.1, 1.3, HALL.z1 - HALL.z0, padM(16, 1.3), HALL.x1 - 0.1, 0.65, (HALL.z0 + HALL.z1) / 2);
function gable(z, notches, front) {
  const pts = [[HALL.x0, 0]]; for (const [a, b] of notches) pts.push([a, 0], [a, 2.2], [b, 2.2], [b, 0]); pts.push([HALL.x1, 0]);
  const NS = 48; for (let i = NS; i >= 0; i--) { const x = HALL.x0 + (HALL.x1 - HALL.x0) * i / NS; pts.push([x, arch(x)]); }
  const sh = new THREE.Shape(pts.map(p => new THREE.Vector2(p[0], p[1]))); const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.22, bevelEnabled: false });
  const m = new THREE.Mesh(geo, mat('plaster', 1.2, .9, 0, 6, 6)); m.position.z = z - 0.11; m.receiveShadow = true; bh.add(m); if (front) FW.push(m); return m; }
gable(HALL.z0, [[-8.2, -6.8], [-2.8, -1.0]], false); gable(HALL.z1, [], true);
for (const [a, b] of [[-8.2, -6.8], [-2.8, -1.0]]) { B(bh, 0.1, 2.2, 0.3, S(0x15161a, .5), a, 1.1, HALL.z0); B(bh, 0.1, 2.2, 0.3, S(0x15161a, .5), b, 1.1, HALL.z0); B(bh, b - a, 0.1, 0.3, S(0x15161a, .5), (a + b) / 2, 2.2, HALL.z0); }
// glazed windows on the south gable + side clerestory (daylight)
const dayM = new THREE.MeshBasicMaterial({ color: 0xcfe6ff, toneMapped: false });
for (let i = 0; i < 5; i++) { const w = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 3.2), dayM); w.position.set(HALL.cx - 7.2 + i * 3.6, 5.6, HALL.z1 - 0.115); w.rotation.y = Math.PI; bh.add(w); FW.push(w); }
for (const x of [HALL.x0 + 0.13, HALL.x1 - 0.13]) for (let i = 0; i < 6; i++) { const w = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.8), dayM); w.position.set(x, 3.3, HALL.z0 + 1.6 + i * 2.7); w.rotation.y = x < HALL.cx ? Math.PI / 2 : -Math.PI / 2; bh.add(w); }
// ----- steel truss ribs -----
(function buildRibs() {
  const NR = 8, NS = 36, steel = new THREE.MeshStandardMaterial({ map: tx(TEX.steel, 2, 2), color: 0x9aa0aa, roughness: .35, metalness: .85 });
  const outer = [], inner = []; for (let i = 0; i <= NS; i++) { const x = HALL.x0 + 0.25 + (HALL.x1 - HALL.x0 - 0.5) * i / NS; outer.push([x, arch(x, 0.15)]); inner.push([x, arch(x, 0.15) - 0.7 + Math.abs(i - NS / 2) / (NS / 2) * 0.25]); }
  const struts = []; const up = V3(0, 1, 0), mm = new THREE.Matrix4(), q = new THREE.Quaternion(), pos = new THREE.Vector3(), scl = new THREE.Vector3();
  const addStrut = (a, b, z) => { const A = V3(a[0], a[1], z), Bp = V3(b[0], b[1], z), d = Bp.clone().sub(A), len = d.length(); q.setFromUnitVectors(up, d.normalize()); pos.copy(A).add(Bp).multiplyScalar(0.5); scl.set(1, len, 1); mm.compose(pos, q, scl); struts.push(mm.clone()); };
  for (let r = 0; r < NR; r++) {
    const z = HALL.z0 + 0.9 + r * (HALL.z1 - HALL.z0 - 1.8) / (NR - 1);
    for (const ch of [outer, inner]) { const curve = new THREE.CatmullRomCurve3(ch.map(p => V3(p[0], p[1], z))); const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 72, 0.075, 8, false), steel); tube.castShadow = true; bh.add(tube); }
    for (let i = 0; i < NS; i++) { addStrut(outer[i], inner[i], z); addStrut(inner[i], outer[i + 1], z); } addStrut(outer[NS], inner[NS], z);
    for (const x of [HALL.x0 + 0.22, HALL.x1 - 0.22]) { B(bh, 0.3, HALL.Hs - 0.1, 0.3, steel, x, (HALL.Hs - 0.1) / 2 + 0.05, z); B(bh, 0.45, 0.05, 0.45, S(0x30333a, .5, .6), x, 0.03, z); }
  }
  const sg = new THREE.CylinderGeometry(0.028, 0.028, 1, 6), im = new THREE.InstancedMesh(sg, steel, struts.length); struts.forEach((m, i) => im.setMatrixAt(i, m)); bh.add(im);
  // purlins between the ribs + vault cladding (hidden in the overview with the other ceilings)
  for (let i = 0; i <= 12; i++) { const x = HALL.x0 + 0.25 + (HALL.x1 - HALL.x0 - 0.5) * i / 12, y = arch(x, 0.15); const pl = Cy(bh, 0.05, 0.05, HALL.z1 - HALL.z0 - 1.4, steel, x, y, (HALL.z0 + HALL.z1) / 2, 8); pl.rotation.x = Math.PI / 2; }
  const NU = 60, pos2 = [], idx = [], uv2 = [];
  for (let i = 0; i <= NU; i++) { const x = HALL.x0 + (HALL.x1 - HALL.x0) * i / NU, y = arch(x) + 0.12; pos2.push(x, y, HALL.z0, x, y, HALL.z1); uv2.push(i * 0.6, 0, i * 0.6, 4); if (i < NU) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } }
  const vg = new THREE.BufferGeometry(); vg.setAttribute('position', new THREE.Float32BufferAttribute(pos2, 3)); vg.setAttribute('uv', new THREE.Float32BufferAttribute(uv2, 2)); vg.setIndex(idx); vg.computeVertexNormals();
  const vm = new THREE.Mesh(vg, new THREE.MeshStandardMaterial({ color: 0xc8ccd4, roughness: .7, metalness: .3, side: THREE.DoubleSide })); ceilings.add(vm);
  // hanging linear LED luminaires above the courts (clear height kept for shuttle trajectories) + zone lights
  for (const cx of COURT_X) for (const dx of [-1.6, 1.6]) for (let k = 0; k < 3; k++) { const z = HALL.z0 + 3.5 + k * 4.5 + (cx > HALL.cx ? 0 : 0); const yy = Math.min(arch(cx + dx, 0.15) - 0.9, 7.6);
    const lum = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.08, 2.4), glow(0xfff7ea, 9)); lum.position.set(cx + dx, yy, z); bh.add(lum); B(bh, 0.02, arch(cx + dx, 0.15) - yy - 0.1, 0.02, S(0x222, .5, .7), cx + dx, (arch(cx + dx, 0.15) + yy) / 2 - 0.05, z); }
  for (const cx of COURT_X) for (let k = 0; k < 3; k++) plight(bh, cx, 7.0, HALL.z0 + 3.5 + k * 4.5, 0xfff7ea, 38, 26);
})();
// scoreboard, benches, racks, shuttle tubes
label(bh, '21 : 18', 2.2, 0.8, '#ffcf3a', HALL.x1 - 0.14, 3.2, COURT_Z, -Math.PI / 2, 'bold 280px Arial Black', '#0b0b0b', false);
label(bh, 'BADMINTON · LIGA', 5, 0.6, '#2b4fff', HALL.cx, 6.0, HALL.z0 + 0.14, 0, 'bold 190px Arial Black', undefined, false);
for (const x of [-9, -3.4, 2.2]) { B(bh, 2.6, 0.05, 0.4, S(0x3a2d22, .5), x, 0.45, HALL.z1 - 0.5); B(bh, 0.06, 0.44, 0.35, S(0x151515), x - 1.2, 0.22, HALL.z1 - 0.5); B(bh, 0.06, 0.44, 0.35, S(0x151515), x + 1.2, 0.22, HALL.z1 - 0.5); }
for (let i = 0; i < 6; i++) { const t = Cy(bh, 0.04, 0.04, 0.3, S(0xffd43a), -11 + i * 0.12, 0.6, HALL.z1 - 0.6, 10); t.rotation.x = 0.2; }

// =====================================================================
//  6) VIEW API, controls, render loop
// =====================================================================
const PRESETS = {
  1: ['Main hall – sofa & TV', [2.5, 1.65, -4.2], [0.2, 1.3, -9.3], 72], 2: ['PC wall', [3.2, 1.7, 0.0], [8.7, 1.3, 0.0], 76], 3: ['Bar', [1.4, 1.6, -0.2], [5.0, 1.2, 3.4], 72],
  4: ['Beer pong + Hall of Fame', [-1.8, 1.7, 0.6], [-7.2, 0.9, 0.4], 74], 5: ['Boulder hall', [-10.8, 1.7, -6.2], [-10.8, 3.0, -13.0], 80], 6: ['Badminton hall', [-3.4, 1.9, 9.5], [-3.4, 3.5, 20], 80], 7: ['Locker block', [-10.6, 1.7, 6.8], [-10.6, 1.2, -4.0], 78] };
window.PRESETS = PRESETS;
const planLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0); scene.add(planLight);
window.view = (px, py, pz, lx, ly, lz, fov = 70, ceil = true) => { planLight.intensity = 0; ceilings.visible = ceil; FW.forEach(o => o.visible = ceil); cam.fov = fov; cam.updateProjectionMatrix(); cam.position.set(px, py, pz); cam.lookAt(lx, ly, lz); renderer.render(scene, cam); };
window.topView = (w = 1000, h = 1233) => { planLight.intensity = 2.4; ceilings.visible = false; FW.forEach(o => o.visible = true); renderer.setSize(w, h); const hh = 24, hw = hh * w / h; const oc = new THREE.OrthographicCamera(-hw, hw, hh, -hh, 0.1, 80); oc.position.set(-3.4, 40, 4.5); oc.up.set(0, 0, -1); oc.lookAt(-3.4, 0, 4.5); renderer.render(scene, oc); };
window.resetSize = () => renderer.setSize(W, H);
// interactive walk-through: WASD / arrows + drag to look, 1-7 presets, C ceilings, T top-down
(function controls() {
  if (navigator.webdriver) { window.__ready = true; return; }
  let yaw = 0, pitch = 0, drag = false, lx = 0, ly = 0, topMode = false; const keys = {}; cam.position.set(-1.9, 1.65, 3.0); yaw = 0.2; pitch = -0.05;
  const setPreset = (n) => { const p = PRESETS[n]; if (!p) return; ceilings.visible = true; cam.position.set(...p[1]); cam.fov = p[3]; cam.updateProjectionMatrix(); const d = V3(...p[2]).sub(cam.position); yaw = Math.atan2(-d.x, -d.z); pitch = Math.atan2(d.y, Math.hypot(d.x, d.z)); };
  addEventListener('keydown', e => { keys[e.code] = true; if (/^Digit[1-7]$/.test(e.code)) setPreset(+e.code.slice(5)); if (e.code === 'KeyC') { ceilings.visible = !ceilings.visible; FW.forEach(o => o.visible = ceilings.visible); } if (e.code === 'KeyT') topMode = !topMode; });
  addEventListener('keyup', e => keys[e.code] = false);
  renderer.domElement.addEventListener('pointerdown', e => { drag = true; lx = e.clientX; ly = e.clientY; }); addEventListener('pointerup', () => drag = false);
  addEventListener('pointermove', e => { if (!drag) return; yaw -= (e.clientX - lx) * 0.004; pitch = Math.max(-1.4, Math.min(1.4, pitch - (e.clientY - ly) * 0.004)); lx = e.clientX; ly = e.clientY; });
  addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight); cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix(); }); renderer.setSize(innerWidth, innerHeight); cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix();
  const clock = new THREE.Clock(); const oc = new THREE.OrthographicCamera(-24, 24, 24, -24, 0.1, 90); oc.up.set(0, 0, -1);
  (function loop() { requestAnimationFrame(loop); const dt = Math.min(clock.getDelta(), 0.05), sp = (keys.ShiftLeft ? 5 : 2.4) * dt;
    const f = (keys.KeyW || keys.ArrowUp ? 1 : 0) - (keys.KeyS || keys.ArrowDown ? 1 : 0), s = (keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0);
    cam.position.x += (-Math.sin(yaw) * f + Math.cos(yaw) * s) * sp; cam.position.z += (-Math.cos(yaw) * f - Math.sin(yaw) * s) * sp; cam.position.y = 1.65;
    cam.rotation.set(pitch, yaw, 0, 'YXZ');
    if (topMode) { const a = innerWidth / innerHeight; oc.left = -24 * a; oc.right = 24 * a; oc.updateProjectionMatrix(); oc.position.set(-3.4, 40, 4.5); oc.lookAt(-3.4, 0, 4.5); ceilings.visible = false; renderer.render(scene, oc); } else renderer.render(scene, cam); })();
  window.__ready = true;
})();
