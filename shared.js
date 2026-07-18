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
  { term: "Financial statements", def: "The four output channels of the accounting system: the balance sheet, income statement, statement of changes in Member's Capital, and statement of cash flows. The flow statements are not separate reports that happen to agree with the balance sheets \u2014 they are decompositions of the change between two balance sheets." },
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
  { term: "Income statement", def: "A decomposition of the operating portion of the change in Member's Capital between two balance sheets. Shows revenues (gross inflows of worth from the entity\u2019s activities) and expenses (resources consumed in generating those revenues). The income statement does not \u201cagree with\u201d the change in retained earnings \u2014 it is an explanation of part of that change." },
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
      html += totalRow('Member&rsquo;s Capital', ctot);
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
      return '<button class="xlwb-tab' + (t.kind ? ' tk-' + t.kind : '') + (t.id === _reg[cid].ui.tab ? ' active' : '') + '" onclick="BRW.tab(\'' + cid + '\',\'' + t.id + '\')">' + t.label + '</button>';
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

/* ===== BRW.tagger — per-row category tagger (approved addition 2026-07-13) =====
   Shared by the income-statement sort (32-x) and the cash-flow activity sort (44-2).
   BRW.tagger(containerId, {
     rows:       [{ id, label, amt, cat }],   // cat = the CORRECT category key
     categories: [{ key, label }],
     sortLabel:  'Sort the rows &rarr;',      // optional
     onSorted:   function(){}                 // fires once the sorted view renders
   })
   Every row starts untagged; picking a pill tags it. The Sort button appears once
   all rows are tagged. On Sort, wrong tags flash .miss and revert to untagged
   (retry until clean — forgiving, never punitive). When every tag is right, the
   list re-renders as category bands with subtotals and onSorted fires. */
BRW.tagger = function (cid, opts) {
  var el = document.getElementById(cid);
  var tags = {}, missed = {}, sorted = false;

  function fmt(n) { return n < 0 ? '(' + BRW.dol(-n) + ')' : BRW.dol(n); }

  function render() {
    var h = '';
    if (!sorted) {
      opts.rows.forEach(function (r) {
        h += '<div class="tagger-row"><div class="tagger-label">' + r.label + '</div>'
           + '<div class="tagger-amt">' + BRW.signed(r.amt) + '</div>'
           + '<div class="tagger-choices">' + opts.categories.map(function (c) {
               var cls = 'tagger-choice' + (tags[r.id] === c.key ? ' on' : '') + (missed[r.id] ? ' miss' : '');
               return '<button class="' + cls + '" onclick="BRW._tagPick(\'' + cid + '\',\'' + r.id + '\',\'' + c.key + '\')">' + c.label + '</button>';
             }).join('') + '</div></div>';
      });
      var all = opts.rows.every(function (r) { return tags[r.id]; });
      if (all) h += '<div class="tagger-actions"><button class="btn-continue" onclick="BRW._tagSort(\'' + cid + '\')">' + (opts.sortLabel || 'Sort the rows &rarr;') + '</button></div>';
    } else {
      opts.categories.forEach(function (c) {
        var rows = opts.rows.filter(function (r) { return r.cat === c.key; });
        var sub = rows.reduce(function (s, r) { return s + r.amt; }, 0);
        h += '<div class="tagger-band"><span>' + c.label + '</span></div>';
        rows.forEach(function (r) {
          h += '<div class="tagger-row"><div class="tagger-label">' + r.label + '</div><div class="tagger-amt">' + BRW.signed(r.amt) + '</div><div></div></div>';
        });
        h += '<div class="tagger-subtotal"><div>' + c.label + ' subtotal</div><div class="tagger-amt">' + fmt(sub) + '</div><div></div></div>';
      });
    }
    el.innerHTML = h;
  }

  BRW._taggers = BRW._taggers || {};
  BRW._taggers[cid] = {
    pick: function (rid, key) { tags[rid] = key; delete missed[rid]; if (window.playClick) playClick(); render(); },
    sort: function () {
      var wrong = opts.rows.filter(function (r) { return tags[r.id] !== r.cat; });
      if (wrong.length) {
        wrong.forEach(function (r) { missed[r.id] = true; delete tags[r.id]; });
        if (window.playSoftNope) playSoftNope(); else if (window.playClick) playClick();
        render();
        if (opts.onMiss) opts.onMiss(wrong);
      } else {
        sorted = true;
        if (window.playSuccess) playSuccess();
        render();
        if (opts.onSorted) opts.onSorted();
      }
    }
  };
  render();
};
BRW._tagPick = function (cid, rid, key) { BRW._taggers[cid].pick(rid, key); };
BRW._tagSort = function (cid) { BRW._taggers[cid].sort(); };

