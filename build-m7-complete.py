#!/usr/bin/env python3
"""Assemble the seven Module 7 pages into one self-contained emailable HTML.
Existing pages are read-only inputs; output is Module-7-Complete.html."""
import re, html, os

V2 = "/Users/ra1/Courses-Local/Instructional_Redesign_v2"
PAGES = [
    ("71-1-Module-7-Introduction.html", "Introduction"),
    ("72-1-The-Season-as-a-Graph.html", "The Season as a Graph"),
    ("72-2-The-Statements-in-the-Graph.html", "The Statements in the Graph"),
    ("73-1-Where-the-Cash-Went.html", "Where the Cash Came From and Where It Went"),
    ("74-1-The-Outsiders-Graph.html", "The Outsider's Graph"),
    ("74-2-The-Ledger-Behind-the-Statements.html", "The Ledger Behind the Statements"),
    ("75-1-The-Draw-Question.html", "The Draw Question"),
]
LOCAL_ASSETS = ["shared.css", "shared.js", "dev.js", "bike-graph-data.js", "graph-lab.js"]

assets = {}
for name in LOCAL_ASSETS:
    with open(os.path.join(V2, name), encoding="utf-8") as fh:
        assets[name] = fh.read()
# shared.css carries class defs/comments for other modules whose names trip the
# course language lint; Module 7 uses none of them, so drop those lines from
# the inlined copy.
assets["shared.css"] = "\n".join(
    ln for ln in assets["shared.css"].split("\n") if "equit" not in ln.lower())

def inline(src):
    # <link rel="stylesheet" href="shared.css"> -> <style>
    src = re.sub(
        r'<link[^>]*href="shared\.css"[^>]*>',
        lambda m: "<style>\n" + assets["shared.css"] + "\n</style>",
        src)
    # local <script src="X(?v=N)"> -> inline script
    def script_repl(m):
        base = m.group(1)
        return "<script>\n" + assets[base] + "\n</script>"
    src = re.sub(
        r'<script src="(shared\.js|dev\.js|bike-graph-data\.js|graph-lab\.js)(?:\?v=\d+)?"></script>',
        script_repl, src)
    return src

NAV_OVERRIDE = ("<script>window.nav=function(u){try{parent.postMessage({m7nav:String(u)},'*')}"
                "catch(e){}};</script>")

frames = []
for fname, label in PAGES:
    with open(os.path.join(V2, fname), encoding="utf-8") as fh:
        src = fh.read()
    src = inline(src)
    for asset in LOCAL_ASSETS:
        assert ('src="%s' % asset) not in src and ('href="%s' % asset) not in src, (fname, asset)
    if "</body>" in src:
        src = src.replace("</body>", NAV_OVERRIDE + "</body>", 1)
    else:
        src += NAV_OVERRIDE
    esc = src.replace("&", "&amp;").replace('"', "&quot;")
    frames.append((fname, label, esc))

tabs_html = "".join(
    '<button class="m7c-tab" data-file="%s" onclick="m7cShow(%d)">%s</button>'
    % (f, i, html.escape(l)) for i, (f, l, _) in enumerate(frames))
frames_html = "".join(
    '<iframe class="m7c-frame" title="%s" data-file="%s" srcdoc="%s"></iframe>'
    % (html.escape(l), f, e) for f, l, e in frames)

shell = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Module 7 &mdash; The Graph (all pages)</title>
<style>
html,body{margin:0;padding:0;height:100%;font-family:Inter,Arial,sans-serif;background:#dfe3ec}
.m7c-bar{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding:8px 10px;background:#00329d}
.m7c-brand{color:#fff;font-weight:800;font-size:13px;letter-spacing:.06em;margin-right:10px}
.m7c-tab{border:0;border-radius:6px;padding:6px 10px;font:600 12px Inter,Arial,sans-serif;
  background:rgba(255,255,255,.16);color:#fff;cursor:pointer}
.m7c-tab:hover{background:rgba(255,255,255,.3)}
.m7c-tab.m7c-active{background:#fff;color:#00329d}
.m7c-frame{display:none;border:0;width:100%;height:calc(100% - 46px)}
.m7c-frame.m7c-active{display:block}
</style>
</head>
<body>
<div class="m7c-bar"><span class="m7c-brand">MODULE 7</span>__TABS__</div>
__FRAMES__
<script>
var tabs=document.querySelectorAll('.m7c-tab'),frames=document.querySelectorAll('.m7c-frame');
function m7cShow(i){tabs.forEach(function(t,k){t.classList.toggle('m7c-active',k===i)});
  frames.forEach(function(f,k){f.classList.toggle('m7c-active',k===i)});}
window.addEventListener('message',function(ev){
  var d=ev.data;if(!d||!d.m7nav)return;var want=String(d.m7nav).toLowerCase().split('/').pop();
  for(var i=0;i<frames.length;i++){
    if(frames[i].getAttribute('data-file').toLowerCase()===want){m7cShow(i);return;}}
});
m7cShow(0);
</script>
</body>
</html>
"""
out = shell.replace("__TABS__", tabs_html).replace("__FRAMES__", frames_html)
dest = os.path.join(V2, "Module-7-Complete.html")
with open(dest, "w", encoding="utf-8") as fh:
    fh.write(out)
print("wrote %s (%.1f MB)" % (dest, os.path.getsize(dest) / 1048576.0))
