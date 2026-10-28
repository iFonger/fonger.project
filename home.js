/* ==========================================================
   home.js: interaktivní vrstva stránky Experience
   pozadí s body, 3D písmeno E, kurzor, dekódování textu,
   živé údaje, příkazová paleta (Ctrl+K), tajemství
   ========================================================== */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var touch = window.matchMedia('(hover: none)').matches;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var say = function (cs, en) { return window.FX ? FX.say(cs, en) : en; };

  /* ---------- Efekt dekódování: písmena se promíchají a ustálí ---------- */
  var CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@$<>/=+*';
  function scramble(el, final, ms) {
    if (calm) { el.textContent = final; return; }
    var t0 = performance.now(), n = final.length;
    (function step(now) {
      var p = Math.min(1, (now - t0) / ms), out = '';
      for (var i = 0; i < n; i++) {
        var ch = final[i];
        out += (ch === ' ' || i < p * n) ? ch : CH[Math.floor(Math.random() * CH.length)];
      }
      el.textContent = out;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* Jméno: dekóduje se při načtení a znovu po najetí myší */
  var name = $('#name'), busy = false;
  function runName() {
    if (busy) return; busy = true;
    scramble(name, 'Adam Vávra', 900);
    setTimeout(function () { busy = false; }, 950);
  }
  setTimeout(runName, 250);
  name.addEventListener('pointerenter', runName);

  /* Nadpisy sekcí se dekódují, když se objeví */
  if ('IntersectionObserver' in window) {
    var dio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        dio.unobserve(e.target);
        $$('[lang]', e.target).forEach(function (s) { scramble(s, s.dataset.t, 700); });
      });
    }, { threshold: 0.6 });
    $$('[data-decode]').forEach(function (el) {
      $$('[lang]', el).forEach(function (s) { s.dataset.t = s.textContent; });
      dio.observe(el);
    });
  }

  /* Věta pod jménem: schovaná, objeví se po najetí na jméno (na dotyku po klepnutí) */
  var sayEl = $('#say'), sayOpen = false, sayTimer = 0;
  $$('[lang]', sayEl).forEach(function (s) { s.dataset.t = s.textContent; });
  function sayShow() {
    clearTimeout(sayTimer);
    if (sayOpen) return; sayOpen = true;
    sayEl.classList.add('show');
    $$('[lang]', sayEl).forEach(function (s) { scramble(s, s.dataset.t, 900); });
  }
  function sayHide() {
    clearTimeout(sayTimer);
    sayTimer = setTimeout(function () { sayOpen = false; sayEl.classList.remove('show'); }, 1600);
  }
  name.addEventListener('pointerenter', sayShow);
  name.addEventListener('pointerleave', sayHide);
  if (touch) name.addEventListener('click', function () { if (sayOpen) { sayOpen = false; sayEl.classList.remove('show'); } else sayShow(); });

  /* ---------- Filtr dovedností a propojení: klik na dovednost rozsvítí, kde jsem ji použil ---------- */
  var mods = $('#mods'), litBar = $('#litBar'), litName = $('#litName'), cur_s = '';
  $$('#filters button').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('#filters button').forEach(function (x) { x.classList.toggle('on', x === b); });
      var f = b.dataset.f;
      mods.classList.toggle('f-on', f !== 'all');
      $$('.mod', mods).forEach(function (m) { m.classList.toggle('pick', m.dataset.g === f); });
    });
  });
  function labelOf(li) { var sp = $('[lang="' + document.documentElement.lang + '"]', li); return (sp || li).textContent.trim(); }
  function lightUp(id, label) {
    cur_s = id;
    $$('.mod li').forEach(function (l) { l.classList.toggle('hit', !!id && l.dataset.s === id); });
    $$('.tile[data-s], .job[data-s]').forEach(function (t) {
      t.classList.toggle('lit', !!id && (' ' + t.dataset.s + ' ').indexOf(' ' + id + ' ') > -1);
    });
    document.body.classList.toggle('dimming', !!id && !!$('.lit'));
    litBar.hidden = !id;
    if (id) litName.textContent = label;
  }
  function pickSkill(li) {
    if (!li || li.dataset.s === cur_s) return lightUp('');
    lightUp(li.dataset.s, labelOf(li));
  }
  mods.addEventListener('click', function (e) { pickSkill(e.target.closest('li[data-s]')); });
  mods.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { var li = e.target.closest('li[data-s]'); if (li) { e.preventDefault(); pickSkill(li); } } });
  $('#litOff').addEventListener('click', function () { lightUp(''); });
  document.addEventListener('fx:lang', function () { var h = $('.mod li.hit'); if (h) litName.textContent = labelOf(h); });
  var openBox = $('#open');
  if (openBox && 'MutationObserver' in window) new MutationObserver(function () { if (cur_s) { var h = $('.mod li.hit'); lightUp(cur_s, h ? labelOf(h) : ''); } }).observe(openBox, { childList: true });

  /* Další projekt: text se mění a dekóduje (jen záměry, nic hotového) */
  var roll = $('#roll');
  if (roll) {
    var ideas = [['A web app with a database', 'Webová aplikace s databází'], ['An automation in Copilot Studio', 'Automatizace v Copilot Studiu'], ['A new game', 'Nová hra'], ['???', '???']], ri = 0;
    var showIdea = function () { var t = say(ideas[ri][1], ideas[ri][0]); scramble(roll, t, 700); ri = (ri + 1) % ideas.length; };
    showIdea();
    if (!calm) setInterval(showIdea, 3600);
  }

  /* ---------- 3D písmeno E: z jedné kopie uděláme hloubku ---------- */
  var E = $('#E'), front = $('svg', E);
  for (var k = 1; k <= 6; k++) {
    var c = front.cloneNode(true); c.classList.remove('f'); c.style.setProperty('--i', k);
    $$('defs', c).forEach(function (d) { d.remove(); });
    E.insertBefore(c, front);
  }

  /* ---------- Pozadí: čtvercové body, které reagují na kurzor a kliknutí ---------- */
  var cv = $('#bg'), g = cv.getContext('2d'), W, H, dpr, S = 38;
  var mx = -999, my = -999, ripples = [], lastMove = 0, nx = 0, ny = 0, rx = 0, ry = 0, sy = 0;
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size(); addEventListener('resize', size);

  var pad = function (n) { return ('0000' + Math.round(n)).slice(-4); };
  var coords = $('#coords');
  addEventListener('pointermove', function (e) {
    mx = e.clientX; my = e.clientY; lastMove = performance.now();
    nx = (e.clientX / innerWidth - 0.5) * 2; ny = (e.clientY / innerHeight - 0.5) * 2;
    if (coords) coords.textContent = 'X ' + pad(e.clientX) + ' · Y ' + pad(e.clientY);
  }, { passive: true });
  addEventListener('pointerdown', function (e) { ripples.push({ x: e.clientX, y: e.clientY, t: performance.now() }); }, { passive: true });

  /* Kurzor-kroužek */
  var cur = $('#cur'), cx = 0, cy = 0;
  if (!touch) {
    addEventListener('pointermove', function () { cur.classList.add('on'); }, { passive: true });
    document.addEventListener('pointerover', function (e) {
      cur.classList.toggle('big', !!(e.target.closest && e.target.closest('a, button, input, .mod, [data-tilt]')));
    });
  }

  /* Živé počty v kartě Fonger. Stránky a hry se upravují tady, dovednosti se počítají přímo ze stránky. */
  var SITE = { pages: 6, games: 1 };
  var frames = 0, fpsT = performance.now(), fps = 60;
  var stats = $('#stats');
  if (stats) {
    var nums = stats.querySelectorAll('b');
    nums[0].dataset.n = SITE.pages;
    nums[1].dataset.n = SITE.games;
    nums[2].dataset.n = document.querySelectorAll('#skills li[data-s]').length;
    var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var countUp = function () {
      nums.forEach(function (el) {
        var n = +el.dataset.n, t0 = performance.now();
        if (reduced || n < 2) { el.textContent = n; return; }
        (function step(t) {
          var p = Math.min(1, (t - t0) / 900);
          el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        })(t0);
      });
    };
    nums.forEach(function (el) { el.textContent = '0'; });
    new IntersectionObserver(function (en, ob) { if (en[0].isIntersecting) { countUp(); ob.disconnect(); } }, { threshold: 0.4 }).observe(stats);
  }

  /* Rudé žilky v kartě Fonger */
  var fgTile = document.querySelector('.tile.fg');
  if (fgTile) {
    var vc = document.createElement('canvas'); vc.className = 'veins'; vc.setAttribute('aria-hidden', 'true'); fgTile.prepend(vc);
    var vg = vc.getContext('2d');
    var paintVeins = function () {
      var w = fgTile.clientWidth, h = fgTile.clientHeight, d = Math.min(devicePixelRatio || 1, 2);
      vc.width = w * d; vc.height = h * d; vg.setTransform(d, 0, 0, d, 0, 0);
      var s = 21, R = function () { s = (s * 16807) % 2147483647; return s / 2147483647; };
      var vein = function (x, y, a, len, wd) {
        if (len < 8 || wd < 0.3) return;
        vg.beginPath(); vg.moveTo(x, y); var px = x, py = y, k = Math.floor(len / 8);
        for (var i = 0; i < k; i++) {
          a += (R() - 0.5) * 0.6; px += Math.cos(a) * 8; py += Math.sin(a) * 8; vg.lineTo(px, py);
          if (R() < 0.1) vein(px, py, a + (R() < 0.5 ? -1 : 1) * (0.5 + R() * 0.5), len * 0.55, wd * 0.7);
        }
        vg.strokeStyle = 'rgba(230,30,48,' + (0.22 + wd * 0.2) + ')'; vg.lineWidth = wd; vg.shadowColor = 'rgba(255,20,40,.9)'; vg.shadowBlur = 8; vg.stroke(); vg.shadowBlur = 0;
      };
      for (var i = 0; i < 4; i++) { vein(R() * w, 0, 1.57 + (R() - 0.5) * 0.8, 170, 1.6); vein(R() * w, h, -1.57 + (R() - 0.5) * 0.8, 170, 1.6); }
      for (i = 0; i < 3; i++) { vein(w, R() * h, 3.14 + (R() - 0.5) * 0.8, 150, 1.4); vein(0, R() * h, (R() - 0.5) * 0.8, 150, 1.4); }
      var gg = vg.createRadialGradient(w * 0.5, h * 0.5, 20, w * 0.5, h * 0.5, w * 0.55);
      gg.addColorStop(0, 'rgba(8,1,3,.8)'); gg.addColorStop(1, 'rgba(8,1,3,0)'); vg.fillStyle = gg; vg.fillRect(0, 0, w, h);
    };
    paintVeins();
    if (window.ResizeObserver) new ResizeObserver(paintVeins).observe(fgTile); else addEventListener('resize', paintVeins);
  }

  /* Hodiny v Praze */
  var clock = $('#clock');
  var fmt = new Intl.DateTimeFormat('cs-CZ', { timeZone: 'Europe/Prague', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  function tickClock() { clock.textContent = say('Praha ', 'Prague ') + fmt.format(new Date()); }
  setInterval(tickClock, 1000); tickClock();

  /* Hlavní smyčka: kreslí pozadí a plynule natáčí písmeno E */
  var running = true;
  function draw(t) {
    frames++;
    if (t - fpsT > 1000) { fps = frames; frames = 0; fpsT = t; }
    g.clearRect(0, 0, W, H);
    var off = (scrollY * 0.12) % S, idle = t - lastMove > 3000;
    ripples = ripples.filter(function (r) { return t - r.t < 1400; });
    for (var x = S / 2; x < W + S; x += S) {
      for (var y = S / 2 - off; y < H + S; y += S) {
        var dx = x - mx, dy = y - my, d = Math.sqrt(dx * dx + dy * dy) || 1;
        var kk = Math.max(0, 1 - d / 230), a = 0.1 + 0.05 * Math.sin((x + y) * 0.012 + t * 0.001), r = 1.2;
        var px = x + (dx / d) * kk * 12, py = y + (dy / d) * kk * 12;
        for (var j = 0; j < ripples.length; j++) {
          var R = ripples[j], rd = Math.hypot(x - R.x, y - R.y), ring = (t - R.t) * 0.7;
          var w = Math.max(0, 1 - Math.abs(rd - ring) / 40) * (1 - (t - R.t) / 1400);
          kk = Math.max(kk, w);
        }
        a += kk * 0.85; r += kk * 1.6;
        g.fillStyle = kk > 0.02 ? 'rgba(' + Math.round(47 + kk * 50) + ',' + Math.round(123 + kk * 40) + ',255,' + Math.min(1, a) + ')' : 'rgba(255,255,255,' + a * 0.8 + ')';
        g.fillRect(px - r / 2, py - r / 2, r, r);
      }
    }
    // písmeno E: sleduje myš, v klidu se samo houpá
    var tx = idle ? Math.sin(t / 1800) * 0.7 : nx, ty = idle ? Math.cos(t / 2300) * 0.3 : ny;
    ry += (tx * 22 - ry) * 0.06; rx += (-ty * 14 - rx) * 0.06;
    sy += (scrollY * 0.22 - sy) * 0.1;
    E.style.setProperty('--ry', ry.toFixed(2) + 'deg'); E.style.setProperty('--rx', rx.toFixed(2) + 'deg'); E.style.setProperty('--sy', sy.toFixed(1) + 'px');
    // kroužek kurzoru
    cx += (mx - cx) * 0.2; cy += (my - cy) * 0.2;
    cur.style.transform = 'translate(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px)';
    if (running && !calm) requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
  document.addEventListener('visibilitychange', function () {
    running = !document.hidden; if (running && !calm) requestAnimationFrame(draw);
  });

  /* ---------- Naklánění karet projektů + lesk za kurzorem ---------- */
  if (!touch && !calm) {
    $$('[data-tilt]').forEach(function (t) {
      t.addEventListener('pointermove', function (e) {
        var r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        t.style.setProperty('--ry', ((x - 0.5) * 6).toFixed(2) + 'deg');
        t.style.setProperty('--rx', ((0.5 - y) * 6).toFixed(2) + 'deg');
        t.style.setProperty('--gx', (x * 100).toFixed(0) + '%'); t.style.setProperty('--gy', (y * 100).toFixed(0) + '%');
        t.style.setProperty('--px', (x - 0.5).toFixed(2)); t.style.setProperty('--py', (y - 0.5).toFixed(2));
      });
      t.addEventListener('pointerleave', function () {
        ['--rx', '--ry', '--px', '--py'].forEach(function (p) { t.style.setProperty(p, '0'); });
        t.style.setProperty('--rx', '0deg'); t.style.setProperty('--ry', '0deg');
      });
    });
    $$('.btn.primary').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.12).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.2).toFixed(1) + 'px)';
      });
      b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });
  }

  /* ---------- Odemykání: proud „dešifrovaných“ řádků ---------- */
  var gate = $('#gate'), stream = $('#stream'), sIv;
  document.addEventListener('vault:unlocking', function () {
    gate.classList.add('busy');
    var lines = [];
    var hex = function (n) { var s = ''; while (n--) s += Math.floor(Math.random() * 16).toString(16); return s; };
    sIv = setInterval(function () {
      lines.push('0x' + hex(8) + '  ' + hex(16) + '  ' + hex(8));
      if (lines.length > 6) lines.shift();
      stream.textContent = say('DEŠIFRUJI…', 'DECRYPTING…') + '\n' + lines.join('\n');
    }, 70);
  });
  document.addEventListener('vault:unlocked', function () { clearInterval(sIv); });

  /* ---------- Příkazová paleta ---------- */
  var pal = $('#pal'), palIn = $('#palIn'), list = $('#palList'), sel = 0, shown = [];
  function jump(sel) { return function () { var el = $(sel); if (el) el.scrollIntoView({ behavior: calm ? 'auto' : 'smooth' }); }; }
  function link(u) { return function () { location.href = u; }; }
  var cmds = [
    { cs: 'Přejít na Dovednosti', en: 'Go to Skills', tag: '#', run: jump('#skills') },
    { cs: 'Přejít na Projekty', en: 'Go to Projects', tag: '#', run: jump('#projects') },
    { cs: 'Odemknout praxi a CV', en: 'Unlock experience and CV', tag: '🔒', run: function () { jump('#vault')(); setTimeout(function () { var p = $('#pw'); if (p && !$('#locked').hidden) p.focus(); }, 500); } },
    { cs: 'Přepnout jazyk (CZ / EN)', en: 'Switch language (CZ / EN)', tag: 'lang', run: function () { var b = $('.lang button[aria-pressed="false"]'); if (b) b.click(); } },
    { cs: 'Případová studie: Fonger', en: 'Case study: Fonger', tag: '→', run: link('project-fonger.html') },
    { cs: 'Zahrát si Drippy', en: 'Play Drippy', tag: '→', run: link('game.html') },
    { cs: 'Kontakt', en: 'Contact', tag: '→', run: link('reach.html') },
    { cs: 'Zpět na hlavní stránku', en: 'Back to main page', tag: '←', run: link('index.html') }
  ];
  function render() {
    var q = palIn.value.trim().toLowerCase();
    shown = cmds.filter(function (c) { return !q || (c.cs + ' ' + c.en).toLowerCase().indexOf(q) > -1; });
    if (sel >= shown.length) sel = 0;
    list.innerHTML = '';
    shown.forEach(function (c, i) {
      var li = document.createElement('li'); li.setAttribute('role', 'option');
      li.className = i === sel ? 'sel' : '';
      li.innerHTML = '<span></span><small></small>';
      li.firstChild.textContent = say(c.cs, c.en); li.lastChild.textContent = c.tag;
      li.addEventListener('click', function () { run(c); });
      li.addEventListener('pointermove', function () { if (sel !== i) { sel = i; render(); } });
      list.appendChild(li);
    });
  }
  function run(c) { closePal(); setTimeout(c.run, 60); }
  function openPal() { pal.hidden = false; palIn.value = ''; sel = 0; render(); palIn.focus(); }
  function closePal() { pal.hidden = true; }
  $('#palOpen').addEventListener('click', openPal);
  pal.addEventListener('click', function (e) { if (e.target === pal) closePal(); });
  palIn.addEventListener('input', function () { sel = 0; render(); });
  palIn.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % shown.length; render(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + shown.length) % shown.length; render(); }
    else if (e.key === 'Enter' && shown[sel]) { e.preventDefault(); run(shown[sel]); }
  });
  document.addEventListener('keydown', function (e) {
    var typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
    if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing)) { e.preventDefault(); pal.hidden ? openPal() : closePal(); }
    else if (e.key === 'Escape' && !pal.hidden) closePal();
  });
  document.addEventListener('fx:lang', function () { if (!pal.hidden) render(); tickClock(); });

  /* ---------- Tajemství: Konami kód ---------- */
  var seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'], pos = 0, toast = $('#toast');
  document.addEventListener('keydown', function (e) {
    pos = (e.key === seq[pos]) ? pos + 1 : (e.key === seq[0] ? 1 : 0);
    if (pos === seq.length) {
      pos = 0; document.body.classList.add('glitch');
      toast.textContent = say('Hezký pokus. Zbytek je pořád za heslem.', 'Nice try. The rest is still behind the password.');
      toast.classList.add('show');
      setTimeout(function () { document.body.classList.remove('glitch'); }, 2500);
      setTimeout(function () { toast.classList.remove('show'); }, 4200);
    }
  });

  /* Pozdrav pro ty, kdo otevřou konzoli */
  try {
    console.log('%cAdam Vávra', 'font:800 28px system-ui;color:#2f7bff');
    console.log('%cHledáš zdrojový kód? Je celý napsaný ručně, bez frameworků. Zkus Ctrl+K nebo Konami kód.', 'color:#a39a96');
  } catch (e) {}
})();
