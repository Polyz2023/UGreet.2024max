import{j as p}from"./index-VWaDGczM.js";import{a as g}from"./axios-CCb-kr4I.js";import{_ as v,c as l,a as e,e as u,b as h,v as c,o as r}from"./index-JOan7Ogj.js";const m={data(){return{PostData:{name:null,Descryption:null,PUID:`PUID_${Math.floor(Math.random()*99999999)+1}_PUID`,IMGBASE64:null},selectedFile:null,UID:null}},mounted(){console.log(this.PostData.PUID);const a=localStorage.getItem("E-token");if(a)try{const t=p(a);this.UID=t.user_id,console.log("Декодированные данные:",t)}catch(t){console.error("Ошибка при декодировании токена:",t)}},methods:{handleDivClick(){this.$refs.fileInput.click()},handleFileChange(a){const t=a.target.files[0];if(t){const n=new FileReader;n.onload=d=>{this.PostData.IMGBASE64=d.target.result},n.readAsDataURL(t),this.selectedFile=t}},async CreatePost(){try{const a=await g.post("/account/newpost",{name:this.PostData.name,PUID:this.PostData.PUID,Descryption:this.PostData.Descryption,IMGBASE64:this.PostData.IMGBASE64,UID:this.UID});console.log("Get data user client response: ",a),this.us_data=a.data,console.log("Get data user client response: ",this.us_data)}catch(a){console.log("SignIn user client ERROR response: ",a),console.log("Data:",this.data.user_id)}}}},f={id:"alert_1"},D={id:"md_1"},w={id:"mb_data_1"},y={id:"mb_data_2"},_={id:"md_1"},x={style:{display:"flex","justify-content":"start","align-items":"center","background-color":"rgba(239, 239, 239, 0.725)",width:"95%",height:"64vh",padding:"10px"}},P={style:{display:"flex","justify-content":"center","margin-top":"10px","align-items":"center",height:"100%",width:"100%"}},I=["src"],k={key:1};function C(a,t,n,d,o,i){return r(),l("main",null,[e("footer",null,[t[5]||(t[5]=u('<a href="/home" data-v-e4a5531a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" data-v-e4a5531a><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" data-v-e4a5531a></path><path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" data-v-e4a5531a></path></svg></a><a href="/account" data-v-e4a5531a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" data-v-e4a5531a><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" data-v-e4a5531a></path></svg></a><a href="/newpost" data-v-e4a5531a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-btn" viewBox="0 0 16 16" data-v-e4a5531a><path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" data-v-e4a5531a></path><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" data-v-e4a5531a></path></svg></a>',3)),e("a",{href:"/randpost",onClick:t[0]||(t[0]=s=>i.CreatePost()),style:{"text-align":"center"}}," Send Post ")]),e("div",f,[e("div",D,[e("div",w,[h(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>o.PostData.name=s)},null,512),[[c,o.PostData.name]]),t[6]||(t[6]=e("strong",{style:{"font-size":"20px","margin-left":"20px"}},"Post name",-1))]),e("div",y,[h(e("textarea",{name:"",id:"",cols:"10",rows:"10",style:{width:"100%",height:"94%","max-height":"94%"},"onUpdate:modelValue":t[2]||(t[2]=s=>o.PostData.Descryption=s)},null,512),[[c,o.PostData.Descryption]]),t[7]||(t[7]=e("strong",{style:{"font-size":"20px","margin-left":"20px"}},"Desc.",-1))])]),e("div",_,[e("div",x,[e("div",P,[e("div",{class:"icon-div",onClick:t[3]||(t[3]=(...s)=>i.handleDivClick&&i.handleDivClick(...s)),style:{width:"80%",height:"90%","background-color":"#ccc",cursor:"pointer",display:"flex","align-items":"center","justify-content":"center"}},[o.PostData.IMGBASE64?(r(),l("img",{key:0,src:o.PostData.IMGBASE64,alt:"icon",style:{width:"100%",height:"100%"}},null,8,I)):(r(),l("span",k,"Upload Image"))]),e("input",{type:"file",ref:"fileInput",style:{display:"none"},onChange:t[4]||(t[4]=(...s)=>i.handleFileChange&&i.handleFileChange(...s))},null,544)])])])])])}const B=v(m,[["render",C],["__scopeId","data-v-e4a5531a"]]);export{B as default};
