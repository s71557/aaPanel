System.register(["./echarts-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185"],(function(e,t){"use strict";var n,i,l,a,u,o,s,r,c,d,m,g,p,y,f,v,h,j,w,_,b,x,B,z,D,I;return{setters:[e=>{n=e.e,i=e.u,l=e.n,a=e.i,u=e.a,o=e.b,s=e.c,r=e.d,c=e.f,d=e.g,m=e.o,g=e.j,p=e.k,y=e.l},e=>{f=e.bc},e=>{v=e.d,h=e.r,j=e.w,w=e.n,_=e.f,b=e.o,x=e.O,B=e.P,z=e.H,D=e.R,I=e.as},null,null],execute:function(){i([l,a,u,o,s,r,c,d,m,g,p,y]),e("default",v({__name:"index",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"200px"},dataZoom:{type:Boolean,default:!1},option:{type:Object,required:!0}},setup(e){const t=e,i=h(null);function l(){if(null===i.value)return;let e=n.getInstanceByDom(i.value);null==e&&(e=n.init(i.value)),e.setOption(t.option,!0)}j((()=>t.option),(e=>{e&&w((()=>{l()}))}),{immediate:!0,deep:!0});const a=I((function(){null!==i.value&&n.getInstanceByDom(i.value)?.resize()}),300,{maxWait:800});return _((()=>{w((()=>{l(),window.addEventListener("resize",a)}))})),b((()=>{i.value&&(n.getInstanceByDom(i.value)?.dispose(),window.removeEventListener("resize",a))})),(t,n)=>(x(),B("div",{ref_key:"chartRef",ref:i,style:z({width:D(f)(e.width),height:D(f)(e.height)})},null,4))}}))}}}));