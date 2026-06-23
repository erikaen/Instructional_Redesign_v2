/* =========================================================
 * 14-shared.js — Tutorial 1.4 shared data, audio, workbook renderer.
 * Used by 14-latest.html and 14-[N]-[phase].html files.
 * Pulls all design styling from shared.css; only behavior lives here.
 * ========================================================= */

/* ===== Audio (3 tones — success, nope, click) ===== */
var audioCtx = null;
function ac(){ if(!audioCtx){ try{ audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} } return audioCtx; }
function playSuccess(){
  var c = ac(); if(!c) return;
  [523.25, 659.25, 783.99].forEach(function(f, i){
    var o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.frequency.value = f; o.type = 'sine';
    var t = c.currentTime + i*0.1;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.3, t+0.02);
    g.gain.exponentialRampToValueAtTime(0.01, t+0.15);
    o.start(t); o.stop(t+0.25);
  });
}
function playNope(){
  var c = ac(); if(!c) return;
  [400, 300].forEach(function(f, i){
    var o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.frequency.value = f; o.type = 'sine';
    var t = c.currentTime + i*0.12;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.2, t+0.02);
    g.gain.exponentialRampToValueAtTime(0.01, t+0.12);
    o.start(t); o.stop(t+0.17);
  });
}
function playClick(){
  var c = ac(); if(!c) return;
  var o = c.createOscillator(), g = c.createGain();
  o.connect(g); g.connect(c.destination);
  o.frequency.value = 600; o.type = 'sine';
  var t = c.currentTime;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(0.15, t+0.01);
  g.gain.exponentialRampToValueAtTime(0.01, t+0.08);
  o.start(t); o.stop(t+0.1);
}

/* ===== Data tables (verbatim from Rick's React version) ===== */
var ASSETS_SNAPSHOT = [
  { cat:'EQUIPMENT', items:[
    { name:'Park Tool repair stand', amount:200 },{ name:'Cone wrench set', amount:65 },{ name:'Torque wrench', amount:95 },
    { name:'Hex / Allen key set', amount:45 },{ name:'Cable cutters', amount:40 },{ name:'Chain breaker', amount:35 },
    { name:'Tire levers', amount:20 },{ name:'Air compressor', amount:180 },{ name:'Parts washer', amount:130 },
    { name:'Wheel-truing stand', amount:170 },{ name:'Bench grinder', amount:90 },{ name:'Headset press', amount:70 },{ name:'Shop vacuum', amount:60 } ] },
  { cat:'COMPUTER EQUIPMENT', items:[ { name:'Laptop', amount:610 } ] },
  { cat:'SUPPLIES', items:[
    { name:'Box of chains (on shelf)', amount:50 },{ name:'Box of brake pads (on shelf)', amount:40 },{ name:'Box of derailleur cables (on shelf)', amount:20 },
    { name:'Cassettes (on shelf)', amount:40 },{ name:'Bottom brackets (on shelf)', amount:20 },{ name:'Spokes (on shelf)', amount:20 },{ name:'Tubes (on shelf)', amount:10 } ] },
  { cat:'FIXTURES', items:[
    { name:'Desk', amount:250 },{ name:'Shelving units', amount:200 },{ name:'Display rack', amount:180 },{ name:'Pegboard + hooks', amount:120 } ] },
  { cat:'CASH', items:[ { name:'Repair cash on hand (May 31)', amount:0 } ] },
  { cat:'RIGHT OF USE', items:[ { name:'Right to occupy the space — last month, prepaid', amount:650 } ] }
].map(function(c){ c.subtotal = c.items.reduce(function(s,i){return s+i.amount;},0); return c; });
var ASSETS_TOTAL = ASSETS_SNAPSHOT.reduce(function(s,c){return s+c.subtotal;},0); // 3410

var LIABILITIES_SNAPSHOT = [
  { label:"Smith's frame — paid $220 up front, not built yet", amount:220 },
  { label:'What you owe on the bike-repair credit card', amount:1230 }
];
var LIABILITIES_TOTAL = LIABILITIES_SNAPSHOT.reduce(function(s,l){return s+l.amount;},0); // 1450

