import{t as n,a as i}from"../chunks/0JrH55uR.js";import"../chunks/DYL5JbMj.js";import{Z as V,_ as E,$ as L,a0 as D,g as t,a2 as c,o as C,a1 as R,a3 as I}from"../chunks/CRi2dQ_t.js";import{i as K}from"../chunks/Fj520njY.js";import{e as j,i as B}from"../chunks/BHrBXwYG.js";import{s as e}from"../chunks/C2tIMmq_.js";import{i as T}from"../chunks/DRBndAhM.js";const M=[{title:"Youtube",url:"https://www.youtube.com/vortechband",image:"youtube"},{title:"BandCamp",url:"https://vortech.bandcamp.com/",image:"bandcamp"},{title:"Facebook",url:"https://www.facebook.com/vortechmetal",image:"facebook"},{title:"Last.fm",url:"https://www.last.fm/music/Vortech",image:"lastfm"},{title:"SoundCloud",url:"https://www.soundcloud.com/vortechmetal",image:"soundcloud"}],x={sources:{avif:""+new URL("../assets/youtube.pfzy1DV1.avif",import.meta.url).href+" 280w, "+new URL("../assets/youtube.DTlQCq1b.avif",import.meta.url).href+" 559w",webp:""+new URL("../assets/youtube.BHMnaLJw.webp",import.meta.url).href+" 280w, "+new URL("../assets/youtube.D2ELPhPP.webp",import.meta.url).href+" 559w",png:""+new URL("../assets/youtube.ZRxUMjB6.png",import.meta.url).href+" 280w, "+new URL("../assets/youtube.BMF-aUfx.png",import.meta.url).href+" 559w"},img:{src:""+new URL("../assets/youtube.BMF-aUfx.png",import.meta.url).href,w:559,h:124}},Z={sources:{avif:""+new URL("../assets/bandcamp.nKwZ--dU.avif",import.meta.url).href+" 186w, "+new URL("../assets/bandcamp.BZNfqH4K.avif",import.meta.url).href+" 371w",webp:""+new URL("../assets/bandcamp.DzdueycQ.webp",import.meta.url).href+" 186w, "+new URL("../assets/bandcamp.BKs3rYEX.webp",import.meta.url).href+" 371w",png:""+new URL("../assets/bandcamp.49CgxEsn.png",import.meta.url).href+" 186w, "+new URL("../assets/bandcamp.CTiqap-k.png",import.meta.url).href+" 371w"},img:{src:""+new URL("../assets/bandcamp.CTiqap-k.png",import.meta.url).href,w:371,h:72}},Y={sources:{avif:""+new URL("../assets/facebook.C21EaTHr.avif",import.meta.url).href+" 113w, "+new URL("../assets/facebook.DaTSbt_j.avif",import.meta.url).href+" 225w",webp:""+new URL("../assets/facebook.BWbM8kVg.webp",import.meta.url).href+" 113w, "+new URL("../assets/facebook.DtYwqipV.webp",import.meta.url).href+" 225w",png:""+new URL("../assets/facebook.C7WMkoEl.png",import.meta.url).href+" 113w, "+new URL("../assets/facebook.-UeVfKGv.png",import.meta.url).href+" 225w"},img:{src:""+new URL("../assets/facebook.-UeVfKGv.png",import.meta.url).href,w:225,h:225}},q={sources:{avif:""+new URL("../assets/lastfm.BR-h3Qk0.avif",import.meta.url).href+" 1154w, "+new URL("../assets/lastfm.Bmmz4Sn8.avif",import.meta.url).href+" 2308w",webp:""+new URL("../assets/lastfm.CxtC83Jm.webp",import.meta.url).href+" 1154w, "+new URL("../assets/lastfm.DPs4u5Y7.webp",import.meta.url).href+" 2308w",png:""+new URL("../assets/lastfm.DiljWDuV.png",import.meta.url).href+" 1154w, "+new URL("../assets/lastfm.D0VoyGSx.png",import.meta.url).href+" 2308w"},img:{src:""+new URL("../assets/lastfm.D0VoyGSx.png",import.meta.url).href,w:2308,h:584}},F={sources:{avif:""+new URL("../assets/soundcloud.B7CrQHbj.avif",import.meta.url).href+" 256w, "+new URL("../assets/soundcloud.oCIBZ_hy.avif",import.meta.url).href+" 512w",webp:""+new URL("../assets/soundcloud.DVeW3lyn.webp",import.meta.url).href+" 256w, "+new URL("../assets/soundcloud.DJYHQs3t.webp",import.meta.url).href+" 512w",png:""+new URL("../assets/soundcloud.DAwDCIhx.png",import.meta.url).href+" 256w, "+new URL("../assets/soundcloud.2CrTAb1E.png",import.meta.url).href+" 512w"},img:{src:""+new URL("../assets/soundcloud.2CrTAb1E.png",import.meta.url).href,w:512,h:289}},u=v=>{switch(v){case"youtube":return x;case"bandcamp":return Z;case"facebook":return Y;case"lastfm":return q;case"soundcloud":return F;default:return x}};var P=n('<img class="externalImage svelte-hsxmhe">'),A=n("<source>"),J=n('<picture><!> <img class="externalImage svelte-hsxmhe"></picture>'),Q=n('<a target="_blank" rel="noopener noreferrer"><!></a>'),S=n('<div class="externalsRow svelte-hsxmhe"></div>');function W(v,y){V(y,!1),T();var h=S();j(h,5,()=>M,B,(U,s)=>{var g=Q(),_=D(g);{var p=o=>{var a=P();c((b,m,l)=>{e(a,"src",b),e(a,"alt",t(s).title),e(a,"width",m),e(a,"height",l)},[()=>u(t(s).image).img.src,()=>u(t(s).image).img.w,()=>u(t(s).image).img.h],C),i(o,a)},r=o=>{var a=J(),b=D(a);j(b,1,()=>Object.entries(u(t(s).image).sources),B,(l,d)=>{let f=()=>t(d)[0],H=()=>t(d)[1];var k=A();c(()=>{e(k,"srcset",H()),e(k,"type","image/"+f())}),i(l,k)});var m=R(b,2);L(a),c((l,d,f)=>{e(m,"src",l),e(m,"alt",t(s).title),e(m,"width",d),e(m,"height",f)},[()=>u(t(s).image).img.src,()=>u(t(s).image).img.w,()=>u(t(s).image).img.h],C),i(o,a)};K(_,o=>{typeof u(t(s).image)=="string"?o(p):o(r,!1)})}L(g),c(()=>e(g,"href",t(s).url)),i(U,g)}),L(h),i(v,h),E()}const w={sources:{avif:""+new URL("../assets/juha2010.JY3MohC2.avif",import.meta.url).href+" 471w, "+new URL("../assets/juha2010.DcCYbKr0.avif",import.meta.url).href+" 942w",webp:""+new URL("../assets/juha2010.BZKH1V8c.webp",import.meta.url).href+" 471w, "+new URL("../assets/juha2010.DyxBBbbv.webp",import.meta.url).href+" 942w",jpeg:""+new URL("../assets/juha2010.DetWHHmU.jpeg",import.meta.url).href+" 471w, "+new URL("../assets/juha2010.Bw0KDngZ.jpeg",import.meta.url).href+" 942w"},img:{src:""+new URL("../assets/juha2010.Bw0KDngZ.jpeg",import.meta.url).href,w:942,h:839}};var z=n('<img class="promoImage svelte-19fm588">'),G=n('<source sizes="(min-width:800px) 760px, (max-width:799px) 334px">'),O=n('<picture><!> <img class="promoImage svelte-19fm588"></picture>'),N=n(`<p class="noTopMargin"><b>Fast. Futuristic. Electrified.</b></p> <p>That's the name of the game for Vortech - the Finnish industrial death metal band founded in 2000
  and with the first release under the Vortech name released in April 2006, we are soon celebrating
  our 20th anniversary!</p> <!> <p>A new album is in the works, with final vocals left to do! Expect something fast in or around
  summer 2025!</p> <!>`,1);function oe(v,y){V(y,!1),T();var h=N(),U=R(I(h),4);W(U,{});var s=R(U,4);{var g=p=>{var r=z();e(r,"alt","Promotional image"),c(()=>{e(r,"src",w.img.src),e(r,"width",w.img.w),e(r,"height",w.img.h)}),i(p,r)},_=p=>{var r=O(),o=D(r);j(o,1,()=>Object.entries(w.sources),B,(b,m)=>{let l=()=>t(m)[0],d=()=>t(m)[1];var f=G();c(()=>{e(f,"srcset",d()),e(f,"type","image/"+l())}),i(b,f)});var a=R(o,2);e(a,"alt","Promotional image"),L(r),c(()=>{e(a,"src",w.img.src),e(a,"width",w.img.w),e(a,"height",w.img.h)}),i(p,r)};K(s,p=>{typeof w=="string"?p(g):p(_,!1)})}i(v,h),E()}export{oe as component};
