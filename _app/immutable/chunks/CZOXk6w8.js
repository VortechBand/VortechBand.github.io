import{i as e,t}from"./f6fcs_nr.js";var n=e=>e.replace(/<(script|style|iframe|object|embed)\b[^>]*>[\s\S]*?<\/\1>/gi,` `).replace(/<(script|style|iframe|object|embed|param)\b[^>]*\/?>/gi,` `).replace(/<br\s*\/?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,``).replace(/&nbsp;/gi,` `).replace(/&#(\d+);/g,(e,t)=>String.fromCodePoint(Number(t))).replace(/&#x([0-9a-f]+);/gi,(e,t)=>String.fromCodePoint(parseInt(t,16))).replace(/&lt;/gi,`<`).replace(/&gt;/gi,`>`).replace(/&quot;/gi,`"`).replace(/&(?:apos|#39);/gi,`'`).replace(/&amp;/gi,`&`).replace(/[ \t]+/g,` `).replace(/\n{3,}/g,`

`).trim(),r=r=>{if(!r)return;let i=`yyyy-MM-dd HH:mm:ss`,a=t,o=r.created?new Date(r.created.replace(` `,`T`)):null,s=o!=null&&!isNaN(o.getTime())&&Date.now()-o.getTime()<6048e5;return{author:r.author??`Vortech`,categories:r.categories,contents:r.contents,created:e(r.created,i,a),id:r.id,isNew:s,title:n(r.title),updated:e(r.updated,i,a)}};export{n,r as t};