var CASH_FLOWS = [
  { date:'May 1',  desc:'Rent paid in advance (Westville Properties)', amount:-1300 },
  { date:'May 3',  desc:'Park Tool stand — Cyclesport Supply', amount:-200 },
  { date:'May 7',  desc:'Repair finished — customer paid (Venmo)', amount:340 },
  { date:'May 10', desc:'Repair finished — customer paid (Venmo)', amount:180 },
  { date:'May 12', desc:'Repair finished — customer paid (Venmo)', amount:80 },
  { date:'May 14', desc:'Repair finished — customer paid (Venmo)', amount:140 },
  { date:'May 16', desc:'Card paydown — Harborline Visa', amount:-400 },
  { date:'May 19', desc:'Repair finished — customer paid (Venmo)', amount:130 },
  { date:'May 22', desc:'Smith deposit — frame build', amount:220 },
  { date:'May 23', desc:'Repair finished — customer paid (Venmo)', amount:100 },
  { date:'May 27', desc:'Repair finished — customer paid (Venmo)', amount:150 },
  { date:'May 28', desc:'Card paydown — Harborline Visa', amount:-400 }
];
var CASH_NET = CASH_FLOWS.reduce(function(s,f){return s+f.amount;},0); // −960

var EQUIP_GROUPS = [
  { id:'g_gear', label:'Gear brought from home', amount:220, reasonId:'e_gear',
    ev:{ kind:'ebay', vendor:'eBay — comparable sold listings', meta:'Pre-owned · valued by market comp (Doc 9)', paid:'Brought from home — no purchase',
         items:[ { name:'Bench grinder', amt:90 }, { name:'Headset press', amt:70 }, { name:'Shop vacuum', amt:60 } ] } },
  { id:'g_laptop', label:'Laptop brought from home', amount:610, reasonId:'e_laptop',
    ev:{ kind:'ebay', vendor:'eBay — comparable sold listings', meta:'Pre-owned · valued by market comp (Doc 9)', paid:'Brought from home — no purchase',
         items:[ { name:'Laptop (used)', amt:610 } ] } },
  { id:'g_stand', label:'Park Tool repair stand', amount:200, reasonId:'e_stand',
    ev:{ kind:'receipt', vendor:'Cyclesport Supply', meta:'Sales Receipt #SR-4471 · May 3, 2026 (Doc 2)', paid:'Personal debit card •••• 6620',
         items:[ { name:'Park Tool PRS-25 Team Issue Repair Stand', amt:200 } ] } },
  { id:'g_tools', label:'Hand tools', amount:300, reasonId:'e_tools',
    ev:{ kind:'receipt', vendor:'Cyclesport Supply', meta:'Sales Receipt #SR-4488 · May 5, 2026 (Doc 4)', paid:'Harborline Visa •••• 3902',
         items:[ { name:'Cone wrench set', amt:65 }, { name:'Torque wrench', amt:95 }, { name:'Hex / Allen key set', amt:45 }, { name:'Cable cutters', amt:40 }, { name:'Chain breaker', amt:35 }, { name:'Tire levers', amt:20 } ] } },
  { id:'g_compressor', label:'Air compressor', amount:180, reasonId:'e_comp',
    ev:{ kind:'receipt', vendor:'Compressor Depot', meta:'Sales Receipt #CD-2208 · May 8, 2026 (Doc 10)', paid:'Harborline Visa •••• 3902',
         items:[ { name:'Portable air compressor — 6 gal', amt:180 } ] } },
  { id:'g_washer', label:'Parts washer', amount:130, reasonId:'e_wash',
    ev:{ kind:'receipt', vendor:'Industrial Supply', meta:'Invoice #IS-30742 · May 10, 2026 (Doc 11)', paid:'Harborline Visa •••• 3902',
         items:[ { name:'Parts washer — 20-gal solvent tank', amt:130 } ] } },
  { id:'g_truing', label:'Wheel-truing stand', amount:170, reasonId:'e_tru',
    ev:{ kind:'receipt', vendor:'Cyclesport Supply', meta:'Sales Receipt #SR-4502 · May 12, 2026 (Doc 12)', paid:'Harborline Visa •••• 3902',
         items:[ { name:'Wheel-truing stand — shop grade', amt:170 } ] } },
  { id:'g_fixtures', label:'Fixtures', amount:750, reasonId:'e_fix',
    ev:{ kind:'receipt', vendor:'Workspace Outfitters', meta:'Invoice #WO-20518 · May 5, 2026 (Doc 3)', paid:'Harborline Visa •••• 3902',
         items:[ { name:'Work desk', amt:250 }, { name:'Shelving units (×2)', amt:200 }, { name:'Display rack', amt:180 }, { name:'Pegboard panel + hook set', amt:120 } ] } }
];
var EQUIP_ITEMS = [
  { name:'Park Tool repair stand', amt:200, source:'cash', group:'g_stand' },
  { name:'Cone wrench set',        amt:65,  source:'card', group:'g_tools' },
  { name:'Torque wrench',          amt:95,  source:'card', group:'g_tools' },
  { name:'Hex / Allen key set',    amt:45,  source:'card', group:'g_tools' },
  { name:'Cable cutters',          amt:40,  source:'card', group:'g_tools' },
  { name:'Chain breaker',          amt:35,  source:'card', group:'g_tools' },
  { name:'Tire levers',            amt:20,  source:'card', group:'g_tools' },
  { name:'Air compressor',         amt:180, source:'card', group:'g_compressor' },
  { name:'Parts washer',           amt:130, source:'card', group:'g_washer' },
  { name:'Wheel-truing stand',     amt:170, source:'card', group:'g_truing' },
  { name:'Bench grinder',          amt:90,  source:'home', group:'g_gear' },
  { name:'Headset press',          amt:70,  source:'home', group:'g_gear' },
  { name:'Shop vacuum',            amt:60,  source:'home', group:'g_gear' }
];
var FIX_ITEMS = [
  { name:'Desk',             amt:250, source:'card', group:'g_fixtures' },
  { name:'Shelving units',   amt:200, source:'card', group:'g_fixtures' },
  { name:'Display rack',     amt:180, source:'card', group:'g_fixtures' },
  { name:'Pegboard + hooks', amt:120, source:'card', group:'g_fixtures' }
];
var COMP_ITEMS = [
  { name:'Laptop', amt:610, source:'home', group:'g_laptop' }
];
var ITEM_BY_NAME = {};
[].concat(EQUIP_ITEMS, COMP_ITEMS, FIX_ITEMS).forEach(function(it){ ITEM_BY_NAME[it.name] = it; });
var SOURCE_LABEL  = { card:'On the card', cash:'Paid cash (debit)', home:'Brought from home' };
var SOURCE_REASON = { card:'bought on the card', cash:'bought with cash (debit)', home:'brought from home' };

