import{J as e,K as a}from"./index.js?v=1723125373998";import{_ as s}from"./DataTable.js?v=1723125373998";import{l as p,ah as t,k as i,ai as r,S as u,U as o,V as l,_ as g,a3 as n,L as m}from"./vue.js?v=1723125373998";const c={class:"ml-8px text-14px"},f=p({__name:"index",props:t({storeKey:{default:""},pageSizes:{default:()=>[10,20,50,100]}},{page:{},pageModifiers:{},pageSize:{},pageSizeModifiers:{}}),emits:t(["refresh"],["update:page","update:pageSize"]),setup(p,{emit:t}){const f=p,v=t,z=i((()=>{const{storeKey:e}=f;return e?"".concat(e,"-page"):""})),d=r(p,"page"),S=r(p,"pageSize"),x=e=>{d.value=e,v("refresh")},h=e=>{d.value=1,S.value=e,_(e),v("refresh")},_=a=>{z.value&&e(z.value,String(a))};return(()=>{if(z.value){const e=a(z.value);e&&(S.value=Number(e))}})(),(e,a)=>{const p=s;return u(),o(p,m(e.$attrs,{page:d.value,"onUpdate:page":[a[0]||(a[0]=e=>d.value=e),x],"page-size":S.value,"onUpdate:pageSize":[a[1]||(a[1]=e=>S.value=e),h],"show-size-picker":"","show-quick-jumper":"","page-sizes":e.pageSizes,"display-order":["pages","size-picker","quick-jumper"]}),{suffix:l((({itemCount:a})=>[g("span",c,n(e.$t("Public.Table.Total",{total:a})),1)])),_:1},16,["page","page-size","page-sizes"])}}});export{f as _};