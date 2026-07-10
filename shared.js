// ===== SHARED JS — Accounting Prework =====
// Glossary data, navigation, progress tracking, config application.
// Loaded by index.html and all module pages.

// ===== MODULE MAP =====
var MODULES = [
  { num: 1, title: "Welcome and Orientation",       file: "index.html" },
  { num: 2, title: "Why Accounting Systems Exist",   file: "module2.html" },
  { num: 3, title: "Worth, Quantification, and Limits", file: "module3.html" },
  { num: 4, title: "The Architecture",                file: "module4.html" },
  { num: 5, title: "CVS Health: Balance Sheets",     file: "module5.html" },
  { num: 6, title: "CVS Health: Income Statement",   file: "module6.html" },
  { num: 7, title: "CVS Health: Cash Flows",         file: "module7.html" },
  { num: 8, title: "The Analyst\u2019s Toolkit",     file: "module8.html" }
];

// ===== GLOSSARY =====
var GLOSSARY = [
  { term: "Accounting system", def: "A shared information system that compresses the economic complexity of an organization into structured reports that many different people can consult for different purposes." },
  { term: "Architecture", def: "The deep structure shared by accounting systems around the world: the self-balancing identity imposed at two dates to create two balance sheets, the flow statements that decompose the difference between them, and double-entry bookkeeping as the recording method. The architecture does not vary across instances." },
  { term: "Instance", def: "A specific set of rules written by a rule-making body for a particular class of organizations. US GAAP, IFRS, and governmental accounting standards are each instances of the shared architecture." },
  { term: "Accounting identity", def: "A self-imposed balancing requirement at the center of every accounting system: Assets \u2212 Liabilities. The difference is fully determined once Assets and Liabilities are set \u2014 a computed difference, not an independent third quantity \u2014 and it has no single name; each kind of entity gives it its own, and even those names have shifted over time. Not derived or discovered \u2014 chosen, because of what imposing it makes possible." },
  { term: "Assets", def: "Present rights to economic benefits held by the entity. Not physical things \u2014 rights. A building is an asset because the entity holds the right to use, rent, or sell it. Cash is an asset because it embodies the right to acquire other things. No future benefit, no asset." },
  { term: "Liabilities", def: "Present obligations of the entity to transfer economic benefits. The entity owes something and cannot avoid the transfer. The obligation must be compelling \u2014 not optional, not merely possible." },
  { term: "Double-entry bookkeeping", def: "A recording method in which every economic event is entered in two places, maintaining the balance of the accounting identity. Evolved in medieval Italy; now used by most accounting systems worldwide." },
  { term: "Financial statements", def: "The four output channels of the accounting system: the balance sheet, income statement, statement of changes in Members’ capital, and statement of cash flows. The flow statements are not separate reports that happen to agree with the balance sheets \u2014 they are decompositions of the change between two balance sheets." },
  { term: "US GAAP", def: "Generally Accepted Accounting Principles. The instance of the accounting architecture written by FASB for US for-profit entities. The instance studied in this prework." },
  { term: "IFRS", def: "International Financial Reporting Standards. The instance written by the IASB for entities in most countries outside the United States." },
  { term: "FASB", def: "Financial Accounting Standards Board. The body that writes US GAAP \u2014 the accounting rules for US for-profit entities." },
  { term: "Instance choice", def: "A decision made by a rule-making body (FASB, IASB, GASB) that could have been made differently. Whenever a GAAP-specific rule appears in the prework, it is identified as an instance choice." },
  { term: "Tradeoff", def: "Every design choice in the accounting system gains something and loses something. There is no tradeoff-free accounting system \u2014 that would be reality itself." },
  { term: "Compression", def: "What every accounting system does: takes the vast complexity of an organization\u2019s economic activity and produces something structured enough for human minds to work with. Compression requires choices, and choices involve tradeoffs." },
  { term: "Input boundary", def: "The line that determines which economic events enter the accounting system and which do not. There is too much data to include it all. What falls outside the boundary \u2014 human capital, internally generated brands, relational assets \u2014 is invisible to the system." },
  { term: "Journal entry notation", def: "The language of debits and credits used to analyze and record transactions. The first step in accounting for any transaction is to analyze it: what changed, where do the effects land, does everything still balance?" },
  { term: "Historical cost", def: "The amount recorded at the time of an arm\u2019s-length transaction \u2014 the strongest epistemic anchor for worth, because two independent parties looked at the same thing and agreed on a price." },
  { term: "Balance sheet", def: "The financial statement that shows the accounting identity at a date: Assets \u2212 Liabilities. What the entity has recorded as resources, what it owes, and the difference between them. A snapshot of position, not an explanation of how the entity got there." },
  { term: "Income statement", def: "A decomposition of the operating portion of the change in Members’ capital between two balance sheets. Shows revenues (gross inflows of worth from the entity\u2019s activities) and expenses (resources consumed in generating those revenues). The income statement does not \u201cagree with\u201d the change in retained earnings \u2014 it is an explanation of part of that change." },
  { term: "Statement of cash flows", def: "A decomposition of the change in one particular asset \u2014 cash \u2014 between two balance sheets. Groups cash movements into operating, investing, and financing categories. Under the indirect method, it begins with net income and adjusts for everything that affected income but not cash, and vice versa." },
  { term: "Revenue", def: "The gross inflows of worth resulting from an entity\u2019s activities \u2014 selling goods, providing services, earning fees. Revenue is recognized when earned, which may be before or after cash is collected." },
  { term: "Expense", def: "The resources consumed in generating revenues. Like revenue, expenses are recognized when incurred, not necessarily when cash is paid. The conventions governing when to recognize an expense are among the most consequential in the system." },
  { term: "Accrual accounting", def: "The set of conventions that decouple recognition from cash movement. Revenue is recognized when earned, not when collected. Expenses are recognized when incurred, not when paid. This is what creates the gap between the income statement and the cash flow statement \u2014 and why both are needed." },
  { term: "Recognition", def: "The gatekeeper decision: does this event get recorded in the system at all? Recognition rules are restrictive \u2014 they typically require evidence of a transaction before something enters the books. This is why some of an entity\u2019s most important economic resources (workforce, brand, strategic position) may never appear on a balance sheet." },
  { term: "Feeder fund", def: "A fund that does not invest directly. Instead, it raises money from investors and channels it into another fund that supposedly does the actual investing. The structure adds a layer between investors and the underlying activity, which can make oversight more difficult." },
  { term: "Ponzi scheme", def: "A fraud in which returns paid to existing investors come not from any productive activity but from money put in by newer investors. No worth is created \u2014 the scheme simply redistributes money among participants while creating the appearance of investment returns. Named after Charles Ponzi, who ran a famous scheme in Boston in 1920, though the fraud itself is far older." },
  { term: "Worth", def: "The opportunity set a resource, obligation, or claim embodies \u2014 the goods, services, exchanges, and transformations it makes available. Worth is not a single number waiting to be read off an instrument. It is broader than price: a price expresses worth at a particular moment in a particular transaction, but different people may see different opportunities in the same thing and reasonably disagree about its worth. Preferred over \u201cvalue\u201d in this prework because \u201cworth\u201d carries the honest implication that the concept resists precise definition." }
];

