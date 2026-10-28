/* ==========================================================
   experience.js: věci společné pro Experience a podstránky
   jazyk EN/CZ, odhalování při scrollu, ukazatel čtení,
   zvýrazňování sekce v navigaci, světlo na kartách
   ========================================================== */
(function () {
  var html = document.documentElement;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var LANG_KEY = 'fonger-lang';

  /* ---------- Jazyk ---------- */
  function setLang(l) {
    if (l !== 'en' && l !== 'cs') l = 'en';
    html.setAttribute('data-lang', l);
    html.lang = l;
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.l === l)); });
    // texty v atributech (placeholder apod.) mají data-ph-en / data-ph-cs
    $$('[data-ph-en]').forEach(function (el) { el.placeholder = l === 'cs' ? el.dataset.phCs : el.dataset.phEn; });
    var t = l === 'cs' ? 'cs' : 'en';
    document.title = html.dataset['title' + (t === 'cs' ? 'Cs' : 'En')] || document.title;
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
    document.dispatchEvent(new CustomEvent('fx:lang'));
  }
  var start = 'en';
  try {
    start = localStorage.getItem(LANG_KEY) || ((navigator.language || '').slice(0, 2) === 'cs' ? 'cs' : 'en');
  } catch (e) {}
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.l); }); });
  setLang(start);

  /* ---------- Odhalování při scrollu ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;
  function watch(root) {
    $$('.rv', root).forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  }
  watch(document);

  /* ---------- Navigace: která sekce je právě vidět ---------- */
  var links = $$('.snav a');
  if (links.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    links.forEach(function (a) {
      var t = document.getElementById(a.getAttribute('href').slice(1));
      if (t) spy.observe(t);
    });
  }

  /* ---------- Světlo na kartách ---------- */
  document.addEventListener('pointermove', function (e) {
    var c = e.target.closest && e.target.closest('.card');
    if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  /* ---------- Ukazatel čtení ---------- */
  var bar = $('#progress'), ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var h = html.scrollHeight - innerHeight;
      if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')';
      document.dispatchEvent(new CustomEvent('fx:scroll'));
    });
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  // pro vault.js
  window.FX = {
    calm: calm,
    lang: function () { return html.getAttribute('data-lang'); },
    say: function (cs, en) { return html.getAttribute('data-lang') === 'cs' ? cs : en; },
    watch: watch,
    refresh: onScroll
  };
})();