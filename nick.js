/* FONGER nickname: one nickname per person for the whole site (Drippy, Smash Challenge and every future scoreboard).
   - asked right when someone first enters Games / FUN (not after a game), locked for good, stored on this device and on the server (sheet "nicks")
   - the anonymous player id (fonger-player-id) proves who owns the nickname; one nickname = one person
   - old players: their previous Drippy name is pre-filled, they only confirm it
   Use: FongerNick.ensure()  -> Promise (resolved once a nickname is confirmed)
        FongerNick.name() / FongerNick.pid / FongerNick.whenReady(fn) */
(function () {
  if (window.FongerNick) return;
  const API = 'https://script.google.com/macros/s/AKfycbxl-aI9eXR_ob9iLQ1Eyx6wLJiziYzX7YgaMzbmX6ZUvbcx71IPSfqTEavpP54zErUS/exec';
  const PID_KEY = 'fonger-player-id', NAME_KEY = 'fonger-name', OK_KEY = 'fonger-nick-ok', PEND_KEY = 'fonger-nick-pending';
  const BLOCKED = ['fuck', 'shit', 'kurv', 'pica', 'pico', 'kokot', 'curak', 'hovno', 'debil'];
  const me = document.currentScript, ACC = (me && me.dataset.accent) || '#ff4fa0';
  const cs = ((me && me.dataset.lang) || (navigator.language || '')).toLowerCase().slice(0, 2);
  const CZ = cs === 'cs' || cs === 'sk';
  const T = CZ ? {
    title: 'Vyber si přezdívku', back: 'Vítej zpět', sub: 'Jedna přezdívka pro všechny hry a tabulky na Fongeru. Zvolíš ji jednou a zůstane tvoje napořád, nejde změnit.',
    subBack: 'Tvoje dosavadní přezdívka se teď uzamkne a bude platit ve všech hrách. Potvrď ji, nebo si zvol jinou (jen pokud ji ještě nemáš v žebříčku).',
    ph: 'tvoje přezdívka', go: 'POTVRDIT', sure: 'ANO, ZAMKNOUT', rules: '2 až 14 znaků: písmena, čísla, mezera, _ . -', empty: 'Napiš přezdívku.', short: 'Aspoň 2 znaky.', bad: 'Tuhle přezdívku nejde použít.',
    taken: 'Tuhle přezdívku už má někdo jiný. Zkus jinou.', net: 'Server teď neodpovídá.', retry: 'Zkusit znovu', offline: 'Pokračovat bez žebříčku', saving: 'Ukládám…', locked: 'Na tomhle zařízení už máš přezdívku '
  } : {
    title: 'Pick your nickname', back: 'Welcome back', sub: 'One nickname for every game and scoreboard on Fonger. You choose it once and it stays yours for good, it cannot be changed.',
    subBack: 'Your current nickname will now be locked in and used in every game. Confirm it, or pick another one (only if it is not on a leaderboard yet).',
    ph: 'your nickname', go: 'CONFIRM', sure: 'YES, LOCK IT IN', rules: '2 to 14 characters: letters, numbers, space, _ . -', empty: 'Type a nickname.', short: 'At least 2 characters.', bad: 'Pick another nickname.',
    taken: 'Someone already has that nickname. Try another.', net: 'The server is not answering right now.', retry: 'Try again', offline: 'Continue without leaderboard', saving: 'Saving…', locked: 'This device already has the nickname '
  };
  const ls = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }, del(k) { try { localStorage.removeItem(k); } catch (e) { } } };
  function getPid() {
    let id = ls.get(PID_KEY) || '';
    if (!/^[A-Za-z0-9-]{8,64}$/.test(id)) { id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 12) + Math.random().toString(36).slice(2, 12); ls.set(PID_KEY, id); }
    return id;
  }
  const PID = getPid();
  const clean = raw => {
    const name = String(raw || '').replace(/[^\p{L}\p{N} _.\-]/gu, '').replace(/\s+/g, ' ').trim().slice(0, 14);
    const flat = name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z]/g, '');
    if (!name) return { ok: false, msg: T.empty };
    if (name.length < 2) return { ok: false, msg: T.short };
    if (BLOCKED.some(w => flat.includes(w))) return { ok: false, msg: T.bad };
    return { ok: true, name };
  };
  const confirmed = () => { const n = ls.get(NAME_KEY); return !!n && ls.get(OK_KEY) === n; };
  const waiters = []; let readyFlag = false;
  function setReady(name) { ls.set(NAME_KEY, name); ls.set(OK_KEY, name); ls.del(PEND_KEY); readyFlag = true; while (waiters.length) { try { waiters.shift()(name); } catch (e) { } } try { window.dispatchEvent(new CustomEvent('fonger-nick', { detail: name })); } catch (e) { } }
  async function api(body, timeout) {
    const ctl = window.AbortController ? new AbortController() : null, t = ctl ? setTimeout(() => ctl.abort(), timeout || 9000) : 0;
    try {
      const r = await fetch(API, { method: 'POST', body: JSON.stringify(Object.assign({ player_id: PID }, body)), signal: ctl ? ctl.signal : undefined });
      return await r.json();
    } finally { clearTimeout(t); }
  }
  async function whoami() {
    const ctl = window.AbortController ? new AbortController() : null, t = ctl ? setTimeout(() => ctl.abort(), 6000) : 0;
    try { const r = await fetch(API + '?action=nick&pid=' + encodeURIComponent(PID), { signal: ctl ? ctl.signal : undefined }); const j = await r.json(); return j && typeof j.nick === 'string' && j.nick ? j.nick : (j && 'nick' in j ? '' : null); } catch (e) { return null; } finally { clearTimeout(t); }
  }

  /* ---------- the window ---------- */
  let box = null, busy = false;
  function css(el, s) { el.style.cssText = s; return el; }
  function openModal(opt) {
    if (box) return;
    const old = ls.get(NAME_KEY) || '';
    const returning = !!old && !(opt && opt.fresh);
    box = css(document.createElement('div'), 'position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;padding:16px;background:rgba(4,5,9,.82);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);font-family:Arial,Helvetica,sans-serif;color:#fff');
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.id = 'fongerNick';
    box.innerHTML = `<div style="width:min(94vw,440px);box-sizing:border-box;padding:26px 24px 22px;border-radius:20px;background:linear-gradient(160deg,#12131b,#0a0b11);border:1px solid ${ACC}99;box-shadow:0 0 60px ${ACC}40,0 20px 60px rgba(0,0,0,.6);text-align:center">
      <div style="font:800 11px Arial;letter-spacing:.28em;color:${ACC};margin-bottom:10px">FONGER</div>
      <div style="font:900 26px Arial Black,Arial;line-height:1.1;margin-bottom:10px">${returning ? T.back : T.title}</div>
      <div style="font:400 14px/1.5 Arial;color:rgba(255,255,255,.72);margin-bottom:16px">${returning ? T.subBack : T.sub}</div>
      <input id="fnIn" type="text" maxlength="14" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${T.ph}" enterkeyhint="done" style="width:100%;box-sizing:border-box;padding:13px 14px;border-radius:12px;border:1.5px solid rgba(255,255,255,.28);background:#0b0c12;color:#fff;font:700 18px Arial;text-align:center;outline:none">
      <div style="font:400 11.5px Arial;color:rgba(255,255,255,.45);margin-top:7px">${T.rules}</div>
      <div id="fnMsg" style="min-height:20px;margin:10px 0 4px;font:700 13.5px Arial;color:#ff8a8a"></div>
      <button id="fnGo" type="button" style="width:100%;padding:13px;border-radius:12px;border:0;background:${ACC};color:#0a0a0f;font:900 15px Arial;letter-spacing:.08em;cursor:pointer">${T.go}</button>
      <button id="fnOff" type="button" style="display:none;margin-top:10px;background:none;border:0;color:rgba(255,255,255,.55);font:600 12.5px Arial;text-decoration:underline;cursor:pointer">${T.offline}</button></div>`;
    document.body.appendChild(box);
    const inp = box.querySelector('#fnIn'), msg = box.querySelector('#fnMsg'), go = box.querySelector('#fnGo'), off = box.querySelector('#fnOff');
    if (returning) inp.value = old;
    ['keydown', 'keyup', 'keypress', 'pointerdown', 'mousedown', 'touchstart', 'wheel'].forEach(ev => box.addEventListener(ev, e => e.stopPropagation(), { passive: true }));
    let armed = null;
    inp.addEventListener('input', () => { armed = null; go.textContent = T.go; msg.textContent = ''; });
    async function submit() {
      if (busy) return;
      const c = clean(inp.value); if (!c.ok) { msg.style.color = '#ff8a8a'; msg.textContent = c.msg; return; }
      if (!returning && armed !== c.name) { armed = c.name; go.textContent = T.sure + ': ' + c.name.toUpperCase(); return; }
      busy = true; go.disabled = true; msg.style.color = 'rgba(255,255,255,.7)'; msg.textContent = T.saving; off.style.display = 'none';
      try {
        const j = await api({ action: 'register', name: c.name });
        if (j && j.ok) { close(); setReady(j.name || c.name); return; }
        if (j && j.error === 'locked' && j.name) { close(); setReady(j.name); return; }
        msg.style.color = '#ff8a8a'; msg.textContent = j && j.error === 'taken' ? T.taken : j && j.error === 'name' ? T.bad : T.net; armed = null; go.textContent = T.go;
        if (!j || (j.error !== 'taken' && j.error !== 'name')) off.style.display = 'inline-block';
      } catch (e) { msg.style.color = '#ff8a8a'; msg.textContent = T.net; go.textContent = T.retry; off.style.display = 'inline-block'; armed = null; }
      busy = false; go.disabled = false;
    }
    go.addEventListener('click', submit);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); submit(); } });
    off.addEventListener('click', () => { const c = clean(inp.value); if (!c.ok) { msg.textContent = c.msg; return; } ls.set(NAME_KEY, c.name); ls.set(PEND_KEY, c.name); close(); readyFlag = true; while (waiters.length) { try { waiters.shift()(c.name); } catch (e) { } } });
    setTimeout(() => { try { inp.focus(); if (returning) inp.select(); } catch (e) { } }, 80);
  }
  function close() { if (box) { box.remove(); box = null; } busy = false; if (document.pointerLockElement && false) document.exitPointerLock(); }

  let pending = null;
  function ensure(opt) {
    if (opt && opt.force) { readyFlag = false; ls.del(OK_KEY); }
    if (confirmed()) { verify(); return Promise.resolve(ls.get(NAME_KEY)); }
    if (pending && !(opt && opt.force)) return pending;
    pending = new Promise(res => {
      waiters.push(res);
      const wait = () => { if (document.body) go(); else document.addEventListener('DOMContentLoaded', go, { once: true }); };
      const go = () => {
        openModal(opt);
        whoami().then(n => { if (n && box) { close(); setReady(n); } });          // the server already knows this device: no need to ask
      };
      wait();
    }).then(n => { pending = null; return n; });
    return pending;
  }
  let verified = false;
  async function verify() {                                                          // quietly re-register (e.g. after an offline start) or notice a conflict
    if (verified) return; verified = true;
    const n = ls.get(NAME_KEY), pend = ls.get(PEND_KEY);
    const srv = await whoami();
    if (srv === null) return;
    if (srv) { if (srv !== n) setReady(srv); return; }
    try { const j = await api({ action: 'register', name: n }); if (j && j.ok) { ls.del(PEND_KEY); return; } if (j && j.error === 'taken') { ls.del(OK_KEY); ls.del(NAME_KEY); ensure({ fresh: true }); } } catch (e) { }
  }
  window.FongerNick = {
    pid: PID, api: API, clean,
    name: () => ls.get(NAME_KEY) || '', confirmed, ensure,
    whenReady(fn) { if (confirmed() || readyFlag) fn(ls.get(NAME_KEY)); else waiters.push(fn); },
    open() { ensure({ force: true }); }
  };
  if (confirmed()) setTimeout(verify, 2500);
  if (me && me.dataset.auto) ensure();                                              // pages that do not call ensure() themselves (FUN)
})();
