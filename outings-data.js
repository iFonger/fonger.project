/* ============================================================
   OUTINGS: tady jsou všechna tvoje místa.
   Nové město přidáš zkopírováním jednoho bloku do "visited".
   Povinné: id, name, country, cont, lon, lat, visits.
   visits: jeden nebo víc pobytů, datum ve tvaru 'RRRR-MM-DD'.
     Když jsi někde byl víckrát, napiš všechny pobyty do jednoho bloku.
   Volitelné: transport (plane, train, car, bus, ship), photos,
     food: { dish, place }, plus: [..], minus: [..]
   photos: cesty k fotkám, např. 'outings/tokyo-1.jpg'
   cont: EU, AS, NA, SA, AF, OC
   ============================================================ */
window.OUTINGS = {
  home: { name: 'Prague', code: 'PRG', lon: 14.42, lat: 50.08 },

  visited: [
    { id: 'kaltenbach', name: 'Kaltenbach', country: 'Austria', cont: 'EU', lon: 11.883, lat: 47.233,
      visits: [{ from: '2018-03-12', to: '2018-03-18' }] },

    { id: 'banskabystrica', name: 'Banská Bystrica', country: 'Slovakia', cont: 'EU', lon: 19.1535, lat: 48.7395,
      visits: [{ from: '2018-07-28', to: '2018-08-02' }] },

    { id: 'budapest', name: 'Budapest', country: 'Hungary', cont: 'EU', lon: 19.0402, lat: 47.4979,
      visits: [{ from: '2018-08-03', to: '2018-08-05' }, { from: '2025-11-22', to: '2025-11-28' }] },

    { id: 'bratislava', name: 'Bratislava', country: 'Slovakia', cont: 'EU', lon: 17.1077, lat: 48.1486,
      visits: [{ from: '2019-06-28', to: '2019-06-29' }] },

    { id: 'liptovskymikulas', name: 'Liptovský Mikuláš', country: 'Slovakia', cont: 'EU', lon: 19.6167, lat: 49.0833,
      visits: [{ from: '2020-07-09', to: '2020-07-15' }] },

    { id: 'linz', name: 'Linz', country: 'Austria', cont: 'EU', lon: 14.2858, lat: 48.3069,
      visits: [{ from: '2020-08-14', to: '2020-08-17' }] },

    { id: 'newyork', name: 'New York', country: 'USA', cont: 'NA', lon: -74.006, lat: 40.7128,
      visits: [{ from: '2022-07-20', to: '2022-08-11' }] },

    { id: 'niagarafalls', name: 'Niagara Falls', country: 'USA', cont: 'NA', lon: -79.0377, lat: 43.0962,
      visits: [{ from: '2022-07-29', to: '2022-07-30' }] },

    { id: 'washingtondc', name: 'Washington D.C.', country: 'USA', cont: 'NA', lon: -77.0369, lat: 38.9072,
      visits: [{ from: '2022-08-02', to: '2022-08-03' }] },

    { id: 'vodice', name: 'Vodice', country: 'Croatia', cont: 'EU', lon: 15.7778, lat: 43.7608,
      visits: [{ from: '2022-08-20', to: '2022-08-28' }] },

    { id: 'nuremberg', name: 'Nuremberg', country: 'Germany', cont: 'EU', lon: 11.0767, lat: 49.4521,
      visits: [{ from: '2023-02-03', to: '2023-02-05' }] },

    { id: 'ebensee', name: 'Ebensee', country: 'Austria', cont: 'EU', lon: 13.7733, lat: 47.8056,
      visits: [{ from: '2023-06-23', to: '2023-06-25' }] },

    { id: 'lagodibraies', name: 'Lago di Braies', country: 'Italy', cont: 'EU', lon: 12.0855, lat: 46.6944,
      visits: [{ from: '2023-06-25', to: '2023-06-25' }] },

    { id: 'lidodijesolo', name: 'Lido di Jesolo', country: 'Italy', cont: 'EU', lon: 12.6417, lat: 45.5083,
      visits: [{ from: '2023-06-26', to: '2023-07-02' }] },

    { id: 'venice', name: 'Venice', country: 'Italy', cont: 'EU', lon: 12.3155, lat: 45.4408,
      visits: [{ from: '2023-06-29', to: '2023-06-29' }] },

    { id: 'dubai', name: 'Dubai', country: 'United Arab Emirates', cont: 'AS', lon: 55.2708, lat: 25.2048,
      visits: [{ from: '2023-11-16', to: '2023-11-23' }] },

    { id: 'nessebar', name: 'Nessebar', country: 'Bulgaria', cont: 'EU', lon: 27.7356, lat: 42.6597,
      visits: [{ from: '2024-06-21', to: '2024-06-30' }] },

    { id: 'vienna', name: 'Vienna', country: 'Austria', cont: 'EU', lon: 16.3738, lat: 48.2082,
      visits: [{ from: '2024-08-31', to: '2024-09-01' }, { from: '2025-02-27', to: '2025-03-02' }, { from: '2025-11-28', to: '2025-11-30' }] },

    { id: 'crikvenica', name: 'Crikvenica', country: 'Croatia', cont: 'EU', lon: 14.6919, lat: 45.1769,
      visits: [{ from: '2024-09-02', to: '2024-09-04' }] },

    { id: 'stuttgart', name: 'Stuttgart', country: 'Germany', cont: 'EU', lon: 9.1829, lat: 48.7758,
      visits: [{ from: '2025-10-25', to: '2025-10-28' }] },

    { id: 'karpacz', name: 'Karpacz', country: 'Poland', cont: 'EU', lon: 15.7459, lat: 50.7766,
      visits: [{ from: '2026-04-08', to: '2026-04-10' }] },

    { id: 'vrlika', name: 'Vrlika', country: 'Croatia', cont: 'EU', lon: 16.3883, lat: 43.9072,
      visits: [{ from: '2026-06-20', to: '2026-06-21' }] },

    { id: 'makarska', name: 'Makarska', country: 'Croatia', cont: 'EU', lon: 17.0179, lat: 43.2969,
      visits: [{ from: '2026-06-21', to: '2026-06-27' }] },

    { id: 'plitvicelakes', name: 'Plitvice Lakes', country: 'Croatia', cont: 'EU', lon: 15.582, lat: 44.8654,
      visits: [{ from: '2026-06-27', to: '2026-06-28' }] }
  ],

  /* Kam chceš jet. Po návštěvě blok přesuň nahoru do "visited". */
  wishlist: [
  ]
};
