(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3702)}])},9720:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return f},isThenable:function(){return s}});let o="refresh",l="navigate",u="restore",a="server-patch",i="prefetch",c="fast-refresh",f="server-action";function s(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(9082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1032:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(8754)._(n(7294)),o=n(4879),l=n(1572),u=n(8373),a=n(6221),i=n(5933),c=n(4167),f=n(8874),s=n(6342),d=n(245),p=n(6015),h=n(9720),v=new Set;function y(e,t,n,r,o,u){if(u||(0,l.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let b=r.default.forwardRef(function(e,t){let n,u;let{href:v,as:b,children:g,prefetch:m=null,passHref:j,replace:O,shallow:k,scroll:C,locale:E,onClick:x,onMouseEnter:P,onTouchStart:N,legacyBehavior:M=!1,...T}=e;n=g,M&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let w=r.default.useContext(c.RouterContext),R=r.default.useContext(f.AppRouterContext),A=null!=w?w:R,L=!w,I=!1!==m,S=null===m?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:D,as:F}=r.default.useMemo(()=>{if(!w){let e=_(v);return{href:e,as:b?_(b):e}}let[e,t]=(0,o.resolveHref)(w,v,!0);return{href:e,as:b?(0,o.resolveHref)(w,b):t||e}},[w,v,b]),H=r.default.useRef(D),K=r.default.useRef(F);M&&(u=r.default.Children.only(n));let U=M?u&&"object"==typeof u&&u.ref:t,[z,B,V]=(0,s.useIntersection)({rootMargin:"200px"}),W=r.default.useCallback(e=>{(K.current!==F||H.current!==D)&&(V(),K.current=F,H.current=D),z(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[F,U,D,V,z]);r.default.useEffect(()=>{A&&B&&I&&y(A,D,F,{locale:E},{kind:S},L)},[F,D,B,E,I,null==w?void 0:w.locale,A,L,S]);let X={ref:W,onClick(e){M||"function"!=typeof x||x(e),M&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,o,u,a,i,c,f){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](n,o,{shallow:a,locale:c,scroll:e}):t[u?"replace":"push"](o||n,{scroll:e})};f?r.default.startTransition(d):d()}(e,A,D,F,O,k,C,E,L)},onMouseEnter(e){M||"function"!=typeof P||P(e),M&&u.props&&"function"==typeof u.props.onMouseEnter&&u.props.onMouseEnter(e),A&&(I||!L)&&y(A,D,F,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:S},L)},onTouchStart(e){M||"function"!=typeof N||N(e),M&&u.props&&"function"==typeof u.props.onTouchStart&&u.props.onTouchStart(e),A&&(I||!L)&&y(A,D,F,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:S},L)}};if((0,a.isAbsoluteUrl)(F))X.href=F;else if(!M||j||"a"===u.type&&!("href"in u.props)){let e=void 0!==E?E:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&(0,d.getDomainLocale)(F,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);X.href=t||(0,p.addBasePath)((0,i.addLocale)(F,e,null==w?void 0:w.defaultLocale))}return M?r.default.cloneElement(u,X):r.default.createElement("a",{...T,...X},n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),o=n(6231),l="function"==typeof IntersectionObserver,u=new Map,a=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!l,[f,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(c||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!f){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,f,d.current]),[p,f,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3702:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(5893);n(8847),n(6394);var o=n(1967),l=n.n(o),u=n(1664),a=n.n(u),i=n(7294),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=i.createContext&&i.createContext(c),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function p(e){return function(t){return i.createElement(h,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return i.createElement(t.tag,s({key:n},t.attr),e(t.child))})}(e.child))}}function h(e){var t=function(t){var n,r=e.attr,o=e.size,l=e.title,u=d(e,["attr","size","title"]),a=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&i.createElement("title",null,l),e.children)};return void 0!==f?i.createElement(f.Consumer,null,function(e){return t(e)}):t(c)}let v=[{name:"Blog",link:"/blog",icon:(0,r.jsx)(function(e){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}},{tag:"polyline",attr:{points:"13 2 13 9 20 9"}}]})(e)},{stroke:"#999"})},{name:"Project",link:"/work",icon:(0,r.jsx)(function(e){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}}]})(e)},{stroke:"#999"})},{name:"About Me",link:"/about",icon:(0,r.jsx)(function(e){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)},{stroke:"#999"})}];function y(){return(0,r.jsxs)("header",{className:"header ".concat(l().className),children:[(0,r.jsx)("h1",{className:"header__logo",children:(0,r.jsxs)(a(),{href:"/",children:[(0,r.jsx)("span",{className:"header__logo-icon",children:"\uD83D\uDC69\uD83C\uDFFC‍\uD83D\uDCBB"}),"yeon.log"]})}),(0,r.jsx)("div",{className:"header__category",children:null==v?void 0:v.map((e,t)=>{let{name:n,link:o,icon:l}=e;return(0,r.jsxs)(a(),{href:o,children:[n,l]},t)})}),(0,r.jsx)("div",{className:"header__theme"})]})}function _(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{}),(0,r.jsx)("div",{id:"container",children:(0,r.jsx)(t,{...n})})]})}},8847:function(){},6394:function(){},1967:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_KR_9dff5b', '__Noto_Sans_KR_Fallback_9dff5b'",fontStyle:"normal"},className:"__className_9dff5b"}},1664:function(e,t,n){e.exports=n(1032)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(2937)}),_N_E=e.O()}]);