/* ==========================================================
   vault.js: odemykání zašifrované části
   Heslo → klíč (PBKDF2) → rozšifrování (AES-GCM) v prohlížeči.
   Soubory vault.json (text stránky) a cv.enc (PDF) jsou bez
   hesla jen změť znaků.
   ========================================================== */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var PW_KEY = 'fonger-exp-pw';
  var b64 = function (s) { return Uint8Array.from(atob(s), function (c) { return c.charCodeAt(0); }); };
  var cvKey = null;   // klíč zůstane jen v paměti stránky

  var EYE = { en: ['Show password', 'Hide password'], cs: ['Zobrazit heslo', 'Skrýt heslo'] };
  function eyeLabel() {
    $('#eye').setAttribute('aria-label', EYE[FX.lang()][$('#pw').type === 'password' ? 0 : 1]);
  }
  document.addEventListener('fx:lang', eyeLabel);
  eyeLabel();

  $('#eye').addEventListener('click', function () {
    var pw = $('#pw');
    pw.type = pw.type === 'password' ? 'text' : 'password';
    eyeLabel();
    pw.focus();
  });

  async function decryptVault(password) {
    var res = await fetch('vault.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error('fetch');
    var v = await res.json();
    var base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
    var key = await crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: b64(v.salt), iterations: v.it, hash: 'SHA-256' },
      base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    var plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(v.iv) }, key, b64(v.data));
    cvKey = key;
    return new TextDecoder().decode(plain);
  }

  var form = $('#gate'), err = $('#err'), go = $('#go');

  async function tryUnlock(pw, silent) {
    go.disabled = true;
    err.textContent = '';
    var t0 = Date.now(), content;
    try {
      content = await decryptVault(pw);
    } catch (e) {
      var wait = 450 - (Date.now() - t0);
      if (wait > 0) await new Promise(function (r) { setTimeout(r, wait); });
      go.disabled = false;
      try { sessionStorage.removeItem(PW_KEY); } catch (x) {}
      if (silent) return;
      err.textContent = e && e.message === 'fetch'
        ? FX.say('Obsah se nepodařilo načíst. Zkuste to prosím znovu.', 'Could not load the content. Please try again.')
        : FX.say('Špatné heslo. Zkuste to znovu.', 'Wrong password. Try again.');
      form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake');
      $('#pw').select();
      return;
    }
    try { sessionStorage.setItem(PW_KEY, pw); } catch (x) {}
    $('#lock').classList.add('open');
    if (!silent) document.dispatchEvent(new CustomEvent('vault:unlocking'));
    await new Promise(function (r) { setTimeout(r, FX.calm || silent ? 0 : 1400); });
    document.dispatchEvent(new CustomEvent('vault:unlocked'));
    show(content, !silent);
  }

  function show(content, scroll) {
    var open = $('#open');
    // obsah je můj vlastní, zašifrovaný při nasazení; značky [[en||cs]] se změní na dva jazyky
    open.innerHTML = content.replace(/\[\[([\s\S]*?)\|\|([\s\S]*?)\]\]/g, '<span lang="en">$1</span><span lang="cs">$2</span>');
    $('#locked').hidden = true;
    open.hidden = false;
    FX.watch(open);
    FX.refresh();
    if (scroll) setTimeout(function () { $('#vault').scrollIntoView({ behavior: FX.calm ? 'auto' : 'smooth', block: 'start' }); }, 80);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = $('#pw').value.trim();
    if (v) tryUnlock(v, false);
  });

  /* Časová osa se vybarvuje podle scrollu */
  document.addEventListener('fx:scroll', function () {
    var tl = $('#tl');
    if (!tl) return;
    var r = tl.getBoundingClientRect();
    tl.style.setProperty('--p', Math.max(0, Math.min(1, (innerHeight * 0.62 - r.top) / r.height)));
  });

  /* Kopírování kontaktu a stažení CV */
  document.addEventListener('click', async function (e) {
    var c = e.target.closest('[data-copy]');
    if (c) {
      var txt = c.dataset.copy, orig = c.innerHTML;
      try { await navigator.clipboard.writeText(txt); }
      catch (x) { var ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (y) {} ta.remove(); }
      c.classList.add('ok'); c.textContent = FX.say('Zkopírováno', 'Copied');
      setTimeout(function () { c.classList.remove('ok'); c.innerHTML = orig; }, 1500);
      return;
    }
    var d = e.target.closest('[data-cv]');
    if (d && cvKey) {
      try {
        var r = await fetch('cv.enc', { cache: 'no-cache' });
        var buf = new Uint8Array(await r.arrayBuffer());
        var pdf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: buf.slice(0, 12) }, cvKey, buf.slice(12));
        var url = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
        var a = document.createElement('a');
        a.href = url; a.download = 'CV - Adam Vávra.pdf';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      } catch (x) { alert(FX.say('CV se nepodařilo stáhnout.', 'Could not download the CV.')); }
    }
  });

  /* Odkaz s heslem: experience.html#k=heslo odemkne rovnou (hash se na server neposílá) */
  var m = /[#&]k=([^&]+)/.exec(location.hash);
  var auto = null;
  if (m) { try { auto = decodeURIComponent(m[1]); } catch (x) {} history.replaceState(null, '', location.pathname + location.search); }
  if (!auto) { try { auto = sessionStorage.getItem(PW_KEY); } catch (x) {} }
  if (auto) tryUnlock(auto, true);
})();