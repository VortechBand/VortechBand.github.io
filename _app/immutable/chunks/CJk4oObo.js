import{x as f,aw as v,n as i,ax as p,ay as h,J as u,w as d,B as o,y as E,v as y}from"./RdLangg8.js";function T(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function r(n,t){var e=u;e.nodes_start===null&&(e.nodes_start=n,e.nodes_end=t)}function g(n,t){var e=(t&p)!==0,_=(t&h)!==0,a,c=!n.startsWith("<!>");return()=>{if(d)return r(o,null),o;a===void 0&&(a=T(c?n:"<!>"+n),e||(a=f(a)));var s=_||v?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=f(s),l=s.lastChild;r(m,l)}else r(s,s);return s}}function M(n=""){if(!d){var t=i(n+"");return r(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),y(e)),r(e,e),e}function N(){if(d)return r(o,null),o;var n=document.createDocumentFragment(),t=document.createComment(""),e=i();return n.append(t,e),r(t,e),n}function L(n,t){if(d){u.nodes_end=o,E();return}n!==null&&n.before(t)}const w="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(w);export{L as a,r as b,N as c,T as d,M as e,g as t};
