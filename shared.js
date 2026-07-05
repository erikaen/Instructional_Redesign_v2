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
    registerSheet: function (id, fn) { _sheets[id] = fn; }
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
    { earned:'13-8', term:'Asset', def:'Something the repair work has &mdash; a present right to an economic benefit (the gear, the parts, the prepaid month, cash). &ldquo;Right to,&rdquo; not &ldquo;owns&rdquo;: a leased item is an asset.' },
    { earned:'13-8', term:'Noncash Asset', def:'An asset that isn&rsquo;t cash: equipment, parts on the shelf, fixtures, or a future right like prepaid rent.' },
    { earned:'13-8', term:'Liability', def:'Something the repair work owes &mdash; a present obligation to transfer an economic benefit later (the card balance; Smith&rsquo;s deposit, where what&rsquo;s owed is the work, not money).' },
    { earned:'13-7', term:'Prepaid Rent', def:'Rent already paid for a future month; a present right (an asset) until the month is used, then it becomes a cost.' },
    { earned:'13-4', term:'Promise', def:'Something the repair work has agreed to do or pay later. The plain word used before the term &ldquo;Liability.&rdquo;' },
    { earned:'13-4', term:'Deposit', def:'Money paid in advance for something not yet received. For the receiver it&rsquo;s a liability &mdash; the goods, the work, or the money back is still owed &mdash; not earnings yet.' }
  ] },
  { module:'Module 4: Keeping the Reasons', terms:[
    { earned:'14-1', term:'Reason', def:'The why behind a change in a Noncash Asset, Liability, or Cash. One row per side of the change; every change has two sides (the felt beginning of double-entry).' },
    { earned:'14-2', term:'Receipt', def:'The evidence for a purchase &mdash; vendor, date, amount, and how it was paid. The clue for each reason.' },
    { earned:'14-2', term:'Brought from home', def:'Gear you already owned and moved into the repair work &mdash; no purchase, valued by what a comparable one sells for.' },
    { earned:'14-4', term:'Contributed', def:'Resources that came into the entity from outside its own repair work (owner cash, equipment, items from home). Formal name later: Contributed Capital.' },
    { earned:'14-4', term:'Generated', def:'What the repair work produced, net of its costs (from running the repair work). Formal name later: Retained Earnings.' },
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
