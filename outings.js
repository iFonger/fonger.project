/* OUTINGS: plochá zlatá mapa. Data jsou v outings-data.js. */
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
  var cv = $('map'), cx = cv.getContext('2d');
  var W = 0, H = 0, DPR = 1;

  /* ---------- Projekce: ploché, dokola ---------- */
  var LAT_TOP = 84, LAT_BOT = -58;
  var S = 3.4, S0 = 3.4, ox = 0, oy = 0;
  function full() { return 360 * S; }
  function mod(a, n) { return ((a % n) + n) % n; }
  function sx(lon) { return mod((lon + 180) * S + ox, full()); }
  function sy(lat) { return oy + (LAT_TOP - lat) * S; }
  function mapH() { return (LAT_TOP - LAT_BOT) * S; }
  function clampY() { var lo = H * .4 - mapH(), hi = H * .6; oy = Math.max(lo, Math.min(hi, oy)); }

  function fit() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * DPR; cv.height = H * DPR;
    cx.setTransform(DPR, 0, 0, DPR, 0, 0);
    S0 = Math.max(2.2, Math.min(4.2, H * .74 / (LAT_TOP - LAT_BOT)));
    landKey = '';
  }

  /* ---------- Kontinenty ---------- */
  var CK = { EU: 1, AS: 2, AF: 3, NA: 4, SA: 5, OC: 6 };
  var CN = { 1: 'EUROPE', 2: 'ASIA', 3: 'AFRICA', 4: 'NORTH AMERICA', 5: 'SOUTH AMERICA', 6: 'OCEANIA' };
  var CKEY = { 1: 'EU', 2: 'AS', 3: 'AF', 4: 'NA', 5: 'SA', 6: 'OC' };
  var TOT = { EU: 44, AS: 48, AF: 54, NA: 23, SA: 12, OC: 14 };
  /* ohraničení pro přiblížení: lon0, lon1, lat0, lat1 */
  var CBOX = { 1: [-25, 45, 34, 72], 2: [25, 150, -10, 70], 3: [-18, 52, -36, 37], 4: [-170, -50, 7, 75], 5: [-82, -34, -56, 13], 6: [110, 180, -48, -1] };
  var HOME = { country: 'Czechia', cont: 'EU' };
  var OC_NAMES = { 'Australia': 1, 'New Zealand': 1, 'Papua New Guinea': 1, 'Fiji': 1, 'Solomon Is.': 1, 'Vanuatu': 1, 'New Caledonia': 1, 'Samoa': 1, 'Tonga': 1, 'Kiribati': 1, 'Micronesia': 1 };
  var AS_NAMES = { 'Indonesia': 1, 'Philippines': 1, 'Timor-Leste': 1, 'Turkey': 1, 'Georgia': 1, 'Armenia': 1, 'Azerbaijan': 1, 'Kazakhstan': 1, 'N. Cyprus': 0 };
  function polysOf(f) { var gm = f.geometry || f; return gm.type === 'Polygon' ? [gm.coordinates] : (gm.type === 'MultiPolygon' ? gm.coordinates : []); }
  function bigCenter(f) {
    var best = null, ba = -1;
    polysOf(f).forEach(function (p) {
      var x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
      p[0].forEach(function (q) { if (q[0] < x0) x0 = q[0]; if (q[0] > x1) x1 = q[0]; if (q[1] < y0) y0 = q[1]; if (q[1] > y1) y1 = q[1]; });
      var a = (x1 - x0) * (y1 - y0); if (a > ba) { ba = a; best = [(x0 + x1) / 2, (y0 + y1) / 2]; }
    });
    return best || [0, 0];
  }
  function contOf(f) {
    var n = (f.properties && f.properties.name) || '';
    if (/Antarctic/.test(n)) return 0;
    if (n === 'Russia') return 2;           /* západ (do Uralu) se dokreslí zvlášť jako Evropa */
    if (n === 'Greenland') return 4;
    if (n === 'Egypt') return 3;
    if (n === 'Malta' || n === 'Cyprus') return 1;
    if (OC_NAMES[n]) return 6;
    if (AS_NAMES[n]) return 2;
    var c = bigCenter(f), lo = c[0], la = c[1];
    if (lo < -30) return la > 7.5 ? 4 : 5;
    if (lo > 110 && la < -8) return 6;
    if (lo < 52 && la > -36 && la < 36) {
      if ((lo > 34 && la > 16) || (lo > 42 && la > 12) || (lo > 33.5 && la > 28)) return 2;
      return 3;
    }
    if (la >= 36 && lo <= 45 && lo > -30) return 1;
    return 2;
  }

  /* ---------- Souš: tečky z reálné mapy (CDN), jinak záložní tečky ---------- */
  var MR = 8, MW = 2880, MH = 1440, maskD = null, borders = null, haveGeo = false;
  var STEPS = [1.25, .625, .3125, .15625], grids = {}, landKey = '', landCv = document.createElement('canvas'), landCx = landCv.getContext('2d');
  var dn = true, sunStamp = 0, sunLon = 0, sunDec = 0, LIFT = 26, lift = 0, liftTo = 0, selC = 0;
  function buildMask(geo) {
    var m = document.createElement('canvas'); m.width = MW; m.height = MH;
    var g = m.getContext('2d');
    function ring(r) { r.forEach(function (p, i) { var x = (p[0] + 180) * MR, y = (90 - p[1]) * MR; i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.closePath(); }
    function paint(f, k) {
      g.fillStyle = 'rgb(' + (k * 36) + ',0,0)';
      polysOf(f).forEach(function (poly) { g.beginPath(); poly.forEach(ring); g.fill('evenodd'); });
    }
    (geo.features || []).forEach(function (f) {
      var k = contOf(f); if (!k) return;
      paint(f, k);
      if (f.properties && f.properties.name === 'Russia') {
        g.save(); g.beginPath(); g.rect(0, 0, (60 + 180) * MR, MH); g.clip(); paint(f, 1); g.restore();
      }
    });
    maskD = g.getImageData(0, 0, MW, MH).data;
  }
  function landAt(lon, lat) {
    var px = ((lon + 180) * MR) | 0, py = ((90 - lat) * MR) | 0;
    if (px < 0) px += MW; else if (px >= MW) px -= MW;
    if (py < 0 || py >= MH) return -1;
    var o = (py * MW + px) * 4;
    return maskD[o + 3] > 100 ? Math.round(maskD[o] / 36) : -1;
  }
  var RAD = [1, 2, 3.5, 5.5], DIRS = [[1, 0], [.7, .7], [0, 1], [-.7, .7], [-1, 0], [-.7, -.7], [0, -1], [.7, -.7]];
  function gridFor(i) {
    if (grids[i]) return grids[i];
    var xs = [], ys = [], dp = [], ct = [], st = STEPS[i];
    if (maskD) {
      for (var lat = LAT_BOT; lat <= LAT_TOP; lat += st) for (var lon = -180; lon < 180; lon += st) {
        var c = landAt(lon, lat); if (c < 0) continue;
        var d = 4;
        for (var r = 0; r < 4 && d === 4; r++) for (var k = 0; k < 8; k++) {
          if (landAt(lon + DIRS[k][0] * RAD[r] * st, lat + DIRS[k][1] * RAD[r] * st) < 0) { d = r; break; }
        }
        xs.push(lon); ys.push(lat); dp.push(d); ct.push(c);
      }
    } else {
      (window.DOTS || []).forEach(function (p) { xs.push(p[0]); ys.push(p[1]); dp.push(1); ct.push(0); });
    }
    return (grids[i] = { x: Float32Array.from(xs), y: Float32Array.from(ys), d: Uint8Array.from(dp), c: Uint8Array.from(ct), stamp: -1, bins: null });
  }
  /* slunce: poloha a rozdělení teček do 30 tříd (hloubka × den/noc) */
  function updateSun() {
    var n = new Date(), h = n.getUTCHours() + n.getUTCMinutes() / 60 + n.getUTCSeconds() / 3600;
    var doy = Math.floor((n - Date.UTC(n.getUTCFullYear(), 0, 0)) / 864e5);
    sunDec = -23.44 * Math.PI / 180 * Math.cos(2 * Math.PI / 365 * (doy + 10));
    sunLon = -(h - 12) * 15; sunStamp++; landKey = ''; need = true;
  }
  var aTab = new Float32Array(1441), bTab = new Float32Array(1441), cTab = new Float32Array(2881);
  function level(sinEl) { var d = (sinEl + .242) / .381; return d <= 0 ? 0 : d >= 1 ? 5 : Math.round(d * 5); }
  function binsFor(gr) {
    if (gr.bins && gr.stamp === sunStamp && gr.dnf === dn) return gr.bins;
    var nL = gr.x.length, cls = new Uint8Array(nL), counts = new Uint32Array(31), i;
    if (dn) {
      for (i = 0; i <= 1440; i++) { var la = (i / 8 - 90) * Math.PI / 180; aTab[i] = Math.sin(la) * Math.sin(sunDec); bTab[i] = Math.cos(la) * Math.cos(sunDec); }
      for (i = 0; i <= 2880; i++) cTab[i] = Math.cos((i / 8 - 180 - sunLon) * Math.PI / 180);
    }
    for (i = 0; i < nL; i++) {
      var n5 = 5;
      if (dn) { var li = ((gr.y[i] + 90) * 8 + .5) | 0, ci = ((gr.x[i] + 180) * 8 + .5) | 0; n5 = level(aTab[li] + bTab[li] * cTab[ci]); }
      var c = gr.d[i] * 6 + n5; cls[i] = c; counts[c + 1]++;
    }
    for (i = 1; i < 31; i++) counts[i] += counts[i - 1];
    var out = new Uint32Array(nL), pos = counts.slice(0, 30);
    for (i = 0; i < nL; i++) out[pos[cls[i]]++] = i;
    gr.bins = { idx: out, start: counts }; gr.stamp = sunStamp; gr.dnf = dn;
    return gr.bins;
  }
  var DPAL = [[1.5, .95, 226, 150], [1.2, .7, 205, 105], [1, .5, 205, 105], [.85, .38, 205, 105], [.75, .3, 205, 105]];
  function styleOf(d, n, boost) {
    var f = dn ? n / 5 : 1, p = DPAL[d], a = p[1] * (dn ? .14 + .86 * f : 1) * (boost || 1);
    return 'rgba(255,' + Math.round(175 + (p[2] - 175) * f) + ',' + Math.round(85 + (p[3] - 85) * f) + ',' + Math.min(1, a).toFixed(2) + ')';
  }
  /* mode: 0 = vše mimo vybraný kontinent, 1 = jen vybraný (posunutý nahoru), 2 = jen vybraný jako stopa */
  function drawSet(g, gr, bins, sp, mode, yoff, maxDepth, boost) {
    var F = full(), latMax = LAT_TOP - (-8 - oy) / S + (yoff ? 0 : 0), latMin = LAT_TOP - (H + 8 - oy) / S;
    if (mode) { latMax += LIFT / S + 1; latMin -= 1; }
    var rs = Math.max(.6, Math.min(2.2, sp / 4.6)), idx = bins.idx, ys = gr.y, xs = gr.x, cs = gr.c;
    for (var cl = 0; cl < 30; cl++) {
      var d = (cl / 6) | 0, n = cl % 6; if (maxDepth !== undefined && d > maxDepth) continue;
      var s0 = bins.start[cl], s1 = bins.start[cl + 1]; if (s0 === s1) continue;
      var lo = s0, hi = s1;
      while (lo < hi) { var m = (lo + hi) >> 1; if (ys[idx[m]] < latMin) lo = m + 1; else hi = m; }
      var r = DPAL[d][0] * rs * (mode === 1 ? 1.08 : 1);
      g.fillStyle = mode === 2 ? 'rgba(184,152,80,.28)' : styleOf(d, mode === 1 ? 5 : n, boost);
      g.beginPath();
      for (var k = lo; k < s1; k++) {
        var i = idx[k], lat = ys[i]; if (lat > latMax) break;
        if (selC) { var inSel = cs[i] === selC; if (mode === 0 && inSel) continue; if (mode && !inSel) continue; }
        var y = oy + (LAT_TOP - lat) * S - yoff; if (y < -6 || y > H + 6) continue;
        var x = mod((xs[i] + 180) * S + ox, F);
        for (; x < W + 6; x += F) if (x > -6) { g.moveTo(x + r, y); g.arc(x, y, r, 0, 6.2832); }
      }
      g.fill();
    }
  }
  function drawBorders(g, yoff, clipBox, inside) {
    if (!borders) return;
    var F = full(), base = mod(ox, F) - F, tol = .8;
    g.save();
    if (clipBox) {
      var b = clipBox;
      g.beginPath();
      if (!inside) g.rect(0, 0, W, H);
      for (var off0 = base; off0 < W + 10; off0 += F) {
        var x0 = (b[0] + 180) * S + off0, x1 = (b[1] + 180) * S + off0;
        g.rect(x0, sy(b[3]), x1 - x0, (b[3] - b[2]) * S);
      }
      g.clip(inside ? 'nonzero' : 'evenodd');
    }
    if (yoff) g.translate(0, -yoff);
    g.beginPath();
    for (var off = base; off < W + 10; off += F) {
      if (off + F < -10) continue;
      for (var li = 0; li < borders.length; li++) {
        var r = borders[li], lx = 1e9, ly = 1e9, started = false, n = r.length;
        for (var pi = 0; pi < n; pi++) {
          var px = (r[pi][0] + 180) * S + off, py = sy(r[pi][1]);
          if (started && pi < n - 1 && Math.abs(px - lx) < tol && Math.abs(py - ly) < tol) continue;
          if (!started) { g.moveTo(px, py); started = true; } else g.lineTo(px, py);
          lx = px; ly = py;
        }
      }
    }
    g.lineWidth = .8; g.strokeStyle = 'rgba(255,214,140,.2)'; g.stroke();
    g.restore();
  }
  function drawLand() {
    var key = [W, H, S.toFixed(3), ox.toFixed(1), oy.toFixed(1), !!maskD, sunStamp, dn, selC, lift.toFixed(1)].join();
    if (key === landKey) return;
    landKey = key;
    landCv.width = W * DPR; landCv.height = H * DPR; landCx.setTransform(DPR, 0, 0, DPR, 0, 0);
    var g = landCx, F = full();
    /* jemná síť */
    g.strokeStyle = 'rgba(255,207,106,.05)'; g.lineWidth = 1; g.beginPath();
    for (var lat = -60; lat <= 80; lat += 20) { var yy = Math.round(sy(lat)) + .5; g.moveTo(0, yy); g.lineTo(W, yy); }
    for (var lon = -180; lon < 180; lon += 20) { for (var x = sx(lon) - F; x < W; x += F) if (x > -2) { var xx = Math.round(x) + .5; g.moveTo(xx, sy(LAT_TOP)); g.lineTo(xx, sy(LAT_BOT)); } }
    g.stroke();
    var gi = 0; if (maskD) { gi = 3; for (var q = 0; q < 4; q++) if (STEPS[q] * S <= 8) { gi = q; break; } }
    var gr = gridFor(gi), bins = binsFor(gr), sp = STEPS[gi] * S;
    if (!maskD) { sp = 4.6; }
    if (selC && lift > .5) {
      drawSet(g, gr, bins, sp, 2, 0);                         /* stopa po kontinentu */
      drawSet(g, gr, bins, sp, 0, 0);
      var bx = CBOX[selC];
      drawBorders(g, 0, bx, false);
      /* tloušťka desky: kopie pobřeží pod sebou */
      for (var o = lift; o > 1; o -= 3) drawSet(g, gr, bins, sp, 1, o, 0, .12 + .25 * (1 - o / lift));
      drawSet(g, gr, bins, sp, 1, lift, 4, 1);
      drawBorders(g, lift, bx, true);
    } else {
      drawSet(g, gr, bins, sp, 0, 0);
      drawBorders(g, 0, null, false);
    }
  }
  function loadLand() {
    function add(src, cb) { var s = document.createElement('script'); s.src = src; s.onload = cb; s.onerror = function () {}; document.head.appendChild(s); }
    function fetchGeo(res, fail) {
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-' + res + '.json').then(function (r) { return r.json(); }).then(function (t) {
        var geo = topojson.feature(t, t.objects.countries);
        var mesh = topojson.mesh(t, t.objects.countries, function (a, b) { return a !== b; });
        borders = mesh.type === 'MultiLineString' ? mesh.coordinates : [mesh.coordinates];
        buildMask(geo); haveGeo = true; grids = {}; landKey = ''; need = true; showConts();
      }).catch(function () { if (fail) fail(); });
    }
    add('https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js', function () {
      fetchGeo('50m', function () { fetchGeo('110m'); });
    });
  }

  /* ---------- Data ---------- */
  var ALL = V.map(function (c, i) { c.wish = false; c.no = i + 1; return c; }).concat(WL.map(function (c) { c.wish = true; return c; }));
  var showWish = true, sel = null, selAt = 0;
  function list() { return showWish ? ALL : V; }

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

  /* ---------- Vykreslení měst a paprsku ---------- */
  var need = true, pulse = 0;
  function cyOf(c) { return sy(c.lat) - (selC && CK[c.cont] === selC ? lift : 0); }
  function visibleX(lon, ref) { var F = full(), x = sx(lon); return x + Math.round((ref - x) / F) * F; }
  var hov = null;
  function drawCities(t) {
    cx.clearRect(0, 0, W, H);
    cx.drawImage(landCv, 0, 0, W, H);
    var F = full(), k0 = Math.pow(S / S0, .25), rects = [], L = list();
    cx.textBaseline = 'middle';
    var pts = [];
    L.forEach(function (c) { var x0 = sx(c.lon), y = cyOf(c); for (var x = x0 - F; x < W + 40; x += F) if (x > -40) pts.push({ c: c, x: x, y: y }); });
    pts.sort(function (a, b) { return ((b.c === hov) * 2 + (b.c === sel)) - ((a.c === hov) * 2 + (a.c === sel)); });
    var cand = [[8, 0, 'l'], [-8, 0, 'r'], [0, -12, 'c'], [0, 12, 'c'], [8, -10, 'l'], [-8, -10, 'r'], [8, 10, 'l'], [-8, 10, 'r']];
    pts.forEach(function (p) {
      var c = p.c, isH = c === hov, isSel = c === sel, big = isH || isSel, k = (big ? 1.7 : 1) * k0, lab = c.name.toUpperCase();
      var f = big ? 11 : 9; cx.font = (big ? '700 ' : '600 ') + f + 'px ui-monospace,Menlo,monospace';
      var w = cx.measureText(lab).width, h = f + 2, put = null;
      for (var i = 0; i < cand.length && !put; i++) {
        var px = p.x + cand[i][0] * k, py = p.y + cand[i][1] * (big ? 1.4 : 1), al = cand[i][2];
        var l = al === 'l' ? px : al === 'r' ? px - w : px - w / 2, R = [l - 2, py - h / 2, l + w + 2, py + h / 2], bad = false;
        for (var j = 0; j < rects.length; j++) { var q = rects[j]; if (!(R[2] < q[0] || R[0] > q[2] || R[3] < q[1] || R[1] > q[3])) { bad = true; break; } }
        if (!bad) for (var m = 0; m < pts.length; m++) { var o = pts[m]; if (o !== p && o.x > R[0] - 4 && o.x < R[2] + 4 && o.y > R[1] - 3 && o.y < R[3] + 3) { bad = true; break; } }
        if (!bad) { put = { x: px, y: py, al: al, R: R }; }
      }
      if (!put && big) put = { x: p.x + 8 * k, y: p.y, al: 'l', R: [0, 0, 0, 0] };
      /* pin */
      if (c.wish) {
        cx.save(); cx.strokeStyle = 'rgba(255,214,120,' + (big ? .95 : .55) + ')'; cx.lineWidth = 1.2; cx.setLineDash([3, 3]);
        cx.beginPath(); cx.arc(p.x, p.y, 5 * k, 0, 7); cx.stroke(); cx.restore();
      } else {
        if (isH && !isSel) { cx.fillStyle = 'rgba(255,207,106,.14)'; cx.beginPath(); cx.arc(p.x, p.y, 15, 0, 7); cx.fill(); cx.strokeStyle = '#ffcf6a'; cx.lineWidth = 1.2; cx.beginPath(); cx.arc(p.x, p.y, 10, 0, 7); cx.stroke(); }
        if (isSel) {
          var ph = reduce ? 0 : (t / 1400) % 1;
          cx.fillStyle = 'rgba(255,207,106,.14)'; cx.beginPath(); cx.arc(p.x, p.y, 15, 0, 7); cx.fill();
          cx.strokeStyle = 'rgba(255,230,160,.95)'; cx.lineWidth = 1.3; cx.beginPath(); cx.arc(p.x, p.y, 10, 0, 7); cx.stroke();
          cx.strokeStyle = 'rgba(255,230,160,' + (1 - ph) * .6 + ')'; cx.beginPath(); cx.arc(p.x, p.y, 10 + ph * 16, 0, 7); cx.stroke();
        }
        cx.fillStyle = 'rgba(255,207,106,.92)'; cx.beginPath(); cx.ellipse(p.x, p.y, 4 * k, 1.9 * k, 0, 0, 7); cx.fill();
        cx.fillStyle = '#fff3d6'; cx.beginPath(); cx.ellipse(p.x, p.y, 2 * k, .9 * k, 0, 0, 7); cx.fill();
      }
      if (put) {
        rects.push(put.R); cx.textAlign = put.al === 'l' ? 'left' : put.al === 'r' ? 'right' : 'center';
        cx.fillStyle = big ? '#fff2cf' : (c.wish ? 'rgba(255,226,160,.6)' : 'rgba(255,233,184,.78)'); cx.fillText(lab, put.x, put.y);
      }
    });
    cx.textAlign = 'left';
    if (dn) {
      var sy0 = sy(sunDec * 180 / Math.PI), sx0 = sx(mod(sunLon + 540, 360) - 180);
      for (var xs = sx0 - F; xs < W + 40; xs += F) if (xs > -40) {
        var gg = cx.createRadialGradient(xs, sy0, 0, xs, sy0, 30); gg.addColorStop(0, 'rgba(255,240,190,.85)'); gg.addColorStop(.3, 'rgba(255,200,100,.3)'); gg.addColorStop(1, 'rgba(255,200,100,0)');
        cx.fillStyle = gg; cx.fillRect(xs - 32, sy0 - 32, 64, 64); cx.fillStyle = '#fff6d6'; cx.beginPath(); cx.arc(xs, sy0, 3, 0, 7); cx.fill();
      }
    }
    drawBeam(t);
  }
  var DOCK = null;
  function drawBeam(t) {
    if (!sel || !$('card').classList.contains('open')) return;
    var p = Math.min(1, Math.max(0, (t - selAt - 300) / 450)); if (reduce) p = 1;
    if (p <= 0) return;
    var r = $('dk').getBoundingClientRect(), mobile = innerWidth <= 720;
    var Dx = r.left + r.width / 2, Dy = r.top + r.height / 2;
    var ex = visibleX(sel.lon, Dx - 140), ey = cyOf(sel);
    if (mobile) ex = visibleX(sel.lon, Dx);
    var E = mobile ? [ex, Math.max(ey + 20, Dy - 40)] : [ex + 70, Dy];
    if (!mobile && E[0] > Dx - 20) E[0] = Dx - 20;
    var pts = [[ex, ey], E, [Dx, Dy]];
    /* kolik čáry se má vykreslit (p = 0..1) */
    var L1 = Math.hypot(E[0] - ex, E[1] - ey), L2 = Math.hypot(Dx - E[0], Dy - E[1]), tot = L1 + L2, cut = tot * p;
    function path() {
      cx.beginPath(); cx.moveTo(ex, ey);
      if (cut <= L1) { var k = cut / L1; cx.lineTo(ex + (E[0] - ex) * k, ey + (E[1] - ey) * k); }
      else { cx.lineTo(E[0], E[1]); var k2 = (cut - L1) / L2; cx.lineTo(E[0] + (Dx - E[0]) * k2, E[1] + (Dy - E[1]) * k2); }
    }
    cx.save(); cx.globalCompositeOperation = 'lighter'; cx.lineJoin = 'round';
    cx.strokeStyle = 'rgba(255,207,106,.22)'; cx.lineWidth = 10; path(); cx.stroke();
    cx.strokeStyle = '#fff3d6'; cx.lineWidth = 1.8; cx.shadowColor = '#ffcf6a'; cx.shadowBlur = 16; path(); cx.stroke();
    if (p >= 1) {
      cx.shadowBlur = 0; cx.fillStyle = '#fff3d6'; cx.beginPath(); cx.arc(E[0], E[1], 4, 0, 7); cx.fill();
      if (!sel.wish && !mobile) {
        var km = dist(D.home, sel);
        if (km > 50) { cx.font = '9px ui-monospace,monospace'; cx.fillStyle = 'rgba(255,226,150,.9)'; cx.fillText(fmt(km) + ' KM', E[0] - 64, E[1] - 12);
          cx.fillStyle = 'rgba(255,207,106,.5)'; for (var i = 0; i < 6; i++) cx.fillRect(E[0] + 10 + i * 8 - 80 + 80, E[1] + 8, 5, 2); }
      }
    }
    cx.restore();
  }
  function dist(a, b) {
    var r = Math.PI / 180, dLa = (b.lat - a.lat) * r, dLo = (b.lon - a.lon) * r;
    var h = Math.sin(dLa / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLo / 2) ** 2;
    return 12742 * Math.asin(Math.sqrt(h));
  }
  function fmt(n) { return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }

  /* ---------- Smyčka ---------- */
  var anim = null;
  function frame(t) {
    if (anim) {
      var k = Math.min(1, (t - anim.t0) / anim.d), e = 1 - Math.pow(1 - k, 3);
      ox = anim.ox0 + (anim.ox1 - anim.ox0) * e; oy = anim.oy0 + (anim.oy1 - anim.oy0) * e; S = anim.s0 + (anim.s1 - anim.s0) * e;
      if (k >= 1) anim = null; need = true;
    }
    if (Math.abs(liftTo - lift) > .3) { lift += (liftTo - lift) * .14; need = true; } else if (lift !== liftTo) { lift = liftTo; need = true; }
    if (vx || vy) { ox += vx; oy += vy; vx *= .94; vy *= .94; if (Math.abs(vx) < .05 && Math.abs(vy) < .05) vx = vy = 0; clampY(); need = true; }
    if (need || (sel && !reduce)) { drawLand(); drawCities(t); need = false; }
    requestAnimationFrame(frame);
  }

  /* ---------- Ovládání mapy ---------- */
  var ptrs = {}, vx = 0, vy = 0, moved = 0, startX = 0, startY = 0, pinch = 0;
  cv.addEventListener('pointerdown', function (e) {
    cv.setPointerCapture(e.pointerId); ptrs[e.pointerId] = [e.clientX, e.clientY];
    startX = e.clientX; startY = e.clientY; moved = 0; vx = vy = 0; anim = null; cv.classList.add('drag');
    if (Object.keys(ptrs).length === 2) pinch = pdist();
  });
  function pdist() { var k = Object.keys(ptrs); return Math.hypot(ptrs[k[0]][0] - ptrs[k[1]][0], ptrs[k[0]][1] - ptrs[k[1]][1]); }
  cv.addEventListener('pointermove', function (e) {
    if (!ptrs[e.pointerId]) { setHover(e.clientX, e.clientY); return; }
    var p = ptrs[e.pointerId], dx = e.clientX - p[0], dy = e.clientY - p[1];
    ptrs[e.pointerId] = [e.clientX, e.clientY];
    if (Object.keys(ptrs).length === 2) { var d = pdist(); zoomAt(e.clientX, e.clientY, d / pinch); pinch = d; moved += 10; return; }
    moved += Math.abs(dx) + Math.abs(dy); ox += dx; oy += dy; vx = dx; vy = dy; clampY(); need = true;
  });
  function setHover(x, y) {
    var best = null, bd = 14, F = full();
    list().forEach(function (c) { var cxp = sx(c.lon), cyp = cyOf(c); for (var xx = cxp - F; xx < W + 30; xx += F) { var d = Math.hypot(xx - x, cyp - y); if (d < bd) { bd = d; best = c; } } });
    if (best !== hov) { hov = best; cv.style.cursor = best ? 'pointer' : ''; need = true; if (best) tone(2400, .035, .018); }
  }
  cv.addEventListener('pointerleave', function () { if (hov) { hov = null; need = true; } });
  function up(e) {
    delete ptrs[e.pointerId]; cv.classList.remove('drag');
    if (moved < 6 && e.type === 'pointerup') pick(e.clientX, e.clientY);
    if (reduce) vx = vy = 0;
  }
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', function (e) { e.preventDefault(); zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * .0012)); }, { passive: false });
  function zoomAt(x, y, f) {
    var ns = Math.max(S0 * .6, Math.min(S0 * 6, S * f)); f = ns / S;
    ox = x - (x - ox) * f; oy = y - (y - oy) * f; S = ns; clampY(); need = true;
  }
  function pick(x, y) {
    var best = null, bd = 22, F = full();
    list().forEach(function (c) {
      var cxp = sx(c.lon), cyp = cyOf(c);
      for (var xx = cxp - F; xx < W + 30; xx += F) { var d = Math.hypot(xx - x, cyp - y); if (d < bd) { bd = d; best = c; } }
    });
    if (best) open(best); else if (sel) close();
  }

  /* ---------- Zvuky (tiché HUD cvaknutí) ---------- */
  var snd = true, AC = null;
  try { snd = localStorage.getItem('outings-snd') !== '0'; } catch (e) {}
  function tone(f, d, v, type, f2) {
    if (!snd) return;
    try {
      if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
      if (AC.state === 'suspended') AC.resume();
      var t = AC.currentTime, o = AC.createOscillator(), g = AC.createGain();
      o.type = type || 'square'; o.frequency.setValueAtTime(f, t);
      if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
      g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(.0001, t + d);
      o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + d + .02);
    } catch (e) {}
  }
  function sOpen() { tone(900, .07, .035, 'square', 1500); setTimeout(function () { tone(1800, .05, .02); }, 70); }
  function sCont() { tone(260, .28, .035, 'sawtooth', 880); }
  function sClose() { tone(1300, .08, .025, 'square', 700); }

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

  function open(c, noHash) {
    sel = c; selAt = performance.now(); if (!noHash) sOpen(); render(c); $('card').classList.add('open'); hideCpanel();
    var mobile = innerWidth <= 720, tx, ty;
    if (mobile) { tx = W / 2; ty = (H - H * .6) * .5 + 10; }
    else { var dockx = W - 28 - 340; tx = Math.min((W - 368) * .5, dockx - 150); ty = H * .46; }
    var F = full(), cur = (c.lon + 180) * S + ox, want = tx, d = mod(want - cur + F / 2, F) - F / 2;
    var ox1 = ox + d, oy1 = ty - (LAT_TOP - c.lat) * S;
    oy1 = Math.max(H * .4 - mapH(), Math.min(H * .6, oy1));
    if (reduce) { ox = ox1; oy = oy1; } else anim = { t0: performance.now(), d: 700, ox0: ox, oy0: oy, ox1: ox1, oy1: oy1, s0: S, s1: S };
    need = true;
    if (!noHash) try { history.replaceState(null, '', '#' + c.id); } catch (e) {}
    selAt = performance.now(); syncPn();
  }
  function close() {
    if (sel) sClose(); sel = null; $('card').classList.remove('open'); need = true;
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    syncPn();
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
    if (e.key === 'Escape') { if (!$('list').hidden) $('list').hidden = true; else if (sel) close(); else if (selC) worldView(); }
    else if (e.key === 'ArrowRight' && sel) step(1);
    else if (e.key === 'ArrowLeft' && sel) step(-1);
  });

  /* ---------- Wishlist a seznam ---------- */
  $('btn-wish').onclick = function () {
    showWish = !showWish; this.classList.toggle('on', showWish); this.setAttribute('aria-pressed', showWish);
    if (!showWish && sel && sel.wish) close(); need = true; buildList();
  };
  $('btn-list').onclick = function () { $('list').hidden = !$('list').hidden; };
  $('list-x').onclick = function () { $('list').hidden = true; };
  function buildList() {
    var h = V.map(function (c) { return '<button class="it" data-id="' + c.id + '" type="button"><span>' + esc(c.name) + '</span><small>' + esc(c.years || '') + '</small></button>'; }).join('');
    if (showWish) h += '<div class="gh">WISHLIST</div>' + WL.map(function (c) { return '<button class="it w" data-id="' + c.id + '" type="button"><span>' + esc(c.name) + '</span><small>' + esc(c.country) + '</small></button>'; }).join('');
    $('list-body').innerHTML = h;
    [].forEach.call($('list-body').querySelectorAll('.it'), function (b) {
      b.onclick = function () { var c = ALL.filter(function (x) { return x.id === b.dataset.id; })[0]; $('list').hidden = true; open(c); };
    });
  }

  /* ---------- Kontinenty: výběr, vyjetí z mapy, statistiky ---------- */
  var TABS = [[0, 'WORLD'], [1, 'EUROPE'], [4, 'N. AMERICA'], [5, 'S. AMERICA'], [2, 'ASIA'], [3, 'AFRICA'], [6, 'OCEANIA']];
  function showConts() {
    var box = $('conts'); if (!haveGeo) return;
    box.innerHTML = TABS.map(function (t) { return '<button type="button" data-k="' + t[0] + '"' + (t[0] === selC ? ' class="on"' : '') + '>' + t[1] + '</button>'; }).join('');
    box.hidden = false;
    [].forEach.call(box.querySelectorAll('button'), function (b) { b.onclick = function () { +b.dataset.k ? selectCont(+b.dataset.k) : worldView(); }; });
  }
  function markTabs() { [].forEach.call($('conts').querySelectorAll('button'), function (b) { b.classList.toggle('on', +b.dataset.k === selC); }); }
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
    h += '<div class="rg"><svg viewBox="0 0 100 100" width="92" height="92"><circle cx="50" cy="50" r="' + R + '" fill="none" stroke="rgba(255,207,106,.18)" stroke-width="8"/>' +
      '<circle cx="50" cy="50" r="' + R + '" fill="none" stroke="#ffcf6a" stroke-width="8" stroke-dasharray="' + (C2 * st.pct / 100).toFixed(1) + ' ' + C2.toFixed(1) + '" transform="rotate(-90 50 50)"/>' +
      '<text x="50" y="57" text-anchor="middle" fill="#ffe9b8" font-family="ui-monospace,monospace" font-weight="700" font-size="22">' + st.pct + '%</text></svg>' +
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
  function viewBox(b) {
    var mobile = innerWidth <= 720, aw = mobile ? W * .92 : W - 460, ah = mobile ? H * .3 : H * .7;
    var s = Math.max(S0 * .6, Math.min(S0 * 6, Math.min(aw / (b[1] - b[0]), ah / (b[3] - b[2]))));
    var cxp = mobile ? W / 2 : (W - 400) / 2 + 10, cyp = mobile ? H * .31 : H * .5;
    return { s: s, ox: cxp - ((b[0] + b[1]) / 2 + 180) * s, oy: cyp - (LAT_TOP - (b[2] + b[3]) / 2) * s + LIFT * .5 };
  }
  function syncPn() { document.body.classList.toggle('pn', !!(sel || selC)); }
  function hideCpanel() { $('cp').classList.remove('open'); }
  function selectCont(k) {
    if (sel) { sel = null; $('card').classList.remove('open'); }
    LIFT = innerWidth <= 720 ? 16 : 26;
    selC = k; liftTo = LIFT; landKey = ''; need = true; renderCpanel(k); $('cp').classList.add('open'); markTabs(); sCont();
    go(viewBox(CBOX[k])); syncPn();
  }
  function worldView() {
    if (selC) { selC = 0; liftTo = 0; lift = 0; landKey = ''; } else if (sel) close();
    hideCpanel(); markTabs(); need = true; go(viewFor(true)); syncPn();
  }

  /* ---------- Start ---------- */
  addEventListener('resize', function () { var old = S0; fit(); if (!sel) { S = S0; clampY(); } need = true; });
  fit();
  /* pohled: all = všechna místa, jinak jen hlavní shluk (nejvíc míst pohromadě) */
  function viewFor(all) {
    var vs = V.filter(function (c) { return c.visits.length; });
    if (!vs.length) return { s: S0, ox: W / 2 - 195 * S0, oy: H * .5 - (LAT_TOP - 30) * S0 };
    if (!all) {
      /* shluk: místa do 1500 km od místa, které má nejvíc sousedů */
      var best = vs[0], bn = -1;
      vs.forEach(function (c) { var n = vs.filter(function (d) { return dist(c, d) < 1500; }).length; if (n > bn) { bn = n; best = c; } });
      var grp = vs.filter(function (d) { return dist(best, d) < 1500; });
      if (grp.length < vs.length) vs = grp;
    }
    var lo = vs.map(function (c) { return c.lon; }), la = vs.map(function (c) { return c.lat; });
    var minLo = Math.min.apply(null, lo), maxLo = Math.max.apply(null, lo), minLa = Math.min.apply(null, la), maxLa = Math.max.apply(null, la);
    var mobile = innerWidth <= 720, spanLo = Math.max(14, maxLo - minLo), spanLa = Math.max(10, maxLa - minLa);
    var s = Math.max(S0 * .6, Math.min(S0 * 3.4, Math.min(W * (mobile ? .8 : .45) / spanLo, H * .5 / spanLa)));
    return { s: s, ox: (mobile ? W / 2 : W * .36) - ((minLo + maxLo) / 2 + 180) * s, oy: H * (mobile ? .32 : .5) - (LAT_TOP - (minLa + maxLa) / 2) * s };
  }
  function go(v) {
    if (reduce) { S = v.s; ox = v.ox; oy = v.oy; clampY(); need = true; return; }
    var F = full(), d = mod(v.ox - ox + F / 2, F) - F / 2;
    anim = { t0: performance.now(), d: 800, ox0: ox, oy0: oy, ox1: ox + d, oy1: v.oy, s0: S, s1: v.s };
  }
  (function () { var v = viewFor(false); S = v.s; ox = v.ox; oy = v.oy; clampY(); })();
  $('btn-world').onclick = function () { if (sel) close(); worldView(); };
  $('btn-dn').onclick = function () { dn = !dn; this.classList.toggle('on', dn); this.setAttribute('aria-pressed', dn); landKey = ''; need = true; };
  $('btn-snd').onclick = function () { snd = !snd; try { localStorage.setItem('outings-snd', snd ? '1' : '0'); } catch (e) {} this.classList.toggle('on', snd); this.setAttribute('aria-pressed', snd); this.firstChild.nodeValue = snd ? 'SOUND ON' : 'SOUND OFF'; if (snd) tone(1800, .05, .03); };
  if (!snd) { $('btn-snd').classList.remove('on'); $('btn-snd').firstChild.nodeValue = 'SOUND OFF'; }
  buildList(); updateSun(); setInterval(updateSun, 60000); loadLand();
  var hash = location.hash.slice(1), start = ALL.filter(function (c) { return c.id === hash; })[0];
  requestAnimationFrame(frame);
  if (start) setTimeout(function () { open(start, true); }, 150);
  window.__outings = { open: open, close: close, ALL: ALL, selectCont: selectCont, worldView: worldView };
})();
