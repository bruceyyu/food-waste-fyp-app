import{a as _,S as c}from"./request-0e84d263.js";import{d}from"./dailyItem-c41d23f6.js";import{m}from"./mainHeader-b825e043.js";import{_ as p}from"./plugin-vueexport-helper-ae293a1c.js";import{f as u,g as f,o as s,h as a,i as o,w as y,j as v,F as g,n as h}from"./vue-router.esm-bundler-838e7efe.js";import"./index-de8f2d7e.js";const x={class:"page"},w={class:"w-full h-screen mt-4"},H={__name:"History",setup(b){const e=u(null),n=async()=>{let t=await _("get","history",{},!0);t.error===!1&&(e.value=t.result)};return f(()=>{n()}),(t,k)=>{const r=c;return s(),a("div",x,[o(m),o(r,{spinning:e.value==null,tip:"loading"},{default:y(()=>[v("div",w,[(s(!0),a(g,null,h(e.value,(i,l)=>(s(),a("div",{class:"flex justify-between items-center",key:l},[o(d,{data:i},null,8,["data"])]))),128))])]),_:1},8,["spinning"])])}}},S=p(H,[["__scopeId","data-v-12803b73"]]);export{S as default};