/* Pomocník pro všechny stránky:
   1) vloží pozadí se sty malých mráčků,
   2) vytvoří SVG filtr "bubble" a přechod "irid" (nafouknuté chromové písmeno),
   3) říká prohlížeči, které písmeno je "to samé" na staré a nové stránce (plynulý přechod). */
(function () {
  var KEY = 'fonger-letter';
  var NAME = 'letter';

  /* ---------- 1) Pozadí: sto malých mráčků ve čtyřech vrstvách ---------- */

  /* Vrstvy od nejvzdálenější po nejbližší.
     n = počet mráčků, wmin a wmax = velikost (v % šířky obrazovky),
     o = průhlednost vrstvy, t = doba jednoho průletu (s), sw = tloušťka obrysu */
  var LAYERS = [];   // bez mráčků: pozadí je jen tmavé se zrnem

  /* Odstíny mráčků: jedna ocelová šedomodrá (musí sedět se style.css) */
  var PALETTE = ['#c9d3ea', '#9fb4d9', '#8aa0c8', '#b4c0dc', '#7e92bd'];

  /* Tvar mráčku: plochá spodní hrana a čtyři oblouky nahoře */
  var CLOUD_PATH = 'M30 90H165A25 25 0 0 0 168 40A32 32 0 0 0 112 24A40 40 0 0 0 40 38A26 26 0 0 0 30 90Z';

  /* Smíchá barvu s bílou (k = 0 beze změny, 1 = bílá) */
  function mixWhite(hex, k) {
    var n = parseInt(hex.slice(1), 16);
    var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    r = Math.round(r + (255 - r) * k);
    g = Math.round(g + (255 - g) * k);
    b = Math.round(b + (255 - b) * k);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  /* Přechody pro mráčky (nahoře světlé, dole průhledné = lehký 3D dojem)
     a tvar mráčku se stínem pod sebou (tloušťka) */
  var CLOUD_DEFS =
    PALETTE.map(function (c, i) {
      return '<linearGradient id="cg' + i + '" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="' + mixWhite(c, 0.55) + '" stop-opacity="0.75"/>' +
        '<stop offset="0.55" stop-color="' + c + '" stop-opacity="0.28"/>' +
        '<stop offset="1" stop-color="' + c + '" stop-opacity="0.08"/>' +
        '</linearGradient>';
    }).join('') +
    '<g id="cloudShape">' +
    '<path d="' + CLOUD_PATH + '" transform="translate(0 6)" fill="#000" fill-opacity="0.35" stroke="none"/>' +
    '<path d="' + CLOUD_PATH + '" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>' +
    '</g>';

  /* Náhoda se vždy stejným výsledkem, takže obloha vypadá na každé stránce stejně */
  function makeRandom(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* Společný čas pro všechny stránky: na nové stránce mráčky pokračují tam, kde skončily */
  function epoch() {
    var now = Date.now();
    try {
      var e = parseInt(sessionStorage.getItem('fonger-epoch'), 10);
      if (!e || e > now) {
        e = now;
        sessionStorage.setItem('fonger-epoch', String(e));
      }
      return e;
    } catch (err) {
      return now;
    }
  }

  function ensureMist() {
    if (document.querySelector('.mist')) return;
    var host = document.body;
    if (!host) return;

    var rnd = makeRandom(7);
    var elapsed = (Date.now() - epoch()) / 1000;
    var html = '';

    LAYERS.forEach(function (L) {
      var set = '';
      for (var i = 0; i < L.n; i++) {
        var w = L.wmin + rnd() * (L.wmax - L.wmin);
        var x = rnd() * 94;
        var y = rnd() * 94;
        var ci = Math.floor(rnd() * PALETTE.length);
        set +=
          '<svg class="cloud c' + ci + '" viewBox="-5 -20 210 130" aria-hidden="true" ' +
          'style="--x:' + x.toFixed(1) + 'vw;--y:' + y.toFixed(1) + 'vh;--w:' + w.toFixed(1) + 'vw;--sw:' + L.sw + '">' +
          '<use href="#cloudShape"/></svg>';
      }
      var delay = -(elapsed % L.t);
      html +=
        '<div class="layer" style="--t:' + L.t + 's;--o:' + L.o + ';animation-delay:' + delay.toFixed(2) + 's">' +
        '<div class="set">' + set + '</div><div class="set">' + set + '</div></div>';
    });

    var m = document.createElement('div');
    m.className = 'mist';
    m.setAttribute('aria-hidden', 'true');
    m.innerHTML = html;
    host.insertBefore(m, host.firstChild);
  }

  /* ---------- 2) Leštěný chrom ---------- */
  var DEFS =
    '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">' +
    '<defs>' +

    CLOUD_DEFS +

    /* Barva kovu: stříbrná s jemným ocelově modrým nádechem.
       Tady si můžeš změnit odstín celého písmene. */
    '<linearGradient id="irid" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#f4f8ff"/>' +
    '<stop offset="0.3" stop-color="#a9b8d6"/>' +
    '<stop offset="0.55" stop-color="#e6edfb"/>' +
    '<stop offset="0.78" stop-color="#7b8db3"/>' +
    '<stop offset="1" stop-color="#cfd9ee"/>' +
    '</linearGradient>' +

    /* Barevné přechody písmen: červená (hlavní stránka), růžová (hra), modrá (Experience).
       Stejné barvy jako velké E na stránce Experience. */
    '<linearGradient id="fx-red" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0" stop-color="#8d0b18"/><stop offset="0.55" stop-color="#47050c"/><stop offset="1" stop-color="#0e0105"/>' +
    '</linearGradient>' +
    '<linearGradient id="fx-pink" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0" stop-color="#ffb3dc"/><stop offset="0.55" stop-color="#ff4fa6"/><stop offset="1" stop-color="#4a0b2e"/>' +
    '</linearGradient>' +
    '<linearGradient id="fx-blue" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0" stop-color="#4d94ff"/><stop offset="0.55" stop-color="#0b3fb5"/><stop offset="1" stop-color="#03102a"/>' +
    '</linearGradient>' +

    /* Filtr: zakulatí tvar, ztmaví ho a světlé vrstvy nechá jen na okrajích */
    '<filter id="bubble" filterUnits="userSpaceOnUse" x="-20" y="-20" width="110" height="140" color-interpolation-filters="sRGB">' +

    /* 1) zakulacení: rozmazání a ostrý práh (zmizí hranaté rohy) */
    '<feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="soft"/>' +
    '<feComponentTransfer in="soft" result="round"><feFuncA type="linear" slope="14" intercept="-6"/></feComponentTransfer>' +

    /* 2) základ: tmavý kov */
    '<feComponentTransfer in="round" result="base">' +
    '<feFuncR type="linear" slope="0.3"/><feFuncG type="linear" slope="0.3"/><feFuncB type="linear" slope="0.38"/>' +
    '</feComponentTransfer>' +

    /* 3) měkký objem: střed tlustých částí je o něco světlejší */
    '<feGaussianBlur in="round" stdDeviation="7" result="heightBlur"/>' +
    '<feFlood flood-color="#6a6a9a" flood-opacity="0.7" result="lightFill"/>' +
    '<feComposite in="lightFill" in2="heightBlur" operator="in" result="puffRaw"/>' +
    '<feComposite in="puffRaw" in2="round" operator="in" result="puff"/>' +

    /* 4) světlá hrana nahoře vlevo (barva z přechodu, zesílená) */
    '<feOffset in="round" dx="2.4" dy="2.4" result="shiftDR"/>' +
    '<feComposite in="round" in2="shiftDR" operator="out" result="rimTL"/>' +
    '<feGaussianBlur in="rimTL" stdDeviation="1.5" result="rimTLb"/>' +
    '<feComposite in="round" in2="rimTLb" operator="in" result="rimTLc"/>' +
    '<feComponentTransfer in="rimTLc" result="rimTLhot">' +
    '<feFuncR type="linear" slope="2.2"/><feFuncG type="linear" slope="2.2"/><feFuncB type="linear" slope="2.2"/>' +
    '</feComponentTransfer>' +

    /* 5) hrana dole vpravo s jemným teplejším odrazem (otočený odstín) */
    '<feOffset in="round" dx="-2.8" dy="-2.8" result="shiftUL"/>' +
    '<feComposite in="round" in2="shiftUL" operator="out" result="rimBR"/>' +
    '<feGaussianBlur in="rimBR" stdDeviation="1.8" result="rimBRb"/>' +
    '<feComposite in="round" in2="rimBRb" operator="in" result="rimBRc"/>' +
    '<feColorMatrix in="rimBRc" type="hueRotate" values="150" result="rimBRh"/>' +
    '<feComponentTransfer in="rimBRh" result="rimBRhot">' +
    '<feFuncR type="linear" slope="1.8"/><feFuncG type="linear" slope="1.8"/><feFuncB type="linear" slope="1.8"/>' +
    '</feComponentTransfer>' +

    /* 6) tenká bílá čára odlesku těsně uvnitř světlé hrany */
    '<feOffset in="round" dx="3" dy="3" result="s1"/>' +
    '<feOffset in="round" dx="4.5" dy="4.5" result="s2"/>' +
    '<feComposite in="s1" in2="s2" operator="out" result="band"/>' +
    '<feGaussianBlur in="band" stdDeviation="0.5" result="bandb"/>' +
    '<feFlood flood-color="#ffffff" flood-opacity="0.9" result="specCol"/>' +
    '<feComposite in="specCol" in2="bandb" operator="in" result="spec0"/>' +
    '<feComposite in="spec0" in2="round" operator="in" result="spec"/>' +

    /* vrstvy se poskládají přes sebe */
    '<feMerge>' +
    '<feMergeNode in="base"/>' +
    '<feMergeNode in="puff"/>' +
    '<feMergeNode in="rimBRhot"/>' +
    '<feMergeNode in="rimTLhot"/>' +
    '<feMergeNode in="spec"/>' +
    '</feMerge>' +

    '</filter>' +
    '</defs></svg>';

  function ensureDefs() {
    ensureMist();
    if (document.getElementById('bubble')) return;
    var host = document.body || document.documentElement;
    host.insertAdjacentHTML('afterbegin', DEFS);
  }
  window.fongerEnsureDefs = ensureDefs;

  /* ---------- 3) Plynulý přechod mezi stránkami ---------- */
  function read() {
    try { return JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
  }

  function pageName() {
    return location.pathname.split('/').pop() || 'index.html';
  }

  /* PODSTRÁNKA: z domečku se stane kliknuté písmeno */
  function applyMark() {
    ensureDefs();
    var mark = document.getElementById('mark');
    if (!mark || mark.dataset.done) return;

    var rec = read();
    if (!rec || !rec.d || rec.href !== pageName()) return;   // jiná stránka: zůstane domeček

    var NS = 'http://www.w3.org/2000/svg';
    var svg = mark.querySelector('svg');
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    svg.setAttribute('viewBox', '0 0 70 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('d', rec.d);
    p.setAttribute('fill-rule', 'evenodd');
    svg.appendChild(p);

    mark.classList.add('is-letter');
    mark.dataset.done = '1';
  }

  /* STARÁ STRÁNKA: těsně před odchodem pojmenujeme kliknuté písmeno */
  window.addEventListener('pageswap', function (e) {
    if (!e.viewTransition) return;
    var chosen = window.__fongerChosen;       // nastaví hlavní stránka při kliknutí
    if (chosen) {
      chosen.style.transition = 'none';       // písmeno se vrátí ze "zvednutého" do základního tvaru
      chosen.style.transform = 'none';
      chosen.style.setProperty('view-transition-name', NAME);
    }
  });

  /* NOVÁ STRÁNKA: těsně před prvním vykreslením */
  window.addEventListener('pagereveal', function (e) {
    if (!e.viewTransition) return;

    document.documentElement.classList.add('vt');   // vypne úvodní animaci písmen
    document.documentElement.dataset.vt = pageName().replace(/\.html$/, '') || 'index';   // podle cíle se vybere glitch (viz style.css)
    applyMark();

    // Návrat na hlavní stránku: pojmenujeme písmeno, ze kterého jsme přišli
    var rec = read();
    var logo = document.querySelector('.logo');
    if (logo && rec) {
      var letter = logo.querySelectorAll('.letter')[rec.i];
      var svg = letter && (letter.querySelector('svg.f') || letter.querySelector('svg'));
      if (svg) {
        svg.style.setProperty('view-transition-name', NAME);
        e.viewTransition.finished.then(function () {
          svg.style.removeProperty('view-transition-name');
        });
      }
    }
  });

  // Záloha pro prohlížeče bez podpory přechodů
  document.addEventListener('DOMContentLoaded', applyMark);
})();