/* Malá patička na všech stránkách: autorství, zásady soukromí a (na Outings) zdroje map.
   Přidáš ji do stránky jedním řádkem před </body>:  <script src="legal.js" defer></script> */
(function () {
  var path = location.pathname.split('/').pop() || 'index.html';
  if (path === 'privacy.html') return;                     /* na stránce zásad se patička nekreslí */
  var T = {
    cs: { priv: 'Zásady soukromí', img: 'Snímky Země: NASA · three.js (MIT)' },
    en: { priv: 'Privacy', img: 'Earth imagery: NASA · three.js (MIT)' }
  };
  var css = document.createElement('style');
  css.textContent =
    '.lg{position:fixed;left:50%;bottom:6px;transform:translateX(-50%);z-index:4;max-width:96vw;padding:3px 10px;border-radius:99px;' +
    'font:10.5px/1.4 ui-monospace,Menlo,Consolas,monospace;letter-spacing:.04em;color:rgba(255,255,255,.42);text-align:center;white-space:nowrap;pointer-events:none}' +
    '.lg a{color:rgba(255,255,255,.62);text-decoration:none;pointer-events:auto;border-bottom:1px solid rgba(255,255,255,.2)}' +
    '.lg a:hover,.lg a:focus-visible{color:#fff;border-color:#fff;outline:none}' +
    '.lg i{font-style:normal;opacity:.55;margin:0 .45em}' +
    '@media (max-width:720px){.lg{white-space:normal;width:92vw;font-size:10px;bottom:4px}}' +
    '@media print{.lg{display:none}}';
  document.head.appendChild(css);
  var el = document.createElement('div');
  el.className = 'lg'; el.setAttribute('role', 'contentinfo');
  document.body.appendChild(el);
  function render() {
    var l = (document.documentElement.lang || 'cs').slice(0, 2) === 'en' ? 'en' : 'cs', t = T[l];
    el.innerHTML = '© ' + new Date().getFullYear() + ' Adam Vávra<i>·</i><a href="privacy.html">' + t.priv + '</a>' +
      (path === 'outings.html' ? '<i>·</i>' + t.img : '');
  }
  render();
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
