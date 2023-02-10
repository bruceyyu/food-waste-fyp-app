import{S as i,s as I,a as g}from"./request-b35818e7.js";import{r as h,o as D,u as L,a as t,c as s,b as n,d as e,t as T,w as v,e as j,F as y,f as x,g as B,p as P,h as M}from"./index-829f29a1.js";import{r as N,d as V}from"./dailyItem-340a59d0.js";import{m as F}from"./mainHeader-73d11f47.js";import{c as K}from"./camera-8cc3cd59.js";import{_ as R}from"./plugin-vueexport-helper-140e9ddf.js";i.setDefaultIndicator=I;i.install=function(a){return a.component(i.name,i),a};const c=a=>(P("data-v-f14cab56"),a=a(),M(),a),U={class:"page"},q=c(()=>e("div",{class:"flex justify-between mx-6 mt-4 mb-2"},[e("div",{class:"text-lg font-bold"},"Community overview")],-1)),z={class:"section flex flex-col mx-auto"},E={class:"flex justify-between my-1"},W={class:"ring-chart"},A={class:"self-center",style:{width:"45vw"}},G=c(()=>e("div",{class:"color-primary text-lg font-bold"},"This week’s HKUST:",-1)),J={class:"color-primary text-lg"},O=c(()=>e("div",{class:"text-lg font-bold"},"My badge wall",-1)),Q={class:"section mx-auto"},X={class:"flex"},Y=["src"],Z={class:"flex justify-between mx-6 mt-4"},$=c(()=>e("div",{class:"text-lg font-bold"},"My history",-1)),ee={key:0},te={key:1,class:"m-4 text-center"},se={class:"fixed bottom-5 right-3 flex-col image-wrapper pos"},ae={__name:"Home",setup(a){const u={overall:81,vegetable:88,meat:77,rice:77},b="https://fyp-smart-canteen.s3.ap-northeast-1.amazonaws.com/badges/",r=h(null),o=h(null),f=3,w=async()=>{let m=await g("get","history",{},!0);m.error===!1&&(o.value=m.result);let _=await g("get","badge",{},!0);_.error===!1&&(r.value=_.result)};D(()=>{w()});const d=L(),k=()=>{d.push({name:"History"})},C=()=>{d.push({name:"Create"})},S=()=>{d.push({name:"BadgeWall"})};return(m,_)=>{const p=i;return t(),s("div",U,[n(F),q,e("div",z,[e("div",E,[e("div",W,[n(N,{summary:u,legend:!0})]),e("div",A,[G,e("div",J,T(u.overall)+"% complete ",1)])])]),e("div",{class:"flex justify-between mx-6 mt-4 mb-2"},[O,e("div",{class:"color-primary self-center",onClick:S}," show more ")]),n(p,{spinning:r.value===null,tip:"loading"},{default:v(()=>[e("div",Q,[e("div",X,[(t(!0),s(y,null,x(r.value,l=>(t(),s("img",{class:"badge-image mx-2",key:l.id,src:b+l.id+(l.progress===100?"_active.png":"_inactive.png")},null,8,Y))),128))])])]),_:1},8,["spinning"]),n(p,{spinning:o.value===null,tip:"loading"},{default:v(()=>[e("div",Z,[$,o.value&&o.value.length>f?(t(),s("div",{key:0,class:"color-primary self-center",onClick:k}," show more ")):B("",!0)]),o.value&&o.value.length?(t(),s("div",ee,[(t(!0),s(y,null,x(o.value.slice(0,f),(l,H)=>(t(),s("div",{class:"flex justify-between items-center",key:H},[n(V,{data:l},null,8,["data"])]))),128))])):(t(),s("div",te," Share your action and earn badges now 💪 "))]),_:1},8,["spinning"]),e("div",se,[n(j(K),{class:"camera-image",onClick:C})])])}}},de=R(ae,[["__scopeId","data-v-f14cab56"]]);export{de as default};