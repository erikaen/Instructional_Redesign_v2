/* ============================================================================
 * bike-repair-workbook.js — the shared Aug-31 snapshot of Bike-Repair.xlsx.
 * Rebuilds the exact novice-kept state shipped in 31-2 (three tabs; every line's
 * full history) so every Module 3 page mounts the SAME workbook via BRW, instead
 * of re-pasting the snapshot. Depends on BR_JOBS (job-records) and BR_PURCHASES
 * (parts-purchases); load those first.
 *
 *   BR_WB.snapshot(opts)     -> the SNAP object for BRW.mount / BRW.update
 *       opts.withReceivable  -> add Ridgeline's $300 A/R (asset + matching reason),
 *                               books stay balanced (assets 4,430 -> 4,730)
 *       opts.flowGroups      -> show the season's reasons already regrouped into
 *                               MONEY IN / USED UP / TAKEN OUT (the 32-2 sort result),
 *                               instead of the single jumbled GENERATED pile
 *   BR_WB.generatedRows()    -> the GENERATED reasons, each tagged flow:'in'|'up'
 *   BR_WB.monthName          -> { Jun:'June', ... }
 * ========================================================================== */
var BR_WB = (function () {
  'use strict';

  var monthName = { Jun: 'June', Jul: 'July', Aug: 'August' };

  // Cash — the complete ledger, first entry to today (pre-LLC → founding → the season).
  function cashEvents() {
    var pre = [
      { name: 'Rent paid in advance (the lease)', amt: -1300 },
      { name: 'Park Tool repair stand', amt: -200 },
      { name: 'Repair, customer paid', amt: 340 },
      { name: 'Repair, customer paid', amt: 180 },
      { name: 'Repair, customer paid', amt: 80 },
      { name: 'Repair, customer paid', amt: 140 },
      { name: 'Credit-card paydown', amt: -400 },
      { name: 'Repair, customer paid', amt: 130 },
      { name: 'Smith&rsquo;s deposit received', amt: 220 },
      { name: 'Repair, customer paid', amt: 100 },
      { name: 'Repair, customer paid', amt: 150 },
      { name: 'Credit-card paydown', amt: -400 },
      { name: 'Covered from your personal funds', amt: 960 },
      { name: 'Deposited to open the LLC bank account', amt: 500 }
    ];
    var repairs = BR_JOBS.filter(function (j) { return j.collected && j.pay.indexOf('Deposit') < 0; })
      .map(function (j) { return { name: 'Repair collected &mdash; ' + j.customer, amt: j.charge }; });
    var buys = BR_PURCHASES.map(function (p) { return { name: 'Parts bought &mdash; ' + monthName[p.date.slice(0, 3)], amt: -p.total }; });
    var costs = buys.concat([
      { name: 'Rent paid &mdash; June', amt: -650 },
      { name: 'Rent paid &mdash; July', amt: -650 },
      { name: 'Rent paid &mdash; August', amt: -650 },
      { name: 'New repair tool', amt: -400 },
      { name: 'Credit card paid off', amt: -1230 },
      { name: 'Money taken out for personal use', amt: -600 }
    ]);
    return pre.concat(repairs, costs);
  }

  // Parts asset ledger — opening shelf, the three restocks, then each job's parts used.
  function partsEvents() {
    var shelf = [
      { name: 'Chains', amt: 50 }, { name: 'Brake pads', amt: 40 }, { name: 'Derailleur cables', amt: 20 },
      { name: 'Cassettes', amt: 40 }, { name: 'Bottom brackets', amt: 20 }, { name: 'Spokes', amt: 20 }, { name: 'Tubes', amt: 10 }
    ];
    var buys = BR_PURCHASES.map(function (p) { return { name: 'Parts bought &mdash; ' + monthName[p.date.slice(0, 3)], amt: p.total }; });
    var used = BR_JOBS.filter(function (j) { return j.partsCost > 0; })
      .map(function (j) { return { name: 'Parts used &mdash; ' + j.customer, amt: -j.partsCost }; });
    return shelf.concat(buys, used);
  }

  // GENERATED reasons — the novice's mess, job by job. flow:'in' = money the work brought in,
  // flow:'up' = something the work used up. kind:'net' is what BRW's sorted mode reads.
  function generatedRows() {
    var rows = [], rentPaid = {};
    BR_JOBS.forEach(function (j) {
      var m = j.date.slice(0, 3);
      if (!rentPaid[m]) { rows.push({ kind: 'net', cat: 'generated', flow: 'up', account: 'Rent used', reason: monthName[m], delta: -650 }); rentPaid[m] = true; }
      if (j.pay.indexOf('Deposit') >= 0) rows.push({ kind: 'net', cat: 'generated', flow: 'in', account: 'Frame delivered', reason: j.customer, delta: j.charge });
      else if (j.collected) rows.push({ kind: 'net', cat: 'generated', flow: 'in', account: 'Repair collected', reason: j.customer, delta: j.charge });
      if (j.partsCost > 0) rows.push({ kind: 'net', cat: 'generated', flow: 'up', account: 'Parts used', reason: j.customer, delta: -j.partsCost });
    });
    return rows;
  }

  // Ridgeline's discovered receivable — the revenue reason the novice never jotted (no cash came).
  var ridgelineReason = { kind: 'net', cat: 'generated', flow: 'in', account: 'Repair earned', reason: 'Ridgeline Trail Crew &mdash; billed, net 15 (unpaid)', delta: 300 };
  var drawReason = { kind: 'net', cat: 'drawn', account: 'Owner&rsquo;s draw', reason: 'money taken out for personal use', delta: -600 };

  function snapshot(opts) {
    opts = opts || {};
    var assets = [
      { label: 'Cash', amount: 620, events: cashEvents() },
      { label: 'Right of Use', amount: 650, events: [
        { name: 'Last month&rsquo;s rent, paid in advance (on deposit)', amt: 650 }
      ] },
      { label: 'Parts', amount: 200, events: partsEvents() },
      { label: 'Tools &amp; Repair Equipment', amount: 1600, events: [
        { name: 'Repair stand', amt: 200 }, { name: 'Air compressor', amt: 180 }, { name: 'Parts washer', amt: 130 },
        { name: 'Wheel-truing stand', amt: 170 }, { name: 'Cone wrench set', amt: 65 }, { name: 'Torque wrench', amt: 95 },
        { name: 'Hex/Allen set', amt: 45 }, { name: 'Cable cutters', amt: 40 }, { name: 'Chain breaker', amt: 35 },
        { name: 'Tire levers', amt: 20 }, { name: 'Bench grinder', amt: 90 }, { name: 'Headset press', amt: 70 },
        { name: 'Shop vacuum', amt: 60 }, { name: 'New repair tool bought this season', amt: 400 }
      ] },
      { label: 'Fixtures', amount: 750, events: [
        { name: 'Desk', amt: 250 }, { name: 'Shelving units', amt: 200 }, { name: 'Display rack', amt: 180 }, { name: 'Pegboard + hooks', amt: 120 }
      ] },
      { label: 'Laptop', amount: 610, events: [
        { name: 'Laptop (from home)', amt: 610 }
      ] }
    ];
    if (opts.withReceivable) {
      assets.splice(1, 0, { label: 'Accounts Receivable <span class="xl-new-tag">new</span>', note: 'Ridgeline&rsquo;s unpaid promise', amount: 300, events: [
        { name: 'Ridgeline Trail Crew &mdash; finished Aug 28, net 15 (unpaid)', amt: 300 }
      ] });
    }

    var gen = generatedRows();
    if (opts.withReceivable) gen.push(ridgelineReason);
    // In flowGroups mode each generated reason is filed under its flow (in/up) rather than
    // the single 'generated' pile — the state after the student has sorted them in 32-2.
    var rows = opts.flowGroups
      ? gen.map(function (r) { return { kind: 'net', cat: r.flow, flow: r.flow, account: r.account, reason: r.reason, delta: r.delta }; })
      : gen.slice();
    rows.push(drawReason);

    // Before the receivable is discovered the pile is the novice's cash frame, "MONEY IN". Once
    // Ridgeline's earned-but-unpaid $300 joins it, "money in" is no longer true — it becomes "EARNED".
    var inLabel = opts.withReceivable ? 'EARNED' : 'MONEY IN';
    var inBlurb = opts.withReceivable ? 'what the work earned, before any costs (paid or not)' : 'money the work brought in';
    var groups = opts.flowGroups
      ? [ { key: 'in', label: inLabel, blurb: inBlurb },
          { key: 'up', label: 'USED UP', blurb: 'what the work used up' },
          { key: 'drawn', label: 'TAKEN OUT', blurb: 'what you took for yourself' } ]
      : [ { key: 'contributed', label: 'CONTRIBUTED', blurb: 'new money or gear you put in' },
          { key: 'generated',   label: 'GENERATED',   blurb: 'what the work itself produced' },
          { key: 'drawn',       label: 'TAKEN OUT',    blurb: 'what you took for yourself' } ];

    var snap = {
      file: 'Bike-Repair.xlsx',
      tabs: [ { id: 'assets', label: 'Assets' }, { id: 'liabilities', label: 'Liabilities' }, { id: 'reasons', label: 'Reasons' } ],
      assets: assets,
      liabilities: [
        { label: 'Credit Card', amount: 0, events: [
          { name: 'Charged &mdash; hand tools', amt: 300 }, { name: 'Charged &mdash; air compressor', amt: 180 },
          { name: 'Charged &mdash; parts washer', amt: 130 }, { name: 'Charged &mdash; wheel-truing stand', amt: 170 },
          { name: 'Charged &mdash; fixtures', amt: 750 }, { name: 'Charged &mdash; parts (QBP order)', amt: 500 },
          { name: 'Paydown', amt: -400 }, { name: 'Paydown', amt: -400 },
          { name: 'Paid off in full this season', amt: -1230 }
        ] },
        { label: 'Unearned Revenue', amount: 0, events: [
          { name: 'Smith&rsquo;s advance for a custom frame', amt: 220 },
          { name: 'Built and delivered Smith&rsquo;s frame &mdash; no longer owed', amt: -220 }
        ] }
      ],
      reasons: {
        carried: [
          { label: 'Contributed Capital', note: 'what you put in', amount: 2290, items: [
            { name: 'Cash to get the work going', amt: 960 }, { name: 'Laptop from home', amt: 610 },
            { name: 'Gear from home', amt: 220 }, { name: 'Cash contributed forming the LLC', amt: 500 } ] },
          { label: 'Retained Earnings', note: 'what the work kept', amount: 170, items: [
            { name: 'Repairs earned', amt: 1120 }, { name: 'Parts used', amt: -300 }, { name: 'Space used (rent)', amt: -650 } ] }
        ],
        mode: 'sorted',
        groups: groups,
        rows: rows
      }
    };
    return snap;
  }

  return { snapshot: snapshot, generatedRows: generatedRows, monthName: monthName };
})();
