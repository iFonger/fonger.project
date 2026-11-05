// Vercel serverless function: newest Yonex racket + shoes from yonex.cz
// GET /api/yonex            -> { racket:{name,price,img,date,url}, shoes:{...} }
// GET /api/yonex?img=<url>  -> image proxy (so the 3D canvas isn't tainted by CORS)
// GET /api/yonex?debug=1    -> shows what the parser found
const PAGES = {
  racket: 'https://www.yonex.cz/kategorie/badminton/rakety.html',
  shoes: 'https://www.yonex.cz/kategorie/badminton/badmintonova-obuv.html',
};
const UA = { 'user-agent': 'Mozilla/5.0 (compatible; FongerProject/1.0)', 'accept-language': 'cs' };
const abs = (u, base) => { try { return new URL(u.replace(/&amp;/g, '&'), base).href; } catch (e) { return ''; } };
const clean = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/\s+/g, ' ').trim();

function stamp(u) { // date from a file name containing a unix timestamp / yyyymmdd
  const m = u.match(/(?:^|[^0-9])(1[5-9]\d{8})(?:[^0-9]|$)/) || null;
  if (m) return new Date(+m[1] * 1000);
  const n = u.match(/(20\d{2})[-_]?(0[1-9]|1[0-2])[-_]?([0-3]\d)/);
  return n ? new Date(`${n[1]}-${n[2]}-${n[3]}`) : null;
}
const fmt = d => d ? `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}` : '';

function parse(html, base) {
  const items = [];
  const parts = html.split(/<li[^>]*class="items__item"[^>]*>/i).slice(1);
  for (const p of parts) {
    const a = /<a[^>]*class="items__text-main"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i.exec(p) || /<a[^>]*href="([^"]+)"[^>]*class="items__text-main"[^>]*>([\s\S]*?)<\/a>/i.exec(p);
    const pr = /items__text-secondary[^>]*>([\s\S]*?)<\/p>/i.exec(p);
    const im = /<img[^>]*class="items__img"[^>]*src="([^"]+)"/i.exec(p);
    if (!a || !im) continue;
    const img = abs(im[1], base);
    const m = /\/(20\d{2})(\d{2})(\d{2})(\d{6})?\d*\.\w+$/.exec(img);
    const d = m ? new Date(`${m[1]}-${m[2]}-${m[3]}T12:00:00`) : null;
    items.push({ name: clean(a[2]), price: pr ? clean(pr[1]) : '', img, url: abs(a[1], base), _t: d ? +d : 0, date: fmt(d) });
  }
  return items;
}

module.exports = async (req, res) => {
  try {
    const q = req.query || {};
    if (q.img) {
      const u = String(q.img);
      if (!/^https:\/\/([a-z0-9-]+\.)*yonex\.cz\//i.test(u)) { res.statusCode = 400; return res.end('bad'); }
      const r = await fetch(u, { headers: UA });
      res.setHeader('content-type', r.headers.get('content-type') || 'image/jpeg');
      res.setHeader('cache-control', 'public, s-maxage=86400');
      return res.end(Buffer.from(await r.arrayBuffer()));
    }
    const out = {}, dbg = {};
    await Promise.all(Object.entries(PAGES).map(async ([k, url]) => {
      try {
        const html = await (await fetch(url, { headers: UA })).text();
        const items = parse(html, url);
        dbg[k] = { bytes: html.length, found: items.length, first: items.slice(0, 5) };
        if (q.debug == 2) {
          const i = html.search(/\d\s*(Kč|CZK)/i);
          dbg[k].kc = i < 0 ? 'no Kč in html' : html.slice(Math.max(0, i - 1500), i + 300);
          dbg[k].imgs = (html.match(/<img[^>]*>/gi) || []).slice(0, 12);
        }
        if (!items.length) return;
        const dated = items.filter(i => i._t).sort((a, b) => b._t - a._t);
        const it = dated[0] || items[0];
        out[k] = { name: it.name, price: it.price, date: it.date, url: it.url, img: '/api/yonex?img=' + encodeURIComponent(it.img) };
      } catch (e) { dbg[k] = { error: String(e) }; }
    }));
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.setHeader('cache-control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.end(JSON.stringify(q.debug ? { out, dbg } : out));
  } catch (e) { res.statusCode = 500; res.end(JSON.stringify({ error: String(e) })); }
};
