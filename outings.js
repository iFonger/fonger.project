/* OUTINGS: otáčivá zeměkoule (WebGL). Data jsou v outings-data.js. */
(function () {
  'use strict';
  var D = window.OUTINGS, V = D.visited, WL = D.wishlist;
  /* pobyty: spočítat datum, noci a počet návštěv */
  var MON = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  function pd(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function dd(n) { return (n < 10 ? '0' : '') + n; }
  function fmtVisit(v) {
    var a = pd(v.from), b = pd(v.to || v.from), ya = a.getFullYear(), yb = b.getFullYear();
    if (+a === +b) return dd(a.getDate()) + ' ' + MON[a.getMonth()] + ' ' + ya;
    if (ya === yb && a.getMonth() === b.getMonth()) return dd(a.getDate()) + '–' + dd(b.getDate()) + ' ' + MON[a.getMonth()] + ' ' + ya;
    if (ya === yb) return dd(a.getDate()) + ' ' + MON[a.getMonth()] + ' – ' + dd(b.getDate()) + ' ' + MON[b.getMonth()] + ' ' + ya;
    return dd(a.getDate()) + ' ' + MON[a.getMonth()] + ' ' + ya + ' – ' + dd(b.getDate()) + ' ' + MON[b.getMonth()] + ' ' + yb;
  }
  V.forEach(function (c) {
    if (!c.visits || !c.visits.length) { c.visits = []; return; }
    c.visits.sort(function (x, y) { return pd(x.from) - pd(y.from); });
    var last = c.visits[c.visits.length - 1], n = 0;
    c.visits.forEach(function (v) { n += Math.round((pd(v.to || v.from) - pd(v.from)) / 864e5); });
    c.date = fmtVisit(last); c.nights = n; c.nv = c.visits.length;
    c.years = pd(c.visits[0].from).getFullYear() + (pd(last.from).getFullYear() !== pd(c.visits[0].from).getFullYear() ? '–' + pd(last.from).getFullYear() : '');
  });
  V.sort(function (x, y) { return (x.visits[0] ? pd(x.visits[0].from) : 0) - (y.visits[0] ? pd(y.visits[0].from) : 0); });
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (id) { return document.getElementById(id); };
  var CK = { EU: 1, AS: 2, AF: 3, NA: 4, SA: 5, OC: 6 };
  var CN = { 1: 'EUROPE', 2: 'ASIA', 3: 'AFRICA', 4: 'NORTH AMERICA', 5: 'SOUTH AMERICA', 6: 'OCEANIA' };
  var CKEY = { 1: 'EU', 2: 'AS', 3: 'AF', 4: 'NA', 5: 'SA', 6: 'OC' };
  var TOT = { EU: 44, AS: 48, AF: 54, NA: 23, SA: 12, OC: 14 };
  /* ---------- Data ---------- */
  var ALL = V.map(function (c, i) { c.wish = false; c.no = i + 1; return c; }).concat(WL.map(function (c) { c.wish = true; return c; }));
  var showWish = true;

  /* ---------- Čítače ---------- */
  function uniq(k) { var o = {}; V.forEach(function (c) { o[c[k]] = 1; }); return Object.keys(o).length; }
  function setDigits(el, n) { var s = String(n); if (s.length < 2) s = '0' + s; el.innerHTML = s.split('').map(function (d) { return '<i>' + d + '</i>'; }).join(''); }
  function counter(el, to) {
    if (reduce) return setDigits(el, to);
    var t0 = performance.now(); (function f(t) { var k = Math.min(1, (t - t0) / 1100); setDigits(el, Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(f); })(t0);
  }
  counter($('n-cities'), V.length); counter($('n-countries'), uniq('country')); counter($('n-conts'), uniq('cont'));
  $('n-wish').textContent = WL.length;
  if (!WL.length) { $('btn-wish').style.display = 'none'; showWish = false; }
  function dist(a, b) {
    var r = Math.PI / 180, dLa = (b.lat - a.lat) * r, dLo = (b.lon - a.lon) * r;
    var h = Math.sin(dLa / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLo / 2) ** 2;
    return 12742 * Math.asin(Math.sqrt(h));
  }
  function fmt(n) { return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }

  /* ============================================================
     ZEMĚKOULE: kreslí ji WebGL shader (den, noc, mraky), nad ní je 2D vrstva s piny
     ============================================================ */
  var DEG = Math.PI / 180, TAU = Math.PI * 2;
  var cv = $('map'), cx = cv.getContext('2d'), glc = $('gl'), stc = $('stars');
  var W = 0, H = 0, DPR = 1;
  var lon0 = -22 * DEG, lat0 = 36 * DEG, z = 1;          /* střed pohledu a přiblížení */
  var lay = { cx: 0, cy: 0, base: 200 }, layT = { cx: 0, cy: 0, base: 200 };
  var ZMIN = .55, ZMAX = 30;
  var need = true, sel = null, selC = 0, dn = true, anim = null, hov = null, hovK = null, items = [];
  var haveGeo = true;
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function mod(a, n) { return ((a % n) + n) % n; }
  function wrapLon(l) { return mod(l + Math.PI, TAU) - Math.PI; }
  function R() { return lay.base * z; }
  function unit(lo, la) { var c = Math.cos(la * DEG); return [c * Math.sin(lo * DEG), Math.sin(la * DEG), c * Math.cos(lo * DEG)]; }
  ALL.forEach(function (c) { c.u = unit(c.lon, c.lat); });

  /* ---------- Rozložení: kam se postaví koule (podle karty a mobilu) ---------- */
  function layout() {
    var mobile = innerWidth <= 720, panel = !!(sel || selC);
    if (mobile) {
      if (panel) { layT.cx = W / 2; layT.cy = H * .2 + 40; layT.base = Math.min(W * .36, H * .15); }
      else { layT.cx = W / 2; layT.cy = H * .56; layT.base = Math.min(W * .44, H * .3); }
    } else {
      var pw = panel ? 368 : 0;
      layT.cx = (W - pw) / 2; layT.cy = H * .53; layT.base = Math.min((W - pw) * .4, H * .405);
    }
  }
  function resize() {
    W = innerWidth; H = innerHeight; DPR = Math.min(window.devicePixelRatio || 1, 2);
    [cv, glc, stc].forEach(function (c) { c.width = Math.round(W * DPR); c.height = Math.round(H * DPR); });
    cx.setTransform(DPR, 0, 0, DPR, 0, 0);
    drawStars(); layout(); lay.cx = layT.cx; lay.cy = layT.cy; lay.base = layT.base; need = true;
  }
  function drawStars() {
    var g = stc.getContext('2d'), s = 7; g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, stc.width, stc.height);
    for (var i = 0; i < 420; i++) {
      s = (s * 16807) % 2147483647; var a = s / 2147483647; s = (s * 16807) % 2147483647; var b = s / 2147483647; s = (s * 16807) % 2147483647; var c = s / 2147483647;
      g.fillStyle = 'rgba(' + (c > .8 ? '255,230,200' : '215,230,255') + ',' + (.15 + c * .6).toFixed(2) + ')';
      var r = (c > .96 ? 1.6 : 1) * DPR; g.fillRect(a * stc.width, b * stc.height, r, r);
    }
  }

  /* ---------- Slunce (skutečná poloha podle času) ---------- */
  var sunLon = 0, sunLat = 0;
  function updateSun() {
    var n = new Date(), h = n.getUTCHours() + n.getUTCMinutes() / 60 + n.getUTCSeconds() / 3600;
    var doy = Math.floor((n - Date.UTC(n.getUTCFullYear(), 0, 0)) / 864e5);
    sunLat = -23.44 * DEG * Math.cos(TAU / 365 * (doy + 10)); sunLon = -(h - 12) * 15 * DEG;
  }
  /* rotace svět → pohled: vrací [x, y, z] (z > 0 = přivrácená strana) */
  var cl0 = 1, sl0 = 0, cp0 = 1, sp0 = 0;
  function setRot() { cl0 = Math.cos(lon0); sl0 = Math.sin(lon0); cp0 = Math.cos(lat0); sp0 = Math.sin(lat0); }
  function rot(u) {
    var x1 = u[0] * cl0 - u[2] * sl0, z1 = u[0] * sl0 + u[2] * cl0;
    return [x1, u[1] * cp0 - z1 * sp0, u[1] * sp0 + z1 * cp0];
  }
  function sunView() {
    if (!dn) return [-.35, .45, .82];
    var c = Math.cos(sunLat); return rot([c * Math.sin(sunLon), Math.sin(sunLat), c * Math.cos(sunLon)]);
  }
  function inv(X, Y) {      /* pixel → [lon, lat] v radiánech, nebo null mimo kouli */
    var r = R(), u = (X - lay.cx) / r, v = (lay.cy - Y) / r, rho2 = u * u + v * v;
    if (rho2 > 1) return null;
    var c = Math.sqrt(1 - rho2);
    return [lon0 + Math.atan2(u, c * cp0 - v * sp0), Math.asin(clamp(c * sp0 + v * cp0, -1, 1))];
  }

  /* ---------- WebGL ---------- */
  var gl = null, prog = null, U = {}, texReady = 0, TEXN = 3;
  var VS = '#version 300 es\nvoid main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));gl_Position=vec4(p*2.0-1.0,0.0,1.0);}';
  var FS = '#version 300 es\nprecision highp float;\n' +
    'uniform vec2 uC;uniform float uR,uLon0,uLat0,uShift,uDN;uniform vec3 uSun;uniform sampler2D tDay,tNight,tAux;out vec4 o;\n' +
    'const float PI=3.14159265359;\n' +
    'void main(){\n' +
    ' vec2 p=(gl_FragCoord.xy-uC)/uR;float rr=length(p);\n' +
    ' float cov=clamp((1.0-rr)*uR+0.5,0.0,1.0);\n' +
    ' float d=max(rr-1.0,0.0);vec2 dir=p/max(rr,1e-4);\n' +
    ' float lg=clamp(dot(normalize(vec3(dir*0.8,0.35)),uSun)*0.6+0.55,0.18,1.0);\n' +
    ' float ga=(0.72*exp(-d*24.0)+0.28*exp(-d*7.0))*lg;\n' +
    ' vec3 gc=vec3(0.36,0.56,1.0)*ga;\n' +
    ' if(cov<=0.0){o=vec4(gc*0.9,ga*0.9);return;}\n' +
    ' float cz=sqrt(max(0.0,1.0-rr*rr));vec3 n=vec3(p,cz);\n' +
    ' float s0=sin(uLat0),c0=cos(uLat0);\n' +
    ' float lat=asin(clamp(cz*s0+p.y*c0,-1.0,1.0));\n' +
    ' float lon=uLon0+atan(p.x,cz*c0-p.y*s0);\n' +
    ' vec2 uv=vec2(lon/(2.0*PI)+0.5,0.5-lat/PI);\n' +
    ' vec2 dx=dFdx(uv),dy=dFdy(uv);dx.x-=floor(dx.x+0.5);dy.x-=floor(dy.x+0.5);\n' +
    ' vec3 day=textureGrad(tDay,uv,dx,dy).rgb;vec3 nit=textureGrad(tNight,uv,dx,dy).rgb;\n' +
    ' vec4 aux=textureGrad(tAux,vec2(uv.x+uShift,uv.y),dx,dy);\n' +
    ' float nd=dot(n,uSun);\n' +
    ' float lit=0.08+0.92*pow(max(nd,0.0),0.82);\n' +
    ' float dl=smoothstep(-0.08,0.22,nd);\n' +
    ' vec3 c=day*lit*1.12;\n' +
    ' float cl=clamp((aux.r-0.38)*1.55,0.0,1.0)*0.92;c=mix(c,vec3(lit*1.1),cl);\n' +
    ' vec3 h=normalize(uSun+vec3(0.0,0.0,1.0));\n' +
    ' float sp=pow(max(dot(n,h),0.0),70.0)*aux.g*0.55*step(0.0,nd)*(1.0-cl);c+=vec3(1.0,0.95,0.85)*sp;\n' +
    ' float tw=(1.0-dl)*0.92*uDN;\n' +
    ' c=mix(c,vec3(0.035,0.05,0.095)+nit*vec3(1.25,1.1,0.85),tw);\n' +
    ' float fr=pow(1.0-cz,2.6);c+=vec3(0.16,0.31,0.78)*fr*(0.25+0.75*clamp(nd+0.3,0.0,1.0));\n' +
    ' o=vec4(c*cov+gc*(1.0-cov)*0.9,cov+ga*0.9*(1.0-cov));\n' +
    '}';
  function sh(type, src) {
    var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.error(gl.getShaderInfoLog(s)); return null; }
    return s;
  }
  function loadTex(unit, url, name) {
    var t = gl.createTexture(), im = new Image();
    im.onload = function () {
      gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, t);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      var ext = gl.getExtension('EXT_texture_filter_anisotropic');
      if (ext) gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(8, gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)));
      gl.uniform1i(U[name], unit);
      if (++texReady === TEXN) { glc.classList.add('ready'); need = true; }
    };
    im.src = url;
  }
  function initGL() {
    gl = glc.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: 'high-performance' });
    if (!gl) return false;
    var vs = sh(gl.VERTEX_SHADER, VS), fs = sh(gl.FRAGMENT_SHADER, FS); if (!vs || !fs) return false;
    prog = gl.createProgram(); gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { console.error(gl.getProgramInfoLog(prog)); return false; }
    gl.useProgram(prog); gl.bindVertexArray(gl.createVertexArray());
    ['uC', 'uR', 'uLon0', 'uLat0', 'uShift', 'uDN', 'uSun', 'tDay', 'tNight', 'tAux'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
    gl.clearColor(0, 0, 0, 0);
    loadTex(0, 'earth/day.jpg', 'tDay'); loadTex(1, 'earth/night.jpg', 'tNight'); loadTex(2, 'earth/aux.jpg', 'tAux');
    return true;
  }
  function drawGlobe(t) {
    if (!gl || texReady < TEXN) return;
    var s = sunView();
    gl.viewport(0, 0, glc.width, glc.height); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(U.uC, lay.cx * DPR, (H - lay.cy) * DPR); gl.uniform1f(U.uR, R() * DPR);
    gl.uniform1f(U.uLon0, lon0); gl.uniform1f(U.uLat0, lat0);
    gl.uniform1f(U.uShift, (t * 1.2e-6) % 1); gl.uniform1f(U.uDN, dn ? 1 : 0);
    gl.uniform3f(U.uSun, s[0], s[1], s[2]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  /* ---------- Hranice států (volitelné, z internetu; bez nich glóbus funguje dál) ---------- */
  var BR = { lo: null, hi: null };
  function lines(coords) {
    return coords.map(function (r) { var a = new Float32Array(r.length * 3); r.forEach(function (p, i) { var u = unit(p[0], p[1]); a[i * 3] = u[0]; a[i * 3 + 1] = u[1]; a[i * 3 + 2] = u[2]; }); return a; });
  }
  function loadBorders() {
    function add(src, cb) { var s = document.createElement('script'); s.src = src; s.onload = cb; s.onerror = function () {}; document.head.appendChild(s); }
    function get(res, done) {
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-' + res + '.json').then(function (r) { return r.json(); }).then(function (t) {
        var m = topojson.mesh(t, t.objects.countries, function (a, b) { return a !== b; });
        done(lines(m.type === 'MultiLineString' ? m.coordinates : [m.coordinates]));
      }).catch(function () {});
    }
    add('https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js', function () {
      get('110m', function (l) { BR.lo = l; need = true; get('50m', function (l2) { BR.hi = l2; need = true; }); });
    });
  }
  function drawBorders() {
    var set = (z > 2.2 && BR.hi) ? BR.hi : BR.lo; if (!set) return;
    var r = R(), a = clamp(.2 + (z - 1) * .08, .2, .5), C = lay.cx, Y0 = lay.cy;
    cx.beginPath();
    for (var li = 0; li < set.length; li++) {
      var L = set[li], n = L.length / 3, pen = false, lx = -1e9, ly = -1e9;
      for (var i = 0; i < n; i++) {
        var ux = L[i * 3], uy = L[i * 3 + 1], uz = L[i * 3 + 2];
        var x1 = ux * cl0 - uz * sl0, z1 = ux * sl0 + uz * cl0, zz = uy * sp0 + z1 * cp0;
        if (zz <= 0) { pen = false; continue; }
        var px = C + r * x1, py = Y0 - r * (uy * cp0 - z1 * sp0);
        if (pen && i < n - 1 && Math.abs(px - lx) < .6 && Math.abs(py - ly) < .6) continue;
        if (px < -50 || px > W + 50 || py < -50 || py > H + 50) { pen = false; lx = px; ly = py; continue; }
        if (!pen) { cx.moveTo(px, py); pen = true; } else cx.lineTo(px, py);
        lx = px; ly = py;
      }
    }
    cx.lineWidth = .8; cx.strokeStyle = 'rgba(255,255,255,' + a.toFixed(2) + ')'; cx.stroke();
  }

  /* ---------- Piny, shluky a popisky ---------- */
  function list() { return showWish ? ALL : V; }
  function clusterR() { var m = innerWidth <= 720 ? 15 : 17, k = clamp((z - 1.2) / 2, 0, 1); return m * (1 - .9 * k); }
  function inCont(c) { return !selC || c.cont === CKEY[selC]; }
  function drawOverlay(t) {
    cx.clearRect(0, 0, W, H); setRot();
    drawBorders();
    var r = R(), L = list(), vis = [];
    L.forEach(function (c) {
      var q = rot(c.u); if (q[2] < .06) return;
      vis.push({ c: c, x: lay.cx + r * q[0], y: lay.cy - r * q[1], z: q[2], n: 1, mem: null });
    });
    vis.sort(function (a, b) { return (b.c === sel) - (a.c === sel) || b.z - a.z; });
    var RC = clusterR(), out = [];
    vis.forEach(function (p) {
      var q = null;
      if (p.c !== sel) for (var i = 0; i < out.length; i++) { var m = out[i]; if (m.c !== sel && Math.hypot(m.x - p.x, m.y - p.y) < RC) { q = m; break; } }
      if (q) { if (!q.mem) q.mem = [{ x: q.x, y: q.y, c: q.c }]; q.mem.push({ x: p.x, y: p.y, c: p.c }); q.n++; q.cities.push(p.c);
        q.x = q.mem.reduce(function (s, m2) { return s + m2.x; }, 0) / q.n; q.y = q.mem.reduce(function (s, m2) { return s + m2.y; }, 0) / q.n; q.z = Math.max(q.z, p.z); }
      else { p.cities = [p.c]; out.push(p); }
    });
    /* shluky, jejichž značky by se překrývaly, se sloučí do jednoho */
    for (var again = true, guard = 0; again && guard < 30; guard++) {
      again = false;
      for (var a = 0; a < out.length && !again; a++) for (var b = a + 1; b < out.length && !again; b++) {
        var A = out[a], B = out[b];
        if ((A.n > 1 || B.n > 1) && A.c !== sel && B.c !== sel && Math.hypot(A.x - B.x, A.y - B.y) < Math.max(RC, 27 * clamp(1.4 - z / 6, 0, 1))) {
          A.cities = A.cities.concat(B.cities); A.x = (A.x * A.n + B.x * B.n) / (A.n + B.n); A.y = (A.y * A.n + B.y * B.n) / (A.n + B.n); A.n += B.n; A.z = Math.max(A.z, B.z); out.splice(b, 1); again = true;
        }
      }
    }
    out.forEach(function (p) { p.k = p.n > 1; p.rad = p.k ? 17 : 13; p.dim = p.k ? !p.cities.some(inCont) : !inCont(p.c); });
    out.sort(function (a, b) { return a.z - b.z; });
    items = out;
    var pulse = (t % 1800) / 1800, big = innerWidth > 720;
    out.forEach(function (p) {
      var al = clamp((p.z - .06) / .22, 0, 1) * (p.dim ? .3 : 1);
      cx.globalAlpha = al;
      if (p.k) {
        var hv = hovK === p.cities[0].id;
        cx.save(); cx.shadowColor = 'rgba(242,194,77,.9)'; cx.shadowBlur = 18; cx.fillStyle = hv ? '#ffe08a' : '#f2c24d'; cx.beginPath(); cx.arc(p.x, p.y, 13, 0, TAU); cx.fill(); cx.restore();
        cx.strokeStyle = 'rgba(255,255,255,.85)'; cx.lineWidth = 1.2; cx.beginPath(); cx.arc(p.x, p.y, 13, 0, TAU); cx.stroke();
        cx.fillStyle = '#1a1203'; cx.font = '800 13px Inter,system-ui,sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText(p.n, p.x, p.y + .5);
      } else {
        var c = p.c, isSel = c === sel, isH = c === hov, w = c.wish;
        if (w) {
          cx.strokeStyle = 'rgba(255,224,138,.9)'; cx.setLineDash([3, 3]); cx.lineWidth = 1.4; cx.beginPath(); cx.arc(p.x, p.y, 6, 0, TAU); cx.stroke(); cx.setLineDash([]);
        } else {
          cx.save(); cx.shadowColor = '#f2c24d'; cx.shadowBlur = isSel ? 22 : 14; cx.fillStyle = isSel ? '#fff' : '#ffe08a';
          cx.beginPath(); cx.arc(p.x, p.y, isSel ? 5.6 : (isH ? 5 : 3.6), 0, TAU); cx.fill(); cx.restore();
          cx.strokeStyle = isSel ? '#fff' : 'rgba(255,224,138,.85)'; cx.lineWidth = 1.3; cx.beginPath(); cx.arc(p.x, p.y, isSel ? 12 : (isH ? 10 : 8), 0, TAU); cx.stroke();
        }
        if (isSel) { cx.strokeStyle = 'rgba(242,194,77,' + (1 - pulse).toFixed(2) + ')'; cx.lineWidth = 2; cx.beginPath(); cx.arc(p.x, p.y, 12 + pulse * 22, 0, TAU); cx.stroke(); }
      }
    });
    /* popisky: chamtivě, aby se nepřekrývaly */
    var fs = big ? 14 : 13, used = [];
    cx.font = '700 ' + fs + 'px Inter,system-ui,sans-serif'; cx.textBaseline = 'middle'; cx.lineJoin = 'round';
    var cand = out.filter(function (p) { return !p.k && !p.dim; }).sort(function (a, b) { return (b.c === sel) - (a.c === sel) || (b.c === hov) - (a.c === hov) || b.z - a.z; });
    cand.forEach(function (p) {
      var c = p.c, w = cx.measureText(c.name).width + 4, h = fs + 5, force = c === sel || c === hov;
      var spots = [[12, 0, 'l'], [-12, 0, 'r'], [0, -18, 'c'], [0, 19, 'c'], [12, -15, 'l'], [-12, -15, 'r'], [12, 15, 'l'], [-12, 15, 'r']];
      for (var i = 0; i < spots.length; i++) {
        var s2 = spots[i], px = p.x + s2[0], py = p.y + s2[1], l = s2[2] === 'l' ? px : s2[2] === 'r' ? px - w : px - w / 2;
        var B = { l: l - 1, r: l + w + 1, t: py - h / 2, b: py + h / 2 };
        if (!force && used.some(function (u) { return !(B.r < u.l || B.l > u.r || B.b < u.t || B.t > u.b); })) continue;
        if (!force && out.some(function (m) { return m !== p && m.x > B.l - 6 && m.x < B.r + 6 && m.y > B.t - 5 && m.y < B.b + 5; })) continue;
        used.push(B); cx.globalAlpha = clamp((p.z - .06) / .22, 0, 1);
        cx.textAlign = s2[2] === 'l' ? 'left' : s2[2] === 'r' ? 'right' : 'center';
        cx.lineWidth = 4; cx.strokeStyle = 'rgba(3,3,12,.85)'; cx.strokeText(c.name, px, py);
        cx.fillStyle = c === sel ? '#ffe9b8' : c.wish ? 'rgba(255,255,255,.7)' : '#fff'; cx.fillText(c.name, px, py);
        break;
      }
    });
    cx.globalAlpha = 1; cx.textAlign = 'left';
  }

  /* ---------- Pohyb kamery ---------- */
  var idleAt = performance.now();
  function go(v, ms) {
    var tl = wrapLon(v.lon * DEG), ta = clamp(v.lat * DEG, -1.4, 1.4), tz = clamp(v.z, ZMIN, ZMAX);
    if (reduce) { lon0 = tl; lat0 = ta; z = tz; need = true; return; }
    anim = { t0: performance.now(), d: ms || 1000, l0: lon0, a0: lat0, z0: z, dl: mod(tl - lon0 + Math.PI, TAU) - Math.PI, a1: ta, z1: tz };
  }
  var vl = 0, va = 0;
  function frame(t) {
    var dt = Math.min(.1, (t - (frame.t || t)) / 1000); frame.t = t;
    if (anim) {
      var k = Math.min(1, (t - anim.t0) / anim.d), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      lon0 = wrapLon(anim.l0 + anim.dl * e); lat0 = anim.a0 + (anim.a1 - anim.a0) * e;
      z = Math.exp(Math.log(anim.z0) + (Math.log(anim.z1) - Math.log(anim.z0)) * e);
      if (k >= 1) anim = null;
    } else if (vl || va) {
      lon0 = wrapLon(lon0 + vl); lat0 = clamp(lat0 + va, -1.45, 1.45); vl *= .93; va *= .93;
      if (Math.abs(vl) < 1e-5 && Math.abs(va) < 1e-5) vl = va = 0;
    } else if (!reduce && !sel && !selC && !down && !hov && !hovK && z < 2.4 && t - idleAt > 3500 && !document.hidden) {
      lon0 = wrapLon(lon0 - dt * .03);
    }
    var moving = false;
    ['cx', 'cy', 'base'].forEach(function (p) {
      var d = layT[p] - lay[p];
      if (Math.abs(d) > .25) { lay[p] += reduce ? d : d * .14; moving = true; } else lay[p] = layT[p];
    });
    drawGlobe(t); drawOverlay(t);
    requestAnimationFrame(frame);
  }

  /* ---------- Ovládání: tažení, kolečko, štípnutí, klik ---------- */
  var ptrs = {}, down = false, moved = 0, grab = null, pinch = 0, lastMove = 0;
  function pcount() { return Object.keys(ptrs).length; }
  function pdist() { var k = Object.keys(ptrs); return Math.hypot(ptrs[k[0]][0] - ptrs[k[1]][0], ptrs[k[0]][1] - ptrs[k[1]][1]); }
  cv.addEventListener('pointerdown', function (e) {
    cv.setPointerCapture(e.pointerId); ptrs[e.pointerId] = [e.clientX, e.clientY];
    down = true; moved = 0; vl = va = 0; anim = null; idleAt = performance.now(); cv.classList.add('drag');
    grab = inv(e.clientX, e.clientY);
    if (pcount() === 2) pinch = pdist();
  });
  cv.addEventListener('pointermove', function (e) {
    idleAt = performance.now();
    if (!ptrs[e.pointerId]) { setHover(e.clientX, e.clientY); return; }
    var p = ptrs[e.pointerId], dx = e.clientX - p[0], dy = e.clientY - p[1]; ptrs[e.pointerId] = [e.clientX, e.clientY];
    if (pcount() === 2) { var d = pdist(); zoomAt(e.clientX, e.clientY, d / pinch); pinch = d; moved += 10; return; }
    moved += Math.abs(dx) + Math.abs(dy);
    var before = [lon0, lat0];
    if (grab) {                       /* chycený bod zůstane pod prstem */
      var g = inv(e.clientX, e.clientY);
      if (g) { lon0 = wrapLon(lon0 + grab[0] - g[0]); lat0 = clamp(lat0 + grab[1] - g[1], -1.45, 1.45); setRot(); }
      else { grab = null; }
    }
    if (!grab) { var r = R(); lon0 = wrapLon(lon0 - dx / (r * Math.max(.25, Math.cos(lat0)))); lat0 = clamp(lat0 + dy / r, -1.45, 1.45); }
    vl = wrapLon(lon0 - before[0]); va = lat0 - before[1]; lastMove = performance.now();
    setRot();
  });
  function hit(x, y, extra) {
    var best = null, bd = 1e9;
    items.forEach(function (it) { var d = Math.hypot(it.x - x, it.y - y); if (d < it.rad + (extra || 0) && d < bd) { bd = d; best = it; } });
    return best;
  }
  function setHover(x, y) {
    var it = hit(x, y), c = it && !it.k ? it.c : null, kk = it && it.k ? it.cities[0].id : null;
    if (c !== hov || kk !== hovK) { hov = c; hovK = kk; cv.style.cursor = it ? 'pointer' : ''; }
  }
  cv.addEventListener('pointerleave', function () { hov = null; hovK = null; });
  function up(e) {
    delete ptrs[e.pointerId]; if (!pcount()) { down = false; cv.classList.remove('drag'); }
    grab = pcount() === 1 ? inv.apply(null, ptrs[Object.keys(ptrs)[0]]) : null;
    if (moved < 6 && e.type === 'pointerup') pick(e.clientX, e.clientY);
    if (performance.now() - lastMove > 80 || reduce) vl = va = 0;
    idleAt = performance.now();
  }
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', function (e) { e.preventDefault(); idleAt = performance.now(); anim = null; zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * (e.ctrlKey ? .01 : .0014))); }, { passive: false });
  function zoomAt(x, y, f) {
    setRot(); var g0 = inv(x, y); z = clamp(z * f, ZMIN, ZMAX);
    var g1 = inv(x, y);
    if (g0 && g1) { lon0 = wrapLon(lon0 + g0[0] - g1[0]); lat0 = clamp(lat0 + g0[1] - g1[1], -1.45, 1.45); }
    setRot();
  }
  function pick(x, y) {
    var it = hit(x, y, 8);
    if (!it) { if (sel) close(); return; }
    if (it.k) { if (sel) close(); fitPts(it.cities); } else { open(it.c); }
  }
  /* přiblížení na skupinu měst (klik na shluk) */
  function fitPts(arr) {
    var sx = 0, sy = 0, sz = 0;
    arr.forEach(function (c) { sx += c.u[0]; sy += c.u[1]; sz += c.u[2]; });
    var m = Math.hypot(sx, sy, sz) || 1, cl = [sx / m, sy / m, sz / m], ang = 0;
    arr.forEach(function (c) { ang = Math.max(ang, Math.acos(clamp(c.u[0] * cl[0] + c.u[1] * cl[1] + c.u[2] * cl[2], -1, 1))); });
    var mobile = innerWidth <= 720, avail = mobile ? Math.min(W * .4, H * .25) : Math.min(W, H) * .3;
    var zt = clamp(avail / (Math.max(.004, Math.sin(Math.min(ang, 1.2))) * layBase()), 1.4, 20);
    if (arr.length > 1) zt = Math.max(zt, Math.min(ZMAX, z * 1.7));
    go({ lon: Math.atan2(cl[0], cl[2]) / DEG, lat: Math.asin(clamp(cl[1], -1, 1)) / DEG, z: zt }, 1000);
  }
  function layBase() { return layT.base; }
  /* ---------- Vlajky (kreslené, bez emoji, aby fungovaly všude) ---------- */
  var FLAGCODE = { 'Austria': 'AT', 'Slovakia': 'SK', 'Hungary': 'HU', 'Croatia': 'HR', 'Germany': 'DE', 'Italy': 'IT', 'Bulgaria': 'BG', 'Poland': 'PL',
    'Czechia': 'CZ', 'Czech Republic': 'CZ', 'USA': 'US', 'United States': 'US', 'United Arab Emirates': 'AE', 'France': 'FR', 'Netherlands': 'NL',
    'Belgium': 'BE', 'Spain': 'ES', 'Romania': 'RO', 'Ireland': 'IE', 'Russia': 'RU', 'Ukraine': 'UA', 'Slovenia': 'SI', 'Sweden': 'SE',
    'Switzerland': 'CH', 'Denmark': 'DK', 'Finland': 'FI', 'Japan': 'JP', 'Lithuania': 'LT', 'Estonia': 'EE', 'Luxembourg': 'LU' };
  function drawFlag(cv2, country) {
    var code = FLAGCODE[country] || '', g = cv2.getContext('2d'), w = cv2.width, h = cv2.height;
    function S3(cols, vert) { cols.forEach(function (c, i) { g.fillStyle = c; vert ? g.fillRect(i * w / cols.length, 0, w / cols.length + .5, h) : g.fillRect(0, i * h / cols.length, w, h / cols.length + .5); }); }
    function cross(bg, fg, cxr) { g.fillStyle = bg; g.fillRect(0, 0, w, h); g.fillStyle = fg; g.fillRect(0, h * .42, w, h * .16); g.fillRect(w * (cxr || .3), 0, h * .16 * (w / h) * .8, h); }
    var F = {
      AT: function () { S3(['#ed2939', '#fff', '#ed2939']); }, HU: function () { S3(['#cd2a3e', '#fff', '#436f4d']); },
      DE: function () { S3(['#000', '#dd0000', '#ffce00']); }, IT: function () { S3(['#009246', '#fff', '#ce2b37'], 1); },
      PL: function () { S3(['#fff', '#dc143c']); }, BG: function () { S3(['#fff', '#00966e', '#d62612']); },
      CZ: function () { S3(['#fff', '#d7141a']); g.fillStyle = '#11457e'; g.beginPath(); g.moveTo(0, 0); g.lineTo(w * .5, h / 2); g.lineTo(0, h); g.fill(); },
      SK: function () { S3(['#fff', '#0b4ea2', '#ee1c25']); g.fillStyle = '#ee1c25'; g.fillRect(w * .22, h * .25, w * .2, h * .5); g.fillStyle = '#fff'; g.fillRect(w * .3, h * .32, w * .04, h * .36); g.fillRect(w * .25, h * .42, w * .14, h * .05); },
      HR: function () { S3(['#ff0000', '#fff', '#171796']); g.fillStyle = '#ff0000'; g.fillRect(w * .4, h * .3, w * .2, h * .4); g.fillStyle = '#fff'; for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) if ((i + j) % 2) g.fillRect(w * .4 + i * w * .2 / 3, h * .3 + j * h * .4 / 3, w * .2 / 3, h * .4 / 3); },
      US: function () { for (var i = 0; i < 7; i++) { g.fillStyle = i % 2 ? '#fff' : '#b22234'; g.fillRect(0, i * h / 7, w, h / 7 + .5); } g.fillStyle = '#3c3b6e'; g.fillRect(0, 0, w * .42, h * 4 / 7); },
      AE: function () { S3(['#00732f', '#fff', '#000']); g.fillStyle = '#f00'; g.fillRect(0, 0, w * .28, h); },
      FR: function () { S3(['#0055a4', '#fff', '#ef4135'], 1); }, NL: function () { S3(['#ae1c28', '#fff', '#21468b']); }, BE: function () { S3(['#000', '#fae042', '#ed2939'], 1); },
      ES: function () { g.fillStyle = '#aa151b'; g.fillRect(0, 0, w, h); g.fillStyle = '#f1bf00'; g.fillRect(0, h * .25, w, h * .5); },
      RO: function () { S3(['#002b7f', '#fcd116', '#ce1126'], 1); }, IE: function () { S3(['#169b62', '#fff', '#ff883e'], 1); },
      RU: function () { S3(['#fff', '#0039a6', '#d52b1e']); }, UA: function () { S3(['#0057b7', '#ffd700']); }, SI: function () { S3(['#fff', '#005da4', '#ed1c24']); },
      LT: function () { S3(['#fdb913', '#006a44', '#c1272d']); }, EE: function () { S3(['#0072ce', '#000', '#fff']); }, LU: function () { S3(['#ed2939', '#fff', '#00a1de']); },
      SE: function () { cross('#006aa7', '#fecc00'); }, DK: function () { cross('#c8102e', '#fff'); }, FI: function () { cross('#fff', '#003580'); },
      CH: function () { g.fillStyle = '#d52b1e'; g.fillRect(0, 0, w, h); g.fillStyle = '#fff'; g.fillRect(w * .43, h * .2, w * .14, h * .6); g.fillRect(w * .3, h * .43, w * .4, h * .14); },
      JP: function () { g.fillStyle = '#fff'; g.fillRect(0, 0, w, h); g.fillStyle = '#bc002d'; g.beginPath(); g.arc(w / 2, h / 2, h * .3, 0, 7); g.fill(); }
    };
    if (F[code]) F[code](); else { g.fillStyle = '#3a2f14'; g.fillRect(0, 0, w, h); g.fillStyle = '#ffe9b8'; g.font = '700 ' + Math.round(h * .45) + 'px ui-monospace,monospace'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(country.slice(0, 2).toUpperCase(), w / 2, h / 2 + 1); }
    g.strokeStyle = 'rgba(255,255,255,.35)'; g.lineWidth = 1; g.strokeRect(.5, .5, w - 1, h - 1);
  }
  function flagEl(country, w, h) { var c = document.createElement('canvas'); c.width = w * 2; c.height = h * 2; c.style.width = w + 'px'; c.style.height = h + 'px'; c.className = 'fl'; drawFlag(c, country); return c; }

  /* ---------- Karta ---------- */
  var ICONS = {
    plane: 'M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z',
    train: 'M6 3h12a2 2 0 0 1 2 2v10a3 3 0 0 1-3 3l2 3h-2l-2-3H9l-2 3H5l2-3a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2zm0 3v5h12V6zm2 8a1.3 1.3 0 1 0 0 .01zm8 0a1.3 1.3 0 1 0 0 .01z',
    car: 'M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11v6h-2v-2H7v2H5zm3-1h8l-1-3H9z',
    bus: 'M5 3h14a1 1 0 0 1 1 1v13h-2v2h-3v-2H9v2H6v-2H4V4a1 1 0 0 1 1-1zm1 3v5h12V6z',
    ship: 'M2 17h20l-3 4H5zM11 3h2v7h6l-1 5H6l-1-5h6z'
  };
  function icon(t) { return '<svg viewBox="0 0 24 24"><path d="' + (ICONS[t] || ICONS.plane) + '"/></svg>'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function hueCss(c, i) { var h = (c.name.charCodeAt(0) * 7 + c.name.length * 31 + i * 83) % 360; return 'linear-gradient(135deg,hsl(' + h + ',80%,55%),hsl(' + ((h + 60) % 360) + ',70%,18%))'; }

  function render(c) {
    var L = list(), idx = L.indexOf(c), h = '<div class="cb">';
    h += '<div class="hd"><span>' + (c.wish ? 'WISHLIST' : 'OUTING Nº ' + c.no + ' / ' + V.length) + '</span><i class="' + (c.wish ? 'w' : '') + '">' + (c.wish ? '○ PLANNED' : '● LIVE') + '</i></div>';
    h += '<div class="nm' + (c.name.length > 15 ? ' l3' : c.name.length > 12 ? ' l2' : c.name.length > 9 ? ' long' : '') + '">' + esc(c.name) + '</div>';
    h += '<div class="co"><span>' + esc(c.country.toUpperCase()) + (c.date ? ' · ' + esc(c.date) : '') + '</span><i id="fl-slot"></i></div>';
    var tags = '';
    if (c.transport) tags += '<span>' + icon(c.transport) + esc(c.transport.toUpperCase()) + '</span>';
    if (!c.wish && c.nv > 1) tags += '<span>' + c.nv + ' VISITS</span>';
    if (c.nights) tags += '<span>' + String(c.nights).padStart(2, '0') + ' NIGHTS</span>';
    else if (!c.wish && c.visits.length) tags += '<span>DAY TRIP</span>';
    tags += '<span>' + Math.abs(c.lat).toFixed(2) + (c.lat >= 0 ? 'N ' : 'S ') + Math.abs(c.lon).toFixed(2) + (c.lon >= 0 ? 'E' : 'W') + '</span>';
    h += '<div class="tags">' + tags + '</div>';
    if (c.wish) {
      if (c.note) h += '<div class="note">' + esc(c.note) + '</div>';
      h += '<div class="wl">NOT VISITED YET.<br>' + fmt(dist(D.home, c)) + ' KM FROM ' + esc(D.home.code) + '</div>';
    } else {
      if (c.nv > 1) h += '<div class="vl"><small>ALL VISITS</small>' + c.visits.map(function (v) { return '<div>' + fmtVisit(v) + '</div>'; }).join('') + '</div>';
      var ph = c.photos || [], n = ph.length;
      if (n) {
        var shown = ph.slice(0, 3), one = n === 1 ? ' one' : '';
        h += '<div class="ph' + one + '">' + shown.map(function (u, i) {
          var more = (i === 2 && n > 3) ? '<span class="more">+' + (n - 3) + '</span>' : '';
          return '<button class="im" data-p="' + i + '" type="button" style="background-image:url(\'' + esc(u) + '\')" aria-label="Photo ' + (i + 1) + '">' + more + '</button>';
        }).join('') + '</div>';
      } else {
        h += '<div class="ph">' + [0, 1, 2].map(function (i) { return '<span class="im n" style="background:' + hueCss(c, i) + '"></span>'; }).join('') + '</div>';
      }
      if (c.food && (c.food.dish || c.food.place)) {
        h += '<div class="food"><svg viewBox="0 0 24 24"><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 1-3 4-3 7h3v11"/></svg><div><small>BEST BITE</small>' +
          (c.food.dish ? '<b>' + esc(c.food.dish) + '</b>' : '') + (c.food.place ? '<em>' + esc(c.food.place) + '</em>' : '') + '</div></div>';
      }
      if (c.plus && c.plus.length) h += '<div class="h">+ WHAT I LOVED</div>' + c.plus.map(function (s) { return '<div class="t"><b>+</b>' + esc(s) + '</div>'; }).join('');
      if (c.minus && c.minus.length) h += '<div class="h">− NOT SO MUCH</div>' + c.minus.map(function (s) { return '<div class="t m"><b>−</b>' + esc(s) + '</div>'; }).join('');
    }
    h += '</div><div class="cn"><div><button id="pv" type="button" aria-label="Previous">‹</button><button id="nx" class="x" type="button" aria-label="Next">›</button></div><span>' +
      String(idx + 1).padStart(2, '0') + ' / ' + String(L.length).padStart(2, '0') + '</span><button id="cl" type="button" aria-label="Close">×</button></div>';
    $('card-in').innerHTML = h;
    $('fl-slot').appendChild(flagEl(c.country, 44, 30));
    $('pv').onclick = function () { step(-1); }; $('nx').onclick = function () { step(1); }; $('cl').onclick = close;
    [].forEach.call($('card-in').querySelectorAll('.im[data-p]'), function (b) { b.onclick = function () { openLb(c.photos, +b.dataset.p); }; });
  }

  /* ---------- Otevření a zavření karty ---------- */
  function syncPn() { document.body.classList.toggle('pn', !!(sel || selC)); layout(); }
  function hideCpanel() { $('cp').classList.remove('open'); }
  function open(c, noHash) {
    if (selC) { selC = 0; hideCpanel(); markTabs(); }
    sel = c; render(c); $('card').classList.add('open'); syncPn();
    go({ lon: c.lon, lat: c.lat, z: Math.max(z, innerWidth <= 720 ? 4.4 : 2.6) }, 1100);
    if (!noHash) try { history.replaceState(null, '', '#' + c.id); } catch (e) {}
  }
  function close() {
    sel = null; $('card').classList.remove('open'); syncPn();
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
  }
  function step(d) { var L = list(), i = L.indexOf(sel); if (i < 0) i = 0; open(L[mod(i + d, L.length)]); }
  /* ---------- Fotky na celou obrazovku ---------- */
  var lbList = [], lbI = 0;
  function openLb(arr, i) { lbList = arr; lbI = i; $('lb').hidden = false; showLb(); }
  function showLb() {
    $('lb-st').style.backgroundImage = 'url("' + lbList[lbI] + '")';
    $('lb-c').textContent = (lbI + 1) + ' / ' + lbList.length;
    var m = lbList.length < 2; $('lb-p').style.display = $('lb-n').style.display = m ? 'none' : '';
  }
  function lbStep(d) { lbI = mod(lbI + d, lbList.length); showLb(); }
  function lbClose() { $('lb').hidden = true; }
  $('lb-x').onclick = lbClose; $('lb-p').onclick = function () { lbStep(-1); }; $('lb-n').onclick = function () { lbStep(1); };
  $('lb').addEventListener('click', function (e) { if (e.target === $('lb') || e.target === $('lb-st')) lbClose(); });
  var lx = null;
  $('lb').addEventListener('touchstart', function (e) { lx = e.touches[0].clientX; }, { passive: true });
  $('lb').addEventListener('touchend', function (e) { if (lx === null) return; var d = e.changedTouches[0].clientX - lx; if (Math.abs(d) > 50) lbStep(d < 0 ? 1 : -1); lx = null; });

  /* ---------- Klávesy ---------- */
  document.addEventListener('keydown', function (e) {
    if (!$('lb').hidden) { if (e.key === 'Escape') lbClose(); else if (e.key === 'ArrowRight') lbStep(1); else if (e.key === 'ArrowLeft') lbStep(-1); return; }
    if (e.key === 'Escape') { if (!$('conts').hidden) contsOpen(false); else if (!$('list').hidden) $('list').hidden = true; else if (sel) close(); else if (selC) worldView(); }
    else if (e.key === 'ArrowRight' && sel) step(1);
    else if (e.key === 'ArrowLeft' && sel) step(-1);
  });


  /* ---------- Wishlist a seznam ---------- */
  $('btn-wish').onclick = function () {
    showWish = !showWish; this.classList.toggle('on', showWish); this.setAttribute('aria-pressed', showWish);
    if (!showWish && sel && sel.wish) close(); need = true; if (listMode === 'places') buildList();
  };
  var listMode = 'places';
  function listToggle(mode) {
    var l = $('list'); contsOpen(false);
    if (!l.hidden && listMode === mode) { l.hidden = true; return; }
    listMode = mode; if (mode === 'countries') buildCountries(); else buildList(); l.hidden = false;
  }
  $('btn-list').onclick = function () { listToggle('places'); };
  function buildCountries() {
    var m = {}; V.forEach(function (c) { if (c.visits.length) (m[c.country] = m[c.country] || []).push(c); });
    var names = Object.keys(m).sort(function (a, b) { return m[b].length - m[a].length || (a < b ? -1 : 1); });
    $('list-t').textContent = 'ALL COUNTRIES';
    var body = $('list-body'); body.innerHTML = '';
    names.forEach(function (n) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'it';
      var sp = document.createElement('span'); sp.className = 'cn2'; sp.appendChild(flagEl(n, 24, 16)); sp.appendChild(document.createTextNode(' ' + n));
      var sm = document.createElement('small'); sm.textContent = m[n].length + (m[n].length > 1 ? ' CITIES' : ' CITY');
      b.appendChild(sp); b.appendChild(sm);
      b.onclick = function () { $('list').hidden = true; if (sel) close(); leaveCont(); fitPts(m[n]); };
      body.appendChild(b);
    });
  }
  $('list-x').onclick = function () { $('list').hidden = true; };
  function buildList() {
    var h = V.map(function (c) { return '<button class="it" data-id="' + c.id + '" type="button"><span>' + esc(c.name) + '</span><small>' + esc(c.years || '') + '</small></button>'; }).join('');
    if (showWish) h += '<div class="gh">WISHLIST</div>' + WL.map(function (c) { return '<button class="it w" data-id="' + c.id + '" type="button"><span>' + esc(c.name) + '</span><small>' + esc(c.country) + '</small></button>'; }).join('');
    $('list-t').textContent = 'ALL PLACES'; $('list-body').innerHTML = h;
    [].forEach.call($('list-body').querySelectorAll('.it'), function (b) {
      b.onclick = function () { var c = ALL.filter(function (x) { return x.id === b.dataset.id; })[0]; $('list').hidden = true; open(c); };
    });
  }
  var TABS = [[1, 'EUROPE'], [4, 'N. AMERICA'], [5, 'S. AMERICA'], [2, 'ASIA'], [3, 'AFRICA'], [6, 'OCEANIA']];
  function statsFor(k) {
    var key = CKEY[k], cs = V.filter(function (c) { return c.cont === key && c.visits.length; });
    var co = {}; cs.forEach(function (c) { co[c.country] = 1; });
    var nights = 0, trips = 0; cs.forEach(function (c) { nights += c.nights; trips += c.nv; });
    var nC = Object.keys(co).length, pct = Math.round(nC / TOT[key] * 100);
    var facts = [];
    if (cs.length) {
      var most = cs.slice().sort(function (a, b) { return b.nv - a.nv || b.nights - a.nights; })[0];
      facts.push(most.nv > 1 ? 'Most visited: ' + most.name + ' (' + most.nv + '×)' : 'Longest stay: ' + most.name + ' (' + most.nights + ' nights)');
      var far = cs.slice().sort(function (a, b) { return dist(D.home, b) - dist(D.home, a); })[0];
      if (dist(D.home, far) > 100) facts.push('Farthest from ' + D.home.name + ': ' + far.name + ', ' + fmt(dist(D.home, far)) + ' km');
      if (cs.length > 2) {
        var nth = cs.slice().sort(function (a, b) { return b.lat - a.lat; })[0], sth = cs.slice().sort(function (a, b) { return a.lat - b.lat; })[0];
        facts.push('Northernmost: ' + nth.name); if (sth !== nth) facts.push('Southernmost: ' + sth.name);
      }
    }
    return { cs: cs, co: Object.keys(co), nC: nC, tot: TOT[key], pct: pct, nights: nights, trips: trips, facts: facts };
  }
  function renderCpanel(k) {
    var st = statsFor(k), name = CN[k], cls = name.length > 12 ? ' l3' : name.length > 8 ? ' l2' : ' long';
    var R = 38, C2 = 2 * Math.PI * R, h = '<div class="cb"><div class="hd"><span>CONTINENT</span><i>● SELECTED</i></div>';
    h += '<div class="nm' + cls + '">' + name + '</div>';
    h += '<div class="rg"><svg viewBox="0 0 100 100" width="92" height="92"><circle cx="50" cy="50" r="' + R + '" fill="none" stroke="rgba(242,194,77,.18)" stroke-width="8"/>' +
      '<circle cx="50" cy="50" r="' + R + '" fill="none" stroke="#f2c24d" stroke-width="8" stroke-dasharray="' + (C2 * st.pct / 100).toFixed(1) + ' ' + C2.toFixed(1) + '" transform="rotate(-90 50 50)"/>' +
      '<text x="50" y="57" text-anchor="middle" fill="#fff" font-family="Inter,system-ui,sans-serif" font-weight="800" font-size="22">' + st.pct + '%</text></svg>' +
      '<div><b>' + st.nC + ' / ' + st.tot + '</b><small>COUNTRIES VISITED</small></div></div>';
    h += '<div class="gr"><div><b>' + st.cs.length + '</b><small>CITIES</small></div><div><b>' + st.nights + '</b><small>NIGHTS</small></div><div><b>' + st.trips + '</b><small>TRIPS</small></div></div>';
    if (st.facts.length) h += '<div class="h">DID YOU KNOW</div>' + st.facts.map(function (f) { return '<div class="t"><b>›</b>' + esc(f) + '</div>'; }).join('');
    else h += '<div class="note">NOT VISITED YET.<br>The lights here are still off.</div>';
    if (st.co.length) h += '<div class="h">COUNTRIES</div><div class="fls" id="fls"></div>';
    h += '</div><div class="cn"><span>' + (st.tot - st.nC) + ' COUNTRIES LEFT</span><button id="cp-x" type="button" aria-label="Close">×</button></div>';
    $('cp-in').innerHTML = h;
    var fl = $('fls'); if (fl) st.co.forEach(function (c) { var e = flagEl(c, 32, 22); e.title = c; fl.appendChild(e); });
    $('cp-x').onclick = worldView;
  }

  /* ---------- Kontinenty: tlačítko, pohled, statistiky ---------- */
  var CV = { 1: { lon: 14, lat: 47, z: 2.6 }, 2: { lon: 90, lat: 32, z: 1.35 }, 3: { lon: 20, lat: 3, z: 1.5 },
             4: { lon: -98, lat: 40, z: 1.6 }, 5: { lon: -60, lat: -16, z: 1.65 }, 6: { lon: 134, lat: -25, z: 2 } };
  function contsOpen(on) {
    var box = $('conts'), b = $('btn-cont');
    if (on === undefined) on = box.hidden;
    if (on) { var r = b.getBoundingClientRect(); box.style.top = (r.bottom + 8) + 'px'; box.style.right = Math.max(8, innerWidth - r.right) + 'px'; $('list').hidden = true; }
    box.hidden = !on; b.classList.toggle('on', on);
  }
  function showConts() {
    var box = $('conts');
    box.innerHTML = TABS.map(function (t) { return '<button type="button" data-k="' + t[0] + '"' + (t[0] === selC ? ' class="on"' : '') + '>' + t[1] + '</button>'; }).join('');
    [].forEach.call(box.querySelectorAll('button'), function (b) { b.onclick = function () { contsOpen(false); selectCont(+b.dataset.k); }; });
  }
  function markTabs() { [].forEach.call($('conts').querySelectorAll('button'), function (b) { b.classList.toggle('on', +b.dataset.k === selC); }); $('btn-cont').classList.toggle('sel', !!selC); }
  function selectCont(k) {
    if (sel) { sel = null; $('card').classList.remove('open'); }
    selC = k; renderCpanel(k); $('cp').classList.add('open'); markTabs(); syncPn();
    var v = CV[k], mobile = innerWidth <= 720; go({ lon: v.lon, lat: v.lat, z: mobile ? v.z * .8 : v.z }, 1200);
  }
  function leaveCont() { if (selC) { selC = 0; hideCpanel(); markTabs(); syncPn(); } }
  function worldView(instant) {
    if (selC) { selC = 0; hideCpanel(); markTabs(); } if (sel) { sel = null; $('card').classList.remove('open'); try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} }
    syncPn();
    var vs = V.filter(function (c) { return c.visits.length; }), sx = 0, sy = 0, sz = 0;
    vs.forEach(function (c) { sx += c.u[0]; sy += c.u[1]; sz += c.u[2]; });
    var m = Math.hypot(sx, sy, sz), v = m > .01 ? { lon: Math.atan2(sx, sz) / DEG, lat: Math.asin(sy / m) / DEG, z: 1 } : { lon: 15, lat: 35, z: 1 };
    if (instant) { lon0 = wrapLon(v.lon * DEG); lat0 = v.lat * DEG; z = 1; } else go(v, 1200);
  }

  /* ---------- Start ---------- */
  addEventListener('resize', resize);
  resize();
  if (!initGL()) { $('nogl').hidden = false; }
  worldView(true);
  $('btn-world').onclick = function () { worldView(); };
  $('btn-dn').onclick = function () { dn = !dn; this.classList.toggle('on', dn); this.setAttribute('aria-pressed', dn); };
  $('btn-cont').onclick = function (e) { e.stopPropagation(); contsOpen(); };
  document.addEventListener('click', function (e) { if (!$('conts').hidden && !$('conts').contains(e.target)) contsOpen(false); });
  function bind(id, fn) { var el = $(id).parentNode; el.setAttribute('role', 'button'); el.tabIndex = 0; el.onclick = function (e) { e.stopPropagation(); fn(); }; el.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } }; }
  bind('n-cities', function () { listToggle('places'); });
  bind('n-countries', function () { listToggle('countries'); });
  bind('n-conts', function () { contsOpen(); });
  buildList(); showConts(); updateSun(); setInterval(updateSun, 60000); loadBorders();
  var hash = location.hash.slice(1), start = ALL.filter(function (c) { return c.id === hash; })[0];
  requestAnimationFrame(frame);
  if (start) setTimeout(function () { open(start, true); }, 150);
  window.__outings = { open: open, close: close, ALL: ALL, selectCont: selectCont, worldView: worldView, go: go, state: function () { return { lon: lon0 / DEG, lat: lat0 / DEG, z: z, tex: texReady, items: items.length }; } };
})();
