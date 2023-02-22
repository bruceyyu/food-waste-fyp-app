import{S as h,s as M,a as V}from"./request-516c2d8f.js";import{f as _,u as A,g as N,h as P,i as F,o as s,j as t,k as o,w as q,l as e,m as c,t as l,n as k,p as y,F as I,q as S,s as E,v as O}from"./vue-router.esm-bundler-f47d5b1d.js";import{r as z,t as D,d as K}from"./dailyItem-d6630a94.js";import{m as U}from"./mainHeader-ea29bf25.js";import{t as W,r as Y,v as G,m as J,c as Q}from"./tableware_icon-a25ec4a8.js";import{_ as X}from"./plugin-vueexport-helper-b9105508.js";import"./index-70ffc837.js";h.setDefaultIndicator=M;h.install=function(i){return i.component(h.name,h),i};const n=i=>(E("data-v-5a21b327"),i=i(),O(),i),Z={class:"page"},$=n(()=>e("div",{class:"flex justify-between mx-6 mt-4 mb-2"},[e("div",{class:"text-lg font-bold"},"Overview")],-1)),ee={class:"section flex flex-col mx-auto"},se={class:"flex justify-between"},te={class:"ring-chart",style:{width:"30%"}},ae={style:{width:"70%"},class:"flex flex-col justify-around"},oe={class:"flex justify-between"},le={class:"flex"},ne=n(()=>e("span",null,"Overall",-1)),ie={class:"text-center"},ce={key:0,class:"font-bold text-xl"},re={key:1,class:"font-bold text-xl"},de=n(()=>e("span",null,"%",-1)),_e={class:"flex"},ue=n(()=>e("span",null,"Rice",-1)),ve={class:"text-center"},me={key:0,class:"font-bold text-xl"},he={key:1,class:"font-bold text-xl"},fe=n(()=>e("span",null,"%",-1)),pe={class:"flex"},xe={class:"text-center"},ye={key:0,class:"font-bold text-xl"},ge={key:1,class:"font-bold text-xl"},be=n(()=>e("span",null,"%",-1)),we={class:"flex"},ke={class:"text-center"},Ie={key:0,class:"font-bold text-xl"},Se={key:1,class:"font-bold text-xl"},De=n(()=>e("span",null,"%",-1)),je={key:0,class:"desc text-xs"},Ce={key:0,class:"text-xs text-center compare"},He=n(()=>e("div",{class:"text-lg font-bold"},"My badge wall",-1)),Le={class:"section mx-auto"},Re={class:"flex"},Te=["src"],Be={class:"flex justify-between mx-6 mt-4"},Me=n(()=>e("div",{class:"text-lg font-bold"},"My history",-1)),Ve={key:0},Ae={key:1,class:"m-4 text-center"},Ne={class:"fixed bottom-5 right-3 flex-col image-wrapper pos"},Pe={__name:"Home",setup(i){const f=_(!1),a=_(null),u=_(null),p=_(null),j="https://fyp-smart-canteen.s3.ap-northeast-1.amazonaws.com/badges/",g=_(null),r=_(null),b=3,w=async()=>{f.value=!0;let v=await V("get","summary",{},!0);if(f.value=!1,v.error===!1){let d=v.result;a.value=d.overview.curr_average,u.value=d.overview.relative_average,p.value=d.overview.time,r.value=d.history,g.value=d.badge}},x=A(),C=N();P(()=>{w()}),F(()=>C.params.needReload,async v=>{v&&w()});const H=()=>{x.push({name:"History"})},L=()=>{x.push({name:"Create"})},R=()=>{x.push({name:"BadgeWall"})};return(v,d)=>{const T=h;return s(),t("div",Z,[o(U),o(T,{spinning:f.value,tip:"loading"},{default:q(()=>[$,e("div",ee,[e("div",se,[e("div",te,[o(z,{summary:a.value},null,8,["summary"])]),e("div",ae,[e("div",oe,[e("div",null,[e("div",le,[o(c(W),{class:"summary-icon"}),ne]),e("div",ie,[a.value?(s(),t("span",ce,l(a.value.overall),1)):(s(),t("span",re,"--")),de])]),e("div",null,[e("div",_e,[o(c(Y),{class:"summary-icon",fill:"#F39221"}),ue]),e("div",ve,[a.value?(s(),t("span",me,l(a.value.rice),1)):(s(),t("span",he,"--")),fe])]),e("div",null,[e("div",pe,[o(c(G),{class:"summary-icon",fill:"#68A885"}),k(" Vege ")]),e("div",xe,[a.value?(s(),t("span",ye,l(a.value.vegetable),1)):(s(),t("span",ge,"--")),be])]),e("div",null,[e("div",we,[o(c(J),{class:"summary-icon",fill:"#A81E2D"}),k(" Meat ")]),e("div",ke,[a.value?(s(),t("span",Ie,l(a.value.meat),1)):(s(),t("span",Se,"--")),De])])]),a.value?(s(),t("div",je," Average data from "+l(c(D)(p.value.earliest))+" to "+l(c(D)(p.value.latest)),1)):y("",!0)])]),u.value?(s(),t("div",Ce," You're saving "+l(Math.abs(u.value.overall))+"% "+l(u.value.overall<0?"below":"above")+" the average of HKUST "+l(u.value.overall<0?"🥺":"🥳"),1)):y("",!0)]),e("div",null,[e("div",{class:"flex justify-between mx-6 mt-4 mb-2"},[He,e("div",{class:"color-primary self-center",onClick:R}," show more ")]),e("div",Le,[e("div",Re,[(s(!0),t(I,null,S(g.value,m=>(s(),t("img",{class:"badge-image mx-2",key:m.id,src:j+m.id+(m.progress===100?"_active.png":"_inactive.png")},null,8,Te))),128))])])]),e("div",null,[e("div",Be,[Me,r.value&&r.value.length>b?(s(),t("div",{key:0,class:"color-primary self-center",onClick:H}," show more ")):y("",!0)]),r.value&&r.value.length?(s(),t("div",Ve,[(s(!0),t(I,null,S(r.value.slice(0,b),(m,B)=>(s(),t("div",{class:"flex justify-between items-center",key:B},[o(K,{data:m},null,8,["data"])]))),128))])):(s(),t("div",Ae," Share your action and earn badges now 💪 "))]),e("div",Ne,[o(c(Q),{class:"camera-image",onClick:L})])]),_:1},8,["spinning"])])}}},We=X(Pe,[["__scopeId","data-v-5a21b327"]]);export{We as default};