var SUP_QBP = {
  vendor:'QBP — Quality Bicycle Products',
  meta:'Invoice #QBP-887341 · May 15, 2026 (Doc 5)',
  paid:'Harborline Visa •••• 3902',
  items:[
    { name:'Chains (box)', amt:100 }, { name:'Brake pads (box)', amt:80 },
    { name:'Derailleur cables (box)', amt:40 }, { name:'Cassettes (×4)', amt:80 },
    { name:'Bottom brackets', amt:80 }, { name:'Spokes (bundle)', amt:80 },
    { name:'Tubes (box)', amt:40 }
  ]
};
var SUP_ITEMS = [
  { name:'Box of chains (on shelf)',            bought:100, shelf:50, used:50, qty:'½ box' },
  { name:'Box of brake pads (on shelf)',        bought:80,  shelf:40, used:40, qty:'½ box' },
  { name:'Box of derailleur cables (on shelf)', bought:40,  shelf:20, used:20, qty:'½ box' },
  { name:'Cassettes (on shelf)',                bought:80,  shelf:40, used:40, qty:'2 left' },
  { name:'Bottom brackets (on shelf)',          bought:80,  shelf:20, used:60, qty:'¼ box' },
  { name:'Spokes (on shelf)',                   bought:80,  shelf:20, used:60, qty:'¼ bundle' },
  { name:'Tubes (on shelf)',                    bought:40,  shelf:10, used:30, qty:'¼ box' }
];
var SUP_BY_NAME = {};
SUP_ITEMS.forEach(function(it){ SUP_BY_NAME[it.name] = it; });

var ROU_LEASE = {
  vendor:'Rental Agreement — 142 Whalley Ave, Unit B',
  meta:'Lease (Doc 1) · first + last month paid in advance · $650/month',
  paid:'Paid from the bank (cash)',
  items:[ { name:'First month (May) — prepaid', amt:650 }, { name:'Last month — prepaid (still held)', amt:650 } ]
};

