(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2812)}])},9720:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return s},isThenable:function(){return f}});let o="refresh",l="navigate",a="restore",u="server-patch",i="prefetch",c="fast-refresh",s="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(9082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1032:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(8754)._(n(7294)),o=n(4879),l=n(1572),a=n(8373),u=n(6221),i=n(5933),c=n(4167),s=n(8874),f=n(6342),d=n(245),p=n(6015),h=n(9720),y=new Set;function _(e,t,n,r,o,a){if(a||(0,l.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}Promise.resolve(a?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let b=r.default.forwardRef(function(e,t){let n,a;let{href:y,as:b,children:g,prefetch:m=null,passHref:j,replace:k,shallow:x,scroll:O,locale:C,onClick:E,onMouseEnter:N,onTouchStart:P,legacyBehavior:M=!1,...w}=e;n=g,M&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let R=r.default.useContext(c.RouterContext),T=r.default.useContext(s.AppRouterContext),L=null!=R?R:T,A=!R,S=!1!==m,I=null===m?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:F,as:D}=r.default.useMemo(()=>{if(!R){let e=v(y);return{href:e,as:b?v(b):e}}let[e,t]=(0,o.resolveHref)(R,y,!0);return{href:e,as:b?(0,o.resolveHref)(R,b):t||e}},[R,y,b]),H=r.default.useRef(F),U=r.default.useRef(D);M&&(a=r.default.Children.only(n));let z=M?a&&"object"==typeof a&&a.ref:t,[K,B,W]=(0,f.useIntersection)({rootMargin:"200px"}),V=r.default.useCallback(e=>{(U.current!==D||H.current!==F)&&(W(),U.current=D,H.current=F),K(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[D,z,F,W,K]);r.default.useEffect(()=>{L&&B&&S&&_(L,F,D,{locale:C},{kind:I},A)},[D,F,B,C,S,null==R?void 0:R.locale,L,A,I]);let Q={ref:V,onClick(e){M||"function"!=typeof E||E(e),M&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,o,a,u,i,c,s){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[a?"replace":"push"](n,o,{shallow:u,locale:c,scroll:e}):t[a?"replace":"push"](o||n,{scroll:e})};s?r.default.startTransition(d):d()}(e,L,F,D,k,x,O,C,A)},onMouseEnter(e){M||"function"!=typeof N||N(e),M&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),L&&(S||!A)&&_(L,F,D,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:I},A)},onTouchStart(e){M||"function"!=typeof P||P(e),M&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),L&&(S||!A)&&_(L,F,D,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:I},A)}};if((0,u.isAbsoluteUrl)(D))Q.href=D;else if(!M||j||"a"===a.type&&!("href"in a.props)){let e=void 0!==C?C:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,d.getDomainLocale)(D,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);Q.href=t||(0,p.addBasePath)((0,i.addLocale)(D,e,null==R?void 0:R.defaultLocale))}return M?r.default.cloneElement(a,Q):r.default.createElement("a",{...w,...Q},n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),o=n(6231),l="function"==typeof IntersectionObserver,a=new Map,u=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!l,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(c||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},u.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,s,d.current]),[p,s,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2812:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=n(8033),l=n.n(o);n(8847),n(6394);var a=n(8450),u=n.n(a),i=n(1664),c=n.n(i),s=n(7219);let f=[{name:"Blog",link:"/blog/list",icon:(0,r.jsx)(s.tHe,{stroke:"#999"})},{name:"Project",link:"/work/list",icon:(0,r.jsx)(s.QoU,{stroke:"#999"})},{name:"About Me",link:"/about",icon:(0,r.jsx)(s.fzv,{stroke:"#999"})}];function d(){return(0,r.jsxs)("header",{className:"header",children:[(0,r.jsx)("h1",{className:"header__logo  ".concat(u().className),children:(0,r.jsxs)(c(),{href:"/",children:[(0,r.jsx)("span",{className:"header__logo-icon",children:"\uD83D\uDC69\uD83C\uDFFC‍\uD83D\uDCBB"}),"yeon.log"]})}),(0,r.jsx)("p",{className:"header__description",children:"made by yeoning"}),(0,r.jsx)("div",{className:"header__category",children:null==f?void 0:f.map((e,t)=>{let{name:n,link:o,icon:l}=e;return(0,r.jsxs)(c(),{href:o,children:[n,l]},t)})}),(0,r.jsx)("div",{className:"header__theme"})]})}function p(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)("div",{id:"container",className:l().className,children:(0,r.jsx)(t,{...n})})]})}},8847:function(){},6394:function(){},8450:function(e){e.exports={style:{fontFamily:"'__Roboto_Mono_9a93c2', '__Roboto_Mono_Fallback_9a93c2'",fontWeight:700,fontStyle:"normal"},className:"__className_9a93c2"}},8033:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_KR_9dff5b', '__Noto_Sans_KR_Fallback_9dff5b'",fontStyle:"normal"},className:"__className_9dff5b"}},1664:function(e,t,n){e.exports=n(1032)},7219:function(e,t,n){"use strict";n.d(t,{vlc:function(){return s},tHe:function(){return f},QoU:function(){return d},fzv:function(){return p}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function i(e){return function(t){return r.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var n,o=e.attr,l=e.size,i=e.title,c=u(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}function s(e){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function f(e){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}},{tag:"polyline",attr:{points:"13 2 13 9 20 9"}}]})(e)}function d(e){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}}]})(e)}function p(e){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(2937)}),_N_E=e.O()}]);