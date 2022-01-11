import{r as L,c as I,a as S,o as d,b as l,d as e,e as _,F as V,p,f as m,S as k,g as H,w as W,h as A,i as D,j as X,k as J,l as Q,m as F,n as x,t as U,q as C,s as R,A as K,u as $}from"./vendor.a301fb8e.js";const q=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}};q();const g=L({user:{},account:{}});var u=(t,a)=>{for(const[s,o]of a)t[s]=o;return t};const Z={name:"App",setup(){return{appState:I(()=>g)}}},ee={class:"container-fluid background"},te={class:"row"},ae=e("footer",null,null,-1);function se(t,a,s,o,n,c){const i=S("router-view");return d(),l(V,null,[e("main",ee,[e("div",te,[_(i)])]),ae],64)}var oe=u(Z,[["render",se]]),ne="/assets/317755_badge_html_html5_achievement_award_icon.e2b4a4be.png",ce="/assets/317756_badge_css_css3_achievement_award_icon.f631c67f.png",ie="/assets/Bootstrap_logo.svg.06cd910d.png",re="/assets/652581_code_command_develop_javascript_language_icon.01ad5cbe.png",de="/assets/4375017_js_logo_node_icon.113473f2.png",le="data:image/png;base64,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",ue="/assets/csharp.99b02ab5.png",pe="/assets/mysql.01510dc0.png",me="/assets/mongodb-logo.95639efd.png",fe="/assets/vscode.55dd6256.png",ve="/assets/figma.b3e58ec8.png",he="data:image/png;base64,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";const _e={setup(){return{}}},N=t=>(p("data-v-d51793be"),t=t(),m(),t),ge={class:"aboutcomponent"},be=N(()=>e("div",{class:"d-flex justify-content-center"},[e("div",{class:"text-white text-end mt-5"},[e("p",{class:"font text-center m-0 f-18"}," It's quite fun to do the impossible. "),e("i",{class:"font text-warning"}," \u2015 Walt Disney")])],-1)),we=N(()=>e("div",{class:"row mb-4"},[e("div",{class:"col-md-4 d-flex justify-content-center"},[e("div",{class:"card experienced p-2 d-flex"},[e("p",{class:"font text-white f-16 m-2 mb-1"},"EXPERIENCED IN:"),e("div",{class:"d-flex flex-wrap justify-content-center mt-2"},[e("div",{title:"HTML 5",class:"p-2 m-2 iconscard grow rounded"},[e("img",{class:"icon pb-1 p-md-1 img-fluid",src:ne,alt:""})]),e("div",{title:"CSS 3",class:"p-2 m-2 iconscard grow rounded"},[e("img",{class:"icon p-md-1 img-fluid",src:ce,alt:""})]),e("div",{title:"Bootstrap",class:"p-2 m-2 iconscard grow rounded"},[e("img",{class:"icon img-fluid pt-md-1 pb-1",src:ie,alt:""})]),e("div",{title:"JavaScript",class:"p-2 m-2 iconscard js grow rounded"},[e("img",{class:"icon img-fluid",src:re,alt:""})]),e("div",{title:"Node.Js",class:"p-2 csharp m-2 iconscard grow rounded"},[e("img",{class:"icon img-fluid",src:de,alt:""})]),e("div",{title:"Vue 3",class:"p-2 m-2 csharp iconscard grow rounded"},[e("img",{class:"icon p-md-1 img-fluid",src:le,alt:""})]),e("div",{title:"C#",class:"p-2 m-2 csharp iconscard grow rounded"},[e("img",{class:"icon ps-1 img-fluid",src:ue,alt:""})]),e("div",{title:"MySQL",class:"p-2 m-2 iconscard grow rounded"},[e("img",{class:"icon p-md-1 img-fluid",src:pe,alt:""})]),e("div",{title:"MongoDB",class:"p-2 m-2 iconscard grow rounded"},[e("img",{class:"icon pb-1 img-fluid",src:me,alt:""})]),e("div",{title:"VS Code",class:"p-2 m-2 iconscard grow rounded"},[e("img",{class:"icon pb-1 p-md-1 img-fluid",src:fe,alt:""})]),e("div",{title:"Figma",class:"p-2 m-2 iconscard grow rounded"},[e("img",{class:"icon pb-1 ps-1 p-md-1 ms-md-2 img-fluid",src:ve,alt:""})]),e("div",{title:"RESTful API",class:"p-2 m-2 iconscard csharp grow rounded"},[e("img",{class:"icon img-fluid rest",src:he,alt:""})])])])]),e("div",{class:"col-md-8 d-flex justify-content-center"},[e("div",{class:"card aboutme d-flex flex-md-row"},[e("div",{class:"col-md-6"},[e("div",null,[e("p",{class:"font text-white m-3 ms-4 mb-0 f-16"}," A LITTLE ABOUT ME: ")]),e("div",{class:"p-4 pt-2"},[e("p",{class:"font textabout text-white"}," I came from Brazil after trying out colleges there ( Architecture and Physical Education ) because my dream was to live here in the USA and after almost 3 years working as a mover, I finally found something that I love doing and that is coding. Everything started when I began my course at Boise CodeWorks that is an Immersive Full Stack course with over 500 hours of in-class learning. I learned both front-end and back-end technologies and built full stack applications solo and with a team of developers, also using SCRUM methodologies. ")])]),e("div",{class:"col-md-6 d-flex align-items-center justify-content-center flex-column"},[e("p",{class:"font textabout text-white pt-md-3 px-4"}," Ever since I started learning about code I fell in love with it, and it became a habit to code everyday, I love how it makes me think a lot to solve problems and challenges and there's always something new to learn. It is definately an exciting carrer field. "),e("p",{class:"font textabout text-white p-4 pt-2"}," I've always been a computer person as I grew up with computers in my house. Learned early how to fix computers and also started playing games on it. What probably also lead me to this carrer field. ")])])])],-1)),Ae=[be,we];function xe(t,a,s,o,n,c){return d(),l("div",ge,Ae)}var ye=u(_e,[["render",xe],["__scopeId","data-v-d51793be"]]),Be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye}),Ie="/assets/keepr.e574dd2a.jpg";const Se={setup(){return{}}},ke=t=>(p("data-v-da7b1950"),t=t(),m(),t),Ce={class:"App1"},Ne=ke(()=>e("div",{class:"modal fade",id:"Keepr",tabindex:"-1","aria-labelledby":"KeeprLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog modal-lg"},[e("div",{class:"modal-content"},[e("div",{class:"modal-body font"},[e("div",{class:"d-flex justify-content-between"},[e("div",null,[e("p",{class:"text-white f-24"},"Keepr App")]),e("div",null,[e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})])]),e("div",null,[e("img",{class:"project img-fluid rounded",src:Ie,alt:""})]),e("div",{class:"mt-3"},[e("p",{class:"text-white f-16 mb-0"}," Pinterest like app that allow users create public or private vaults and post pictures. Each vault can have pictures from anybody within the app and you can keep track of how many people added your pictures to their vaults. "),e("p",{class:"text-white f-16"}," FullStack app built solo, one of the biggest challenges was to make sure all the relashionships worked perfectly so that the front-end had all the support necessary for the complexity of the data used in this app. "),e("p",{class:"text-white f-16"}," Tecnologies used: Vue 3, CSS, C#, DotNET and MySQL. "),e("p",{class:"check f-16"},"Coming Soon!")])])])])],-1)),Te=[Ne];function je(t,a,s,o,n,c){return d(),l("div",Ce,Te)}var Me=u(Se,[["render",je],["__scopeId","data-v-da7b1950"]]),Pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me}),Oe="/assets/goodoldays.1c77be15.jpg";const Ge={setup(){return{}}},Ee=t=>(p("data-v-9299defa"),t=t(),m(),t),ze={class:"App1"},Ye=Ee(()=>e("div",{class:"modal fade",id:"GoodOlDays",tabindex:"-1","aria-labelledby":"GoodOlDaysLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog modal-lg"},[e("div",{class:"modal-content"},[e("div",{class:"modal-body font"},[e("div",{class:"d-flex justify-content-between"},[e("div",null,[e("p",{class:"text-white f-24"},"Good Ol' Days App")]),e("div",null,[e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})])]),e("div",null,[e("img",{class:"project img-fluid rounded",src:Oe,alt:""})]),e("div",{class:"mt-3"},[e("p",{class:"text-white f-16"}," App developed by me and 4 other developers with the idea of helping people to create memories and share with family and friends. "),e("p",{class:"text-white f-16"}," As a team we've had some some difficulties on making decisions regard the desing or the logistics but we overcome those difficulties talking it out and also asking outsiders their opinion. "),e("p",{class:"text-white f-16"}," Tecnologies used: Vue 3, CSS, Node.js, Firebase and MongoDB. "),e("a",{target:"_blank",href:"https://good-ol-days.herokuapp.com/",class:"check f-16"}," Check it out! ")])])])])],-1)),Le=[Ye];function Ve(t,a,s,o,n,c){return d(),l("div",ze,Le)}var He=u(Ge,[["render",Ve],["__scopeId","data-v-9299defa"]]),We=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:He}),De="/assets/tower.2977c8c5.jpg";const Xe={setup(){return{}}},Je=t=>(p("data-v-240d3d56"),t=t(),m(),t),Qe={class:"App1"},Fe=Je(()=>e("div",{class:"modal fade",id:"TowerEvents",tabindex:"-1","aria-labelledby":"TowerEventsLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog modal-lg"},[e("div",{class:"modal-content"},[e("div",{class:"modal-body font"},[e("div",{class:"d-flex justify-content-between"},[e("div",null,[e("p",{class:"text-white f-24"},"Tower Events App")]),e("div",null,[e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})])]),e("div",null,[e("img",{class:"project img-fluid rounded",src:De,alt:""})]),e("div",{class:"mt-3"},[e("p",{class:"text-white f-16"}," App developed by me to help people create and share their events, and allowing other people to attend to an event if not yet at capacity or canceled. "),e("p",{class:"text-white f-16"}," The biggest road block I overcame on this app was how many interactive buttons that changes the page automatically as you click. "),e("p",{class:"text-white f-16"}," Tecnologies used: Vue 3, JavaScript and CSS. "),e("a",{target:"_blank",href:"https://tower-john.herokuapp.com/",class:"check f-16"}," Check it out! ")])])])])],-1)),Ue=[Fe];function Re(t,a,s,o,n,c){return d(),l("div",Qe,Ue)}var Ke=u(Xe,[["render",Re],["__scopeId","data-v-240d3d56"]]),$e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ke}),qe="/assets/spiceitup.45da5d71.jpg";const Ze={setup(){return{}}},et=t=>(p("data-v-61863edf"),t=t(),m(),t),tt={class:"App1"},at=et(()=>e("div",{class:"modal fade",id:"SpiceItUp",tabindex:"-1","aria-labelledby":"SpiceItUpLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog modal-lg"},[e("div",{class:"modal-content"},[e("div",{class:"modal-body font"},[e("div",{class:"d-flex justify-content-between"},[e("div",null,[e("p",{class:"text-white f-24"},"Spice it up! App")]),e("div",null,[e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})])]),e("div",null,[e("img",{class:"project img-fluid rounded",src:qe,alt:""})]),e("div",{class:"mt-3"},[e("p",{class:"text-white f-16"}," App developed by me to help people store their recipes and also share and favorite other recipes. "),e("p",{class:"text-white f-16"}," This was one of my first projects using C# and MySQL so it took me a little bit of time to figure out some of the features added. "),e("p",{class:"text-white f-16"}," Tecnologies used: Vue 3, CSS, C# and MySQL. "),e("p",{class:"check f-16"},"Coming Soon!")])])])])],-1)),st=[at];function ot(t,a,s,o,n,c){return d(),l("div",tt,st)}var nt=u(Ze,[["render",ot],["__scopeId","data-v-61863edf"]]),ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});class T{static async confirm(a="Are you sure?",s="You won't be able to revert this!",o="warning",n="Yes, delete it!"){try{return!!(await k.fire({title:a,text:s,icon:o,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:n})).isConfirmed}catch{return!1}}static toast(a="Warning!",s="warning",o="top-end",n=3e3,c=!0){k.fire({title:a,icon:s,position:o,timer:n,timerProgressBar:c,toast:!0,showConfirmButton:!1})}}const it={methods:{sendEmail(){H.sendForm("service_hwkyj2q","template_k3uye1u",this.$refs.form,"user_lBxCIiHNixbO5O2u1Dt7g").then(t=>{console.log("Email sent!",t),T.toast("Message sent! Thank you!","success")},t=>{console.log("Email failed!",t)})}}},j=t=>(p("data-v-c3f8714a"),t=t(),m(),t),rt={class:"contact"},dt={class:"col-12 mb-4"},lt=j(()=>e("div",{class:"row justify-content-center my-4"},[e("div",{class:"r"},[e("p",{class:"contacttitle"},"CONTACT INFORMATION")])],-1)),ut={class:"row"},pt=A('<div class="col-md-6" data-v-c3f8714a><div class="px-4" data-v-c3f8714a><p class="text-white font f-20" data-v-c3f8714a> Thank you for visiting my landing page! </p><p class="text-white font f-18" data-v-c3f8714a> Here are some contact information and feel free to send me a message, I would love to hear from you! </p></div><div class="line" data-v-c3f8714a></div><div class="px-4" data-v-c3f8714a><p class="text-white font f-18 m-0" data-v-c3f8714a>Name: Joao &quot;John&quot; Melo</p><p class="text-white font f-18 m-0" data-v-c3f8714a> Email: joaolucasrmelo@gmail.com </p><p class="text-white font f-18 m-0" data-v-c3f8714a>City: Boise - ID</p></div><div class="line" data-v-c3f8714a></div><div class="px-4 d-flex align-items-center" data-v-c3f8714a><p class="text-white font f-18 m-0" data-v-c3f8714a>Visit me on:</p><p class="text-white font f-16 m-0 ms-3" data-v-c3f8714a><a href="https://www.linkedin.com/in/johnmelo94/" target="_blank" title="John&#39;s Linkedin" class="mdi mdi-36px icon color mdi-linkedin" data-v-c3f8714a></a></p><p class="text-white font f-16 m-0 ms-3" data-v-c3f8714a><a href="https://github.com/JoaoLucasMelo" target="_blank" title="John&#39;s GitHub" class="mdi mdi-36px icon color mdi-github" data-v-c3f8714a></a></p></div></div>',1),mt={class:"col-md-6 d-flex flex-column justify-content-center mb-4 marginphone"},ft=j(()=>e("div",null,[e("p",{class:"text-white f-20 font"},"SEND ME A MESSAGE:")],-1)),vt={class:"col-md-10 card contactcard text-white font"},ht=A('<div class="d-flex justify-content-between" data-v-c3f8714a><div class="form-group mb-3" data-v-c3f8714a><label data-v-c3f8714a>Name</label><input type="text" placeholder="Your Name Here..." class="form-control border-0 inputhere" name="user_name" data-v-c3f8714a></div><div class="form-group border-0 ms-2 mb-3" data-v-c3f8714a><label data-v-c3f8714a>Subject</label><input type="text" class="form-control border-0 inputhere" placeholder="Subject Here..." name="user_subject" data-v-c3f8714a></div></div><div class="form-group border-0 mb-3" data-v-c3f8714a><label data-v-c3f8714a>Email</label><input class="form-control" placeholder="Your Email Here..." type="email" name="user_email" data-v-c3f8714a></div><div class="form-group mb-3" data-v-c3f8714a><label data-v-c3f8714a>Message</label><textarea class="form-control border-0" placeholder="Message Here..." name="message" data-v-c3f8714a></textarea></div><div class="d-flex" data-v-c3f8714a><input type="submit" class="btn btnsend border-0" value="Send" data-v-c3f8714a></div>',4),_t=[ht];function gt(t,a,s,o,n,c){return d(),l("div",rt,[e("div",dt,[lt,e("div",ut,[pt,e("div",mt,[ft,e("div",vt,[e("form",{ref:"form",onSubmit:a[0]||(a[0]=W((...i)=>c.sendEmail&&c.sendEmail(...i),["prevent"]))},_t,544)])])])])])}var bt=u(it,[["render",gt],["__scopeId","data-v-c3f8714a"]]),wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bt});const M=window.location.origin.includes("localhost"),P=M?"http://localhost:3000":"",At="john-codeworks.us.auth0.com",xt="UQuN3ny3HsAeAStMEfZDLZE85IqdrOg3",yt="https://JohnDev.com",Bt="modulepreload",O={},It="/",y=function(a,s){return!s||s.length===0?a():Promise.all(s.map(o=>{if(o=`${It}${o}`,o in O)return;O[o]=!0;const n=o.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":Bt,n||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),n)return new Promise((v,Y)=>{i.addEventListener("load",v),i.addEventListener("error",Y)})})).then(()=>a())};function St(t){switch(t){case"./pages/AboutPage.vue":return y(()=>import("./AboutPage.a41fcb64.js"),["assets/AboutPage.a41fcb64.js","assets/vendor.a301fb8e.js"]);case"./pages/AccountPage.vue":return y(()=>import("./AccountPage.f457e064.js"),["assets/AccountPage.f457e064.js","assets/AccountPage.1d38451d.css","assets/vendor.a301fb8e.js"]);case"./pages/HomePage.vue":return y(()=>import("./HomePage.ca245c7f.js"),["assets/HomePage.ca245c7f.js","assets/HomePage.3f83c743.css","assets/vendor.a301fb8e.js"]);default:return new Promise(function(a,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function B(t){return()=>St(`./pages/${t}.vue`)}const kt=[{path:"/",name:"Home",component:B("HomePage")},{path:"/about",name:"About",component:B("AboutPage")},{path:"/account",name:"Account",component:B("AccountPage"),beforeEnter:J}],G=D({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:X(),routes:kt});function h(t,a){if(M)console[t](`[${t}] :: ${new Date().toLocaleTimeString()} :: `,...a);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${new Date().toLocaleTimeString()} :: `,...a)}}const f={log(){h("log",arguments)},error(){h("error",arguments)},warn(){h("warn",arguments)},assert(){h("assert",arguments)},trace(){h("trace",arguments)}},b=Q.create({baseURL:P,timeout:8e3});class Ct{async getAccount(){try{const a=await b.get("/account");g.account=a.data}catch(a){f.error("HAVE YOU STARTED YOUR SERVER YET???",a)}}}const Nt=new Ct,Tt={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class jt{constructor(a=!1,s=P){}on(a,s){var o;return(o=this.socket)==null||o.on(a,s.bind(this)),this}onConnected(a){f.log("[SOCKET_CONNECTION]",a),this.connected=!0,this.playback()}onAuthenticated(a){f.log("[SOCKET_AUTHENTICATED]",a),this.authenticated=!0,this.playback()}authenticate(a){var s;(s=this.socket)==null||s.emit(Tt.authenticate,a)}onError(a){f.error("[SOCKET_ERROR]",a)}enqueue(a,s){f.log("[ENQUEING_ACTION]",{action:a,payload:s}),this.queue.push({action:a,payload:s})}playback(){f.log("[SOCKET_PLAYBACK]");const a=[...this.queue];this.queue=[],a.forEach(s=>{this.emit(s.action,s.payload)})}emit(a,s=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(a,s);if(!this.connected)return this.enqueue(a,s);this.socket.emit(a,s)}}class Mt extends jt{constructor(){super();this.on("error",this.onError)}onError(a){T.toast(a.message,"error")}}const E=new Mt,r=F({domain:At,clientId:xt,audience:yt,useRefreshTokens:!0,onRedirectCallback:t=>{G.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});r.on(r.AUTH_EVENTS.AUTHENTICATED,async function(){b.defaults.headers.authorization=r.bearer,b.interceptors.request.use(Pt),g.user=r.user,await Nt.getAccount(),E.authenticate(r.bearer)});async function Pt(t){if(!r.isAuthenticated)return t;const a=r.identity.exp*1e3,s=a<Date.now(),o=a<Date.now()+1e3*60*60*12;return s?await r.loginWithPopup():o&&(await r.getTokenSilently(),b.defaults.headers.authorization=r.bearer,E.authenticate(r.bearer)),t}var Ot="/assets/cw-logo.71baeadb.png";const Gt={setup(){return{user:I(()=>g.user),async login(){r.loginWithPopup()},async logout(){r.logout({returnTo:window.location.origin})}}}},w=t=>(p("data-v-e64c9206"),t=t(),m(),t),Et={class:"navbar navbar-expand-lg navbar-dark bg-dark px-3"},zt=w(()=>e("div",{class:"d-flex flex-column align-items-center"},[e("img",{alt:"logo",src:Ot,height:"45"})],-1)),Yt=w(()=>e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),Lt={class:"collapse navbar-collapse",id:"navbarText"},Vt={class:"navbar-nav me-auto"},Ht=C(" About "),Wt={class:"navbar-text"},Dt={key:1,class:"dropdown my-2 my-lg-0"},Xt={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Jt=["src"],Qt={class:"mx-3 text-success lighten-30"},Ft={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},Ut=w(()=>e("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),Rt=w(()=>e("i",{class:"mdi mdi-logout"},null,-1)),Kt=C(" logout "),$t=[Rt,Kt];function qt(t,a,s,o,n,c){const i=S("router-link");return d(),l("nav",Et,[_(i,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:x(()=>[zt]),_:1}),Yt,e("div",Lt,[e("ul",Vt,[e("li",null,[_(i,{to:{name:"About"},class:"btn text-success lighten-30 selectable text-uppercase"},{default:x(()=>[Ht]),_:1})])]),e("span",Wt,[o.user.isAuthenticated?(d(),l("div",Dt,[e("div",Xt,[e("img",{src:o.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,Jt),e("span",Qt,U(o.user.name),1)]),e("div",Ft,[_(i,{to:{name:"Account"}},{default:x(()=>[Ut]),_:1}),e("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:a[1]||(a[1]=(...v)=>o.logout&&o.logout(...v))},$t)])])):(d(),l("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:a[0]||(a[0]=(...v)=>o.login&&o.login(...v))}," Login "))])])])}var Zt=u(Gt,[["render",qt],["__scopeId","data-v-e64c9206"]]),ea=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zt}),ta="/assets/goodoldays.89782122.png",aa="/assets/keepr.42f75b2c.png",sa="/assets/spiceitup.05a27195.png",oa="/assets/towerevents.eee17a11.png";const na={setup(){return{}}},ca=t=>(p("data-v-3b128ee6"),t=t(),m(),t),ia={class:"portfolio mb-3"},ra=ca(()=>e("div",{class:"col-12"},[e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-11"},[e("p",{class:"font portfoliotitle"},"PORTFOLIO")])]),e("div",{class:"row"},[e("div",{"data-bs-toggle":"modal","data-bs-target":"#GoodOlDays",class:"col-12 col-sm-6 col-md-4 p-4 selectable1"},[e("div",{class:"card project grow"},[e("div",{class:"d-flex justify-content-center"},[e("img",{class:"img-fluid p-2 rounded projectpic",src:ta,alt:""})])])]),e("div",{"data-bs-toggle":"modal","data-bs-target":"#Keepr",class:"col-12 col-sm-6 col-md-4 p-4 selectable1"},[e("div",{class:"card project grow"},[e("div",{class:"d-flex justify-content-center"},[e("img",{class:"img-fluid p-2 rounded projectpic",src:aa,alt:""})])])]),e("div",{"data-bs-toggle":"modal","data-bs-target":"#SpiceItUp",class:"col-12 col-sm-6 col-md-4 p-4 selectable1"},[e("div",{class:"card project grow"},[e("div",{class:"d-flex justify-content-center"},[e("img",{class:"img-fluid p-2 rounded projectpic",src:sa,alt:""})])])]),e("div",{"data-bs-toggle":"modal","data-bs-target":"#TowerEvents",class:"col-12 col-sm-6 col-md-4 p-4 selectable1"},[e("div",{class:"card project grow"},[e("div",{class:"d-flex justify-content-center"},[e("img",{class:"img-fluid p-2 rounded projectpic",src:oa,alt:""})])])])])],-1)),da=[ra];function la(t,a,s,o,n,c){return d(),l("div",ia,da)}var ua=u(na,[["render",la],["__scopeId","data-v-3b128ee6"]]),pa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ua});const ma={setup(){return{}}},fa={class:"resume"},va=A('<div class="col-12" data-v-15d7d303><div class="row my-3 justify-content-center" data-v-15d7d303><div class="col-md-11" data-v-15d7d303><p class="font resumetitle" data-v-15d7d303>RESUME</p></div></div><div class="row" data-v-15d7d303><div class="text-center" data-v-15d7d303><p class="text-white font f-20" data-v-15d7d303>EXPERIENCE</p></div><div class="col-md-6 d-flex align-items-center flex-column" data-v-15d7d303><div class="col-md-8 card resumecard p-3" data-v-15d7d303><p class="font m-0 f-20 text-white" data-v-15d7d303>Boise CodeWorks</p><i class="font f-18 texts" data-v-15d7d303> 2021 - 2022</i><i class="font f-14 m-0 texts" data-v-15d7d303> Full Stack Software Development Student </i><div class="texts f-16 mt-3" data-v-15d7d303><p class="font m-0" data-v-15d7d303> \u25CF Over 500 hours of an immersive full stack course. </p><p class="font m-0" data-v-15d7d303> \u25CF Working with front-end and back-end technologies. </p><p class="font m-0" data-v-15d7d303> \u25CF Creating fully-functional real-world applications with a team of developers. </p><p class="font m-0" data-v-15d7d303> \u25CF Utilizing SCRUM methodology to better organize and maximize efficiency. </p></div></div><div class="col-md-8 card resumecard p-3" data-v-15d7d303><p class="font m-0 f-20 text-white" data-v-15d7d303>Delicate Touch Moving</p><i class="font f-18 texts" data-v-15d7d303> 2018 - 2021</i><i class="font f-14 m-0 texts" data-v-15d7d303> Team Lead </i><div class="texts f-16 mt-3" data-v-15d7d303><p class="font m-0" data-v-15d7d303> \u25CF Providing great customer service at one of the top 5 stars moving companies in the valley. </p><p class="font m-0" data-v-15d7d303> \u25CF Coordinated teams that provided maximum work quality and work ethics. </p></div></div></div><div class="col-md-6 d-flex align-items-center flex-column" data-v-15d7d303><div class="col-md-8 card resumecard p-3" data-v-15d7d303><p class="font m-0 f-20 text-white" data-v-15d7d303>Asia Nine Restaurant</p><i class="font f-18 texts" data-v-15d7d303> 2016 - 2017</i><i class="font f-14 m-0 texts" data-v-15d7d303> Head Food Runner </i><div class="texts f-16 mt-3" data-v-15d7d303><p class="font m-0" data-v-15d7d303> \u25CF Handling orders and delivering to respective customers. </p><p class="font m-0" data-v-15d7d303>\u25CF Providing customer service.</p><p class="font m-0" data-v-15d7d303> \u25CF Training new food runners for the restaurant chain. </p></div></div><div class="col-md-8 card resumecard p-3" data-v-15d7d303><p class="font m-0 f-20 text-white" data-v-15d7d303>Max Gym - Sao Paulo, Brazil</p><i class="font f-18 texts" data-v-15d7d303> 2015 - 2016</i><i class="font f-14 m-0 texts" data-v-15d7d303> Team Lead </i><div class="texts f-16 mt-3" data-v-15d7d303><p class="font m-0" data-v-15d7d303> \u25CF Started as trainee for a month and got transferred to full time after a month while going to college for Physical Education. </p><p class="font m-0" data-v-15d7d303> \u25CF Learned how to work with customer service to better understand and help people reach their fitness goals. </p></div></div></div></div><div class="row mb-4 mt-2 justify-content-center" data-v-15d7d303><div class="text-center" data-v-15d7d303><p class="text-white font f-20" data-v-15d7d303>EDUCATION</p></div><div class="col-11 col-md-4 card resumecard py-2" data-v-15d7d303><p class="font m-0 f-20 text-white" data-v-15d7d303> Boise CodeWorks, <i class="ms-2" data-v-15d7d303> 2021 - 2022</i></p><i class="font f-16 m-0 texts" data-v-15d7d303> Full Stack Software Developer </i></div></div></div>',1),ha=[va];function _a(t,a,s,o,n,c){return d(),l("div",fa,ha)}var ga=u(ma,[["render",_a],["__scopeId","data-v-15d7d303"]]),ba=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ga});function wa(t){Object.entries({"./components/About.vue":Be,"./components/AppModalFour.vue":Pe,"./components/AppModalOne.vue":We,"./components/AppModalThree.vue":$e,"./components/AppModalTwo.vue":ct,"./components/Contact.vue":wt,"./components/Navbar.vue":ea,"./components/Portfolio.vue":pa,"./components/Resume.vue":ba}).forEach(([s,o])=>{const n=o.name||s.substr(s.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(n,o.default)})}$("user_lBxCIiHNixbO5O2u1Dt7g");const z=R(oe);wa(z);z.use(G).use(K.init()).mount("#app");export{g as A,u as _};
