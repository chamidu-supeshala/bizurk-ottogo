"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7488],{7488:(P,h,i)=>{i.r(h),i.d(h,{OauthPageModule:()=>B});var o=i(6895),u=i(8008),d=i(4006),_=i(8634),g=i(3709),v=i(655),f=i(7154),l=i(529),e=i(4650),t=i(4852),p=i(3416),b=i(7341),A=i(9116),T=i(8854),y=i(5379);const E=["modal"];function Z(s,m){if(1&s&&(e.TgZ(0,"div",10)(1,"div",11),e._UZ(2,"img",12),e.qZA(),e.TgZ(3,"div",13)(4,"p"),e._uU(5),e.ALo(6,"translate"),e.qZA()()()),2&s){const n=e.oxw(2);e.xp6(5),e.Oqu(e.lcZ(6,1,n.msg))}}function I(s,m){if(1&s){const n=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"ion-icon",6),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.closeModal())}),e.qZA()(),e.TgZ(7,"div"),e.YNc(8,Z,7,3,"div",7),e.TgZ(9,"div",8)(10,"ion-button",9),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.closeModal())}),e._uU(11),e.ALo(12,"translate"),e.qZA()()()()()}if(2&s){const n=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,3,"Exchange connection failure")," "),e.xp6(4),e.Q6J("ngIf",n.msg),e.xp6(3),e.Oqu(e.lcZ(12,5,"I already know"))}}let M=(()=>{class s extends b.u{constructor(n){super(),this.themeService=n,this.msg="",this.value=0}ngOnInit(){}get theme(){return this.themeService._theme}closeModal(){this.modal.dismiss(),this.handleDismiss()}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(y.f))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-bind-exception-alerts"]],viewQuery:function(n,a){if(1&n&&(e.Gf(E,5),e.Gf(u.d8,5)),2&n){let r;e.iGM(r=e.CRH())&&(a.modal=r.first),e.iGM(r=e.CRH())&&(a.popover=r.first)}},inputs:{msg:"msg",ip:"ip"},standalone:!0,features:[e.qOj,e.jDz],decls:3,vars:3,consts:[[1,"theme-modal",3,"isOpen","didDismiss"],["modal",""],[1,"gradient-border-modal","exception-modal"],[1,"p-2","font-medium"],[1,"flex","items-center","mb-4"],[1,"flex-1","text-2xl","text-text-strong","font-medium","pl-8","text-center"],["name","close-outline",1,"w-10","h-10","cursor-pointer",3,"click"],["class","font-medium",4,"ngIf"],[1,"text-center","mt-8","px-4","mb-4","text-text-strong"],["size","large",3,"click"],[1,"font-medium"],[1,"mb-5"],["src","../../../../../assets/images/bell.png",1,"bell"],[1,"flex-1","text-xl","p-8","font-medium","text-center","text-text-strong"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-modal",0,1),e.NdJ("didDismiss",function(){return a.handleDismiss()}),e.YNc(2,I,13,7,"ng-template"),e.qZA()),2&n&&(e.Tol("dark"!==a.theme?"light-mode":"dark-mode"),e.Q6J("isOpen",a.isOpen))},dependencies:[o.ez,o.O5,d.UX,d.u5,p.aw,p.X$,u.Pc,u.YG,u.gu,u.ki,A.Q,T.T],styles:["ion-modal[_ngcontent-%COMP%]{--width: 600px;--height: auto}.action-btn[_ngcontent-%COMP%]{width:41.666667%;max-width:163px}ion-popover[_ngcontent-%COMP%]{--border-radius: 20px;--width: 200px}ion-item.activated[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]:hover{--background: var(--main-blue-transparent);--color: var(--main-blue)}.checkbox-item[_ngcontent-%COMP%]{--padding-start: 0px;--padding-top: 0px;--padding-bottom: 0px;--min-height: 30px}.yield-select[_ngcontent-%COMP%]{width:110px;background-color:var(--grey-4)}ion-range[_ngcontent-%COMP%]{--knob-box-shadow: 0px 0px 0px 2px var(--accent-blue);--bar-height: 10px;--bar-border-radius: 6px;--bar-background: #14235a}ion-select[_ngcontent-%COMP%]{--color-hover: red}ion-select-option[_ngcontent-%COMP%]{--background-hover: yellow}@media (min-width: 640px){button[_ngcontent-%COMP%]{min-width:180px}}.text-red[_ngcontent-%COMP%]{color:red}.dark-mode[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: #404366;color:var(text-white);height:40px;--border-radius: 5px}.light-mode[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: #d6d6eb;border-color:#b1b1c9;color:var(--text-text-strong);height:40px;--border-radius: 5px}.bell[_ngcontent-%COMP%]{width:150px;height:120px;margin:0 auto}.mb-40[_ngcontent-%COMP%]{margin-bottom:40px}"]}),s})();const w=[{path:"okx",component:(()=>{class s extends f.H{constructor(n,a,r,c){super(),this.activatedRoute=n,this.loadingController=a,this.oauthService=r,this.i18n=c,this.redirectUrl="",this.errorMsg="",this.isOpenErrModal=!1}ngOnInit(){const{code:n,state:a}=this.activatedRoute.snapshot.queryParams;if(this.redirectUrl=localStorage.getItem(a)||"/",!this.redirectUrl)return void this.router.navigateByUrl(this.redirectUrl);const[r,c]=this.redirectUrl.split("?"),x=new l.LE({fromString:c});this.queryBindCode(x,r,n,a)}queryBindCode(n,a,r,c){return(0,v.mG)(this,void 0,void 0,function*(){yield(yield this.loadingController.create({message:this.i18n.instant("Authorization in progress")})).present(),this.oauthService.bind({provider:n.get("provider"),nick_name:n.get("nick_name"),code:r}).subscribe(O=>{if(Object.is(O.code,0))return this.toast.toastSuccess(this.i18n.instant("Successful authorization")),void this.redirect(n,a,r,c);this.errorMsg=O.message,this.isOpenErrModal=!0}).add(()=>{this.loadingController.dismiss()})})}exceptionAlertsOpenChange(n){if(n)return;const{code:a,state:r}=this.activatedRoute.snapshot.queryParams,[c,x]=this.redirectUrl.split("?"),O=new l.LE({fromString:x});this.redirect(O,c,a,r)}redirect(n,a,r,c){this.router.navigate([a],{queryParams:Object.assign({okxCode:r,state:c},n.keys().reduce((x,O)=>(x[O]=n.get(O),x),{}))})}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(g.gz),e.Y36(u.HT),e.Y36(t.D),e.Y36(p.sK))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-oauth-okx"]],features:[e.qOj],decls:3,vars:4,consts:[[3,"isOpen","msg","isOpenChange"]],template:function(n,a){1&n&&(e._UZ(0,"div"),e.TgZ(1,"app-bind-exception-alerts",0),e.NdJ("isOpenChange",function(c){return a.isOpenErrModal=c})("isOpenChange",function(c){return a.exceptionAlertsOpenChange(c)}),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Q6J("isOpen",a.isOpenErrModal)("msg",e.lcZ(2,2,a.errorMsg)))},dependencies:[M,p.X$]}),s})()}];let D=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[g.Bz.forChild(w),g.Bz]}),s})();var C=i(9485),U=i(1836);let B=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[o.ez,d.u5,u.Pc,D,_.x,p.aw,C.kz,U.X,M]}),s})()},364:(P,h,i)=>{i.d(h,{g:()=>f});var o=i(4650),u=i(6895);let d=(()=>{class l{transform(t,p,b=!1){return t>p?`${p}${b?"+":""}`:t}}return l.\u0275fac=function(t){return new(t||l)},l.\u0275pipe=o.Yjl({name:"maxNumber",type:l,pure:!0}),l})();function _(l,e){if(1&l&&(o.O4$(),o.TgZ(0,"g",9),o._UZ(1,"rect",10)(2,"rect",11),o.TgZ(3,"text",12),o._uU(4),o.qZA()()),2&l){const t=o.oxw();o.xp6(4),o.Oqu(t.count)}}function g(l,e){if(1&l&&(o.O4$(),o.TgZ(0,"g",13),o._UZ(1,"rect",14)(2,"rect",15),o.TgZ(3,"text",16),o._uU(4),o.qZA()()),2&l){const t=o.oxw();o.xp6(4),o.Oqu(t.count)}}function v(l,e){if(1&l&&(o.O4$(),o.TgZ(0,"g",17),o._UZ(1,"rect",18)(2,"rect",19),o.TgZ(3,"text",20),o._uU(4),o.ALo(5,"maxNumber"),o.qZA()()),2&l){const t=o.oxw();o.xp6(4),o.Oqu(o.Dn7(5,1,t.count,99,!0))}}let f=(()=>{class l{constructor(){this.count=0}ngOnChanges(t){const p=t.count;!p.isFirstChange()&&p.currentValue!==p.previousValue&&this.bellAn&&(p.currentValue?this.bellAn.play(0):this.bellAn.pause(0))}ngAfterViewInit(){this.bellAn=gsap.timeline({paused:!0,repeat:-1,repeatDelay:0,defaults:{ease:"sine.inOut"}}),this.bellAn.set("#bell-an #bell-group",{svgOrigin:"10px 3.95px"}).to("#bell-an #bell-group",.3,{rotation:5},0).to("#bell-an #bell-group",2.05,{rotation:0,ease:"elastic.out(4, .1)"},.3).to("#bell-an #bell-ball",.3,{x:.5},.05).to("#bell-an #bell-ball",2.05,{x:0,ease:"elastic.out(4, .1)"},.35),this.count>0&&this.bellAn.play(0)}}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-animated-bell"]],inputs:{count:"count"},features:[o.TTD],decls:9,vars:3,consts:[["id","bell-an","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",2,"overflow","visible"],["id","background","cx","10","cy","10","r","10","fill","#fff"],["id","bell-group"],["d","M15.71,12.47l-.32-2.75a5.42,5.42,0,0,0-3.74-5.09V4A1.65,1.65,0,1,0,8.36,4v.68A5.42,5.42,0,0,0,4.61,9.72l-.32,2.75a1.81,1.81,0,0,0-.68,1.41V14c0,1.34,1.31,1.34,1.81,1.34h9.16c.5,0,1.81,0,1.81-1.34v-.11A1.78,1.78,0,0,0,15.71,12.47ZM15,14l-.46,0H5.42L5,14v-.08a.46.46,0,0,1,.26-.41l.34-.16L6,9.84V9.76A4.05,4.05,0,0,1,9.17,5.81l.54-.11V4a.29.29,0,1,1,.58,0V5.7l.54.11a4.05,4.05,0,0,1,3.21,4l.41,3.55.33.16a.45.45,0,0,1,.26.41Z"],["id","bell-ball","d","M7.23,15.17v.16A2.74,2.74,0,0,0,9.89,17.7a2.74,2.74,0,0,0,2.66-2.37v-.16Zm2.66,1.18a1.36,1.36,0,0,1-1.2-.8h2.4A1.35,1.35,0,0,1,9.89,16.35Z"],["id","notifications"],["class","visible","id","notification-one","opacity","0",4,"ngIf"],["class","visible","id","notification-two","opacity","0","class","visible",4,"ngIf"],["class","visible","id","notification-three","opacity","0","class","visible",4,"ngIf"],["id","notification-one","opacity","0",1,"visible"],["id","pulse-one","x","11.41","y","2.42","width","7.9","height","7.9","rx","3.95","fill","#ff0042"],["id","red-one","x","11.41","y","2.42","width","7.9","height","7.9","rx","3.95","fill","#ff0042"],["id","number-one","transform","translate(13.49 8.79)","font-size","6.65","fill","#fff","font-family","Roboto-Bold, Roboto","font-weight","700"],["id","notification-two","opacity","0",1,"visible"],["id","pulse-two","x","11.41","y","2.42","width","11.57","height","7.9","rx","3.91","fill","#ff0042"],["id","bg-two","x","11.41","y","2.42","width","11.57","height","7.9","rx","3.91","fill","#ff0042"],["id","number-two","transform","translate(13.49 8.79)","font-size","6.65","fill","#fff","font-family","Roboto-Bold, Roboto","font-weight","700"],["id","notification-three","opacity","0",1,"visible"],["id","pulse-three","x","11.41","y","2.42","width","14.94","height","7.9","rx","3.95","fill","#ff0042"],["id","bg-three","x","11.41","y","2.42","width","14.94","height","7.9","rx","3.95","fill","#ff0042"],["id","number-three","transform","translate(13.49 8.79)","font-size","6.65","fill","#fff","font-family","Roboto-Bold, Roboto","font-weight","700"]],template:function(t,p){1&t&&(o.O4$(),o.TgZ(0,"svg",0),o._UZ(1,"circle",1),o.TgZ(2,"g",2),o._UZ(3,"path",3)(4,"path",4),o.qZA(),o.TgZ(5,"g",5),o.YNc(6,_,5,1,"g",6),o.YNc(7,g,5,1,"g",7),o.YNc(8,v,6,5,"g",8),o.qZA()()),2&t&&(o.xp6(6),o.Q6J("ngIf",p.count>0),o.xp6(1),o.Q6J("ngIf",p.count>9),o.xp6(1),o.Q6J("ngIf",p.count>99))},dependencies:[u.O5,d],styles:["svg[_ngcontent-%COMP%]{width:31px}@media (min-width: 375px){svg[_ngcontent-%COMP%]{width:35px}}  .light-mode #bell-an #background{fill:rgba(0,0,0,.07)}  .light-mode #bell-an #bell-group path{fill:#000}@media (min-width: 640px){  .light-mode #bell-an #background{fill:rgba(255,255,255,.1)}  .light-mode #bell-an #bell-group path{fill:#fff}}  .dark-mode #bell-an #background{fill:rgba(255,255,255,.1)}  .dark-mode #bell-an #bell-group path{fill:#fff}#bell-an[_ngcontent-%COMP%]   #notifications[_ngcontent-%COMP%] > .visible[_ngcontent-%COMP%]{opacity:1}@keyframes _ngcontent-%COMP%_notification-pulse{0%{transform:none}to{transform:scale(2);opacity:0}}#bell-an[_ngcontent-%COMP%]   #notification-one.visible[_ngcontent-%COMP%]   #pulse-one[_ngcontent-%COMP%]{transform-origin:15.35px 6.37px;animation:_ngcontent-%COMP%_notification-pulse 2s cubic-bezier(.37,0,.63,1) both infinite}#bell-an[_ngcontent-%COMP%]   #notification-two.visible[_ngcontent-%COMP%]   #pulse-two[_ngcontent-%COMP%]{transform-origin:17.19px 6.37px;animation:_ngcontent-%COMP%_notification-pulse 2s cubic-bezier(.37,0,.63,1) both infinite}#bell-an[_ngcontent-%COMP%]   #notification-three.visible[_ngcontent-%COMP%]   #pulse-three[_ngcontent-%COMP%]{transform-origin:18.87px 6.37px;animation:_ngcontent-%COMP%_notification-pulse 2s cubic-bezier(.37,0,.63,1) both infinite}"]}),l})()},8201:(P,h,i)=>{i.d(h,{m:()=>u});var o=i(4650);let u=(()=>{class d{}return d.\u0275fac=function(g){return new(g||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-profile-icon"]],decls:5,vars:0,consts:[["viewBox","0 0 248.70832 248.70833"],["id","layer1","transform","translate(-23.056511,-80.886898)"],["id","g847","transform","translate(299.35714,183.69643)"],["id","rect841","width","248.70833","height","248.70833","x","-276.30063","y","-102.80953",2,"fill","#eeeeee","fill-opacity","1","stroke","none","stroke-width","0.945669"],["d","m -257.51517,136.69344 v -9.20538 l 1.35274,-2.37014 1.35274,-2.37015 2.39731,-3.43959 2.3973,-3.43958 1.46128,-1.85208 1.46129,-1.85209 2.39544,-2.76829 2.39545,-2.76829 3.30729,-3.29928 3.30729,-3.29928 3.43958,-2.941065 3.43959,-2.941061 2.11666,-1.588839 2.11667,-1.588839 2.11667,-1.471118 2.11666,-1.471115 2.24896,-1.406641 2.24896,-1.406639 1.5875,-0.909997 1.5875,-0.909995 4.10104,-2.062562 4.10104,-2.062559 3.43959,-1.441038 3.43958,-1.44104 3.96875,-1.340522 3.96875,-1.340522 2.38125,-0.65379 2.38125,-0.653791 2.91042,-0.677521 2.91041,-0.677522 3.70417,-0.656846 3.70417,-0.65685 3.57187,-0.409747 3.57188,-0.409749 3.70416,-0.265938 3.70417,-0.265941 h 5.15938 5.15937 l 3.70417,0.26792 3.70416,0.267917 3.57188,0.398724 3.57187,0.398725 2.38125,0.408863 2.38125,0.408866 2.59352,0.509807 2.59351,0.50981 2.69815,0.67787 2.69816,0.677871 2.64583,0.794033 2.64583,0.794036 3.43959,1.218491 3.43958,1.218491 3.21161,1.39506 3.211612,1.395061 3.468444,1.738043 3.468447,1.73804 2.977234,1.762162 2.977237,1.762159 2.645834,1.776542 2.645833,1.776542 3.079533,2.34672 3.079533,2.346722 3.138176,2.684317 3.138175,2.684315 3.842171,3.93027 3.84217,3.93026 2.807174,3.37351 2.807176,3.37351 2.346487,3.29863 2.346489,3.29863 1.785146,2.98515 1.785144,2.98516 7.94e-4,9.19427 7.91e-4,9.19427 h -105.70104 -105.70105 z m 100.2205,-86.174224 -3.36388,-0.368692 -2.85383,-0.681133 -2.85383,-0.681135 -2.51354,-0.811136 -2.51354,-0.811136 -3.43958,-1.669071 -3.43959,-1.669071 -2.51354,-1.654204 -2.51354,-1.654204 -1.19063,-0.951347 -1.19062,-0.951346 -1.32292,-1.233043 -1.32291,-1.23304 -1.34504,-1.283738 -1.34504,-1.283737 -1.72201,-2.116666 -1.72201,-2.116667 -1.33616,-1.984375 -1.33614,-1.984375 -1.16196,-2.116667 -1.16196,-2.116667 -0.95681,-2.248958 -0.95681,-2.248958 -0.81623,-2.513542 -0.81623,-2.513542 -0.3832,-1.8520831 -0.38319,-1.8520834 -0.41455,-2.576838 -0.41454,-2.5768406 v -4.7192936 -4.719291 l 0.39042,-2.7812656 0.39042,-2.7812687 0.78044,-3.019475 0.78045,-3.019478 0.78866,-2.133481 0.78867,-2.133484 1.46954,-3.025891 1.46953,-3.025894 1.7996,-2.693292 1.7996,-2.693289 1.8939,-2.206162 1.89389,-2.206162 2.07171,-1.980287 2.07171,-1.980288 1.19063,-0.918632 1.19062,-0.918632 0.13229,-0.139128 0.1323,-0.139128 2.25072,-1.49502 2.25072,-1.49502 2.77636,-1.463053 2.77636,-1.463053 2.77813,-1.046713 2.77812,-1.046713 3.33207,-0.820768 3.33206,-0.820769 2.09189,-0.304346 2.0919,-0.304346 5.02708,-0.01043 5.02709,-0.01043 2.38125,0.339105 2.38125,0.339103 2.24896,0.507119 2.24895,0.507118 2.4996,0.816571 2.4996,0.816572 2.34391,1.03146 2.34392,1.03146 1.97703,1.085058 1.97703,1.085057 2.70446,1.905624 2.70445,1.905624 1.04889,0.910602 1.04889,0.910602 1.87896,1.852083 1.87895,1.852084 1.46696,1.719791 1.46696,1.719792 1.29605,1.852084 1.29605,1.852083 0.95867,1.5875 0.95866,1.5875 0.79332,1.5875 0.7933,1.5875 0.92742,2.248958 0.92742,2.248959 0.79893,2.645833 0.79893,2.645833 0.612248,3.307292 0.612251,3.3072919 -0.0013,5.8208334 -0.0013,5.8208334 -0.348159,2.1166667 -0.34816,2.1166667 -0.51426,2.1166669 -0.51426,2.116667 -0.81383,2.513541 -0.81383,2.513542 -0.40529,0.926042 -0.40529,0.926041 -0.8608,1.852084 -0.8608,1.852083 -1.01699,1.732865 -1.017,1.732862 -1.84479,2.632763 -1.84479,2.63276 -3.57917,3.591912 -3.57916,3.591915 -2.01768,1.47892 -2.01768,1.478923 -2.08337,1.296075 -2.08336,1.296077 -2.51354,1.234189 -2.51354,1.234191 -1.85208,0.69196 -1.85209,0.691959 -2.77812,0.779886 -2.77813,0.779886 -3.43958,0.518144 -3.43958,0.518144 -3.3073,0.119605 -3.30729,0.119607 -3.36388,-0.368694 z","id","path849",2,"fill","#b1b1b1","fill-opacity","1","stroke-width","0.264583"]],template:function(g,v){1&g&&(o.O4$(),o.TgZ(0,"svg",0)(1,"g",1)(2,"g",2),o._UZ(3,"rect",3)(4,"path",4),o.qZA()()())},encapsulation:2}),d})()},1836:(P,h,i)=>{i.d(h,{X:()=>m});var o=i(6895),u=i(3709),d=i(8008),_=i(2722),g=i(7154),v=i(9116),f=i(8854),l=i(560),e=i(4912),t=i(4650),p=i(5939),b=i(6396),A=i(8201),T=i(364),y=i(7139),E=i(3284);function Z(n,a){1&n&&t._UZ(0,"app-theme-toggle",11)}function I(n,a){1&n&&t._UZ(0,"app-language-dropdown",12),2&n&&t.Q6J("showText",!1)("showIcon",!0)}function M(n,a){1&n&&t._UZ(0,"app-membership",13)}function L(n,a){1&n&&t._UZ(0,"app-hash-power",13)}const w=function(n){return{originUrl:n}};function D(n,a){if(1&n&&t._UZ(0,"app-animated-bell",14),2&n){const r=t.oxw();t.Q6J("queryParams",t.VKq(2,w,r.router.url))("count",r.count||0)}}const C=function(n){return{back:n}};function U(n,a){if(1&n&&(t.TgZ(0,"a",15)(1,"div",16),t._UZ(2,"img",17),t.qZA()()),2&n){const r=a.ngIf,c=t.oxw();t.Q6J("queryParams",t.VKq(2,C,c.router.url)),t.xp6(2),t.Q6J("src",r.headImgUrl,t.LSH)}}function B(n,a){if(1&n&&(t.TgZ(0,"a",15)(1,"div",18),t._UZ(2,"app-profile-icon"),t.qZA()()),2&n){const r=t.oxw();t.Q6J("queryParams",t.VKq(1,C,r.router.url))}}const s=["*"];let m=(()=>{class n extends g.H{constructor(r,c){super(),this.userService=r,this.notificationService=c,this.isLogin=!1,this.count=0}ngOnInit(){this.userService.loginStateChange.pipe((0,_.R)(this.onDestroy$)).subscribe(r=>{this.isLogin=r}),this.notificationService.count$.subscribe(r=>{this.count=r})}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(p.K),t.Y36(b.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-settings-top-nav"]],standalone:!0,features:[t.qOj,t.jDz],ngContentSelectors:s,decls:22,vars:20,consts:[[1,"header","flex","justify-between","px-2","py-3"],[1,"flex","items-center",3,"routerLink"],["src","assets/logo-dark.png","alt","Logo for ottogo, a all-in-one blockchain platform",1,"h-7","xs:h-8","2xs:h-9","ml-2","cursor-pointer","dark-element"],["src","assets/logo-light.png","alt","Logo for ottogo, a all-in-one blockchain platform",1,"h-7","xs:h-8","2xs:h-9","ml-2","cursor-pointer","light-element"],[1,"flex","items-center"],["class","flex items-center mr-2 2xs:mr-4",4,"ngIf"],["class","flex items-center mr-2 2xs:mr-4",3,"showText","showIcon",4,"ngIf"],["class","mr-2.5 flex items-center",4,"ngIf"],["routerLink","/notifications","class","cursor-pointer mr-2.5",3,"queryParams","count",4,"ngIf"],["routerLink","/settings",3,"queryParams",4,"ngIf","ngIfElse"],["loginTemplate",""],[1,"flex","items-center","mr-2","2xs:mr-4"],[1,"flex","items-center","mr-2","2xs:mr-4",3,"showText","showIcon"],[1,"mr-2.5","flex","items-center"],["routerLink","/notifications",1,"cursor-pointer","mr-2.5",3,"queryParams","count"],["routerLink","/settings",3,"queryParams"],[1,"w-8","h-8","2xs:w-9","2xs:h-9","flex","flex-none","justify-center","items-center"],["alt","Avatar","width","36px","height","36px",1,"rounded-full","overflow-hidden","exclude-me",3,"src"],[1,"w-8","h-8","rounded-full","overflow-hidden"]],template:function(r,c){if(1&r&&(t.F$t(),t.TgZ(0,"ion-header")(1,"div",0)(2,"div",1),t._UZ(3,"img",2)(4,"img",3),t.qZA(),t.TgZ(5,"div",4),t.YNc(6,Z,1,0,"app-theme-toggle",5),t.ALo(7,"async"),t.YNc(8,I,1,2,"app-language-dropdown",6),t.ALo(9,"async"),t.YNc(10,M,1,0,"app-membership",7),t.ALo(11,"async"),t.YNc(12,L,1,0,"app-hash-power",7),t.ALo(13,"async"),t.YNc(14,D,1,4,"app-animated-bell",8),t.ALo(15,"async"),t.YNc(16,U,3,4,"a",9),t.ALo(17,"async"),t.YNc(18,B,3,3,"ng-template",null,10,t.W1O),t.qZA()(),t.TgZ(20,"div"),t.Hsn(21),t.qZA()()),2&r){const x=t.MAs(19);t.xp6(2),t.Q6J("routerLink","/"),t.xp6(4),t.Q6J("ngIf",!t.lcZ(7,8,c.userService.userInfo$)),t.xp6(2),t.Q6J("ngIf",!t.lcZ(9,10,c.userService.userInfo$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(11,12,c.userService.userInfo$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(13,14,c.userService.userInfo$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(15,16,c.userService.userInfo$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(17,18,c.userService.userInfo$))("ngIfElse",x)}},dependencies:[o.ez,o.O5,o.Ov,u.Bz,u.rH,d.Pc,d.Gu,d.YI,d.Fo,v.Q,A.m,T.g,f.T,y.q,E.T,e.E,l.B],styles:["[_nghost-%COMP%]{position:sticky;top:0;transition:transform .3s}.hide-header[_nghost-%COMP%]{transform:translateY(-65px)}.header[_ngcontent-%COMP%]{position:sticky;top:0;transition:transform .3s;z-index:50;box-shadow:0 0 14px rgba(0,0,0,.3)}  .light-mode .header{background-color:#f7f7f7;border-bottom-width:1px;border-color:var(--main-border)}  .dark-mode .header{background-color:#232342;border-bottom:1px solid #4b4c79}"]}),n})()},4852:(P,h,i)=>{i.d(h,{D:()=>_});var o=i(2340),u=i(4650),d=i(529);let _=(()=>{class g{constructor(f){this.http=f}bind(f){return this.http.post(`${o.N.BASE_URL}/oauth/bind`,f)}}return g.\u0275fac=function(f){return new(f||g)(u.LFG(d.eN))},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);