var CARD_EV = {
  vendor:'Credit Card Statement', meta:'Harborline Visa •••• 3902 · May (Doc 6) — repair charges',
  items:[ { name:'Hand tools', amt:300 }, { name:'Air compressor', amt:180 }, { name:'Parts washer', amt:130 }, { name:'Wheel-truing stand', amt:170 }, { name:'Fixtures', amt:750 }, { name:'Parts (QBP)', amt:500 } ],
  charges:2030, payments:800, balance:1230
};
var SMITH_EV = { note:"Smith paid $220 up front for a custom frame you haven't built yet (Doc 8). You owe him the work — or his money back if you never do it." };

var CASH_ROW_IDS = ['w_ca_rent','w_ca_stand','w_ca_v1','w_ca_v2','w_ca_v3','w_ca_v4','w_ca_pay1','w_ca_v5','w_ca_smith','w_ca_v6','w_ca_v7','w_ca_pay2'];
var PAIRS_WINDOWS = {
  equipment: { title:'Assets · Equipment', sub:'your rows, grouped by receipt', total:{ label:'Equipment', amount:1200 }, rows:[
    { id:'w_eq_stand', label:'Park Tool repair stand', delta:200 },
    { id:'w_eq_tools', label:'Hand tools (6 items)', delta:300 },
    { id:'w_eq_comp',  label:'Air compressor', delta:180 },
    { id:'w_eq_wash',  label:'Parts washer', delta:130 },
    { id:'w_eq_tru',   label:'Wheel-truing stand', delta:170 },
    { id:'w_eq_gear',  label:'Gear from home (3 items)', delta:220 }
  ] },
  computer: { title:'Assets · Computer Equipment', sub:'your row', total:{ label:'Computer Equipment', amount:610 }, rows:[
    { id:'w_co_laptop', label:'Laptop — from home (eBay comp)', delta:610 }
  ] },
  supplies: { title:'Assets · Supplies', sub:'your pool rows', total:{ label:'On the shelf (counted)', amount:200 }, rows:[
    { id:'w_su_bought', label:'Parts bought — QBP (7 kinds)', delta:500 },
    { id:'w_su_used',   label:'Parts I must have used (inferred)', delta:-300 }
  ] },
  fixtures: { title:'Assets · Fixtures', sub:'your rows, one invoice', total:{ label:'Fixtures', amount:750 }, rows:[
    { id:'w_fi_all', label:'Fixtures (4 items, one invoice)', delta:750 }
  ] },
  rou: { title:'Assets · Right of Use', sub:'your pool rows', total:{ label:'Prepaid (last month)', amount:650 }, rows:[
    { id:'w_ro_paid', label:'Rent paid in advance (2 months)', delta:1300 },
    { id:'w_ro_used', label:'May used up (by the calendar)', delta:-650 }
  ] },
  liab: { title:'Liabilities', sub:"the statement's rows + Smith", total:{ label:'What you owe', amount:1450 }, rows:[
    { id:'w_li_tools', label:'May 5 — Cyclesport charge (hand tools)', delta:300 },
    { id:'w_li_fix',   label:'May 5 — Workspace Outfitters charge', delta:750 },
    { id:'w_li_comp',  label:'May 8 — Compressor Depot charge', delta:180 },
    { id:'w_li_wash',  label:'May 10 — Industrial Supply charge', delta:130 },
    { id:'w_li_tru',   label:'May 12 — Cyclesport charge (truing)', delta:170 },
    { id:'w_li_parts', label:'May 15 — QBP charge (parts)', delta:500 },
    { id:'w_li_pay1',  label:'May 16 — payment on the card', delta:-400 },
    { id:'w_li_pay2',  label:'May 28 — payment on the card', delta:-400 },
    { id:'w_li_smith', label:'Smith — the frame you owe (prepaid)', delta:220 }
  ] },
  cash: { title:'Cash', sub:"the bank's rows — repair flows only", total:{ label:'Net repair cash (short)', amount:-960 }, rows: CASH_FLOWS.map(function(f, i){ return { id:CASH_ROW_IDS[i], label:f.date+' — '+f.desc, delta:f.amount }; }) }
};
var WINROW_BY_ID = {};
Object.keys(PAIRS_WINDOWS).forEach(function(k){ PAIRS_WINDOWS[k].rows.forEach(function(r){ WINROW_BY_ID[r.id] = r; }); });

