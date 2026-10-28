/* Sdílená počítadla webu (návštěvy, odemčená CV, odehrané hry).
   Ukládá je malý skript v Google Apps Script. Vlož sem jeho adresu (končí na /exec).
   Dokud je tu prázdné uvozovky, počítadla nic nedělají a v kartě Fonger je pomlčka. */
(function () {
  var URL = 'https://script.google.com/macros/s/AKfycbxl-aI9eXR_ob9iLQ1Eyx6wLJiziYzX7YgaMzbmX6ZUvbcx71IPSfqTEavpP54zErUS/exec';

  function call(q) {
    if (!URL) return Promise.reject(new Error('no url'));
    return fetch(URL + '?' + q).then(function (r) { return r.json(); });
  }

  window.FongerStats = {
    /* hit('cv'), hit('plays'), hit('visits'). Návštěva a CV se počítají nejvýš jednou za návštěvu prohlížeče. */
    hit: function (key) {
      try {
        if (key !== 'plays') {
          if (sessionStorage.getItem('fs-' + key)) return;
          sessionStorage.setItem('fs-' + key, '1');
        }
      } catch (e) {}
      call('hit=' + encodeURIComponent(key)).catch(function () {});
    },
    get: function () { return call('get=1'); }
  };

  /* Návštěva se počítá na hlavní stránce */
  if (/(^|\/)(index\.html)?$/.test(location.pathname)) window.FongerStats.hit('visits');
})();
