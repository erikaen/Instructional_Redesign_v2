(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var boardSerial = 0;
  var GENERATED_MEMBERS = ['rev', 'pexp', 'rent', 'depx', 'wage'];
  var ASSET_IDS = ['cash', 'ar', 'rou', 'parts', 'tools', 'fix', 'laptop'];
  var LIAB_IDS = ['cc', 'dep'];

  function injectStyle() {
    if (document.getElementById('gl-shared-style')) return;
    var style = document.createElement('style');
    style.id = 'gl-shared-style';
    style.textContent = `
      :root {
        --gl-asset:#286dc0; --gl-liab:#bd5319; --gl-reason:#6750a4;
        --gl-genmember:#2f7b72; --gl-region-line:#9aa8bc; --gl-ink:#00329d;
        --gl-panel:#f0f4f8; --gl-accent:#bd5319; --gl-pulse:#f2b544;
      }
      .gl-board{background:var(--gl-panel);font-family:Inter,Arial,sans-serif;color:var(--gl-ink)}
      .gl-region{fill:none;stroke:var(--gl-region-line);stroke-width:1.5;stroke-dasharray:4 5;opacity:.58}
      .gl-region-label{font:700 11px Inter,Arial,sans-serif;letter-spacing:.14em;fill:var(--gl-ink);opacity:.63}
      .gl-generated.gl-hi .gl-region{stroke:var(--gl-accent);stroke-width:4;opacity:1}
      .gl-arrow-path{fill:none;stroke:var(--gl-ink);stroke-width:2.25;opacity:.84}
      .gl-arrow-hit{fill:none;stroke:transparent;stroke-width:18;pointer-events:stroke}
      .gl-arrow-label{font:700 12px ui-monospace,SFMono-Regular,Menlo,monospace;fill:var(--gl-ink);paint-order:stroke;stroke:var(--gl-panel);stroke-width:4px;stroke-linejoin:round}
      .gl-tag-infer .gl-arrow-path{stroke-dasharray:8 5}
      .gl-tag-open{opacity:.22}.gl-tag-open .gl-arrow-label{display:none}
      .gl-node ellipse{stroke:rgba(0,0,0,.16);stroke-width:1.2}
      .gl-node-label{font:700 12px Inter,Arial,sans-serif;fill:#fff;text-anchor:middle;pointer-events:none}
      .gl-node[data-region="assets"] ellipse{fill:var(--gl-asset)}
      .gl-node[data-region="liab"] ellipse{fill:var(--gl-liab)}
      .gl-node[data-region="reasons"] ellipse{fill:var(--gl-reason)}
      .gl-node[data-sub="generated"] ellipse{fill:var(--gl-genmember);stroke:#fff;stroke-width:2;stroke-dasharray:5 3}
      .gl-node.gl-placeholder{opacity:.28}.gl-node.gl-channel ellipse{fill:var(--gl-asset);stroke:#fff;stroke-width:2}
      .gl-channel-box{fill:none;stroke:var(--gl-region-line);stroke-width:1.5;stroke-dasharray:3 5}
      .gl-channel-title{font:700 11px Inter,Arial,sans-serif;letter-spacing:.06em;fill:var(--gl-ink)}
      .gl-badge rect{fill:var(--gl-panel);stroke:var(--gl-accent);stroke-width:1.35}
      .gl-badge text{font:700 11px ui-monospace,SFMono-Regular,Menlo,monospace;fill:var(--gl-ink);font-variant-numeric:tabular-nums;text-anchor:middle}
      .gl-gen-badge rect{fill:var(--gl-panel);stroke:var(--gl-accent)}
      .gl-fan-strand{fill:none;stroke:var(--gl-accent);stroke-width:1.15;opacity:.72}
      .gl-fan-label{font:9px Inter,Arial,sans-serif;fill:var(--gl-ink);paint-order:stroke;stroke:var(--gl-panel);stroke-width:3px}
      .gl-arrow-tip{display:none;pointer-events:none}.gl-arrow:hover .gl-arrow-tip{display:block}
      .gl-arrow-tip rect{fill:var(--gl-panel);stroke:var(--gl-ink);stroke-width:1}.gl-arrow-tip text{font:10px Inter,Arial,sans-serif;fill:var(--gl-ink)}
      .gl-dim .gl-arrow,.gl-dim .gl-node,.gl-dim .gl-generated{opacity:.14}
      .gl-dim .gl-hi{opacity:1}.gl-hi .gl-arrow-path{stroke:var(--gl-accent);stroke-width:4}.gl-hi ellipse{stroke:var(--gl-accent);stroke-width:4}
      .gl-pulse{animation:glPulse .72s ease-out}.gl-moved{animation:glMove .72s ease-out}
      @keyframes glPulse{0%{fill:var(--gl-pulse);font-size:18px}100%{fill:var(--gl-ink);font-size:12px}}
      @keyframes glMove{0%{background:var(--gl-pulse)}100%{background:transparent}}
      .gl-col{box-sizing:border-box;background:var(--gl-panel);border:1px solid #d1d5db;border-radius:7px;padding:12px;color:var(--gl-ink);font:12px Inter,Arial,sans-serif;min-width:210px}
      .gl-col h3{font-size:15px;margin:0 0 3px}.gl-col-sub{font-size:11px;opacity:.68;margin-bottom:10px}
      .gl-col-section{font-size:10px;text-transform:uppercase;letter-spacing:.12em;font-weight:800;margin:10px 0 3px}
      .gl-col-line,.gl-col-total{display:flex;justify-content:space-between;gap:10px;padding:3px 4px;font-variant-numeric:tabular-nums}
      .gl-col-line[data-acct]{cursor:default}.gl-col-line.gl-hi{background:#fff0dc;outline:1px solid var(--gl-accent)}
      .gl-col-total{font-weight:800;border-top:1px solid var(--gl-ink);margin-top:2px}
      .gl-col-ident{font:700 11px ui-monospace,SFMono-Regular,Menlo,monospace;border-top:2px double var(--gl-ink);margin-top:10px;padding-top:7px;text-align:center}
    `;
    document.head.appendChild(style);
  }

  function S(tag, attrs, text) {
    var el = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (key) { el.setAttribute(key, attrs[key]); });
    if (text != null) el.textContent = text;
    return el;
  }
  function pairKey(from, to) { return from + '>' + to; }
  function money(n) { return Math.round(n).toLocaleString('en-US'); }
  function signed(n) { return (n >= 0 ? '+' : '−') + money(Math.abs(n)); }
  function sum(ids, values) { return ids.reduce(function (total, id) { return total + (values[id] || 0); }, 0); }

  /* Obstacle-aware nested cubic router factored from the four source tools. */
  var Router = (function () {
    var PAD = 16;
    function rimPt(c, tx, ty) {
      var dx = tx - c.x, dy = ty - c.y;
      var k = Math.hypot(dx / c.rx, dy / c.ry) || 1;
      return { x: c.x + dx / k, y: c.y + dy / k };
    }
    function cubicAt(P0, P1, P2, P3, t) {
      var u = 1 - t;
      return { x:u*u*u*P0.x + 3*u*u*t*P1.x + 3*u*t*t*P2.x + t*t*t*P3.x,
        y:u*u*u*P0.y + 3*u*u*t*P1.y + 3*u*t*t*P2.y + t*t*t*P3.y };
    }
    function arc(A, B, perp, h, side) {
      var dx=B.x-A.x, dy=B.y-A.y, ox=perp.x*h*side, oy=perp.y*h*side;
      var P1={x:A.x+dx*.25+ox,y:A.y+dy*.25+oy}, P2={x:A.x+dx*.75+ox,y:A.y+dy*.75+oy};
      return {P0:rimPt(A,P1.x,P1.y),P1:P1,P2:P2,P3:rimPt(B,P2.x,P2.y)};
    }
    function worstPen(c, obs) {
      var w=-Infinity;
      for(var t=0;t<=1.0001;t+=.05){var p=cubicAt(c.P0,c.P1,c.P2,c.P3,t);obs.forEach(function(o){
        var pen=1-Math.hypot((p.x-o.x)/(o.rx+PAD),(p.y-o.y)/(o.ry+PAD));if(pen>w)w=pen;
      });}
      return w;
    }
    function liftClear(A,B,perp,side,h0,obs){var h=h0,best=null,bp=Infinity;
      for(var i=0;i<22;i++){var c=arc(A,B,perp,h,side),w=worstPen(c,obs);if(w<bp){bp=w;best={c:c,h:h};}if(w<0)break;h+=14;if(h>340)break;}
      return {c:best.c,h:best.h,pen:bp};
    }
    function routeOne(A,B,obs,opts){opts=opts||{};var dx=B.x-A.x,dy=B.y-A.y,L=Math.hypot(dx,dy)||1,perp={x:dy/L,y:-dx/L};
      if(perp.y>0)perp={x:-perp.x,y:-perp.y};var h0=Math.max(opts.h0Min||0,L>300?34+.14*L:16);
      var fin=function(r,sd){return {curve:r.c,h:r.h,side:sd,apex:cubicAt(r.c.P0,r.c.P1,r.c.P2,r.c.P3,.5)};};
      if(opts.forceSide)return fin(liftClear(A,B,perp,opts.forceSide,h0,obs),opts.forceSide);
      var up=liftClear(A,B,perp,1,h0,obs),dn=liftClear(A,B,perp,-1,h0,obs),uC=up.pen<0,dC=dn.pen<0,pick,side;
      if(uC&&dC){if(Math.abs(up.h-dn.h)<8){pick=up;side=1;}else{pick=up.h<=dn.h?up:dn;side=up.h<=dn.h?1:-1;}}
      else if(uC){pick=up;side=1;}else if(dC){pick=dn;side=-1;}else{pick=up.pen<dn.pen?up:dn;side=up.pen<dn.pen?1:-1;}return fin(pick,side);
    }
    function routeAll(edges,nodes,visibleIds){var groups={},out={};
      edges.forEach(function(e){var key=[e.from,e.to].sort().join('|');(groups[key]=groups[key]||[]).push(e);});
      Object.keys(groups).forEach(function(k){var g=groups[k],obs=function(f,t){return visibleIds.filter(function(id){return id!==f&&id!==t;}).map(function(id){return nodes[id];});};
        var lead=routeOne(nodes[g[0].from],nodes[g[0].to],obs(g[0].from,g[0].to),{});out[g[0].id]=lead;
        for(var j=1;j<g.length;j++)out[g[j].id]=routeOne(nodes[g[j].from],nodes[g[j].to],obs(g[j].from,g[j].to),{forceSide:lead.side,h0Min:lead.h+40+(j-1)*30});
      });return out;
    }
    return {routeAll:routeAll};
  })();

  function createBoard(svgEl, data, opts) {
    injectStyle(); opts = opts || {};
    var serial = ++boardSerial, markerId = 'gl-arrowhead-' + serial;
    var byId = {}; data.entries.forEach(function (e) { byId[e.id] = e; });
    var world = 'D', posted = [], collapse = false, channels = null, tags = {}, fanPair = null;
    var hi = null, hoverCallbacks = [], columns = [], prevTotals = {};
    var dIds = data.entries.filter(function(e){return e.id !== 'wagex';}).map(function(e){return e.id;});
    var wIds = data.entries.filter(function(e){return e.id !== 'draw';}).map(function(e){return e.id;});
    svgEl.classList.add('gl-board'); svgEl.setAttribute('viewBox','0 0 1000 660');

    function legalIds(){return world==='W'?wIds:dIds;}
    function entries(){return posted.map(function(id){return byId[id];}).filter(Boolean);}
    function deltas(){
      var out={}; Object.keys(data.nodes).forEach(function(id){out[id]=0;});Object.keys(data.bs).forEach(function(id){out[id]=0;});
      entries().forEach(function(e){
        if(out[e.from] != null) out[e.from] += data.nodes[e.from] && data.nodes[e.from].region==='assets' ? -e.w : e.w;
        if(out[e.to] != null) out[e.to] += e.to==='wd' || (data.nodes[e.to] && data.nodes[e.to].region==='assets') ? e.w : -e.w;
      });
      out.gen=0;entries().forEach(function(e){if(e.from==='rev')out.gen+=e.w;if(['pexp','rent','depx','wage'].indexOf(e.to)>=0)out.gen-=e.w;});
      return out;
    }
    function levels(){var ds=deltas(),out={};Object.keys(data.bs).forEach(function(id){out[id]=data.bs[id].beg+(ds[id]||0);});return out;}
    function identityGap(){var lv=levels();return sum(ASSET_IDS,lv)-sum(LIAB_IDS,lv)-((lv.contrib||0)+(lv.gen||0)-(lv.wd||0));}
    function mappedId(id,e){
      if(collapse && GENERATED_MEMBERS.indexOf(id)>=0)return 'gen';
      if(channels && id==='cash' && channels[e.id])return channels[e.id];
      return id;
    }
    function mappedEdges(){var groups={};entries().forEach(function(e){var f=mappedId(e.from,e),t=mappedId(e.to,e);if(f===t)return;var k=pairKey(f,t);
      if(!groups[k])groups[k]={id:k,from:f,to:t,w:0,items:[]};groups[k].w+=e.w;groups[k].items.push(e);
      });return Object.keys(groups).map(function(k){return groups[k];});
    }
    function graphNodes(edges){
      var nodes={};Object.keys(data.nodes).forEach(function(id){var n=data.nodes[id];nodes[id]={id:id,label:n.label,region:n.region,sub:n.sub,x:n.x,y:n.y,rx:Math.max(42,n.label.length*4.1+13),ry:25};});
      nodes.gen={id:'gen',label:'GENERATED',region:'reasons',sub:'generated',x:785,y:505,rx:150,ry:105};
      nodes.cfo={id:'cfo',label:'CFO',region:'assets',x:240,y:240,rx:42,ry:24};
      nodes.cfi={id:'cfi',label:'CFI',region:'assets',x:240,y:340,rx:42,ry:24};
      nodes.cff={id:'cff',label:'CFF',region:'assets',x:240,y:440,rx:42,ry:24};
      var visible={};edges.forEach(function(e){visible[e.from]=true;visible[e.to]=true;});
      delete visible.rou;delete visible.contrib;
      return {all:nodes,visible:visible};
    }
    function channelDelta(id){var n=0;entries().forEach(function(e){if(channels&&channels[e.id]===id){if(e.to==='cash')n+=e.w;if(e.from==='cash')n-=e.w;}});return n;}
    function nodeDelta(id){if(id==='gen')return deltas().gen;if(['cfo','cfi','cff'].indexOf(id)>=0)return channelDelta(id);return deltas()[id]||0;}
    function addBadge(parent,x,y,value,extra){var txt=signed(value),width=Math.max(38,txt.length*8+12),g=S('g',{class:'gl-badge '+(extra||'')});
      g.appendChild(S('rect',{x:x-width/2,y:y-15,width:width,height:22,rx:4}));g.appendChild(S('text',{x:x,y:y},txt));parent.appendChild(g);return g;}
    function addRegions(root, visible) {
      var specs=[['assets',40,60,520,580,'ASSETS'],['liabilities',600,60,360,140,'LIABILITIES'],['reasons',600,240,360,400,'REASONS']];
      specs.forEach(function(r){var g=S('g',{class:'gl-region-group gl-region-'+r[0]});g.appendChild(S('rect',{class:'gl-region',x:r[1],y:r[2],width:r[3],height:r[4],rx:18}));g.appendChild(S('text',{class:'gl-region-label',x:r[1]+14,y:r[2]+20},r[5]));root.appendChild(g);});
      var genTouched=GENERATED_MEMBERS.some(function(id){return visible[id];})||visible.gen;
      var gg=S('g',{class:'gl-generated'+(hi&&hi.nodes.indexOf('gen')>=0?' gl-hi':''),'data-id':'gen'});
      gg.appendChild(S('rect',{class:'gl-region',x:615,y:380,width:340,height:250,rx:18}));gg.appendChild(S('text',{class:'gl-region-label',x:630,y:400},'GENERATED'));
      if(genTouched)addBadge(gg,900,401,deltas().gen,'gl-gen-badge');root.appendChild(gg);
    }
    function tagFor(edge){if(tags[edge.id])return tags[edge.id];for(var i=0;i<edge.items.length;i++)if(tags[edge.items[i].id])return tags[edge.items[i].id];return 'fact';}
    function pathText(c){return 'M'+c.P0.x.toFixed(1)+','+c.P0.y.toFixed(1)+' C'+c.P1.x.toFixed(1)+','+c.P1.y.toFixed(1)+' '+c.P2.x.toFixed(1)+','+c.P2.y.toFixed(1)+' '+c.P3.x.toFixed(1)+','+c.P3.y.toFixed(1);}
    function tipLines(edge){var fixed={dana:'Dana R.',rest:'Other repairs',danaP:'Dana parts',restP:'Other parts'};return edge.items.map(function(e){return (fixed[e.id]||e.caption.split(/[ —;.-]/)[0]||e.id)+' $'+money(e.w);});}
    function fireHover(payload){hoverCallbacks.forEach(function(cb){cb(payload);});}
    function drawArrow(parent,edge,route){var tag=tagFor(edge),active=hi&&hi.pairs.indexOf(edge.id)>=0;
      var g=S('g',{class:'gl-arrow gl-tag-'+tag+(active?' gl-hi':''),'data-pair':edge.id,'data-total':edge.w});var d=pathText(route.curve);
      g.appendChild(S('path',{class:'gl-arrow-hit',d:d}));g.appendChild(S('path',{class:'gl-arrow-path',d:d,'marker-end':'url(#'+markerId+')'}));
      var ly=route.apex.y+(route.side>0?-8:16),pulse=(prevTotals[edge.id]!=null&&edge.w>prevTotals[edge.id]);
      g.appendChild(S('text',{class:'gl-arrow-label'+(pulse?' gl-pulse':''),x:route.apex.x,y:ly,'text-anchor':'middle'},'$'+money(edge.w)));
      if(edge.items.length>1){var lines=tipLines(edge),tip=S('g',{class:'gl-arrow-tip'}),w=Math.max.apply(null,lines.map(function(x){return x.length;}))*6+16;
        tip.appendChild(S('rect',{x:route.apex.x-w/2,y:ly+7,width:w,height:lines.length*15+9,rx:4}));lines.forEach(function(line,i){tip.appendChild(S('text',{x:route.apex.x-w/2+8,y:ly+22+i*15},line));});g.appendChild(tip);}
      g.addEventListener('mouseenter',function(){fireHover({kind:'arrow',id:edge.id});});g.addEventListener('mouseleave',function(){fireHover(null);});parent.appendChild(g);
    }
    function drawFan(parent,edge,route,nodes){if(fanPair!==edge.id||!data.fan)return;var a=nodes[edge.from],b=nodes[edge.to],dx=b.x-a.x,dy=b.y-a.y,L=Math.hypot(dx,dy)||1,px=dy/L,py=-dx/L,n=data.fan.length;
      data.fan.forEach(function(item,i){var o=(i-(n-1)/2)*5.2,mx=(a.x+b.x)/2+px*o*2,my=(a.y+b.y)/2+py*o*2;
        var p=S('path',{class:'gl-fan-strand','data-amt':item.amt,d:'M'+a.x+','+a.y+' Q'+mx+','+my+' '+b.x+','+b.y});parent.appendChild(p);
        var t=.25+(i%5)*.105,x=(1-t)*(1-t)*a.x+2*(1-t)*t*mx+t*t*b.x,y=(1-t)*(1-t)*a.y+2*(1-t)*t*my+t*t*b.y+(i%2?7:-4);
        parent.appendChild(S('text',{class:'gl-fan-label',x:x,y:y,'text-anchor':'middle'},item.who+' $'+money(item.amt)));
      });}
    function drawNode(parent,node,isPlaceholder){var active=hi&&hi.nodes.indexOf(node.id)>=0,g=S('g',{class:'gl-node'+(active?' gl-hi':'')+(isPlaceholder?' gl-placeholder':'')+(['cfo','cfi','cff'].indexOf(node.id)>=0?' gl-channel':''),'data-id':node.id,'data-region':node.region,'data-sub':node.sub||''});
      g.appendChild(S('ellipse',{cx:node.x,cy:node.y,rx:node.rx,ry:node.ry}));g.appendChild(S('text',{class:'gl-node-label',x:node.x,y:node.y+4},node.label));addBadge(g,node.x,node.y-node.ry-9,nodeDelta(node.id));
      g.addEventListener('mouseenter',function(){fireHover({kind:'node',id:node.id});});g.addEventListener('mouseleave',function(){fireHover(null);});parent.appendChild(g);}
    function render(){
      var edges=mappedEdges(),ng=graphNodes(edges),nodes=ng.all,visible=ng.visible;svgEl.innerHTML='';svgEl.classList.toggle('gl-dim',!!hi);
      var defs=S('defs',{}),marker=S('marker',{id:markerId,viewBox:'0 0 10 10',refX:8.5,refY:5,markerWidth:7,markerHeight:7,orient:'auto-start-reverse'});marker.appendChild(S('path',{d:'M0,0 L10,5 L0,10 z',fill:'var(--gl-ink)'}));defs.appendChild(marker);svgEl.appendChild(defs);
      var regions=S('g',{class:'gl-regions'});addRegions(regions,visible);svgEl.appendChild(regions);
      if(channels){var cg=S('g',{class:'gl-channel-enclosure'});cg.appendChild(S('rect',{class:'gl-channel-box',x:165,y:195,width:150,height:285,rx:20}));cg.appendChild(S('text',{class:'gl-channel-title',x:178,y:216},'Cash, in detail'));svgEl.appendChild(cg);}
      var routeEdges=edges.map(function(e){return {id:e.id,from:e.from,to:e.to};}),ids=Object.keys(visible),routes=Router.routeAll(routeEdges,nodes,ids),fanG=S('g',{class:'gl-fans'}),arrows=S('g',{class:'gl-arrows'});
      edges.forEach(function(e){if(routes[e.id])drawFan(fanG,e,routes[e.id],nodes);});svgEl.appendChild(fanG);
      edges.forEach(function(e){if(routes[e.id])drawArrow(arrows,e,routes[e.id]);});svgEl.appendChild(arrows);
      var nodeG=S('g',{class:'gl-nodes'});Object.keys(visible).forEach(function(id){if(id==='gen')return;drawNode(nodeG,nodes[id],channels&&id==='cash');});svgEl.appendChild(nodeG);
      prevTotals={};edges.forEach(function(e){prevTotals[e.id]=e.w;});columns.forEach(function(c){renderColumn(c.el,data,board,c.opts,true);});
    }
    var board={
      setPosted:function(ids){var wanted=(ids==='all'||ids==='season')?legalIds():ids||[];var legal=legalIds();posted=[];wanted.forEach(function(id){if(legal.indexOf(id)>=0&&posted.indexOf(id)<0)posted.push(id);});render();return board;},
      post:function(ids){if(!Array.isArray(ids))ids=[ids];var next=posted.slice();ids.forEach(function(id){if(next.indexOf(id)<0)next.push(id);});return board.setPosted(next);},
      reset:function(){posted=[];render();return board;},setWorld:function(v){world=v==='W'?'W':'D';posted=posted.filter(function(id){return legalIds().indexOf(id)>=0;});render();return board;},
      setCollapse:function(v){collapse=!!v;render();return board;},setChannels:function(v){channels=v||null;render();return board;},setTags:function(v){tags=v||{};render();return board;},setFan:function(v){fanPair=v||null;render();return board;},
      highlight:function(v){hi={nodes:(v&&v.nodes)||[],pairs:(v&&v.pairs)||[]};render();return board;},clearHighlight:function(){hi=null;render();return board;},
      onHover:function(cb){if(typeof cb==='function')hoverCallbacks.push(cb);return board;},levels:levels,deltas:deltas,identityGap:identityGap,
      _registerColumn:function(el,o){var old=columns.filter(function(c){return c.el===el;})[0];if(old)old.opts=o;else columns.push({el:el,opts:o});},_data:function(){return {collapse:collapse};}
    };
    render();return board;
  }

  function renderColumn(el,data,board,opts,internal){
    injectStyle();opts=opts||{};var vals=opts.side==='beg'?Object.keys(data.bs).reduce(function(o,id){o[id]=data.bs[id].beg;return o;},{}):board.levels();
    var previous={};el.querySelectorAll('[data-acct]').forEach(function(line){previous[line.getAttribute('data-acct')]=Number(line.getAttribute('data-value'));});
    function line(id,label,value,display){var moved=previous[id]!=null&&previous[id]!==value;return '<div class="gl-col-line'+(moved?' gl-moved':'')+'" data-acct="'+id+'" data-value="'+value+'"><span>'+label+'</span><span class="gl-col-value">'+(display||money(value))+'</span></div>';}
    var title=opts.christened?opts.title:'Where we stand',assets=sum(ASSET_IDS,vals),liabs=sum(LIAB_IDS,vals),mc=(vals.contrib||0)+(vals.gen||0)-(vals.wd||0),ok=assets-liabs-mc===0;
    var labels={cash:'Cash',ar:'Receivables',rou:'Right of Use',parts:'Parts',tools:'Tools & Equip',fix:'Fixtures',laptop:'Laptop',cc:'Credit Card',dep:'Customer Deposit'};
    var html='<h3 class="gl-col-title">'+title+'</h3><div class="gl-col-sub">'+(opts.sub||'')+'</div><div class="gl-col-section">Assets</div>';
    ASSET_IDS.forEach(function(id){html+=line(id,labels[id],vals[id]||0);});html+='<div class="gl-col-total" data-total="assets"><span>Total Assets</span><span>'+money(assets)+'</span></div><div class="gl-col-section">Liabilities</div>';
    LIAB_IDS.forEach(function(id){html+=line(id,labels[id],vals[id]||0);});html+='<div class="gl-col-total" data-total="liabilities"><span>Total Liabilities</span><span>'+money(liabs)+'</span></div><div class="gl-col-section">Member’s Capital</div>';
    html+=line('contrib','Contributed',vals.contrib||0)+line('gen','Generated',vals.gen||0)+line('wd','Withdrawn',vals.wd||0,(vals.wd||0)?'('+money(vals.wd)+')':'0');
    html+='<div class="gl-col-total" data-total="mc" data-value="'+mc+'"><span>Member’s Capital</span><span class="gl-col-value">'+money(mc)+'</span></div><div class="gl-col-ident">A − L = MC '+(ok?'✓':'✗')+' · '+money(assets)+' − '+money(liabs)+' = '+money(mc)+'</div>';
    el.className='gl-col';el.innerHTML=html;(opts.highlightAccts||[]).forEach(function(id){var row=el.querySelector('[data-acct="'+id+'"]');if(row)row.classList.add('gl-hi');});if(!internal)board._registerColumn(el,opts);
  }

  function wireCrossHighlight(board,columnEls,mapping){
    columnEls.forEach(function(el){var enter=function(ev){var line=ev.target.closest&&ev.target.closest('[data-acct]');if(!line||!el.contains(line))return;var id=line.getAttribute('data-acct'),m=mapping[id]||{nodes:[],pairs:[]};board.highlight(m);var fresh=el.querySelector('[data-acct="'+id+'"]');if(fresh)fresh.classList.add('gl-hi');};el.addEventListener('mouseover',enter);el.addEventListener('mouseenter',enter,true);
      el.addEventListener('mouseout',function(ev){var line=ev.target.closest&&ev.target.closest('[data-acct]');if(!line||!el.contains(line))return;line.classList.remove('gl-hi');board.clearHighlight();});});
    board.onHover(function(hit){columnEls.forEach(function(el){el.querySelectorAll('[data-acct]').forEach(function(x){x.classList.remove('gl-hi');});if(!hit)return;Object.keys(mapping).forEach(function(id){var m=mapping[id]||{},match=hit.kind==='node'?(m.nodes||[]).indexOf(hit.id)>=0:(m.pairs||[]).indexOf(hit.id)>=0;if(match){var row=el.querySelector('[data-acct="'+id+'"]');if(row)row.classList.add('gl-hi');}});});});
  }

  window.GraphLab={pairKey:pairKey,createBoard:createBoard,renderColumn:renderColumn,wireCrossHighlight:wireCrossHighlight};
})();