var PAIR_EVENTS = [
  { id:'e_stand', win:'equipment', rowId:'w_eq_stand',  otherWin:'cash', otherRowId:'w_ca_stand', ev:['eq','g_stand'],      reason:'Bought the Park Tool stand for $200 (debit — straight from the bank).' },
  { id:'e_tools', win:'equipment', rowId:'w_eq_tools',  otherWin:'liab', otherRowId:'w_li_tools', ev:['eq','g_tools'],      reason:'Bought $300 of hand tools on the card.' },
  { id:'e_comp',  win:'equipment', rowId:'w_eq_comp',   otherWin:'liab', otherRowId:'w_li_comp',  ev:['eq','g_compressor'], reason:'Bought an air compressor for $180 on the card.' },
  { id:'e_wash',  win:'equipment', rowId:'w_eq_wash',   otherWin:'liab', otherRowId:'w_li_wash',  ev:['eq','g_washer'],     reason:'Bought a parts washer for $130 on the card.' },
  { id:'e_tru',   win:'equipment', rowId:'w_eq_tru',    otherWin:'liab', otherRowId:'w_li_tru',   ev:['eq','g_truing'],     reason:'Bought a wheel-truing stand for $170 on the card.' },
  { id:'e_fix',   win:'fixtures',  rowId:'w_fi_all',    otherWin:'liab', otherRowId:'w_li_fix',   ev:['eq','g_fixtures'],   reason:'Bought $750 of fixtures on the card.' },
  { id:'e_parts', win:'supplies',  rowId:'w_su_bought', otherWin:'liab', otherRowId:'w_li_parts', ev:['sup','qbp'],         reason:'Bought $500 of parts on the card (QBP).' },
  { id:'e_rent',  win:'rou',       rowId:'w_ro_paid',   otherWin:'cash', otherRowId:'w_ca_rent',  ev:['rou','lease'],       reason:'Paid $1,300 of rent in advance (first + last month).' },
  { id:'e_smith', win:'liab',      rowId:'w_li_smith',  otherWin:'cash', otherRowId:'w_ca_smith', ev:['liab','smith'],      reason:"Smith paid $220 up front for a frame you haven't built yet." },
  { id:'e_pay1',  win:'liab',      rowId:'w_li_pay1',   otherWin:'cash', otherRowId:'w_ca_pay1',  ev:['liab','card'],       reason:'Paid $400 down on the card (May 16).' },
  { id:'e_pay2',  win:'liab',      rowId:'w_li_pay2',   otherWin:'cash', otherRowId:'w_ca_pay2',  ev:['liab','card'],       reason:'Paid $400 down on the card (May 28).' },
  { id:'e_gear',      win:'equipment', rowId:'w_eq_gear',   otherWin:null, cat:'contributed', ev:['eq','g_gear'],   reason:'Brought gear you already owned — grinder, press, vacuum.' },
  { id:'e_laptop',    win:'computer',  rowId:'w_co_laptop', otherWin:null, cat:'contributed', ev:['eq','g_laptop'], reason:'Brought your laptop from home.' },
  { id:'e_partsused', win:'supplies',  rowId:'w_su_used',   otherWin:null, cat:'earned',      ev:['sup','used'],    reason:'I must have used them doing repair work ($300 of parts).' },
  { id:'e_rentused',  win:'rou',       rowId:'w_ro_used',   otherWin:null, cat:'earned',      ev:['rou','used'],    reason:'Used the space for May ($650 — one of two prepaid months).' },
  { id:'e_v1', win:'cash', rowId:'w_ca_v1', otherWin:null, cat:'earned', ev:null, reason:'Finished a repair — customer paid $340 (May 7).' },
  { id:'e_v2', win:'cash', rowId:'w_ca_v2', otherWin:null, cat:'earned', ev:null, reason:'Finished a repair — customer paid $180 (May 10).' },
  { id:'e_v3', win:'cash', rowId:'w_ca_v3', otherWin:null, cat:'earned', ev:null, reason:'Finished a repair — customer paid $80 (May 12).' },
  { id:'e_v4', win:'cash', rowId:'w_ca_v4', otherWin:null, cat:'earned', ev:null, reason:'Finished a repair — customer paid $140 (May 14).' },
  { id:'e_v5', win:'cash', rowId:'w_ca_v5', otherWin:null, cat:'earned', ev:null, reason:'Finished a repair — customer paid $130 (May 19).' },
  { id:'e_v6', win:'cash', rowId:'w_ca_v6', otherWin:null, cat:'earned', ev:null, reason:'Finished a repair — customer paid $100 (May 23).' },
  { id:'e_v7', win:'cash', rowId:'w_ca_v7', otherWin:null, cat:'earned', ev:null, reason:'Finished a repair — customer paid $150 (May 27).' },
  { id:'e_plug', win:'cash', rowId:'w_ca_plug', otherWin:null, cat:'contributed', ev:null, reason:'My personal self covered what the work drew down — I only see it now, tallying up.' }
];
var EV_BY_ID = {};
PAIR_EVENTS.forEach(function(e){ EV_BY_ID[e.id] = e; });
var SOLO_EVENT_IDS = PAIR_EVENTS.filter(function(e){ return !e.otherWin; }).map(function(e){ return e.id; });
var PAIR_EVENT_COUNT = PAIR_EVENTS.filter(function(e){ return e.otherWin; }).length;
var ROW_EVENT = {};
PAIR_EVENTS.forEach(function(e){
  ROW_EVENT[e.rowId] = { id:e.id, side:1 };
  if(e.otherRowId) ROW_EVENT[e.otherRowId] = { id:e.id, side:2 };
});
WINROW_BY_ID['w_ca_plug'] = { id:'w_ca_plug', label:'From your personal self — covering what the work drew down', delta:960 };
var GROUP_TO_EVENT = { g_stand:'e_stand', g_tools:'e_tools', g_compressor:'e_comp', g_washer:'e_wash', g_truing:'e_tru', g_gear:'e_gear', g_laptop:'e_laptop', g_fixtures:'e_fix' };
var LIST_LABEL = { equipment:'Equipment', computer:'Computer Equip.', supplies:'Supplies', fixtures:'Fixtures', rou:'Right of Use', liab:'Liabilities', cash:'Cash' };

