"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8353],{2375:(T,O,i)=>{i.d(O,{D:()=>a});var t=i(4650);let a=(()=>{class f{}return f.\u0275fac=function(p){return new(p||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-exchange"]],decls:3,vars:0,consts:[["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3 3L9 9M9 9V4M9 9H4","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M23 23L17 17M17 17L17 22M17 17L22 17","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"]],template:function(p,e){1&p&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1)(2,"path",2),t.qZA())},encapsulation:2}),f})()},8353:(T,O,i)=>{i.d(O,{G:()=>H});var t=i(4650),a=i(5762),f=i(2722),_=i(5939),p=i(6895),e=i(8008),b=i(7933),M=i(861),u=i(2375),h=i(7139),d=i(3284),C=i(3416);function P(n,c){if(1&n&&(t.TgZ(0,"div",4)(1,"div",5),t._UZ(2,"div",6)(3,"img",7),t.qZA(),t.TgZ(4,"div",8)(5,"div",9),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",10),t._uU(9),t.qZA()(),t.GkF(10,11),t.qZA()),2&n){const o=c.ngIf;t.oxw(2);const s=t.MAs(2);t.xp6(3),t.Q6J("src",o.avatar,t.LSH),t.xp6(3),t.hij(" ",t.lcZ(7,4,"top-nav-welcome"),", "),t.xp6(3),t.hij(" ",o.username," "),t.xp6(1),t.Q6J("ngTemplateOutlet",s)}}function Z(n,c){if(1&n&&(t.ynx(0),t.YNc(1,P,11,6,"div",3),t.ALo(2,"async"),t.BQk()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.userService.userInfo$))}}function L(n,c){if(1&n){const o=t.EpF();t.TgZ(0,"div",12)(1,"a",13)(2,"div",14),t._UZ(3,"i",15),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"a",16)(7,"div",14),t._UZ(8,"i",17),t._uU(9),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"a",18)(12,"div",14),t._UZ(13,"app-exchange",19),t._uU(14),t.ALo(15,"translate"),t.qZA()(),t.TgZ(16,"a",20)(17,"div",14),t._UZ(18,"i",21),t._uU(19),t.ALo(20,"translate"),t.qZA()(),t.TgZ(21,"div",22),t._UZ(22,"app-language-dropdown",23),t.qZA(),t.TgZ(23,"div",24),t._UZ(24,"app-theme-toggle"),t.TgZ(25,"button",25),t.NdJ("click",function(){t.CHM(o);const v=t.oxw();return t.KtG(v.handleLogout())}),t._uU(26),t.ALo(27,"translate"),t.qZA()()()}if(2&n){const o=t.oxw();t.xp6(1),t.Q6J("routerLinkActiveOptions",o.matchOptions),t.xp6(3),t.hij(" ",t.lcZ(5,10,"settings")," "),t.xp6(2),t.Q6J("routerLinkActiveOptions",o.matchOptions),t.xp6(3),t.hij(" ",t.lcZ(10,12,"my-wallet")," "),t.xp6(2),t.Q6J("routerLinkActiveOptions",o.matchOptions),t.xp6(3),t.hij(" ",t.lcZ(15,14,"connected-exchanges")," "),t.xp6(2),t.Q6J("routerLinkActiveOptions",o.matchOptions),t.xp6(3),t.hij(" ",t.lcZ(20,16,"my-profile")," "),t.xp6(3),t.Q6J("showText",!0),t.xp6(4),t.hij(" ",t.lcZ(27,18,"logout")," ")}}function y(n,c){1&n&&(t.TgZ(0,"div",26),t._UZ(1,"app-language-dropdown",27),t.TgZ(2,"div",28),t._UZ(3,"ion-icon",29),t.qZA(),t.TgZ(4,"a",30),t._uU(5),t.ALo(6,"translate"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("showText",!0)("showIcon",!0),t.xp6(4),t.hij(" ",t.lcZ(6,3,"landing-page-login-sign-up")," "))}let A=(()=>{class n extends a.H{constructor(o,s){super(),this.userService=o,this.userSerivce=s,this.isLogin=!1,this.isMenuOpen=!1,this.matchOptions={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"}}ngOnInit(){this.userService.loginStateChange.pipe((0,f.R)(this.onDestroy$)).subscribe(o=>{this.isLogin=o})}handleLogout(){this.userSerivce.logOut("/dashboard")}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(_.K),t.Y36(_.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-button"]],features:[t.qOj],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["loginDropdown",""],["notLogin",""],["class","login-button flex items-center mr-2 ml-1 cursor-pointer group relative",4,"ngIf"],[1,"login-button","flex","items-center","mr-2","ml-1","cursor-pointer","group","relative"],[1,"profile-img-wrapper","rounded-full","overflow-hidden","relative"],[1,"absolute","inset-0","rounded-full","pulSate"],["alt","",1,"!h-full","!w-full","object-cover","object-center","relative","z-10",3,"src"],[1,"hidden","lg:block","ml-1.5"],[1,"text-xs",2,"font-size","0.7rem"],[1,"text-sm","!text-text-strong","font-medium",2,"font-size","1.15rem"],[3,"ngTemplateOutlet"],[1,"login-dropdown","absolute","hidden","group-hover:block","bg-main-bg","py-3","right-0","top-8","z-50","rounded-xl","border-main-border","border-2"],["routerLink","/settings/my-account","routerLinkActive","active",1,"login-menu-item","flex","items-center","px-1","cursor-pointer","text-text-strong",3,"routerLinkActiveOptions"],[1,"link","flex","items-center","gap-x-2","w-full","px-4","py-2"],[1,"icon-settings","text-2xl","mr-4"],["routerLink","/settings/my-wallet","routerLinkActive","active",1,"login-menu-item","flex","items-center","px-1","cursor-pointer","text-text-strong",3,"routerLinkActiveOptions"],[1,"icon-wallet","text-2xl","mr-4"],["routerLink","/settings/connected-exchanges","routerLinkActive","active",1,"login-menu-item","flex","items-center","px-1","cursor-pointer","text-text-strong",3,"routerLinkActiveOptions"],[1,"w-6","h-6","my-1","rotate-90","stroke-text-strong"],["routerLink","/social-media/profile","routerLinkActive","active",1,"login-menu-item","flex","items-center","px-1","cursor-pointer","text-text-strong",3,"routerLinkActiveOptions"],[1,"icon-person","text-2xl","mr-4"],[1,"px-5","py-2","flex","items-center","cursor-pointer"],["interface","modal",3,"showText"],[1,"flex","px-5","py-2","items-center","justify-between"],[1,"text-red-1","font-medium",3,"click"],[1,"flex","items-center","cursor-pointer"],["interface","modal","customTextClass","hidden md:block",1,"mr-5",3,"showText","showIcon"],["routerLink","/auth/login",1,"w-8","h-8","rounded-full","overflow-hidden","relative","bg-grey-1"],["name","person",1,"w-9","h-9","fill-grey-2","absolute","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-4"],["routerLink","/auth/login",1,"pl-2","py-1.5","block","text-text-strong","whitespace-nowrap"]],template:function(o,s){if(1&o&&(t.YNc(0,Z,3,3,"ng-container",0),t.YNc(1,L,28,20,"ng-template",null,1,t.W1O),t.YNc(3,y,7,5,"ng-template",null,2,t.W1O)),2&o){const v=t.MAs(4);t.Q6J("ngIf",s.isLogin)("ngIfElse",v)}},dependencies:[u.D,h.q,d.T,p.O5,p.tP,e.gu,e.YI,e.Fo,b.rH,b.Od,C.X$,p.Ov],styles:['app-check-circle[_ngcontent-%COMP%]     *, app-gear-icon[_ngcontent-%COMP%]     *{fill:var(--text-strong)}app-check-circle[_ngcontent-%COMP%]     svg, app-gear-icon[_ngcontent-%COMP%]     svg{height:1.75rem}.login-button[_ngcontent-%COMP%]:before{pointer-events:none;position:fixed;inset:0px;z-index:50;height:100vh;background-color:rgba(0,0,0,.314);opacity:0;transition-duration:.2s;--tw-content: "";content:var(--tw-content)}.login-button[_ngcontent-%COMP%]:hover{cursor:pointer}.login-button[_ngcontent-%COMP%]:hover:before{opacity:1;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.5s;content:var(--tw-content);transition-timing-function:cubic-bezier(0,0,.2,1)}.login-dropdown[_ngcontent-%COMP%]{min-width:250px}.login-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--main-blue-transparent)}.login-menu-item[_ngcontent-%COMP%]   app-exchange[_ngcontent-%COMP%]{margin-right:15px}.login-menu-item.active[_ngcontent-%COMP%]{position:relative;background:linear-gradient(#0091ff,#003dff)}.login-menu-item.active[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{background-color:var(--main-blue-transparent)}.profile-img-wrapper[_ngcontent-%COMP%]{width:2.4rem;height:2.4rem}']}),n})();var k=i(4707);let l=(()=>{class n{constructor(){this.count$=new k.t(0),this.initService()}initService(){this.count$.next(100)}markAsRead(){this.count$.next(0)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),x=(()=>{class n{transform(o,s,v=!1){return o>s?`${s}${v?"+":""}`:o}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275pipe=t.Yjl({name:"maxNumber",type:n,pure:!0}),n})();function r(n,c){if(1&n&&(t.O4$(),t.TgZ(0,"g",9),t._UZ(1,"rect",10)(2,"rect",11),t.TgZ(3,"text",12),t._uU(4),t.qZA()()),2&n){const o=t.oxw();t.xp6(4),t.Oqu(o.count)}}function g(n,c){if(1&n&&(t.O4$(),t.TgZ(0,"g",13),t._UZ(1,"rect",14)(2,"rect",15),t.TgZ(3,"text",16),t._uU(4),t.qZA()()),2&n){const o=t.oxw();t.xp6(4),t.Oqu(o.count)}}function m(n,c){if(1&n&&(t.O4$(),t.TgZ(0,"g",17),t._UZ(1,"rect",18)(2,"rect",19),t.TgZ(3,"text",20),t._uU(4),t.ALo(5,"maxNumber"),t.qZA()()),2&n){const o=t.oxw();t.xp6(4),t.Oqu(t.Dn7(5,1,o.count,99,!0))}}let w=(()=>{class n{constructor(){this.count=0}ngOnChanges(o){const s=o.count;!s.isFirstChange()&&s.currentValue!==s.previousValue&&this.bellAn&&(s.currentValue?this.bellAn.play(0):this.bellAn.pause(0))}ngAfterViewInit(){this.bellAn=gsap.timeline({paused:!0,repeat:-1,repeatDelay:0,defaults:{ease:"sine.inOut"}}),this.bellAn.set("#bell-an #bell-group",{svgOrigin:"10px 3.95px"}).to("#bell-an #bell-group",.3,{rotation:5},0).to("#bell-an #bell-group",2.05,{rotation:0,ease:"elastic.out(4, .1)"},.3).to("#bell-an #bell-ball",.3,{x:.5},.05).to("#bell-an #bell-ball",2.05,{x:0,ease:"elastic.out(4, .1)"},.35),this.count>0&&this.bellAn.play(0)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-animated-bell"]],inputs:{count:"count"},features:[t.TTD],decls:9,vars:3,consts:[["id","bell-an","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",2,"overflow","visible"],["id","background","cx","10","cy","10","r","10","fill","#fff"],["id","bell-group"],["d","M15.71,12.47l-.32-2.75a5.42,5.42,0,0,0-3.74-5.09V4A1.65,1.65,0,1,0,8.36,4v.68A5.42,5.42,0,0,0,4.61,9.72l-.32,2.75a1.81,1.81,0,0,0-.68,1.41V14c0,1.34,1.31,1.34,1.81,1.34h9.16c.5,0,1.81,0,1.81-1.34v-.11A1.78,1.78,0,0,0,15.71,12.47ZM15,14l-.46,0H5.42L5,14v-.08a.46.46,0,0,1,.26-.41l.34-.16L6,9.84V9.76A4.05,4.05,0,0,1,9.17,5.81l.54-.11V4a.29.29,0,1,1,.58,0V5.7l.54.11a4.05,4.05,0,0,1,3.21,4l.41,3.55.33.16a.45.45,0,0,1,.26.41Z"],["id","bell-ball","d","M7.23,15.17v.16A2.74,2.74,0,0,0,9.89,17.7a2.74,2.74,0,0,0,2.66-2.37v-.16Zm2.66,1.18a1.36,1.36,0,0,1-1.2-.8h2.4A1.35,1.35,0,0,1,9.89,16.35Z"],["id","notifications"],["class","visible","id","notification-one","opacity","0",4,"ngIf"],["class","visible","id","notification-two","opacity","0","class","visible",4,"ngIf"],["class","visible","id","notification-three","opacity","0","class","visible",4,"ngIf"],["id","notification-one","opacity","0",1,"visible"],["id","pulse-one","x","11.41","y","2.42","width","7.9","height","7.9","rx","3.95","fill","#ff0042"],["id","red-one","x","11.41","y","2.42","width","7.9","height","7.9","rx","3.95","fill","#ff0042"],["id","number-one","transform","translate(13.49 8.79)","font-size","6.65","fill","#fff","font-family","Roboto-Bold, Roboto","font-weight","700"],["id","notification-two","opacity","0",1,"visible"],["id","pulse-two","x","11.41","y","2.42","width","11.57","height","7.9","rx","3.91","fill","#ff0042"],["id","bg-two","x","11.41","y","2.42","width","11.57","height","7.9","rx","3.91","fill","#ff0042"],["id","number-two","transform","translate(13.49 8.79)","font-size","6.65","fill","#fff","font-family","Roboto-Bold, Roboto","font-weight","700"],["id","notification-three","opacity","0",1,"visible"],["id","pulse-three","x","11.41","y","2.42","width","14.94","height","7.9","rx","3.95","fill","#ff0042"],["id","bg-three","x","11.41","y","2.42","width","14.94","height","7.9","rx","3.95","fill","#ff0042"],["id","number-three","transform","translate(13.49 8.79)","font-size","6.65","fill","#fff","font-family","Roboto-Bold, Roboto","font-weight","700"]],template:function(o,s){1&o&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"circle",1),t.TgZ(2,"g",2),t._UZ(3,"path",3)(4,"path",4),t.qZA(),t.TgZ(5,"g",5),t.YNc(6,r,5,1,"g",6),t.YNc(7,g,5,1,"g",7),t.YNc(8,m,6,5,"g",8),t.qZA()()),2&o&&(t.xp6(6),t.Q6J("ngIf",s.count>0),t.xp6(1),t.Q6J("ngIf",s.count>9),t.xp6(1),t.Q6J("ngIf",s.count>99))},dependencies:[p.O5,x],styles:["svg[_ngcontent-%COMP%]{width:35px}  .light-mode #bell-an #background{fill:rgba(0,0,0,.07)}  .light-mode #bell-an #bell-group path{fill:#000}  .dark-mode #bell-an #background{fill:rgba(255,255,255,.1)}  .dark-mode #bell-an #bell-group path{fill:#fff}#bell-an[_ngcontent-%COMP%]   #notifications[_ngcontent-%COMP%] > .visible[_ngcontent-%COMP%]{opacity:1}@keyframes _ngcontent-%COMP%_notification-pulse{0%{transform:none}to{transform:scale(2);opacity:0}}#bell-an[_ngcontent-%COMP%]   #notification-one.visible[_ngcontent-%COMP%]   #pulse-one[_ngcontent-%COMP%]{transform-origin:15.35px 6.37px;animation:_ngcontent-%COMP%_notification-pulse 2s cubic-bezier(.37,0,.63,1) both infinite}#bell-an[_ngcontent-%COMP%]   #notification-two.visible[_ngcontent-%COMP%]   #pulse-two[_ngcontent-%COMP%]{transform-origin:17.19px 6.37px;animation:_ngcontent-%COMP%_notification-pulse 2s cubic-bezier(.37,0,.63,1) both infinite}#bell-an[_ngcontent-%COMP%]   #notification-three.visible[_ngcontent-%COMP%]   #pulse-three[_ngcontent-%COMP%]{transform-origin:18.87px 6.37px;animation:_ngcontent-%COMP%_notification-pulse 2s cubic-bezier(.37,0,.63,1) both infinite}"]}),n})(),D=(()=>{class n extends a.H{constructor(o){super(),this.notiService=o}handleClick(){this.notiService.markAsRead()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-notification"]],features:[t.qOj],decls:2,vars:3,consts:[[1,"cursor-pointer","mr-4",3,"count","click"]],template:function(o,s){1&o&&(t.TgZ(0,"app-animated-bell",0),t.NdJ("click",function(){return s.handleClick()}),t.ALo(1,"async"),t.qZA()),2&o&&t.Q6J("count",t.lcZ(1,1,s.notiService.count$)||0)},dependencies:[w,p.Ov]}),n})();const I=function(n){return{active:n}};function E(n,c){if(1&n){const o=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(o);const v=t.oxw();return t.KtG(v.isOpenChange.emit(!v.isOpen))}),t.TgZ(1,"div",17),t._UZ(2,"span")(3,"span")(4,"span"),t.qZA()()}if(2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(1,I,o.isOpen))}}function U(n,c){if(1&n&&(t.TgZ(0,"div")(1,"a",18)(2,"span"),t._uU(3),t.ALo(4,"translate"),t.qZA()()()),2&n){const o=c.$implicit,s=t.oxw();t.xp6(1),t.Q6J("routerLink",o.href)("routerLinkActive","active")("routerLinkActiveOptions",s.matchOptions),t.xp6(2),t.hij(" ",t.lcZ(4,4,o.text)," ")}}const J=function(){return{"mode-active":!0}};function N(n,c){1&n&&(t.TgZ(0,"div",19)(1,"div",20),t._UZ(2,"div",21),t.TgZ(3,"div",22),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"div",23)(7,"div",24),t._UZ(8,"div",25)(9,"div",26)(10,"div",26),t.qZA(),t.TgZ(11,"div",27),t._uU(12),t.ALo(13,"translate"),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("ngClass",t.DdM(7,J)),t.xp6(3),t.hij(" ",t.lcZ(5,3,"chart-mode-single")," "),t.xp6(8),t.hij(" ",t.lcZ(13,5,"chart-mode-pro")," "))}function B(n,c){1&n&&t._UZ(0,"app-notification",2)}const Q=[{href:"/home",text:"top-nav-home"},{href:"/dashboard",text:"top-nav-dashboard"},{href:"/social-media",text:"top-nav-social-media"},{href:"/invite",text:"top-nav-invite"}];let H=(()=>{class n extends a.H{constructor(o){super(),this.userService=o,this.isOpen=!1,this.isOpenChange=new t.vpe,this.showHamburgerMenu=!1,this.NAV=Q,this.isOpenHashModal=!1,this.isLogin=!1,this.matchOptions={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"ignored"}}ngOnInit(){this.userService.loginStateChange.pipe((0,f.R)(this.onDestroy$)).subscribe(o=>{this.isLogin=o})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(_.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-header"]],inputs:{isOpen:"isOpen",showHamburgerMenu:"showHamburgerMenu"},outputs:{isOpenChange:"isOpenChange"},features:[t.qOj],decls:18,vars:5,consts:[[1,"border-b","border-main-border","relative","z-50"],[1,"header-wrapper","fade-in",2,"--delay","0s"],[1,"flex","items-center"],[1,"left","flex","items-center","pr-2"],["class","px-1 block 2md:hidden",3,"click",4,"ngIf"],["src","assets/logo-dark.png","alt","Logo for ottogo, a all-in-one blockchain platform",1,"w-40","2xl:w-48","ml-2","my-2","hidden","lg:block","cursor-pointer","dark-element"],["src","assets/logo-light.png","alt","Logo for ottogo, a all-in-one blockchain platform",1,"w-40","2xl:w-48","ml-2","my-2","hidden","lg:block","cursor-pointer","light-element"],["src","assets/favicon.png","alt","Small logo for ottogo",1,"h-10","lg:hidden","ml-2","my-1.5"],[1,"nav","flex","items-center","font-medium","xl:mr-2"],[4,"ngFor","ngForOf"],[1,"flex","justify-end","items-center","flex-1"],[1,"flex","items-center","justify-between","2xl:flex-1","header-center"],["class","bg-main-bg hidden 2md:flex border border-main-border rounded-lg overflow-hidden w-32 text-extra-xs text-center font-medium tracking-tighter text-grey-1",4,"ngIf"],[1,"header-right","flex","justify-end","2xl:pl-2"],["class","flex items-center",4,"ngIf"],[3,"isOpen","isOpenChange"],[1,"px-1","block","2md:hidden",3,"click"],[1,"menu","hamburger7",3,"ngClass"],[1,"nav-item","px-4","whitespace-nowrap","tracking-tight","2md:tracking-normal",3,"routerLink","routerLinkActive","routerLinkActiveOptions"],[1,"bg-main-bg","hidden","2md:flex","border","border-main-border","rounded-lg","overflow-hidden","w-32","text-extra-xs","text-center","font-medium","tracking-tighter","text-grey-1"],[1,"w-1/2","pt-1.5","pb-1","px-1.5","cursor-pointer",3,"ngClass"],[1,"w-8/12","m-auto","rounded","border-2","border-main-border","h-5"],[1,"whitespace-nowrap","mt-1"],[1,"w-1/2","pt-1.5","pb-1","px-1.5","cursor-pointer"],[1,"w-8/12","m-auto","h-5","grid","grid-rows-2","grid-flow-col","gap-0.5"],[1,"row-span-2","rounded-sm","border-2","border-grey-2"],[1,"row-span-1","rounded-sm","border-2","border-grey-2"],[1,"text-grey-2","mt-1"]],template:function(o,s){1&o&&(t.TgZ(0,"ion-header",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,E,5,3,"button",4),t._UZ(5,"img",5)(6,"img",6)(7,"img",7),t.qZA(),t.TgZ(8,"div",8),t.YNc(9,U,5,6,"div",9),t.qZA(),t.TgZ(10,"div",10)(11,"div",11)(12,"div"),t.YNc(13,N,14,8,"div",12),t.qZA()(),t.TgZ(14,"div",13),t.YNc(15,B,1,0,"app-notification",14),t._UZ(16,"app-login-button"),t.qZA()()()()(),t.TgZ(17,"app-buy-hash-power-modal",15),t.NdJ("isOpenChange",function(Y){return s.isOpenHashModal=Y}),t.qZA()),2&o&&(t.xp6(4),t.Q6J("ngIf",s.showHamburgerMenu),t.xp6(5),t.Q6J("ngForOf",s.NAV),t.xp6(4),t.Q6J("ngIf",!1),t.xp6(2),t.Q6J("ngIf",s.isLogin),t.xp6(2),t.Q6J("isOpen",s.isOpenHashModal))},dependencies:[p.mk,p.sg,p.O5,e.Gu,e.Fo,b.rH,b.Od,M.Q,A,D,C.X$],styles:['[_nghost-%COMP%]{background-color:var(--bg-top-header)}.header-wrapper[_ngcontent-%COMP%]{padding-top:6px;padding-bottom:6px}ion-header[_ngcontent-%COMP%]:after{content:none}@media (min-width: 1850px){.nav[_ngcontent-%COMP%]{width:calc(50vw - var(--left-sidebar-width) / 2 - var(--right-sidebar-width, 470px) / 2 - 20px);max-width:none}}@media (min-width: 1280px){.left[_ngcontent-%COMP%]{width:var(--left-sidebar-width)}}.text-extra-xs[_ngcontent-%COMP%]{font-size:10px;line-height:.68rem}.mode-active[_ngcontent-%COMP%]{background-color:var(--main-blue-transparent)}.mode-active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--main-blue)!important}.mode-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-color:var(--main-blue)}@keyframes _ngcontent-%COMP%_changeBg{50%{background-position:100% 50%}}.nav-item[_ngcontent-%COMP%]{color:var(--text-nav);padding-top:1rem;padding-bottom:1rem}.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-.375rem;left:0px;right:0px;display:block;height:2px;background-color:var(--main-blue);transform:scaleX(0);transform-origin:right;transition:transform .5s}.nav-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:var(--text-strong)}.nav-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after{transform:scaleX(1);transform-origin:left}.nav-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--text-strong)}.nav-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{transform:scaleX(1)}@media (min-width: 640px){.nav-item[_ngcontent-%COMP%]{padding-left:7px;padding-right:0}}@media (min-width: 660px){.nav-item[_ngcontent-%COMP%]{padding-left:.375rem;padding-right:.375rem}}@media (min-width: 813px){.nav-item[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}}ion-toolbar[_ngcontent-%COMP%]{contain:none}.header-right[_ngcontent-%COMP%]{margin-right:10px}@media (min-width: 1600px){.header-right[_ngcontent-%COMP%]{width:var(--right-sidebar-width)}}.menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:40px;width:50px;position:relative;cursor:pointer;transform:scale(.7)}.menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:100%;height:5px;background-color:#7e7e96;transition:all .5s ease}.hamburger7[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform-origin:left}.hamburger7.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1){transform:rotate(45deg)}.hamburger7.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){width:0}.hamburger7.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3){transform:rotate(-45deg)}']}),n})()},7139:(T,O,i)=>{i.d(O,{q:()=>k});var t=i(655),a=i(8008),f=i(2722),_=i(5762),p=i(866),e=i(4650),b=i(7933),M=i(3416),u=i(7179),h=i(6895);function d(l,x){if(1&l&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&l){const r=e.oxw();e.Q6J("ngClass",r.customTextClass),e.xp6(1),e.Oqu(r.currentLang.text)}}function C(l,x){1&l&&e._UZ(0,"ion-icon",8)}function P(l,x){if(1&l&&(e.TgZ(0,"ion-content"),e.GkF(1,9),e.qZA()),2&l){e.oxw();const r=e.MAs(9);e.xp6(1),e.Q6J("ngTemplateOutlet",r)}}function Z(l,x){if(1&l&&e.GkF(0,9),2&l){e.oxw();const r=e.MAs(9);e.Q6J("ngTemplateOutlet",r)}}const L=function(l){return{activated:l}};function y(l,x){if(1&l){const r=e.EpF();e.TgZ(0,"ion-item",12),e.NdJ("click",function(){const w=e.CHM(r).$implicit,D=e.oxw(2);return e.KtG(D.setLanguage(w))}),e._UZ(1,"img",13),e.TgZ(2,"ion-label",14),e._uU(3),e.qZA()()}if(2&l){const r=x.$implicit,g=e.oxw(2);e.Q6J("ngClass",e.VKq(3,L,g.currentLang.code===r.code)),e.xp6(1),e.Q6J("src",r.icon,e.LSH),e.xp6(2),e.hij(" ",r.text," ")}}function A(l,x){if(1&l&&(e.TgZ(0,"ion-list",10),e.YNc(1,y,4,5,"ion-item",11),e.qZA()),2&l){const r=e.oxw();e.xp6(1),e.Q6J("ngForOf",r.languages)}}let k=(()=>{class l extends _.H{constructor(r,g,m){super(),this.activatedRoute=r,this.translateService=g,this.storage=m,this.showText=!1,this.showIcon=!1,this.customTextClass="",this.interface="popover",this.isModalOpen=!1,this.isPopoverOpen=!1,this.languages=[{icon:"assets/images/english.svg",text:"English",code:"en"},{icon:"assets/images/china.svg",text:"\u7b80\u4f53\u4e2d\u6587",code:"cn"},{icon:"assets/images/china-tradition.svg",text:"\u7e41\u9ad4\u4e2d\u6587",code:"tr"}],this.currentLang=this.languages[0]}ngOnInit(){const r=this.translateService.currentLang;this.currentLang=this.languages.find(g=>g.code===r)||this.languages[0],this.translateService.onLangChange.pipe((0,f.R)(this.onDestroy$)).subscribe(g=>{this.currentLang=this.languages.find(m=>m.code===g.lang)||this.languages[0],this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{lang:g.lang},queryParamsHandling:"merge"})}),this.activatedRoute.queryParams.pipe((0,f.R)(this.onDestroy$)).subscribe(g=>{if(g.lang){const m=this.languages.find(w=>w.code===g.lang)||this.languages[0];this.setLanguage(m)}})}setLanguage(r){return(0,t.mG)(this,void 0,void 0,function*(){this.currentLang=r,this.translateService.use(r.code),new Date((new Date).setFullYear((new Date).getFullYear()+1)),yield this.storage.set(p.L,r.code),this.isPopoverOpen=!1,this.isModalOpen=!1})}handleTriger(r){"popover"===this.interface?(this.popover.event=r,this.isPopoverOpen=!0):this.isModalOpen=!0}}return l.\u0275fac=function(r){return new(r||l)(e.Y36(b.gz),e.Y36(M.sK),e.Y36(u.V))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-language-dropdown"]],viewQuery:function(r,g){if(1&r&&e.Gf(a.d8,5),2&r){let m;e.iGM(m=e.CRH())&&(g.popover=m.first)}},inputs:{showText:"showText",showIcon:"showIcon",customTextClass:"customTextClass",interface:"interface"},features:[e.qOj],decls:10,vars:5,consts:[[1,"ml-1","flex","justify-center","items-center",3,"click"],[1,"h-5",3,"src"],["class","ml-2 text-text-strong",3,"ngClass",4,"ngIf"],["class","ml-1","name","chevron-down-outline",4,"ngIf"],["side","bottom","alignment","center",3,"isOpen","didDismiss"],[1,"theme-modal",3,"isOpen","didDismiss"],["languageList",""],[1,"ml-2","text-text-strong",3,"ngClass"],["name","chevron-down-outline",1,"ml-1"],[3,"ngTemplateOutlet"],["lines","full",1,"py-2"],["class","cursor-pointer","lines","none",3,"ngClass","click",4,"ngFor","ngForOf"],["lines","none",1,"cursor-pointer",3,"ngClass","click"],[1,"mr-2","h-8",3,"src"],[1,"text-text-strong","my-4"]],template:function(r,g){1&r&&(e.TgZ(0,"button",0),e.NdJ("click",function(w){return g.handleTriger(w)}),e._UZ(1,"img",1),e.YNc(2,d,2,2,"div",2),e.YNc(3,C,1,0,"ion-icon",3),e.qZA(),e.TgZ(4,"ion-popover",4),e.NdJ("didDismiss",function(){return g.isPopoverOpen=!1}),e.YNc(5,P,2,1,"ng-template"),e.qZA(),e.TgZ(6,"ion-modal",5),e.NdJ("didDismiss",function(){return g.isModalOpen=!1}),e.YNc(7,Z,1,1,"ng-template"),e.qZA(),e.YNc(8,A,2,1,"ng-template",null,6,e.W1O)),2&r&&(e.xp6(1),e.Q6J("src",g.currentLang.icon,e.LSH),e.xp6(1),e.Q6J("ngIf",g.showText),e.xp6(1),e.Q6J("ngIf",g.showIcon),e.xp6(1),e.Q6J("isOpen",g.isPopoverOpen),e.xp6(2),e.Q6J("isOpen",g.isModalOpen))},dependencies:[h.mk,h.sg,h.O5,h.tP,a.W2,a.gu,a.Ie,a.Q$,a.q_,a.ki,a.d8],styles:["ion-popover[_ngcontent-%COMP%]{--backdrop-opacity: 0;--max-width: 300px}ion-item[_ngcontent-%COMP%]{--color: var(--text-strong);font-size:20px}ion-item.activated[_ngcontent-%COMP%]{--background: var(--main-blue-transparent);--color: var(--main-blue)}ion-modal[_ngcontent-%COMP%]{--width: 320px;--height: auto}"]}),l})()},3284:(T,O,i)=>{i.d(O,{T:()=>M});var t=i(7341),a=i(4650),f=i(5379),_=i(6895),p=i(8008);const e=function(u,h){return{dark:u,light:h}};function b(u,h){if(1&u){const d=a.EpF();a.TgZ(0,"div",1),a.NdJ("click",function(){a.CHM(d);const P=a.oxw();return a.KtG(P.themeService.toggle())}),a._UZ(1,"div",2)(2,"div",3)(3,"ion-icon",4)(4,"ion-icon",5)(5,"ion-icon",6)(6,"ion-icon",7),a.qZA()}if(2&u){const d=h.ngIf;a.Q6J("ngClass",a.WLB(1,e,"dark"===d,"light"===d))}}let M=(()=>{class u extends t.u{constructor(d){super(),this.themeService=d}ngOnInit(){}}return u.\u0275fac=function(d){return new(d||u)(a.Y36(f.f))},u.\u0275cmp=a.Xpm({type:u,selectors:[["app-theme-toggle"]],features:[a.qOj],decls:2,vars:3,consts:[["class","container cursor-pointer",3,"ngClass","click",4,"ngIf"],[1,"container","cursor-pointer",3,"ngClass","click"],[1,"knob","absolute","z-10"],[1,"track","w-full","h-full","rounded-full"],["name","star",1,"w-1","h-1","fill-white","absolute","left-4","top-1"],["name","star",1,"w-1","h-1","fill-white","absolute","left-1","top-3"],["name","star",1,"w-1","h-1","fill-white","absolute","left-9","top-1"],["name","star",1,"w-1","h-1","fill-white","absolute","left-7","top-3"]],template:function(d,C){1&d&&(a.YNc(0,b,7,4,"div",0),a.ALo(1,"async")),2&d&&a.Q6J("ngIf",a.lcZ(1,1,C.themeService.theme$))},dependencies:[_.mk,_.O5,p.gu,_.Ov],styles:[".container[_ngcontent-%COMP%]{height:24px;width:50px;position:relative}.container.dark[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{background:linear-gradient(to right,white,#23174B)}.container.dark[_ngcontent-%COMP%]   .knob[_ngcontent-%COMP%]{transform:translate(0) translateY(-50%)}.container.light[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{background:linear-gradient(to right,#2ED5F2,white)}.container.light[_ngcontent-%COMP%]   .knob[_ngcontent-%COMP%]{transform:translate(26px) translateY(-50%)}.knob[_ngcontent-%COMP%]{width:24px;height:24px;top:50%;left:0;transform:translate(0) translateY(-50%);transition:transform .3s;position:absolute;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}"]}),u})()}}]);