// Sort alphabetically
GLOSSARY.sort(function(a, b) { return a.term.localeCompare(b.term); });


// ===== GLOSSARY RENDERING =====
function renderGlossary() {
  var list = document.getElementById('glossaryList');
  if (!list) return;
  list.innerHTML = '';
  GLOSSARY.forEach(function(g, i) {
    var item = document.createElement('div');
    item.className = 'glossary-item';
    item.setAttribute('data-index', i);
    item.innerHTML = '<div class="glossary-term">' + g.term + '</div><div class="glossary-def">' + g.def + '</div>';
    list.appendChild(item);
  });
}

function toggleGlossary() {
  var overlay = document.getElementById('glossaryOverlay');
  var backdrop = document.getElementById('glossaryBackdrop');
  var isOpen = overlay.classList.toggle('open');
  backdrop.classList.toggle('open', isOpen);
  if (isOpen) {
    document.getElementById('glossarySearchInput').value = '';
    filterGlossary('');
    document.getElementById('glossarySearchInput').focus();
  }
}

function filterGlossary(query) {
  var q = query.toLowerCase();
  var items = document.querySelectorAll('.glossary-item');
  items.forEach(function(item) {
    var i = parseInt(item.getAttribute('data-index'));
    var match = GLOSSARY[i].term.toLowerCase().indexOf(q) !== -1 || GLOSSARY[i].def.toLowerCase().indexOf(q) !== -1;
    item.classList.toggle('hidden', !match);
  });
}


// ===== MODULE NAV DROPDOWN =====
function toggleModuleNav() {
  document.getElementById('navModules').classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  var nav = document.getElementById('navModules');
  if (nav && !nav.contains(e.target)) nav.classList.remove('open');
});

// Build the module dropdown dynamically
function buildModuleDropdown(currentModuleNum) {
  var dropdown = document.getElementById('moduleDropdown');
  if (!dropdown) return;
  dropdown.innerHTML = '';
  var progress = getProgress();
  MODULES.forEach(function(m) {
    var a = document.createElement('a');
    a.href = m.file;
    if (m.num === currentModuleNum) {
      a.className = 'current';
    } else if (progress[m.num]) {
      a.className = 'completed';
    }
    a.innerHTML = '<span class="nav-dd-num">' + m.num + '</span> ' + m.title;
    dropdown.appendChild(a);
  });
}


// ===== PROGRESS TRACKING =====
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('prework_progress') || '{}');
  } catch(e) { return {}; }
}

function markModuleVisited(moduleNum) {
  var progress = getProgress();
  if (!progress[moduleNum]) {
    progress[moduleNum] = { visited: true, timestamp: Date.now() };
    localStorage.setItem('prework_progress', JSON.stringify(progress));
  }
  updateProgressBar();
}

function updateProgressBar() {
  var progress = getProgress();
  var visited = Object.keys(progress).length;
  var total = MODULES.length;
  var pct = Math.round((visited / total) * 100);
  var fill = document.getElementById('progressFill');
  if (fill) fill.style.width = pct + '%';
}


// ===== ACCORDION =====
function toggleAccordion(el) {
  var section = el.closest('.accordion-section');
  section.classList.toggle('open');
}

// Open all accordions by default if fewer than a threshold, or first one only
function initAccordions(openFirst) {
  var sections = document.querySelectorAll('.accordion-section');
  if (openFirst && sections.length > 0) {
    sections[0].classList.add('open');
  }
}


// ===== RABBIT HOLES =====
function toggleRabbitHole(el) {
  var rh = el.closest('.rabbit-hole');
  rh.classList.toggle('open');
}


// ===== TRANSCRIPT (index.html only) =====
function toggleTranscript() {
  var box = document.getElementById('transcriptBox');
  var btn = document.getElementById('transcriptToggle');
  if (!box || !btn) return;
  var isOpen = box.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.textContent = isOpen ? 'Hide transcript' : 'Read transcript';
}


// ===== CONFIG-DRIVEN THEMING =====
function applyConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;
  var C = SITE_CONFIG;
  var r = document.documentElement.style;
  var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (C.colors && !isDark) {
    if (C.colors.primary)      r.setProperty('--primary', C.colors.primary);
    if (C.colors.primaryLight)  r.setProperty('--primary-light', C.colors.primaryLight);
    if (C.colors.faint)         r.setProperty('--primary-faint', C.colors.faint);
    if (C.colors.accent)        r.setProperty('--accent', C.colors.accent);
  }

  var titleEl = document.getElementById('courseTitle');
  if (titleEl) titleEl.textContent = C.courseTitle || 'Accounting Pre-Work';
  document.title = (C.courseTitle || 'Accounting Pre-Work');

  var navHome = document.getElementById('navHome');
  if (navHome) navHome.textContent = C.courseTitle ? C.courseTitle.split(' ')[0] : 'Prework';

  var parts = [];
  if (C.instructor && C.instructor.name) parts.push(C.instructor.name);
  if (C.instructor && C.instructor.title) parts.push(C.instructor.title);
  var authorLine = document.getElementById('authorLine');
  if (authorLine) authorLine.textContent = parts.join(' \u00B7 ');

  var instLine = document.getElementById('institutionLine');
  if (instLine && C.institution) instLine.textContent = C.institution;

  var logoEl = document.getElementById('bannerLogo');
  if (logoEl && C.logo) {
    if (C.logo.type === 'letter' && C.logo.value) {
      logoEl.textContent = C.logo.value;
    } else if (C.logo.type === 'url' && C.logo.value) {
      logoEl.innerHTML = '<img src="' + C.logo.value + '" alt="Logo">';
    }
  }

  var wt = document.getElementById('welcomeText');
  if (wt && C.welcomeText) {
    wt.textContent = C.welcomeText;
    wt.classList.add('visible');
  }

  var mascotEl = document.getElementById('mascot');
  if (mascotEl && C.mascot) {
    document.getElementById('mascotImg').src = C.mascot;
    mascotEl.classList.add('visible');
  }
}


