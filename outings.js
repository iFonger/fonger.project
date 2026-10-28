/* OUTINGS: plochá zlatá mapa. Data jsou v outings-data.js. */
(function () {
  'use strict';
  var D = window.OUTINGS, V = D.visited, WL = D.wishlist;
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

  /* ---------- Souš: tečky. Skutečné pobřeží z CDN, jinak záložní tečky ---------- */
  var grids = {}, landKey = '', landCv = document.createElement('canvas'), landCx = landCv.getContext('2d');
  var mask = null;
  function buildMask(geo) {
    var m = document.createElement('canvas'); m.width = 1440; m.height = 720;
    var g = m.getContext('2d'); g.fillStyle = '#fff';
    function ring(r) { r.forEach(function (p, i) { var x = (p[0] + 180) * 4, y = (90 - p[1]) * 4; i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.closePath(); }
    var feats = geo.features || [geo];
    feats.forEach(function (f) {
      var gm = f.geometry || f, polys = gm.type === 'Polygon' ? [gm.coordinates] : gm.coordinates;
      polys.forEach(function (poly) { g.beginPath(); poly.forEach(ring); g.fill('evenodd'); });
    });
    mask = g.getImageData(0, 0, 1440, 720).data;
  }
  function gridFor(step) {
    if (grids[step]) return grids[step];
    var xs = [], ys = [];
    if (mask) {
      for (var lat = LAT_BOT; lat <= LAT_TOP; lat += step) for (var lon = -180; lon < 180; lon += step) {
        var px = Math.min(1439, Math.round((lon + 180) * 4)), py = Math.min(719, Math.round((90 - lat) * 4));
        if (mask[(py * 1440 + px) * 4 + 3] > 100) { xs.push(lon); ys.push(lat); }
      }
    } else {
      (window.DOTS || []).forEach(function (p) { xs.push(p[0]); ys.push(p[1]); });
    }
    return (grids[step] = { x: Float32Array.from(xs), y: Float32Array.from(ys) });
  }
  function drawLand() {
    var key = [W, H, S.toFixed(3), ox.toFixed(1), oy.toFixed(1), !!mask].join();
    if (key === landKey) return;
    landKey = key;
    landCv.width = W * DPR; landCv.height = H * DPR; landCx.setTransform(DPR, 0, 0, DPR, 0, 0);
    var g = landCx, F = full();
    /* jemná síť */
    g.strokeStyle = 'rgba(255,207,106,.06)'; g.lineWidth = 1; g.beginPath();
    for (var lat = -60; lat <= 80; lat += 20) { var yy = Math.round(sy(lat)) + .5; g.moveTo(0, yy); g.lineTo(W, yy); }
    for (var lon = -180; lon < 180; lon += 20) { for (var x = sx(lon) - F; x < W; x += F) if (x > -2) { var xx = Math.round(x) + .5; g.moveTo(xx, sy(LAT_TOP)); g.lineTo(xx, sy(LAT_BOT)); } }
    g.stroke();
    var step = mask ? (S > 8 ? .5 : S > 5 ? .75 : 1) : 1.25;
    if (!mask) step = 1.25;
    var gr = gridFor(mask ? step : 'fb'), ds = Math.max(1.1, S * step * .42);
    g.fillStyle = 'rgba(255,214,120,.42)';
    for (var i = 0; i < gr.x.length; i++) {
      var x0 = (gr.x[i] + 180) * S + ox; x0 = mod(x0, F);
      var y = sy(gr.y[i]); if (y < -4 || y > H + 4) continue;
      while (x0 - F > -4) x0 -= F;
      for (; x0 < W + 4; x0 += F) if (x0 > -4) g.fillRect(x0 - ds / 2, y - ds / 2, ds, ds);
    }
  }
  function loadLand() {
    function add(src, cb) { var s = document.createElement('script'); s.src = src; s.onload = cb; s.onerror = function () {}; document.head.appendChild(s); }
    add('https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js', function () {
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/land-110m.json').then(function (r) { return r.json(); }).then(function (t) {
        buildMask(topojson.feature(t, t.objects.land)); grids = {}; landKey = ''; need = true;
      }).catch(function () {});
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

  /* ---------- Vykreslení měst a paprsku ---------- */
  var need = true, pulse = 0;
  function visibleX(lon, ref) { var F = full(), x = sx(lon); return x + Math.round((ref - x) / F) * F; }
  function drawCities(t) {
    cx.clearRect(0, 0, W, H);
    cx.drawImage(landCv, 0, 0, W, H);
    var F = full(), placed = [], k = Math.pow(S / S0, .35);
    cx.textBaseline = 'middle';
    var order = list().slice().sort(function (a, b) { return (a === sel) - (b === sel); });
    order.forEach(function (c) {
      var x0 = sx(c.lon), y = sy(c.lat);
      for (var x = x0 - F; x < W + 40; x += F) {
        if (x < -40) continue;
        var isSel = c === sel;
        if (c.wish) {
          cx.save(); cx.strokeStyle = 'rgba(255,214,120,' + (isSel ? .95 : .5) + ')'; cx.lineWidth = 1.2; cx.setLineDash([3, 3]);
          cx.beginPath(); cx.arc(x, y, 6 * k, 0, 7); cx.stroke(); cx.restore();
          cx.fillStyle = 'rgba(255,214,120,.5)'; cx.beginPath(); cx.arc(x, y, 1.5, 0, 7); cx.fill();
        } else {
          var R = (isSel ? 70 : 46) * k, g = cx.createRadialGradient(x, y, 0, x, y, R);
          g.addColorStop(0, 'rgba(255,200,90,' + (isSel ? .6 : .4) + ')'); g.addColorStop(1, 'rgba(255,170,60,0)');
          cx.globalCompositeOperation = 'lighter'; cx.fillStyle = g; cx.beginPath(); cx.arc(x, y, R, 0, 7); cx.fill();
          cx.globalCompositeOperation = 'source-over';
          cx.fillStyle = '#fff3d6'; cx.shadowColor = '#ffcf6a'; cx.shadowBlur = 10; cx.beginPath(); cx.arc(x, y, 2.6 * k, 0, 7); cx.fill(); cx.shadowBlur = 0;
          if (isSel) {
            var p = reduce ? 0 : (t / 1400) % 1;
            cx.strokeStyle = 'rgba(255,230,160,.9)'; cx.lineWidth = 1.4; cx.beginPath(); cx.arc(x, y, 9 * k, 0, 7); cx.stroke();
            cx.strokeStyle = 'rgba(255,230,160,' + (1 - p) * .6 + ')'; cx.beginPath(); cx.arc(x, y, (9 + p * 18) * k, 0, 7); cx.stroke();
          }
        }
        /* popisek (bez překryvu) */
        var lab = c.name.toUpperCase();
        cx.font = '10px ui-monospace,Menlo,monospace';
        var w = cx.measureText(lab).width + 6, bx = x + 10, by = y - 7, hit = false;
        for (var i = 0; i < placed.length; i++) { var q = placed[i]; if (bx < q[0] + q[2] && bx + w > q[0] && by < q[1] + q[3] && by + 14 > q[1]) { hit = true; break; } }
        if (!hit || isSel) { placed.push([bx, by, w, 14]); cx.fillStyle = c.wish ? 'rgba(255,226,160,.6)' : '#ffe9b8'; cx.fillText(lab, bx, y); }
      }
    });
    drawBeam(t);
  }
  var DOCK = null;
  function drawBeam(t) {
    if (!sel || !$('card').classList.contains('open')) return;
    var p = Math.min(1, Math.max(0, (t - selAt - 300) / 450)); if (reduce) p = 1;
    if (p <= 0) return;
    var r = $('dk').getBoundingClientRect(), mobile = innerWidth <= 720;
    var Dx = r.left + r.width / 2, Dy = r.top + r.height / 2;
    var ex = visibleX(sel.lon, Dx - 140), ey = sy(sel.lat);
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
    if (!ptrs[e.pointerId]) return;
    var p = ptrs[e.pointerId], dx = e.clientX - p[0], dy = e.clientY - p[1];
    ptrs[e.pointerId] = [e.clientX, e.clientY];
    if (Object.keys(ptrs).length === 2) { var d = pdist(); zoomAt(e.clientX, e.clientY, d / pinch); pinch = d; moved += 10; return; }
    moved += Math.abs(dx) + Math.abs(dy); ox += dx; oy += dy; vx = dx; vy = dy; clampY(); need = true;
  });
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
      var cxp = sx(c.lon), cyp = sy(c.lat);
      for (var xx = cxp - F; xx < W + 30; xx += F) { var d = Math.hypot(xx - x, cyp - y); if (d < bd) { bd = d; best = c; } }
    });
    if (best) open(best); else if (sel) close();
  }

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
    h += '<div class="nm' + (c.name.length > 9 ? ' long' : '') + '">' + esc(c.name) + '</div>';
    h += '<div class="co">' + esc(c.country.toUpperCase()) + (c.date ? ' · ' + esc(c.date) : '') + '</div>';
    var tags = '';
    if (c.transport) tags += '<span>' + icon(c.transport) + esc(c.transport.toUpperCase()) + '</span>';
    if (c.nights) tags += '<span>' + String(c.nights).padStart(2, '0') + ' NIGHTS</span>';
    tags += '<span>' + Math.abs(c.lat).toFixed(2) + (c.lat >= 0 ? 'N ' : 'S ') + Math.abs(c.lon).toFixed(2) + (c.lon >= 0 ? 'E' : 'W') + '</span>';
    h += '<div class="tags">' + tags + '</div>';
    if (c.wish) {
      if (c.note) h += '<div class="note">' + esc(c.note) + '</div>';
      h += '<div class="wl">NOT VISITED YET.<br>' + fmt(dist(D.home, c)) + ' KM FROM ' + esc(D.home.code) + '</div>';
    } else {
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
    $('pv').onclick = function () { step(-1); }; $('nx').onclick = function () { step(1); }; $('cl').onclick = close;
    [].forEach.call($('card-in').querySelectorAll('.im[data-p]'), function (b) { b.onclick = function () { openLb(c.photos, +b.dataset.p); }; });
  }

  function open(c, noHash) {
    sel = c; selAt = performance.now(); render(c); $('card').classList.add('open');
    var mobile = innerWidth <= 720, tx, ty;
    if (mobile) { tx = W / 2; ty = (H - H * .6) * .5 + 10; }
    else { var dockx = W - 28 - 340; tx = Math.min((W - 368) * .5, dockx - 150); ty = H * .46; }
    var F = full(), cur = (c.lon + 180) * S + ox, want = tx, d = mod(want - cur + F / 2, F) - F / 2;
    var ox1 = ox + d, oy1 = ty - (LAT_TOP - c.lat) * S;
    oy1 = Math.max(H * .4 - mapH(), Math.min(H * .6, oy1));
    if (reduce) { ox = ox1; oy = oy1; } else anim = { t0: performance.now(), d: 700, ox0: ox, oy0: oy, ox1: ox1, oy1: oy1, s0: S, s1: S };
    need = true;
    if (!noHash) try { history.replaceState(null, '', '#' + c.id); } catch (e) {}
    selAt = performance.now();
  }
  function close() {
    sel = null; $('card').classList.remove('open'); need = true;
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
    if (e.key === 'Escape') { if (!$('list').hidden) $('list').hidden = true; else close(); }
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
    var h = V.map(function (c) { return '<button class="it" data-id="' + c.id + '" type="button"><span>' + esc(c.name) + '</span><small>' + esc(c.date || '') + '</small></button>'; }).join('');
    if (showWish) h += '<div class="gh">WISHLIST</div>' + WL.map(function (c) { return '<button class="it w" data-id="' + c.id + '" type="button"><span>' + esc(c.name) + '</span><small>' + esc(c.country) + '</small></button>'; }).join('');
    $('list-body').innerHTML = h;
    [].forEach.call($('list-body').querySelectorAll('.it'), function (b) {
      b.onclick = function () { var c = ALL.filter(function (x) { return x.id === b.dataset.id; })[0]; $('list').hidden = true; open(c); };
    });
  }

  /* ---------- Start ---------- */
  addEventListener('resize', function () { var old = S0; fit(); if (!sel) { S = S0; clampY(); } need = true; });
  fit(); S = S0;
  ox = W / 2 - (15 + 180) * S; oy = H * .5 - (LAT_TOP - 30) * S; clampY();
  buildList(); loadLand();
  var hash = location.hash.slice(1), start = ALL.filter(function (c) { return c.id === hash; })[0];
  requestAnimationFrame(frame);
  if (start) setTimeout(function () { open(start, true); }, 150);
  window.__outings = { open: open, close: close, ALL: ALL };
})();
