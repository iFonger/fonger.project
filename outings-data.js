/* ============================================================
   OUTINGS: tady jsou všechna tvoje místa.
   Nové město přidáš zkopírováním jednoho bloku do "visited".
   Povinné jsou jen: id, name, country, cont, lon, lat, date.
   Všechno ostatní můžeš smazat a karta se tomu přizpůsobí.
   cont: EU, AS, NA, SA, AF, OC
   transport: plane, train, car, bus, ship
   photos: cesty k fotkám, např. 'outings/tokyo-1.jpg'
   ============================================================ */
window.OUTINGS = {
  home: { name: 'Prague', code: 'PRG', lon: 14.42, lat: 50.08 },

  visited: [
    { id: 'vienna', name: 'Vienna', code: 'VIE', country: 'Austria', cont: 'EU', lon: 16.37, lat: 48.21,
      date: 'MAR 2019', transport: 'train', nights: 3,
      plus: ['Coffee house culture'], minus: [] },

    { id: 'paris', name: 'Paris', code: 'CDG', country: 'France', cont: 'EU', lon: 2.35, lat: 48.86,
      date: 'MAY 2020', transport: 'plane', nights: 4,
      plus: ['Golden hour on the Seine', 'Croissants worth the queue'], minus: ['Tourist traps near the Eiffel Tower'] },

    { id: 'barcelona', name: 'Barcelona', code: 'BCN', country: 'Spain', cont: 'EU', lon: 2.17, lat: 41.39,
      date: 'JUL 2021', transport: 'plane', nights: 5, plus: ['Beach and city in one'], minus: [] },

    { id: 'rome', name: 'Rome', code: 'FCO', country: 'Italy', cont: 'EU', lon: 12.5, lat: 41.9,
      date: 'OCT 2021', transport: 'plane', nights: 4,
      food: { dish: 'Cacio e pepe', place: 'Da Enzo al 29' }, plus: ['Pasta everywhere'], minus: [] },

    { id: 'london', name: 'London', code: 'LHR', country: 'United Kingdom', cont: 'EU', lon: -0.12, lat: 51.5,
      date: 'APR 2022', transport: 'plane', nights: 4, plus: ['Free museums'], minus: ['Prices'] },

    { id: 'lisbon', name: 'Lisbon', code: 'LIS', country: 'Portugal', cont: 'EU', lon: -9.14, lat: 38.72,
      date: 'SEP 2022', transport: 'plane', nights: 6,
      food: { dish: 'Pastel de nata', place: 'Manteigaria' }, plus: ['Sunsets from the viewpoints'], minus: ['Hills everywhere'] },

    { id: 'istanbul', name: 'Istanbul', code: 'IST', country: 'Türkiye', cont: 'EU', lon: 28.97, lat: 41.0,
      date: 'MAY 2023', transport: 'plane', nights: 5, plus: ['Tea on every corner'], minus: [] },

    { id: 'dubai', name: 'Dubai', code: 'DXB', country: 'UAE', cont: 'AS', lon: 55.3, lat: 25.2,
      date: 'DEC 2023', transport: 'plane', nights: 4, plus: ['Skyline at night'], minus: ['Heat'] },

    { id: 'bangkok', name: 'Bangkok', code: 'BKK', country: 'Thailand', cont: 'AS', lon: 100.5, lat: 13.75,
      date: 'FEB 2024', transport: 'plane', nights: 8,
      food: { dish: 'Pad kra pao', place: 'Street stall near Ari' }, plus: ['Street food', 'Friendly people'], minus: ['Traffic'] },

    { id: 'tokyo', name: 'Tokyo', code: 'TYO', country: 'Japan', cont: 'AS', lon: 139.69, lat: 35.68,
      date: 'OCT 2024', transport: 'plane', nights: 9,
      photos: [],
      food: { dish: 'Tonkotsu ramen', place: 'Ichiran Shibuya' },
      plus: ['Spotless and on time', 'Konbini breakfast for 3 €'],
      minus: ['Shinjuku station is a maze'] },

    { id: 'newyork', name: 'New York', code: 'NYC', country: 'USA', cont: 'NA', lon: -74.0, lat: 40.71,
      date: 'JUN 2025', transport: 'plane', nights: 7, plus: ['Walking at night'], minus: [] }
  ],

  /* Kam chceš jet. Po návštěvě blok přesuň nahoru do "visited". */
  wishlist: [
    { id: 'reykjavik', name: 'Reykjavik', country: 'Iceland', cont: 'EU', lon: -21.9, lat: 64.15, note: 'Northern lights' },
    { id: 'capetown', name: 'Cape Town', country: 'South Africa', cont: 'AF', lon: 18.42, lat: -33.92, note: 'Table Mountain' },
    { id: 'sydney', name: 'Sydney', country: 'Australia', cont: 'OC', lon: 151.21, lat: -33.87, note: 'Opera house at sunrise' },
    { id: 'buenosaires', name: 'Buenos Aires', country: 'Argentina', cont: 'SA', lon: -58.38, lat: -34.6, note: 'Steak and tango' }
  ]
};
