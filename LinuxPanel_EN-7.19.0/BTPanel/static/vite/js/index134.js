import{_ as a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{aa as t,h as e,f as s,cK as i,I as o,cL as n}from"./page_layout.js?v=1732601582185";import{e as l}from"./file.js?v=1732601582185";import{b as d,I as r,u as p}from"./public.js?v=1732601582185";import{a as m,_}from"./index.vue_vue_type_script_setup_true_lang13.js?v=1732601582185";import{d as c,W as u,r as x,M as b,O as g,P as f,Y as y,Q as D,Z as v,R as h,ao as w}from"./vue.js?v=1732601582185";import{bO as j}from"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";const k={class:"px-20px py-24px"},C={class:"font-bold"},L={class:"mt-16px text-error"},$={key:0,class:"mt-4px"},I=c({__name:"index",props:{data:{}},emits:["close"],setup(c,{expose:I,emit:O}){const{t:R}=u(),F=c,{ids:H}=F.data,K=O,M=t(),P=x(!0),Q=x([]),U=a=>{let t="--";for(let e=0;e<M.remoteList.length;e++){const s=M.remoteList[e];if(s.id===a){t=s.ps||s.db_host;break}}return t},W=x([{key:"name",title:R("Database.index_12"),ellipsis:{tooltip:{width:"trigger"}}},{key:"total",title:R("Component.UploadFile.index_4"),width:120,render:a=>e(a.total)},{key:"position",title:R("Database.index_19")},{key:"addtime",title:R("Docker.Container.config.status.index_11"),width:160,render:a=>a.addtime},{key:"result",title:R("Database.tools.index_24"),align:"right",width:140,render:a=>a.position!==M.remoteList[0].ps?b("div",{class:"text-error"},[R("Database.tools.index_25")]):b("div",{class:P.value?"":"text-error"},[P.value?R("Database.tools.index_26"):R("Database.tools.index_25")])}]),{loading:Y,setLoading:Z}=d(),q=async a=>await n(M.type,{name:a.name,id:a.id}),z=()=>{p({title:R("Database.index_30"),hideClose:!0,data:{title:R("Database.index_30"),api:q,data:Q.value,callback:A},component:m})},A=a=>{K("close"),M.setRefresh(!0),p({title:R("Database.tools.index_30"),width:440,footer:!0,component:_,data:{title:R("Database.index_30"),data:a,status:"done",columns:[{key:"name",title:R("Database.index_12"),ellipsis:{tooltip:{width:"trigger"}}}]}})};return(async()=>{await(async()=>{const{message:a}=await l();s(a)&&(P.value=a.status_db)})(),(async()=>{try{Z(!0);const{message:a}=await i({ids:H});s(a)?Q.value=o(a.data)?a.data.map((a=>({...a,position:U(a.sid)}))):[]:Q.value=[]}finally{Z(!1)}})()})(),I({onConfirm:()=>{const a=R("Database.tools.index_27"),t=R("Database.tools.index_28");r({text:R("Database.index_30"),title:R("Database.tools.index_29"),content:P.value?a:t,onConfirm:async({hide:a})=>{z(),a()}})}}),(t,e)=>{const s=j,i=a;return g(),f("div",k,[b(s,{type:"warning"},{default:y((()=>[D("span",C,v(t.$t("Database.tools.index_20"))+": ",1),D("span",null,v(t.$t("Database.tools.index_21")),1)])),_:1}),b(i,{class:"mt-16px",loading:h(Y),"loading-num":h(H).length,"max-height":300,data:h(Q),columns:h(W)},null,8,["loading","loading-num","data","columns"]),D("div",L,[D("p",null,v(t.$t("Database.tools.index_21")),1),h(P)?w("",!0):(g(),f("p",$,v(t.$t("Database.tools.index_22")),1))])])}}});export{I as default};