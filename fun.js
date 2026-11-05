// FUN page UI layer: data, stats, panels, badminton views. The 3D room is in fun3d.js
(function(){
const $=s=>document.querySelector(s), B=BADMINTON, X=FUN_EXTRA, V=B.vaseliga.singles, H=B.hobbyliga;
/* ---------- stats from data ---------- */
const vl=V.profile, hp=H.profile;
const totW=vl.wins+hp.wins, totL=vl.losses+hp.losses, totD=hp.draws, totM=vl.matches+hp.matches;
const totSW=hp.setsW+V.rounds.reduce((a,r)=>a+r.res.reduce((b,m)=>b+(m[3]?0:m[1]),0),0);
const totSL=hp.setsL+V.rounds.reduce((a,r)=>a+r.res.reduce((b,m)=>b+(m[3]?0:m[2]),0),0);
if($('#lf'))$('#lf').innerHTML=H.matches.slice(-5).map(m=>`<b class="${m[3]>m[4]?'W':'L'}">${m[3]>m[4]?'W':m[3]==m[4]?'D':'L'}</b>`).join('');

/* ---------- opening / closing views ---------- */
function mode(m){['detail','beer','games','bh'].forEach(c=>document.body.classList.toggle(c,c==m))}
function closeAll(){mode(null)}
let direct=false;   // opened straight from a league board in the hall (back/Esc closes instead of going to the hub)
const OPEN={
 climb(){panel('WALL','Climbing',`<div class=sec>${X.climbing.note.toUpperCase()}</div>`)},
 strava(){const a=X.strava;panel('STRAVA · ACTIVITY','Active days',`<div class=board><div class=dig><b>${a.active}<small style="font-size:18px">/${a.goal}</small></b><i>ACTIVE DAYS</i></div><div class=dig><b>${a.steps}</b><i>STEPS / DAY</i></div></div><div class=board><div class=dig><b>${a.gym}</b><i>GYM</i></div><div class=dig><b>${a.yoga}</b><i>YOGA</i></div></div><div class=sec>${a.note.toUpperCase()}</div>`)},
 games(){mode('games')},
 beer(){mode('beer')},
 bad(){direct=false;mode('bh');bh('hub')},
 vl(){direct=true;mode('bh');bh('vl')},
 hl(){direct=true;mode('bh');bh('hl')}
};
function panel(k,h,body){$('#panel').innerHTML=`<span class=x data-close>✕</span><h2>${k}</h2><h1>${h}</h1>${body}`;mode('detail')}
/* ---------- games ---------- */
const D=$('#desk'),L=$('#glist');
X.games.forEach((g,i)=>{const d=document.createElement('div');d.className='ic';d.style.left=(50+(i%3)*210)+'px';d.style.top=(50+Math.floor(i/3)*190)+'px';d.innerHTML=`<b style="background:${g[2]};color:${g[3]}">${g[0]}</b>${g[1]}`;D.appendChild(d);
 const r=document.createElement('div');r.className='g';r.innerHTML=`<b style="background:${g[2]};color:${g[3]}">${g[0]}</b>${g[1]}`;L.appendChild(r)});

/* ---------- beer pong ---------- */
const be=X.beer;
$('#bpanel').innerHTML=`<span data-close style="position:absolute;right:26px;top:20px;color:#8a96c4;font-size:22px">✕</span><h2>AFTERPARTY · BEER PONG</h2><h1>Beer pong</h1>
<div class=big3><div class=dig><b>${be.tournaments}</b><i>TOURNAMENTS</i></div><div class=dig><b>${be.won}</b><i>WON</i></div><div class=dig><b>${Math.round(be.won/be.tournaments*100)}%</b><i>WIN RATE</i></div></div>
<div class=sec>BEST RESULT</div><div style="font-size:22px;font-weight:800">🏆 ${be.best}</div><div class=sec>TOURNAMENTS</div>
${be.list.map(r=>`<div class=m><span class="w ${r[0]=='1'?'W':'L'}">${r[0]}</span>${r[1]}<em>${r[2]}</em></div>`).join('')}`;

/* ---------- badminton views ---------- */
let view='hub';
const bhEl=$('#bh');
const chips=(a)=>a.map(m=>`<span class="chip ${m[3]>m[4]?'w':m[3]==m[4]?'d':'l'}">${m[3]}:${m[4]}</span>`).join('');
function rankChart(w,h){const ps=V.rounds.map(r=>r.rank).concat([+vl.rank.split('/')[0]]);const lo=Math.min(...ps)-14,hi=Math.max(...ps)+10;
 const x=i=>20+i*(w-40)/(ps.length-1),y=v=>10+(v-lo)/(hi-lo)*(h-30);const d=ps.map((v,i)=>(i?'L':'M')+x(i)+','+y(v)).join(' ');
 const lab=V.rounds.map(r=>r.m).concat(['Now']);
 return `<svg viewBox="0 0 ${w} ${h}"><path d="${d} L${x(ps.length-1)},${h-20} L${x(0)},${h-20}Z" fill="#45e08a14"/><path d="${d}" stroke="#45e08a" stroke-width=3 fill=none stroke-linejoin=round />${ps.map((v,i)=>`<circle cx=${x(i)} cy=${y(v)} r=4 fill="#0d1230" stroke="#45e08a" stroke-width=2 /><text x=${x(i)} y=${y(v)-9} fill="#cdd4ff" font-size=11 text-anchor=middle>${v}</text>`).join('')}${lab.map((t,i)=>`<text x=${x(i)} y=${h-4} fill="#6e78a8" font-size=10 text-anchor=middle>${t}</text>`).join('')}</svg>`}
function elo(w,h){const p=[1216,1208,1190,1188,1174,1155,1142,1155,1165,1174,1186,1198,1210,1226,1238]; // shape read from the HobbyLiga chart
 const x=i=>12+i*(w-24)/(p.length-1),y=v=>h-24-(v-1135)/(1245-1135)*(h-40);const d=p.map((v,i)=>(i?'L':'M')+x(i)+','+y(v)).join(' ');
 return `<svg viewBox="0 0 ${w} ${h}"><path d="${d} L${x(14)},${h-24} L${x(0)},${h-24}Z" fill="#ff4d6d14"/><path d="${d}" stroke="#ff6b86" stroke-width=3 fill=none stroke-linejoin=round /><circle cx=${x(14)} cy=${y(1238)} r=5 fill="#ff6b86"/><text x=${x(14)-8} y=${y(1238)-10} fill="#fff" font-size=12 text-anchor=end font-weight=700>${hp.elo}</text><text x=12 y=${h-6} fill="#6e78a8" font-size=10>Jan 2026</text><text x=${w-12} y=${h-6} fill="#6e78a8" font-size=10 text-anchor=end>Oct 2026</text></svg>`}
const po=H.matches.filter(m=>/Playoff|FINAL/.test(m[1]));
const bracket=()=>`<div style="display:flex;gap:8px;margin-top:6px">${po.map((m,i)=>`<div style="flex:1;background:#0b1029;border-radius:10px;padding:8px 10px;${i==po.length-1?'border:1px solid #ffd56b88':''}"><span style="font-size:10px;letter-spacing:.14em;color:${i==po.length-1?'#ffd56b':'#8b95c9'}">${m[1].replace('Playoff ','')}</span><div style="font-weight:700;font-size:18px">${m[3]}:${m[4]} <span class=chip style="min-width:0">W</span></div><div class=sub>vs ${m[2]}</div></div>`).join('')}</div>`;
const top=(t,s,b)=>`<div class=top><div><h1>${t}</h1><div class=sub>${s}</div></div><div class=back data-back>← ${b}</div></div>`;
const roundSum=r=>{let a=0,b=0;r.res.forEach(m=>{if(!m[3]){a+=m[1];b+=m[2]}});return a+':'+b};
function bh(v){view=v;let h='';
 if(v=='hub'){
  h=top('BADMINTON','Two leagues · 2026 season','BACK TO ROOM')+
  `<div class=strip><div class=k><b>${totM}</b><span>Matches played</span></div><div class=k><b>${totW}–${totD}–${totL}</b><span>Wins – draws – losses</span></div><div class=k><b>${Math.round(totW/totM*100)}%</b><span>Win rate</span></div><div class=k><b>${totSW} : ${totSL}</b><span>Sets won : lost</span></div><div class=k><b style="color:#ffd56b">1×</b><span>HobbyLiga champion 2026</span></div></div>
  <div class=cards>
  <div class="card gr go" data-go=vl><div class=tag>VAŠELIGA · PRAHA</div><div class=h2>Monthly rounds, groups of 5</div><div class=tabs><span class="tb on">Singles</span><span class=tb data-stop>Doubles · from 1 Nov</span></div>
   <div class=row><div class=m><b>${vl.matches}</b><span>Matches</span></div><div class=m><b>${vl.wins}–${vl.losses}</b><span>W – L</span></div><div class=m><b>${vl.rate}%</b><span>Win rate</span></div><div class=m><b>${vl.rank.split('/')[0]}<small style="font-size:12px;color:#8b95c9">/${vl.rank.split('/')[1]}</small></b><span>City rank</span></div></div>
   <div class=sec>RANK PROGRESSION · ${V.rounds[0].rank} → ${Math.min(...V.rounds.map(r=>r.rank))} (best) → ${vl.rank.split('/')[0]}</div>${rankChart(560,170)}
   <div class=sec>FORM · LAST 5 MATCHES</div><div>${vl.form.map(f=>`<span class="chip ${f=='W'?'w':'l'}">${f}</span>`).join('')}</div>
   <div class=cta>OPEN VAŠELIGA →</div></div>
  <div class="card rd go" data-go=hl><div class=tag>HOBBYLIGA · PRAHA</div><div class=h2>Weekly duels + playoff</div><div class=tabs><span class="tb on">Singles</span><span class=tb data-stop>Elo ${hp.elo} · HL index ${hp.hlIndex}</span></div>
   <div class=row><div class=m><b>${hp.matches}</b><span>Matches</span></div><div class=m><b>${hp.wins}–${hp.draws}–${hp.losses}</b><span>W – D – L</span></div><div class=m><b>${hp.setsW}:${hp.setsL}</b><span>Sets</span></div><div class=m><b style="color:#ffd56b">🏆 WINNER</b><span>Playoff 2026</span></div></div>
   <div class=sec>ELO DEVELOPMENT</div>${elo(560,95)}<div class=sec>PLAYOFF 2026 · ROAD TO THE TITLE</div>${bracket()}
   <div class=sec>LAST RESULTS</div><div>${chips(H.matches.slice(-8))}</div>
   <div class=cta>OPEN HOBBYLIGA →</div></div></div>`;
 }
 if(v=='vl'){
  h=top('VAŠELIGA · SINGLES',`Prague badminton · 2026 · ${V.rounds.length} rounds played`,'BADMINTON')+
  `<div class=two><div class=colL><div class=card><div class=tag style="color:#45e08a">ALL RESULTS</div>
  <table><tr><th>Round</th><th>Lvl</th><th>Place</th><th>Results</th><th>Sets</th><th>Rank</th></tr>${V.rounds.map(r=>`<tr><td>${r.s} · ${r.m}</td><td style="color:#45e08a">${r.lvl}</td><td>${r.pl==1?'🥇':r.pl==2?'🥈':'#'+r.pl}</td><td>${r.res.map(m=>`<span class="chip ${m[3]?'n':m[1]>m[2]?'w':'l'}">${m[3]=='np'?'–':m[3]=='wo'?'W/O':m[1]+':'+m[2]}</span><span class=opp style="font-size:10px;color:#6e78a8">${m[0]}</span>`).join(' ')}</td><td>${roundSum(r)}</td><td>${r.rank}.</td></tr>`).join('')}</table>
  <div class=sec style="margin-top:18px">W/O = walkover win (not counted) · – = not played</div></div></div>
  <div class=colR><div class=card><div class=tag style="color:#45e08a">RANK</div><div style="font-size:54px;font-weight:800">${vl.rank.split('/')[0]}<small style="font-size:18px;color:#8b95c9"> /${vl.rank.split('/')[1]}</small></div>${rankChart(480,190)}
  <div class=row style="margin-top:16px"><div class=m><b>${vl.wins}–${vl.losses}</b><span>Matches</span></div><div class=m><b>${V.rounds.reduce((a,r)=>a+r.res.reduce((b,m)=>b+(m[3]?0:m[1]),0),0)}:${V.rounds.reduce((a,r)=>a+r.res.reduce((b,m)=>b+(m[3]?0:m[2]),0),0)}</b><span>Sets</span></div></div>
  <div class=row><div class=m><b>${vl.rate}%</b><span>Win rate</span></div><div class=m><b>${V.rounds.filter(r=>r.pl==1).length} 🥇</b><span>Group wins</span></div></div>
  <div class=sec>NEXT</div><div class=m style="margin-bottom:8px"><b style="font-size:16px">${V.next.m} · Level ${V.next.lvl}</b><span>Starts ${V.next.pts} pts · place ${V.next.pl}</span></div><div class=m><b style="font-size:16px">Doubles from 1 Nov</b><span>Team "${B.vaseliga.doubles.team}" · with ${B.vaseliga.doubles.partner}</span></div></div></div></div>`;
 }
 if(v=='hl'){
  const hm=H.matches.slice().reverse();
  h=top('HOBBYLIGA · SINGLES','Prague badminton · 2026','BADMINTON')+
  `<div class=two><div class=colA><div class="card rd scroll"><div class=tag>MATCH LOG · ${H.matches.length} OF ${hp.matches} LISTED</div><table><tr><th>Date</th><th>Stage</th><th>Opponent</th><th>Score</th></tr>${hm.map(m=>`<tr><td>${m[0]}</td><td style="color:${m[1]=='FINAL'?'#ffd56b':'#8b95c9'}">${m[1]}</td><td>${m[2]}</td><td><span class="chip ${m[3]>m[4]?'w':m[3]==m[4]?'d':'l'}">${m[3]}:${m[4]}</span></td></tr>`).join('')}</table></div></div>
  <div class=colB><div class="card rd"><div class=tag>CHAMPION 2026</div><div style="font-size:40px;font-weight:800;color:#ffd56b;margin:6px 0">🏆 Final 3:0</div><div class=sub>Playoff ${H.playoff.group} · ${H.playoff.seed}rd seed after the group</div><div class=sec>ELO</div><div style="font-size:44px;font-weight:800">${hp.elo}</div>${elo(470,140)}
  <div class=row><div class=m><b>${hp.wins}–${hp.draws}–${hp.losses}</b><span>W–D–L</span></div><div class=m><b>${hp.pointsW}:${hp.pointsL}</b><span>Rallies</span></div></div><div class=row><div class=m><b>${hp.hlIndex}</b><span>HL index</span></div><div class=m><b>${hp.achievements}</b><span>Achievements</span></div></div>${bracket()}</div></div></div>`;
 }
 bhEl.innerHTML=h;bhEl.scrollTop=0}
bhEl.addEventListener('click',e=>{
 if(e.target.closest('[data-stop]'))return;
 if(e.target.closest('[data-back]')){view=='hub'||direct?closeAll():bh('hub');return}
 const g=e.target.closest('[data-go]');if(g)bh(g.dataset.go)});


/* ---------- UI bridge for the 3D room (fun3d.js) ---------- */
const isOpen=()=>/detail|beer|games|bh/.test(document.body.className);
let onClose=null;
function closeAll(){mode(null);if(onClose)onClose()}
document.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeAll()});
document.addEventListener('keydown',e=>{if(e.key=='Escape'&&isOpen()){if(document.body.classList.contains('bh')&&view!='hub'&&!direct)bh('hub');else closeAll()}});
const SUM={
 bad:()=>({t:'BADMINTON',s:'VašeLiga · HobbyLiga',k:[[totW+'–'+totL,'W – L'],[Math.round(totW/totM*100)+'%','WIN RATE'],['🏆','CHAMPION 2026']]}),
 vl:()=>({t:'VAŠELIGA',s:'Singles · Praha · 2026',k:[[vl.wins+'–'+vl.losses,'W – L'],[vl.rate+'%','WIN RATE'],['#'+vl.rank.split('/')[0],'RANK']]}),
 hl:()=>({t:'HOBBYLIGA',s:'Singles · Praha · 2026',k:[[hp.wins+'–'+hp.draws+'–'+hp.losses,'W – D – L'],[String(hp.elo),'ELO'],['🏆','CHAMPION 2026']]}),
 climb:()=>({t:'CLIMBING',s:X.climbing.note,k:[['—','ROUTES']]}),
 strava:()=>({t:'STRAVA',s:'This month',k:[[X.strava.active+'/'+X.strava.goal,'ACTIVE DAYS'],[X.strava.steps,'STEPS / DAY']]}),
 games:()=>({t:'GAMES',s:'PC · The rig',k:[[String(X.games.length),'GAMES']]}),
 beer:()=>({t:'BEER PONG',s:'Afterparty',k:[[X.beer.won+'/'+X.beer.tournaments,'WON'],['🏆','TROPHIES']]}),
 water:()=>({t:'PÍTKO',s:'Čerstvá voda · stiskni E',k:[['💧','NAPÍT SE']]})
};
/* live league boards in the hall: everything is computed from fun-data.js, so editing the data updates the boards */
const LG={
 vl:()=>{const r=V.rounds[V.rounds.length-1];return{name:'VAŠELIGA',sub:'Singles · Praha',acc:'#45e08a',bg:['#07281a','#030d08'],big:vl.rank.split('/')[0],bigL:'RANK  /'+vl.rank.split('/')[1],
  stats:[[vl.wins+'–'+vl.losses,'W – L'],[vl.rate+'%','WIN RATE'],[String(vl.matches),'MATCHES']],form:vl.form.map(f=>f=='W'?1:0),
  head:r.s+' · '+r.m+' · Level '+r.lvl+' · place '+r.pl,rows:r.res.map(m=>[m[0],m[3]=='np'?'–':m[3]=='wo'?'W/O':m[1]+':'+m[2],m[3]?'n':m[1]>m[2]?'w':'l']),foot:'Next: '+V.next.m+' · Level '+V.next.lvl}},
 hl:()=>{const l5=H.matches.slice(-5).reverse();return{name:'HOBBYLIGA',sub:'Singles · Praha',acc:'#ff5470',bg:['#2c0b16','#0e0409'],big:String(hp.elo),bigL:'ELO  ·  🏆 CHAMPION 2026',
  stats:[[hp.wins+'–'+hp.draws+'–'+hp.losses,'W – D – L'],[hp.setsW+':'+hp.setsL,'SETS'],[String(hp.matches),'MATCHES']],form:H.matches.slice(-5).map(m=>m[3]>m[4]?1:m[3]==m[4]?2:0),
  head:'Last results · season 2026',rows:l5.map(m=>[m[0]+'  '+m[1]+' · '+m[2],m[3]+':'+m[4],m[3]>m[4]?'w':m[3]==m[4]?'d':'l']),foot:'Playoff '+H.playoff.group+' · winner'}}
};
window.FUNUI={league:k=>LG[k](),games:X.games,isOpen,closeAll,summary:k=>SUM[k](),open:k=>OPEN[k](),setOnClose:f=>{onClose=f}};
if(location.hash=='#badminton')OPEN.bad();
})();