var glossaryTerms = [
  { term:'Asset', def:'Something you have — a present right to something useful. The gear, the parts, the prepaid month, cash.' },
  { term:'Liability', def:"Something you owe — a present obligation to pay or do something later. The card balance, Smith's frame." },
  { term:'Reason', def:'The why behind a change to one of your lists. You jot it next to the change — it lives on its own tab, one row per side.' },
  { term:'Net', def:'What you have minus what you owe. The bottom-line number a reason either moves or leaves alone.' },
  { term:'Contributed', def:'A net-mover where you put something in from outside the repair work — your own cash, gear you already owned.' },
  { term:'Generated', def:'A net-mover that came from doing the repair work — what customers paid, less what the work used up.' },
  { term:'Right of Use', def:"A month of space you've paid for but haven't used yet — a future benefit you still hold, so it counts as an asset." }
];

/* ===== Formatters ===== */
function xlDollars(v){ return (v<0?'−$':'$') + Math.abs(v).toLocaleString('en-US'); }
function signedDollars(v){ return (v>=0?'+':'−') + '$' + Math.abs(v).toLocaleString('en-US'); }
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* ===== Workbook (the persistent Excel-style spreadsheet) =====
   Phase files set: window.WB_PHASE, window.WB_WC_ANSWERED, window.WB_ASSETS_EXPANDED, window.WB_ACTIVE_TAB.
   The workbook reads those globals to decide which tabs to show and how Assets is folded. */
var curWbContainer = null;

function wbTabs(){
  var p = window.WB_PHASE || 'welcome';
  if(p === 'welcome'){
    if(window.WB_WC_ANSWERED) return [{id:'assets',label:'Assets'},{id:'liabilities',label:'Liabilities'}];
    return [{id:'assets',label:'Assets'},{id:'liabilities',label:'Liabilities'},{id:'cash',label:'Cash'}];
  }
  return [{id:'assets',label:'Assets'},{id:'liabilities',label:'Liabilities'},{id:'cash',label:'Cash'},{id:'reasons',label:'Reasons',isNew:true}];
}

