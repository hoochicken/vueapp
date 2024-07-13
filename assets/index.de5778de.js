import{r as g,o as d,c as h,a as n,w as i,u,m as v,b as t,n as b,F as k,d as o,e as z,t as L,f as H,g as I,h as j,i as w,p as D,l as N,j as A,k as E,q as B,s as R,v as S,_ as O,x as T}from"./vendor.9e61e10f.js";const P=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const _ of c.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}};P();var q="https://hoochicken.github.io/vueapp/logo.png";var m=(a,e)=>{const r=a.__vccOpts||a;for(const[l,s]of e)r[l]=s;return r};const G={name:"MenuIcon",props:["iconName"]},U={class:"icon"};function W(a,e,r,l,s,c){const _=g("font-awesome-icon");return d(),h("div",U,[n(_,{icon:r.iconName},null,8,["icon"])])}var y=m(G,[["render",W],["__scopeId","data-v-6a256d48"]]);const F={class:"menu"},Y=o("Menu"),K=o("Home"),J=o("\xDCber uns"),Q={name:"MainMenu",components:{MenuIcon:y},data:()=>({showNavigation:!1}),methods:{closeNavigation(){this.showNavigation=!1}}},X=Object.assign(Q,{setup(a){return(e,r)=>{const l=g("font-awesome-icon"),s=g("RouterLink");return d(),h(k,null,[n(u(v.exports.MDBBtn),{"aria-controls":"showNavigation",onClick:r[0]||(r[0]=c=>e.showNavigation=!0)},{default:i(()=>[n(l,{icon:"list"})]),_:1}),t("div",F,[n(u(v.exports.MDBModal),{id:"showNavigation",tabindex:"-1",labelledby:"showNavigation",class:"col-md-6 sidebary modal-side modal-top-left",modelValue:e.showNavigation,"onUpdate:modelValue":r[3]||(r[3]=c=>e.showNavigation=c)},{default:i(()=>[n(u(v.exports.MDBModalHeader),null,{default:i(()=>[Y]),_:1}),n(u(v.exports.MDBModalBody),null,{default:i(()=>[n(u(v.exports.MDBListGroup),{flush:""},{default:i(()=>[n(u(v.exports.MDBListGroupItem),{class:b("d-flex list-group-item"),onClick:r[1]||(r[1]=c=>e.closeNavigation())},{default:i(()=>[n(u(y),{"icon-name":"list"}),n(s,{to:"/"},{default:i(()=>[K]),_:1})]),_:1}),n(u(v.exports.MDBListGroupItem),{class:b("d-flex list-group-item"),onClick:r[2]||(r[2]=c=>e.closeNavigation())},{default:i(()=>[n(u(y),{"icon-name":"chess-pawn"}),n(s,{to:"/about"},{default:i(()=>[J]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}});var C=m(X,[["__scopeId","data-v-ee0d0a26"]]);const Z={class:"wrappy"},tt=t("img",{src:q},null,-1),et={class:"position-absolute top-0 end-0"},ot={class:"d-grid"},st={class:"wrapper"},nt={name:"App",components:[C],data:()=>({showNavigation:!1})},at=Object.assign(nt,{setup(a){return(e,r)=>{const l=g("RouterView");return d(),h("div",Z,[t("header",null,[tt,t("div",et,[n(C)])]),t("div",ot,[t("div",st,[n(l)])])])}}}),it="modulepreload",M={},rt="https://hoochicken.github.io/vueapp/",$=function(e,r){return!r||r.length===0?e():Promise.all(r.map(l=>{if(l=`${rt}${l}`,l in M)return;M[l]=!0;const s=l.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const _=document.createElement("link");if(_.rel=s?"stylesheet":it,s||(_.as="script",_.crossOrigin=""),_.href=l,document.head.appendChild(_),s)return new Promise((V,x)=>{_.addEventListener("load",V),_.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())};const ct={},lt={class:"item"},_t={class:"details"};function dt(a,e){return d(),h("div",lt,[t("i",null,[z(a.$slots,"icon",{},void 0,!0)]),t("div",_t,[t("h3",null,[z(a.$slots,"heading",{},void 0,!0)]),z(a.$slots,"default",{},void 0,!0)])])}var f=m(ct,[["render",dt],["__scopeId","data-v-7e75d24f"]]);const ht={},ut={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},mt=t("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),pt=[mt];function vt(a,e){return d(),h("svg",ut,pt)}var ft=m(ht,[["render",vt]]);const gt={},zt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},wt=t("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),$t=[wt];function yt(a,e){return d(),h("svg",zt,$t)}var bt=m(gt,[["render",yt]]);const Mt={},kt={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},Ct=t("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),Vt=[Ct];function xt(a,e){return d(),h("svg",kt,Vt)}var Lt=m(Mt,[["render",xt]]);const Ht={},It={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},jt=t("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),Dt=[jt];function Nt(a,e){return d(),h("svg",It,Dt)}var At=m(Ht,[["render",Nt]]);const Et={},Bt={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Rt=t("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),St=[Rt];function Ot(a,e){return d(),h("svg",Bt,St)}var Tt=m(Et,[["render",Ot]]);const Pt=o("Documentation"),qt=o(" Vue\u2019s "),Gt=t("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1),Ut=o(" provides you with all information you need to get started. "),Wt=o("Tooling"),Ft=o(" This project is served and bundled with "),Yt=t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite",-1),Kt=o(". The recommended IDE setup is "),Jt=t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode",-1),Qt=o(" + "),Xt=t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar",-1),Zt=o(". If you need to test your components and web pages, check out "),te=t("a",{href:"https://www.cypress.io/",target:"_blank"},"Cypress",-1),ee=o(" and "),oe=t("a",{href:"https://docs.cypress.io/guides/component-testing/introduction",target:"_blank"},"Cypress Component Testing",-1),se=o(". "),ne=t("br",null,null,-1),ae=o(" More instructions are available in "),ie=t("code",null,"README.md",-1),re=o(". "),ce=o("Ecosystem"),le=o(" Get official tools and libraries for your project: "),_e=t("a",{target:"_blank",href:"https://pinia.vuejs.org/"},"Pinia",-1),de=o(", "),he=t("a",{target:"_blank",href:"https://router.vuejs.org/"},"Vue Router",-1),ue=o(", "),me=t("a",{target:"_blank",href:"https://test-utils.vuejs.org/"},"Vue Test Utils",-1),pe=o(", and "),ve=t("a",{target:"_blank",href:"https://github.com/vuejs/devtools"},"Vue Dev Tools",-1),fe=o(". If you need more resources, we suggest paying "),ge=t("a",{target:"_blank",href:"https://github.com/vuejs/awesome-vue"},"Awesome Vue",-1),ze=o(" a visit. "),we=o("Community"),$e=o(" Got stuck? Ask your question on "),ye=t("a",{target:"_blank",href:"https://chat.vuejs.org"},"Vue Land",-1),be=o(", our official Discord server, or "),Me=t("a",{target:"_blank",href:"https://stackoverflow.com/questions/tagged/vue.js"},"StackOverflow",-1),ke=o(". You should also subscribe to "),Ce=t("a",{target:"_blank",href:"https://news.vuejs.org"},"our mailing list",-1),Ve=o(" and follow the official "),xe=t("a",{target:"_blank",href:"https://twitter.com/vuejs"},"@vuejs",-1),Le=o(" twitter account for latest news in the Vue world. "),He=o("Support Vue"),Ie=o(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),je=t("a",{target:"_blank",href:"https://vuejs.org/sponsor/"},"becoming a sponsor",-1),De=o(". "),Ne={setup(a){return(e,r)=>(d(),h(k,null,[n(f,null,{icon:i(()=>[n(ft)]),heading:i(()=>[Pt]),default:i(()=>[qt,Gt,Ut]),_:1}),n(f,null,{icon:i(()=>[n(bt)]),heading:i(()=>[Wt]),default:i(()=>[Ft,Yt,Kt,Jt,Qt,Xt,Zt,te,ee,oe,se,ne,ae,ie,re]),_:1}),n(f,null,{icon:i(()=>[n(Lt)]),heading:i(()=>[ce]),default:i(()=>[le,_e,de,he,ue,me,pe,ve,fe,ge,ze]),_:1}),n(f,null,{icon:i(()=>[n(At)]),heading:i(()=>[we]),default:i(()=>[$e,ye,be,Me,ke,Ce,Ve,xe,Le]),_:1}),n(f,null,{icon:i(()=>[n(Tt)]),heading:i(()=>[He]),default:i(()=>[Ie,je,De]),_:1})],64))}},Ae={setup(a){return(e,r)=>(d(),h("main",null,[n(Ne)]))}},Ee={name:"DemonicItem",data(){return{demoCracy:{},resop:{}}},async mounted(){let a={};const e=await this.axios.post("/",a);this.demoCracy=e.data,this.resop=e,this.demoCracy=e},methods:{test(){alert("adasd")},async test2(){let a={};const e=await vue.axios.post("/",a);this.demoCracy=e.data,this.demoCracy=this}}},Be=t("h2",null,"Demonic",-1),Re=t("p",null,"asdasdasdsa sad asd ad a",-1),Se=t("div",{class:"mb-4"},"1",-1),Oe=t("div",{class:"mb-4"},"2",-1),Te=t("div",{class:"mb-4"},"3",-1);function Pe(a,e,r,l,s,c){return d(),h("div",null,[Be,Re,o(" "+L(s.demoCracy)+" ",1),Se,Oe,Te,t("button",{onClick:e[0]||(e[0]=_=>this.test2())},"Say test")])}var qe=m(Ee,[["render",Pe]]);const Ge=H({history:I("https://hoochicken.github.io/vueapp/"),routes:[{path:"/",name:"home",component:()=>$(()=>import("./WordView.981cbacd.js"),["assets/WordView.981cbacd.js","assets/WordView.1feed2a2.css","assets/vendor.9e61e10f.js"])},{path:"/home",name:"home2",component:Ae},{path:"/about",name:"about",component:()=>$(()=>import("./AboutView.4374bd54.js"),["assets/AboutView.4374bd54.js","assets/AboutView.3251fc41.css","assets/vendor.9e61e10f.js"])},{path:"/word",name:"word",component:()=>$(()=>import("./WordView.981cbacd.js"),["assets/WordView.981cbacd.js","assets/WordView.1feed2a2.css","assets/vendor.9e61e10f.js"])},{path:"/demo",component:qe}]});const p=j(at);w.defaults.baseURL="http://symapi.localhost",p.axios=w,p.use(D,w);p.use(Ge);N.add(A,E,B,R,S);p.component("vue3-chart-js",O);p.component("font-awesome-icon",T);p.config.productionTip=!1;p.exports={chainWebpack:a=>{a.module.rule("raw").test(/\.txt$/).use("raw-loader").loader("raw-loader").end()}};p.mount("#app");export{m as _};
