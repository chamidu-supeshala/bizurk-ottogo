"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6095],{6095:(L,i,t)=>{t.r(i),t.d(i,{AppDownloadModule:()=>w});var d=t(6895),r=t(3709),s=t(8008),c=t(5433),u=t(3416),f=t(8854),g=t(9116),x=t(7154),p=t(5195),o=t(4650);function m(n,a){if(1&n&&(o.TgZ(0,"a",15)(1,"div",16),o._UZ(2,"div",17)(3,"img",18),o.qZA(),o.TgZ(4,"span",19),o._uU(5),o.ALo(6,"translate"),o.qZA()()),2&n){const e=a.$implicit;o.Q6J("href",e.url,o.LSH),o.xp6(3),o.Q6J("src",e.icon,o.LSH)("alt",e.name),o.xp6(2),o.hij(" ",o.lcZ(6,4,e.name)," ")}}function h(n,a){if(1&n&&(o.TgZ(0,"a",15)(1,"div",16),o._UZ(2,"div",17)(3,"img",18),o.qZA(),o.TgZ(4,"span",19),o._uU(5),o.ALo(6,"translate"),o.qZA()()),2&n){const e=a.$implicit;o.Q6J("href",e.url,o.LSH),o.xp6(3),o.Q6J("src",e.icon,o.LSH)("alt",e.name),o.xp6(2),o.hij(" ",o.lcZ(6,4,e.name)," ")}}function Z(n,a){if(1&n&&(o.TgZ(0,"a",15)(1,"div",16),o._UZ(2,"div",17)(3,"img",18),o.qZA(),o.TgZ(4,"span",19),o._uU(5),o.ALo(6,"translate"),o.qZA()()),2&n){const e=a.$implicit;o.Q6J("href",e.url,o.LSH),o.xp6(3),o.Q6J("src",e.icon,o.LSH)("alt",e.name),o.xp6(2),o.hij(" ",o.lcZ(6,4,e.name)," ")}}const A=[{path:"",component:(()=>{class n extends x.H{constructor(e){super(),this.platform=e,this.exchangeLinks=p.Z2,this.appLinks=p.aN,this.browserLinks=p.xp,this.platform.ready().then(()=>{this.exchangeLinks.forEach(l=>{l.url=this.getDownLoadUrl(l.download)}),this.appLinks.forEach(l=>{l.url=this.getDownLoadUrl(l.download)}),this.browserLinks.forEach(l=>{l.url=this.getDownLoadUrl(l.download)})})}ngOnInit(){}getDownLoadUrl(e){return this.platform.is("ios")?e.ios:this.platform.is("android")?e.android:e.pc}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(s.t4))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-app-download"]],features:[o.qOj],decls:34,vars:19,consts:[[1,"flex","flex-col","w-full","sm:px-5","py-4"],[1,"flex","flex-auto","sm:items-center","sm:justify-between","w-full"],[1,"block","sm:hidden","mr-1","cursor-pointer","w-8","h-8",3,"routerLink"],["name","chevron-back-outline",1,"w-8","h-8"],[1,"flex","flex-col"],[1,"text-2xl","text-text-strong","font-medium"],[1,"font-medium","mt-1","sm:mt-2","text-grey-1","pr-3","sm:pr-0"],[1,"flex","flex-col","mt-6","text-lg","px-2","space-y-4"],[1,"exchanges"],[1,"relative","flex","text-2xl","w-full","mb-4","text-text-strong"],[1,"flex-1","border-b","border-main-border","mb-3.5","ml-2"],[1,"flex","flex-wrap","gap-2"],["class","download-app flex flex-col items-center p-3 rounded-xl","target","_blank",3,"href",4,"ngFor","ngForOf"],[1,"apps"],[1,"browsers"],["target","_blank",1,"download-app","flex","flex-col","items-center","p-3","rounded-xl",3,"href"],[1,"relative","flex","flex-none","items-center","justify-center","w-36","h-36","rounded-xl","overflow-hidden"],[1,"absolute","inset-0","rounded-xl","pulSate"],[1,"!w-full","!h-full","object-cover","object-center","relative","z-0",3,"src","alt"],[1,"mt-2.5","text-text-strong","text-lg"]],template:function(e,l){1&e&&(o.TgZ(0,"ng-scrollbar")(1,"div",0)(2,"div",1)(3,"div",2),o._UZ(4,"ion-icon",3),o.qZA(),o.TgZ(5,"div",4)(6,"h1",5),o._uU(7),o.ALo(8,"translate"),o.qZA(),o.TgZ(9,"p",6),o._uU(10),o.ALo(11,"translate"),o.qZA()()(),o.TgZ(12,"div",7)(13,"div",8)(14,"div",9),o._uU(15),o.ALo(16,"translate"),o._UZ(17,"span",10),o.qZA(),o.TgZ(18,"div",11),o.YNc(19,m,7,6,"a",12),o.qZA()(),o.TgZ(20,"div",13)(21,"div",9),o._uU(22),o.ALo(23,"translate"),o._UZ(24,"span",10),o.qZA(),o.TgZ(25,"div",11),o.YNc(26,h,7,6,"a",12),o.qZA()(),o.TgZ(27,"div",14)(28,"div",9),o._uU(29),o.ALo(30,"translate"),o._UZ(31,"span",10),o.qZA(),o.TgZ(32,"div",11),o.YNc(33,Z,7,6,"a",12),o.qZA()()()()()),2&e&&(o.xp6(3),o.Q6J("routerLink","/settings"),o.xp6(4),o.hij(" ",o.lcZ(8,9,"apps")," "),o.xp6(3),o.hij(" ",o.lcZ(11,11,"apps-download-description")," "),o.xp6(5),o.hij(" ",o.lcZ(16,13,"exchanges")," "),o.xp6(4),o.Q6J("ngForOf",l.exchangeLinks),o.xp6(3),o.hij(" ",o.lcZ(23,15,"apps")," "),o.xp6(4),o.Q6J("ngForOf",l.appLinks),o.xp6(3),o.hij(" ",o.lcZ(30,17,"browsers")," "),o.xp6(4),o.Q6J("ngForOf",l.browserLinks))},dependencies:[d.sg,r.rH,s.gu,s.YI,c.KC,u.X$],styles:[".light-mode .download-app:hover{background-color:#d6d6eb}  .dark-mode .download-app:hover{background-color:#2b2a3c}"]}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[r.Bz.forChild(A),r.Bz]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[d.ez,r.Bz,s.Pc,c.kb,u.aw,f.T,g.Q,v]}),n})()}}]);