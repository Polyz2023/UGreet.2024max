import{a as d}from"./axios-CCb-kr4I.js";import{_ as c,c as e,e as h,a as s,d as l,t as r,h as p,f as v,o as i,g as f}from"./index-JOan7Ogj.js";const g={props:["PUID"],data(){return{post:null}},methods:{},async mounted(){try{console.log("Отправка PUID:",this.PUID);const a=await d.post("/account/posts/getbypuid",{PUID:this.PUID});console.log("Ответ от сервера:",a.data),this.post=a.data.post,console.log("Получение поста по PUID успешно: ",this.post,"PUID:",this.PUID)}catch(a){console.log("Ошибка при получении поста по PUID: ",a,"PUID:",this.PUID)}}},w={key:0,id:"alert_1"},b={id:"dh1",style:{width:"100%",height:"100%","border-radius":"10px",display:"flex","justify-content":"center","align-items":"center"}},u={id:"alert_img"},_=["src"],m={key:1,id:"alert_2"},x={id:"alert_desc"},y={style:{"font-size":"30px"}},I={style:{"font-size":"20px"}},P={key:2,style:{display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"100%","background-color":"rgba(239, 239, 239, 0.725)"}};function D(a,t,U,V,o,z){const n=f("l-tailspin");return i(),e("main",null,[t[3]||(t[3]=h('<footer data-v-b415fc33><a href="/home" data-v-b415fc33><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" data-v-b415fc33><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" data-v-b415fc33></path><path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" data-v-b415fc33></path></svg></a><a href="/account" data-v-b415fc33><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" data-v-b415fc33><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" data-v-b415fc33></path></svg></a><a href="/newpost" data-v-b415fc33><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-btn" viewBox="0 0 16 16" data-v-b415fc33><path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" data-v-b415fc33></path><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" data-v-b415fc33></path></svg></a><a href="/RandPost" data-v-b415fc33><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16" data-v-b415fc33><path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6" data-v-b415fc33></path></svg></a></footer>',1)),o.post?(i(),e("div",w,[s("div",b,[s("div",u,[s("img",{src:o.post.IMGBASE64,alt:"Post Image"},null,8,_)])])])):l("",!0),o.post?(i(),e("div",m,[s("div",x,[s("strong",y,r(o.post.name),1),t[0]||(t[0]=p()),t[1]||(t[1]=s("br",null,null,-1)),t[2]||(t[2]=s("hr",null,null,-1)),s("p",I,r(o.post.Descryption),1)])])):l("",!0),o.post==null?(i(),e("div",P,[v(n,{size:"40",stroke:"5",speed:"0.9",color:"white"})])):l("",!0)])}const M=c(g,[["render",D],["__scopeId","data-v-b415fc33"]]);export{M as default};
