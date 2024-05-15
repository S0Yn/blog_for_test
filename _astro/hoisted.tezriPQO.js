import{b as Cs,c as $s,s as Ls,g as Ts}from"./setting-utils.3AT7fowt.js";const wt=(t,e)=>{const{o:n,u:o,_:s}=t;let r,c=n;const l=(t,e)=>{const n=c,l=t,i=e||(o?!o(n,l):n!==l);return(i||s)&&(c=l,r=n),[c,i,r]};return[e?t=>l(e(c,r),t):l,t=>[c,!!t,r]]},tn=typeof window<"u",ht=tn?window:{},me=Math.max,Hs=Math.min,Ve=Math.round,Bn=ht.cancelAnimationFrame,Vn=ht.requestAnimationFrame,Ne=ht.setTimeout,ze=ht.clearTimeout,Se=t=>typeof ht[t]<"u"?ht[t]:void 0,As=Se("MutationObserver"),hn=Se("IntersectionObserver"),he=Se("ResizeObserver"),Fe=Se("ScrollTimeline"),Nn=tn&&Node.ELEMENT_NODE,{toString:ks,hasOwnProperty:Ie}=Object.prototype,Ps=/^\[object (.+)\]$/,ae=t=>void 0===t,Ee=t=>null===t,Ds=t=>ae(t)||Ee(t)?`${t}`:ks.call(t).replace(Ps,"$1").toLowerCase(),Ct=t=>"number"==typeof t,xe=t=>"string"==typeof t,zn=t=>"boolean"==typeof t,$t=t=>"function"==typeof t,Et=t=>Array.isArray(t),le=t=>"object"==typeof t&&!Et(t)&&!Ee(t),Oe=t=>{const e=!!t&&t.length,n=Ct(e)&&e>-1&&e%1==0;return!!(Et(t)||!$t(t)&&n)&&(!(e>0&&le(t))||e-1 in t)},be=t=>{if(!t||!le(t)||"object"!==Ds(t))return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,r=Ie.call(t,n),c=s&&Ie.call(s,"isPrototypeOf");if(o&&!r&&!c)return!1;for(e in t);return ae(e)||Ie.call(t,e)},ce=t=>{const e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===Nn)},Ce=t=>{const e=Element;return!!t&&(e?t instanceof e:t.nodeType===Nn)};function W(t,e){if(Oe(t))for(let n=0;n<t.length&&!1!==e(t[n],n,t);n++);else t&&W(Object.keys(t),(n=>e(t[n],n,t)));return t}const $e=(t,e)=>t.indexOf(e)>=0,Lt=(t,e)=>t.concat(e),J=(t,e,n)=>(n||xe(e)||!Oe(e)?t.push(e):Array.prototype.push.apply(t,e),t),Ft=t=>Array.from(t||[]),Fn=t=>Et(t)?t:[t],Ue=t=>!!t&&!t.length,bn=t=>Ft(new Set(t)),bt=(t,e,n)=>{W(t,(t=>t&&t.apply(void 0,e||[]))),!n&&(t.length=0)},Un="paddingTop",jn="paddingRight",qn="paddingLeft",Wn="paddingBottom",Gn="marginLeft",Xn="marginRight",Yn="marginBottom",Le="overflowX",Te="overflowY",Yt="width",Kt="height",Jt="hidden",Kn="visible",en=(t,e,n,o)=>{if(t&&e){let s=!0;return W(n,(n=>{(o?o(t[n]):t[n])!==(o?o(e[n]):e[n])&&(s=!1)})),s}return!1},Jn=(t,e)=>en(t,e,["w","h"]),Zn=(t,e)=>en(t,e,["x","y"]),Is=(t,e)=>en(t,e,["t","r","b","l"]),St=()=>{},M=(t,...e)=>t.bind(0,...e),kt=t=>{let e;const n=t?Ne:Vn,o=t?ze:Bn;return[s=>{o(e),e=n(s,$t(t)?t():t)},()=>o(e)]},Qn=(t,e)=>{let n,o,s,r=St;const{v:c,p:l,S:i}=e||{},a=function(e){r(),ze(n),n=o=void 0,r=St,t.apply(this,e)},d=t=>i&&o?i(o,t):t,u=()=>{r!==St&&a(d(s)||s)},p=function(){const t=Ft(arguments),e=$t(c)?c():c;if(Ct(e)&&e>=0){const c=$t(l)?l():l,i=Ct(c)&&c>=0,p=e>0?Ne:Vn,f=e>0?ze:Bn,h=d(t)||t,m=a.bind(0,h);r();const y=p(m,e);r=()=>f(y),i&&!n&&(n=Ne(u,c)),o=s=h}else a(t)};return p.m=u,p},ts=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Tt=t=>t?Object.keys(t):[],q=(t,e,n,o,s,r,c)=>{const l=[e,n,o,s,r,c];return("object"!=typeof t||Ee(t))&&!$t(t)&&(t={}),W(l,(e=>{W(e,((n,o)=>{const s=e[o];if(t===s)return!0;const r=Et(s);if(s&&be(s)){const e=t[o];let n=e;r&&!Et(e)?n=[]:!r&&!be(e)&&(n={}),t[o]=q(n,s)}else t[o]=r?s.slice():s}))})),t},es=(t,e)=>W(q({},t),((t,n,o)=>{void 0===t?delete o[n]:e&&t&&be(t)&&(o[n]=es(t,e))})),nn=t=>{for(const e in t)return!1;return!0},je=(t,e,n)=>me(t,Hs(e,n)),Vt=t=>Ft(new Set((Et(t)?t:(t||"").split(" ")).filter((t=>t)))),He=(t,e)=>t&&t.getAttribute(e),yt=(t,e,n)=>{W(Vt(e),(e=>{t&&t.setAttribute(e,n||"")}))},Ot=(t,e)=>{W(Vt(e),(e=>t&&t.removeAttribute(e)))},Ae=(t,e)=>{const n=Vt(He(t,e)),o=M(yt,t,e),s=(t,e)=>{const o=new Set(n);return W(Vt(t),(t=>o[e](t))),Ft(o).join(" ")};return{O:t=>o(s(t,"delete")),$:t=>o(s(t,"add")),C:t=>{const e=Vt(t);return e.reduce(((t,e)=>t&&n.includes(e)),e.length>0)}}},ns=(t,e,n)=>{Ae(t,e).O(n)},ie=(t,e,n)=>(Ae(t,e).$(n),M(ns,t,e,n)),ge=(t,e,n,o)=>{(o?ie:ns)(t,e,n)},Rs=(t,e,n)=>Ae(t,e).C(n),ss=t=>Ae(t,"class"),sn=(t,e)=>{ss(t).O(e)},ve=(t,e)=>(ss(t).$(e),M(sn,t,e)),vn=tn&&Element.prototype,os=(t,e)=>{const n=[],o=e?Ce(e)&&e:document;return o?J(n,o.querySelectorAll(t)):n},Ms=(t,e)=>{const n=e?Ce(e)&&e:document;return n?n.querySelector(t):null},qe=(t,e)=>!!Ce(t)&&(vn.matches||vn.msMatchesSelector).call(t,e),We=t=>t?Ft(t.childNodes):[],Zt=t=>t&&t.parentElement,qt=(t,e)=>Ce(t)&&t.closest(e),_s=(t,e,n)=>{const o=qt(t,e),s=t&&Ms(n,o),r=qt(s,e)===o;return!(!o||!s)&&(o===t||s===t||r&&qt(qt(t,n),e)!==o)},It=t=>{if(Oe(t))W(Ft(t),(t=>It(t)));else if(t){const e=Zt(t);e&&e.removeChild(t)}},cs=(t,e,n)=>{if(n&&t){let o,s=e;return Oe(n)?(o=document.createDocumentFragment(),W(n,(t=>{t===s&&(s=t.previousSibling),o.appendChild(t)}))):o=n,e&&(s?s!==e&&(s=s.nextSibling):s=t.firstChild),t.insertBefore(o,s||null),()=>It(n)}return St},gt=(t,e)=>cs(t,null,e),yn=(t,e)=>cs(Zt(t),t&&t.nextSibling,e),Wt=t=>{const e=document.createElement("div");return yt(e,"class",t),e},rs=t=>{const e=Wt();return e.innerHTML=t.trim(),W(We(e),(t=>It(t)))},Bs=/^--/,wn=(t,e)=>t.getPropertyValue(e)||t[e]||"",on=t=>{const e=t||0;return isFinite(e)?e:0},pe=t=>on(parseFloat(t||"")),Sn=t=>`${(100*on(t)).toFixed(3)}%`,Ge=t=>`${on(t)}px`;function Qt(t,e){t&&W(e,((e,n)=>{try{const o=t.style,s=Ct(e)?Ge(e):(e||"")+"";Bs.test(n)?o.setProperty(n,s):o[n]=s}catch{}}))}function Nt(t,e,n){const o=xe(e);let s=o?"":{};if(t){const r=ht.getComputedStyle(t,n)||t.style;s=o?wn(r,e):e.reduce(((t,e)=>(t[e]=wn(r,e),t)),s)}return s}const Dt=t=>"rtl"===Nt(t,"direction"),En=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",r=`${o}top${s}`,c=`${o}right${s}`,l=`${o}bottom${s}`,i=`${o}left${s}`,a=Nt(t,[r,c,l,i]);return{t:pe(a[r]),r:pe(a[c]),b:pe(a[l]),l:pe(a[i])}},Re=(t,e)=>"translate"+(le(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`),Vs={w:0,h:0},ke=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:Vs,Ns=t=>ke("inner",t||ht),re=M(ke,"offset"),ls=M(ke,"client"),Xe=M(ke,"scroll"),cn=t=>{const e=parseFloat(Nt(t,Yt))||0,n=parseFloat(Nt(t,Kt))||0;return{w:e-Ve(e),h:n-Ve(n)}},Gt=t=>t.getBoundingClientRect(),Ye=t=>!(!t||!t[Kt]&&!t[Yt]),is=(t,e)=>{const n=Ye(t);return!Ye(e)&&n},xn=(t,e,n,o)=>{W(Vt(e),(e=>{t.removeEventListener(e,n,o)}))},nt=(t,e,n,o)=>{var s;const r=null==(s=o&&o.H)||s,c=o&&o.I||!1,l=o&&o.A||!1,i={passive:r,capture:c};return M(bt,Vt(e).map((e=>{const o=l?s=>{xn(t,e,o,c),n(s)}:n;return t.addEventListener(e,o,i),M(xn,t,e,o,c)})))},rn=t=>t.stopPropagation(),On=t=>t.preventDefault(),zs={x:0,y:0},Me=t=>{const e=t&&Gt(t);return e?{x:e.left+ht.scrollX,y:e.top+ht.scrollY}:zs},ye=(t,e,n)=>n?n.n?0-t:n.i?e-t:t:t,Cn=(t,e)=>[ye(0,t,e),ye(t,t,e)],$n=(t,e,n)=>je(0,1,ye(t,e,n)/e||0),Rt=(t,e)=>{const{x:n,y:o}=Ct(e)?{x:e,y:e}:e||{};Ct(n)&&(t.scrollLeft=n),Ct(o)&&(t.scrollTop=o)},te=t=>({x:t.scrollLeft,y:t.scrollTop}),Ln=(t,e)=>{W(Fn(e),t)},Ke=t=>{const e=new Map,n=(t,n)=>{if(t){const o=e.get(t);Ln((t=>{o&&o[t?"delete":"clear"](t)}),n)}else e.forEach((t=>{t.clear()})),e.clear()},o=(t,s)=>{if(xe(t)){const o=e.get(t)||new Set;return e.set(t,o),Ln((t=>{$t(t)&&o.add(t)}),s),M(n,t,s)}zn(s)&&s&&n();const r=Tt(t),c=[];return W(r,(e=>{const n=t[e];n&&J(c,o(e,n))})),M(bt,c)};return o(t||{}),[o,n,(t,n)=>{W(Ft(e.get(t)),(t=>{n&&!Ue(n)?t.apply(0,n):t()}))}]},Tn=t=>JSON.stringify(t,((t,e)=>{if($t(e))throw 0;return e})),Hn=(t,e)=>t?`${e}`.split(".").reduce(((t,e)=>t&&ts(t,e)?t[e]:void 0),t):void 0,Fs={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},as=(t,e)=>{const n={};return W(Lt(Tt(e),Tt(t)),(o=>{const s=t[o],r=e[o];if(le(s)&&le(r))q(n[o]={},as(s,r)),nn(n[o])&&delete n[o];else if(ts(e,o)&&r!==s){let t=!0;if(Et(s)||Et(r))try{Tn(s)===Tn(r)&&(t=!1)}catch{}t&&(n[o]=r)}})),n},An=(t,e,n)=>o=>[Hn(t,o),n||void 0!==Hn(e,o)],ue="data-overlayscrollbars",us="os-environment",Us=`${us}-scrollbar-hidden`,_e=`${ue}-initialize`,mt=ue,ds=`${mt}-overflow-x`,fs=`${mt}-overflow-y`,ps="overflowVisible",js="scrollbarPressed",Je="updating",qs="body",Pt=`${ue}-viewport`,Ws="arrange",ms="scrollbarHidden",Xt=ps,Ze=`${ue}-padding`,Gs=Xt,kn=`${ue}-content`,ln="os-size-observer",Xs=`${ln}-appear`,Ys=`${ln}-listener`,Ks="os-trinsic-observer",Js="os-theme-none",ft="os-scrollbar",Zs=`${ft}-rtl`,Qs=`${ft}-horizontal`,to=`${ft}-vertical`,gs=`${ft}-track`,an=`${ft}-handle`,eo=`${ft}-visible`,no=`${ft}-cornerless`,Pn=`${ft}-interaction`,Dn=`${ft}-unusable`,Qe=`${ft}-auto-hide`,In=`${Qe}-hidden`,Rn=`${ft}-wheel`,so=`${gs}-interactive`,oo=`${an}-interactive`,hs={},bs={},co=t=>{W(t,(t=>W(t,((e,n)=>{hs[n]=t[n]}))))},vs=(t,e,n)=>Tt(t).map((o=>{const{static:s,instance:r}=t[o],[c,l,i]=n||[],a=n?r:s;if(a){const t=n?a(c,l,e):a(e);return(i||bs)[o]=t}})),ee=t=>bs[t],ro="__osOptionsValidationPlugin",lo="__osSizeObserverPlugin",io=(t,e)=>{const{T:n}=e,[o,s]=t("showNativeOverlaidScrollbars");return[o&&n.x&&n.y,s]},we=t=>0===t.indexOf(Kn),ys=(t,e)=>{const{D:n}=t,o=t=>{const o=Nt(n,t);return[o,"scroll"===(e?e[t]:o)]},[s,r]=o(Le),[c,l]=o(Te);return{k:{x:s,y:c},R:{x:r,y:l}}},ao=(t,e,n,o)=>{const s=e.x||e.y,r=(t,e)=>{const n=we(t),o=n&&s?"hidden":"",r=e&&n&&t.replace(`${Kn}-`,"")||o;return[e&&!n?t:"",we(r)?"hidden":r]},[c,l]=r(n.x,e.x),[i,a]=r(n.y,e.y);return o[Le]=l&&i?l:c,o[Te]=a&&c?a:i,ys(t,o)},un="__osScrollbarsHidingPlugin",uo="__osClickScrollPlugin";let Be;const fo=()=>{const t=(t,e,n,o)=>{gt(t,e);const s=ls(e),r=re(e),c=cn(n);return o&&It(e),{x:r.h-s.h+c.h,y:r.w-s.w+c.w}},{body:e}=document,n=rs(`<div class="${us}"><div></div></div>`)[0],o=n.firstChild,[s,,r]=Ke(),[c,l]=wt({o:t(e,n,o),u:Zn},M(t,e,n,o,!0)),[i]=l(),a=(t=>{let e=!1;const n=ve(t,Us);try{e="none"===Nt(t,"scrollbar-width")||"none"===Nt(t,"display","::-webkit-scrollbar")}catch{}return n(),e})(n),d={x:0===i.x,y:0===i.y},u={elements:{host:null,padding:!a,viewport:t=>a&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=q({},Fs),f=M(q,{},p),h=M(q,{},u),m={P:i,T:d,L:a,J:!!Fe,K:((t,e)=>{Qt(t,{[Le]:Jt,[Te]:Jt,direction:"rtl"}),Rt(t,{x:0});const n=Me(t),o=Me(e);Rt(t,{x:-999});const s=Me(e);return{i:n.x===o.x,n:o.x!==s.x}})(n,o),Z:M(s,"r"),G:h,tt:t=>q(u,t)&&h(),nt:f,ot:t=>q(p,t)&&f(),st:q({},u),et:q({},p)};return Ot(n,"style"),It(n),ht.addEventListener("resize",(()=>{let t;if(!(a||d.x&&d.y)){const e=ee(un);t=!!(e?e.Y():St)(m,c)}r("r",[t])})),m},vt=()=>(Be||(Be=fo()),Be),dn=(t,e)=>$t(e)?e.apply(0,t):e,po=(t,e,n,o)=>{const s=ae(o)?n:o;return dn(t,s)||e.apply(0,t)},ws=(t,e,n,o)=>{const s=ae(o)?n:o,r=dn(t,s);return!!r&&(ce(r)?r:e.apply(0,t))},mo=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{T:s,L:r,G:c}=vt(),{nativeScrollbarsOverlaid:l,body:i}=c().cancel,a=n??l,d=ae(o)?i:o,u=(s.x||s.y)&&a,p=t&&(Ee(d)?!r:d);return!!u||!!p},fn=new WeakMap,go=(t,e)=>{fn.set(t,e)},ho=t=>{fn.delete(t)},Ss=t=>fn.get(t),bo=(t,e,n)=>{let o=!1;const s=!!n&&new WeakMap,r=r=>{if(s&&n){W(n.map((e=>{const[n,o]=e||[];return[o&&n?(r||os)(n,t):[],o]})),(n=>W(n[0],(r=>{const c=n[1],l=s.get(r)||[];if(t.contains(r)&&c){const t=nt(r,c,(n=>{o?(t(),s.delete(r)):e(n)}));s.set(r,J(l,t))}else bt(l),s.delete(r)}))))}};return r(),[()=>{o=!0},r]},Mn=(t,e,n,o)=>{let s=!1;const{ct:r,rt:c,lt:l,it:i,ut:a,ft:d}=o||{},u=Qn((()=>s&&n(!0)),{v:33,p:99}),[p,f]=bo(t,u,l),h=c||[],m=Lt(r||[],h),y=(s,r)=>{if(!Ue(r)){const c=a||St,l=d||St,u=[],p=[];let m=!1,y=!1;if(W(r,(n=>{const{attributeName:s,target:r,type:a,oldValue:d,addedNodes:f,removedNodes:v}=n,b="attributes"===a,g="childList"===a,w=t===r,x=b&&s,$=x&&He(r,s||"")||null,M=x&&d!==$,E=$e(h,s)&&M;if(e&&(g||!w)){const e=b&&M,a=e&&i&&qe(r,i),p=(a?!c(r,s,d,$):!b||e)&&!l(n,!!a,t,o);W(f,(t=>J(u,t))),W(v,(t=>J(u,t))),y=y||p}!e&&w&&M&&!c(r,s,d,$)&&(J(p,s),m=m||E)})),f((t=>bn(u).reduce(((e,n)=>(J(e,os(t,n)),qe(n,t)?J(e,n):e)),[]))),e)return!s&&y&&n(!1),[!1];if(!Ue(p)||m){const t=[bn(p),m];return!s&&n.apply(0,t),t}}},v=new As(M(y,!1));return[()=>(v.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:m,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(p(),v.disconnect(),s=!1)}),()=>{if(s)return u.m(),y(!0,v.takeRecords())}]},Es=(t,e,n)=>{const{_t:o,dt:s}=n||{},r=ee(lo),{K:c}=vt(),l=M(Dt,t),[i]=wt({o:!1,_:!0});return()=>{const n=[],a=rs(`<div class="${ln}"><div class="${Ys}"></div></div>`)[0],d=a.firstChild,u=t=>{const n=t instanceof ResizeObserverEntry,s=!n&&Et(t);let r=!1,l=!1,d=!0;if(n){const[e,,n]=i(t.contentRect),o=Ye(e),s=is(e,n);l=!n||s,r=!l&&!o,d=!r}else s?[,d]=t:l=!0===t;if(o&&d){const e=s?t[0]:Dt(a);Rt(a,{x:ye(3333333,3333333,e&&c),y:3333333})}r||e({vt:s?t:void 0,ht:!s,dt:l})};if(he){const t=new he((t=>u(t.pop())));t.observe(d),J(n,(()=>{t.disconnect()}))}else{if(!r)return St;{const[t,e]=r(d,u,s);J(n,Lt([ve(a,Xs),nt(a,"animationstart",t)],e))}}if(o){const[t]=wt({o:void 0},l);J(n,nt(a,"scroll",(e=>{const n=t(),[o,s,r]=n;s&&(sn(d,"ltr rtl"),ve(d,o?"rtl":"ltr"),u([!!o,s,r])),rn(e)})))}return M(bt,J(n,gt(t,a)))}},vo=(t,e)=>{let n;const o=Wt(Ks),[s]=wt({o:!1}),r=(t,n)=>{if(t){const o=s((t=>0===t.h||t.isIntersecting||t.intersectionRatio>0)(t)),[,r]=o;return r&&!n&&e(o)&&[o]}},c=(t,e)=>r(e.pop(),t);return[()=>{const e=[];if(hn)n=new hn(M(c,!1),{root:t}),n.observe(o),J(e,(()=>{n.disconnect()}));else{const t=()=>{const t=re(o);r(t)};J(e,Es(o,t)()),t()}return M(bt,J(e,gt(t,o)))},()=>n&&c(!0,n.takeRecords())]},yo=(t,e,n,o)=>{let s,r,c,l,i,a;const{L:d}=vt(),u=`[${mt}]`,p=`[${Pt}]`,f=["tabindex"],h=["wrap","cols","rows"],m=["id","class","style","open"],{gt:y,bt:v,D:b,wt:g,St:w,V:x,yt:$,Ot:M}=t,E={$t:!1,N:Dt(y)},S=vt(),L=ee(un),[O]=wt({u:Jn,o:{w:0,h:0}},(()=>{const o=L&&L.M(t,e,E,S,n).W,s=$(Xt),r=!x&&$(Ws),c=r&&te(b);M(Xt),x&&M(Je,!0);const l=r&&o&&o()[0],i=Xe(g),a=Xe(b),d=cn(b);return M(Xt,s),x&&M(Je),l&&l(),Rt(b,c),{w:a.w+i.w+d.w,h:a.h+i.h+d.h}})),k=w?h:Lt(m,h),T=Qn(o,{v:()=>s,p:()=>r,S(t,e){const[n]=t,[o]=e;return[Lt(Tt(n),Tt(o)).reduce(((t,e)=>(t[e]=n[e]||o[e],t)),{})]}}),C=t=>{if(x){const e=Dt(y);q(t,{Ct:a!==e}),q(E,{N:e}),a=e}},J=t=>{W(t||f,(t=>{if($e(f,t)){const e=He(v,t);xe(e)?yt(b,t,e):Ot(b,t)}}))},D=(t,e)=>{const[n,s]=t,r={xt:s};return q(E,{$t:n}),!e&&o(r),r},I=({ht:t,vt:e,dt:n})=>{const s=(!t||n||e)&&d?T:o,[r,c]=e||[],l={ht:t||n,dt:n,Ct:c};C(l),e&&q(E,{N:r}),s(l)},H=(t,e)=>{const[,n]=O(),s={Ht:n};return C(s),n&&!e&&(t?o:T)(s),s},P=(t,e,n)=>{const o={It:e};return C(o),e&&!n?T(o):x||J(t),o},{Z:A}=S,[N,V]=g?vo(v,D):[],R=!x&&Es(v,I,{dt:!0,_t:!0}),[z,G]=Mn(v,!1,P,{rt:m,ct:Lt(m,f)}),F=x&&he&&new he((t=>{const e=t[t.length-1].contentRect;I({ht:!0,dt:is(e,i)}),i=e}));return[()=>{J(),F&&F.observe(v);const t=R&&R(),e=N&&N(),n=z(),o=A((t=>{const[,e]=O();T({zt:t,Ht:e})}));return()=>{F&&F.disconnect(),t&&t(),e&&e(),l&&l(),n(),o()}},({Et:t,At:e,Tt:n})=>{const o={},[i]=t("update.ignoreMutation"),[a,d]=t("update.attributes"),[f,h]=t("update.elementEvents"),[m,y]=t("update.debounce"),v=e||n;if(h||d){c&&c(),l&&l();const[t,e]=Mn(g||b,!0,H,{ct:Lt(k,a||[]),lt:f,it:u,ft:(t,e)=>{const{target:n,attributeName:o}=t;return!(e||!o||x)&&_s(n,u,p)||!!qt(n,`.${ft}`)||!!(t=>$t(i)&&i(t))(t)}});l=t(),c=e}if(y)if(T.m(),Et(m)){const t=m[0],e=m[1];s=Ct(t)&&t,r=Ct(e)&&e}else Ct(m)?(s=m,r=!1):(s=!1,r=!1);if(v){const t=G(),e=V&&V(),n=c&&c();t&&q(o,P(t[0],t[1],v)),e&&q(o,D(e[0],v)),n&&q(o,H(n[0],v))}return C(o),o},E]},wo=(t,e,n,o)=>{const{G:s,K:r}=vt(),{scrollbars:c}=s(),{slot:l}=c,{gt:i,bt:a,D:d,Dt:u,kt:p,Rt:f,V:h}=e,{scrollbars:m}=u?{}:t,{slot:y}=m||{},v=new Map,b=t=>Fe&&new Fe({source:p,axis:t}),g=b("x"),w=b("y"),x=ws([i,a,d],(()=>h&&f?i:a),l,y),$=(t,e)=>{if(e){const n=t?Yt:Kt,{Mt:o,Vt:s}=e,r=Gt(s)[n],c=Gt(o)[n];return je(0,1,r/c||0)}const o=t?"x":"y",{Lt:s,Pt:r}=n,c=r[o],l=s[o];return je(0,1,c/(c+l)||0)},E=(t,e)=>q(t,e?{clear:["left"]}:{}),S=t=>{v.forEach(((e,n)=>{(!t||$e(Fn(t),n))&&(W(e||[],(t=>{t&&t.cancel()})),v.delete(n))}))},L=(t,e,n,o)=>{const s=v.get(t)||[],r=s.find((t=>t&&t.timeline===e));r?r.effect=new KeyframeEffect(t,n,{composite:o}):v.set(t,Lt(s,[t.animate(n,{timeline:e,composite:o})]))},O=(t,e,n)=>{const o=n?ve:sn;W(t,(t=>{o(t.Ut,e)}))},k=(t,e)=>{W(t,(t=>{const[n,o]=e(t);Qt(n,o)}))},T=(t,e)=>{k(t,(t=>{const{Vt:n}=t;return[n,{[e?Yt:Kt]:Sn($(e))}]}))},C=(t,e)=>{const{Lt:o}=n,s=e?o.x:o.y,c=(t,n,o)=>Re(Sn(((t,e,n,o)=>{const s=$(n,t);return 1/s*(1-s)*(o?1-e:e)||0})(t,$n(n,s,o),e,o)),e);if(g&&w)W(t,(t=>{const{Ut:n,Vt:o}=t,l=e&&Dt(n)&&r;L(o,e?g:w,E({transform:Cn(s,l).map((e=>c(t,e,l)))},l))}));else{const n=te(p);k(t,(t=>{const{Vt:o,Ut:s}=t;return[o,{transform:c(t,e?n.x:n.y,e&&Dt(s)&&r)}]}))}},D=t=>h&&!f&&Zt(t)===d,I=[],H=[],P=[],A=(t,e,n)=>{const o=zn(n),s=!o||!n;(!o||n)&&O(H,t,e),s&&O(P,t,e)},N=t=>{const e=Wt(`${ft} ${t?Qs:to}`),n=Wt(gs),s=Wt(an),r={Ut:e,Mt:n,Vt:s};return J(t?H:P,r),J(I,[gt(e,n),gt(n,s),M(It,e),S,o(r,A,C,t)]),r},V=M(N,!0),R=M(N,!1);return V(),R(),[{Bt:()=>{T(H,!0),T(P)},Nt:()=>{C(H,!0),C(P)},jt:()=>{if(h){const{Lt:t}=n,e=.5;if(g&&w)W(Lt(P,H),(({Ut:n})=>{if(D(n)){const o=(t,o,s)=>{const c=s&&Dt(n)&&r;L(n,t,E({transform:Cn(o-e,c).map((t=>Re(Ge(t),s)))},c),"add")};o(g,t.x,!0),o(w,t.y)}else S(n)}));else{const e=te(p),n=n=>{const{Ut:o}=n,s=D(o)&&o,c=(t,e,n)=>{const o=e*$n(t,e,n);return Ge(n?-o:o)};return[s,{transform:s?Re({x:c(e.x,t.x,Dt(o)&&r),y:c(e.y,t.y)}):""}]};k(H,n),k(P,n)}}},Ft:A,qt:{J:g,Wt:H,Xt:V,Yt:M(k,H)},Jt:{J:w,Wt:P,Xt:R,Yt:M(k,P)}},()=>(gt(x,H[0].Ut),gt(x,P[0].Ut),M(bt,I))]},So=(t,e,n)=>{const{bt:o,kt:s,Kt:r}=e;return(e,c,l,i)=>{const{Ut:a,Mt:d,Vt:u}=e,[p,f]=kt(333),[h,m]=kt(),y=M(l,[e],i),v=!!s.scrollBy,b="client"+(i?"X":"Y"),g=i?Yt:Kt,w=i?"left":"top",x=i?"w":"h",$=i?"x":"y",E=t=>t.propertyName.indexOf(g)>-1;let S=!0;return M(bt,[nt(a,"pointerenter",(()=>{c(Pn,!0)})),nt(a,"pointerleave pointercancel",(()=>{c(Pn,!1)})),nt(a,"wheel",(t=>{const{deltaX:e,deltaY:n,deltaMode:r}=t;v&&S&&0===r&&Zt(a)===o&&s.scrollBy({left:e,top:n,behavior:"smooth"}),S=!1,c(Rn,!0),p((()=>{S=!0,c(Rn)})),On(t)}),{H:!1,I:!0}),nt(u,"transitionstart",(t=>{if(E(t)){const t=()=>{y(),h(t)};t()}})),nt(u,"transitionend transitioncancel",(t=>{E(t)&&(m(),y())})),nt(a,"mousedown",M(nt,r,"click",rn,{A:!0,I:!0}),{I:!0}),(()=>{const e="pointerup pointerleave pointercancel lostpointercapture";return nt(d,"pointerdown",(c=>{const l=qt(c.target,`.${an}`)===u,i=l?u:d,a=t.scrollbars,{button:p,isPrimary:f,pointerType:h}=c,{pointers:m}=a;if(0===p&&f&&a[l?"dragScroll":"clickScroll"]&&(m||[]).includes(h)){const t=!l&&c.shiftKey,a=M(Gt,u),p=M(Gt,d),f=(t,e)=>(t||a())[w]-(e||p())[w],h=Ve(Gt(s)[g])/re(s)[x]||1,m=((t,e)=>o=>{const{Lt:r}=n,c=re(d)[x]-re(u)[x],l=e*o/c*r[$];Rt(s,{[$]:t+l})})(te(s)[$]||0,1/h),y=c[b],v=a(),E=p(),S=v[g],L=f(v,E)+S/2,O=y-E[w],k=l?0:O-L,q=t=>{bt(W),i.releasePointerCapture(t.pointerId)},W=[ie(o,mt,js),nt(r,e,q),nt(r,"selectstart",(t=>On(t)),{H:!1}),nt(d,e,q),nt(d,"pointermove",(e=>{const n=e[b]-y;(l||t)&&m(k+n)}))];if(i.setPointerCapture(c.pointerId),t)m(k);else if(!l){const t=ee(uo);t&&J(W,t(m,f,k,S,O))}}}))})(),f,m])}},Eo=(t,e,n,o,s,r)=>{let c,l,i,a,d,u=St,p=0;const[f,h]=kt(),[m,y]=kt(),[v,b]=kt(100),[g,w]=kt(100),[x,$]=kt(100),[E,S]=kt((()=>p)),[L,O]=wo(t,s,o,So(e,s,o)),{bt:k,Zt:q,Rt:W}=s,{Ft:T,Bt:C,Nt:D,jt:I}=L,H=t=>{T(Qe,t,!0),T(Qe,t,!1)},P=(t,e)=>{if(S(),t)T(In);else{const t=M(T,In,!0);p>0&&!e?E(t):t()}},A=t=>"mouse"===t.pointerType,N=t=>{A(t)&&(a=l,a&&P(!0))},V=[b,S,w,$,y,h,()=>u(),nt(k,"pointerover",N,{A:!0}),nt(k,"pointerenter",N),nt(k,"pointerleave",(t=>{A(t)&&(a=!1,l&&P(!1))})),nt(k,"pointermove",(t=>{A(t)&&c&&f((()=>{b(),P(!0),g((()=>{c&&P(!1)}))}))})),nt(q,"scroll",(t=>{m((()=>{D(),i&&P(!0),v((()=>{i&&!a&&P(!1)}))})),r(t),I()}))];return[()=>M(bt,J(V,O())),({Et:t,Tt:e,Gt:s,Qt:r})=>{const{tn:a,nn:f,sn:h}=r||{},{Ct:m,dt:y}=s||{},{N:v}=n,{T:b}=vt(),{k:g,en:w}=o,[$,E]=t("showNativeOverlaidScrollbars"),[S,L]=t("scrollbars.theme"),[O,k]=t("scrollbars.visibility"),[J,A]=t("scrollbars.autoHide"),[N,V]=t("scrollbars.autoHideSuspend"),[R]=t("scrollbars.autoHideDelay"),[z,G]=t("scrollbars.dragScroll"),[F,B]=t("scrollbars.clickScroll"),[X,K]=t("overflow"),Y=y&&!e,_=w.x||w.y,j=a||f||m||e,Z=h||k||K,Q=$&&b.x&&b.y,U=(t,e,n)=>{const o=t.includes("scroll")&&("visible"===O||"auto"===O&&"scroll"===e);return T(eo,o,n),o};if(p=R,Y&&(N&&_?(H(!1),u(),x((()=>{u=nt(q,"scroll",M(H,!0),{A:!0})}))):H(!0)),E&&T(Js,Q),L&&(T(d),T(S,!0),d=S),V&&!N&&H(!0),A&&(c="move"===J,l="leave"===J,i="never"!==J,P(!i,!0)),G&&T(oo,z),B&&T(so,F),Z){const t=U(X.x,g.x,!0),e=U(X.y,g.y,!1);T(no,!(t&&e))}j&&(C(),D(),I(),T(Dn,!w.x,!0),T(Dn,!w.y,!1),T(Zs,v&&!W))},{},L]},xo=t=>{const e=vt(),{G:n,L:o}=e,{elements:s}=n(),{host:r,padding:c,viewport:l,content:i}=s,a=ce(t),d=a?{}:t,{elements:u}=d,{host:p,padding:f,viewport:h,content:m}=u||{},y=a?t:d.target,v=qe(y,"textarea"),b=y.ownerDocument,g=b.documentElement,w=y===b.body,x=b.defaultView,$=()=>b.activeElement,E=t=>{t&&t.focus&&t.focus()},S=M(po,[y]),L=M(ws,[y]),O=M(dn,[y]),k=M(Wt,""),q=M(S,k,l),W=M(L,k,i),T=q(h),C=T===y,D=C&&w,I=!C&&W(m),H=!C&&ce(T)&&T===I,P=H&&!!O(i),A=P?q():T,N=P?I:W(),V=D?g:H?A:T,R=v?S(k,r,p):y,z=H?N:I,G={gt:y,bt:D?V:R,D:V,cn:!C&&L(k,c,f),wt:z,kt:D?g:V,Zt:D?b:V,rn:w?g:y,ln:x,Kt:b,St:v,Rt:w,Dt:a,V:C,an:H,yt:t=>Rs(V,C?mt:Pt,t),Ot:(t,e)=>ge(V,C?mt:Pt,t,e)},F=Tt(G).reduce(((t,e)=>{const n=G[e];return J(t,!(!n||!ce(n)||Zt(n))&&n)}),[]),B=t=>t?$e(F,t):null,{gt:X,bt:K,cn:Y,D:_,wt:j}=G,Z=[()=>{Ot(K,[mt,_e]),Ot(X,_e),w&&Ot(g,[_e,mt])}],Q=v&&B(K);let U=v?X:We([j,_,Y,K,X].find((t=>!1===B(t))));const tt=D?X:j||_,et=M(bt,Z);return[G,()=>{const t=$(),e=t=>{gt(Zt(t),We(t)),It(t)},n=t=>t?nt(t,"focusin focusout focus blur",(t=>{rn(t),t.stopImmediatePropagation()}),{I:!0,H:!1}):St,s=n(t);if(yt(K,mt,C?"viewport":"host"),yt(Y,Ze,""),yt(j,kn,""),C||(yt(_,Pt,""),w&&ie(g,mt,qs)),Q&&(yn(X,K),J(Z,(()=>{yn(K,X),It(K)}))),gt(tt,U),gt(K,Y),gt(Y||K,!C&&_),gt(_,j),J(Z,[s,()=>{const t=$(),o=n(t);Ot(Y,Ze),Ot(j,kn),Ot(_,[ds,fs,Pt]),B(j)&&e(j),B(_)&&e(_),B(Y)&&e(Y),E(t),o()}]),o&&!C&&(ie(_,Pt,ms),J(Z,M(Ot,_,Pt))),C||x.top!==x||t!==y)E(t);else{const t="tabindex",e=He(_,t);yt(_,t,"-1"),E(_);const n=()=>e?yt(_,t,e):Ot(_,t),o=nt(b,"pointerdown keydown",(()=>{n(),o()}));J(Z,[n,o])}return s(),U=0,et},et]},Oo=({wt:t})=>({Gt:e,un:n,Tt:o})=>{const{xt:s}=e||{},{$t:r}=n;t&&(s||o)&&Qt(t,{[Kt]:r&&"100%"})},Co=({bt:t,cn:e,D:n,V:o},s)=>{const[r,c]=wt({u:Is,o:En()},M(En,t,"padding",""));return({Et:t,Gt:l,un:i,Tt:a})=>{let[d,u]=c(a);const{L:p}=vt(),{ht:f,Ht:h,Ct:m}=l||{},{N:y}=i,[v,b]=t("paddingAbsolute");(f||u||a||h)&&([d,u]=r(a));const g=!o&&(b||m||u);if(g){const t=!v||!e&&!p,o=d.r+d.l,r=d.t+d.b,c={[Xn]:t&&!y?-o:0,[Yn]:t?-r:0,[Gn]:t&&y?-o:0,top:t?-d.t:0,right:t?y?-d.r:"auto":0,left:t?y?"auto":-d.l:0,[Yt]:t&&`calc(100% + ${o}px)`},l={[Un]:t?d.t:0,[jn]:t?d.r:0,[Wn]:t?d.b:0,[qn]:t?d.l:0};Qt(e||n,c),Qt(n,l),q(s,{cn:d,fn:!t,j:e?l:q({},c,l)})}return{_n:g}}},$o=(t,e)=>{const n=vt(),{bt:o,cn:s,D:r,V:c,Ot:l,Rt:i,ln:a}=t,{L:d}=n,u=i&&c,p=M(me,0),f={u:Jn,o:{w:0,h:0}},h={u:Zn,o:{x:Jt,y:Jt}},[m,y]=wt(f,M(cn,r)),[v,b]=wt(f,M(Xe,r)),[g,w]=wt(f),[x,$]=wt(f),[E]=wt(h),S=ee(un);return({Et:i,Gt:f,un:h,Tt:M},{_n:L})=>{const{ht:O,Ht:k,Ct:W,zt:T}=f||{},C=S&&S.M(t,e,h,n,i),{q:J,W:D,X:I}=C||{},[H,P]=io(i,n),[A,N]=i("overflow"),V=O||L||k||W||T||P,R=we(A.x),z=we(A.y),G=R||z;let F=y(M),B=b(M),X=w(M),K=$(M);if(P&&d&&l(ms,!H),V){G&&l(Xt,!1);const[t,e]=D?D(undefined):[],[n,o]=F=m(M),[s,c]=B=v(M),i=ls(r),d=s,f=i;t&&t(),(c||o||P)&&e&&!H&&J&&J(e,s,n);const h=Ns(a),y={w:p(me(s.w,d.w)+n.w),h:p(me(s.h,d.h)+n.h)},b={w:p((u?h.w:f.w+p(i.w-s.w))+n.w),h:p((u?h.h:f.h+p(i.h-s.h))+n.h)};K=x(b),X=g(((t,e)=>{const n=ht.devicePixelRatio%1!=0?1:0,o={w:p(t.w-e.w),h:p(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}})(y,b),M)}const[Y,_]=K,[j,Z]=X,[Q,U]=B,[tt,et]=F,nt={x:j.w>0,y:j.h>0},ot=R&&z&&(nt.x||nt.y)||R&&nt.x&&!nt.y||z&&nt.y&&!nt.x;if(L||W||T||et||U||_||Z||N||P||V){const e={},n=ao(t,nt,A,e);I&&I(n,h,!!J&&J(n,Q,tt),e),c?(yt(o,ds,e[Le]),yt(o,fs,e[Te])):Qt(r,e)}ge(o,mt,ps,ot),ge(s,Ze,Gs,ot),c||ge(r,Pt,Xt,G);const[st,rt]=E(ys(t).k);return q(e,{k:st,Pt:{x:Y.w,y:Y.h},Lt:{x:j.w,y:j.h},en:nt}),{sn:rt,tn:_,nn:Z}}},Lo=t=>{const[e,n,o]=xo(t),s={cn:{t:0,r:0,b:0,l:0},fn:!1,j:{[Xn]:0,[Yn]:0,[Gn]:0,[Un]:0,[jn]:0,[Wn]:0,[qn]:0},Pt:{x:0,y:0},Lt:{x:0,y:0},k:{x:Jt,y:Jt},en:{x:!1,y:!1}},{gt:r,D:c,V:l}=e,{L:i,T:a}=vt(),d=!i&&(a.x||a.y),u=[Oo(e),Co(e,s),$o(e,s)];return[n,t=>{const e={},n=d&&te(c),o=l?ie(c,mt,Je):St;return W(u,(n=>{q(e,n(t,e)||{})})),o(),Rt(c,n),!l&&Rt(r,0),e},s,e,o]},To=(t,e,n,o)=>{const s=An(e,{}),[r,c,l,i,a]=Lo(t),[d,u,p]=yo(i,l,s,(t=>{v({},t)})),[f,h,,m]=Eo(t,e,p,l,i,o),y=t=>Tt(t).some((e=>!!t[e])),v=(t,o)=>{const{dn:s,Tt:r,At:l,vn:i}=t,a=s||{},d=!!r,f={Et:An(e,a,d),dn:a,Tt:d};if(i)return h(f),!1;const m=o||u(q({},f,{At:l})),v=c(q({},f,{un:p,Gt:m}));h(q({},f,{Gt:m,Qt:v}));const b=y(m),g=y(v),w=b||g||!nn(a)||d;return w&&n(t,{Gt:m,Qt:v}),w};return[()=>{const{rn:t,D:e}=i,n=te(t),o=[d(),r(),f()];return Rt(e,n),M(bt,o)},v,()=>({hn:p,pn:l}),{gn:i,bn:m},a]},zt=(t,e,n)=>{const{nt:o}=vt(),s=ce(t),r=s?t:t.target,c=Ss(r);if(e&&!c){let c=!1;const l=[],i={},a=t=>{const e=es(t,!0),n=ee(ro);return n?n(e,!0):e},d=q({},o(),a(e)),[u,p,f]=Ke(),[h,m,y]=Ke(n),v=(t,e)=>{y(t,e),f(t,e)},[b,g,w,x,$]=To(t,d,(({dn:t,Tt:e},{Gt:n,Qt:o})=>{const{ht:s,Ct:r,xt:c,Ht:l,It:i,dt:a}=n,{tn:d,nn:u,sn:p}=o;v("updated",[S,{updateHints:{sizeChanged:!!s,directionChanged:!!r,heightIntrinsicChanged:!!c,overflowEdgeChanged:!!d,overflowAmountChanged:!!u,overflowStyleChanged:!!p,contentMutation:!!l,hostMutation:!!i,appear:!!a},changedOptions:t||{},force:!!e}])}),(t=>v("scroll",[S,t]))),E=t=>{ho(r),bt(l),c=!0,v("destroyed",[S,t]),p(),m()},S={options(t,e){if(t){const n=e?o():{},s=as(d,q(n,a(t)));nn(s)||(q(d,s),g({dn:s}))}return q({},d)},on:h,off:(t,e)=>{t&&e&&m(t,e)},state(){const{hn:t,pn:e}=w(),{N:n}=t,{Pt:o,Lt:s,k:r,en:l,cn:i,fn:a}=e;return q({},{overflowEdge:o,overflowAmount:s,overflowStyle:r,hasOverflow:l,padding:i,paddingAbsolute:a,directionRTL:n,destroyed:c})},elements(){const{gt:t,bt:e,cn:n,D:o,wt:s,kt:r,Zt:c}=x.gn,{qt:l,Jt:i}=x.bn,a=t=>{const{Vt:e,Mt:n,Ut:o}=t;return{scrollbar:o,track:n,handle:e}},d=t=>{const{Wt:e,Xt:n}=t,o=a(e[0]);return q({},o,{clone:()=>{const t=a(n());return g({vn:!0}),t}})};return q({},{target:t,host:e,padding:n||o,viewport:o,content:s||o,scrollOffsetElement:r,scrollEventElement:c,scrollbarHorizontal:d(l),scrollbarVertical:d(i)})},update:t=>g({Tt:t,At:!0}),destroy:M(E,!1),plugin:t=>i[Tt(t)[0]]};return J(l,[$]),go(r,S),vs(hs,zt,[S,u,i]),mo(x.gn.Rt,!s&&t.cancel)?(E(!0),S):(J(l,b()),v("initialized",[S]),S.update(!0),S)}return c};function pn(t,e){document.addEventListener("click",(n=>{let o=document.getElementById(t),s=n.target;for(let t of e){let e=document.getElementById(t);if(e==s||e?.contains(s))return}o.classList.add("float-panel-closed")}))}function Ho(){const t=Cs();$s(t)}function Ao(){Ls(Ts())}function ko(){const t=document.getElementById("banner-wrapper");document.documentElement.hasAttribute("isHome")?(t.classList.remove("banner-else"),t.classList.add("banner-home")):(t.classList.remove("banner-home"),t.classList.add("banner-else"))}function Po(){zt({target:document.querySelector("body"),cancel:{nativeScrollbarsOverlaid:!0}},{scrollbars:{theme:"scrollbar-base scrollbar-auto py-1",autoHide:"move",autoHideDelay:500,autoHideSuspend:!1}}),document.querySelectorAll("pre").forEach((t=>{zt(t,{scrollbars:{theme:"scrollbar-base scrollbar-dark px-2",autoHide:"leave",autoHideDelay:500,autoHideSuspend:!1}})}))}function xs(){ko(),Ho(),Ao(),Po()}zt.plugin=t=>{const e=Et(t),n=e?t:[t],o=n.map((t=>vs(t,zt)[0]));return co(n),e?o:o[0]},zt.valid=t=>{const e=t&&t.elements,n=$t(e)&&e();return be(n)&&!!Ss(n.target)},zt.env=()=>{const{P:t,T:e,L:n,K:o,J:s,st:r,et:c,G:l,tt:i,nt:a,ot:d}=vt();return q({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,scrollTimeline:s,staticDefaultInitialization:r,staticDefaultOptions:c,getDefaultInitialization:l,setDefaultInitialization:i,getDefaultOptions:a,setDefaultOptions:d})},pn("display-setting",["display-setting","display-settings-switch"]),pn("nav-menu-panel",["nav-menu-panel","nav-menu-switch"]),pn("search-panel",["search-panel","search-bar","search-switch"]),xs(),document.addEventListener("astro:after-swap",xs);const _n=()=>{window.swup.hooks.on("link:click",(()=>{document.documentElement.style.setProperty("--content-delay","0ms")}))};function Do(){"dark"===localStorage.theme?(document.documentElement.classList.remove("dark"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),localStorage.theme="dark")}function Os(){document.getElementById("scheme-switch").addEventListener("click",(function(){Do()}));let t=document.getElementById("display-settings-switch");t&&t.addEventListener("click",(function(){document.getElementById("display-setting").classList.toggle("float-panel-closed")})),document.getElementById("nav-menu-switch").addEventListener("click",(function(){document.getElementById("nav-menu-panel").classList.toggle("float-panel-closed")}))}window.swup.hooks?_n():document.addEventListener("swup:enable",_n),Os(),document.addEventListener("astro:after-swap",(()=>{Os()}),{once:!1});class Io extends HTMLElement{constructor(){if(super(),void 0===this.dataset.isCollapsed||!1===this.dataset.isCollapsed)return;const t=this.dataset.id,e=this.querySelector(".expand-btn"),n=this.querySelector(`#${t}`);e.addEventListener("click",(()=>{n.classList.remove("collapsed"),e.classList.add("hidden")}))}}customElements.define("widget-layout",Io);