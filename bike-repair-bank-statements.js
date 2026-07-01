/* Bike Repair, LLC — bank statements (source docs) for the business checking account.
   The account opened June 1, 2026 with a $500 deposit; three monthly statements run to
   an Aug 31 closing balance of $620. Deposits are the collected repairs (BR_JOBS);
   withdrawals are rent, the QBP parts orders (BR_PURCHASES), a new tool, the credit-card
   payoff, and the owner's draw. Loads after bike-repair-job-records.js. */
var BR_BANK = (function () {
  function depositsFor(mon) {
    return BR_JOBS
      .filter(function (j) { return j.collected && j.pay.indexOf('Deposit') < 0 && j.date.slice(0, 3) === mon; })
      .map(function (j) { return { desc: 'Deposit — ' + j.customer, amt: j.charge }; });
  }
  var june = [{ desc: 'Opening deposit — LLC funding', amt: 500 }]
    .concat(depositsFor('Jun'))
    .concat([{ desc: 'Rent — June', amt: -650 }, { desc: 'QBP parts order (PO-2601)', amt: -500 }]);
  var july = depositsFor('Jul')
    .concat([{ desc: 'Rent — July', amt: -650 }, { desc: 'QBP parts order (PO-2602)', amt: -400 }, { desc: 'Equipment — new repair tool', amt: -400 }]);
  var august = depositsFor('Aug')
    .concat([{ desc: 'Rent — August', amt: -650 }, { desc: 'QBP parts order (PO-2603)', amt: -300 }, { desc: 'Credit-card payment', amt: -1230 }, { desc: 'Owner draw — transfer', amt: -600 }]);
  function sum(a) { return a.reduce(function (s, t) { return s + t.amt; }, 0); }
  var c1 = sum(june), c2 = c1 + sum(july), c3 = c2 + sum(august);
  var head = 'Elm City Bank & Trust — Business Checking ••4471';
  return [
    { title: head, sub: 'Statement period: June 1–30, 2026 · Bike Repair, LLC', opening: 0, txns: june, closing: c1 },
    { title: head, sub: 'Statement period: July 1–31, 2026 · Bike Repair, LLC', opening: c1, txns: july, closing: c2 },
    { title: head, sub: 'Statement period: August 1–31, 2026 · Bike Repair, LLC', opening: c2, txns: august, closing: c3 }
  ];
})();
