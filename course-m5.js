/* ============================================================================
 * course-m5.js — Module 5 (Real Statements) course wiring.
 * Kept OUT of shared.js on purpose: Module 5 introduces the corporate
 * vocabulary (Equity, Net assets) that lint-language.sh bans for M1-M4
 * surfaces. Per Rick's carve-out design, M5 vocabulary lives only in
 * M5-scoped files (5x-x pages, cvs-10k-data.js) and registry files.
 * Load AFTER shared.js; it appends to the course registries in place.
 * ========================================================================== */
if (typeof COURSE_TUTORIALS !== 'undefined') {
COURSE_TUTORIALS.push(
  { id:'m5t1', module:'Module 5 · Real Statements', num:'Tutorial 1', name:'Introduction', title:'5.1 Introduction', pages:[
    {f:'51-1-Module-5-Introduction.html', t:'Module 5 Introduction'} ] },
  { id:'m5t2', module:'Module 5 · Real Statements', num:'Tutorial 2', name:'The Statement Map', title:'5.2 The Statement Map', pages:[
    {f:'52-1-The-Statement-Map.html', t:'The Statement Map'} ] },
  { id:'m5t3', module:'Module 5 · Real Statements', num:'Tutorial 3', name:'The CVS Statement Walk', title:'5.3 The CVS Statement Walk', pages:[
    {f:'53-1-Two-Balance-Sheets.html', t:'Two Balance Sheets'}, {f:'53-2-The-Cash-Question.html', t:'The Cash Question'}, {f:'53-3-Read-the-Labels.html', t:'Read the Labels'}, {f:'53-4-The-Equity-Question.html', t:'The Equity Question'}, {f:'53-5-Where-Net-Income-Comes-From.html', t:'Where Net Income Comes From'}, {f:'53-6-The-Full-Architecture.html', t:'The Full Architecture'} ] }
);
}
if (typeof COURSE_DONE !== 'undefined') Object.assign(COURSE_DONE, {
  '52-1-The-Statement-Map.html': function(){ return typeof step !== 'undefined' && step >= 4; },
  '53-1-Two-Balance-Sheets.html': function(){ return typeof step !== 'undefined' && step >= 3; },
  '53-2-The-Cash-Question.html': function(){ return typeof step !== 'undefined' && step >= 4; },
  '53-3-Read-the-Labels.html': function(){ return typeof step !== 'undefined' && step >= 3; },
  '53-4-The-Equity-Question.html': function(){ return typeof step !== 'undefined' && step >= 7; },
  '53-5-Where-Net-Income-Comes-From.html': function(){ return typeof step !== 'undefined' && step >= 7; }
});
if (typeof COURSE_STEPS !== 'undefined') Object.assign(COURSE_STEPS, {
  '52-1-The-Statement-Map.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0) + 1, total: 5 }; },
  '53-1-Two-Balance-Sheets.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0) + 1, total: 4 }; },
  '53-2-The-Cash-Question.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0) + 1, total: 5 }; },
  '53-3-Read-the-Labels.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0) + 1, total: 4 }; },
  '53-4-The-Equity-Question.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0) + 1, total: 8 }; },
  '53-5-Where-Net-Income-Comes-From.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0) + 1, total: 8 }; }
});
if (typeof COURSE_GLOSSARY !== 'undefined') COURSE_GLOSSARY.push(
  { module:'Module 5 · Real Statements', tutorial:'', terms:[
    { term:'Equities', def:'The corporate label used here for the Reasons-side category of accounts: what owners contributed, what operations generated, and what was paid back out.' },
    { term:'Net assets', def:'A corporation&rsquo;s recorded Assets minus its recorded Liabilities.' },
    { term:'Noncontrolling interests', def:'The interests belonging to other owners when the accounting entity owns less than 100% of a legal entity included in its consolidated statements.' },
    { term:'Restrictive recognition', def:'The convention that information enters the formal accounting record only when the required evidence test is met, even when other information matters to value.' },
    { term:'Statement of Changes in Member&rsquo;s Capital', def:'The statement tells how Member&rsquo;s Capital changed pile by pile: Contributed (Beginning $2,290, no changes, Ending $2,290), Generated (Beginning $170 + Net income $2,640 = Ending $2,810), Withdrawn (Beginning &mdash;, Owner&rsquo;s draw ($600), Ending ($600)). Totals: $2,460 to $4,500.' },
    { term:'Consolidated', def:'The parent company and the subsidiaries it controls, reported together as one company.' },
    { term:'In millions', def:'Every figure on these statements is stated in millions of dollars.' },
    { term:'Direct method', def:'A Cash Flow Statement that lists actual cash receipts and payments by category. About 98% of US public companies use the indirect method instead; CVS is unusual.' },
    { term:'Restricted cash', def:'Cash the company holds but cannot freely spend; it sits inside other Balance Sheet lines, not in Cash and cash equivalents.' },
    { term:'Scope of a statement', def:'Each statement accounts for a change defined by its own labels &mdash; read the label to know exactly what changed.' },
    { term:'Statement of Shareholders&rsquo; Equity', def:'The statement that accounts for every change in equity during a period &mdash; earnings, dividends, stock-based compensation, share repurchases, OCI, and NCI activity.' },
    { term:'Earned &amp; Retained', def:'Equity built up by the business: Retained Earnings plus Accumulated Other Comprehensive Income (AOCI).' },
    { term:'Operating income', def:'Total revenues minus total operating costs, before non-operating items and tax.' },
    { term:'Comprehensive income', def:'Net income plus Other Comprehensive Income (OCI) &mdash; gains and losses that bypass Net income but still change equity.' },
    { term:'Explanatory statements', def:'The Income Statement, Statement of Shareholders&rsquo; Equity, and Cash Flow Statement &mdash; each accounts for part of the change between two Balance Sheets.' },
  ] }
);
