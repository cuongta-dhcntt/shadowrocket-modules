// Hanzii Premium & AI unlock - Shadowrocket http-response script
// Patch: is_premium, premium_expired, ai_expried, free_trial_per_day, premiumProb, adsProb (config.json)

(function () {
  var body = $response.body;
  if (!body) { $done({}); return; }
  try {
    var obj = JSON.parse(body);
    var changed = false;
    function patchValue(o) {
      if (o === null || typeof o !== 'object') return;
      if (Array.isArray(o)) { o.forEach(patchValue); return; }
      if (typeof o.is_premium !== 'undefined') {
        o.is_premium = (typeof o.is_premium === 'string') ? '1' : 1;
        changed = true;
      }
      if (typeof o.premium_expired !== 'undefined') {
        o.premium_expired = (typeof o.premium_expired === 'string') ? '1893456000' : 1893456000;
        changed = true;
      }
      if (typeof o.ai_expried !== 'undefined') {
        o.ai_expried = 1893456000;
        changed = true;
      }
      if (typeof o.free_trial_per_day !== 'undefined') {
        o.free_trial_per_day = 999;
        changed = true;
      }
      if (typeof o.premiumProb !== 'undefined') {
        o.premiumProb = 0;
        changed = true;
      }
      if (typeof o.ai_status !== 'undefined' && typeof o.ai_status === 'number') {
        o.ai_status = 1;
        changed = true;
      }
      Object.keys(o).forEach(function (k) {
        if (k.indexOf('adsProb') === 0 && typeof o[k] === 'object' && o[k] !== null) {
          Object.keys(o[k]).forEach(function (t) {
            if (typeof o[k][t] === 'number') { o[k][t] = 0; changed = true; }
          });
        }
      });
      Object.keys(o).forEach(function (k) {
        if (o[k] && typeof o[k] === 'object') patchValue(o[k]);
      });
    }
    patchValue(obj);
    if (changed) { $done({ body: JSON.stringify(obj) }); } else { $done({}); }
  } catch (e) { $done({}); }
})();