/* ===== BRW.fmt — Excel number-format renderer (approved engine plan, Part 2) ===== */
BRW.fmt = function (value, numFmt) {
  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  if (typeof value === 'string') return escapeHTML(value);
  if (!numFmt || numFmt === 'General') return escapeHTML(String(value));

  var sections = String(numFmt).split(';').slice(0, 4);
  var section = value > 0 ? sections[0]
    : value < 0 ? (sections.length > 1 ? sections[1] : sections[0])
    : (sections.length > 2 ? sections[2] : sections[0]);

  var rendered = section
    .replace(/_./g, '')
    .replace(/\*./g, '')
    .replace(/\?\?/g, '')
    .replace(/\\/g, '')
    .replace(/"/g, '');
  var absoluteInteger = Math.abs(Math.trunc(Number(value))).toLocaleString('en-US');
  rendered = rendered.replace(/[#0][#,0]*/, absoluteInteger);

  return escapeHTML(rendered.trim());
};

/* ===== BRW.renderGrid (PART 3) =====
   Generic renderer for the extracted Excel-facsimile sheet objects. renderGrid
   is deliberately DOM-free; mountGrid owns the small amount of UI state used
   by outline expand/collapse controls. */
BRW.renderGrid = function (sheetObj, opts) {
  opts = opts || {};
  sheetObj = sheetObj || {};

  var rows = sheetObj.rows || [];
  var cols = sheetObj.cols || [];
  var cells = sheetObj.cells || [];
  var gridId = opts.gridId === undefined ? 'g' : String(opts.gridId);
  var hidden = {};
  var byRow = {};
  var byRef = {};
  var covered = {};
  var anchors = {};
  var groups = [];
  var summaryGroups = {};
  var detailGroups = {};
  var maxRow = rows.length;
  var i;

  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeJSString(text) {
    return String(text)
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\r/g, '\\r')
      .replace(/\n/g, '\\n')
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
  }

  function colLetters(number) {
    var out = '';
    while (number > 0) {
      number--;
      out = String.fromCharCode(65 + (number % 26)) + out;
      number = Math.floor(number / 26);
    }
    return out;
  }

  function colNumber(letters) {
    var out = 0;
    letters = String(letters).toUpperCase();
    for (var n = 0; n < letters.length; n++) out = out * 26 + letters.charCodeAt(n) - 64;
    return out;
  }

  function cellRef(cell) {
    return colLetters(cell.c) + cell.r;
  }

  function parseMerge(range) {
    if (!range) return null;
    var match = /^\$?([A-Z]+)\$?(\d+):\$?([A-Z]+)\$?(\d+)$/i.exec(String(range));
    if (!match) return null;
    return {
      c1: colNumber(match[1]), r1: parseInt(match[2], 10),
      c2: colNumber(match[3]), r2: parseInt(match[4], 10)
    };
  }

  function widthBucket(width) {
    width = Number(width) || 0;
    if (width <= 3.5) return 'xs';
    if (width <= 9.5) return 'sm';
    if (width <= 17) return 'md';
    if (width <= 36) return 'lg';
    return 'xl';
  }

  function columnWidth(columnNumber) {
    return cols[columnNumber - 1] && cols[columnNumber - 1].width;
  }

  function rowMeta(rowNumber) {
    return rows[rowNumber - 1] || {};
  }

  function rowHasRenderableCell(rowNumber) {
    var rowCells = byRow[rowNumber] || [];
    for (var n = 0; n < rowCells.length; n++) {
      var cell = rowCells[n];
      if (cell.c < 2 || cell.c > 6 || covered[cellRef(cell)]) continue;
      if (cell.value !== null && cell.value !== undefined && cell.value !== '') return true;
      if (cell.ruleTop || cell.ruleBottom) return true;
    }
    return false;
  }

  function sourceRow(ref) {
    var match = /\$?[A-Z]+\$?(\d+)$/i.exec(String(ref));
    return match ? parseInt(match[1], 10) : 0;
  }

  function displayedValue(cell) {
    var sources = cell.sumSources || [];
    var recalculate = false;
    var total = 0;
    var n;

    if ((cell.ruleTop || cell.ruleBottom) && sources.length) {
      for (n = 0; n < sources.length; n++) {
        if (hidden[sourceRow(sources[n])]) { recalculate = true; break; }
      }
      if (recalculate) {
        for (n = 0; n < sources.length; n++) {
          var ref = String(sources[n]).replace(/\$/g, '').toUpperCase();
          if (hidden[sourceRow(ref)]) continue;
          var source = byRef[ref];
          if (source && typeof source.value === 'number' && isFinite(source.value)) total += source.value;
        }
        return total;
      }
    }
    return cell.value;
  }

  function renderValue(cell) {
    var value = displayedValue(cell);
    if (value === null || value === undefined) return '';
    if (typeof value === 'number') return BRW.fmt(value, cell.numFmt);
    return escapeHTML(value);
  }

  for (i = 0; i < (opts.hiddenRows || []).length; i++) {
    hidden[parseInt(opts.hiddenRows[i], 10)] = true;
  }

  for (i = 0; i < cells.length; i++) {
    var indexedCell = cells[i];
    if (indexedCell.r > maxRow) maxRow = indexedCell.r;
    (byRow[indexedCell.r] = byRow[indexedCell.r] || []).push(indexedCell);
    byRef[cellRef(indexedCell).toUpperCase()] = indexedCell;
  }

  /* Mark the non-anchor coordinates of every merge before deciding whether a
     row has content. That keeps merged-away values out of both markup and the
     row-presence test. */
  for (i = 0; i < cells.length; i++) {
    var merge = parseMerge(cells[i].merge);
    if (!merge) continue;
    anchors[cellRef(cells[i])] = merge;
    for (var mr = merge.r1; mr <= merge.r2; mr++) {
      for (var mc = merge.c1; mc <= merge.c2; mc++) {
        if (mr !== cells[i].r || mc !== cells[i].c) covered[colLetters(mc) + mr] = true;
      }
    }
  }

  /* A group is a contiguous outline-level-1 run and the first level-0 row
     after it. Group ids follow sheet order, so markup remains deterministic. */
  i = 1;
  while (i <= maxRow) {
    if (Number(rowMeta(i).outlineLevel) !== 1) { i++; continue; }
    var start = i;
    while (i <= maxRow && Number(rowMeta(i).outlineLevel) === 1) i++;
    if (i <= maxRow) {
      var group = { id: 'og-' + (groups.length + 1), start: start, end: i - 1, summary: i };
      groups.push(group);
      summaryGroups[group.summary] = group;
      for (var gr = group.start; gr <= group.end; gr++) detailGroups[gr] = group;
    }
  }

  var cWidth = Number(columnWidth(3)) || 0;
  var fWidth = Number(columnWidth(6)) || 0;
  var layout = cWidth >= 12 && fWidth >= 24 ? 'pick-note'
    : cWidth >= 12 ? 'pick'
    : fWidth >= 24 ? 'note'
    : 'standard';
  var html = '<div class="brw-grid brw-layout-' + layout + '" data-brw-grid="' + escapeAttr(gridId) + '">';

  for (var rowNumber = 1; rowNumber <= maxRow; rowNumber++) {
    if (hidden[rowNumber] || !rowHasRenderableCell(rowNumber)) continue;

    var detailGroup = detailGroups[rowNumber];
    var summaryGroup = summaryGroups[rowNumber];
    var rowClasses = 'brw-row';
    if (detailGroup) rowClasses += ' brw-og-row is-collapsed';
    if (summaryGroup) rowClasses += ' brw-og-summary';
    html += '<div class="' + rowClasses + '" data-brw-row="' + rowNumber + '"';
    if (detailGroup) html += ' data-brw-group="' + detailGroup.id + '"';
    if (summaryGroup) html += ' data-brw-group="' + summaryGroup.id + '"';
    html += '>';

    var rowCells = (byRow[rowNumber] || []).slice().sort(function (a, b) { return a.c - b.c; });
    for (var cellIndex = 0; cellIndex < rowCells.length; cellIndex++) {
      var cell = rowCells[cellIndex];
      var ref = cellRef(cell);
      if (cell.c < 2 || cell.c > 6 || covered[ref]) continue;

      var classes = 'brw-cell brw-col-' + colLetters(cell.c).toLowerCase()
        + ' brw-w-' + widthBucket(columnWidth(cell.c));
      if (cell.c === 2) classes += ' brw-label';
      if (cell.c === 3) classes += ' brw-hint';
      if (cell.c === 4) classes += ' brw-amount';
      if (cell.bold) classes += ' brw-bold';
      if (cell.italic) classes += ' brw-italic';
      if (cell.indent) classes += ' brw-ind-' + Math.max(0, Math.min(8, parseInt(cell.indent, 10) || 0));
      if (cell.ruleTop) classes += ' brw-rule-top';
      if (cell.ruleBottom) classes += ' brw-rule-bottom';

      var anchorMerge = anchors[ref];
      if (anchorMerge) {
        var span = Math.max(1, Math.min(5, anchorMerge.c2 - anchorMerge.c1 + 1));
        classes += ' brw-span-' + span;
      }

      html += '<div class="' + classes + '" data-brw-cell="' + ref + '">';
      if (summaryGroup && cell.c === 2) {
        var onclick = "BRW._gridToggle('" + escapeJSString(gridId) + "','" + summaryGroup.id + "')";
        html += '<button class="brw-og-toggle" type="button" data-brw-grid="' + escapeAttr(gridId)
          + '" data-brw-group="' + summaryGroup.id + '" aria-expanded="false" onclick="'
          + escapeAttr(onclick) + '">+</button>';
      }
      html += renderValue(cell) + '</div>';
    }
    html += '</div>';
  }

  return html + '</div>';
};

BRW._grids = BRW._grids || {};

BRW.mountGrid = function (containerId, sheetObj, opts) {
  opts = opts || {};
  var gridId = opts.gridId === undefined ? 'g' : String(opts.gridId);
  var renderOpts = {};
  for (var key in opts) if (Object.prototype.hasOwnProperty.call(opts, key)) renderOpts[key] = opts[key];
  renderOpts.gridId = gridId;

  var container = document.getElementById(containerId);
  if (!container) return '';
  BRW._grids[gridId] = { containerId: containerId };
  var html = BRW.renderGrid(sheetObj, renderOpts);
  container.innerHTML = html;
  return html;
};

BRW._gridToggle = function (gridId, groupId) {
  var mounted = BRW._grids[String(gridId)];
  if (!mounted) return;
  var container = document.getElementById(mounted.containerId);
  if (!container) return;

  var toggles = container.getElementsByClassName('brw-og-toggle');
  var rows = container.getElementsByClassName('brw-og-row');
  var expanded = false;
  var i;
  for (i = 0; i < toggles.length; i++) {
    if (toggles[i].getAttribute('data-brw-group') === String(groupId)) {
      expanded = toggles[i].getAttribute('aria-expanded') !== 'true';
      toggles[i].setAttribute('aria-expanded', expanded ? 'true' : 'false');
      toggles[i].textContent = expanded ? '−' : '+';
    }
  }
  for (i = 0; i < rows.length; i++) {
    if (rows[i].getAttribute('data-brw-group') !== String(groupId)) continue;
    if (expanded) rows[i].classList.remove('is-collapsed');
    else rows[i].classList.add('is-collapsed');
  }
  if (typeof window !== 'undefined' && window.playClick) window.playClick();
};

/* ===== BRW sorter (PART 5) =====
   The sorter is the thinking surface; renderGridWithPick is the live record.
   The render helpers below are deliberately DOM-free. mountSorter owns the
   event wiring and the small amount of selected-item UI state. */
BRW.sorterConfigFromPick = function (sheet, opts) {
  sheet = sheet || {};
  opts = opts || {};

  var labelColumn = Number(opts.labelColumn) || 2;
  var answerColumn = Number(opts.answerColumn) || 3;
  var amountColumn = Number(opts.amountColumn) || 4;
  var guidanceColumn = Number(opts.guidanceColumn) || 6;
  var byRow = {};
  var cells = sheet.cells || [];
  var items = [];
  var categories = [];
  var guidance = [];
  var seenCategories = {};
  var i;

  function present(value) {
    return value !== null && value !== undefined && String(value).trim() !== '';
  }

  for (i = 0; i < cells.length; i++) {
    var cell = cells[i];
    if (!byRow[cell.r]) byRow[cell.r] = {};
    byRow[cell.r][cell.c] = cell;
  }

  var rowNumbers = Object.keys(byRow).map(function (row) {
    return parseInt(row, 10);
  }).sort(function (a, b) { return a - b; });

  for (i = 0; i < rowNumbers.length; i++) {
    var row = rowNumbers[i];
    var rowCells = byRow[row];
    var labelCell = rowCells[labelColumn];
    var answerCell = rowCells[answerColumn];
    var amountCell = rowCells[amountColumn];
    var guidanceCell = rowCells[guidanceColumn];

    /* Pick answers are workbook rows, not headings such as C6 "Kind". The
       companion label and amount are part of the documented Pick-row shape. */
    if (answerCell && present(answerCell.value)
        && labelCell && present(labelCell.value)
        && amountCell && present(amountCell.value)) {
      var answer = String(answerCell.value).trim();
      items.push({
        row: row,
        label: String(labelCell.value),
        amount: amountCell.value,
        numFmt: amountCell.numFmt || 'General',
        answer: answer
      });
      if (!seenCategories[answer]) {
        seenCategories[answer] = true;
        categories.push(answer);
      }
    }

    if (guidanceCell && present(guidanceCell.value)) {
      guidance.push({ row: row, text: String(guidanceCell.value) });
    }
  }

  /* categoryOrder option added under Rick's one-time append-only exception, 2026-07-16 (point 3: Revenue above Expenses). */
  if (Array.isArray(opts.categoryOrder) && opts.categoryOrder.length) {
    var orderedCategories = [];
    var remainingCategories = categories.slice();
    for (i = 0; i < opts.categoryOrder.length; i++) {
      var categoryIndex = remainingCategories.indexOf(opts.categoryOrder[i]);
      if (categoryIndex !== -1) {
        orderedCategories.push(remainingCategories.splice(categoryIndex, 1)[0]);
      }
    }
    categories = orderedCategories.concat(remainingCategories);
  }

  return { items: items, categories: categories, guidance: guidance };
};

BRW.makeSorter = function (config) {
  config = config || {};
  var items = (config.items || []).map(function (item) {
    return {
      row: Number(item.row),
      label: item.label,
      amount: item.amount,
      numFmt: item.numFmt,
      answer: String(item.answer)
    };
  });
  var categories = (config.categories || []).map(function (category) {
    return String(category);
  });
  var diagnosticRows = (config.diagnosticRows || []).map(function (row) {
    return Number(row);
  });
  var minPerCategory = config.minPerCategory === undefined
    ? 1 : Math.max(0, Math.floor(Number(config.minPerCategory) || 0));
  var byRow = {};
  var categorySet = {};
  var placed = {};
  var handPlaced = {};
  var attempts = {};
  var i;

  for (i = 0; i < items.length; i++) byRow[String(items[i].row)] = items[i];
  for (i = 0; i < categories.length; i++) categorySet[categories[i]] = true;

  function handCount(category) {
    var count = 0;
    for (var row in handPlaced) {
      if (Object.prototype.hasOwnProperty.call(handPlaced, row)
          && placed[row] === category) count++;
    }
    return count;
  }

  var sorter = {
    items: items,
    categories: categories,

    attempt: function (row, category) {
      var key = String(Number(row));
      category = String(category);
      var item = byRow[key];
      if (!item || !categorySet[category]) return { correct: false };
      if (placed[key] !== undefined) return { correct: placed[key] === category };

      attempts[key] = (attempts[key] || 0) + 1;
      if (item.answer !== category) return { correct: false };
      placed[key] = category;
      handPlaced[key] = true;
      return { correct: true };
    },

    attemptsFor: function (row) {
      return attempts[String(Number(row))] || 0;
    },

    placedCount: function () {
      return Object.keys(placed).length;
    },

    isPlaced: function (row) {
      return placed[String(Number(row))] !== undefined;
    },

    placedCategory: function (row) {
      return placed[String(Number(row))];
    },

    placedItems: function (category) {
      return items.filter(function (item) {
        return placed[String(item.row)] === String(category);
      });
    },

    wasHandSorted: function (row) {
      return !!handPlaced[String(Number(row))];
    },

    restUnlocked: function () {
      for (var c = 0; c < categories.length; c++) {
        if (handCount(categories[c]) < minPerCategory) return false;
      }
      if (diagnosticRows.length) {
        var diagnosticMet = false;
        for (var d = 0; d < diagnosticRows.length; d++) {
          if (handPlaced[String(diagnosticRows[d])]) diagnosticMet = true;
        }
        if (!diagnosticMet) return false;
      }
      return true;
    },

    sortRest: function () {
      if (!sorter.restUnlocked()) return [];
      var rows = [];
      for (var n = 0; n < items.length; n++) {
        var item = items[n];
        var key = String(item.row);
        if (placed[key] !== undefined) continue;
        placed[key] = item.answer;
        rows.push(item.row);
      }
      return rows;
    },

    done: function () {
      return sorter.placedCount() === items.length;
    }
  };

  return sorter;
};

BRW.renderSortPanel = function (sorter, opts) {
  opts = opts || {};
  var selectedRow = opts.selectedRow === undefined || opts.selectedRow === null
    ? null : Number(opts.selectedRow);
  var guidance = opts.guidance || [];

  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(text) {
    return escapeHTML(text).replace(/`/g, '&#96;');
  }

  function itemMarkup(item, placedItem) {
    var classes = placedItem ? 'brw-sort-placed-item' : 'brw-sort-item';
    if (!placedItem && selectedRow === item.row) classes += ' brw-sort-selected';
    var html = '<div class="' + classes + '" data-row="' + item.row + '"';
    if (!placedItem) {
      html += ' data-brw-sort-row="' + item.row + '" draggable="true" tabindex="0" role="button"'
        + ' aria-pressed="' + (selectedRow === item.row ? 'true' : 'false') + '"';
    }
    html += '><span class="brw-sort-item-label">' + escapeHTML(item.label) + '</span>';
    if (item.amount !== null && item.amount !== undefined && item.amount !== '') {
      html += '<span class="brw-sort-item-amount">' + BRW.fmt(item.amount, item.numFmt) + '</span>';
    }
    return html + '</div>';
  }

  var doneClass = sorter.done() ? ' brw-sort-done' : '';
  var html = '<section class="brw-sort-panel' + doneClass + '" aria-label="Sort workbook rows">'
    + '<p class="brw-sort-instruction">'
    + escapeHTML(opts.instruction || 'Drag each row to its category, or select a row and then select a category.')
    + '</p><div class="brw-sort-layout"><div class="brw-sort-source">'
    + '<h3 class="brw-sort-heading">Rows to sort</h3><div class="brw-sort-items">';

  for (var i = 0; i < sorter.items.length; i++) {
    if (!sorter.isPlaced(sorter.items[i].row)) html += itemMarkup(sorter.items[i], false);
  }
  if (sorter.placedCount() === sorter.items.length) {
    html += '<p class="brw-sort-empty">All rows are sorted.</p>';
  }
  html += '</div></div><div class="brw-sort-targets"><h3 class="brw-sort-heading">Categories</h3>';

  for (var c = 0; c < sorter.categories.length; c++) {
    var category = sorter.categories[c];
    var seated = sorter.placedItems(category);
    html += '<section class="brw-sort-category"><h4 class="brw-sort-category-label">'
      + escapeHTML(category) + '</h4><div class="brw-sort-zone' + (seated.length ? ' brw-sort-zone-filled' : '')
      + '" data-cat="' + escapeAttr(category) + '" tabindex="0" role="button" aria-label="Place selected row in '
      + escapeAttr(category) + '">';
    if (!seated.length) html += '<span class="brw-sort-zone-empty">Drop or click to place</span>';
    for (var p = 0; p < seated.length; p++) html += itemMarkup(seated[p], true);
    html += '</div></section>';
  }

  html += '</div></div><div class="brw-sort-actions"><button type="button" class="brw-sort-rest"'
    + (sorter.restUnlocked() ? '' : ' disabled') + '>Sort the rest</button></div>';

  if (guidance.length) {
    html += '<aside class="brw-sort-guidance" aria-label="Workbook guidance"><h3 class="brw-sort-guidance-title">Guidance</h3>';
    for (var g = 0; g < guidance.length; g++) {
      html += '<p class="brw-sort-guidance-text" data-row="' + Number(guidance[g].row) + '">'
        + escapeHTML(guidance[g].text) + '</p>';
    }
    html += '</aside>';
  }

  return html + '</section>';
};

BRW.renderGridWithPick = function (sheet, opts) {
  sheet = sheet || {};
  opts = opts || {};
  var reveal = {};
  var flash = {};
  var i;
  for (i = 0; i < (opts.revealRows || []).length; i++) {
    reveal[String(Number(opts.revealRows[i]))] = true;
  }
  if (opts.flashRow !== undefined && opts.flashRow !== null) {
    flash[String(Number(opts.flashRow))] = true;
  }
  for (i = 0; i < (opts.flashRows || []).length; i++) {
    flash[String(Number(opts.flashRows[i]))] = true;
  }

  var answerRows = {};
  var config = BRW.sorterConfigFromPick(sheet, opts);
  for (i = 0; i < config.items.length; i++) answerRows[String(config.items[i].row)] = true;

  var clone = {};
  for (var key in sheet) {
    if (Object.prototype.hasOwnProperty.call(sheet, key) && key !== 'cells') clone[key] = sheet[key];
  }
  clone.cells = (sheet.cells || []).map(function (cell) {
    var copy = {};
    for (var cellKey in cell) {
      if (!Object.prototype.hasOwnProperty.call(cell, cellKey)) continue;
      var value = cell[cellKey];
      copy[cellKey] = Object.prototype.toString.call(value) === '[object Array]' ? value.slice() : value;
    }
    if (copy.c === 3 && answerRows[String(copy.r)] && !reveal[String(copy.r)]) copy.value = null;
    return copy;
  });

  var html = BRW.renderGrid(clone, opts);
  for (var row in flash) {
    if (!Object.prototype.hasOwnProperty.call(flash, row) || !reveal[row]) continue;
    var pattern = new RegExp('(<div class=")([^"]*)(" data-brw-cell="C' + row + '")');
    html = html.replace(pattern, '$1$2 brw-c-flash$3');
  }
  return html;
};

BRW.mountSorter = function (containerId, gridContainerId, sheet, opts) {
  opts = opts || {};
  var container = document.getElementById(containerId);
  var gridContainer = document.getElementById(gridContainerId);
  if (!container || !gridContainer) return null;

  var config = BRW.sorterConfigFromPick(sheet, opts);
  var sorter = BRW.makeSorter({
    items: config.items,
    categories: config.categories,
    diagnosticRows: opts.diagnosticRows || [],
    minPerCategory: opts.minPerCategory
  });
  var selectedRow = null;
  var completed = false;

  function revealedRows() {
    return sorter.items.filter(function (item) {
      return sorter.isPlaced(item.row);
    }).map(function (item) { return item.row; });
  }

  function addDoneClass() {
    if (container.classList && container.classList.add) container.classList.add('brw-sort-done');
    else if ((' ' + (container.className || '') + ' ').indexOf(' brw-sort-done ') < 0) {
      container.className = ((container.className || '') + ' brw-sort-done').replace(/^\s+/, '');
    }
  }

  function finishIfDone() {
    if (!sorter.done()) return;
    addDoneClass();
    if (!completed) {
      completed = true;
      if (typeof opts.onComplete === 'function') opts.onComplete();
    }
  }

  function renderGrid(flashRow, flashRows) {
    var gridOpts = {};
    for (var key in opts) if (Object.prototype.hasOwnProperty.call(opts, key)) gridOpts[key] = opts[key];
    gridOpts.revealRows = revealedRows();
    if (flashRow !== undefined && flashRow !== null) gridOpts.flashRow = flashRow;
    if (flashRows) gridOpts.flashRows = flashRows;
    gridContainer.innerHTML = BRW.renderGridWithPick(sheet, gridOpts);
  }

  function act(row, category) {
    var result = sorter.attempt(row, category);
    var count = sorter.attemptsFor(row);
    if (typeof opts.onAttempt === 'function') opts.onAttempt(row, category, result.correct, count);
    if (!result.correct) {
      if (typeof window !== 'undefined' && window.playSoftNope) window.playSoftNope();
      if (typeof opts.onWrong === 'function') opts.onWrong(row, category, count);
      return;
    }
    selectedRow = null;
    renderGrid(row);
    if (typeof window !== 'undefined' && window.playSuccess) window.playSuccess();
    renderPanel();
    finishIfDone();
  }

  function renderPanel() {
    var panelOpts = {};
    for (var key in opts) if (Object.prototype.hasOwnProperty.call(opts, key)) panelOpts[key] = opts[key];
    panelOpts.guidance = config.guidance;
    panelOpts.selectedRow = selectedRow;
    container.innerHTML = BRW.renderSortPanel(sorter, panelOpts);

    var items = container.querySelectorAll('[data-brw-sort-row]');
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener('click', function () {
        var row = Number(this.getAttribute('data-brw-sort-row'));
        selectedRow = selectedRow === row ? null : row;
        renderPanel();
      });
      items[i].addEventListener('keydown', function (event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        var row = Number(this.getAttribute('data-brw-sort-row'));
        selectedRow = selectedRow === row ? null : row;
        renderPanel();
      });
      items[i].addEventListener('dragstart', function (event) {
        selectedRow = null;
        event.dataTransfer.setData('text/plain', this.getAttribute('data-brw-sort-row'));
        event.dataTransfer.effectAllowed = 'move';
      });
    }

    var zones = container.querySelectorAll('.brw-sort-zone');
    for (var z = 0; z < zones.length; z++) {
      zones[z].addEventListener('dragover', function (event) {
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
      });
      zones[z].addEventListener('drop', function (event) {
        event.preventDefault();
        var row = Number(event.dataTransfer.getData('text/plain'));
        if (row) act(row, this.getAttribute('data-cat'));
      });
      zones[z].addEventListener('click', function () {
        if (selectedRow !== null) act(selectedRow, this.getAttribute('data-cat'));
      });
      zones[z].addEventListener('keydown', function (event) {
        if ((event.key !== 'Enter' && event.key !== ' ') || selectedRow === null) return;
        event.preventDefault();
        act(selectedRow, this.getAttribute('data-cat'));
      });
    }

    var rest = container.querySelector('.brw-sort-rest');
    if (rest) rest.addEventListener('click', function () {
      if (!sorter.restUnlocked()) return;
      var rows = sorter.sortRest();
      selectedRow = null;
      renderGrid(null, rows);
      if (typeof window !== 'undefined' && window.playSuccess) window.playSuccess();
      renderPanel();
      finishIfDone();
    });
  }

  renderGrid();
  renderPanel();
  finishIfDone();
  return sorter;
};

/* ===== Curated BRW sorter source list — approved amendment (2026-07-14) =====
   mountSorter already copies every caller option into panelOpts on each render,
   so showRows reaches this renderer without changing the sorter state machine. */
BRW.renderSortPanel = function (sorter, opts) {
  opts = opts || {};
  var selectedRow = opts.selectedRow === undefined || opts.selectedRow === null
    ? null : Number(opts.selectedRow);
  var guidance = opts.guidance || [];
  var curate = Object.prototype.toString.call(opts.showRows) === '[object Array]';
  var featured = {};
  var categoryFeatured = {};
  var itemByRow = {};
  var i;

  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(text) {
    return escapeHTML(text).replace(/`/g, '&#96;');
  }

  function featureRow(row) {
    var key = String(Number(row));
    var item = itemByRow[key];
    if (!item) return;
    featured[key] = true;
    categoryFeatured[String(item.answer)] = true;
  }

  function itemMarkup(item, placedItem) {
    var classes = placedItem ? 'brw-sort-placed-item' : 'brw-sort-item';
    if (!placedItem && selectedRow === item.row) classes += ' brw-sort-selected';
    var html = '<div class="' + classes + '" data-row="' + item.row + '"';
    if (!placedItem) {
      html += ' data-brw-sort-row="' + item.row + '" draggable="true" tabindex="0" role="button"'
        + ' aria-pressed="' + (selectedRow === item.row ? 'true' : 'false') + '"';
    }
    html += '><span class="brw-sort-item-label">' + escapeHTML(item.label) + '</span>';
    if (item.amount !== null && item.amount !== undefined && item.amount !== '') {
      html += '<span class="brw-sort-item-amount">' + BRW.fmt(item.amount, item.numFmt) + '</span>';
    }
    return html + '</div>';
  }

  for (i = 0; i < sorter.items.length; i++) {
    itemByRow[String(sorter.items[i].row)] = sorter.items[i];
  }
  if (curate) {
    for (i = 0; i < opts.showRows.length; i++) featureRow(opts.showRows[i]);

    /* Every named diagnostic stays hand-sortable, even if a page accidentally
       leaves it out of showRows. */
    for (i = 0; i < (opts.diagnosticRows || []).length; i++) {
      featureRow(opts.diagnosticRows[i]);
    }

    /* Ensure the unchanged per-category coverage gate can always be reached. */
    for (var c0 = 0; c0 < sorter.categories.length; c0++) {
      var neededCategory = String(sorter.categories[c0]);
      if (categoryFeatured[neededCategory]) continue;
      for (i = 0; i < sorter.items.length; i++) {
        if (String(sorter.items[i].answer) === neededCategory) {
          featureRow(sorter.items[i].row);
          break;
        }
      }
    }
  }

  var doneClass = sorter.done() ? ' brw-sort-done' : '';
  var html = '<section class="brw-sort-panel' + doneClass + '" aria-label="Sort workbook rows">'
    + '<p class="brw-sort-instruction">'
    + escapeHTML(opts.instruction || 'Drag each row to its category, or select a row and then select a category.')
    + '</p><div class="brw-sort-layout"><div class="brw-sort-source">'
    + '<h3 class="brw-sort-heading">Rows to sort</h3><div class="brw-sort-items">';
  var hiddenUnplaced = 0;

  for (i = 0; i < sorter.items.length; i++) {
    var sourceItem = sorter.items[i];
    if (sorter.isPlaced(sourceItem.row)) continue;
    if (!curate || featured[String(sourceItem.row)]) html += itemMarkup(sourceItem, false);
    else hiddenUnplaced++;
  }
  if (curate && hiddenUnplaced > 0) {
    html += '<div class="brw-sort-more">+' + hiddenUnplaced + ' others to be sorted</div>';
  }
  if (sorter.placedCount() === sorter.items.length) {
    html += '<p class="brw-sort-empty">All rows are sorted.</p>';
  }
  html += '</div></div><div class="brw-sort-targets"><h3 class="brw-sort-heading">Categories</h3>';

  for (var c = 0; c < sorter.categories.length; c++) {
    var category = sorter.categories[c];
    var seated = sorter.placedItems(category);
    html += '<section class="brw-sort-category"><h4 class="brw-sort-category-label">'
      + escapeHTML(category) + '</h4><div class="brw-sort-zone' + (seated.length ? ' brw-sort-zone-filled' : '')
      + '" data-cat="' + escapeAttr(category) + '" tabindex="0" role="button" aria-label="Place selected row in '
      + escapeAttr(category) + '">';
    if (!seated.length) html += '<span class="brw-sort-zone-empty">Drop or click to place</span>';
    for (var p = 0; p < seated.length; p++) html += itemMarkup(seated[p], true);
    html += '</div></section>';
  }

  html += '</div></div><div class="brw-sort-actions"><button type="button" class="brw-sort-rest"'
    + (sorter.restUnlocked() ? '' : ' disabled') + '>Sort the rest</button></div>';

  if (guidance.length) {
    html += '<aside class="brw-sort-guidance" aria-label="Workbook guidance"><h3 class="brw-sort-guidance-title">Guidance</h3>';
    for (var g = 0; g < guidance.length; g++) {
      html += '<p class="brw-sort-guidance-text" data-row="' + Number(guidance[g].row) + '">'
        + escapeHTML(guidance[g].text) + '</p>';
    }
    html += '</aside>';
  }

  return html + '</section>';
};

/* Dated balance lines are blue by rule (Rick 2026-07-16): after mounting a grid, mark every row whose label cell reads 'Balance, ...' — including group-summary rows whose label starts with the +/− toggle. */
BRW.markDatedRows = function (containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var rows = container.querySelectorAll('[data-brw-row]');
  for (var i = 0; i < rows.length; i++) {
    var label = rows[i].querySelector('.brw-col-b');
    if (!label) continue;
    var text = label.textContent.replace(/^[+\u2212-]\s*/, '').trim();
    if (text.indexOf('Balance,') === 0) rows[i].classList.add('brw-dated');
  }
};
