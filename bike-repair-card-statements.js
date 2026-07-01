/* Bike Repair, LLC — credit card statements (source docs) for the business card.
   The card carried the startup equipment purchases. Two statements: the setup period
   (charges + early paydowns → $1,230 carried into the LLC at June 1) and the summer
   (paid off in full → $0). 0% intro APR, so no interest accrues. */
var BR_CARD = (function () {
  var setup = [
    { desc: 'Purchase — hand tools', amt: 300 },
    { desc: 'Purchase — air compressor', amt: 180 },
    { desc: 'Purchase — parts washer', amt: 130 },
    { desc: 'Purchase — wheel-truing stand', amt: 170 },
    { desc: 'Purchase — fixtures (desk, shelving, racks)', amt: 750 },
    { desc: 'Purchase — parts (QBP opening order)', amt: 500 },
    { desc: 'Payment', amt: -400 },
    { desc: 'Payment', amt: -400 }
  ];
  var summer = [
    { desc: 'Interest charged (0% intro APR)', amt: 0, note: true },
    { desc: 'Payment — paid in full', amt: -1230 }
  ];
  function sum(a) { return a.reduce(function (s, t) { return s + (t.amt || 0); }, 0); }
  var head = 'Summit Rewards Visa — Business ••8102';
  return [
    { title: head, sub: 'Setup period · through May 31, 2026 · Bike Repair, LLC', opening: 0, txns: setup, closing: sum(setup) },
    { title: head, sub: 'Statement period: June 1–August 31, 2026 · Bike Repair, LLC', opening: 1230, txns: summer, closing: 0 }
  ];
})();
