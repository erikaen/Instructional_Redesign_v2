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
 *       opts.tabbed          -> RETIRED (2026-07-13): accepted and ignored. GENERATED is
 *                               continuous — the season's rows never leave the Reasons tab;
 *                               the income statement is a sort-view of them.
 *       opts.withDepreciation-> the 33-2 state: the season's wear recorded — two Depreciation
 *                               reasons land in GENERATED ($200 tools, equipment & fixtures;
 *                               $30 laptop), the asset ledgers carry the wear split $160/$40
 *                               (Tools 1,600 -> 1,440; Fixtures 750 -> 710; Laptop 610 -> 580).
 *       opts.closed          -> RETIRED (2026-07-13): accepted and ignored. There is no
 *                               close in these materials.
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

  // Parts asset ledger — opening shelf, then the three restocks item by item (matching
  // the same PO that hit Cash as one payment &mdash; the match lives at the transaction,
  // same as Fixtures back in Module 1), then each job's parts used.
  function partsEvents() {
    var shelf = [
      { name: 'Chains', amt: 50 }, { name: 'Brake pads', amt: 40 }, { name: 'Derailleur cables', amt: 20 },
      { name: 'Cassettes', amt: 40 }, { name: 'Bottom brackets', amt: 20 }, { name: 'Spokes', amt: 20 }, { name: 'Tubes', amt: 10 }
    ];
    var buys = [];
    BR_PURCHASES.forEach(function (p) {
      var m = monthName[p.date.slice(0, 3)];
      p.items.forEach(function (it) { buys.push({ name: it.name + ' (' + m + ')', amt: it.cost }); });
    });
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
    if (opts.withDepreciation) {
      gen.push({ kind: 'net', cat: 'generated', flow: 'up', account: 'Depreciation', reason: 'tools, equipment &amp; fixtures, Summer 2026', delta: -200 });
      gen.push({ kind: 'net', cat: 'generated', flow: 'up', account: 'Depreciation', reason: 'laptop, Summer 2026', delta: -30 });
    }
    // GENERATED is CONTINUOUS (2026-07-13 ruling): the season's rows live on the Reasons
    // tab permanently — the income statement is a SORT-VIEW of those rows, never a
    // migration, and there is no close. opts.flowGroups still renders the 32-2 sort
    // result. The retired opts.closed / opts.tabbed row-migration semantics are accepted
    // and IGNORED so not-yet-reworked pages keep loading during the fold-in.
    var rows = opts.flowGroups
      ? setup.concat(gen.map(function (r) { return { kind: 'net', cat: r.flow, flow: r.flow, account: r.account, reason: r.reason, delta: r.delta }; }))
      : setup.concat(gen);
    rows.push(drawReason);

    var groups = opts.flowGroups
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
      tabs: [ { id: 'assets', label: 'Assets' }, { id: 'liabilities', label: 'Liabilities' }, { id: 'reasons', label: 'Reasons' } ],
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
        pilesSub: opts.flowGroups
          ? 'the season&rsquo;s rows sorted into tallies; May&rsquo;s rows left where they were'
          : 'one continuous list &mdash; every reason since the first May jot; nothing settled, nothing reset',
        mode: 'sorted',
        groups: groups,
        rows: rows
      }
    };
    return snap;
  }

  /* ===== the two period tabs (Revenue · Expenses) as custom BRW sheets =====
     A period tab exists to separate reasons by the period they answer for: it fills
     for one season, answers that season's question, then closes and starts the next
     at zero. Pages mounting a tabbed snapshot call this once, after shared.js loads. */
  function xr(cls, label, val) {
    return '<div class="xl-row ' + cls + '"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + label + '</div><div class="xl-v">' + val + '</div></div>';
  }
  function seasonSheet(title, rows, note, totalLabel, closed) {
    var h = '<div class="cash-sheet-head"><div class="cash-sheet-title">' + title + '</div><div class="cash-sheet-sub">a period tally &mdash; it answers for this season only, then closes</div></div>';
    if (closed) {
      h += xr('xl-item', '<em>closed into GENERATED &middot; ready for next season</em>', '');
      h += xr('xl-total', totalLabel, BRW.dol(0));
      return h;
    }
    var tot = 0;
    rows.forEach(function (r) { tot += r.delta; h += xr('xl-item', r.account + ' &mdash; ' + r.reason, BRW.signed(r.delta)); });
    if (note) h += xr('xl-item', '<em>' + note + '</em>', '?');
    h += xr('xl-total', totalLabel, BRW.dol(Math.abs(tot)));
    return h;
  }
  function registerSeasonSheets() {
    BRW.registerSheet('revenue', function (cid, snap) {
      return seasonSheet('Revenue &mdash; Summer 2026', snap.revenueRows || [], null, 'Revenue &mdash; the work delivered this season', snap.revenueClosed);
    });
    BRW.registerSheet('expenses', function (cid, snap) {
      return seasonSheet('Expenses &mdash; Summer 2026', snap.expenseRows || [], snap.expensesNote, 'Expenses &mdash; so far', snap.expensesClosed);
    });
  }

  return { snapshot: snapshot, generatedRows: generatedRows, setupRows: setupRows, monthName: monthName, registerSeasonSheets: registerSeasonSheets };
})();

