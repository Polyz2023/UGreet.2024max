import{a as n}from"./axios-CCb-kr4I.js";import{_ as d,c as a,e as h,a as e,d as l,t as r,h as p,f as v,o as i,g}from"./index-3ldEQz1r.js";const w={props:["PUID"],data(){return{post:null}},methods:{},async mounted(){try{console.log("Отправка PUID:",this.PUID);const o=await n.post("/account/posts/getbypuid",{PUID:this.PUID});console.log("Ответ от сервера:",o.data),this.post=o.data.post,console.log("Получение поста по PUID успешно: ",this.post,"PUID:",this.PUID)}catch(o){console.log("Ошибка при получении поста по PUID: ",o,"PUID:",this.PUID)}}},u={key:0,id:"alert_1"},_={id:"dh1",style:{width:"100%",height:"100%","border-radius":"10px",display:"flex","justify-content":"center","align-items":"center"}},f={id:"alert_img"},m=["src"],x={key:1,id:"alert_2"},y={id:"alert_desc"},b={style:{"font-size":"30px"}},I={style:{"font-size":"20px"}},P={key:2,style:{display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"100%","background-color":"rgba(239, 239, 239, 0.725)"}};function D(o,t,U,V,s,z){const c=g("l-tailspin");return i(),a("main",null,[t[3]||(t[3]=h('<footer data-v-56e14cc9><a href="/home" data-v-56e14cc9><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" data-v-56e14cc9><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" data-v-56e14cc9></path><path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" data-v-56e14cc9></path></svg></a><a href="/account" data-v-56e14cc9><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" data-v-56e14cc9><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" data-v-56e14cc9></path></svg></a><a href="/newpost" data-v-56e14cc9><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-btn" viewBox="0 0 16 16" data-v-56e14cc9><path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" data-v-56e14cc9></path><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" data-v-56e14cc9></path></svg></a><a href="/RandPost" data-v-56e14cc9><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16" data-v-56e14cc9><path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6" data-v-56e14cc9></path></svg></a></footer>',1)),s.post?(i(),a("div",u,[e("div",_,[e("div",f,[e("img",{src:s.post.IMGBASE64,alt:"Post Image"},null,8,m)])])])):l("",!0),s.post?(i(),a("div",x,[e("div",y,[e("strong",b,r(s.post.name),1),t[0]||(t[0]=p()),t[1]||(t[1]=e("br",null,null,-1)),t[2]||(t[2]=e("hr",null,null,-1)),e("p",I,r(s.post.Descryption),1)])])):l("",!0),s.post==null?(i(),a("div",P,[v(c,{size:"40",stroke:"5",speed:"0.9",color:"white"})])):l("",!0)])}const M=d(w,[["render",D],["__scopeId","data-v-56e14cc9"]]);export{M as default};
