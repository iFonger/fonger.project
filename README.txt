MAN CAVE – 3D komplex (Three.js)
Spuštění: otevři složku ve VS Code -> pravý klik na index.html -> "Open with Live Server"
(nebo: python -m http.server 8000  a  http://localhost:8000).
Ovládání: WASD / šipky (Shift = rychle), tažení myší = rozhlížení, 1-7 = předvolby pohledů, C = stropy, T = půdorys.
Vlastní textura koberce před TV: v konzoli  setRugTexture("moje.jpg")  (nebo změň v src/mancave.js, funkce buildSofaZone).
Soubory: index.html (offline bundle), src/mancave.js (čitelný zdroj), index-cdn.html (zdroj + three z CDN, netestováno), fun-print.jpg (potisk beerpong stolů).
Logo soubory logos/razer.png a logos/logitech-g.png jsou volitelné (pokud chybí, jen se nezobrazí).