function assetsSheet(){
  var p = window.WB_PHASE || 'welcome';
  var foldedCash = (p === 'welcome' && window.WB_WC_ANSWERED);
  var expanded = window.WB_ASSETS_EXPANDED || {};
  var cats = ASSETS_SNAPSHOT.filter(function(c){
    return !(p === 'welcome' && !window.WB_WC_ANSWERED && c.cat === 'CASH');
  });
  var total = ASSETS_TOTAL + (foldedCash ? CASH_NET : 0);
  var html = '<div class="xl-row xl-head"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">A&nbsp;&nbsp;Asset</div><div class="xl-v">B&nbsp;&nbsp;Value</div></div>';
  var n = 0;
  cats.forEach(function(cat){
    var label = cat.cat === 'RIGHT OF USE' ? 'Right of Use' : (cat.cat.charAt(0) + cat.cat.slice(1).toLowerCase());
    if(cat.cat === 'CASH' && foldedCash){
      n++;
      html += '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum">'+n+'</div><div class="xl-c"><strong>Cash</strong> &mdash; repair cash on hand (May 31) &nbsp;<i data-lucide="alert-triangle" class="licon"></i> <em>shouldn&rsquo;t be possible</em></div><div class="xl-v">'+xlDollars(CASH_NET)+'</div></div>';
      return;
    }
    var open = !!expanded[cat.cat]; n++;
    html += '<div class="xl-row xl-cat"><div class="xl-gutter"><button class="xl-toggle" onclick="toggleAssetCat(\''+cat.cat+'\')" aria-expanded="'+open+'">'+(open?'−':'+')+'</button></div><div class="xl-rownum">'+n+'</div><div class="xl-c">'+label+'</div><div class="xl-v">'+xlDollars(cat.subtotal)+'</div></div>';
    if(open){
      cat.items.forEach(function(it){
        n++;
        html += '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum">'+n+'</div><div class="xl-c">'+esc(it.name)+'</div><div class="xl-v">'+xlDollars(it.amount)+'</div></div>';
      });
    }
  });
  html += '<div class="xl-row xl-total"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">TOTAL — what I have</div><div class="xl-v">'+xlDollars(total)+'</div></div>';
  return html;
}

function liabilitiesSheet(){
  var html = '<div class="xl-row xl-head"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">A&nbsp;&nbsp;Liability (what I owe)</div><div class="xl-v">B&nbsp;&nbsp;Amount</div></div>';
  LIABILITIES_SNAPSHOT.forEach(function(l, i){
    html += '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum">'+(i+1)+'</div><div class="xl-c">'+esc(l.label)+'</div><div class="xl-v">'+xlDollars(l.amount)+'</div></div>';
  });
  html += '<div class="xl-row xl-total"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">TOTAL — what I owe</div><div class="xl-v">'+xlDollars(LIABILITIES_TOTAL)+'</div></div>';
  return html;
}

function cashSheet(){
  var inflows = CASH_FLOWS.filter(function(f){ return f.amount > 0; });
  var outflows = CASH_FLOWS.filter(function(f){ return f.amount < 0; });
  var totalIn = inflows.reduce(function(s,f){ return s+f.amount; }, 0);
  var totalOut = outflows.reduce(function(s,f){ return s+f.amount; }, 0);
  var net = totalIn + totalOut;
  var html = '<div class="cash-sheet-head"><div class="cash-sheet-title">Repair cash — May</div><div class="cash-sheet-sub">pulled from the bank statement</div></div>';
  html += '<div class="cash-group in"><div class="cash-group-label">Cash in</div>';
  inflows.forEach(function(f){ html += '<div class="cash-line"><span><span class="cash-line-date">'+f.date+'</span>'+esc(f.desc)+'</span><span class="cash-line-amt">+'+xlDollars(f.amount)+'</span></div>'; });
  html += '<div class="cash-subtotal"><span>Total in</span><span class="cash-line-amt">+'+xlDollars(totalIn)+'</span></div></div>';
  html += '<div class="cash-group out"><div class="cash-group-label">Cash out</div>';
  outflows.forEach(function(f){ html += '<div class="cash-line"><span><span class="cash-line-date">'+f.date+'</span>'+esc(f.desc)+'</span><span class="cash-line-amt">'+xlDollars(f.amount)+'</span></div>'; });
  html += '<div class="cash-subtotal"><span>Total out</span><span class="cash-line-amt">'+xlDollars(totalOut)+'</span></div></div>';
  html += '<div class="cash-net"><span class="cash-net-label">Net repair cash — May</span><span class="cash-net-val">'+xlDollars(net)+'</span></div>';
  return html;
}

function reasonsSheetEmpty(){
  return '<div class="cash-sheet-head"><div class="cash-sheet-title">Reasons — one row per change</div><div class="cash-sheet-sub">Empty for now. Walk through the month to fill it in.</div></div><div class="bs-empty-msg">No reasons recorded yet.</div>';
}

