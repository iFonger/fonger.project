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
  const re = /<img[^>]+(?:data-src|data-original|src)=["']([^"']+\.(?:jpe?g|png|webp)[^"']*)["'][^>]*>/gi;
  let m;
  while ((m = re.exec(html))) {
    const img = abs(m[1], base);
    if (!/produkt|product|upload|image|obr/i.test(img) || /logo|icon|banner|flag/i.test(img)) continue;
    const before = html.slice(Math.max(0, m.index - 900), m.index);
    const after = html.slice(m.index, m.index + 1800);
    const a = /<a[^>]+href=["']([^"']+)["'][^>]*>(?![\s\S]*<a )/i.exec(before) || /<a[^>]+href=["']([^"']+)["']/i.exec(after);
    const alt = /alt=["']([^"']+)["']/i.exec(m[0]);
    const name = clean((/<(?:h2|h3|h4)[^>]*>([\s\S]*?)<\/(?:h2|h3|h4)>/i.exec(after) || [])[1]) || clean(alt && alt[1]);
    const price = (/(\d[\d\s .]{2,9})\s*(?:Kč|CZK)/i.exec(after) || [])[1];
    if (!name || !price) continue;
    if (items.some(i => i.img === img)) continue;
    const d = stamp(img);
    items.push({ name, price: clean(price).replace(/\s+/g, ' ') + ' Kč', img, url: a ? abs(a[1], base) : base, _t: d ? +d : 0, date: fmt(d) });
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
