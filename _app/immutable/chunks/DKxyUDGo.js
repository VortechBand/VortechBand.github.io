import{n as ee,o as ae,v as M,w as C,x as re,y as ne,g as U,d as fe,H as ie,z as X,A as S,B as H,C as le,D as K,E as P,F as se,I as b,G as Q,J as z,K as F,L as ue,M as G,N as k,O as te,P as ve,Q as de,R as _e,T as y,U as oe,V as ce,W as he,X as W,q as Ee,Y as pe}from"./RdLangg8.js";function me(l,e){return e}function Ae(l,e,a,u){for(var v=[],_=e.length,t=0;t<_;t++)te(e[t].e,v,!0);var o=_>0&&v.length===0&&a!==null;if(o){var A=a.parentNode;ve(A),A.append(a),u.clear(),m(l,e[0].prev,e[_-1].next)}de(v,()=>{for(var h=0;h<_;h++){var d=e[h];o||(u.delete(d.k),m(l,d.prev,d.next)),_e(d.e,!o)}})}function Ce(l,e,a,u,v,_=null){var t=l,o={flags:e,items:new Map,first:null},A=(e&W)!==0;if(A){var h=l;t=C?M(re(h)):h.appendChild(ee())}C&&ne();var d=null,w=!1,f=fe(()=>{var s=a();return he(s)?s:s==null?[]:Q(s)});ae(()=>{var s=U(f),r=s.length;if(w&&r===0)return;w=r===0;let I=!1;if(C){var E=t.data===ie;E!==(r===0)&&(t=X(),M(t),S(!1),I=!0)}if(C){for(var p=null,T,c=0;c<r;c++){if(H.nodeType===8&&H.data===le){t=H,I=!0,S(!1);break}var n=s[c],i=u(n,c);T=Z(H,o,p,null,n,i,c,v,e,a),o.items.set(i,T),p=T}r>0&&M(X())}C||Te(s,o,t,v,e,u,a),_!==null&&(r===0?d?K(d):d=P(()=>_(t)):d!==null&&se(d,()=>{d=null})),I&&S(!0),U(f)}),C&&(t=H)}function Te(l,e,a,u,v,_,t){var O,q,V,Y;var o=(v&pe)!==0,A=(v&(y|k))!==0,h=l.length,d=e.items,w=e.first,f=w,s,r=null,I,E=[],p=[],T,c,n,i;if(o)for(i=0;i<h;i+=1)T=l[i],c=_(T,i),n=d.get(c),n!==void 0&&((O=n.a)==null||O.measure(),(I??(I=new Set)).add(n));for(i=0;i<h;i+=1){if(T=l[i],c=_(T,i),n=d.get(c),n===void 0){var $=f?f.e.nodes_start:a;r=Z($,e,r,r===null?e.first:r.next,T,c,i,u,v,t),d.set(c,r),E=[],p=[],f=r.next;continue}if(A&&Ie(n,T,i,v),n.e.f&b&&(K(n.e),o&&((q=n.a)==null||q.unfix(),(I??(I=new Set)).delete(n))),n!==f){if(s!==void 0&&s.has(n)){if(E.length<p.length){var R=p[0],x;r=R.prev;var L=E[0],g=E[E.length-1];for(x=0;x<E.length;x+=1)J(E[x],R,a);for(x=0;x<p.length;x+=1)s.delete(p[x]);m(e,L.prev,g.next),m(e,r,L),m(e,g,R),f=R,r=g,i-=1,E=[],p=[]}else s.delete(n),J(n,f,a),m(e,n.prev,n.next),m(e,n,r===null?e.first:r.next),m(e,r,n),r=n;continue}for(E=[],p=[];f!==null&&f.k!==c;)f.e.f&b||(s??(s=new Set)).add(f),p.push(f),f=f.next;if(f===null)continue;n=f}E.push(n),r=n,f=n.next}if(f!==null||s!==void 0){for(var N=s===void 0?[]:Q(s);f!==null;)f.e.f&b||N.push(f),f=f.next;var D=N.length;if(D>0){var j=v&W&&h===0?a:null;if(o){for(i=0;i<D;i+=1)(V=N[i].a)==null||V.measure();for(i=0;i<D;i+=1)(Y=N[i].a)==null||Y.fix()}Ae(e,N,j,d)}}o&&Ee(()=>{var B;if(I!==void 0)for(n of I)(B=n.a)==null||B.apply()}),z.first=e.first&&e.first.e,z.last=r&&r.e}function Ie(l,e,a,u){u&y&&F(l.v,e),u&k?F(l.i,a):l.i=a}function Z(l,e,a,u,v,_,t,o,A,h){var d=(A&y)!==0,w=(A&oe)===0,f=d?w?ue(v):G(v):v,s=A&k?G(t):t,r={i:s,v:f,k:_,a:null,e:null,prev:a,next:u};try{return r.e=P(()=>o(l,f,s,h),C),r.e.prev=a&&a.e,r.e.next=u&&u.e,a===null?e.first=r:(a.next=r,a.e.next=r.e),u!==null&&(u.prev=r,u.e.prev=r.e),r}finally{}}function J(l,e,a){for(var u=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==u;){var t=ce(_);v.before(_),_=t}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{Ce as e,me as i};
