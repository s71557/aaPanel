import{_ as a}from"./index73.js?v=1723125373998";import{_ as e,a as l}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998";import{V as o,W as t}from"./mail.js?v=1723125373998";import{N as i,ae as s,cG as r}from"./index.js?v=1723125373998";import{g as d}from"./data.js?v=1723125373998";import{l as n,r as u,f as m,S as p,Z as c,P as v,V as _,_ as f,W as b}from"./vue.js?v=1723125373998";import{_ as x}from"./Select.js?v=1723125373998";import"./pinia.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";const h={class:"p-20px"},w={class:"w-320px"},q={class:"w-320px"},j={class:"w-100px ml-20px"},y={class:"w-320px"},g=f("li",{class:"text-error"}," Prompt that the A record resolution failed. Please check whether the filled A record domain name has been resolved to the server IP ",-1),E=f("li",null,"A record needs to be added to your DNS service provider console.",-1),A=f("li",null,"If you use CloudFlare, please select [DNS only] when adding records.",-1),B=n({__name:"index",props:{row:{},isEdit:{type:Boolean}},emits:["refresh"],setup(n,{expose:B,emit:P}){const U=n,C=P,D=u(null),G=m({domain:"",a_record:"",quota:5,quota_unit:"GB",mailboxes:50,email:""}),M=[{label:"GB",value:"GB"},{label:"MB",value:"MB"}],S={domain:{trigger:["blur","input"],validator:()=>""!==G.domain.trim()||new Error("Mailbox domain name cannot be empty!")}},N=()=>({domain:G.domain,a_record:G.a_record,quota:G.quota+" "+G.quota_unit,mailboxes:G.mailboxes,email:G.email});return(()=>{const{isEdit:a,row:e}=U;if(a&&e){G.domain=e.domain,G.a_record=e.a_record;const a=i(e.quota);G.quota=d(a.split(" ")[0]),G.quota_unit=a.split(" ")[1],G.mailboxes=e.mailboxes,G.email=e.email}})(),B({onConfirm:async()=>{var a;await(null==(a=D.value)?void 0:a.validate());const{isEdit:e}=U;e?await o(N()):await t(N()),C("refresh")}}),(o,t)=>{const i=s,d=e,n=r,u=x,m=l,B=a;return p(),c("div",h,[v(m,{ref_key:"formRef",ref:D,model:b(G),rules:S},{default:_((()=>[v(d,{label:"Domain name",path:"domain"},{default:_((()=>[f("div",w,[v(i,{value:b(G).domain,"onUpdate:value":t[0]||(t[0]=a=>b(G).domain=a),disabled:o.isEdit,placeholder:"Please enter a domain name, e.g: aapanel.com"},null,8,["value","disabled"])])])),_:1}),v(d,{label:"A record"},{default:_((()=>[f("div",q,[v(i,{value:b(G).a_record,"onUpdate:value":t[1]||(t[1]=a=>b(G).a_record=a),disabled:o.isEdit,placeholder:"Please enter A record e.g: mail.aapanel.com"},null,8,["value","disabled"])])])),_:1}),v(d,{label:"Domain quota"},{default:_((()=>[v(n,{value:b(G).quota,"onUpdate:value":t[2]||(t[2]=a=>b(G).quota=a),class:"w-200px",min:0,"show-button":!1},null,8,["value"]),f("div",j,[v(u,{value:b(G).quota_unit,"onUpdate:value":t[3]||(t[3]=a=>b(G).quota_unit=a),options:M},null,8,["value"])])])),_:1}),v(d,{label:"Mailboxes"},{default:_((()=>[v(n,{value:b(G).mailboxes,"onUpdate:value":t[4]||(t[4]=a=>b(G).mailboxes=a),class:"w-320px",min:0,"show-button":!1},null,8,["value"])])),_:1}),v(d,{label:"CatchAll"},{default:_((()=>[f("div",y,[v(i,{value:b(G).email,"onUpdate:value":t[5]||(t[5]=a=>b(G).email=a),placeholder:"Catch non-existent mail, forward to this mail"},null,8,["value"])])])),_:1})])),_:1},8,["model"]),v(B,null,{default:_((()=>[g,E,A])),_:1})])}}});export{B as default};