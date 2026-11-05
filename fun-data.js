// FUN – badminton data. Edit here, stats are computed from it. Opponents = initials/short names.
const BADMINTON = {
  vaseliga: {
    singles: {
      profile: { rank:"123/263", yearRank:"113/291", matches:26, wins:16, losses:10, rate:62, form:["W","W","L","W","L"] },
      // round: season, month, level, group place, points(Celkem), city rank, matches [opp, setsFor, setsAgainst|null=walkover/unplayed, type]
      rounds: [
        {s:"Spring",m:"Feb",lvl:"A",pl:1,pts:114,rank:221,res:[["D. P.",1,3],["O. K.",3,1],["D. R.",3,0,"wo"],["M. F.",0,3]]},
        {s:"Spring",m:"Mar",lvl:"A",pl:3,pts:136,rank:217,res:[["M. B.",0,3],["O. P.",1,3],["V. L.",3,0,"wo"],["J. M.",3,0,"wo"]]},
        {s:"Spring",m:"Apr",lvl:"C",pl:1,pts:136,rank:204,res:[["J. V.",0,0,"np"],["O. Z.",3,1],["D. W.",3,2],["B. C.",3,0]]},
        {s:"Spring",m:"May",lvl:"C",pl:3,pts:154,rank:189,res:[["P. Š.",0,0,"np"],["J. Z.",2,3],["J. M.",3,2],["X. Š.",0,0,"np"]]},
        {s:"Summer",m:"Jun",lvl:"C",pl:1,pts:156,rank:174,res:[["J. O.",0,0,"np"],["M. Š.",3,1],["J. M.",3,1],["Y. S.",3,0]]},
        {s:"Summer",m:"Jul",lvl:"B",pl:2,pts:171,rank:133,res:[["J. L.",1,3],["M. T.",3,1],["A. B.",3,0],["E. K.",3,0]]},
        {s:"Summer",m:"Aug",lvl:"B",pl:2,pts:171,rank:119,res:[["J. M.",2,3],["V. K.",3,2],["N. K.",3,2],["J. J.",3,0,"wo"]]},
        {s:"Summer",m:"Sep",lvl:"A",pl:4,pts:206,rank:138,res:[["S. A.",0,0,"np"],["M. Č.",0,3],["M. H.",2,3],["A. B.",3,0]]},
        {s:"Autumn",m:"Oct",lvl:"C",pl:2,pts:269,rank:120,res:[["R. P.",1,3],["R. R.",3,1],["H. Š.",3,1],["E. T.",0,0,"np"]]},
      ],
      next: {s:"Autumn",m:"Nov",lvl:"A",pl:2,pts:245,rank:123}
    },
    doubles: { team:"Smeč a pryč", partner:"A. B.", start:"2026-11-01", level:"7A", status:"Starts in November – 5 matches ahead" },
    tournament: { name:"Prague Tournament", date:"2026-10-24", venue:"Hamr Braník", cat:"Intermediate", result:null }
  },
  hobbyliga: {
    profile:{ matches:22, wins:15, draws:1, losses:6, setsW:56, setsL:31, pointsW:1579, pointsL:1434, elo:1238, eloMax:1238, hlIndex:7.05, achievements:"13/30" },
    // season 2026, [date, stage, opp, setsFor, setsAgainst]  (one early loss, 0:3, missing in screenshots)
    matches:[
      ["16.01","Round","V. P.",3,1],["25.01","Round","M. P.",0,4],["27.01","Round","M. N.",0,4],["04.02","Round","M. S.",2,2],
      ["08.03","Round","B. L.",0,4,"wo"],["19.04","Spring final","E. M.",2,3],["26.04","Round","I. O.",0,4],["07.05","Round","P. P.",4,0],
      ["17.05","Round","J. V.",3,1],["24.05","Round","A. H.",4,0],["22.06","Round","P. K.",3,1],["08.07","Round","M. H.",3,0],
      ["13.07","Round","D. B.",4,0],["15.07","Round","T. M.",4,0],["30.07","Round","M. V.",4,0],["02.08","Round","M. H.",4,0],
      ["17.08","Round","O. K.",3,1],["02.09","Round","A. K.",4,0],
      ["17.09","Playoff QF","M. K.",3,1],["25.09","Playoff SF","D. B.",3,2],["09.10","FINAL","A. K.",3,0]
    ],
    playoff:{ group:"A", seed:3, pts:23, played:7, final:"Winner" },
    spring:{ result:"Final – 2nd place", bracket:["QF 3:0 (walkover)","SF 3:0 (walkover)","F 2:3 E. M."] }
  }
};

// ---- Other stations. SAMPLE values – replace with your real ones ----
const FUN_EXTRA = {
  scoreboard: { label:"WINS : LOSSES · 2026" },            // numbers are computed from BADMINTON
  strava: { active:12, goal:20, steps:"9 400", gym:"3×", yoga:"2×", note:"Strava · steps · gym · yoga" },   // SAMPLE
  climbing: { note:"Routes & bouldering – coming soon" },
  beer: { tournaments:3, won:1, best:"Summer tournament", list:[["1","Summer tournament","WINNER"],["3","Office cup","3rd place"],["SF","Garden league","semi-final"]] }, // SAMPLE
  games: [["VAL","Valorant","#ff4655","#fff"],["LoL","League of Legends","#1b3a8a","#e9c46a"],["CS2","CS2","#e8793a","#1a0f05"],["RL","Rocket League","#1e7bff","#ff9a4a"],["ARK","Arkheron","#1fb89a","#032a22"],["S2","SMITE 2","#6a3ad0","#ffd68a"]]
};

// ---- Yonex poster in the hall: newest racket + shoes from yonex.cz ----
// "api" is the small serverless function (api/yonex.js in the repo) that reads yonex.cz and returns the newest items as JSON.
window.YONEX_FEED = { api: "/api/yonex" };

// MY BADMINTON BAG (the bench in the hall). Edit the texts shown on the rackets / bag / shoes / shuttles.
// rows = card rows: ['LABEL', 'value']
window.GEAR = {
  rackets: [
    { brand: 'YONEX', name: 'ARCSABER 2 ABILITY', rows: [['COLOR', 'Black / Pink'], ['LENGTH', '675 mm']] },
    { brand: 'YONEX', name: 'ASTROX 77 PLAY', rows: [['COLOR', 'High Orange'], ['LENGTH', '675 mm']] }
  ]
};