function renderWorkbook(containerId){
  curWbContainer = containerId;
  var tabs = wbTabs();
  if(!tabs.some(function(t){ return t.id === window.WB_ACTIVE_TAB; })) window.WB_ACTIVE_TAB = tabs[0].id;
  var body;
  if(window.WB_ACTIVE_TAB === 'assets')      body = assetsSheet();
  else if(window.WB_ACTIVE_TAB === 'liabilities') body = liabilitiesSheet();
  else if(window.WB_ACTIVE_TAB === 'cash')   body = cashSheet();
  else if(typeof reasonsSheet === 'function') body = reasonsSheet();  /* phase files can override */
  else                                       body = reasonsSheetEmpty();
  var activeLabel = tabs.find(function(t){ return t.id === window.WB_ACTIVE_TAB; }).label;
  var tabsHtml = tabs.map(function(t){
    return '<button class="xlwb-tab'+(t.id===window.WB_ACTIVE_TAB?' active':'')+'" onclick="setTab(\''+t.id+'\')">'+t.label+(t.isNew?' <span class="xl-new-tag">new</span>':'')+'</button>';
  }).join('');
  var html = '<div class="xlwb">'+
    '<div class="xlwb-bar"><span class="xlwb-bar-title"><i data-lucide="file-spreadsheet" class="licon"></i> <span class="mono">Bike-Repair.xlsx</span></span><span class="xlwb-bar-sheet">'+activeLabel+' sheet</span></div>'+
    '<div>'+body+'</div>'+
    '<div class="xlwb-tabs">'+tabsHtml+'<span class="xlwb-tab-add"><i data-lucide="plus" class="licon"></i></span></div></div>';
  document.getElementById(containerId).innerHTML = html;
  if(window.lucide) lucide.createIcons();
}

function setTab(id){
  playClick();
  window.WB_ACTIVE_TAB = id;
  if(curWbContainer) renderWorkbook(curWbContainer);
}
function toggleAssetCat(cat){
  playClick();
  window.WB_ASSETS_EXPANDED = window.WB_ASSETS_EXPANDED || {};
  window.WB_ASSETS_EXPANDED[cat] = !window.WB_ASSETS_EXPANDED[cat];
  if(curWbContainer) renderWorkbook(curWbContainer);
}

/* ===== Shared builders ===== */
function annaBox(inner, quoted){
  var text = quoted ? '&ldquo;'+inner+'&rdquo;' : inner;
  return '<div class="dialog-box anna"><div class="dialog-label">ANNA</div><div class="dialog-text">'+text+'</div></div>';
}
function insightBox(label, inner){
  return '<div class="insight-box"><div class="insight-label"><i data-lucide="lightbulb" class="licon"></i> '+label+'</div>'+inner+'</div>';
}
function warnMsg(text){ return '<div class="sort-msg warn">'+text+'</div>'; }
function contBtnHref(label, href){ return '<a class="btn-continue btn-block" href="'+href+'">'+label+' &rarr;</a>'; }
function contBtnFn(label, onclick){ return '<button class="btn-continue btn-block" onclick="'+onclick+'">'+label+' &rarr;</button>'; }

/* ===== Glossary ===== */
function openGlossary(){
  document.getElementById('glossaryList').innerHTML = glossaryTerms.map(function(g){
    return '<div class="glossary-entry"><div class="glossary-entry-term">'+g.term+'</div><div class="glossary-entry-def">'+g.def+'</div></div>';
  }).join('');
  document.getElementById('glossaryOverlay').classList.add('open');
}
function closeGlossary(){ document.getElementById('glossaryOverlay').classList.remove('open'); }

/* ===== Evidence modal (passes 2-3 will populate) ===== */
function closeEvidence(){ document.getElementById('evidenceOverlay').classList.remove('open'); }

/* ===== Phase nav between split files ===== */
var PHASE_ORDER = ['welcome','walk-equipment','walk-computer','walk-supplies','walk-fixtures','walk-rou','walk-liab','walk-cash','crossout','sort','complete'];
function phaseFile(p){ var i = PHASE_ORDER.indexOf(p); return i >= 0 ? '14-'+(i+1)+'-'+p+'.html' : null; }
function prevPhaseFile(p){ var i = PHASE_ORDER.indexOf(p); return i > 0 ? phaseFile(PHASE_ORDER[i-1]) : null; }
function nextPhaseFile(p){ var i = PHASE_ORDER.indexOf(p); return i < PHASE_ORDER.length-1 ? phaseFile(PHASE_ORDER[i+1]) : null; }
