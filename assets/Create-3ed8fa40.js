import{_ as M,f as o,o as k,a as j,c as O,b as e,w as m,v as h,d as f,p as D,e as P}from"./index-269c322e.js";import{m as E,_ as N}from"./mainHeader-87123dbc.js";const s=d=>(D("data-v-9441175c"),d=d(),P(),d),T={class:"page"},W=["src"],q=s(()=>e("img",{class:"camera-image place-self-center",src:N},null,-1)),A=[q],G={class:"slider-section"},z=s(()=>e("div",null,"How much food did you finish overall?",-1)),J={class:"flex justify-between"},K={class:"slider-section"},Q=s(()=>e("div",null,"How much rice/noodle did you finish overall?",-1)),X={class:"flex justify-between"},Y={class:"slider-section"},Z=s(()=>e("div",null,"How much vegetable did you finish overall?",-1)),$={class:"flex justify-between"},ee={class:"slider-section"},te=s(()=>e("div",null,"How much meat did you finish overall?",-1)),le={class:"flex justify-between"},se=s(()=>e("div",{class:"text-gray-400 text-xs mx-6"}," * For not applicable food type, please select 100% ",-1)),ae=s(()=>e("div",{class:"btn place-content-center text-white text-xl text-center"}," Submit ",-1)),oe={__name:"Create",setup(d){const g=o(90),y=o(90),x=o(90),w=o(90),b=o(null),R=()=>{b.value.click(),console.log(b)},H=async a=>{let t=a.target.files[0];const l=await I(t,{quality:1,type:"image/jpeg"});U.value=URL.createObjectURL(t),console.log(t),console.log(l),console.log(URL.createObjectURL(l))},U=o(),I=async(a,{quality:t=1,type:l=a.type})=>new Promise((V,ne)=>{let C=new FileReader;C.onloadend=function(L){var n=new Image;n.src=L.target.result,n.style.imageOrientation="from-image",n.onload=async function(ie){let{width:i,height:c}=n,r=400,u=400,p=i,v=c;(i>r||c>u)&&(i/c>r/u?(p=r,v=Math.round(r*(c/i))):(v=u,p=Math.round(u*(i/c))));var _=document.createElement("canvas");_.width=p,_.height=v;var S=_.getContext("2d");S.drawImage(n,0,0,p,v);const F=await new Promise(B=>_.toBlob(B,l,t));V(new File([F],a.name,{type:F.type}))}},C.readAsDataURL(a)});return(a,t)=>(k(),j("div",T,[O(E),e("input",{ref_key:"uploadFile",ref:b,type:"file",style:{display:"none"},accept:"image/*",capture:"camera",name:"file",onChange:H},null,544),U.value?(k(),j("img",{key:0,class:"pic-preview",src:U.value,onClick:R},null,8,W)):(k(),j("div",{key:1,class:"pic-placehoder flex place-content-center",onClick:R},A)),e("div",G,[z,e("div",J,[m(e("input",{type:"range",min:"1",max:"100","onUpdate:modelValue":t[0]||(t[0]=l=>g.value=l),class:"slider overall place-self-center"},null,512),[[h,g.value]]),e("div",null,f(g.value)+"%",1)])]),e("div",K,[Q,e("div",X,[m(e("input",{type:"range",min:"1",max:"100","onUpdate:modelValue":t[1]||(t[1]=l=>y.value=l),class:"slider rice place-self-center"},null,512),[[h,y.value]]),e("div",null,f(y.value)+"%",1)])]),e("div",Y,[Z,e("div",$,[m(e("input",{type:"range",min:"1",max:"100","onUpdate:modelValue":t[2]||(t[2]=l=>x.value=l),class:"slider vegetable place-self-center"},null,512),[[h,x.value]]),e("div",null,f(x.value)+"%",1)])]),e("div",ee,[te,e("div",le,[m(e("input",{type:"range",min:"1",max:"100","onUpdate:modelValue":t[3]||(t[3]=l=>w.value=l),class:"slider meat place-self-center"},null,512),[[h,w.value]]),e("div",null,f(w.value)+"%",1)])]),se,ae]))}},re=M(oe,[["__scopeId","data-v-9441175c"]]);export{re as default};
