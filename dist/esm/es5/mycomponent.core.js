/*!
 * mycomponent: Core, ES5
 * Built with http://stenciljs.com
 */
function n(n){return{n:n[0],t:n[1],e:!!n[2],r:!!n[3],i:!!n[4]}}function t(n,t){if(C(t)&&"object"!=typeof t&&"function"!=typeof t){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t);if(n===String||2===n)return t.toString()}return t}function e(n,t,e,r){var i=n.o.get(t);i&&((r=i["s-ld"]||i.$activeLoading)&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),n.o.delete(t))}function r(n,t,e){for(var r,i,o=null,u=!1,f=!1,c=arguments.length;c-- >2;)P.push(arguments[c]);for(;P.length>0;)if((e=P.pop())&&void 0!==e.pop)for(c=e.length;c--;)P.push(e[c]);else"boolean"==typeof e&&(e=null),(f="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(f=!1)),f&&u?o[o.length-1].u+=e:null===o?o=[f?{u:e}:e]:o.push(f?{u:e}:e),u=f;if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(c in t.class)t.class[c]&&P.push(c);t.class=P.join(" "),P.length=0}null!=t.f&&(r=t.f),null!=t.name&&(i=t.name)}return"function"==typeof n?n(Object.assign({},t,{children:o}),S):{c:n,a:o,u:void 0,s:t,l:r,v:i,p:void 0,d:!1}}function i(n,t){n.y.has(t)||(n.y.set(t,!0),n.m?n.queue.write(function(){return o(n,t)}):n.queue.tick(function(){return o(n,t)}))}function o(n,t,e,r,i,c){if(n.y.delete(t),!n.b.has(t)){if(r=n.w.get(t),e=!r){if((i=n.o.get(t))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(function(){o(n,t)}),void(i.$onRender=i["s-rc"]);r=function a(n,t,e,r,i,o,u){try{(function c(n,t,e,r,i,o,u){for(u in n.g.set(r,e),n.M.has(e)||n.M.set(e,{}),(o=Object.assign({color:{type:String}},t.properties)).mode={type:String},o)f(n,o[u],e,r,u,i)})(n,i=n.j(t).k,t,r=new i,e)}catch(e){r={},n.A(e,7,t,!0)}return n.w.set(t,r),r}(n,t,n.C.get(t));try{r.componentWillLoad&&(c=r.componentWillLoad())}catch(e){n.A(e,3,t)}}c&&c.then?c.then(function(){return u(n,t,r,e)}):u(n,t,r,e)}}function u(n,t,e,i){(function o(n,t,e,i,u){try{var f=t.k.host;if(i.render||i.hostData||f){n.O=!0;var c=i.render&&i.render();n.O=!1;var a=n._.get(e)||{};a.p=e;var s=r(null,void 0,c);n._.set(e,n.render(a,s,u,t.k.encapsulation))}n.P(n,n.S,t,i.mode,e),e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(function(n){return n()}),e["s-rc"]=null)}catch(t){n.O=!1,n.A(t,8,e,!0)}})(n,n.j(t),t,e,!i);try{i?t["s-init"]():h(n._.get(t))}catch(e){n.A(e,6,t,!0)}}function f(n,e,r,i,o,u,f,l){if(e.type||e.state){var v=n.M.get(r);e.state||(!e.attr||void 0!==v[o]&&""!==v[o]||(f=u&&u.T)&&C(l=f[e.attr])&&(v[o]=t(e.type,l)),r.hasOwnProperty(o)&&(void 0===v[o]&&(v[o]=t(e.type,r[o])),delete r[o])),i.hasOwnProperty(o)&&void 0===v[o]&&(v[o]=i[o]),e.watchCallbacks&&(v[T+o]=e.watchCallbacks.slice()),s(i,o,function p(t){return(t=n.M.get(n.g.get(this)))&&t[o]},function d(t,r){(r=n.g.get(this))&&(e.state||e.mutable)&&c(n,r,o,t)})}else e.elementRef&&a(i,o,r)}function c(n,t,e,r,o,u,f){(o=n.M.get(t))||n.M.set(t,o={}),r!==o[e]&&(o[e]=r,n.w.get(t)&&(o[T+e],!n.O&&t["s-rn"]&&i(n,t)))}function a(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function s(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})}function l(n,t,e,r,i,o,u,f,c){if("class"!==e||o)if("style"===e){for(f in r=r||A,i=i||A,r)i[f]||(t.style[f]="");for(f in i)i[f]!==r[f]&&(t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var a=n.j(t);a&&a.x&&a.x[e]?v(t,e,i):"ref"!==e&&(v(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i?function s(n,t,e){var r=t!==(t=t.replace(/^xlink\:?/,"")),i=x[t];!i||e&&"false"!==e?"function"!=typeof e&&(i&&(e=""),r?n.setAttributeNS(W,O(t),e):n.setAttribute(t,e)):r?n.removeAttributeNS(W,O(t)):n.removeAttribute(t)}(t,e,i):!o||null!=i&&!1!==i||t.removeAttribute(e);else e=O(e)in t?O(e.substring(2)):O(e[2])+e.substring(3),i?i!==r&&n.S.W(t,e,i):n.S.N(t,e);else if(r!==i){var l=null==r||""===r?$:r.trim().split(/\s+/),p=null==i||""===i?$:i.trim().split(/\s+/),d=null==t.className||""===t.className?$:t.className.trim().split(/\s+/);for(f=0,c=l.length;f<c;f++)-1===p.indexOf(l[f])&&(d=d.filter(function(n){return n!==l[f]}));for(f=0,c=p.length;f<c;f++)-1===l.indexOf(p[f])&&(d=d.concat([p[f]]));t.className=d.join(" ")}}function v(n,t,e){try{n[t]=e}catch(n){}}function p(n,t,e,r,i){var o=11===e.p.nodeType&&e.p.host?e.p.host:e.p,u=t&&t.s||A,f=e.s||A;for(i in u)f&&null!=f[i]||null==u[i]||l(n,o,i,u[i],void 0,r,e.d);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||l(n,o,i,u[i],f[i],r,e.d)}function d(n,t){function e(i,o,u,f,c,l,v,m,b){if(m=o.a[u],a||(d=!0,"slot"===m.c&&(s&&t.L(f,s+"-slot",""),m.a?m.R=!0:m.D=!0)),C(m.u))m.p=t.F(m.u);else if(m.D)m.p=t.F("");else{if(l=m.p=N||"svg"===m.c?t.q("http://www.w3.org/2000/svg",m.c):t.H(m.R?"slot-fb":m.c),N="svg"===m.c||"foreignObject"!==m.c&&N,p(n,null,m,N),C(s)&&l["s-si"]!==s&&t.L(l,l["s-si"]=s,""),m.a)for(c=0;c<m.a.length;++c)(v=e(i,m,c,l))&&t.B(l,v);"svg"===m.c&&(N=!1)}return m.p["s-hn"]=h,(m.R||m.D)&&(m.p["s-sr"]=!0,m.p["s-cr"]=y,m.p["s-sn"]=m.v||"",(b=i&&i.a&&i.a[u])&&b.c===m.c&&i.p&&r(i.p)),m.p}function r(e,i,o,u){n.U=!0;var a=t.I(e);for(o=a.length-1;o>=0;o--)(u=a[o])["s-hn"]!==h&&u["s-ol"]&&(t.z(u),t.Q(c(u),u,f(u)),t.z(u["s-ol"]),u["s-ol"]=null,d=!0),i&&r(u,i);n.U=!1}function i(n,r,i,o,u,c,a,s){var l=n["s-cr"]||n.$defaultHolder;for((a=l&&t.Y(l)||n).shadowRoot&&(a=a.shadowRoot);u<=c;++u)o[u]&&(s=C(o[u].u)?t.F(o[u].u):e(null,i,u,n))&&(o[u].p=s,t.Q(a,s,f(r)))}function o(n,e,i,o){for(;e<=i;++e)C(n[e])&&(o=n[e].p,v=!0,o["s-ol"]?t.z(o["s-ol"]):r(o,!0),t.z(o))}function u(n,t){return n.c===t.c&&n.l===t.l&&("slot"!==n.c||n.v===t.v)}function f(n){return n&&n["s-ol"]?n["s-ol"]:n}function c(n){return t.Y(n["s-ol"]?n["s-ol"]:n)}var a,s,l,v,d,h,y,m=[];return function a(b,w,g,M,k,j,A,$,E){if(l=g,h=t.Z(b.p),y=b.p["s-cr"],s="scoped"===M||"shadow"===M&&!t.G?"data-"+t.Z(b.p):null,d=v=!1,l||s&&t.L(b.p,s+"-host",""),function a(s,l,v){var d=l.p=s.p,h=s.a,y=l.a;N=l.p&&C(t.J(l.p))&&void 0!==l.p.ownerSVGElement,N="svg"===l.c||"foreignObject"!==l.c&&N,C(l.u)?(v=d["s-cr"]||d.$defaultHolder)?t.K(t.Y(v),l.u):s.u!==l.u&&t.K(d,l.u):("slot"!==l.c&&p(n,s,l,N),C(h)&&C(y)?function m(n,s,l,v,p,d,h,y){for(var m=0,b=0,w=s.length-1,g=s[0],M=s[w],k=v.length-1,j=v[0],A=v[k];m<=w&&b<=k;)if(null==g)g=s[++m];else if(null==M)M=s[--w];else if(null==j)j=v[++b];else if(null==A)A=v[--k];else if(u(g,j))a(g,j),g=s[++m],j=v[++b];else if(u(M,A))a(M,A),M=s[--w],A=v[--k];else if(u(g,A))"slot"!==g.c&&"slot"!==A.c||r(t.Y(g.p)),a(g,A),t.Q(n,g.p,t.V(M.p)),g=s[++m],A=v[--k];else if(u(M,j))"slot"!==g.c&&"slot"!==A.c||r(t.Y(M.p)),a(M,j),t.Q(n,M.p,g.p),M=s[--w],j=v[++b];else{for(p=null,d=m;d<=w;++d)if(s[d]&&C(s[d].l)&&s[d].l===j.l){p=d;break}C(p)?((y=s[p]).c!==j.c?h=e(s&&s[b],l,p,n):(a(y,j),s[p]=void 0,h=y.p),j=v[++b]):(h=e(s&&s[b],l,b,n),j=v[++b]),h&&t.Q(c(g.p),h,f(g.p))}m>w?i(n,null==v[k+1]?null:v[k+1].p,l,v,b,k):b>k&&o(s,m,w)}(d,h,l,y):C(y)?(C(s.u)&&t.K(d,""),i(d,null,l,y,0,y.length-1)):C(h)&&o(h,0,h.length-1)),N&&"svg"===l.c&&(N=!1)}(b,w),d){for(function n(e,r,i,o,u,f,c,a,s,l){for(u=0,f=(r=t.I(e)).length;u<f;u++){if((i=r[u])["s-sr"]&&(o=i["s-cr"]))for(a=t.I(t.Y(o)),s=i["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===i["s-hn"]||((3===(l=t.X(o))||8===l)&&""===s||1===l&&null===t.nn(o,"slot")&&""===s||1===l&&t.nn(o,"slot")===s)&&(m.some(function(n){return n.tn===o})||(v=!0,o["s-sn"]=s,m.push({en:i,tn:o})));1===t.X(i)&&n(i)}}(w.p),j=0;j<m.length;j++)(A=m[j]).tn["s-ol"]||(($=t.F(""))["s-nr"]=A.tn,t.Q(t.Y(A.tn),A.tn["s-ol"]=$,A.tn));for(n.U=!0,j=0;j<m.length;j++){A=m[j];var O=t.Y(A.en),_=t.V(A.en);for($=A.tn["s-ol"];$=t.rn($);)if((E=$["s-nr"])&&E["s-sn"]===A.tn["s-sn"]&&O===t.Y(E)){_=t.V(E);break}(!_&&O!==t.Y(A.tn)||t.V(A.tn)!==_)&&A.tn!==_&&(t.z(A.tn),t.Q(O,A.tn,_))}n.U=!1}return v&&function n(e,r,i,o,u,f,c,a){for(o=0,u=(i=t.I(e)).length;o<u;o++)if(r=i[o],1===t.X(r)){if(r["s-sr"])for(c=r["s-sn"],r.hidden=!1,f=0;f<u;f++)if(i[f]["s-hn"]!==r["s-hn"])if(a=t.X(i[f]),""!==c){if(1===a&&c===t.nn(i[f],"slot")){r.hidden=!0;break}}else if(1===a||3===a&&""!==t.in(i[f]).trim()){r.hidden=!0;break}n(r)}}(w.p),m.length=0,w}}function h(n,t){n&&(n.s&&n.s.ref&&n.s.ref(t?null:n.p),n.a&&n.a.forEach(function(n){h(n,t)}))}function y(n,t,e,r,i){return e["s-cr"]||n.nn(e,k)||function o(n,t){return n&&1===t.encapsulation}(n.G,t)||(e["s-cr"]=n.F(""),e["s-cr"]["s-cn"]=!0,n.Q(e,e["s-cr"],n.I(e)[0])),n.G||1!==t.encapsulation||(e.shadowRoot=e),r={on:e["s-id"],T:{}},t.x&&Object.keys(t.x).forEach(function(o){(i=t.x[o].un)&&(r.T[i]=n.nn(e,i))}),r}function m(n,r,o,u){o.connectedCallback=function(){(function t(n,e,r){n.b.delete(r),n.fn.has(r)||(n.fn.set(r,!0),r["s-id"]||(r["s-id"]=n.cn()),function i(n,t,e){for(e=t;e=n.S.J(e);)if(n.an(e)){n.sn.has(t)||(n.o.set(t,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,r),n.queue.tick(function(){return n.ln(e,r,y(n.S,e,r))}))})(n,r,this)},o.attributeChangedCallback=function(n,e,i){(function o(n,e,r,i,u,f,c){if(n&&i!==u)for(f in n)if((c=n[f]).un&&O(c.un)===O(r)){e[f]=t(c.vn,u);break}})(r.x,this,n,e,i)},o.disconnectedCallback=function(){(function t(n,r,i){!n.U&&function o(n,t){for(;t;){if(!n.Y(t))return 9!==n.X(t);t=n.Y(t)}}(n.S,r)&&(n.b.set(r,!0),e(n,r),h(n._.get(r),!0),n.S.N(r),n.pn.delete(r),(i=n.w.get(r))&&i.componentDidUnload&&i.componentDidUnload(),[n.o,n.dn,n.C].forEach(function(n){return n.delete(r)}))})(n,this)},o["s-init"]=function(){(function t(n,r,i,o,u){if(!n.sn.has(r)&&n.w.get(r)&&!n.b.has(r)&&(!r["s-ld"]||!r["s-ld"].length)){delete r["s-ld"],n.sn.set(r,!0);try{h(n._.get(r)),(u=n.dn.get(r))&&(u.forEach(function(n){return n(r)}),n.dn.delete(r))}catch(t){n.A(t,4,r)}r.classList.add(i),e(n,r)}})(n,this,u)},o.forceUpdate=function(){i(n,this)},function f(n,e,r){e&&Object.keys(e).forEach(function(i){var o=e[i],u=o.hn;1===u||2===u?s(r,i,function t(){return(n.M.get(this)||{})[i]},function e(r){c(n,this,i,t(o.vn,r))}):6===u&&a(r,i,_)})}(n,r.x,o)}function b(n,t,e,r){return function(){var i=arguments;return function o(n,t,e){return new Promise(function(r){var i=t[e];i||(i=n.yn.querySelector(e)),i||(i=t[e]=n.H(e),n.B(n.yn,i)),i.componentOnReady(r)})}(n,t,e).then(function(n){return n[r].apply(n,i)})}}function w(n,t,e,o,u,f,c){var a={html:{}},s={},l=e[n]=e[n]||{},v=function p(n,t,e){n.mn||(n.mn=function(n,t,e,r){return n.addEventListener(t,e,r)},n.bn=function(n,t,e,r){return n.removeEventListener(t,e,r)});var r=new WeakMap,i={wn:e.documentElement,gn:e.head,yn:e.body,Mn:!1,X:function(n){return n.nodeType},H:function(n){return e.createElement(n)},q:function(n,t){return e.createElementNS(n,t)},F:function(n){return e.createTextNode(n)},kn:function(n){return e.createComment(n)},Q:function(n,t,e){return n.insertBefore(t,e)},z:function(n){return n.remove()},B:function(n,t){return n.appendChild(t)},I:function(n){return n.childNodes},Y:function(n){return n.parentNode},V:function(n){return n.nextSibling},rn:function(n){return n.previousSibling},Z:function(n){return O(n.nodeName)},in:function(n){return n.textContent},K:function(n,t){return n.textContent=t},nn:function(n,t){return n.getAttribute(t)},L:function(n,t,e){return n.setAttribute(t,e)},jn:function(n,t,e,r){return n.setAttributeNS(t,e,r)},An:function(n,t){return n.removeAttribute(t)},$n:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.J(n):"body"===r?i.yn:"document"===r?e:"window"===r?t:n},W:function(t,e,o,u,f,c,a,s){var l=e,v=t,p=r.get(t);if(p&&p[l]&&p[l](),"string"==typeof c?v=i.$n(t,c):"object"==typeof c?v=c:(s=e.split(":")).length>1&&(v=i.$n(t,s[0]),e=s[1]),v){var d=o;(s=e.split(".")).length>1&&(e=s[0],d=function(n){n.keyCode===E[s[1]]&&o(n)}),a=i.Mn?{capture:!!u,passive:!!f}:!!u,n.mn(v,e,d,a),p||r.set(t,p={}),p[l]=function(){v&&n.bn(v,e,d,a),p[l]=null}}},N:function(n,t){var e=r.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))}};return"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),i.En=function(n,e,r){return n&&n.dispatchEvent(new t.CustomEvent(e,r))},i.J=function(n,t){return(t=i.Y(n))&&11===i.X(t)?t.host:t},i}(l,e,o);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=e,t.location=e.location,t.document=o,t.resourcesUrl=t.publicPath=u,l.h=r,l.Context=t;var h=e.$definedCmps=e.$definedCmps||{},w=0,g={S:v,Cn:function M(n,t){if(!h[n.On]){h[n.On]=!0,m(g,a[n.On]=n,t.prototype,f);var r=t.observedAttributes=[];for(var i in n.x)n.x[i].un&&r.push(n.x[i].un);e.customElements.define(n.On,t)}},_n:t.emit,j:function(n){return a[v.Z(n)]},Pn:function(n){return t[n]},isClient:!0,an:function(n){return!(!h[v.Z(n)]&&!g.j(n))},cn:function(){return n+w++},A:function(n,t,e){},Sn:function(n){return function t(n,e,r){return{create:b(n,e,r,"create"),componentOnReady:b(n,e,r,"componentOnReady")}}(v,s,n)},queue:t.queue=function k(n,t){function e(n){for(var t=0;t<n.length;t++)try{n[t]()}catch(n){}n.length=0}function r(n,t){for(var e=0;e<n.length&&o()<t;)try{n[e++]()}catch(n){}e===n.length?n.length=0:0!==e&&n.splice(0,e)}function i(){l++,e(c);var t=o()+7*Math.ceil(l*(1/22));r(a,t),r(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(v=c.length+a.length+s.length>0)?n.raf(i):l=0}var o=function(){return t.performance.now()},u=Promise.resolve(),f=[],c=[],a=[],s=[],l=0,v=!1;return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return e(f)})},read:function(t){c.push(t),v||(v=!0,n.raf(i))},write:function(t){a.push(t),v||(v=!0,n.raf(i))}}}(l,e),ln:function A(n,e){if(e.mode||(e.mode=v.nn(e,"mode")||t.mode),y(g.S,n,e),n.k)i(g,e);else{var r={mode:e.mode,scoped:function o(n,t){return 2===t.encapsulation||1===t.encapsulation&&!n}(v.G,n)};n.Tn(r).then(function(t){try{(function r(n,t,e){var r=e.style;if(r){var i=e.is+(e.styleMode||j);t[i]||(t[i]=r)}})(0,n,n.k=t)}catch(t){n.k=function o(){}}i(g,e)})}},o:new WeakMap,xn:new WeakMap,fn:new WeakMap,pn:new WeakMap,sn:new WeakMap,g:new WeakMap,C:new WeakMap,w:new WeakMap,b:new WeakMap,y:new WeakMap,dn:new WeakMap,Wn:new WeakMap,_:new WeakMap,M:new WeakMap};g.render=d(g,v);var $=v.wn;return $["s-ld"]=[],$["s-rn"]=!0,$["s-init"]=function(){g.sn.set($,l.loaded=g.m=!0),v.En(e,"appload",{detail:{namespace:n}})},c&&c.Nn(),g.P=function(n,t,e,r,i){(function o(n,t,e,r,i,u,f){var c=e.On+(r||j),a=e[c];if(a||(a=e[c=e.On+j]),a){var s=t.gn;if(t.G)if(1===e.encapsulation)s=i.shadowRoot;else for(;i=t.Y(i);)if(i.host&&i.host.shadowRoot){s=i.host.shadowRoot;break}var l=n.xn.get(s)||{};if(!l[c]){(f=t.H("style")).innerHTML=a,u&&!u.Ln&&u.Rn(f);var v=s.querySelectorAll("[data-styles]");t.Q(s,f,v.length&&v[v.length-1].nextSibling||s.Dn),l[c]=!0,n.xn.set(s,l)}}})(n,t,e,r,i,c)},function C(n,t){t.componentOnReady=function(t,e){if(n.j(t)&&!n.sn.has(t)){var r=n.dn.get(t)||[];r.push(e),n.dn.set(t,r)}else e(t)},t.$r&&t.$r.forEach(function(n){return t.componentOnReady(n[0],n[1])}),t.$r=null}(g,l),l.initialized=!0,g}function g(t,e,r){void 0===r&&(r={}),e=Array.isArray(e)?e:[e];var i=t.document,o=r.hydratedCssClass||"hydrated",u=e.filter(function(n){return n[2]}).map(function(n){return n[0]});if(u.length){var f=i.createElement("style");f.innerHTML=u.join()+"{visibility:hidden}."+o+"{visibility:inherit}",f.setAttribute("data-styles",""),i.head.insertBefore(f,i.head.Dn)}var c=r.namespace||"mycomponent";if(!R){R=!0;var a=t[c]=t[c]||{};(function s(n,t,e){e.$r=[];var r=t.componentOnReady;t.componentOnReady=function t(i){function o(n){e.$r?e.$r.push([u,n]):e.componentOnReady(u,n)}var u=this;return r&&r.call(u),i?o(i):n.Promise?new Promise(o):{then:o}}})(t,t.HTMLElement.prototype,a)}applyPolyfills(t,function(){if(!L[c]){var u={},f=r.resourcesUrl||"./";M(c,u,t,i,f,o),L[c]=w(c,u,t,i,f,o)}e.forEach(function(e){var r;!function i(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(t.customElements.define)?(r=function(n){return t.HTMLElement.call(this,n)}).prototype=Object.create(t.HTMLElement.prototype,{constructor:{value:r,configurable:!0}}):r=new Function("w","return class extends w.HTMLElement{}")(t),L[c].Cn(function o(t,e,r){var i={On:t[0],x:{color:{un:"color"}}};i.Tn=t[1];var o=t[3];if(o)for(e=0;e<o.length;e++)r=o[e],i.x[r[0]]={hn:r[1],Fn:!!r[2],un:"string"==typeof r[3]?r[3]:r[3]?r[0]:0,vn:r[4]};return i.encapsulation=t[4],t[5]&&(i.qn=t[5].map(n)),i}(e),r)})})}this&&this.Hn||(Object.setPrototypeOf||Array);var M=function(){};function applyPolyfills(n,t){n.Bn=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[P]&&h(r);var i=e.Un;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.In)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return W.error=n,W}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.Un===T?s(n,t.In):t.Un===x?l(n,t.In):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===W?(l(n,W.error),W.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.zn);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.Qn&&n.Qn(n.In),p(n)}function s(n,t){n.Un===S&&(n.In=t,n.Un=T,0!==n.Yn.length&&M(p,n))}function l(n,t){n.Un===S&&(n.Un=x,n.In=t,M(a,n))}function v(n,t,e,r){var i=n.Yn,o=i.length;n.Qn=null,i[o]=t,i[o+T]=e,i[o+x]=r,0===o&&n.Un&&M(p,n)}function p(n){var t=n.Yn,e=n.Un;if(0!==t.length){for(var r,i,o=n.In,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.Yn.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){W.error=n,o=W}if(o===W?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.Un===S&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===x&&l(t,o))}function h(n){n[P]=N++,n.Un=void 0,n.In=void 0,n.Yn=[]}var y,m=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,w=void 0,g=void 0,M=function(n,t){O[b]=n,O[b+1]=t,2===(b+=2)&&(g?g(e):_())},k=(y=void 0!==n?n:void 0)||{},j=k.Zn||k.Gn;k="undefined"==typeof self;var A,$,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),_=void 0;_=j?(A=0,$=new j(e),E=document.createTextNode(""),$.observe(E,{characterData:!0}),function(){E.data=A=++A%2}):C?function(){var n=new MessageChannel;return n.Jn.onmessage=e,function(){return n.Kn.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().Vn("vertx");return void 0!==(w=n.Xn||n.nt)?function(){w(e)}:t()}catch(n){return t()}}():t();var P=Math.random().toString(36).substring(2),S=void 0,T=1,x=2,W={error:null},N=0,L=function(){function n(n,t){this.tt=n,this.et=new n(o),this.et[P]||h(this.et),m(t)?(this.rt=this.length=t.length,this.In=Array(this.length),0===this.length?s(this.et,this.In):(this.length=this.length||0,this.it(t),0===this.rt&&s(this.et,this.In))):l(this.et,Error("Array Methods must be provided an Array"))}return n.prototype.it=function(n){for(var t=0;this.Un===S&&t<n.length;t++)this.ot(n[t],t)},n.prototype.ot=function(n,t){var e=this.tt,c=e.resolve;c===i?(c=u(n))===r&&n.Un!==S?this.ut(n.Un,t,n.In):"function"!=typeof c?(this.rt--,this.In[t]=n):e===R?(f(e=new e(o),n,c),this.ft(e,t)):this.ft(new e(function(t){return t(n)}),t):this.ft(c(n),t)},n.prototype.ut=function(n,t,e){var r=this.et;r.Un===S&&(this.rt--,n===x?l(r,e):this.In[t]=e),0===this.rt&&s(r,this.In)},n.prototype.ft=function(n,t){var e=this;v(n,void 0,function(n){return e.ut(T,t,n)},function(n){return e.ut(x,t,n)})},n}(),R=function(){function n(t){if(this[P]=N++,this.In=this.Un=void 0,this.Yn=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.ct=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return R.prototype.then=r,R.all=function(n){return new L(this,n).et},R.race=function(n){var t=this;return m(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},R.resolve=i,R.reject=function(n){var t=new this(o);return l(t,n),t},R.at=function(n){g=n},R.st=function(n){M=n},R.lt=M,R.vt=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.pt)return}n.Promise=R},R.Promise=R,R.vt(),R}();var e=[];n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||e.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||e.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||e.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||e.push(import("./polyfills/string.js")),n.fetch||e.push(import("./polyfills/fetch.js")),Promise.all(e).then(function(e){e.forEach(function(t){t.applyPolyfill(n,n.document)}),t()})};var k="data-ssrv",j="$",A={},$=[],E={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},C=function(n){return null!=n},O=function(n){return n.toLowerCase()},_=function(){},P=[],S={getAttributes:function(n){return n.s},replaceAttributes:function(n,t){return n.s=t}},T="wc-",x={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},W="http://www.w3.org/1999/xlink",N=!1,L={},R=!1;export{g as defineCustomElement,r as h};