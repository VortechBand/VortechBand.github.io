import{t as R,a as v,c as I}from"../chunks/0JrH55uR.js";import"../chunks/DYL5JbMj.js";import{l as Y,n as $,Z,a6 as L,a7 as z,g as e,a0 as b,$ as h,_ as j,a3 as N,o as H,a1 as k,a2 as ee}from"../chunks/CRi2dQ_t.js";import{s as E}from"../chunks/RWqvs-FQ.js";import{i as K}from"../chunks/Fj520njY.js";import{e as te,i as re}from"../chunks/BHrBXwYG.js";import{s as O}from"../chunks/C2tIMmq_.js";import{i as A}from"../chunks/DRBndAhM.js";import{o as ae,i as ne}from"../chunks/CH0AWlpj.js";import{b as oe}from"../chunks/Crlji9Iw.js";import{p as _}from"../chunks/KRLvw0P6.js";import{n as ie,f as W,o as se}from"../chunks/DlBvS4tB.js";import{t as le}from"../chunks/DNbWoZXZ.js";function fe(s,r,l,f,p){var t;Y&&$();var o=(t=r.$$slots)==null?void 0:t[l],a=!1;o===!0&&(o=r.children,a=!0),o===void 0||o(s,a?()=>f:f)}var ce=R("<div><!></div>");function de(s,r){Z(r,!1);let l=_(r,"once",8,!1),f=_(r,"top",8,0),p=_(r,"bottom",8,0),o=_(r,"left",8,0),a=_(r,"right",8,0),t=z(!1),n=z(null);ae(()=>{if(typeof IntersectionObserver<"u"){const i=`${p()}px ${o()}px ${f()}px ${a()}px`,u=new IntersectionObserver(w=>{L(t,w[0].isIntersecting),e(t)&&l()&&e(n)&&u.unobserve(e(n))},{rootMargin:i});return e(n)&&u.observe(e(n)),()=>e(n)?u.unobserve(e(n)):void 0}const c=()=>{if(!e(n))return;const i=e(n).getBoundingClientRect();L(t,i.bottom+p()>0&&i.right+a()>0&&i.top-f()<window.innerHeight&&i.left-o()<window.innerWidth),e(t)&&l()&&window.removeEventListener("scroll",c)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)}),A();var d=ce(),m=b(d);fe(m,r,"default",{get intersecting(){return e(t)}}),h(d),oe(d,c=>L(n,c),()=>e(n)),v(s,d),j()}const C=ie.map(W).filter(Boolean).concat(se.map(W)).filter(s=>!!s);var me=R("<p>No news found.</p>"),ve=R('<article><h2 class="noBottomMargin"> </h2> <p class="greyText noTopMargin noBottomMargin"> </p> <p class="renderLinebreaks"> </p> <a>Read more</a></article>');function Ne(s,r){Z(r,!1),A();var l=I(),f=N(l);{var p=a=>{var t=me();v(a,t)},o=a=>{var t=I(),n=N(t);te(n,1,()=>C,re,(d,m,c)=>{let i=()=>e(m).contents,u=()=>e(m).created,w=()=>e(m).id,T=()=>e(m).title;de(d,{top:400,children:ne,$$slots:{default:(D,F)=>{const G=H(()=>F.intersecting);var q=I(),J=N(q);{var P=x=>{var g=ve();O(g,"aria-posinset",c+1);var M=b(g),Q=b(M,!0);h(M);var y=k(M,2),S=b(y,!0);h(y);var B=k(y,2),U=b(B,!0);h(B);var V=k(B,2);h(g),ee(X=>{O(g,"aria-setsize",C.length),E(Q,T()),E(S,u()),E(U,i()),O(V,"href",`/news/${w()??""}-${X??""}`)},[()=>le(T())],H),v(x,g)};K(J,x=>{e(G)&&x(P)})}v(D,q)}}})}),v(a,t)};K(f,a=>{C.length?a(o,!1):a(p)})}v(s,l),j()}export{Ne as component};
