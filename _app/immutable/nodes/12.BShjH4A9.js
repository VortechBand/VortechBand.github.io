import{n as x,f as v,o as M}from"../chunks/DlBvS4tB.js";import{t as f,a as m}from"../chunks/7wFSv4yl.js";import{p as k,a4 as y,a as B,n as T,c as s,r as n,s as _,t as j}from"../chunks/D7Y_SwTw.js";import{s as l}from"../chunks/CobxDeb9.js";import{i as I}from"../chunks/CCB5SvRQ.js";const O=x.map(v).concat(M.map(v)),S=({params:p})=>{const o=Number(p.newsId.split("-")[0])??-1;return{formattedNews:O.find(a=>a&&a.id===o)}},F=Object.freeze(Object.defineProperty({__proto__:null,load:S},Symbol.toStringTag,{value:"Module"}));var z=f("<p>No such news found.</p>"),L=f('<article><h2 class="noBottomMargin"> </h2> <p class="greyText noTopMargin noBottomMargin"> </p> <p class="renderLinebreaks"> </p></article>'),P=f('<!> <a href="/news">Back to News</a>',1);function G(p,o){k(o,!0);const e=o.data.formattedNews;var a=P(),u=y(a);{var w=t=>{var r=z();m(t,r)},g=t=>{var r=L(),i=s(r),N=s(i,!0);n(i);var c=_(i,2),h=s(c,!0);n(c);var d=_(c,2),b=s(d,!0);n(d),n(r),j(()=>{l(N,e.title),l(h,e.created),l(b,e.contents)}),m(t,r)};I(u,t=>{e?t(g,!1):t(w)})}T(2),m(p,a),B()}export{G as component,F as universal};
