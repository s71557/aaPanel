System.register(["./index-legacy.js?v=1723125373998","./mail-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998"],(function(t,e){"use strict";var a,i,l,d,o,s,r,v,c,n,p,y,u,m,x,_,g,h,b,w;return{setters:[t=>{a=t.O,i=t.j,l=t.r,d=t.a},t=>{o=t.g},t=>{s=t._},t=>{r=t.l,v=t.ad,c=t.r,n=t.k,p=t.an,y=t.S,u=t.Z,m=t.P,x=t.V,_=t._,g=t.a3,h=t.W,b=t.F,w=t.U},null],execute:function(){var e=document.createElement("style");e.textContent=".n-card[data-v-a2c8d69d]{--n-title-font-size: 18px;--n-title-font-weight: bold}.total-list[data-v-a2c8d69d]{display:flex;justify-content:center;flex-wrap:wrap;margin-bottom:24px}.total-list .total-item[data-v-a2c8d69d]{width:18%;text-align:center}.total-list .total-label[data-v-a2c8d69d]{margin-bottom:8px;font-size:14px;color:#666}.total-list .total-value[data-v-a2c8d69d]{display:flex;align-items:center;justify-content:center;min-height:28px}\n",document.head.appendChild(e);const O={class:"p-24px"},f={class:"total-list"},M={class:"total-item"},j={class:"total-label"},S={class:"total-value text-primary text-22px"},H={class:"total-item"},$={class:"total-label"},A={class:"total-value text-17px"},C={class:"total-item"},L={class:"total-label"},k={class:"total-value text-17px"},G={class:"h-200px"},B={class:"p-24px"},E={class:"total-list"},F={class:"total-item"},P={class:"total-label"},W={class:"total-value text-primary text-22px"},z={class:"total-item"},D={class:"total-label"},I={class:"total-value text-17px"},U={class:"total-item"},V={class:"total-label"},Z={class:"total-value text-17px"},q={class:"h-200px"},J=d(r({__name:"today",setup(t){const{t:e}=v(),d=c({delivered:0,bounced:0,received:0,rejected:0}),r=n((()=>d.value.delivered||0)),w=n((()=>d.value.bounced||0)),J=n((()=>{const t=w.value+r.value;return 0===t?0:(r.value/t*100).toFixed(1)})),K=p({tooltip:{trigger:"axis",order:"seriesDesc",axisPointer:{type:"shadow"}},legend:{top:0,itemGap:16,icon:"circle",itemWidth:10,itemHeight:10,data:[e("Mail.Overview.today_2"),e("Mail.Overview.today_3")],textStyle:{lineHeight:12,padding:[0,0,-2,0],rich:{a:{verticalAlign:"middle"}}}},grid:{top:"16%",left:"2%",right:"2%",bottom:"4%",containLabel:!0},xAxis:{type:"category",axisLabel:{formatter:t=>a(t,"HH:mm")}},yAxis:{type:"value",boundaryGap:[0,"6%"],splitLine:{show:!0,lineStyle:{type:"dashed",width:1,color:"#ebeef5"}}},series:[{type:"bar",name:e("Mail.Overview.today_3"),data:[]},{type:"bar",name:e("Mail.Overview.today_2"),data:[]}]}),N=n((()=>d.value.received||0)),Q=n((()=>d.value.rejected||0)),R=n((()=>{const t=Q.value+N.value;return 0===t?0:(N.value/t*100).toFixed(1)})),T=p({tooltip:{trigger:"axis",order:"seriesDesc",axisPointer:{type:"shadow"}},legend:{top:0,itemGap:16,icon:"circle",itemWidth:10,itemHeight:10,data:[e("Mail.Overview.today_4"),e("Mail.Overview.today_5")],textStyle:{lineHeight:12,padding:[0,0,-2,0],rich:{a:{verticalAlign:"middle"}}}},grid:{top:"16%",left:"2%",right:"2%",bottom:"4%",containLabel:!0},xAxis:{type:"category",axisLabel:{formatter:t=>a(t,"HH:mm")}},yAxis:{type:"value",boundaryGap:[0,"6%"],splitLine:{show:!0,lineStyle:{type:"dashed",width:1,color:"#ebeef5"}}},series:[{type:"bar",name:e("Mail.Overview.today_5"),data:[]},{type:"bar",name:e("Mail.Overview.today_4"),data:[]}]});return(async()=>{const{message:t}=await o();i(t)&&(d.value=t.stats_dict,(t=>{const i=[],l=[],d=[],o=[];t.forEach((t=>{i.push([a(t.time),t.bounced]),l.push([a(t.time),t.delivered]),d.push([a(t.time),t.received]),o.push([a(t.time),t.rejected])})),K.series=[{type:"bar",name:e("Mail.Overview.today_3"),data:i,stack:"total",itemStyle:{color:"#1A519B"}},{type:"bar",name:e("Mail.Overview.today_2"),data:l,stack:"total",itemStyle:{color:"#91CC75"}}],T.series=[{type:"bar",name:e("Mail.Overview.today_5"),data:o,stack:"total",itemStyle:{color:"#7CB5EC"}},{type:"bar",name:e("Mail.Overview.today_4"),data:d,stack:"total",itemStyle:{color:"#7895CB"}}]})(t.hourly_stats))})(),(t,e)=>{const a=l;return y(),u(b,null,[m(a,{class:"mb-16px",title:t.$t("Mail.Overview.today_7")},{default:x((()=>[_("div",O,[_("div",f,[_("div",M,[_("div",j,g(t.$t("Mail.Overview.today_1")),1),_("div",S,g(h(J))+"%",1)]),_("div",H,[_("div",$,g(t.$t("Mail.Overview.today_2")),1),_("div",A,g(h(r)),1)]),_("div",C,[_("div",L,g(t.$t("Mail.Overview.today_3")),1),_("div",k,g(h(w)),1)])]),_("div",G,[m(s,{type:"bar",height:"200",option:h(K)},null,8,["option"])])])])),_:1},8,["title"]),m(a,{title:t.$t("Mail.Overview.today_8")},{default:x((()=>[_("div",B,[_("div",E,[_("div",F,[_("div",P,g(t.$t("Mail.Overview.today_6")),1),_("div",W,g(h(R))+"%",1)]),_("div",z,[_("div",D,g(t.$t("Mail.Overview.today_4")),1),_("div",I,g(h(N)),1)]),_("div",U,[_("div",V,g(t.$t("Mail.Overview.today_5")),1),_("div",Z,g(h(Q)),1)])]),_("div",q,[m(s,{type:"bar",height:"200",option:h(T)},null,8,["option"])])])])),_:1},8,["title"])],64)}}}),[["__scopeId","data-v-a2c8d69d"]]);t("default",r({__name:"index",setup:t=>(t,e)=>(y(),w(J))}))}}}));