// ===== PAGE INITIALIZATION =====
// Call this from each page's inline script: initPage(moduleNum)
function initPage(moduleNum) {
  renderGlossary();
  markModuleVisited(moduleNum);
  buildModuleDropdown(moduleNum);
  applyConfig();

  // Set the nav breadcrumb
  var navCurrent = document.getElementById('navCurrent');
  if (navCurrent) {
    var mod = MODULES.find(function(m) { return m.num === moduleNum; });
    if (mod) navCurrent.textContent = 'Module ' + mod.num + ': ' + mod.title;
  }

  // Open first accordion by default
  initAccordions(true);
}

/* ============================================================================
 * BRW — the Bike-Repair.xlsx workbook renderer (added 2026-06-29, Rick approved).
 * One renderer, driven by a per-page "snapshot" of data, so every workbook page
 * (11-1 … 31-x) is the same widget at a different point in the story.
 * See Bike-Repair-Workbook-Design.md §7. Append-only; self-contained `BRW`.
 *
 * Page usage (page must link shared.js):
 *     BRW.mount('wbBox', snapshot);     // initial render; BRW owns tab + expand UI
 *     BRW.update('wbBox', snapshot);    // re-render with new data, keep UI state
 *
 * SNAPSHOT (all optional except `tabs`):
 *   { file, tabs:[{id,label}], assets:[line], liabilities:[line|cardLine],
 *     reasons:{ carried:[line], mode:'walk'|'sorted', rows:[reasonRow],
 *               groups:[{key,label,blurb}], seasonSub } }
 *   line      = { label, note, amount, items?:[{name,amt}] }
 *   cardLine  = { label, note, amount, detail:{charges:[{name,amt}], payments:[{name,amt}]} }
 *   reasonRow = { id, account, delta, kind:'net'|'pair', cat, reason, revealed?, crossed? }
 * ============================================================================ */
