import{b as S,C as g}from"../chunks/BOh6iz43.js";import{t as v,a as n}from"../chunks/CXOXk5Zb.js";import{n as D,_ as y,a1 as d,a2 as c,a3 as r,a4 as L,p as x,a0 as M,$ as p,g as $}from"../chunks/CLz3x1SF.js";import"../chunks/CataGGS6.js";import{e as T,i as R}from"../chunks/COb_k316.js";import{s as A}from"../chunks/CpdfEIkN.js";import{s as h}from"../chunks/BsmQTBSB.js";import{s as E}from"../chunks/Ds3udR41.js";import{i as O}from"../chunks/Cnyv0V8W.js";import{p as B}from"../chunks/ubDNEuBt.js";import{f as V,c as Y,a as j}from"../chunks/BGK8BOLm.js";const C=({})=>({bandMembers:S}),ie=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));var H=v('<h2>Biography</h2> <p>This is the short bio</p> <p><a href="/bio/full">Read an extensive biography and history</a></p>',1);function I(a){var e=H();D(4),n(a,e)}var k=v('<div class="liveShowRow svelte-3rms45"><div class="liveShowDate svelte-3rms45">Date</div> <div class="liveShowLocation svelte-3rms45">Location</div> <div class="liveShowVenue svelte-3rms45">Venue</div> <div class="liveShowDetails svelte-3rms45">Details</div></div>');function q(a){var e=k();n(a,e)}var z=v('<div class="liveShowRow svelte-1sctc18"><div class="liveShowDate svelte-1sctc18"> </div> <div class="liveShowLocation svelte-1sctc18"> </div> <div class="liveShowVenue svelte-1sctc18"> </div> <div class="liveShowDetails svelte-1sctc18"><a>Details</a></div></div>');function J(a,e){y(e,!1);let s=B(e,"show",8);O();var t=z(),o=d(t),i=d(o,!0);c(o);var l=r(o,2),u=d(l);c(l);var m=r(l,2),b=d(m,!0);c(m);var f=r(m,2),w=d(f);c(f),c(t),L(_=>{h(i,_),h(u,`${s().country??""}, ${s().city??""}`),h(b,s().venue),E(w,"href",`/bio/shows/${s().date??""}`)},[()=>V(s().date,j,Y)],x),n(a,t),M()}var N=v("<!> <!>",1);function P(a){var e=N(),s=p(e);q(s);var t=r(s,2);T(t,1,()=>A,R,(o,i)=>{J(o,{get show(){return $(i)}})}),n(a,e)}var W=v(`<h2>Live shows</h2> <p>We have played shows in the past, but no shows are currently planned. You can read about past
  shows by clicking on "Details" below.</p> <!>`,1);function F(a){var e=W(),s=r(p(e),4);P(s),n(a,e)}var G=v('<!> <!> <p><a href="/bio/members">See full listing of all band members, past and guest</a></p> <!>',1);function ve(a,e){const{bandMembers:s}=e.data;var t=G(),o=p(t);I(o);var i=r(o,2);g(i,{bandMembers:s});var l=r(i,4);F(l),n(a,t)}export{ve as component,ie as universal};
