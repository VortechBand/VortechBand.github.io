import{l as j}from"../chunks/CeN9Rbl1.js";import{c as L,a as m,t as h}from"../chunks/0JrH55uR.js";import{Z as O,a3 as k,_ as S,a1 as d,a0 as i,$ as c,a2 as z}from"../chunks/CRi2dQ_t.js";import{s as x}from"../chunks/RWqvs-FQ.js";import{i as C}from"../chunks/Fj520njY.js";import{s as P}from"../chunks/C2tIMmq_.js";const I=({params:u})=>{const s=u.song,t=u.album,n=t.split("-")[0]??"",a=j.find(p=>p.releaseCode===n),g=a==null?void 0:a.lyrics.find(p=>p.id===s),b=a==null?void 0:a.releaseTitle;return{songData:g,releaseTitle:b,releasePath:t}},H=Object.freeze(Object.defineProperty({__proto__:null,load:I},Symbol.toStringTag,{value:"Module"}));var J=h('<a rel="prev" aria-label="Back to release page">Back to release</a>'),K=h('<a href="/music" rel="prev" aria-label="Back to Music page">Back to Music</a>'),N=h("<article><h2>404</h2> <p>No such lyrics found.</p></article> <p><!></p>",1),Z=h('<article><h2> </h2> <p> </p> <p class="renderLinebreaks greyText"> </p></article> <p><a rel="prev" aria-label="Back to release page"></a></p>',1);function Q(u,s){O(s,!0);const t=s.data.songData,n=s.data.releasePath,a=s.data.releaseTitle;var g=L(),b=k(g);{var p=o=>{var v=N(),l=d(k(v),2),f=i(l);{var y=e=>{var r=J();P(r,"href","/music/"+n),m(e,r)},_=e=>{var r=K();m(e,r)};C(f,e=>{n?e(y):e(_,!1)})}c(l),m(o,v)},D=o=>{var v=Z(),l=k(v),f=i(l),y=i(f,!0);c(f);var _=d(f,2),e=i(_);c(_);var r=d(_,2),M=i(r,!0);c(r),c(l);var T=d(l,2),B=i(T);P(B,"href","/music/"+n),B.textContent=`Back to ${a??""}`,c(T),z(()=>{x(y,t.title),x(e,`Lyrics by ${t.author??""}`),x(M,t.lyrics)}),m(o,v)};C(b,o=>{t?o(D,!1):o(p)})}m(u,g),S()}export{Q as component,H as universal};