var BRW = (function () {
  'use strict';

  var _reg = {};   // containerId -> { snap, ui:{tab, a:{}, l:{}, c:{}, g:{}} }
  var _hook = null; // optional page callback: _hook(type, cid, kind|id, key) on tab/expand. Default no-op.
  var _sheets = {}; // custom tab-id -> function(cid, snap) → body HTML. A page registers a renderer
                    // (built from the shared xl-* classes + BRW.dol/signed) for a tab not built into BRW.

  function dol(v) { return (v < 0 ? '−$' : '$') + Math.abs(v).toLocaleString('en-US'); }
  function signed(v) {
    var cls = v >= 0 ? 'stmt-dep' : 'stmt-with';
    return '<span class="' + cls + '">' + (v >= 0 ? '+' : '−') + '$' + Math.abs(v).toLocaleString('en-US') + '</span>';
  }

  function headRow(left, right) {
    return '<div class="xl-row xl-head"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + left + '</div><div class="xl-v">' + right + '</div></div>';
  }
  function totalRow(label, amount) {
    return '<div class="xl-row xl-total"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + label + '</div><div class="xl-v">' + dol(amount) + '</div></div>';
  }
  function flatRow(num, label, amount) {
    return '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum">' + (num || '') + '</div><div class="xl-c">' + label + '</div><div class="xl-v">' + dol(amount) + '</div></div>';
  }
  function detailRow(name, amount) {
    return '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + name + '</div><div class="xl-v">' + dol(amount) + '</div></div>';
  }
  // A ledger row: each entry shows its own amount (kind 'note' → no amount).
  function eventRow(ev) {
    var v = (ev.kind === 'note') ? '' : signed(ev.amt);
    return '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + ev.name + '</div><div class="xl-v">' + v + '</div></div>';
  }
  // Effective total of a line: sum of its event amounts (so the category total tracks its items), else its stated amount.
  function lineTotal(l) {
    if (l.events) return l.events.reduce(function (s, ev) { return s + (ev.kind === 'note' ? 0 : ev.amt); }, 0);
    return l.amount;
  }
  function catRow(cid, kind, key, num, label, amount, open) {
    return '<div class="xl-row xl-cat"><div class="xl-gutter"><button class="xl-toggle" onclick="BRW.x(\'' + cid + '\',\'' + kind + '\',\'' + key + '\')" aria-expanded="' + open + '">' + (open ? '−' : '+') + '</button></div>'
      + '<div class="xl-rownum">' + (num || '') + '</div><div class="xl-c">' + label + '</div><div class="xl-v">' + dol(amount) + '</div></div>';
  }

  function listSheet(cid, kind, lines, headLeft, totalLabel) {
    var ex = _reg[cid].ui[kind];
    var total = lines.reduce(function (s, l) { return s + lineTotal(l); }, 0);
    var html = headRow(headLeft, 'Value');
    lines.forEach(function (l, i) {
      var open = !!ex[i];
      if (l.detail) {
        html += catRow(cid, kind, i, i + 1, l.label + ' &mdash; ' + l.note, l.amount, open);
        if (open) {
          (l.detail.charges || []).forEach(function (it) { html += detailRow('Charged: ' + it.name, it.amt); });
          (l.detail.payments || []).forEach(function (it) { html += detailRow(it.name, it.amt); });
        }
      } else if (l.items) {
        html += catRow(cid, kind, i, i + 1, l.label + ' &mdash; ' + l.note, l.amount, open);
        if (open) l.items.forEach(function (it) { html += detailRow(it.name, it.amt); });
      } else if (l.events) {
        html += catRow(cid, kind, i, i + 1, l.label + (l.note ? ' &mdash; ' + l.note : ''), lineTotal(l), open);
        if (open) l.events.forEach(function (ev) { html += eventRow(ev); });
      } else {
        html += flatRow(i + 1, l.label + ' &mdash; ' + l.note, l.amount);
      }
    });
    html += totalRow(totalLabel, total);
    return html;
  }

  function sub(title, caption) {
    return '<div class="cash-sheet-head"><div class="cash-sheet-title">' + title + '</div><div class="cash-sheet-sub">' + caption + '</div></div>';
  }
  function reasonsSheet(cid, r) {
    var html = '';
    if (r.carried && r.carried.length) {
      html += sub('Carried in &mdash; members&rsquo; capital', 'the reasons from before, already settled. Open a line to see what settled into it.');
      var ex = _reg[cid].ui.c, ctot = 0;
      r.carried.forEach(function (l, i) {
        ctot += l.amount;
        var open = !!ex[i];
        if (l.items) {
          html += catRow(cid, 'c', i, i + 1, l.label + ' &mdash; ' + l.note, l.amount, open);
          if (open) l.items.forEach(function (it) { html += detailRow(it.name, it.amt); });
        } else { html += flatRow(i + 1, l.label + ' &mdash; ' + l.note, l.amount); }
      });
      html += totalRow('Members&rsquo; capital', ctot);
    }
    if (r.mode === 'sorted') {
      html += sub(r.pilesTitle || 'This season&rsquo;s reasons', r.pilesSub || 'sorted into your familiar piles &mdash; in full, and not folded into capital yet');
      var net = r.rows.filter(function (x) { return x.kind === 'net'; });
      var gex = _reg[cid].ui.g;
      (r.groups || []).forEach(function (g) {
        var rowsIn = net.filter(function (x) { return x.cat === g.key; });
        var subt = rowsIn.reduce(function (s, x) { return s + x.delta; }, 0);
        var open = gex[g.key] !== false;
        html += '<div class="xl-row xl-cat"><div class="xl-gutter"><button class="xl-toggle" onclick="BRW.x(\'' + cid + '\',\'g\',\'' + g.key + '\')" aria-expanded="' + open + '">' + (open ? '−' : '+') + '</button></div><div class="xl-rownum"></div><div class="xl-c">' + g.label + ' (' + rowsIn.length + ') &mdash; ' + g.blurb + '</div><div class="xl-v">' + signed(subt) + '</div></div>';
        if (open) {
          if (!rowsIn.length) html += '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c"><em>none this season</em></div><div class="xl-v"></div></div>';
          else rowsIn.forEach(function (x) { html += '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + x.account + ' &mdash; ' + x.reason + '</div><div class="xl-v">' + signed(x.delta) + '</div></div>'; });
        }
      });
    } else {
      var shown = r.rows.filter(function (x) { return x.revealed; });
      html += sub('This season&rsquo;s reasons', r.seasonSub || (shown.length + ' rows so far'));
      if (!shown.length) { html += '<div class="bs-empty-msg">No reasons recorded yet &mdash; walk the season.</div>'; return html; }
      html += '<div class="xl-row xl-reasons xl-head"><div class="xl-gutter"></div><div class="xl-c">ACCOUNT</div><div class="xl-v">&Delta;</div><div class="xl-c">REASON</div></div>';
      shown.forEach(function (x) {
        var strike = x.crossed ? ' eliminated' : '';
        html += '<div class="xl-row xl-reasons xl-item' + strike + '"><div class="xl-gutter"></div><div class="xl-c">' + x.account + '</div><div class="xl-v">' + signed(x.delta) + '</div><div class="xl-c">' + x.reason + '</div></div>';
      });
    }
    return html;
  }

  function shell(cid, snap, activeLabel, body) {
    var tabs = snap.tabs.map(function (t) {
      return '<button class="xlwb-tab' + (t.id === _reg[cid].ui.tab ? ' active' : '') + '" onclick="BRW.tab(\'' + cid + '\',\'' + t.id + '\')">' + t.label + '</button>';
    }).join('');
    return '<div class="xlwb">'
      + '<div class="xlwb-bar"><span class="xlwb-bar-title"><i data-lucide="file-spreadsheet" class="licon"></i> <span class="mono">' + (snap.file || 'Bike-Repair.xlsx') + '</span></span><span class="xlwb-bar-sheet">' + activeLabel + ' sheet</span></div>'
      + '<div>' + body + '</div>'
      + '<div class="xlwb-tabs">' + tabs + '<span class="xlwb-tab-add"><i data-lucide="plus" class="licon"></i></span></div></div>';
  }

  function render(cid) {
    var e = _reg[cid]; if (!e) return;
    var snap = e.snap, tab = e.ui.tab;
    if (!snap.tabs.some(function (t) { return t.id === tab; })) tab = e.ui.tab = snap.tabs[0].id;
    var body, label = (snap.tabs.filter(function (t) { return t.id === tab; })[0] || {}).label || '';
    if (tab === 'assets') body = listSheet(cid, 'a', snap.assets || [], 'Assets', 'Total Assets &mdash; what the records show');
    else if (tab === 'liabilities') body = listSheet(cid, 'l', snap.liabilities || [], 'Liabilities', 'Total Liabilities &mdash; what the records show');
    else if (tab === 'reasons') body = reasonsSheet(cid, snap.reasons || { rows: [] });
    else if (_sheets[tab]) body = _sheets[tab](cid, snap);
    else body = '';
    document.getElementById(cid).innerHTML = shell(cid, snap, label, body);
    if (window.lucide) lucide.createIcons();
  }

  return {
    dol: dol, signed: signed,
    mount: function (cid, snap) { _reg[cid] = { snap: snap, ui: { tab: (snap.tabs[0] || {}).id, a: {}, l: {}, c: {}, g: {} } }; render(cid); },
    update: function (cid, snap) { if (!_reg[cid]) return this.mount(cid, snap); _reg[cid].snap = snap; render(cid); },
    tab: function (cid, id) { if (window.playClick) playClick(); _reg[cid].ui.tab = id; render(cid); if (_hook) _hook('tab', cid, id); },
    x: function (cid, kind, key) { if (window.playClick) playClick(); var m = _reg[cid].ui[kind]; m[key] = (kind === 'g') ? (m[key] === false) : !m[key]; render(cid); if (_hook) _hook('expand', cid, kind, key); },
    setHook: function (fn) { _hook = fn; },
    // Register a renderer for a custom tab id (e.g. 'income'); BRW draws it inside its normal
    // shell (titlebar + tab strip). fn(cid, snap) returns body HTML built from the shared xl-* classes.
    registerSheet: function (id, fn) { _sheets[id] = fn; },
    // Return a registered custom sheet's body HTML without the workbook shell, so a page can
    // show a canonical statement as a free-standing panel (approved addition 2026-07-09; the
    // statement renderers ignore cid, so passing null is safe). Single source of truth: pages
    // must call this rather than hand-copying statement rows.
    sheetHTML: function (id, snap) { return _sheets[id] ? _sheets[id](null, snap) : ''; }
  };
})();

/* ===== Module 1 tutorial glossary (pages 11-x .. 15-x) =====
   Single source of truth. Progressive: a page shows only terms earned at or
   before its own position, so the glossary never hands out a name before the
   student earns it. Each page calls m1GlossaryOpen('<its page id>') from its
   own openGlossary() wrapper; `earned` is the page id where the term lands. */
var M1_GLOSSARY = [
  { module:'Module 2: Insurance and Maria', terms:[
    { earned:'12-1', term:'Property Policy', def:'Insurance that pays out if covered things are damaged or destroyed. Doesn&rsquo;t cover cash, or things you don&rsquo;t own (like the rented space).' },
    { earned:'12-2', term:'Market Value', def:'What it would fetch &mdash; what a comparable one sells for today (e.g. recent used &ldquo;eBay comp&rdquo; prices); the basis used to value the pre-owned laptop. One way to arrive at an asset&rsquo;s value &mdash; a choice, not the only one.' }
  ] },
  { module:'Module 3: Anna and the Bank Statement', terms:[
    { earned:'13-8', term:'Asset', def:'A present right to an economic benefit, recorded on the repair-work side of the line (the gear, the parts, the prepaid month, cash). &ldquo;Right to,&rdquo; not &ldquo;owns&rdquo;: a leased item is an asset.' },
    { earned:'13-8', term:'Noncash Asset', def:'An asset that isn&rsquo;t cash: equipment, parts on the shelf, fixtures, or a future right like prepaid rent.' },
    { earned:'13-8', term:'Liability', def:'A present obligation to transfer an economic benefit later, recorded against the repair work (the card balance; Smith&rsquo;s deposit, where what&rsquo;s owed is the frame, not money).' },
    { earned:'13-7', term:'Prepaid Rent', def:'Rent already paid for a future month; a present right (an asset) until the month is used, then it becomes a cost.' },
    { earned:'13-4', term:'Promise', def:'Something still to be done or paid because of the repair work &mdash; a promise made in the course of it. The plain word used before the term &ldquo;Liability.&rdquo;' },
    { earned:'13-4', term:'Deposit', def:'Money paid in advance for something not yet received. For the receiver it&rsquo;s a liability &mdash; the goods, the work, or the money back is still owed &mdash; not earnings yet.' }
  ] },
  { module:'Module 4: Keeping the Reasons', terms:[
    { earned:'14-1', term:'Reason', def:'The why you write down for a change in an Asset or a Liability that has <em>no match</em> &mdash; nothing else moved with it. The reasons are the changes that move the difference between Assets and Liabilities.' },
    { earned:'14-2', term:'Match', def:'The other line that moved with a change &mdash; same transaction, same amount: an Asset with a Liability, or one Asset with another. A matched pair explains itself, and the difference between Assets and Liabilities does not move. Every change gets either a match or a reason.' },
    { earned:'14-2', term:'Receipt', def:'The evidence for a purchase &mdash; vendor, date, amount, and how it was paid. The clue for each reason.' },
    { earned:'14-2', term:'Brought from home', def:'Gear you already owned and moved into the repair work &mdash; no purchase, valued by what a comparable one sells for.' },
    { earned:'14-4', term:'Contributed', def:'Resources put into the repair work from outside it (the cash you covered, the laptop and gear from home).' },
    { earned:'14-4', term:'Generated', def:'What the repair work produced, net of its costs (from running the repair work).' },
    { earned:'14-2', term:'Cost of Repairs Done', def:'The value of parts/resources consumed in finished customer jobs; a reason that makes parts-on-the-shelf go down.' }
  ] },
  { module:'Module 5: Naming What You Built', terms:[
    { earned:'15-3', term:'Entity', def:'A perspective you adopt by deciding what counts as &ldquo;in&rdquo; (your repair work) vs. &ldquo;out&rdquo; (your personal life), for a purpose. The line is drawn, not found.' },
    { earned:'15-2', term:'Accounting Identity', def:'Assets &minus; Liabilities. The difference is fully determined once Assets and Liabilities are set; it has no single name &mdash; each kind of entity gives it its own, and even those names have shifted over time. An identity, not an equation; it holds by definition for every entity.' }
  ] }
];
function m1PageKey(p){ var m = /^(\d+)-(\d+)/.exec(String(p||'')); return m ? (parseInt(m[1],10)*100 + parseInt(m[2],10)) : 0; }
function m1GlossaryOpen(pageId){
  var cur = m1PageKey(pageId);
  var html = '';
  M1_GLOSSARY.forEach(function(grp){
    var earned = grp.terms.filter(function(t){ return m1PageKey(t.earned) <= cur; });
    if(!earned.length) return;
    html += '<div class="glossary-group"><div class="glossary-module">'+grp.module+'</div>'+earned.map(function(g){
      return '<div class="glossary-entry"><div class="glossary-entry-term">'+g.term+'</div><div class="glossary-entry-def">'+g.def+'</div></div>';
    }).join('')+'</div>';
  });
  if(!html) html = '<div class="glossary-entry"><div class="glossary-entry-def">Nothing here yet &mdash; terms land in the glossary as the lists earn their names.</div></div>';
  document.getElementById('glossaryList').innerHTML = html;
  document.getElementById('glossaryOverlay').classList.add('open');
}
function m1GlossaryClose(){ document.getElementById('glossaryOverlay').classList.remove('open'); }

/* ============================================================================
 * Bike-Repair source data & workbook snapshot (consolidated 2026-07-10).
 * Formerly separate files: bike-repair-job-records.js, -parts-purchases.js,
 * -bank-statements.js, -card-statements.js, bike-repair-workbook.js.
 * Order matters: BR_JOBS / BR_PURCHASES before BR_WB. BRW is defined above.
 * ========================================================================== */

/* Bike Repair, LLC — job records for the summer quarter (Jun–Aug 2026).
   Auto-generated; ties to the locked totals (revenue 6,020 · COGS 1,200 · A/R 300).
   `hours` = labor time spent on the job. Part-time shop (day job + evenings/weekends)
   over ~13 weeks; the 21 jobs total 55.25 hrs of wrenching (~4–5 hrs/week billable).
   Reusable across Module 3 pages (31-2 detail, 3.4 cash flow, recognition beats). */
var BR_JOBS = [
  {
    "id": "J-0001",
    "date": "Jun 3",
    "customer": "Dana R.",
    "work": "Flat fix + new tube",
    "parts": "Inner tube",
    "partsCost": 10,
    "charge": 120,
    "hours": 0.75,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0002",
    "date": "Jun 5",
    "customer": "Marcus T.",
    "work": "Brake adjustment",
    "parts": "— labor only",
    "partsCost": 0,
    "charge": 150,
    "hours": 1.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0003",
    "date": "Jun 8",
    "customer": "Priya S.",
    "work": "Full tune-up",
    "parts": "Cables, chain lube",
    "partsCost": 25,
    "charge": 270,
    "hours": 2.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0004",
    "date": "Jun 12",
    "customer": "Liam O.",
    "work": "New chain + cassette",
    "parts": "Chain, 11-spd cassette",
    "partsCost": 95,
    "charge": 300,
    "hours": 1.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0005",
    "date": "Jun 16",
    "customer": "Sofia M.",
    "work": "Wheel true (pair)",
    "parts": "— labor only",
    "partsCost": 0,
    "charge": 150,
    "hours": 1.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0006",
    "date": "Jun 20",
    "customer": "Jamal W.",
    "work": "Drivetrain overhaul",
    "parts": "Chain, chainring, jockey wheels",
    "partsCost": 60,
    "charge": 360,
    "hours": 3.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0007",
    "date": "Jun 24",
    "customer": "Erin K.",
    "work": "Brake pads + hydraulic bleed",
    "parts": "Brake pads, bleed fluid",
    "partsCost": 40,
    "charge": 225,
    "hours": 2.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0008",
    "date": "Jun 28",
    "customer": "Noah B.",
    "work": "Tubeless conversion (pair)",
    "parts": "Valves, sealant, tape",
    "partsCost": 65,
    "charge": 210,
    "hours": 1.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0009",
    "date": "Jul 1",
    "customer": "Grace L.",
    "work": "Bottom-bracket service",
    "parts": "Bottom bracket",
    "partsCost": 35,
    "charge": 240,
    "hours": 2.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0010",
    "date": "Jul 5",
    "customer": "Theo H.",
    "work": "Tune-up",
    "parts": "Cables, chain lube",
    "partsCost": 25,
    "charge": 240,
    "hours": 2.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0011",
    "date": "Jul 9",
    "customer": "Maya P.",
    "work": "Rear wheel build",
    "parts": "Rim, spokes, nipples",
    "partsCost": 125,
    "charge": 450,
    "hours": 3.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0012",
    "date": "Jul 14",
    "customer": "Owen C.",
    "work": "Suspension fork service",
    "parts": "Seals, fork oil",
    "partsCost": 55,
    "charge": 360,
    "hours": 3.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0013",
    "date": "Jul 19",
    "customer": "Ava D.",
    "work": "Shifting overhaul",
    "parts": "Shift cables + housing",
    "partsCost": 45,
    "charge": 270,
    "hours": 2.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0014",
    "date": "Jul 24",
    "customer": "Leo F.",
    "work": "New tires (pair)",
    "parts": "2 tires, 2 tubes",
    "partsCost": 100,
    "charge": 240,
    "hours": 1.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0015",
    "date": "Jul 29",
    "customer": "Nina V.",
    "work": "Singlespeed conversion",
    "parts": "SS kit + tensioner",
    "partsCost": 80,
    "charge": 300,
    "hours": 2.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0016",
    "date": "Aug 4",
    "customer": "Caleb G.",
    "work": "Full tune-up",
    "parts": "Cables, chain lube",
    "partsCost": 25,
    "charge": 240,
    "hours": 2.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0017",
    "date": "Aug 11",
    "customer": "Ruth A.",
    "work": "Wheelset rebuild",
    "parts": "2 rims, spokes, nipples",
    "partsCost": 129,
    "charge": 485,
    "hours": 4.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0018",
    "date": "Aug 18",
    "customer": "Sam Q.",
    "work": "Commuter overhaul",
    "parts": "Chain, pads, cables",
    "partsCost": 70,
    "charge": 390,
    "hours": 3.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0019",
    "date": "Aug 25",
    "customer": "Westville Bike Share",
    "work": "Shop fleet service",
    "parts": "Chains, pads, cables (fleet)",
    "partsCost": 105,
    "charge": 500,
    "hours": 5.0,
    "pay": "On account · net 15",
    "collected": true
  },
  {
    "id": "J-0020",
    "date": "Aug 28",
    "customer": "Ridgeline Trail Crew",
    "work": "Trail-team tune",
    "parts": "Cables, sealant, pads",
    "partsCost": 75,
    "charge": 300,
    "hours": 3.0,
    "pay": "On account · net 15",
    "collected": false
  },
  {
    "id": "J-0021",
    "date": "Aug 30",
    "customer": "J. Smith",
    "work": "Smith's custom frame — finished",
    "parts": "Frame tubing, dropouts, braze rod",
    "partsCost": 36,
    "charge": 220,
    "hours": 6.0,
    "pay": "Deposit applied ($220 prepaid last period)",
    "collected": true,
    "note": "Custom frame completed — earns the $220 advance taken in Module 2."
  }
];

/* Bike Repair, LLC — parts purchase records (source docs) for the summer quarter.
   The season's parts restock: three supplier orders from Quality Bicycle Products (QBP),
   totaling $1,200 in cash — matching the $1,200 of parts consumed across the 21 jobs, so
   the Parts inventory nets back to its $200 opening. Reusable across Module 3 pages. */
var BR_PURCHASES = [
  {
    "id": "PO-2601",
    "date": "Jun 1",
    "supplier": "Quality Bicycle Products (QBP)",
    "total": 500,
    "items": [
      { "name": "Chains ×10", "cost": 150 },
      { "name": "11-spd cassettes ×4", "cost": 160 },
      { "name": "Brake pad sets ×12", "cost": 90 },
      { "name": "Cables + housing (assorted)", "cost": 60 },
      { "name": "Tubes ×10", "cost": 40 }
    ]
  },
  {
    "id": "PO-2602",
    "date": "Jul 1",
    "supplier": "Quality Bicycle Products (QBP)",
    "total": 400,
    "items": [
      { "name": "Chainrings + jockey wheels", "cost": 120 },
      { "name": "Bottom brackets ×3", "cost": 105 },
      { "name": "Shift cables + housing", "cost": 75 },
      { "name": "Tubeless sealant + valves", "cost": 60 },
      { "name": "Spokes + nipples", "cost": 40 }
    ]
  },
  {
    "id": "PO-2603",
    "date": "Aug 1",
    "supplier": "Quality Bicycle Products (QBP)",
    "total": 300,
    "items": [
      { "name": "Tires ×4", "cost": 130 },
      { "name": "Brake pads (assorted)", "cost": 70 },
      { "name": "Cables + housing", "cost": 50 },
      { "name": "Tubes ×8", "cost": 30 },
      { "name": "Small parts (bolts, tape)", "cost": 20 }
    ]
  }
];

/* Bike Repair, LLC — bank statements (source docs) for the business checking account.
   The account opened June 1, 2026 with a $1,300 deposit; three monthly statements run to
   an Aug 31 closing balance of $620. Deposits are the collected repairs (BR_JOBS);
   withdrawals are rent, the QBP parts orders (BR_PURCHASES), a new tool, the credit-card
   payoff, and the owner's draw. Loads after bike-repair-job-records.js. */
var BR_BANK = (function () {
  function depositsFor(mon) {
    return BR_JOBS
      .filter(function (j) { return j.collected && j.pay.indexOf('Deposit') < 0 && j.date.slice(0, 3) === mon; })
      .map(function (j) { return { desc: 'Deposit — ' + j.customer, amt: j.charge }; });
  }
  var june = [{ desc: 'Opening deposit — LLC funding', amt: 1300 }]
    .concat(depositsFor('Jun'))
    .concat([{ desc: 'Rent — June', amt: -650 }, { desc: 'QBP parts order (PO-2601)', amt: -500 }]);
  var july = depositsFor('Jul')
    .concat([{ desc: 'Rent — July', amt: -650 }, { desc: 'QBP parts order (PO-2602)', amt: -400 }, { desc: 'Equipment — new repair tool', amt: -400 }]);
  var august = depositsFor('Aug')
    .concat([{ desc: 'Rent — August', amt: -650 }, { desc: 'QBP parts order (PO-2603)', amt: -300 }, { desc: 'Credit-card payment', amt: -2030 }, { desc: 'Owner draw — transfer', amt: -600 }]);
  function sum(a) { return a.reduce(function (s, t) { return s + t.amt; }, 0); }
  var c1 = sum(june), c2 = c1 + sum(july), c3 = c2 + sum(august);
  var head = 'Elm City Bank & Trust — Business Checking ••4471';
  return [
    { title: head, sub: 'Statement period: June 1–30, 2026 · Bike Repair, LLC', opening: 0, txns: june, closing: c1 },
    { title: head, sub: 'Statement period: July 1–31, 2026 · Bike Repair, LLC', opening: c1, txns: july, closing: c2 },
    { title: head, sub: 'Statement period: August 1–31, 2026 · Bike Repair, LLC', opening: c2, txns: august, closing: c3 }
  ];
})();

/* Bike Repair, LLC — credit card statements (source docs) for the business card.
   The card carried the startup equipment purchases. Two statements: the setup period
   (charges, nothing paid down → $2,030 carried into the LLC at June 1) and the summer
   (paid off in full → $0). 0% intro APR, so no interest accrues. */
var BR_CARD = (function () {
  var setup = [
    { desc: 'Purchase — hand tools', amt: 300 },
    { desc: 'Purchase — air compressor', amt: 180 },
    { desc: 'Purchase — parts washer', amt: 130 },
    { desc: 'Purchase — wheel-truing stand', amt: 170 },
    { desc: 'Purchase — fixtures (desk, shelving, racks)', amt: 750 },
    { desc: 'Purchase — parts (QBP opening order)', amt: 500 }
  ];
  var summer = [
    { desc: 'Interest charged (0% intro APR)', amt: 0, note: true },
    { desc: 'Payment — paid in full', amt: -2030 }
  ];
  function sum(a) { return a.reduce(function (s, t) { return s + (t.amt || 0); }, 0); }
  var head = 'Summit Rewards Visa — Business ••8102';
  return [
    { title: head, sub: 'Setup period · through May 31, 2026 · Bike Repair, LLC', opening: 0, txns: setup, closing: sum(setup) },
    { title: head, sub: 'Statement period: June 1–August 31, 2026 · Bike Repair, LLC', opening: 2030, txns: summer, closing: 0 }
  ];
})();

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
 *       opts.closed          -> the 35-2 state: the FIRST-EVER CLOSE. Requires tabbed (and
 *                               normally withDepreciation). Revenue and Expenses empty out —
 *                               their rows fold into GENERATED as ONE period row each ("May
 *                               (pre-LLC) +$170", "Summer 2026 +$2,640"); May's individual
 *                               pre-season rows in GENERATED are replaced by that same May
 *                               period row (the same gesture files both periods at once).
 *                               WITHDRAWN is untouched. Revenue/Expenses tabs render an
 *                               emptied "closed into GENERATED, ready for next season" state.
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
    // In flowGroups mode the SEASON's generated reasons are filed under their flow (in/up) —
    // the state after the student sorts them in 32-2. May's rows keep their original piles:
    // the period line the student drew stays visible in the workbook.
    // In tabbed mode (the 32-4 graduation) the season's rows leave Reasons entirely —
    // they live on their own period tabs, Revenue and Expenses.
    // opts.closed (the 35-2 first-ever close): May's individual generated rows AND the
    // season's generated rows both file into GENERATED as ONE period row apiece — the same
    // gesture rules on both periods at once. Nothing here changes non-closed rendering.
    var MAY_PERIOD_ROW = { kind: 'net', cat: 'generated', account: 'May (pre-LLC)', reason: 'the work before the LLC, filed as a closed period', delta: 170 };
    var SEASON_PERIOD_ROW = { kind: 'net', cat: 'generated', account: 'Summer 2026', reason: 'net income for the season, closed into Generated', delta: 2640 };
    var rows = opts.closed
      ? setup.filter(function (r) { return r.cat !== 'generated'; }).concat([ MAY_PERIOD_ROW, SEASON_PERIOD_ROW ])
      : (opts.tabbed
        ? setup.slice()
        : (opts.flowGroups
          ? setup.concat(gen.map(function (r) { return { kind: 'net', cat: r.flow, flow: r.flow, account: r.account, reason: r.reason, delta: r.delta }; }))
          : setup.concat(gen)));
    rows.push(drawReason);

    var groups = opts.closed
      ? [ { key: 'contributed', label: 'CONTRIBUTED', blurb: 'what you put in' },
          { key: 'generated', label: 'GENERATED &mdash; closed periods', blurb: 'an archive of finished periods, one row per close' },
          { key: 'drawn', label: 'WITHDRAWN', blurb: 'an owner move &mdash; dated to the season, but not part of how the work did' } ]
      : opts.tabbed
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
        pilesSub: opts.closed
          ? 'the season closed into GENERATED as a period row; May&rsquo;s rows filed the same way &mdash; the archive of finished periods'
          : opts.tabbed
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
      // opts.closed: the close empties both period tabs — their rows just filed into
      // GENERATED (see SEASON_PERIOD_ROW above). The tabs stay, ready for next season at $0.
      if (opts.closed) {
        snap.revenueRows = [];
        snap.expenseRows = [];
        snap.expensesNote = null;
        snap.revenueClosed = true;
        snap.expensesClosed = true;
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
      h += xr('xl-cat', '<strong>Operating</strong> &mdash; running the season', BRW.signed(320));
      h += xr('xl-item', 'Repairs collected', BRW.signed(5500));
      h += xr('xl-item', 'Parts bought', BRW.signed(-1200));
      h += xr('xl-item', 'Rent paid', BRW.signed(-1950));
      h += xr('xl-item', 'Credit-card payoff', BRW.signed(-2030));
      h += xr('xl-cat', '<strong>Investing</strong> &mdash; long-lived gear', BRW.signed(-400));
      h += xr('xl-item', 'New repair tool', BRW.signed(-400));
      h += xr('xl-cat', '<strong>Financing</strong> &mdash; owner moves', BRW.signed(-600));
      h += xr('xl-item', 'Owner&rsquo;s draw', BRW.signed(-600));
      h += xr('xl-total', '<strong>Net change in cash</strong>', BRW.signed(-680));
      h += xr('xl-item', 'Cash, June 1', BRW.dol(1300));
      h += xr('xl-total', '<strong>Cash, August 31</strong> <span class="xl-new-tag">ties to Assets</span>', BRW.dol(620));
      return h;
    });
    BRW.registerSheet('bridge', function (cid, snap) {
      var h = xr('xl-head', 'Statement of Changes in Members&rsquo; Capital &middot; June&ndash;August 2026', 'Amount');
      h += xr('xl-item', 'Opening Members&rsquo; Capital &mdash; June 1', BRW.dol(2460));
      h += xr('xl-item', '+ Net income &mdash; the season&rsquo;s work', BRW.signed(2640));
      h += xr('xl-item', '&minus; Owner&rsquo;s draw', BRW.signed(-600));
      h += xr('xl-total', '<strong>Closing Members&rsquo; Capital &mdash; August 31</strong> <span class="xl-new-tag">ties to the balance sheet</span>', BRW.dol(4500));
      return h;
    });
    BRW.registerSheet('balance', function (cid, snap) {
      var h = xr('xl-head', 'Balance Sheet &middot; August 31, 2026', 'Amount');
      h += xr('xl-item', 'Assets', BRW.dol(4500));
      h += xr('xl-item', 'Liabilities', BRW.dol(0));
      h += xr('xl-cat', '<strong>Members&rsquo; Capital</strong>', BRW.dol(4500));
      h += xr('xl-item', 'Contributed', BRW.dol(2290));
      h += xr('xl-item', 'Generated (170 + 2,640 &minus; 600)', BRW.dol(2210));
      h += xr('xl-total', '<strong>Total Members&rsquo; Capital</strong>', BRW.dol(4500));
      return h;
    });
  };
})();

