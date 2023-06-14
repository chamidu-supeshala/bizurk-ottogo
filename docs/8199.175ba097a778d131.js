"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8199],{7248:(S,m,t)=>{t.r(m),t.d(m,{MobileSettingsModule:()=>B});var g=t(6895),u=t(8008),h=t(3416),f=t(9116),r=t(1836),l=t(1782),a=t(7340),c=t(5762),p=t(9300),i=t(4650);function e(o,d){1&o&&i._UZ(0,"app-settings-top-nav")}const n=[{path:"",component:(()=>{class o extends c.H{constructor(){super(),this.showNavbar=!0,window.innerWidth>640&&this.router.navigateByUrl("/settings/my-account"),this.router.events.pipe((0,p.h)(s=>s instanceof l.m2)).subscribe(s=>{this.showNavbar="/"===s.url||"/m/my-portfolio"===s.url||"/m/strategies"===s.url||"/m/social"===s.url||"/invites"===s.url})}onResize(){console.log(),window.innerWidth>640&&this.router.navigateByUrl("/settings/my-account")}ngOnInit(){}}return o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-mobile-settings"]],hostBindings:function(s,y){1&s&&i.NdJ("resize",function(){return y.onResize()},!1,i.Jf7)},features:[i.qOj],decls:3,vars:1,consts:[[4,"ngIf"]],template:function(s,y){1&s&&(i.YNc(0,e,1,0,"app-settings-top-nav",0),i.TgZ(1,"ion-content"),i._UZ(2,"router-outlet"),i.qZA()),2&s&&i.Q6J("ngIf",y.showNavbar)},dependencies:[g.O5,u.W2,l.lC,r.X],data:{animation:[(0,a.X$)("staggerList",[(0,a.eR)("* => *",[(0,a.IO)(":enter",[(0,a.oB)({opacity:0,transform:"{{scale}} {{translateY}}"}),(0,a.EY)(50,[(0,a.jt)("{{time}}",(0,a.oB)({opacity:1,transform:"scale(1) translateY(0)"}))])],{optional:!0})],{params:{scale:"scale(0.6)",time:"0.5s",translateY:"translateY(-.8rem)"}})])]}}),o})(),children:[{path:"",pathMatch:"full",redirectTo:"my-account"},{path:"my-account",loadChildren:()=>Promise.all([t.e(5433),t.e(6555)]).then(t.bind(t,6555)).then(o=>o.MyAccountModule)},{path:"strategies",loadChildren:()=>Promise.all([t.e(5433),t.e(9008),t.e(3599),t.e(7225)]).then(t.bind(t,9257)).then(o=>o.StrategiesModule)},{path:"my-portfolio",loadChildren:()=>Promise.all([t.e(5433),t.e(9008),t.e(3599),t.e(5444),t.e(8360),t.e(1518)]).then(t.bind(t,1885)).then(o=>o.MyPortfolioModule)},{path:"social",loadChildren:()=>Promise.all([t.e(5433),t.e(8592),t.e(6588)]).then(t.bind(t,6588)).then(o=>o.SocialModule)}]}];let M=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[l.Bz.forChild(n),l.Bz]}),o})();var P=t(5576);let B=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[g.ez,u.Pc,h.aw,M,f.Q,P.O,r.X]}),o})()},5762:(S,m,t)=>{t.d(m,{H:()=>i});var g=t(1782),u=t(7579),h=t(727),f=t(5594),r=t(655),l=t(4650),a=t(8008);let c=(()=>{class e{constructor(n){this.toast=n}toastError(n){return(0,r.mG)(this,void 0,void 0,function*(){yield this.presentToast({position:"bottom",message:n,icon:"alert-circle-outline",duration:2500,color:"danger"})})}toastSuccess(n){return(0,r.mG)(this,void 0,void 0,function*(){yield this.presentToast({position:"bottom",message:n,duration:2500,icon:"checkmark-circle-outline",color:"success"})})}presentToast(n){return(0,r.mG)(this,void 0,void 0,function*(){yield(yield this.toast.create(n)).present()})}}return e.\u0275fac=function(n){return new(n||e)(l.LFG(a.yF))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=t(981);let i=(()=>{class e{constructor(){this.onDestroy$=new u.x,this.subscriptions=new h.w0,this.isApp=!1;const n=f.k.getInjector();this.router=n.get(g.F0),this.toast=n.get(c),this.confirm=n.get(p.z),this.isApp=0!==document.URL.indexOf("http")}ngOnDestroy(){this.subscriptions.unsubscribe(),this.onDestroy$.next(!0),this.onDestroy$.complete()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["ng-component"]],decls:0,vars:0,template:function(n,M){},encapsulation:2}),e})()},2722:(S,m,t)=>{t.d(m,{R:()=>r});var g=t(4482),u=t(5403),h=t(8421),f=t(5032);function r(l){return(0,g.e)((a,c)=>{(0,h.Xf)(l).subscribe((0,u.x)(c,()=>c.complete(),f.Z)),!c.closed&&a.subscribe(c)})}}}]);