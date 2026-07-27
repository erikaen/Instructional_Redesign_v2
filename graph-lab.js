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
      .gl-ident-glyph{fill:var(--gl-ink);opacity:.78;font-family:Inter,Arial,sans-serif;font-weight:800;text-anchor:middle;dominant-baseline:central}
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
      .gl-focus-mode .gl-arrow,.gl-focus-mode .gl-node{opacity:.32;filter:grayscale(.8)}
      .gl-focus-mode .gl-focus{opacity:1;filter:none}
      .gl-focus.gl-arrow .gl-arrow-path{stroke-width:3}
      .gl-pulse{animation:glPulse .72s ease-out}.gl-moved{animation:glMove .55s ease-out 3}
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
    var world = 'D', posted = [], collapse = false, channels = null, tags = {}, fanPair = null, forceNodes = null, focus = null;
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
      if(forceNodes)Object.keys(forceNodes).forEach(function(id){visible[id]=true;});
      return {all:nodes,visible:visible};
    }
    function channelDelta(id){var n=0;entries().forEach(function(e){if(channels&&channels[e.id]===id){if(e.to==='cash')n+=e.w;if(e.from==='cash')n-=e.w;}});return n;}
    function nodeDelta(id){if(id==='gen')return deltas().gen;if(['cfo','cfi','cff'].indexOf(id)>=0)return channelDelta(id);return deltas()[id]||0;}
    function addBadge(parent,x,y,value,extra){var txt=typeof value==='string'?value:signed(value),width=Math.max(38,txt.length*8+12),g=S('g',{class:'gl-badge '+(extra||'')});
      g.appendChild(S('rect',{x:x-width/2,y:y-15,width:width,height:22,rx:4}));g.appendChild(S('text',{x:x,y:y},txt));parent.appendChild(g);return g;}
    function addRegions(root, visible) {
      var specs=[['assets',40,60,520,580,'\u0394 ASSETS'],['liabilities',600,60,360,140,'\u0394 LIABILITIES'],['reasons',600,240,360,400,'\u0394 REASONS']];
      specs.forEach(function(r){var g=S('g',{class:'gl-region-group gl-region-'+r[0]});g.appendChild(S('rect',{class:'gl-region',x:r[1],y:r[2],width:r[3],height:r[4],rx:18}));g.appendChild(S('text',{class:'gl-region-label',x:r[1]+14,y:r[2]+20},r[5]));root.appendChild(g);});
      /* The accounting identity written into the geography: Assets − Liabilities,
         with the = rotated 90° where the equation turns down into Reasons. */
      root.appendChild(S('text',{class:'gl-ident-glyph',x:580,y:130,'font-size':'54'},'\u2212'));
      root.appendChild(S('text',{class:'gl-ident-glyph',x:780,y:220,'font-size':'46',transform:'rotate(90 780 220)'},'='));
      var genTouched=GENERATED_MEMBERS.some(function(id){return visible[id];})||visible.gen;
      var gg=S('g',{class:'gl-generated'+(hi&&hi.nodes.indexOf('gen')>=0?' gl-hi':''),'data-id':'gen'});
      gg.appendChild(S('rect',{class:'gl-region',x:615,y:380,width:340,height:250,rx:18}));gg.appendChild(S('text',{class:'gl-region-label',x:630,y:400},'GENERATED'));
      var genForce=forceNodes?forceNodes.gen:null,genBadge=genForce==='?'?'?':(typeof genForce==='number'?genForce:(genForce===true&&data.bs.gen?data.bs.gen.end-data.bs.gen.beg:deltas().gen));
      if(genTouched)addBadge(gg,900,401,genBadge,'gl-gen-badge');root.appendChild(gg);
    }
    function tagFor(edge){if(tags[edge.id])return tags[edge.id];for(var i=0;i<edge.items.length;i++)if(tags[edge.items[i].id])return tags[edge.items[i].id];return 'fact';}
    function pathText(c){return 'M'+c.P0.x.toFixed(1)+','+c.P0.y.toFixed(1)+' C'+c.P1.x.toFixed(1)+','+c.P1.y.toFixed(1)+' '+c.P2.x.toFixed(1)+','+c.P2.y.toFixed(1)+' '+c.P3.x.toFixed(1)+','+c.P3.y.toFixed(1);}
    function tipLines(edge){var fixed={dana:'Dana R.',rest:'Other repairs',danaP:'Dana parts',restP:'Other parts'};return edge.items.map(function(e){return (fixed[e.id]||e.caption.split(/[ —;.-]/)[0]||e.id)+' $'+money(e.w);});}
    function fireHover(payload){hoverCallbacks.forEach(function(cb){cb(payload);});}
    function drawArrow(parent,edge,route){var tag=tagFor(edge),active=hi&&hi.pairs.indexOf(edge.id)>=0;
      var focused=focus&&focus.pairs.indexOf(edge.id)>=0;
      var g=S('g',{class:'gl-arrow gl-tag-'+tag+(active?' gl-hi':'')+(focused?' gl-focus':''),'data-pair':edge.id,'data-total':edge.w});var d=pathText(route.curve);
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
    function drawNode(parent,node,isPlaceholder){var active=hi&&hi.nodes.indexOf(node.id)>=0,focused=focus&&focus.nodes.indexOf(node.id)>=0,g=S('g',{class:'gl-node'+(active?' gl-hi':'')+(focused?' gl-focus':'')+(isPlaceholder?' gl-placeholder':'')+(['cfo','cfi','cff'].indexOf(node.id)>=0?' gl-channel':''),'data-id':node.id,'data-region':node.region,'data-sub':node.sub||''});
      var fv=forceNodes?forceNodes[node.id]:null,bv;
      if(fv==='?')bv='?';else if(typeof fv==='number')bv=fv;else if(fv===true&&data.bs[node.id])bv=data.bs[node.id].end-data.bs[node.id].beg;else bv=nodeDelta(node.id);
      g.appendChild(S('ellipse',{cx:node.x,cy:node.y,rx:node.rx,ry:node.ry}));g.appendChild(S('text',{class:'gl-node-label',x:node.x,y:node.y+4},node.label));addBadge(g,node.x,node.y-node.ry-9,bv);
      g.addEventListener('mouseenter',function(){fireHover({kind:'node',id:node.id});});g.addEventListener('mouseleave',function(){fireHover(null);});parent.appendChild(g);}
    function render(){
      var edges=mappedEdges(),ng=graphNodes(edges),nodes=ng.all,visible=ng.visible;svgEl.innerHTML='';svgEl.classList.toggle('gl-dim',!!hi);svgEl.classList.toggle('gl-focus-mode',!!focus&&!hi);
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
      setCollapse:function(v){collapse=!!v;render();return board;},setChannels:function(v){channels=v||null;render();return board;},setTags:function(v){tags=v||{};render();return board;},setFan:function(v){fanPair=v||null;render();return board;},setForceNodes:function(v){forceNodes=v||null;render();return board;},
      highlight:function(v){hi={nodes:(v&&v.nodes)||[],pairs:(v&&v.pairs)||[]};render();return board;},clearHighlight:function(){hi=null;render();return board;},
      setFocus:function(v){focus=v?{nodes:(v.nodes)||[],pairs:(v.pairs)||[]}:null;render();return board;},
      onHover:function(cb){if(typeof cb==='function')hoverCallbacks.push(cb);return board;},levels:levels,deltas:deltas,identityGap:identityGap,
      /* recognition is the course word for what puts an edge in the picture */
      setRecognized:function(ids){return board.setPosted(ids);},recognize:function(ids){return board.post(ids);},
      _registerColumn:function(el,o){var old=columns.filter(function(c){return c.el===el;})[0];if(old)old.opts=o;else columns.push({el:el,opts:o});},_data:function(){return {collapse:collapse};}
    };
    render();return board;
  }

  function renderColumn(el,data,board,opts,internal){
    injectStyle();opts=opts||{};var vals=opts.side==='beg'?Object.keys(data.bs).reduce(function(o,id){o[id]=data.bs[id].beg;return o;},{}):board.levels();
    var previous={};el.querySelectorAll('[data-acct]').forEach(function(line){previous[line.getAttribute('data-acct')]=Number(line.getAttribute('data-value'));});
    function line(id,label,value,display){var moved=previous[id]!=null&&previous[id]!==value;return '<div class="gl-col-line'+(moved?' gl-moved':'')+'" data-acct="'+id+'" data-value="'+value+'"><span>'+label+'</span><span class="gl-col-value">'+(display||money(value))+'</span></div>';}
    var title=(opts.side==='end'&&!opts.christened)?'Where we stand':opts.title,assets=sum(ASSET_IDS,vals),liabs=sum(LIAB_IDS,vals),mc=(vals.contrib||0)+(vals.gen||0)-(vals.wd||0),ok=assets-liabs-mc===0;
    var labels={cash:'Cash',ar:'Receivables',rou:'Right of Use',parts:'Parts',tools:'Tools & Equip',fix:'Fixtures',laptop:'Laptop',cc:'Credit Card',dep:'Customer Deposit'};
    var html='<h3 class="gl-col-title">'+title+'</h3><div class="gl-col-sub">'+(opts.sub||'')+'</div><div class="gl-col-section">Assets</div>';
    var omit=opts.omit||[];ASSET_IDS.forEach(function(id){if(omit.indexOf(id)>=0)return;html+=line(id,labels[id],vals[id]||0);});html+='<div class="gl-col-total" data-total="assets"><span>Total Assets</span><span>'+money(assets)+'</span></div><div class="gl-col-section">Liabilities</div>';
    LIAB_IDS.forEach(function(id){html+=line(id,labels[id],vals[id]||0);});html+='<div class="gl-col-total" data-total="liabilities"><span>Total Liabilities</span><span>'+money(liabs)+'</span></div><div class="gl-col-section">Member’s Capital</div>';
    html+=line('contrib','Contributed',vals.contrib||0)+line('gen','Generated',vals.gen||0)+line('wd','Withdrawn',vals.wd||0,(vals.wd||0)?'('+money(vals.wd)+')':'0');
    html+='<div class="gl-col-total" data-total="mc" data-value="'+mc+'"><span>Member’s Capital</span><span class="gl-col-value">'+money(mc)+'</span></div><div class="gl-col-ident">A − L = MC '+(ok?'✓':'✗')+' · '+money(assets)+' − '+money(liabs)+' = '+money(mc)+'</div>';
    el.className='gl-col';el.innerHTML=html;(opts.highlightAccts||[]).forEach(function(id){var row=el.querySelector('[data-acct="'+id+'"]');if(row)row.classList.add('gl-hi');});if(!internal)board._registerColumn(el,opts);
  }

  function wireCrossHighlight(board,columnEls,mapping){
    board.onHover(function(hit){columnEls.forEach(function(el){el.querySelectorAll('[data-acct]').forEach(function(x){x.classList.remove('gl-hi');});if(!hit)return;Object.keys(mapping).forEach(function(id){var m=mapping[id]||{},match=hit.kind==='node'?(m.nodes||[]).indexOf(hit.id)>=0:(m.pairs||[]).indexOf(hit.id)>=0;if(match){var row=el.querySelector('[data-acct="'+id+'"]');if(row)row.classList.add('gl-hi');}});});});
  }

  window.GraphLab={pairKey:pairKey,createBoard:createBoard,renderColumn:renderColumn,wireCrossHighlight:wireCrossHighlight,
    /* internals exported for the statement-board extension below (M6 graph-teach) */
    _internals:{S:S,money:money,signed:signed,Router:Router,injectStyle:injectStyle}};
})();