/* ============================================================================
 * Statement sheets — approved additions (2026-07-07).
 * The workbook is the student's anchor: statements are ADDED as tabs beside the
 * tabs they already know, never mounted as a replacement workbook. One canonical
 * renderer per statement, built from the locked numbers, drawn with the shared
 * xl-* row classes.
 *
 *   BR_WB.registerStatementSheets() -> registers 'income', 'cashflows', 'bridge',
 *       'balance' as BRW custom sheets. Call once, after shared.js loads.
 *       The income sheet shows a "complete" tag when snap.incomeNew is set
 *       (33-3's payoff moment); later pages leave it unset.
 *   BR_WB.statementTabs(ids)        -> tab-strip entries for the requested
 *       statements, e.g. snap.tabs = snap.tabs.concat(BR_WB.statementTabs(['income']));
 * ========================================================================== */
(function () {
  'use strict';
  function xr(cls, label, val) {
    return '<div class="xl-row ' + cls + '"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + label + '</div><div class="xl-v">' + val + '</div></div>';
  }
  function paren(n) { return '(' + BRW.dol(n) + ')'; }
  var STMT_LABELS = { income: 'Income', cashflows: 'Cash Flows', bridge: 'Changes in Capital', balance: 'Balance Sheet' };

  BR_WB.statementTabs = function (ids) {
    return ids.map(function (id) { return { id: id, label: STMT_LABELS[id] }; });
  };

  BR_WB.registerStatementSheets = function () {
    BRW.registerSheet('income', function (cid, snap) {
      var h = xr('xl-head', 'Income Statement &middot; June&ndash;August 2026', 'Amount');
      h += xr('xl-cat', '<strong>Revenue</strong> &mdash; the work delivered this season', BRW.dol(6020));
      h += xr('xl-item', '<strong>Expenses</strong> &mdash; used up delivering it', '');
      h += xr('xl-item', 'Parts used', BRW.dol(1200));
      h += xr('xl-item', 'Rent used', BRW.dol(1950));
      h += xr('xl-item', 'Depreciation &mdash; tools, equipment &amp; fixtures', BRW.dol(200));
      h += xr('xl-item', 'Depreciation &mdash; laptop', BRW.dol(30));
      h += xr('xl-cat', 'Total expenses', BRW.dol(3380));
      h += xr('xl-total', '<strong>Net income</strong> &mdash; Revenue &minus; Expenses' + (snap.incomeNew ? ' <span class="xl-new-tag">complete</span>' : ''), BRW.dol(2640));
      return h;
    });
    BRW.registerSheet('cashflows', function (cid, snap) {
      var h = xr('xl-head', 'Statement of Cash Flows &middot; June&ndash;August 2026', 'Amount');
      h += xr('xl-cat', '<strong>Operating</strong> &mdash; running the season', BRW.signed(2350));
      h += xr('xl-item', 'Repairs collected', BRW.signed(5500));
      h += xr('xl-item', 'Parts bought', BRW.signed(-1200));
      h += xr('xl-item', 'Rent paid', BRW.signed(-1950));
      h += xr('xl-cat', '<strong>Investing</strong> &mdash; long-lived gear', BRW.signed(-400));
      h += xr('xl-item', 'New repair tool', BRW.signed(-400));
      h += xr('xl-cat', '<strong>Financing</strong> &mdash; borrowing repaid and owner moves', BRW.signed(-2630));
      h += xr('xl-item', 'Credit-card payoff &mdash; repaying the borrowing', BRW.signed(-2030));
      h += xr('xl-item', 'Owner&rsquo;s draw', BRW.signed(-600));
      h += xr('xl-total', '<strong>Net change in cash</strong>', BRW.signed(-680));
      h += xr('xl-item', 'Cash, June 1', BRW.dol(1300));
      h += xr('xl-total', '<strong>Cash, August 31</strong> <span class="xl-new-tag">ties to Assets</span>', BRW.dol(620));
      return h;
    });
    BRW.registerSheet('bridge', function (cid, snap) {
      var h = xr('xl-head', 'Statement of Member&rsquo;s Capital &middot; June&ndash;August 2026', 'Amount');
      h += xr('xl-cat', '<strong>Contributed</strong>', '');
      h += xr('xl-item', 'Beginning &mdash; June 1', BRW.dol(2290));
      h += xr('xl-item', 'No changes this season', '');
      h += xr('xl-total', 'Ending &mdash; August 31', BRW.dol(2290));
      h += xr('xl-cat', '<strong>Generated</strong>', '');
      h += xr('xl-item', 'Beginning &mdash; June 1', BRW.dol(170));
      h += xr('xl-item', '+ Net income &mdash; from the Income Statement', BRW.signed(2640));
      h += xr('xl-total', 'Ending &mdash; August 31', BRW.dol(2810));
      h += xr('xl-cat', '<strong>Withdrawn</strong>', '');
      h += xr('xl-item', 'Beginning &mdash; June 1', '&mdash;');
      h += xr('xl-item', 'Owner&rsquo;s draw', paren(600));
      h += xr('xl-total', 'Ending &mdash; August 31', paren(600));
      h += xr('xl-item', '<strong>Total Member&rsquo;s Capital &mdash; June 1</strong>', BRW.dol(2460));
      h += xr('xl-total', '<strong>Total Member&rsquo;s Capital &mdash; August 31</strong> <span class="xl-new-tag">ties to the balance sheet</span>', BRW.dol(4500));
      return h;
    });
    BRW.registerSheet('balance', function (cid, snap) {
      var h = xr('xl-head', 'Balance Sheet &middot; August 31, 2026', 'Amount');
      h += xr('xl-item', 'Assets', BRW.dol(4500));
      h += xr('xl-item', 'Liabilities', BRW.dol(0));
      h += xr('xl-cat', '<strong>Member&rsquo;s Capital</strong>', BRW.dol(4500));
      h += xr('xl-item', 'Contributed', BRW.dol(2290));
      h += xr('xl-item', 'Generated (170 + 2,640)', BRW.dol(2810));
      h += xr('xl-item', 'Withdrawn', paren(600));
      h += xr('xl-total', '<strong>Total Member&rsquo;s Capital</strong>', BRW.dol(4500));
      return h;
    });
  };
})();

