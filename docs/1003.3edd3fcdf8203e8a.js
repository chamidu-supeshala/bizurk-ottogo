"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1003],{364:(v,h,i)=>{i.d(h,{g:()=>m});var t=i(4650),u=i(6895);let s=(()=>{class r{transform(l,d,b=!1){return l>d?`${d}${b?"+":""}`:l}}return r.\u0275fac=function(l){return new(l||r)},r.\u0275pipe=t.Yjl({name:"maxNumber",type:r,pure:!0}),r})();function f(r,g){if(1&r&&(t.O4$(),t.TgZ(0,"g",9),t._UZ(1,"rect",10)(2,"rect",11),t.TgZ(3,"text",12),t._uU(4),t.qZA()()),2&r){const l=t.oxw();t.xp6(4),t.Oqu(l.count)}}function p(r,g){if(1&r&&(t.O4$(),t.TgZ(0,"g",13),t._UZ(1,"rect",14)(2,"rect",15),t.TgZ(3,"text",16),t._uU(4),t.qZA()()),2&r){const l=t.oxw();t.xp6(4),t.Oqu(l.count)}}function x(r,g){if(1&r&&(t.O4$(),t.TgZ(0,"g",17),t._UZ(1,"rect",18)(2,"rect",19),t.TgZ(3,"text",20),t._uU(4),t.ALo(5,"maxNumber"),t.qZA()()),2&r){const l=t.oxw();t.xp6(4),t.Oqu(t.Dn7(5,1,l.count,99,!0))}}let m=(()=>{class r{constructor(){this.count=0}ngOnChanges(l){const d=l.count;!d.isFirstChange()&&d.currentValue!==d.previousValue&&this.bellAn&&(d.currentValue?this.bellAn.play(0):this.bellAn.pause(0))}ngAfterViewInit(){this.bellAn=gsap.timeline({paused:!0,repeat:-1,repeatDelay:0,defaults:{ease:"sine.inOut"}}),this.bellAn.set("#bell-an #bell-group",{svgOrigin:"10px 3.95px"}).to("#bell-an #bell-group",.3,{rotation:5},0).to("#bell-an #bell-group",2.05,{rotation:0,ease:"elastic.out(4, .1)"},.3).to("#bell-an #bell-ball",.3,{x:.5},.05).to("#bell-an #bell-ball",2.05,{x:0,ease:"elastic.out(4, .1)"},.35),this.count>0&&this.bellAn.play(0)}}return r.\u0275fac=function(l){return new(l||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-animated-bell"]],inputs:{count:"count"},features:[t.TTD],decls:9,vars:3,consts:[["id","bell-an","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",2,"overflow","visible"],["id","background","cx","10","cy","10","r","10","fill","#fff"],["id","bell-group"],["d","M15.71,12.47l-.32-2.75a5.42,5.42,0,0,0-3.74-5.09V4A1.65,1.65,0,1,0,8.36,4v.68A5.42,5.42,0,0,0,4.61,9.72l-.32,2.75a1.81,1.81,0,0,0-.68,1.41V14c0,1.34,1.31,1.34,1.81,1.34h9.16c.5,0,1.81,0,1.81-1.34v-.11A1.78,1.78,0,0,0,15.71,12.47ZM15,14l-.46,0H5.42L5,14v-.08a.46.46,0,0,1,.26-.41l.34-.16L6,9.84V9.76A4.05,4.05,0,0,1,9.17,5.81l.54-.11V4a.29.29,0,1,1,.58,0V5.7l.54.11a4.05,4.05,0,0,1,3.21,4l.41,3.55.33.16a.45.45,0,0,1,.26.41Z"],["id","bell-ball","d","M7.23,15.17v.16A2.74,2.74,0,0,0,9.89,17.7a2.74,2.74,0,0,0,2.66-2.37v-.16Zm2.66,1.18a1.36,1.36,0,0,1-1.2-.8h2.4A1.35,1.35,0,0,1,9.89,16.35Z"],["id","notifications"],["class","visible","id","notification-one","opacity","0",4,"ngIf"],["class","visible","id","notification-two","opacity","0","class","visible",4,"ngIf"],["class","visible","id","notification-three","opacity","0","class","visible",4,"ngIf"],["id","notification-one","opacity","0",1,"visible"],["id","pulse-one","x","11.41","y","2.42","width","7.9","height","7.9","rx","3.95","fill","#ff0042"],["id","red-one","x","11.41","y","2.42","width","7.9","height","7.9","rx","3.95","fill","#ff0042"],["id","number-one","transform","translate(13.49 8.79)","font-size","6.65","fill","#fff","font-family","Roboto-Bold, Roboto","font-weight","700"],["id","notification-two","opacity","0",1,"visible"],["id","pulse-two","x","11.41","y","2.42","width","11.57","height","7.9","rx","3.91","fill","#ff0042"],["id","bg-two","x","11.41","y","2.42","width","11.57","height","7.9","rx","3.91","fill","#ff0042"],["id","number-two","transform","translate(13.49 8.79)","font-size","6.65","fill","#fff","font-family","Roboto-Bold, Roboto","font-weight","700"],["id","notification-three","opacity","0",1,"visible"],["id","pulse-three","x","11.41","y","2.42","width","14.94","height","7.9","rx","3.95","fill","#ff0042"],["id","bg-three","x","11.41","y","2.42","width","14.94","height","7.9","rx","3.95","fill","#ff0042"],["id","number-three","transform","translate(13.49 8.79)","font-size","6.65","fill","#fff","font-family","Roboto-Bold, Roboto","font-weight","700"]],template:function(l,d){1&l&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"circle",1),t.TgZ(2,"g",2),t._UZ(3,"path",3)(4,"path",4),t.qZA(),t.TgZ(5,"g",5),t.YNc(6,f,5,1,"g",6),t.YNc(7,p,5,1,"g",7),t.YNc(8,x,6,5,"g",8),t.qZA()()),2&l&&(t.xp6(6),t.Q6J("ngIf",d.count>0),t.xp6(1),t.Q6J("ngIf",d.count>9),t.xp6(1),t.Q6J("ngIf",d.count>99))},dependencies:[u.O5,s],styles:["svg[_ngcontent-%COMP%]{width:31px}@media (min-width: 375px){svg[_ngcontent-%COMP%]{width:35px}}  .light-mode #bell-an #background{fill:rgba(0,0,0,.07)}  .light-mode #bell-an #bell-group path{fill:#000}@media (min-width: 640px){  .light-mode #bell-an #background{fill:rgba(255,255,255,.1)}  .light-mode #bell-an #bell-group path{fill:#fff}}  .dark-mode #bell-an #background{fill:rgba(255,255,255,.1)}  .dark-mode #bell-an #bell-group path{fill:#fff}#bell-an[_ngcontent-%COMP%]   #notifications[_ngcontent-%COMP%] > .visible[_ngcontent-%COMP%]{opacity:1}@keyframes _ngcontent-%COMP%_notification-pulse{0%{transform:none}to{transform:scale(2);opacity:0}}#bell-an[_ngcontent-%COMP%]   #notification-one.visible[_ngcontent-%COMP%]   #pulse-one[_ngcontent-%COMP%]{transform-origin:15.35px 6.37px;animation:_ngcontent-%COMP%_notification-pulse 2s cubic-bezier(.37,0,.63,1) both infinite}#bell-an[_ngcontent-%COMP%]   #notification-two.visible[_ngcontent-%COMP%]   #pulse-two[_ngcontent-%COMP%]{transform-origin:17.19px 6.37px;animation:_ngcontent-%COMP%_notification-pulse 2s cubic-bezier(.37,0,.63,1) both infinite}#bell-an[_ngcontent-%COMP%]   #notification-three.visible[_ngcontent-%COMP%]   #pulse-three[_ngcontent-%COMP%]{transform-origin:18.87px 6.37px;animation:_ngcontent-%COMP%_notification-pulse 2s cubic-bezier(.37,0,.63,1) both infinite}"]}),r})()},2375:(v,h,i)=>{i.d(h,{D:()=>u});var t=i(4650);let u=(()=>{class s{}return s.\u0275fac=function(p){return new(p||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-exchange"]],decls:3,vars:0,consts:[["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3 3L9 9M9 9V4M9 9H4","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M23 23L17 17M17 17L17 22M17 17L22 17","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"]],template:function(p,x){1&p&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1)(2,"path",2),t.qZA())},encapsulation:2}),s})()},8201:(v,h,i)=>{i.d(h,{m:()=>u});var t=i(4650);let u=(()=>{class s{}return s.\u0275fac=function(p){return new(p||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-profile-icon"]],decls:5,vars:0,consts:[["viewBox","0 0 248.70832 248.70833"],["id","layer1","transform","translate(-23.056511,-80.886898)"],["id","g847","transform","translate(299.35714,183.69643)"],["id","rect841","width","248.70833","height","248.70833","x","-276.30063","y","-102.80953",2,"fill","#eeeeee","fill-opacity","1","stroke","none","stroke-width","0.945669"],["d","m -257.51517,136.69344 v -9.20538 l 1.35274,-2.37014 1.35274,-2.37015 2.39731,-3.43959 2.3973,-3.43958 1.46128,-1.85208 1.46129,-1.85209 2.39544,-2.76829 2.39545,-2.76829 3.30729,-3.29928 3.30729,-3.29928 3.43958,-2.941065 3.43959,-2.941061 2.11666,-1.588839 2.11667,-1.588839 2.11667,-1.471118 2.11666,-1.471115 2.24896,-1.406641 2.24896,-1.406639 1.5875,-0.909997 1.5875,-0.909995 4.10104,-2.062562 4.10104,-2.062559 3.43959,-1.441038 3.43958,-1.44104 3.96875,-1.340522 3.96875,-1.340522 2.38125,-0.65379 2.38125,-0.653791 2.91042,-0.677521 2.91041,-0.677522 3.70417,-0.656846 3.70417,-0.65685 3.57187,-0.409747 3.57188,-0.409749 3.70416,-0.265938 3.70417,-0.265941 h 5.15938 5.15937 l 3.70417,0.26792 3.70416,0.267917 3.57188,0.398724 3.57187,0.398725 2.38125,0.408863 2.38125,0.408866 2.59352,0.509807 2.59351,0.50981 2.69815,0.67787 2.69816,0.677871 2.64583,0.794033 2.64583,0.794036 3.43959,1.218491 3.43958,1.218491 3.21161,1.39506 3.211612,1.395061 3.468444,1.738043 3.468447,1.73804 2.977234,1.762162 2.977237,1.762159 2.645834,1.776542 2.645833,1.776542 3.079533,2.34672 3.079533,2.346722 3.138176,2.684317 3.138175,2.684315 3.842171,3.93027 3.84217,3.93026 2.807174,3.37351 2.807176,3.37351 2.346487,3.29863 2.346489,3.29863 1.785146,2.98515 1.785144,2.98516 7.94e-4,9.19427 7.91e-4,9.19427 h -105.70104 -105.70105 z m 100.2205,-86.174224 -3.36388,-0.368692 -2.85383,-0.681133 -2.85383,-0.681135 -2.51354,-0.811136 -2.51354,-0.811136 -3.43958,-1.669071 -3.43959,-1.669071 -2.51354,-1.654204 -2.51354,-1.654204 -1.19063,-0.951347 -1.19062,-0.951346 -1.32292,-1.233043 -1.32291,-1.23304 -1.34504,-1.283738 -1.34504,-1.283737 -1.72201,-2.116666 -1.72201,-2.116667 -1.33616,-1.984375 -1.33614,-1.984375 -1.16196,-2.116667 -1.16196,-2.116667 -0.95681,-2.248958 -0.95681,-2.248958 -0.81623,-2.513542 -0.81623,-2.513542 -0.3832,-1.8520831 -0.38319,-1.8520834 -0.41455,-2.576838 -0.41454,-2.5768406 v -4.7192936 -4.719291 l 0.39042,-2.7812656 0.39042,-2.7812687 0.78044,-3.019475 0.78045,-3.019478 0.78866,-2.133481 0.78867,-2.133484 1.46954,-3.025891 1.46953,-3.025894 1.7996,-2.693292 1.7996,-2.693289 1.8939,-2.206162 1.89389,-2.206162 2.07171,-1.980287 2.07171,-1.980288 1.19063,-0.918632 1.19062,-0.918632 0.13229,-0.139128 0.1323,-0.139128 2.25072,-1.49502 2.25072,-1.49502 2.77636,-1.463053 2.77636,-1.463053 2.77813,-1.046713 2.77812,-1.046713 3.33207,-0.820768 3.33206,-0.820769 2.09189,-0.304346 2.0919,-0.304346 5.02708,-0.01043 5.02709,-0.01043 2.38125,0.339105 2.38125,0.339103 2.24896,0.507119 2.24895,0.507118 2.4996,0.816571 2.4996,0.816572 2.34391,1.03146 2.34392,1.03146 1.97703,1.085058 1.97703,1.085057 2.70446,1.905624 2.70445,1.905624 1.04889,0.910602 1.04889,0.910602 1.87896,1.852083 1.87895,1.852084 1.46696,1.719791 1.46696,1.719792 1.29605,1.852084 1.29605,1.852083 0.95867,1.5875 0.95866,1.5875 0.79332,1.5875 0.7933,1.5875 0.92742,2.248958 0.92742,2.248959 0.79893,2.645833 0.79893,2.645833 0.612248,3.307292 0.612251,3.3072919 -0.0013,5.8208334 -0.0013,5.8208334 -0.348159,2.1166667 -0.34816,2.1166667 -0.51426,2.1166669 -0.51426,2.116667 -0.81383,2.513541 -0.81383,2.513542 -0.40529,0.926042 -0.40529,0.926041 -0.8608,1.852084 -0.8608,1.852083 -1.01699,1.732865 -1.017,1.732862 -1.84479,2.632763 -1.84479,2.63276 -3.57917,3.591912 -3.57916,3.591915 -2.01768,1.47892 -2.01768,1.478923 -2.08337,1.296075 -2.08336,1.296077 -2.51354,1.234189 -2.51354,1.234191 -1.85208,0.69196 -1.85209,0.691959 -2.77812,0.779886 -2.77813,0.779886 -3.43958,0.518144 -3.43958,0.518144 -3.3073,0.119605 -3.30729,0.119607 -3.36388,-0.368694 z","id","path849",2,"fill","#b1b1b1","fill-opacity","1","stroke-width","0.264583"]],template:function(p,x){1&p&&(t.O4$(),t.TgZ(0,"svg",0)(1,"g",1)(2,"g",2),t._UZ(3,"rect",3)(4,"path",4),t.qZA()()())},encapsulation:2}),s})()},1003:(v,h,i)=>{i.d(h,{G:()=>X});var t=i(4650),u=i(7154),s=i(2722),f=i(2340),p=i(5939),x=i(7139),m=i(6895),r=i(8008),g=i(3709),l=i(3535),d=i(4912),b=i(560),M=i(2375),Z=i(8201),y=i(3284),w=i(3416);function P(n,a){if(1&n&&(t.TgZ(0,"div",4)(1,"a",5)(2,"div",6),t._UZ(3,"div",7)(4,"img",8),t.qZA(),t.TgZ(5,"div",9)(6,"div",10),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"div",11),t._uU(10),t.qZA()()(),t.GkF(11,12),t.qZA()),2&n){const e=a.ngIf;t.oxw(2);const o=t.MAs(2);t.xp6(4),t.Q6J("src",e.headImgUrl,t.LSH)("alt",e.account),t.xp6(3),t.hij(" ",t.lcZ(8,5,"top-nav-welcome"),", "),t.xp6(3),t.hij(" ",e.account," "),t.xp6(1),t.Q6J("ngTemplateOutlet",o)}}function A(n,a){if(1&n&&(t.ynx(0),t.YNc(1,P,12,7,"div",3),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.userService.userInfo$))}}function k(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",13)(1,"a",14)(2,"div",15),t._UZ(3,"i",16),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"a",17)(7,"div",15),t._UZ(8,"i",18),t._uU(9),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"a",19)(12,"div",15),t._UZ(13,"app-exchange",20),t._uU(14),t.ALo(15,"translate"),t.qZA()(),t.TgZ(16,"div",21),t._UZ(17,"app-language-dropdown",22),t.qZA(),t.TgZ(18,"div",23),t._UZ(19,"app-theme-toggle"),t.TgZ(20,"button",24),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.handleLogout())}),t._uU(21),t.ALo(22,"translate"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("routerLinkActiveOptions",e.matchOptions),t.xp6(3),t.hij(" ",t.lcZ(5,8,"settings")," "),t.xp6(2),t.Q6J("routerLinkActiveOptions",e.matchOptions),t.xp6(3),t.hij(" ",t.lcZ(10,10,"my-wallet")," "),t.xp6(2),t.Q6J("routerLinkActiveOptions",e.matchOptions),t.xp6(3),t.hij(" ",t.lcZ(15,12,"connected-exchanges")," "),t.xp6(3),t.Q6J("showText",!0),t.xp6(4),t.hij(" ",t.lcZ(22,14,"logout")," ")}}const T=function(n){return{back:n}};function L(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",25)(1,"div",26),t._UZ(2,"app-profile-icon"),t.qZA(),t.TgZ(3,"a",27),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.login())}),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"span",28),t._uU(7,"/"),t.qZA(),t.TgZ(8,"a",29),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.register())}),t._uU(9),t.ALo(10,"translate"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("queryParams",t.VKq(7,T,e.router.url)),t.xp6(3),t.hij(" ",t.lcZ(5,3,"login-button-login")," "),t.xp6(5),t.hij(" ",t.lcZ(10,5,"register")," ")}}let N=(()=>{class n extends u.H{constructor(e,o){super(),this.userService=e,this.userSerivce=o,this.isLogin=!1,this.isMenuOpen=!1,this.matchOptions={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"}}ngOnInit(){this.userService.loginStateChange.pipe((0,s.R)(this.onDestroy$)).subscribe(e=>{this.isLogin=e})}handleLogout(){this.userSerivce.logOut()}login(){this.userSerivce.toggleLoginModal(!0)}register(){this.userSerivce.toggleLoginModal(!0,!0)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.K),t.Y36(p.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-button"]],features:[t.qOj],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["loginDropdown",""],["notLogin",""],["class","login-button mr-2 ml-1 cursor-pointer group relative",4,"ngIf"],[1,"login-button","mr-2","ml-1","cursor-pointer","group","relative"],["routerLink","/settings/my-account",1,"flex","items-center"],[1,"profile-img-wrapper","rounded-full","overflow-hidden","relative"],[1,"absolute","inset-0","rounded-full","pulSate"],[1,"!h-full","!w-full","object-cover","object-center","relative","z-10",3,"src","alt"],[1,"hidden","lg:block","ml-1.5"],[1,"text-xs",2,"font-size","0.7rem"],[1,"text-sm","!text-white","font-medium",2,"font-size","1.15rem"],[3,"ngTemplateOutlet"],[1,"login-dropdown","absolute","hidden","group-hover:block","bg-main-bg","py-3","right-0","top-8","z-50","rounded-xl","border-main-border","border-2"],["routerLink","/settings/my-account","routerLinkActive","active",1,"login-menu-item","flex","items-center","px-1","cursor-pointer","text-text-strong",3,"routerLinkActiveOptions"],[1,"link","flex","items-center","gap-x-2","w-full","px-4","py-2"],[1,"icon-settings","text-2xl","mr-4"],["routerLink","/settings/my-wallet","routerLinkActive","active",1,"login-menu-item","flex","items-center","px-1","cursor-pointer","text-text-strong",3,"routerLinkActiveOptions"],[1,"icon-wallet","text-2xl","mr-4"],["routerLink","/settings/connected-exchanges","routerLinkActive","active",1,"login-menu-item","flex","items-center","px-1","cursor-pointer","text-text-strong",3,"routerLinkActiveOptions"],[1,"w-6","h-6","my-1","rotate-90","stroke-text-strong"],[1,"px-5","py-2","flex","items-center","cursor-pointer"],["interface","modal",3,"showText"],[1,"flex","px-5","py-2","items-center","justify-between"],[1,"text-red-1","font-medium",3,"click"],[1,"flex","items-center","cursor-pointer"],["routerLink","/auth/login",1,"w-8","h-8","rounded-full","overflow-hidden","relative","bg-slate-400",3,"queryParams"],[1,"hidden","lg:block","pl-2","pr-2","py-1.5","text-white","whitespace-nowrap",3,"click"],[1,"hidden","lg:block"],[1,"hidden","lg:block","pl-2","py-1.5","text-white","whitespace-nowrap",3,"click"]],template:function(e,o){if(1&e&&(t.YNc(0,A,3,3,"ng-container",0),t.YNc(1,k,23,16,"ng-template",null,1,t.W1O),t.YNc(3,L,11,9,"ng-template",null,2,t.W1O)),2&e){const c=t.MAs(4);t.Q6J("ngIf",o.isLogin)("ngIfElse",c)}},dependencies:[M.D,Z.m,x.q,y.T,m.O5,m.tP,r.YI,r.Fo,g.rH,g.Od,w.X$,m.Ov],styles:['app-check-circle[_ngcontent-%COMP%]     *, app-gear-icon[_ngcontent-%COMP%]     *{fill:var(--text-strong)}app-check-circle[_ngcontent-%COMP%]     svg, app-gear-icon[_ngcontent-%COMP%]     svg{height:1.75rem}.login-button[_ngcontent-%COMP%]:before{pointer-events:none;position:fixed;inset:0px;z-index:50;height:100vh;background-color:rgba(0,0,0,.314);opacity:0;transition-duration:.2s;--tw-content: "";content:var(--tw-content)}.login-button[_ngcontent-%COMP%]:hover{cursor:pointer}.login-button[_ngcontent-%COMP%]:hover:before{opacity:1;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.5s;content:var(--tw-content);transition-timing-function:cubic-bezier(0,0,.2,1)}.login-dropdown[_ngcontent-%COMP%]{min-width:250px}.login-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--main-blue-transparent)}.login-menu-item[_ngcontent-%COMP%]   app-exchange[_ngcontent-%COMP%]{margin-right:15px}.login-menu-item.active[_ngcontent-%COMP%]{position:relative;background:linear-gradient(#0091ff,#003dff)}.login-menu-item.active[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{background:var(--main-blue-transparent)}.profile-img-wrapper[_ngcontent-%COMP%]{width:2.4rem;height:2.4rem}']}),n})();var O=i(6396),U=i(364),I=i(7341),J=i(4471);function H(n,a){if(1&n&&(t.TgZ(0,"div",9),t._uU(1),t.ALo(2,"async"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" ",t.lcZ(2,1,e.notificationService.count$)," ")}}function j(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2",4),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.YNc(6,H,3,3,"div",5),t.ALo(7,"async"),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return c.modalRef.dismiss(),t.KtG(c.seeAll())}),t._uU(9),t.ALo(10,"translate"),t.qZA()()(),t.TgZ(11,"app-notifications",7),t.NdJ("onUserAction",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.modalRef.dismiss())}),t.qZA(),t._UZ(12,"div",8)}if(2&n){const e=t.oxw();t.xp6(4),t.hij(" ",t.lcZ(5,4,"notifications")," "),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,e.notificationService.count$)),t.xp6(3),t.hij(" ",t.lcZ(10,8,"see-all")," "),t.xp6(2),t.Q6J("isModal",!0)}}let Q=(()=>{class n extends I.u{constructor(e){super(),this.notificationService=e}seeAll(){this.router.navigate(["/notifications"],{queryParams:{originUrl:this.router.url}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(O.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-notifications-modal"]],features:[t.qOj],decls:2,vars:1,consts:[[1,"theme-modal","notifications-modal","justify-end","items-start",3,"isOpen","didDismiss"],[1,"flex","flex-col","items-center","w-full","px-3","pt-3","mb-2"],[1,"flex","items-center","justify-between","w-full"],[1,"flex","items-start","justify-center"],[1,"text-xl","pl-2","text-text-strong","font-medium"],["class","text-white unread-notification flex items-center justify-center rounded-full w-6 h-6 text-base ml-2",4,"ngIf"],[1,"bg-main-blue-transparent","text-main-blue","px-3","rounded-xl","font-medium",3,"click"],[3,"isModal","onUserAction"],[1,"h-3","w-full"],[1,"text-white","unread-notification","flex","items-center","justify-center","rounded-full","w-6","h-6","text-base","ml-2"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-modal",0),t.NdJ("didDismiss",function(){return o.handleDismiss()}),t.YNc(1,j,13,10,"ng-template"),t.qZA()),2&e&&t.Q6J("isOpen",o.isOpen)},dependencies:[m.O5,r.ki,J.t,w.X$,m.Ov],styles:["ion-modal[_ngcontent-%COMP%]{--width: 330px;--height: auto;--backdrop-opacity: 0 !important}.notifications-modal[_ngcontent-%COMP%]{padding:58px 80px!important}@media (min-width: 1024px){.notifications-modal[_ngcontent-%COMP%]{padding:58px 144px!important}}.unread-notification[_ngcontent-%COMP%]{background-color:#ff0242}"]}),n})(),q=(()=>{class n extends u.H{constructor(e){super(),this.notificationService=e,this.isOpenNotificationsModal=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(O.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-notification"]],features:[t.qOj],decls:3,vars:4,consts:[[1,"cursor-pointer","mr-1.5","md:mr-3","lg:mr-4",3,"count","click"],[3,"isOpen","isOpenChange"]],template:function(e,o){1&e&&(t.TgZ(0,"app-animated-bell",0),t.NdJ("click",function(){return o.isOpenNotificationsModal=!0}),t.ALo(1,"async"),t.qZA(),t.TgZ(2,"app-notifications-modal",1),t.NdJ("isOpenChange",function(_){return o.isOpenNotificationsModal=_}),t.qZA()),2&e&&(t.Q6J("count",t.lcZ(1,2,o.notificationService.count$)||0),t.xp6(2),t.Q6J("isOpen",o.isOpenNotificationsModal))},dependencies:[U.g,Q,m.Ov]}),n})();const B=function(n){return{active:n}};function S(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.isOpenChange.emit(!c.isOpen))}),t.TgZ(1,"div",18),t._UZ(2,"span")(3,"span")(4,"span"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(1,B,e.isOpen))}}function Y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"a",19),t.NdJ("click",function(c){const R=t.CHM(e).$implicit,G=t.oxw();return t.KtG(G.navJump(c,R))}),t.TgZ(2,"span"),t._uU(3),t.ALo(4,"translate"),t.qZA()()()}if(2&n){const e=a.$implicit,o=t.oxw();t.xp6(1),t.ekj("logged-in",o.isLogin),t.Q6J("routerLink",e.href)("routerLinkActive","active")("routerLinkActiveOptions","/"===e.href?o.matchOptionsBase:o.matchOptions),t.xp6(2),t.hij(" ",t.lcZ(4,6,e.text)," ")}}const F=function(){return{"mode-active":!0}};function D(n,a){1&n&&(t.TgZ(0,"div",20)(1,"div",21),t._UZ(2,"div",22),t.TgZ(3,"div",23),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"div",24)(7,"div",25),t._UZ(8,"div",26)(9,"div",27)(10,"div",27),t.qZA(),t.TgZ(11,"div",28),t._uU(12),t.ALo(13,"translate"),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("ngClass",t.DdM(7,F)),t.xp6(3),t.hij(" ",t.lcZ(5,3,"chart-mode-single")," "),t.xp6(8),t.hij(" ",t.lcZ(13,5,"chart-mode-pro")," "))}function $(n,a){1&n&&t._UZ(0,"app-language-dropdown",29),2&n&&t.Q6J("showText",!0)("customTextClass","text-white hidden lg:block")("showIcon",!0)}function E(n,a){1&n&&t._UZ(0,"app-membership",30)}function z(n,a){1&n&&t._UZ(0,"app-hash-power",30)}function K(n,a){1&n&&t._UZ(0,"app-notification",2)}const C=function(){return["/"]},V=[{href:"/",text:"top-nav-home"},{href:"/dashboard",text:"top-nav-dashboard"},{href:"/invite",text:"top-nav-invite"},{href:"/my-portfolio",text:"my-portfolio"}];let X=(()=>{class n extends u.H{constructor(e){super(),this.userService=e,this.isOpen=!1,this.isOpenChange=new t.vpe,this.showHamburgerMenu=!1,this.NAV=V,this.isOpenHashModal=!1,this.isLogin=!1,this.isComingSoonMode="comingSoonMode"in f.N&&f.N.comingSoonMode,this.matchOptions={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"ignored"},this.matchOptionsBase={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"ignored"}}ngOnInit(){this.userService.loginStateChange.pipe((0,s.R)(this.onDestroy$)).subscribe(e=>{this.isLogin=e})}navJump(e,o){["/","/dashboard"].includes(o.href)||this.isLogin||this.userService.toggleLoginModal(!0)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-header"]],inputs:{isOpen:"isOpen",showHamburgerMenu:"showHamburgerMenu"},outputs:{isOpenChange:"isOpenChange"},features:[t.qOj],decls:20,vars:12,consts:[[1,"border-b","border-main-border","relative","z-50"],[1,"header-wrapper","fade-in",2,"--delay","0s"],[1,"flex","items-center"],[1,"left","flex","items-center","pr-1.5","md:pr-2"],["class","px-1 block 2md:hidden",3,"click",4,"ngIf"],["src","assets/logo-dark.png","alt","Logo for ottogo, a all-in-one blockchain platform",1,"w-40","2xl:w-48","ml-2","my-2","hidden","lg:block","cursor-pointer",3,"routerLink"],["src","assets/favicon.png","alt","Small logo for ottogo",1,"h-10","lg:hidden","ml-2","my-1.5","cursor-pointer","logo-small",3,"routerLink"],[1,"nav","flex","items-center","font-medium","mr-1.5","xl:mr-2"],[4,"ngFor","ngForOf"],[1,"flex","justify-end","items-center","flex-1"],[1,"flex","items-center","justify-between","2xl:flex-1","header-center"],["class","bg-main-bg hidden 2md:flex border border-main-border rounded-lg overflow-hidden w-32 text-extra-xs text-center font-medium tracking-tighter text-grey-1",4,"ngIf"],[1,"header-right","flex","justify-end","2xl:pl-2"],["class","flex items-center mr-2.5 md:mr-4 lg:mr-5",3,"showText","customTextClass","showIcon",4,"ngIf"],["class","mr-2.5 md:mr-4 flex items-center",4,"ngIf"],["class","flex items-center",4,"ngIf"],[3,"isOpen","isOpenChange"],[1,"px-1","block","2md:hidden",3,"click"],[1,"menu","hamburger7",3,"ngClass"],[1,"nav-item","px-2.5","md:px-3.5","lg:px-4","whitespace-nowrap","tracking-tight","2md:tracking-normal",3,"routerLink","routerLinkActive","routerLinkActiveOptions","click"],[1,"bg-main-bg","hidden","2md:flex","border","border-main-border","rounded-lg","overflow-hidden","w-32","text-extra-xs","text-center","font-medium","tracking-tighter","text-grey-1"],[1,"w-1/2","pt-1.5","pb-1","px-1.5","cursor-pointer",3,"ngClass"],[1,"w-8/12","m-auto","rounded","border-2","border-main-border","h-5"],[1,"whitespace-nowrap","mt-1"],[1,"w-1/2","pt-1.5","pb-1","px-1.5","cursor-pointer"],[1,"w-8/12","m-auto","h-5","grid","grid-rows-2","grid-flow-col","gap-0.5"],[1,"row-span-2","rounded-sm","border-2","border-grey-2"],[1,"row-span-1","rounded-sm","border-2","border-grey-2"],[1,"text-grey-2","mt-1"],[1,"flex","items-center","mr-2.5","md:mr-4","lg:mr-5",3,"showText","customTextClass","showIcon"],[1,"mr-2.5","md:mr-4","flex","items-center"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,S,5,3,"button",4),t._UZ(5,"img",5)(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.YNc(8,Y,5,8,"div",8),t.qZA(),t.TgZ(9,"div",9)(10,"div",10)(11,"div"),t.YNc(12,D,14,8,"div",11),t.qZA()(),t.TgZ(13,"div",12),t.YNc(14,$,1,3,"app-language-dropdown",13),t.YNc(15,E,1,0,"app-membership",14),t.YNc(16,z,1,0,"app-hash-power",14),t.YNc(17,K,1,0,"app-notification",15),t._UZ(18,"app-login-button"),t.qZA()()()()(),t.TgZ(19,"app-buy-hash-power-modal",16),t.NdJ("isOpenChange",function(_){return o.isOpenHashModal=_}),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",o.showHamburgerMenu),t.xp6(1),t.Q6J("routerLink",t.DdM(10,C)),t.xp6(1),t.Q6J("routerLink",t.DdM(11,C)),t.xp6(2),t.Q6J("ngForOf",o.NAV),t.xp6(4),t.Q6J("ngIf",!1),t.xp6(2),t.Q6J("ngIf",!o.isLogin),t.xp6(1),t.Q6J("ngIf",o.isLogin),t.xp6(1),t.Q6J("ngIf",o.isLogin),t.xp6(1),t.Q6J("ngIf",o.isLogin&&!o.isComingSoonMode),t.xp6(2),t.Q6J("isOpen",o.isOpenHashModal))},dependencies:[x.q,m.mk,m.sg,m.O5,r.Gu,r.YI,r.Fo,g.rH,g.Od,l.Q,d.E,b.B,N,q,w.X$],styles:['[_nghost-%COMP%]{background-color:var(--bg-top-header);--left-sidebar-width: 360px;--right-sidebar-width: 380px}@media (min-width: 992px){[_nghost-%COMP%]{--left-sidebar-width: 318px}}@media (min-width: 1280px){[_nghost-%COMP%]{--left-sidebar-width: 360px}}@media (min-width: 1600px){[_nghost-%COMP%]{--left-sidebar-width: 360px;--right-sidebar-width: 360px}}@media (min-width: 1650px){[_nghost-%COMP%]{--left-sidebar-width: 360px;--right-sidebar-width: 390px}}@media (min-width: 1850px){[_nghost-%COMP%]{--right-sidebar-width: 470px}}.header-wrapper[_ngcontent-%COMP%]{padding-top:6px;padding-bottom:6px}ion-header[_ngcontent-%COMP%]:after{content:none}@media (min-width: 1850px){.nav[_ngcontent-%COMP%]{width:calc(50vw - var(--left-sidebar-width) / 2 - var(--right-sidebar-width, 470px) / 2 - 20px);max-width:none}}@media (min-width: 1280px){.left[_ngcontent-%COMP%]{width:var(--left-sidebar-width)}}.text-extra-xs[_ngcontent-%COMP%]{font-size:10px;line-height:.68rem}.mode-active[_ngcontent-%COMP%]{background-color:var(--main-blue-transparent)}.mode-active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--main-blue)!important}.mode-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-color:var(--main-blue)}@keyframes _ngcontent-%COMP%_changeBg{50%{background-position:100% 50%}}.nav-item[_ngcontent-%COMP%]{color:var(--text-nav);padding-top:1rem;padding-bottom:1rem}.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-.375rem;left:0px;right:0px;display:block;height:2px;background-color:var(--main-blue);transform:scaleX(0);transform-origin:right;transition:transform .5s}.nav-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.nav-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after{transform:scaleX(1);transform-origin:left}.nav-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.nav-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{transform:scaleX(1)}@media (min-width: 640px){.nav-item.logged-in[_ngcontent-%COMP%]{padding-left:7px;padding-right:5px}}@media (min-width: 768px){.nav-item.logged-in[_ngcontent-%COMP%]{padding-left:.75rem;padding-right:.75rem}}@media (min-width: 1024px){.nav-item.logged-in[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}}ion-toolbar[_ngcontent-%COMP%]{contain:none}.header-right[_ngcontent-%COMP%]{margin-right:10px}@media (min-width: 1600px){.header-right[_ngcontent-%COMP%]{width:var(--right-sidebar-width)}}.menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:40px;width:50px;position:relative;cursor:pointer;transform:scale(.7)}.menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:100%;height:5px;background-color:#7e7e96;transition:all .5s ease}.hamburger7[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform-origin:left}.hamburger7.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1){transform:rotate(45deg)}.hamburger7.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){width:0}.hamburger7.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3){transform:rotate(-45deg)}.logo-small[_ngcontent-%COMP%]{min-width:40px}']}),n})()}}]);