/* ============================================================
   Statement-board extension (M6 graph-teach, 64-x) — appended
   2026-07-27 per OHS-Graph-Teach-Walk-Plan.md engine deltas.
   A generic board for real-statement graphs: partitioned
   REASONS region (With/Without Donor Restrictions), pile-to-
   pile transfer arrows, the Value change caption idiom, and
   drill-down explode/fold groups. The bike-shop createBoard
   above is untouched.
   ============================================================ */
(function () {
  'use strict';
  var I = window.GraphLab._internals;
  var serialSeq = 0;

  function injectStatementStyle() {
    if (document.getElementById('gl-stmt-style')) return;
    var style = document.createElement('style');
    style.id = 'gl-stmt-style';
    style.textContent = [
      '.gl-subregion{fill:none;stroke:var(--gl-region-line);stroke-width:1.2;stroke-dasharray:2 4;opacity:.5}',
      '.gl-subregion-label{font:700 10px Inter,Arial,sans-serif;letter-spacing:.1em;fill:var(--gl-ink);opacity:.55}',
      '.gl-transfer .gl-arrow-path{stroke:var(--gl-reason);stroke-width:3;stroke-dasharray:1 6;stroke-linecap:round}',
      '.gl-transfer .gl-arrow-label{fill:var(--gl-reason)}',
      '.gl-tag-inference .gl-arrow-path{stroke-dasharray:8 5}',
      '.gl-vc .gl-arrow-path{stroke-dasharray:8 5}',
      '.gl-node-vc ellipse{fill:var(--gl-reason);stroke:#fff;stroke-width:2;stroke-dasharray:2 3}',
      '.gl-explodable ellipse{cursor:pointer}',
      '.gl-explodable .gl-node-label{cursor:pointer}',
      '.gl-explode-hint{font:800 13px Inter,Arial,sans-serif;fill:#fff;opacity:.85;text-anchor:middle;pointer-events:none}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function createStatementBoard(svgEl, data, opts) {
    I.injectStyle(); injectStatementStyle(); opts = opts || {};
    var S = I.S, money = I.money, signed = I.signed, Router = I.Router;
    var serial = ++serialSeq, markerId = 'gl-stmt-arrowhead-' + serial;
    var view = opts.viewBox || '0 0 1000 660';
    svgEl.classList.add('gl-board'); svgEl.setAttribute('viewBox', view);

    var nodesById = {}; (data.nodes || []).forEach(function (n) { nodesById[n.id] = n; });
    var edgesById = {}; (data.edges || []).forEach(function (e) { edgesById[e.id] = e; });
    var groupsById = {}; (data.groups || []).forEach(function (g) { groupsById[g.id] = g; });
    var visibleNodes = [], visibleEdges = [], badges = {}, tags = {}, exploded = {};
    var hi = null, focus = null, hoverCallbacks = [];
    var regionSpecs = data.regions || [
      { id: 'assets', x: 40, y: 60, w: 520, h: 580, label: 'Δ ASSETS' },
      { id: 'liab', x: 600, y: 60, w: 360, h: 140, label: 'Δ LIABILITIES' },
      { id: 'reasons', x: 600, y: 240, w: 360, h: 400, label: 'Δ REASONS' }
    ];
    var partition = data.partition; /* {regionId, woLabel, wLabel, splitY} */

    function effNodes() {
      var out = [];
      visibleNodes.forEach(function (id) {
        var g = groupsById[id];
        if (g && exploded[id]) g.members.forEach(function (m) { if (out.indexOf(m) < 0) out.push(m); });
        else if (out.indexOf(id) < 0) out.push(id);
      });
      return out;
    }
    function remap(id, shown) {
      /* an edge endpoint folded inside an unexploded group re-targets to
         the group parent; endpoints already visible stay themselves */
      if (shown.indexOf(id) >= 0) return id;
      var keys = Object.keys(groupsById);
      for (var i = 0; i < keys.length; i++) {
        var g = groupsById[keys[i]];
        if (g.members.indexOf(id) >= 0 && !exploded[keys[i]]) return keys[i];
      }
      return id;
    }
    function geo(list) {
      var out = {};
      list.forEach(function (id) {
        var n = nodesById[id]; if (!n) return;
        out[id] = { id: id, label: n.label, region: n.region, pile: n.pile || '', x: n.x, y: n.y,
          rx: Math.max(40, n.label.length * 4.0 + 12), ry: 24 };
      });
      return out;
    }
    function addBadge(parent, x, y, value) {
      var txt = typeof value === 'string' ? value : signed(value);
      var width = Math.max(38, txt.length * 8 + 12);
      var g = S('g', { class: 'gl-badge' });
      g.appendChild(S('rect', { x: x - width / 2, y: y - 15, width: width, height: 22, rx: 4 }));
      g.appendChild(S('text', { x: x, y: y }, txt));
      parent.appendChild(g); return g;
    }
    function fireHover(payload) { hoverCallbacks.forEach(function (cb) { cb(payload); }); }
    function render() {
      svgEl.innerHTML = '';
      svgEl.classList.toggle('gl-dim', !!hi);
      svgEl.classList.toggle('gl-focus-mode', !!focus && !hi);
      var defs = S('defs', {});
      var marker = S('marker', { id: markerId, viewBox: '0 0 10 10', refX: 8.5, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' });
      marker.appendChild(S('path', { d: 'M0,0 L10,5 L0,10 z', fill: 'var(--gl-ink)' }));
      defs.appendChild(marker); svgEl.appendChild(defs);

      var rg = S('g', { class: 'gl-regions' });
      regionSpecs.forEach(function (r) {
        var g = S('g', { class: 'gl-region-group gl-region-' + r.id });
        g.appendChild(S('rect', { class: 'gl-region', x: r.x, y: r.y, width: r.w, height: r.h, rx: 18 }));
        g.appendChild(S('text', { class: 'gl-region-label', x: r.x + 14, y: r.y + 20 }, r.label));
        rg.appendChild(g);
      });
      if (data.identityGlyphs !== false) {
        rg.appendChild(S('text', { class: 'gl-ident-glyph', x: 580, y: 130, 'font-size': '54' }, '−'));
        rg.appendChild(S('text', { class: 'gl-ident-glyph', x: 780, y: 220, 'font-size': '46', transform: 'rotate(90 780 220)' }, '='));
      }
      if (partition) {
        var pr = regionSpecs.filter(function (r) { return r.id === partition.regionId; })[0];
        if (pr) {
          var pg = S('g', { class: 'gl-partition' });
          pg.appendChild(S('rect', { class: 'gl-subregion', x: pr.x + 8, y: pr.y + 28, width: pr.w - 16, height: partition.splitY - pr.y - 34, rx: 12 }));
          pg.appendChild(S('rect', { class: 'gl-subregion', x: pr.x + 8, y: partition.splitY + 6, width: pr.w - 16, height: pr.y + pr.h - partition.splitY - 14, rx: 12 }));
          pg.appendChild(S('text', { class: 'gl-subregion-label', x: pr.x + 20, y: pr.y + 44 }, partition.woLabel || 'WITHOUT DONOR RESTRICTIONS'));
          pg.appendChild(S('text', { class: 'gl-subregion-label', x: pr.x + 20, y: partition.splitY + 22 }, partition.wLabel || 'WITH DONOR RESTRICTIONS'));
          rg.appendChild(pg);
        }
      }
      svgEl.appendChild(rg);

      var shown = effNodes(), nodeGeo = geo(shown);
      var edges = visibleEdges.map(function (id) { return edgesById[id]; }).filter(Boolean)
        .map(function (e) { return { id: e.id, from: remap(e.from, shown), to: remap(e.to, shown), src: e }; })
        .filter(function (e) { return e.from !== e.to && nodeGeo[e.from] && nodeGeo[e.to]; });
      var routes = Router.routeAll(edges, nodeGeo, shown);

      var arrows = S('g', { class: 'gl-arrows' });
      edges.forEach(function (e) {
        var route = routes[e.id]; if (!route) return;
        var src = e.src, tag = tags[e.id] || src.tag || 'fact';
        var cls = 'gl-arrow gl-tag-' + tag
          + (src.kind === 'transfer' ? ' gl-transfer' : '')
          + (src.kind === 'valueChange' ? ' gl-vc' : '')
          + (hi && hi.pairs.indexOf(e.id) >= 0 ? ' gl-hi' : '')
          + (focus && focus.pairs.indexOf(e.id) >= 0 ? ' gl-focus' : '');
        var g = S('g', { class: cls, 'data-pair': e.id });
        var d = 'M' + route.curve.P0.x.toFixed(1) + ',' + route.curve.P0.y.toFixed(1)
          + ' C' + route.curve.P1.x.toFixed(1) + ',' + route.curve.P1.y.toFixed(1)
          + ' ' + route.curve.P2.x.toFixed(1) + ',' + route.curve.P2.y.toFixed(1)
          + ' ' + route.curve.P3.x.toFixed(1) + ',' + route.curve.P3.y.toFixed(1);
        g.appendChild(S('path', { class: 'gl-arrow-hit', d: d }));
        g.appendChild(S('path', { class: 'gl-arrow-path', d: d, 'marker-end': 'url(#' + markerId + ')' }));
        var ly = route.apex.y + (route.side > 0 ? -8 : 16);
        g.appendChild(S('text', { class: 'gl-arrow-label', x: route.apex.x, y: ly, 'text-anchor': 'middle' }, '$' + money(src.amount)));
        if (src.caption) {
          var tip = S('g', { class: 'gl-arrow-tip' });
          var lines = src.caption.match(/.{1,46}(\s|$)/g) || [src.caption];
          var w = Math.max.apply(null, lines.map(function (x) { return x.length; })) * 5.6 + 16;
          tip.appendChild(S('rect', { x: route.apex.x - w / 2, y: ly + 7, width: w, height: lines.length * 14 + 9, rx: 4 }));
          lines.forEach(function (line, i) { tip.appendChild(S('text', { x: route.apex.x - w / 2 + 8, y: ly + 21 + i * 14 }, line.replace(/\s+$/, ''))); });
          g.appendChild(tip);
        }
        g.addEventListener('mouseenter', function () { fireHover({ kind: 'arrow', id: e.id }); });
        g.addEventListener('mouseleave', function () { fireHover(null); });
        arrows.appendChild(g);
      });
      svgEl.appendChild(arrows);

      var nodeG = S('g', { class: 'gl-nodes' });
      shown.forEach(function (id) {
        var n = nodeGeo[id]; if (!n) return;
        var src = nodesById[id];
        var isGroup = !!groupsById[id];
        var cls = 'gl-node'
          + (src.kind === 'valueChange' ? ' gl-node-vc' : '')
          + (isGroup ? ' gl-explodable' : '')
          + (hi && hi.nodes.indexOf(id) >= 0 ? ' gl-hi' : '')
          + (focus && focus.nodes.indexOf(id) >= 0 ? ' gl-focus' : '');
        var g = S('g', { class: cls, 'data-id': id, 'data-region': n.region, 'data-pile': n.pile });
        g.appendChild(S('ellipse', { cx: n.x, cy: n.y, rx: n.rx, ry: n.ry }));
        g.appendChild(S('text', { class: 'gl-node-label', x: n.x, y: n.y + 4 }, n.label));
        var bv = badges.hasOwnProperty(id) ? badges[id] : (src.badge != null ? src.badge : null);
        if (bv != null) addBadge(g, n.x, n.y - n.ry - 9, bv);
        if (isGroup) g.appendChild(S('text', { class: 'gl-explode-hint', x: n.x + n.rx - 10, y: n.y + n.ry - 6 }, '⊕'));
        if (isGroup && opts.clickToExplode !== false) {
          g.addEventListener('click', function () { board.setExploded(id, !exploded[id]); });
        }
        g.addEventListener('mouseenter', function () { fireHover({ kind: 'node', id: id }); });
        g.addEventListener('mouseleave', function () { fireHover(null); });
        nodeG.appendChild(g);
      });
      svgEl.appendChild(nodeG);
    }

    var board = {
      setVisibleNodes: function (ids) { visibleNodes = (ids || []).slice(); render(); return board; },
      showNodes: function (ids) { (Array.isArray(ids) ? ids : [ids]).forEach(function (id) { if (visibleNodes.indexOf(id) < 0) visibleNodes.push(id); }); render(); return board; },
      setVisibleEdges: function (ids) { visibleEdges = (ids || []).slice(); render(); return board; },
      showEdges: function (ids) { (Array.isArray(ids) ? ids : [ids]).forEach(function (id) { if (visibleEdges.indexOf(id) < 0) visibleEdges.push(id); }); render(); return board; },
      setBadges: function (v) { badges = v || {}; render(); return board; },
      setTags: function (v) { tags = v || {}; render(); return board; },
      setExploded: function (id, on) { exploded[id] = !!on; render(); if (opts.onExplode) opts.onExplode(id, !!on); return board; },
      isExploded: function (id) { return !!exploded[id]; },
      highlight: function (v) { hi = { nodes: (v && v.nodes) || [], pairs: (v && v.pairs) || [] }; render(); return board; },
      clearHighlight: function () { hi = null; render(); return board; },
      setFocus: function (v) { focus = v ? { nodes: v.nodes || [], pairs: v.pairs || [] } : null; render(); return board; },
      onHover: function (cb) { if (typeof cb === 'function') hoverCallbacks.push(cb); return board; },
      _state: function () { return { visibleNodes: visibleNodes.slice(), visibleEdges: visibleEdges.slice(), exploded: JSON.parse(JSON.stringify(exploded)) }; }
    };
    render(); return board;
  }

  window.GraphLab.createStatementBoard = createStatementBoard;
})();