/* ==========================================================================
 * Tab kinds + the dated Balance Sheet tab — approved additions (2026-07-11).
 * Rick's ruling: color-code workbook tabs by account type, and carry a
 * Balance Sheet tab (one Amount column per period, date in the heading) in
 * every Module 3/4 workbook depiction. Both are OPT-IN per page: untagged
 * tabs and pages that never call these render exactly as before, so Module
 * 1/2 depictions are untouched.
 *
 *   BR_WB.tagTabKinds(snap) -> stamps t.kind on known tabs:
 *       'perm' (Assets, Liabilities, Reasons — running totals from the
 *       beginning of the business), 'temp' (Revenue, Expenses), 'stmt'
 *       (Income, Cash Flows, Changes in Capital, Balance Sheet).
 *       Call after ANY change to snap.tabs, before mount/update.
 *   BR_WB.balanceTab(periods)  -> registers the dated balance-sheet renderer
 *       ('jun1' / 'aug31' columns; supersedes the single-column 'balance'
 *       sheet when called after registerStatementSheets) and returns the
 *       tab entry for snap.tabs.
 * ========================================================================== */
(function () {
  'use strict';
  function xr(cls, label, val) {
    return '<div class="xl-row ' + cls + '"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + label + '</div><div class="xl-v">' + val + '</div></div>';
  }
  function xr2(cls, label, v1, v2) {
    return '<div class="xl-row xl-cols2 ' + cls + '"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + label + '</div><div class="xl-v">' + v1 + '</div><div class="xl-v">' + v2 + '</div></div>';
  }

  var TAB_KINDS = {
    assets: 'perm', liabilities: 'perm', reasons: 'perm',
    revenue: 'temp', expenses: 'temp',
    income: 'stmt', cashflows: 'stmt', bridge: 'stmt', balance: 'stmt'
  };
  BR_WB.tagTabKinds = function (snap) {
    (snap.tabs || []).forEach(function (t) { if (TAB_KINDS[t.id]) t.kind = TAB_KINDS[t.id]; });
    return snap;
  };

  // Locked balance-sheet lines (never re-derive): [rowClass, label, jun1, aug31].
  // null renders as an em dash (the line does not exist yet at that date).
  var BS_ROWS = [
    ['cat',   '<strong>Assets</strong>', null, null],
    ['item',  'Cash', 1300, 620],
    ['item',  'Accounts Receivable', null, 300],
    ['item',  'Right of Use', 650, 650],
    ['item',  'Parts', 200, 200],
    ['item',  'Tools &amp; Repair Equipment', 1200, 1440],
    ['item',  'Fixtures', 750, 710],
    ['item',  'Laptop', 610, 580],
    ['total', '<strong>Total Assets</strong>', 4710, 4500],
    ['cat',   '<strong>Liabilities</strong>', null, null],
    ['item',  'Credit Card', 2030, 0],
    ['item',  'Customer Deposit', 220, 0],
    ['total', '<strong>Total Liabilities</strong>', 2250, 0],
    ['cat',   '<strong>Member&rsquo;s Capital</strong>', null, null],
    ['item',  'Contributed', 2290, 2290],
    ['item',  'Generated', 170, 2810],
    ['item',  'Withdrawn', null, -600],
    ['total', '<strong>Total Member&rsquo;s Capital</strong>', 2460, 4500]
  ];
  var BS_DATES = { jun1: 'June 1, 2026', aug31: 'August 31, 2026' };

  BR_WB.balanceTab = function (periods) {
    periods = periods || ['jun1'];
    var two = periods.length > 1;
    BRW.registerSheet('balance', function (cid, snap) {
      var heads = periods.map(function (p) { return BS_DATES[p]; });
      var h = two ? xr2('xl-head', 'Balance Sheet', heads[0], heads[1])
                  : xr('xl-head', 'Balance Sheet', heads[0]);
      BS_ROWS.forEach(function (r) {
        var isCat = (r[0] === 'cat');
        var vals = periods.map(function (p) {
          if (isCat) return '';
          var v = (p === 'jun1') ? r[2] : r[3];
          return (v === null) ? '&mdash;' : (v < 0 ? '(' + BRW.dol(-v) + ')' : BRW.dol(v));
        });
        h += two ? xr2('xl-' + r[0], r[1], vals[0], vals[1])
                 : xr('xl-' + r[0], r[1], vals[0]);
      });
      return h;
    });
    return { id: 'balance', label: 'Balance Sheet', kind: 'stmt' };
  };
})();

