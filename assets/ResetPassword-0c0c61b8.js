import{S as h,a as g}from"./request-a7bb9537.js";import{u as y,g as x,f as o,h as R,o as b,j as V,k,w as P,l as e,n as f,t as C,R as d,$ as c}from"./vue-router.esm-bundler-f47d5b1d.js";import{m as p}from"./useConfigInject-968d6b94.js";import"./index-8350f723.js";const S={class:"page"},q=e("div",{class:"header flex text-center items-center"},[e("div",{class:"w-full text-3xl font-bold text-white"},"HKUST Food Minus")],-1),N=e("div",{class:"text-center text-2xl font-bold my-8"},"Reset Password",-1),U={class:"w-10/12 text-gray-600 m-auto"},B={class:"font-bold"},A={__name:"ResetPassword",setup(L){const v=y(),u=x(),i=o(!1),l=o(""),n=o(""),t=o(""),r=o("");R(()=>{!u.query||!u.query.itsc?v.push({name:"Login"}):l.value=u.query.itsc});const w=async()=>{if(l.value.length===0||n.value.length===0||t.value.length===0||r.value.length===0){p.error("Please complete all fields");return}if(t.value!==r.value){p.error("Passwords are not consistent");return}i.value=!0;let m=await g("post","reset",{itsc:l.value,code:n.value,password:t.value});i.value=!1,m.error===!1&&(p.success("password successfully changed!"),v.push({name:"Login"}))};return(m,s)=>{const _=h;return b(),V("div",S,[k(_,{spinning:i.value,tip:"Verifying"},{default:P(()=>[q,N,e("div",U,[f(" An email with secure code was sent to "),e("span",B,C(l.value)+"@connect.ust.hk",1),f(". Please check your spams if you didn't receive the email. ")]),d(e("input",{type:"text",class:"input",placeholder:"Secure Code","onUpdate:modelValue":s[0]||(s[0]=a=>n.value=a)},null,512),[[c,n.value]]),d(e("input",{type:"password",class:"input",placeholder:"New password","onUpdate:modelValue":s[1]||(s[1]=a=>t.value=a)},null,512),[[c,t.value]]),d(e("input",{type:"password",class:"input",placeholder:"Confirm password","onUpdate:modelValue":s[2]||(s[2]=a=>r.value=a)},null,512),[[c,r.value]]),e("div",{class:"btn-group"},[e("div",{class:"btn primary-btn bg-color-primary font-bold",onClick:w}," Reset password ")])]),_:1},8,["spinning"])])}}};export{A as default};
