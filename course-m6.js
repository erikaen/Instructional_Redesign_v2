/* ============================================================================
 * course-m6.js — Module 6 (Nonprofit Statements) course wiring.
 * Kept OUT of shared.js on purpose, exactly like course-m5.js: Module 6
 * introduces the nonprofit vocabulary (Net Assets, donor restrictions,
 * endowment) that lint-language.sh bans for M1-M4 surfaces. Per Rick's
 * carve-out design, M6 vocabulary lives only in M6-scoped files (6x-x pages,
 * yale-fy2025-data.js) and registry files.
 * Load AFTER shared.js; it appends to the course registries in place.
 * ========================================================================== */
if (typeof COURSE_TUTORIALS !== 'undefined') {
COURSE_TUTORIALS.push(
  { id:'m6t1', module:'Module 6 · Nonprofit Statements', num:'Tutorial 1', name:'Introduction', title:'6.1 Introduction', pages:[
    {f:'61-1-Module-6-Introduction.html', t:'Module 6 Introduction'} ] },
  { id:'m6t2', module:'Module 6 · Nonprofit Statements', num:'Tutorial 2', name:'A Nonprofit Statement Map', title:'6.2 A Nonprofit Statement Map', pages:[
    {f:'62-1-A-Nonprofit-Statement-Map.html', t:'A Nonprofit Statement Map'} ] },
  { id:'m6t3', module:'Module 6 · Nonprofit Statements', num:'Tutorial 3', name:'The Yale Statement Walk', title:'6.3 The Yale Statement Walk', pages:[
    {f:'63-1-The-Statement-of-Financial-Position.html', t:'The Statement of Financial Position'}, {f:'63-2-The-Cash-Question.html', t:'The Cash Question'}, {f:'63-3-Read-the-Labels.html', t:'Read the Labels'}, {f:'63-4-The-Net-Assets-Question.html', t:'The Net Assets Question'}, {f:'63-5-Releases-and-the-Endowment.html', t:'Releases and the Endowment'}, {f:'63-6-The-Full-Architecture.html', t:'The Full Architecture'} ] }
);
}
if (typeof COURSE_DONE !== 'undefined') Object.assign(COURSE_DONE, {
  '63-1-The-Statement-of-Financial-Position.html': function(){ return typeof step !== 'undefined' && step >= 4; },
  '63-2-The-Cash-Question.html': function(){ return typeof step !== 'undefined' && step >= 4; },
  '63-3-Read-the-Labels.html': function(){ return typeof step !== 'undefined' && step >= 3; },
  '63-4-The-Net-Assets-Question.html': function(){ return typeof step !== 'undefined' && step >= 5; },
  '63-5-Releases-and-the-Endowment.html': function(){ return typeof step !== 'undefined' && step >= 4; }
});
if (typeof COURSE_STEPS !== 'undefined') Object.assign(COURSE_STEPS, {
  '63-1-The-Statement-of-Financial-Position.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 4 }; },
  '63-2-The-Cash-Question.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 4 }; },
  '63-3-Read-the-Labels.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 3 }; },
  '63-4-The-Net-Assets-Question.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 5 }; },
  '63-5-Releases-and-the-Endowment.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 4 }; }
});
if (typeof COURSE_GLOSSARY !== 'undefined') COURSE_GLOSSARY.push(
  { module:'Module 6 · Nonprofit Statements', tutorial:'', terms:[
    { term:'Net Assets', def:'Recorded assets minus recorded liabilities for a nonprofit. It is a computed difference, not a pool of cash or an ownership claim.' },
    { term:'Donor restriction', def:'A binding purpose or time constraint imposed by an outside donor.' },
    { term:'Board designation', def:'A statement of intent the board can change. It is not a donor restriction, so the amount remains Without Donor Restrictions.' },
    { term:'Released from restrictions', def:'Amounts reclassified from With to Without when a donor&rsquo;s purpose or time condition is met; total net assets stay unchanged.' },
    { term:'Endowment', def:'Invested resources held to support the institution over time, often subject to donor restrictions or board designations and a spending policy.' },
    { term:'Statement of Financial Position', def:'A nonprofit&rsquo;s balance sheet: recorded assets, liabilities, and Net Assets at a date.' },
    { term:'Statement of Activities', def:'The nonprofit statement that explains change in net assets and combines the work of a for-profit income statement and statement of changes in equity.' }
  ] }
);
