import{j as h}from"./index-VWaDGczM.js";import{a as g}from"./axios-CCb-kr4I.js";import{_ as u,c as o,e as p,a as t,t as i,F as _,r as m,d as n,f as v,o as d,g as w}from"./index-DlX9oaHS.js";const f={data(){return{data:{},us_data:null}},mounted(){const a=localStorage.getItem("E-token");if(a)try{const e=h(a);this.data=e,console.log("Декодированные данные:",e),this.GetData()}catch(e){console.error("Ошибка при декодировании токена:",e)}},methods:{async GetData(){try{const a=await g.post("/account/getdata",{user_id:this.data.user_id});console.log("Get data user client response: ",a),this.us_data=a.data,console.log("Get data user client response: ",this.us_data)}catch(a){console.log("SignIn user client ERROR response: ",a),console.log("Data:",this.data.user_id)}}}},x={id:"alert_1"},y={key:0,style:{width:"100%",height:"100%"}},b={id:"mb_us"},k={class:"icon-div",style:{width:"100px",height:"100px","border-radius":"50%","background-color":"#ccc",cursor:"pointer",display:"flex","align-items":"center","justify-content":"center"}},z=["src"],V={style:{"font-size":"20px","margin-left":"20px"}},B={style:{padding:"10px","margin-top":"20px","align-items":"center","background-color":"rgba(239, 239, 239, 0.725)",width:"95%",height:"75%","max-width":"97%","max-height":"75%"}},D={id:"mb_data"},C={class:"grid-container",style:{"overflow-y":"auto","background-color":"rgba(239, 239, 239, 0.125)","margin-top":"10px",width:"100%",height:"75%","max-width":"100%","max-height":"55%"}},G={class:"grid-item"},I=["href"],M={key:1,style:{display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"100%"}};function N(a,e,j,E,s,L){const l=w("l-tailspin");return d(),o("main",null,[e[0]||(e[0]=p('<footer data-v-30deaa0d><a href="/home" data-v-30deaa0d><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" data-v-30deaa0d><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" data-v-30deaa0d></path><path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" data-v-30deaa0d></path></svg></a><a href="/account" data-v-30deaa0d><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" data-v-30deaa0d><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" data-v-30deaa0d></path></svg></a><a href="/newpost" data-v-30deaa0d><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-btn" viewBox="0 0 16 16" data-v-30deaa0d><path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" data-v-30deaa0d></path><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" data-v-30deaa0d></path></svg></a></footer>',1)),t("div",x,[s.us_data!=null?(d(),o("div",y,[t("div",b,[t("div",k,[t("img",{src:s.us_data.IMGUser,alt:"icon",style:{width:"100%",height:"100%","border-radius":"50%"}},null,8,z)]),t("strong",V,i(s.us_data.username),1)]),t("div",B,[t("div",D,[t("div",null,[t("strong",null,"Number of posts: "+i(s.us_data.Posts.length),1)]),t("div",null,[t("strong",null,"Email: "+i(s.data.email),1)])]),t("div",C,[(d(!0),o(_,null,m(s.us_data.Posts,(r,c)=>(d(),o("li",{key:c},[t("div",G,[t("a",{href:`/${r.PUID}`},i(r.name),9,I)])]))),128))])])])):n("",!0),s.us_data==null?(d(),o("div",M,[v(l,{size:"40",stroke:"5",speed:"0.9",color:"white"})])):n("",!0)])])}const R=u(f,[["render",N],["__scopeId","data-v-30deaa0d"]]);export{R as default};