/* ============================================================================
 * In-page course navigation (added 2026-07-10).
 * Injects a Back / Next button row at the bottom of .prework-wrap on every
 * tutorial page, replacing the platform Next bar and the retired
 * "click Next to continue" banners.
 *  - Order mirrors view.html's PAGES.
 *  - Pages in PAGE_NAV_OWN_NEXT already end in their own continue button
 *    (e.g. "Sort the cash ->"), so they get a Back button only.
 *  - Skipped when the page runs inside the view.html iframe (it has its own
 *    Back/Next bar) or when the file is not in the course order.
 *  - First page's Back returns to index.html; the last page gets no Next.
 * ========================================================================== */
var PAGE_NAV_ORDER = [
  '11-1-Getting-Started.html','11-2-A-Rough-Week.html','11-3-Sort-Your-Things.html','11-4-The-Line-You-Drew.html','11-5-Module-Complete.html',
  '12-1-Meet-Maria.html','12-2-Marias-Form.html','12-3-The-Read-Back.html','12-4-Module-Complete.html',
  '13-1-Meet-Anna.html','13-2-The-Bank-Statement.html','13-3-The-Cash-Movement.html','13-4-The-Customer-Payments.html','13-5-The-Credit-Card-Statement.html','13-6-The-Promises.html','13-7-The-Rent-Payment.html','13-8-Naming-the-Lists.html','13-9-Module-Complete.html',
  '14-1-Why-Keep-the-Reasons.html','14-2-Walk-the-Reasons.html','14-4-What-Moves-the-Difference.html','14-5-Module-Complete.html',
  '15-1-Find-the-Difference.html','15-2-The-Accounting-Identity.html','15-3-The-Entity.html','15-4-Double-Entry.html','15-5-Module-Complete.html',
  '21-1-welcome.html','21-2-exposure.html','21-3-whoSeesTwo.html','21-4-twoHats.html','21-5-complete.html',
  '22-1-welcome.html','22-2-name.html','22-3-file.html','22-4-whatChanged.html','22-5-complete.html',
  '23-1-welcome.html','23-2-agreement.html','23-3-contribution.html','23-4-wall.html','23-5-keystone.html','23-6-complete.html',
  '31-1-welcome.html','31-2-work-the-season.html',
  '32-1-the-income-statement.html','32-2-two-kinds.html','32-3-revenue-follows-the-work.html','32-4-name-the-income-statement.html','32-5-what-the-season-kept.html',
  '33-1-Two-Kinds-of-Used-Up.html','33-2-The-Third-Kind.html','33-3-The-Bottom-Line.html',
  '34-1-The-Cash-Puzzle.html','34-2-Three-Buckets.html','34-3-What-Cash-Missed.html','34-4-The-Cash-Flow-Statement.html',
  '35-1-The-Capital-Bridge.html','35-2-The-First-Close.html','35-3-The-Statements-Tie-Out.html','35-4-Module-Complete.html'
];
/* Pages whose own flow already ends in a continue button to the next page. */
var PAGE_NAV_OWN_NEXT = [
  '21-1-welcome.html','21-2-exposure.html','21-3-whoSeesTwo.html','21-4-twoHats.html',
  '22-1-welcome.html','22-2-name.html','22-3-file.html','22-4-whatChanged.html',
  '23-1-welcome.html','23-2-agreement.html','23-3-contribution.html','23-4-wall.html','23-5-keystone.html',
  '31-1-welcome.html','31-2-work-the-season.html',
  '32-1-the-income-statement.html','32-2-two-kinds.html','32-3-revenue-follows-the-work.html','32-4-name-the-income-statement.html','32-5-what-the-season-kept.html',
  '33-1-Two-Kinds-of-Used-Up.html','33-2-The-Third-Kind.html','33-3-The-Bottom-Line.html',
  '34-1-The-Cash-Puzzle.html','34-2-Three-Buckets.html','34-3-What-Cash-Missed.html','34-4-The-Cash-Flow-Statement.html',
  '35-1-The-Capital-Bridge.html','35-2-The-First-Close.html','35-3-The-Statements-Tie-Out.html'
];
function initPageNav() {
  if (window.self !== window.top) return; /* inside view.html — it has its own bar */
  var file = location.pathname.split('/').pop() || '';
  var i = PAGE_NAV_ORDER.indexOf(file);
  if (i < 0) return;
  var wrap = document.querySelector('.prework-wrap');
  if (!wrap || wrap.querySelector('[data-page-nav]')) return;
  var prev = i > 0 ? PAGE_NAV_ORDER[i - 1] : 'index.html';
  var next = (i < PAGE_NAV_ORDER.length - 1 && PAGE_NAV_OWN_NEXT.indexOf(file) < 0) ? PAGE_NAV_ORDER[i + 1] : null;
  var row = document.createElement('div');
  row.className = 'btn-row';
  row.setAttribute('data-page-nav', '');
  row.innerHTML =
    '<button class="btn-reset" onclick="location.href=\'' + prev + '\'">&larr; Back</button>' +
    (next ? '<button class="btn-continue" style="margin-left:auto;" onclick="location.href=\'' + next + '\'">Next &rarr;</button>' : '');
  wrap.appendChild(row);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initPageNav);
else initPageNav();