/* ============================================================================
 * Statement-tab build player (PART 4).
 *
 * The extracted Steps workbooks are successive states of the student's own
 * statement tab. Advancing replaces the whole sheet state; it never asks the
 * student to move rows between the states. The data and BRW renderer load after
 * this file, so both globals are deliberately looked up only inside API calls.
 * ========================================================================== */
(function () {
  'use strict';

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  BR_WB.buildSteps = function (workbookKey, opts) {
    opts = opts || {};
    var data = window.BR_STMT_DATA;
    var workbook = data && data.workbooks && data.workbooks[workbookKey];
    var sheets = workbook && workbook.sheets ? workbook.sheets : [];
    var startAt = opts.startAt === undefined ? -Infinity : Number(opts.startAt);
    var stopAt = opts.stopAt === undefined ? Infinity : Number(opts.stopAt);

    return sheets.filter(function (sheet) {
      return typeof sheet.order === 'number' && isFinite(sheet.order)
        && Math.floor(sheet.order) === sheet.order
        && sheet.order >= startAt && sheet.order <= stopAt;
    }).slice().sort(function (a, b) {
      return a.order - b.order;
    }).map(function (sheet) {
      return { order: sheet.order, stepLabel: sheet.stepLabel, sheet: sheet };
    });
  };

  BR_WB.renderStatementStep = function (workbookKey, stepIndex, opts) {
    opts = opts || {};
    var steps = BR_WB.buildSteps(workbookKey, opts);
    var index = Number(stepIndex);
    if (Math.floor(index) !== index || index < 0 || index >= steps.length) return '';

    var strip = '<div class="brw-step-strip">';
    steps.forEach(function (step, i) {
      var active = i === index;
      strip += '<div class="brw-step' + (active ? ' is-active' : '') + '"'
        + (active ? ' aria-current="step"' : '')
        + ' data-step-order="' + step.order + '">' + escapeHTML(step.stepLabel) + '</div>';
    });
    strip += '</div>';

    return strip + BRW.renderGrid(steps[index].sheet, opts.gridOpts || {});
  };

  BR_WB.mountStatementBuild = function (containerId, workbookKey, opts) {
    opts = opts || {};
    var container = document.getElementById(containerId);
    if (!container) return '';

    var steps = BR_WB.buildSteps(workbookKey, opts);
    var index = 0;
    var gateAdvance = typeof opts.gateAdvance === 'function'
      ? opts.gateAdvance
      : function () { return true; };

    function checkGuard(guard, order, done) {
      var result = guard(order);
      if (result && typeof result.then === 'function') {
        result.then(function (allowed) { done(allowed !== false); });
      } else {
        done(result !== false);
      }
    }

    function render() {
      if (!steps.length) {
        container.innerHTML = '';
        return '';
      }

      var html = BR_WB.renderStatementStep(workbookKey, index, opts);
      if (index < steps.length - 1) {
        html += '<button type="button" class="brw-step-advance">Next: '
          + escapeHTML(steps[index + 1].stepLabel) + ' &rarr;</button>';
      }
      container.innerHTML = html;

      if (index < steps.length - 1) {
        var controls = container.getElementsByClassName('brw-step-advance');
        var advanceControl = controls && controls[0];
        if (advanceControl) {
          var waiting = false;
          advanceControl.addEventListener('click', function () {
            if (waiting) return;
            waiting = true;
            advanceControl.disabled = true;
            var currentOrder = steps[index].order;

            function release() {
              waiting = false;
              advanceControl.disabled = false;
            }
            function advance() {
              index++;
              render();
              if (typeof opts.onStep === 'function') opts.onStep(steps[index].order);
            }

            checkGuard(gateAdvance, currentOrder, function (gatePassed) {
              if (!gatePassed) { release(); return; }

              /* PART 5 hook: a Pick interaction may complete (or veto) here
                 before this state machine reveals the next extracted state. */
              if (typeof opts.beforeAdvance === 'function') {
                checkGuard(opts.beforeAdvance, currentOrder, function (beforePassed) {
                  if (beforePassed) advance();
                  else release();
                });
              } else {
                advance();
              }
            });
          });
        }
      }
      return html;
    }

    return render();
  };
})();
