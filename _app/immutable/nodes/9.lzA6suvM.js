import{l as R}from"../chunks/CeN9Rbl1.js";import{t as c,a as v}from"../chunks/CXOXk5Zb.js";import{_ as U,$ as I,a0 as V,a3 as x,a1 as g,a2 as _,a4 as C,g as y}from"../chunks/CLz3x1SF.js";import{s as M}from"../chunks/BsmQTBSB.js";import{i as k}from"../chunks/2GeP_jRE.js";import{e as S,i as J}from"../chunks/COb_k316.js";import{s as r}from"../chunks/Ds3udR41.js";import{g as m}from"../chunks/CKzpiTCE.js";const W=({params:T})=>{const b=T.album,w=b.split("-")[0]??"",t=R.find(s=>s.releaseCode===w),f=t==null?void 0:t.releaseTitle;return{releaseLyrics:t==null?void 0:t.lyrics,releaseTitle:f,releasePath:b,releaseCode:w}},ge=Object.freeze(Object.defineProperty({__proto__:null,load:W},Symbol.toStringTag,{value:"Module"}));var X=c("<img>"),Y=c('<source sizes="(min-width:800px) 668px, (max-width:799px) 334px">'),Z=c("<picture><!> <img></picture>"),$=c('<div class="track"><h3 class="noBottomMargin"> </h3> <p class="noTopMargin"> </p> <p class="renderLinebreaks greyText"> </p></div>'),ee=c('<h2></h2> <div class="releaseImageContainer svelte-deglxm"><!></div> <!>',1),ae=c("<p></p>"),re=c('<a rel="prev" aria-label="Back to release page">Back to release</a>'),te=c('<a href="/music" rel="prev" aria-label="Back to Music page">Back to Music</a>'),se=c("<!> <p><!></p>",1);function _e(T,b){U(b,!0);const{releaseLyrics:w,releasePath:t,releaseTitle:f,releaseCode:s}=b.data;var j=se(),O=I(j);{var N=a=>{var o=ee(),z=I(o);z.textContent=`Lyrics: ${f??""}`;var B=x(z,2),F=g(B);{var G=p=>{var e=X();r(e,"alt",f),C((d,i,l)=>{r(e,"src",d),r(e,"width",i),r(e,"height",l)},[()=>m(s).img.src,()=>m(s).img.w,()=>m(s).img.h]),v(p,e)},H=p=>{var e=Z(),d=g(e);S(d,17,()=>Object.entries(m(s).sources),J,(l,h)=>{let n=()=>y(h)[0],L=()=>y(h)[1];var u=Y();C(()=>{r(u,"srcset",L()),r(u,"type","image/"+n())}),v(l,u)});var i=x(d,2);r(i,"alt",f),_(e),C((l,h,n)=>{r(i,"src",l),r(i,"width",h),r(i,"height",n)},[()=>m(s).img.src,()=>m(s).img.w,()=>m(s).img.h]),v(p,e)};k(F,p=>{typeof m(s)=="string"?p(G):p(H,!1)})}_(B);var K=x(B,2);S(K,17,()=>w,J,(p,e,d)=>{var i=$(),l=g(i),h=g(l);_(l);var n=x(l,2),L=g(n,!0);_(n);var u=x(n,2),Q=g(u,!0);_(u),_(i),C(()=>{M(h,`${d+1}. ${y(e).title??""}`),M(L,y(e).author?`Lyrics by ${y(e).author}`:""),M(Q,y(e).lyrics)}),v(p,i)}),v(a,o)},q=a=>{var o=ae();o.textContent=`No lyrics found for ${t??""}`,v(a,o)};k(O,a=>{f&&w?a(N):a(q,!1)})}var P=x(O,2),A=g(P);{var D=a=>{var o=re();r(o,"href","/music/"+t),v(a,o)},E=a=>{var o=te();v(a,o)};k(A,a=>{t?a(D):a(E,!1)})}_(P),v(T,j),V()}export{_e as component,ge as universal};
