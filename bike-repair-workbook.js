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
 *       opts.flowGroups      -> show the SEASON's reasons regrouped into
 *                               DELIVERED / USED UP tallies (the 32-2 sort result) with
 *                               WITHDRAWN below; May's rows stay in their original piles
 *       opts.tabbed          -> the 32-4 graduation state: the season's DELIVERED / USED UP
 *                               rows leave Reasons for their own PERIOD tabs, Revenue and
 *                               Expenses (they exist to separate reasons by the period they
 *                               answer for). Pages mounting a tabbed snapshot must call
 *                               BR_WB.registerSeasonSheets() once, after shared.js loads.
 *       opts.withDepreciation-> the 33-2 state: the season's wear recorded — two depreciation
 *                               rows land on Expenses ($200 tools, equipment & fixtures;
 *                               $30 laptop), the asset ledgers carry the wear split $160/$40
 *                               (Tools 1,600 -> 1,440; Fixtures 750 -> 710; Laptop 610 -> 580);
 *                               the "one more kind of used-up" placeholder goes away.
 *   BR_WB.setupRows()        -> the pre-season (May + formation) reasons — the Reasons
 *                               list is one CONTINUOUS list, never settled or reset
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
      { name: 'Repair, customer paid', amt: 130 },
      { name: 'Smith&rsquo;s deposit received', amt: 220 },
      { name: 'Repair, customer paid', amt: 100 },
      { name: 'Repair, customer paid', amt: 150 },
      { name: 'Covered from your personal funds', amt: 160 },
      { name: 'Deposited to open the LLC bank account', amt: 1300 }
    ];
    var repairs = BR_JOBS.filter(function (j) { return j.collected && j.pay.indexOf('Deposit') < 0; })
      .map(function (j) { return { name: 'Repair collected &mdash; ' + j.customer, amt: j.charge }; });
    var buys = BR_PURCHASES.map(function (p) { return { name: 'Parts bought &mdash; ' + monthName[p.date.slice(0, 3)], amt: -p.total }; });
    var costs = buys.concat([
      { name: 'Rent paid &mdash; June', amt: -650 },
      { name: 'Rent paid &mdash; July', amt: -650 },
      { name: 'Rent paid &mdash; August', amt: -650 },
      { name: 'New repair tool', amt: -400 },
      { name: 'Credit card paid off', amt: -2030 },
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

  // The pre-season reasons — May's work and the two formation contributions, exactly as
  // first jotted. The list is CONTINUOUS: nothing is settled or reset at June 1. The piles'
  // running subtotals ARE the residual story (CONTRIBUTED 2,290 / GENERATED 170 at June 1);
  // the first-ever close is Tutorial 3.5's discovery, not a fait accompli.
  function setupRows() {
    return [
      { kind: 'net', cat: 'contributed', pre: true, account: 'Cash', reason: 'covered from your personal funds (May)', delta: 160 },
      { kind: 'net', cat: 'contributed', pre: true, account: 'Laptop', reason: 'brought from home (May)', delta: 610 },
      { kind: 'net', cat: 'contributed', pre: true, account: 'Equipment', reason: 'gear from home &mdash; grinder, headset press, shop vacuum (May)', delta: 220 },
      { kind: 'net', cat: 'contributed', pre: true, account: 'Cash', reason: 'deposited to open the LLC bank account (June 1)', delta: 1300 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 340 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 180 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 80 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 140 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 130 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 100 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 150 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'up', account: 'Parts used', reason: 'customer jobs (May)', delta: -300 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'up', account: 'Rent used', reason: 'May', delta: -650 }
    ];
  }

  // GENERATED reasons — the novice's mess, job by job. flow:'in' = the work delivered
  // (a repair collected, the frame handed over), flow:'up' = something got used up
  // delivering. kind:'net' is what BRW's sorted mode reads.
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
  var ridgelineReason = { kind: 'net', cat: 'generated', flow: 'in', account: 'Repair delivered', reason: 'Ridgeline Trail Crew &mdash; billed, net 15 (unpaid)', delta: 300 };
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
      ].concat(opts.withDepreciation ? [ { name: 'Depreciation &mdash; Summer 2026 (the season&rsquo;s share of the cost)', amt: -160 } ] : []) },
      { label: 'Fixtures', amount: 750, events: [
        { name: 'Desk', amt: 250 }, { name: 'Shelving units', amt: 200 }, { name: 'Display rack', amt: 180 }, { name: 'Pegboard + hooks', amt: 120 }
      ].concat(opts.withDepreciation ? [ { name: 'Depreciation &mdash; Summer 2026 (the season&rsquo;s share of the cost)', amt: -40 } ] : []) },
      { label: 'Laptop', amount: 610, events: [
        { name: 'Laptop (from home)', amt: 610 }
      ].concat(opts.withDepreciation ? [ { name: 'Depreciation &mdash; Summer 2026 (the season&rsquo;s share of the cost)', amt: -30 } ] : []) }
    ];
    if (opts.withReceivable) {
      assets.splice(1, 0, { label: 'Accounts Receivable <span class="xl-new-tag">new</span>', note: 'Ridgeline&rsquo;s unpaid promise', amount: 300, events: [
        { name: 'Ridgeline Trail Crew &mdash; finished Aug 28, net 15 (unpaid)', amt: 300 }
      ] });
    }

    var setup = setupRows();
    var gen = generatedRows();
    if (opts.withReceivable) gen.push(ridgelineReason);
    // In flowGroups mode the SEASON's generated reasons are filed under their flow (in/up) —
    // the state after the student sorts them in 32-2. May's rows keep their original piles:
    // the period line the student drew stays visible in the workbook.
    // In tabbed mode (the 32-4 graduation) the season's rows leave Reasons entirely —
    // they live on their own period tabs, Revenue and Expenses.
    var rows = opts.tabbed
      ? setup.slice()
      : (opts.flowGroups
        ? setup.concat(gen.map(function (r) { return { kind: 'net', cat: r.flow, flow: r.flow, account: r.account, reason: r.reason, delta: r.delta }; }))
        : setup.concat(gen));
    rows.push(drawReason);

    var groups = opts.tabbed
      ? [ { key: 'contributed', label: 'CONTRIBUTED', blurb: 'what you put in' },
          { key: 'generated', label: 'GENERATED &mdash; through May 31', blurb: 'the work before the season, left where it was' },
          { key: 'drawn', label: 'WITHDRAWN', blurb: 'an owner move &mdash; dated to the season, but not part of how the work did' } ]
      : opts.flowGroups
      ? [ { key: 'contributed', label: 'CONTRIBUTED', blurb: 'what you put in' },
          { key: 'generated', label: 'GENERATED &mdash; through May 31', blurb: 'the work before the season, left where it was' },
          { key: 'in', label: 'DELIVERED', blurb: 'reasons the work delivered to a customer' },
          { key: 'up', label: 'USED UP', blurb: 'reasons things got used up' },
          { key: 'drawn', label: 'WITHDRAWN', blurb: 'what you took for yourself' } ]
      : [ { key: 'contributed', label: 'CONTRIBUTED', blurb: 'what you put in' },
          { key: 'generated',   label: 'GENERATED',   blurb: 'what the work produced' },
          { key: 'drawn',       label: 'WITHDRAWN',   blurb: 'what you took for yourself' } ];

    var snap = {
      file: 'Bike-Repair.xlsx',
      tabs: opts.tabbed
        ? [ { id: 'assets', label: 'Assets' }, { id: 'liabilities', label: 'Liabilities' },
            { id: 'revenue', label: 'Revenue' }, { id: 'expenses', label: 'Expenses' },
            { id: 'reasons', label: 'Reasons' } ]
        : [ { id: 'assets', label: 'Assets' }, { id: 'liabilities', label: 'Liabilities' }, { id: 'reasons', label: 'Reasons' } ],
      assets: assets,
      liabilities: [
        { label: 'Credit Card', amount: 0, events: [
          { name: 'Charged &mdash; hand tools', amt: 300 }, { name: 'Charged &mdash; air compressor', amt: 180 },
          { name: 'Charged &mdash; parts washer', amt: 130 }, { name: 'Charged &mdash; wheel-truing stand', amt: 170 },
          { name: 'Charged &mdash; fixtures', amt: 750 }, { name: 'Charged &mdash; parts (QBP order)', amt: 500 },
          { name: 'Paid off in full this season', amt: -2030 }
        ] },
        { label: 'Customer Deposit', amount: 0, events: [
          { name: 'Smith&rsquo;s advance for a custom frame', amt: 220 },
          { name: 'Built and delivered Smith&rsquo;s frame &mdash; no longer owed', amt: -220 }
        ] }
      ],
      reasons: {
        pilesTitle: 'The Reasons piles &mdash; May 1 to today',
        pilesSub: opts.tabbed
          ? 'the season&rsquo;s rows now live on their own tabs &mdash; Revenue and Expenses; they come back when the season closes'
          : opts.flowGroups
          ? 'the season&rsquo;s rows sorted into tallies; May&rsquo;s rows left where they were'
          : 'one continuous list &mdash; every reason since the first May jot; nothing settled, nothing reset',
        mode: 'sorted',
        groups: groups,
        rows: rows
      }
    };
    if (opts.tabbed) {
      snap.revenueRows = gen.filter(function (r) { return r.flow === 'in'; });
      snap.expenseRows = gen.filter(function (r) { return r.flow === 'up'; });
      if (opts.withDepreciation) {
        snap.expenseRows = snap.expenseRows.concat([
          { account: 'Depreciation', reason: 'tools, equipment &amp; fixtures, Summer 2026 <span class="xl-new-tag">new</span>', delta: -200 },
          { account: 'Depreciation', reason: 'laptop, Summer 2026 <span class="xl-new-tag">new</span>', delta: -30 }
        ]);
      } else {
        snap.expensesNote = '&hellip; one more kind of used-up, still to come <span class="xl-new-tag">next tutorial</span>';
      }
    }
    return snap;
  }

  /* ===== the two period tabs (Revenue · Expenses) as custom BRW sheets =====
     A period tab exists to separate reasons by the period they answer for: it fills
     for one season, answers that season's question, then closes and starts the next
     at zero. Pages mounting a tabbed snapshot call this once, after shared.js loads. */
  function xr(cls, label, val) {
    return '<div class="xl-row ' + cls + '"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + label + '</div><div class="xl-v">' + val + '</div></div>';
  }
  function seasonSheet(title, rows, note, totalLabel) {
    var h = '<div class="cash-sheet-head"><div class="cash-sheet-title">' + title + '</div><div class="cash-sheet-sub">a period tally &mdash; it answers for this season only, then closes</div></div>';
    var tot = 0;
    rows.forEach(function (r) { tot += r.delta; h += xr('xl-item', r.account + ' &mdash; ' + r.reason, BRW.signed(r.delta)); });
    if (note) h += xr('xl-item', '<em>' + note + '</em>', '?');
    h += xr('xl-total', totalLabel, BRW.dol(Math.abs(tot)));
    return h;
  }
  function registerSeasonSheets() {
    BRW.registerSheet('revenue', function (cid, snap) {
      return seasonSheet('Revenue &mdash; Summer 2026', snap.revenueRows || [], null, 'Revenue &mdash; the work delivered this season');
    });
    BRW.registerSheet('expenses', function (cid, snap) {
      return seasonSheet('Expenses &mdash; Summer 2026', snap.expenseRows || [], snap.expensesNote, 'Expenses &mdash; so far');
    });
  }

  return { snapshot: snapshot, generatedRows: generatedRows, setupRows: setupRows, monthName: monthName, registerSeasonSheets: registerSeasonSheets };
})();
