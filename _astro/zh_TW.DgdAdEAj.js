function M(){}function J(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function z(){return Object.create(null)}function b(t){t.forEach(B)}function D(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function Ct(t,e,n,i){if(t){const s=G(t,e,n,i);return t[0](s)}}function G(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function bt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)c[a]=e.dirty[a]|s[a];return c}return e.dirty|s}return e.dirty}function xt(t,e,n,i,s,c){if(s){const r=G(e,n,i,c);t.p(r,s)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function wt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let A=!1;function X(){A=!0}function Z(){A=!1}function I(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&u.push(d)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,d=(s>0&&e[n[s]].claim_order<=l?s+1:I(1,s,x=>e[n[x]].claim_order,l))-1;i[u]=n[d]+1;const f=d+1;n[f]=u,s=Math.max(f,s)}const c=[],r=[];let a=e.length-1;for(let u=n[s]+1;u!=0;u=i[u-1]){for(c.push(e[u-1]);a>=u;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);c.reverse(),r.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<r.length;u++){for(;l<c.length&&r[u].claim_order>=c[l].claim_order;)l++;const d=l<c.length?c[l]:null;t.insertBefore(r[u],d)}}function tt(t,e){if(A){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function et(t,e,n){t.insertBefore(e,n||null)}function nt(t,e,n){A&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function R(t){return document.createElement(t)}function U(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function At(){return H(" ")}function Tt(){return H("")}function $t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function W(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const ot=["width","height"];function Mt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&ot.indexOf(i)===-1?t[i]=e[i]:W(t,i,e[i])}function Et(t,e){for(const n in e)W(t,n,e[n])}function Nt(t){return t===""?null:+t}function it(t){return Array.from(t.childNodes)}function q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,e,n,i,s=!1){q(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const u=n(a);return u===void 0?t.splice(r,1):t[r]=u,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const u=n(a);return u===void 0?t.splice(r,1):t[r]=u,s?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function V(t,e,n,i){return F(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||c.push(a.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ht(t,e,n){return V(t,e,n,R)}function St(t,e,n){return V(t,e,n,U)}function st(t,e){return F(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Pt(t){return st(t," ")}function j(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function kt(t,e){const n=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new T(e);q(t);const s=t.splice(n,i-n+1);v(s[0]),v(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new T(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new T(e,c)}function zt(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e){t.value=e??""}function Ot(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Lt(t,e,n){t.classList.toggle(e,!!n)}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class ut{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=U(n.nodeName):this.e=R(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)et(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class T extends ut{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)nt(this.t,this.n[n],e)}}let C;function p(t){C=t}function S(){if(!C)throw new Error("Function called outside component initialization");return C}function Bt(t){S().$$.on_mount.push(t)}function Dt(t){S().$$.on_destroy.push(t)}function Gt(){const t=S();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=rt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}const m=[],O=[];let g=[];const L=[],lt=Promise.resolve();let E=!1;function ct(){E||(E=!0,lt.then(Y))}function N(t){g.push(t)}const $=new Set;let _=0;function Y(){if(_!==0)return;const t=C;do{try{for(;_<m.length;){const e=m[_];_++,p(e),at(e.$$)}}catch(e){throw m.length=0,_=0,e}for(p(null),m.length=0,_=0;O.length;)O.pop()();for(let e=0;e<g.length;e+=1){const n=g[e];$.has(n)||($.add(n),n())}g.length=0}while(m.length);for(;L.length;)L.pop()();E=!1,$.clear(),p(t)}function at(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function ft(t){const e=[],n=[];g.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),g=e}const y=new Set;let h;function Rt(){h={r:0,c:[],p:h}}function Ut(){h.r||b(h.c),h=h.p}function dt(t,e){t&&t.i&&(y.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(y.has(t))return;y.add(t),h.c.push(()=>{y.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function qt(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function ht(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),N(()=>{const c=t.$$.on_mount.map(B).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...c):b(c),t.$$.on_mount=[]}),s.forEach(N)}function _t(t,e){const n=t.$$;n.fragment!==null&&(ft(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(m.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Vt(t,e,n,i,s,c,r=null,a=[-1]){const u=C;p(t);const l=t.$$={fragment:null,ctx:[],props:c,update:M,not_equal:s,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:z(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};r&&r(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(f,x,...P)=>{const k=P.length?P[0]:x;return l.ctx&&s(l.ctx[f],l.ctx[f]=k)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](k),d&&mt(t,f)),x}):[],l.update(),d=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){X();const f=it(e.target);l.fragment&&l.fragment.l(f),f.forEach(v)}else l.fragment&&l.fragment.c();e.intro&&dt(t.$$.fragment),ht(t,e.target,e.anchor),Z(),Y()}p(u)}class Yt{$$=void 0;$$set=void 0;$destroy(){_t(this,1),this.$destroy=M}$on(e,n){if(!D(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gt);var o=(t=>(t.home="home",t.about="about",t.archive="archive",t.tags="tags",t.categories="categories",t.recentPosts="recentPosts",t.comments="comments",t.untitled="untitled",t.uncategorized="uncategorized",t.noTags="noTags",t.wordCount="wordCount",t.wordsCount="wordsCount",t.minuteCount="minuteCount",t.minutesCount="minutesCount",t.postCount="postCount",t.postsCount="postsCount",t.themeColor="themeColor",t.lightMode="lightMode",t.darkMode="darkMode",t.systemMode="systemMode",t.more="more",t.author="author",t.publishedAt="publishedAt",t.license="license",t))(o||{}),w=(t=>(t[t.Home=0]="Home",t[t.Archive=1]="Archive",t[t.About=2]="About",t))(w||{});const Jt={title:"Guertena",subtitle:"Blog",lang:"zh_TW",themeColor:{hue:250,fixed:!0},banner:{enable:!0,src:"assets/images/demo-banner.png"},favicon:[]};w.Home,w.Archive,w.About;const Qt={[o.home]:"Home",[o.about]:"About",[o.archive]:"Archive",[o.tags]:"Tags",[o.categories]:"Categories",[o.recentPosts]:"Recent Posts",[o.comments]:"Comments",[o.untitled]:"Untitled",[o.uncategorized]:"Uncategorized",[o.noTags]:"No Tags",[o.wordCount]:"word",[o.wordsCount]:"words",[o.minuteCount]:"minute",[o.minutesCount]:"minutes",[o.postCount]:"post",[o.postsCount]:"posts",[o.themeColor]:"Theme Color",[o.lightMode]:"Light",[o.darkMode]:"Dark",[o.systemMode]:"System",[o.more]:"More",[o.author]:"Author",[o.publishedAt]:"Published at",[o.license]:"License"},Xt={[o.home]:"Home",[o.about]:"About",[o.archive]:"Archive",[o.tags]:"タグ",[o.categories]:"カテゴリ",[o.recentPosts]:"最近の投稿",[o.comments]:"コメント",[o.untitled]:"タイトルなし",[o.uncategorized]:"カテゴリなし",[o.noTags]:"タグなし",[o.wordCount]:"文字",[o.wordsCount]:"文字",[o.minuteCount]:"分",[o.minutesCount]:"分",[o.postCount]:"件の投稿",[o.postsCount]:"件の投稿",[o.themeColor]:"テーマカラー",[o.lightMode]:"ライト",[o.darkMode]:"ダーク",[o.systemMode]:"システム",[o.more]:"もっと",[o.author]:"作者",[o.publishedAt]:"公開日",[o.license]:"ライセンス"},Zt={[o.home]:"主页",[o.about]:"关于",[o.archive]:"归档",[o.tags]:"标签",[o.categories]:"分类",[o.recentPosts]:"最新文章",[o.comments]:"评论",[o.untitled]:"无标题",[o.uncategorized]:"未分类",[o.noTags]:"无标签",[o.wordCount]:"字",[o.wordsCount]:"字",[o.minuteCount]:"分钟",[o.minutesCount]:"分钟",[o.postCount]:"篇文章",[o.postsCount]:"篇文章",[o.themeColor]:"主题色",[o.lightMode]:"亮色",[o.darkMode]:"暗色",[o.systemMode]:"跟随系统",[o.more]:"更多",[o.author]:"作者",[o.publishedAt]:"发布于",[o.license]:"许可协议"},It={[o.home]:"首頁",[o.about]:"關於",[o.archive]:"彙整",[o.tags]:"標籤",[o.categories]:"分類",[o.recentPosts]:"最新文章",[o.comments]:"評論",[o.untitled]:"無標題",[o.uncategorized]:"未分類",[o.noTags]:"無標籤",[o.wordCount]:"字",[o.wordsCount]:"字",[o.minuteCount]:"分鐘",[o.minutesCount]:"分鐘",[o.postCount]:"篇文章",[o.postsCount]:"篇文章",[o.themeColor]:"主題色",[o.lightMode]:"亮色",[o.darkMode]:"暗色",[o.systemMode]:"跟隨系統",[o.more]:"更多",[o.author]:"作者",[o.publishedAt]:"發佈於",[o.license]:"許可協議"};export{Qt as A,Zt as B,It as C,Xt as D,Jt as E,Ut as F,vt as G,Bt as H,o as I,T as J,kt as K,Rt as L,Tt as M,M as N,Dt as O,J as P,wt as Q,Mt as R,Yt as S,U as T,St as U,Et as V,Gt as W,qt as X,Ft as Y,ht as Z,_t as _,At as a,Ht as b,Ct as c,it as d,R as e,st as f,Pt as g,v as h,Vt as i,W as j,Lt as k,Ot as l,nt as m,tt as n,jt as o,$t as p,yt as q,bt as r,pt as s,H as t,xt as u,zt as v,dt as w,Wt as x,b as y,Nt as z};
