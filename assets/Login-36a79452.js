import{S as m,a as h}from"./request-e2b96923.js";import{f as r,u as x,o as b,h as w,i as y,w as S,Q as p,_ as d,j as e,p as L,q as k}from"./vue-router.esm-bundler-838e7efe.js";import{_ as I,m as C}from"./plugin-vueexport-helper-ae293a1c.js";import"./index-afdfb65a.js";const u=s=>(L("data-v-e7fbd7dc"),s=s(),k(),s),T={class:"page"},R=u(()=>e("div",{class:"header flex text-center items-center"},[e("div",{class:"w-full text-3xl font-bold text-white"},"HKUST Food Minus")],-1)),V=u(()=>e("div",{class:"text-center text-2xl font-bold my-8"},"Login",-1)),B={__name:"Login",setup(s){const o=r(""),a=r(""),c=x(),n=r(!1),_=async()=>{if(o.value.length===0||a.value.length===0){C.error("Please complete all fields");return}n.value=!0;let l=await h("post","login",{itsc:o.value,password:a.value});if(n.value=!1,l.error===!1){let t=l.result;localStorage.setItem("food_minus_app",JSON.stringify({token:t,itsc:o.value})),c.push({path:"/"}),location.reload()}},g=()=>{c.push({path:"/register"})},v=()=>{console.log("recover")};return(l,t)=>{const f=m;return b(),w("div",T,[y(f,{spinning:n.value,tip:"Logging in"},{default:S(()=>[R,V,p(e("input",{type:"text",class:"input",placeholder:"ITSC","onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i)},null,512),[[d,o.value]]),p(e("input",{type:"password",class:"input",placeholder:"password","onUpdate:modelValue":t[1]||(t[1]=i=>a.value=i)},null,512),[[d,a.value]]),e("span",{class:"text-btn color-primary",onClick:v},"Forget password?"),e("div",{class:"btn-group"},[e("div",{class:"btn primary-btn bg-color-primary font-bold",onClick:_},"Login"),e("div",{class:"btn secondary-btn color-primary font-bold",onClick:g},"Signup")])]),_:1},8,["spinning"])])}}},M=I(B,[["__scopeId","data-v-e7fbd7dc"]]);export{M as default};