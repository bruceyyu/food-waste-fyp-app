import{a as _,g as R,c as F,e as f,h as G,P as A,i as V}from"./_plugin-vue_export-helper-ba3a04e4.js";import{k as H,l as X,n as q,i as D,m as k,c as d}from"./index-cab4ef3d.js";var J=typeof global=="object"&&global&&global.Object===Object&&global;const K=J;var Q=typeof self=="object"&&self&&self.Object===Object&&self,Y=K||Q||Function("return this")();const L=Y;var Z=L.Symbol;const I=Z;var M=Object.prototype,nn=M.hasOwnProperty,tn=M.toString,$=I?I.toStringTag:void 0;function en(n){var t=nn.call(n,$),e=n[$];try{n[$]=void 0;var i=!0}catch{}var a=tn.call(n);return i&&(t?n[$]=e:delete n[$]),a}var rn=Object.prototype,an=rn.toString;function on(n){return an.call(n)}var sn="[object Null]",cn="[object Undefined]",W=I?I.toStringTag:void 0;function ln(n){return n==null?n===void 0?cn:sn:W&&W in Object(n)?en(n):on(n)}function dn(n){return n!=null&&typeof n=="object"}var un=function(t,e){var i=_({},t);return Object.keys(e).forEach(function(a){var o=i[a];if(o)o.type||o.default?o.default=e[a]:o.def?o.def(e[a]):i[a]={type:o,default:e[a]};else throw new Error("not have ".concat(a," prop"))}),i};const fn=un;function U(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}var pn="[object Symbol]";function gn(n){return typeof n=="symbol"||dn(n)&&ln(n)==pn}var mn=/\s/;function hn(n){for(var t=n.length;t--&&mn.test(n.charAt(t)););return t}var vn=/^\s+/;function yn(n){return n&&n.slice(0,hn(n)+1).replace(vn,"")}var z=0/0,bn=/^[-+]0x[0-9a-f]+$/i,Sn=/^0b[01]+$/i,Tn=/^0o[0-7]+$/i,$n=parseInt;function B(n){if(typeof n=="number")return n;if(gn(n))return z;if(U(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=U(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=yn(n);var e=Sn.test(n);return e||Tn.test(n)?$n(n.slice(2),e?2:8):bn.test(n)?z:+n}var jn=function(){return L.Date.now()};const C=jn;var xn="Expected a function",On=Math.max,Pn=Math.min;function In(n,t,e){var i,a,o,p,c,l,m=0,v=!1,g=!1,b=!0;if(typeof n!="function")throw new TypeError(xn);t=B(t)||0,U(e)&&(v=!!e.leading,g="maxWait"in e,o=g?On(B(e.maxWait)||0,t):o,b="trailing"in e?!!e.trailing:b);function S(r){var u=i,T=a;return i=a=void 0,m=r,p=n.apply(T,u),p}function j(r){return m=r,c=setTimeout(s,t),v?S(r):p}function E(r){var u=r-l,T=r-m,w=t-u;return g?Pn(w,o-T):w}function x(r){var u=r-l,T=r-m;return l===void 0||u>=t||u<0||g&&T>=o}function s(){var r=C();if(x(r))return y(r);c=setTimeout(s,E(r))}function y(r){return c=void 0,b&&i?S(r):(i=a=void 0,p)}function N(){c!==void 0&&clearTimeout(c),m=0,i=l=a=c=void 0}function O(){return c===void 0?p:y(C())}function h(){var r=C(),u=x(r);if(i=arguments,a=this,l=r,u){if(c===void 0)return j(l);if(g)return clearTimeout(c),c=setTimeout(s,t),S(l)}return c===void 0&&(c=setTimeout(s,t)),p}return h.cancel=N,h.flush=O,h}var En=["class","style"],Nn=function(){return{prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:A.any,delay:Number,indicator:A.any}},P=null;function Cn(n,t){return!!n&&!!t&&!isNaN(Number(t))}function wn(n){var t=n.indicator;P=typeof t=="function"?t:function(){return d(t,null,null)}}const An=H({compatConfig:{MODE:3},name:"ASpin",inheritAttrs:!1,props:fn(Nn(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:X("configProvider",V)}},data:function(){var t=this.spinning,e=this.delay,i=Cn(t,e);return{sSpinning:t&&!i}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var t=this;q(function(){t.debouncifyUpdateSpinning(),t.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(t){var e=t||this.$props,i=e.delay;i&&(this.cancelExistingSpin(),this.updateSpinning=In(this.originalUpdateSpinning,i))},updateSpinning:function(){var t=this.spinning,e=this.sSpinning;e!==t&&(this.sSpinning=t)},cancelExistingSpin:function(){var t=this.updateSpinning;t&&t.cancel&&t.cancel()},renderIndicator:function(t){var e="".concat(t,"-dot"),i=R(this,"indicator");return i===null?null:(Array.isArray(i)&&(i=i.length===1?i[0]:i),D(i)?k(i,{class:e}):P&&D(P())?k(P(),{class:e}):d("span",{class:"".concat(e," ").concat(t,"-dot-spin")},[d("i",{class:"".concat(t,"-dot-item")},null),d("i",{class:"".concat(t,"-dot-item")},null),d("i",{class:"".concat(t,"-dot-item")},null),d("i",{class:"".concat(t,"-dot-item")},null)]))}},render:function(){var t,e,i,a=this.$props,o=a.size,p=a.prefixCls,c=a.tip,l=c===void 0?(t=(e=this.$slots).tip)===null||t===void 0?void 0:t.call(e):c,m=a.wrapperClassName,v=this.$attrs,g=v.class,b=v.style,S=F(v,En),j=this.configProvider,E=j.getPrefixCls,x=j.direction,s=E("spin",p),y=this.sSpinning,N=(i={},f(i,s,!0),f(i,"".concat(s,"-sm"),o==="small"),f(i,"".concat(s,"-lg"),o==="large"),f(i,"".concat(s,"-spinning"),y),f(i,"".concat(s,"-show-text"),!!l),f(i,"".concat(s,"-rtl"),x==="rtl"),f(i,g,!!g),i),O=d("div",_(_({},S),{},{style:b,class:N}),[this.renderIndicator(s),l?d("div",{class:"".concat(s,"-text")},[l]):null]),h=G(this);if(h&&h.length){var r,u=(r={},f(r,"".concat(s,"-container"),!0),f(r,"".concat(s,"-blur"),y),r);return d("div",{class:["".concat(s,"-nested-loading"),m]},[y&&d("div",{key:"loading"},[O]),d("div",{class:u,key:"container"},[h])])}return O}});export{An as S,wn as s};