import{x as c,_ as g,$ as d,a0 as n}from"./D7Y_SwTw.js";function y(r,s,o,i){var _=r.__attributes??(r.__attributes={});c&&(_[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||_[s]!==(_[s]=o)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[g]=o),o==null?r.removeAttribute(s):typeof o!="string"&&a(r).includes(s)?r[s]=o:r.setAttribute(s,o))}var p=new Map;function a(r){var s=p.get(r.nodeName);if(s)return s;p.set(r.nodeName,s=[]);for(var o,i=r,_=Element.prototype;_!==i;){o=n(i);for(var f in o)o[f].set&&s.push(f);i=d(i)}return s}export{y as s};
