"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[27],{27:(I,u,o)=>{o.r(u),o.d(u,{HomePageModule:()=>j});var c=o(6895),m=o(8008),h=o(4006),b=o(8634),p=o(3709),_=o(2722),O=o(7154),t=o(4650),C=o(5939),P=o(1003),M=o(1070),x=o(1836),w=o(2853),Z=o(2113),v=o(4464),l=o(8879),d=o(9485);const y=["swiper"];function A(e,s){if(1&e&&(t.TgZ(0,"div",4),t._UZ(1,"img",5),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("src",n.imgLink,t.LSH)}}function T(e,s){1&e&&t.YNc(0,A,2,1,"ng-template",3)}l.ZP.use([l.W_,l.pt,l.N1,l.tl,l.LW,l.LG,v.L$]);let k=(()=>{class e{constructor(){this.slideOpts={slidesPerView:2,speed:500,loop:!0,autoplay:{delay:3e3},breakpoints:{640:{}}},this.slides=[{imgLink:"assets/images/home/slider-binance.png"},{imgLink:"assets/images/home/slider-okx.png"}]}ngOnInit(){setTimeout(()=>{var n,i,a;null===(a=null===(i=null===(n=this.swiper)||void 0===n?void 0:n.swiperRef)||void 0===i?void 0:i.autoplay)||void 0===a||a.start()},2e3)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-exchange-accounts-slider"]],viewQuery:function(n,i){if(1&n&&t.Gf(y,5),2&n){let a;t.iGM(a=t.CRH())&&(i.swiper=a.first)}},decls:3,vars:2,consts:[[1,"rounded-lg","overflow-hidden","w-full","h-full",3,"config","mouseenter","mouseleave"],["swiper",""],[4,"ngFor","ngForOf"],["swiperSlide",""],[1,"image-wrapper","w-full","h-full","relative","cursor-pointer"],[1,"object-cover","object-center","!w-full","!h-full",3,"src"]],template:function(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"swiper",0,1),t.NdJ("mouseenter",function(){t.CHM(a);const r=t.MAs(1);return t.KtG(null==r||null==r.swiperRef||null==r.swiperRef.autoplay?null:r.swiperRef.autoplay.stop())})("mouseleave",function(){t.CHM(a);const r=t.MAs(1);return t.KtG(null==r||null==r.swiperRef||null==r.swiperRef.autoplay?null:r.swiperRef.autoplay.start())}),t.YNc(2,T,1,0,null,2),t.qZA()}2&n&&(t.Q6J("config",i.slideOpts),t.xp6(2),t.Q6J("ngForOf",i.slides))},dependencies:[c.sg,d.nF,d.YC],styles:["swiper[_ngcontent-%COMP%]     .swiper-slide{height:100%}swiper[_ngcontent-%COMP%]     .swiper-wrapper{align-items:center;max-width:320px;position:relative}swiper[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]{width:200px;padding-left:15px;padding-right:15px}"],changeDetection:0}),e})();var f=o(3416);const U=["strategiesBanner"];function L(e,s){if(1&e&&t.GkF(0,53),2&e){t.oxw();const n=t.MAs(147);t.Q6J("ngTemplateOutlet",n)}}const J=function(){return{animations:!0}};function q(e,s){if(1&e&&(t.TgZ(0,"div",76)(1,"div",77),t.GkF(2,78),t.qZA()()),2&e){t.oxw();const n=t.MAs(147);t.xp6(2),t.Q6J("ngTemplateOutlet",n)("ngTemplateOutletContext",t.DdM(2,J))}}const H=function(e){return{inviterId:e}};function Q(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",79)(1,"a",80),t._UZ(2,"ion-icon",81),t.TgZ(3,"div",82),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"a",83),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.userService.toggleLoginModal(!0))}),t._UZ(7,"ion-icon",84),t.TgZ(8,"div",82),t._uU(9),t.ALo(10,"translate"),t.qZA()()()}if(2&e){const n=s.animations,i=t.oxw();t.xp6(1),t.Q6J("queryParams",t.VKq(9,H,i.inviterId))("classOnVisible",n?"fade-in-from-left":null),t.xp6(3),t.Oqu(t.lcZ(5,5,"landing-page-sign-up")),t.xp6(2),t.Q6J("classOnVisible",n?"fade-in-from-right":null),t.xp6(3),t.Oqu(t.lcZ(10,7,"landing-page-login"))}}function V(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"a",85),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.onClickStartNow())}),t._UZ(1,"img",86),t.TgZ(2,"div",82),t._uU(3),t.ALo(4,"translate"),t.qZA()()}2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"landing-page-start-now")))}const z=[{path:"",component:(()=>{class e extends O.H{constructor(n,i){super(),this._activatedRoute=n,this.userService=i,this.isLoggedIn=!1,this.inviterId=this._activatedRoute.snapshot.queryParamMap.get("inviterId"),this.inviteCode=this._activatedRoute.snapshot.queryParamMap.get("inviteCode")}ngOnInit(){this.userService.loginStateChange.pipe((0,_.R)(this.onDestroy$)).subscribe(n=>{this.isLoggedIn=n,(this.inviterId||this.inviteCode)&&this.register()})}onPageScroll(n){this.strategiesBanner&&window.innerWidth>767&&(this.strategiesBanner.nativeElement.style.top=.1*n.detail.scrollTop-160+"px")}onClickStartNow(){const n=this.isLoggedIn?window.innerWidth>=640?"/dashboard":"/strategies":"/auth/register";this.router.navigateByUrl(n)}register(){this.userService.toggleLoginModal(!0,!0)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.gz),t.Y36(C.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],viewQuery:function(n,i){if(1&n&&t.Gf(U,5),2&n){let a;t.iGM(a=t.CRH())&&(i.strategiesBanner=a.first)}},features:[t.qOj],decls:150,vars:108,consts:[[3,"fullscreen","scrollEvents","ionScroll"],["ionContent",""],[1,"hidden","sm:block","sticky-main-header",3,"hideMobileHeader"],[1,"block","sm:hidden","w-full","z-20",3,"hideMobileHeader"],[1,"h-full","flex","flex-col","font-medium","text-sm","sm:text-base"],[1,"home-content"],[1,"top-section","pt-6","pb-20"],[1,"w-11/12","container","mx-auto","flex","flex-col","md:flex-row"],[1,"md:max-w-xs","xl:max-w-sm","md:mr-10","mt-4","lg:mt-10","flex","flex-col","items-center","sm:items-start","text-center","sm:text-left",3,"ngClass"],[1,"title","title-main","uppercase","font-extrabold","text-4xl","leading-9","fade-in",2,"--delay","0.5s"],[3,"innerHtml"],[1,"title","uppercase","mt-1.5","font-extrabold","text-4xl","leading-9","text-black","fade-in-from-left",2,"--delay","0.5s"],[1,"sub-title","uppercase","mt-4","font-bold","text-xl","text-black","mb-6","fade-in-from-bottom",2,"--delay","0.8s"],[3,"ngTemplateOutlet",4,"ngIf","ngIfElse"],[1,"w-full","flex","items-start","lg:items-center"],["src","assets/images/home/landing-banner-1.png","srcset","assets/images/home/landing-banner-1.png 1x,assets/images/home/landing-banner-1-2x.png 2x","alt","banner",1,"banner","w-full","relative","z-10","fade-in",2,"--delay","0.5s"],["src","assets/images/home/section-seperator.svg","alt","seperator",1,"section-seperator","seperator-1","w-full"],[1,"connect-section","bg-white","-my-0.5","pt-8"],[1,"w-11/12","container","mx-auto","flex","justify-center","flex-col","items-center"],[1,"connect-title","text-xl","font-semibold","text-black","text-center",3,"innerHtml"],[1,"fade-in",2,"--delay","0.7s"],["src","assets/images/home/section-seperator.svg","alt","seperator",1,"section-seperator","seperator-2","w-full"],[1,"trading-automation-section","bg-white","text-white","-mt-px","pt-20","pb-32"],[1,"w-11/12","container","mx-auto","flex","justify-center","flex-col-reverse","md:flex-row","items-center","md:items-end"],[1,"automation-image","mb-7",2,"--duration","0.5s",3,"classOnVisible"],["src","assets/images/home/trading-automation-left.png","srcset","assets/images/home/trading-automation-left.png 1x,assets/images/home/trading-automation-left-2x.png 2x","alt","trading-automation",1,"relative"],[1,"automation-content","flex","flex-col"],[1,"floating-image","flex","justify-center"],["src","assets/images/home/floating-image.png","srcset","assets/images/home/floating-image.png 1x,assets/images/home/floating-image-2x.png 2x","alt","trading-automation",1,"relative","ml-6"],[1,"tranding-automation-text","flex","flex-col","items-center","my-6"],[1,"font-semibold","text-center"],[1,"font-extrabold","text-center"],[1,"tranding-automation-slogan","text-center","leading-6",3,"innerHtml"],[1,"automation-image","mb-7","hidden","md:block","mb-12",2,"--duration","0.5s",3,"classOnVisible"],["src","assets/images/home/trading-automation-right.png","srcset","assets/images/home/trading-automation-right.png 1x,assets/images/home/trading-automation-right-2x.png 2x","alt","trading-automation",1,"relative"],[1,"w-11/12","container","mx-auto"],[1,"automation-box-wrapper","mx-auto","mt-7","grid","grid-cols-1","md:grid-cols-2","md:w-4/5","lg:w-3/5","gap-7"],[1,"automation-box","bg-white","px-8","py-10","flex","items-center","flex-col"],["src","assets/images/home/robot-icon.png","srcset","assets/images/home/robot-icon.png 1x,assets/images/home/robot-icon-2x.png 2x","alt","trading-automation",1,"relative",2,"--delay","0.2s",3,"classOnVisible"],[1,"title","font-semibold","text-center"],[1,"description","font-medium","text-center"],["src","assets/images/home/trade-icon.png","srcset","assets/images/home/trade-icon.png 1x,assets/images/home/trade-icon-2x.png 2x","alt","trading-automation",1,"relative",2,"--delay","0.2s",3,"classOnVisible"],[1,"title","yellow","font-semibold","text-center"],[1,"trading-strategies-section","bg-white","-mt-0.5","py-16"],[1,"strategies","w-full","flex","flex-col","gap-8"],[1,"text-black","text-4xl","font-semibold",3,"classOnVisible"],[1,"strategy-wrapper","flex","gap-8"],["src","assets/images/home/graph-icon.png","srcset","assets/images/home/graph-icon.png 1x,assets/images/home/graph-icon-2x.png 2x","alt","trading-automation",1,"relative",2,"--delay","0.2s",3,"classOnVisible"],[1,"strategy-reason","-mt-px"],[1,"text-black","text-xl","font-semibold"],[1,"font-normal"],["src","assets/images/home/eye-icon.png","srcset","assets/images/home/eye-icon.png 1x,assets/images/home/eye-icon-2x.png 2x","alt","trading-automation",1,"relative",2,"--delay","0.4s",3,"classOnVisible"],["src","assets/images/home/tokens-icon.png","srcset","assets/images/home/tokens-icon.png 1x,assets/images/home/tokens-icon-2x.png 2x","alt","trading-automation",1,"relative",2,"--delay","0.6s",3,"classOnVisible"],[3,"ngTemplateOutlet"],[1,"w-full","banner","flex","items-start","lg:items-center","justify-end","md:ml-6","mt-8","md:mt-0","self-center","md:self-auto"],["src","assets/images/home/landing-banner-2.png","srcset","assets/images/home/landing-banner-2.png 1x,assets/images/home/landing-banner-2-2x.png 2x","alt","banner",1,"w-full","relative","z-10",2,"--delay","0.4s",3,"classOnVisible"],["strategiesBanner",""],[1,"invite-section","py-8","text-white"],[1,"w-full","max-w-3xl"],[1,"title","font-semibold",2,"--delay","0.2s",3,"classOnVisible"],[1,"description","font-normal"],[1,"m-auto","w-72","mt-6","md:mt-auto"],["routerLink","/pro-trading-tools",1,"learn-more","flex","justify-center","items-center","text-white","border","border-white","border-solid","uppercase","hover:text-black","hover:bg-white","block","mx-auto"],[1,"benefits-section","pt-6","bg-white",3,"ngClass"],[1,"w-11/12","container","mx-auto","pt-4"],[1,"font-extrabold","text-center","section-title","w-fit","mx-auto","mb-6","md:mb-0",2,"--delay","0.2s",3,"classOnVisible"],[1,"w-full","flex","flex-col","md:flex-row","gap-2","md:gap-6"],[1,"benefits-wrapper","bg-white","py-4","md:py-10","flex","items-center","flex-col"],["src","assets/images/home/dashboard-icon.png","srcset","assets/images/home/dashboard-icon.png 1x,assets/images/home/dashboard-icon-2x.png 2x","alt","Easy trading",1,"relative",2,"--delay","0.2s",3,"classOnVisible"],[1,"title","font-semibold","text-center","text-black","mb-1"],[1,"description","font-normal","text-center",3,"innerHtml"],["src","assets/images/home/support-icon.png","srcset","assets/images/home/support-icon.png 1x,assets/images/home/support-icon-2x.png 2x","alt","Easy trading",1,"relative",2,"--delay","0.4s",3,"classOnVisible"],["src","assets/images/home/earth-icon.png","srcset","assets/images/home/earth-icon.png 1x,assets/images/home/earth-icon-2x.png 2x","alt","Easy trading",1,"relative",2,"--delay","0.6s",3,"classOnVisible"],["class","signup-login-section py-6 bg-white",4,"ngIf"],["loginSignUpButtons",""],["startNowButton",""],[1,"signup-login-section","py-6","bg-white"],[1,"w-11/12","container","mx-auto","py-2","md:w-fit","flex","justify-center"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","gap-x-4","sm:gap-x-5","xl:gap-x-7","w-full","z-10"],["routerLink","/auth/register",1,"sign-up","animated-button","text-black","w-1/2","md:w-40","h-12","flex","pl-2","py-2","items-center","justify-center","rounded-xl",2,"--delay","0.2s",3,"queryParams","classOnVisible"],["name","person",1,"w-5","h-5","mr-3"],[1,"uppercase"],[1,"login","animated-button","text-white","w-1/2","md:w-40","h-12","flex","pl-2","py-2","items-center","justify-center","rounded-xl","cursor-pointer",2,"--delay","0.2s",3,"classOnVisible","click"],["name","lock-closed",1,"w-5","h-5","mr-3"],[1,"start-now","cursor-pointer","animated-button","text-black","w-1/2","md:w-44","flex","pl-2","py-3","items-center","justify-center","rounded-xl",3,"click"],["src","assets/images/home/chart-icon.svg","alt","trading-automation",1,"w-5","h-5","mr-3","relative"]],template:function(n,i){if(1&n&&(t.TgZ(0,"ion-content",0,1),t.NdJ("ionScroll",function(g){return i.onPageScroll(g)}),t._UZ(2,"app-header",2)(3,"app-settings-top-nav",3),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"h1",9),t._UZ(10,"div",10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"h2",11)(13,"span"),t._uU(14),t.ALo(15,"translate"),t.qZA()(),t.TgZ(16,"h3",12)(17,"span"),t._uU(18),t.ALo(19,"translate"),t.qZA()(),t.YNc(20,L,1,1,"ng-container",13),t.qZA(),t.TgZ(21,"div",14),t._UZ(22,"img",15),t.qZA()()(),t._UZ(23,"img",16),t.TgZ(24,"div",17)(25,"div",18),t._UZ(26,"div",19),t.ALo(27,"translate"),t._UZ(28,"app-exchange-accounts-slider",20),t.qZA()(),t._UZ(29,"img",21),t.TgZ(30,"div",22)(31,"div",23)(32,"div",24),t._UZ(33,"img",25),t.qZA(),t.TgZ(34,"div",26)(35,"div",27),t._UZ(36,"img",28),t.qZA(),t.TgZ(37,"div",29)(38,"h3",30),t._uU(39),t.ALo(40,"translate"),t.qZA(),t.TgZ(41,"h2",31),t._uU(42),t.ALo(43,"translate"),t.qZA(),t._UZ(44,"p",32),t.ALo(45,"translate"),t.qZA()(),t.TgZ(46,"div",33),t._UZ(47,"img",34),t.qZA()(),t.TgZ(48,"div",35)(49,"div",36)(50,"div",37),t._UZ(51,"img",38),t.TgZ(52,"h4",39),t._uU(53),t.ALo(54,"translate"),t.qZA(),t.TgZ(55,"p",40),t._uU(56),t.ALo(57,"translate"),t.qZA()(),t.TgZ(58,"div",37),t._UZ(59,"img",41),t.TgZ(60,"h4",42),t._uU(61),t.ALo(62,"translate"),t.qZA(),t.TgZ(63,"p",40),t._uU(64),t.ALo(65,"translate"),t.qZA()()()()(),t._UZ(66,"img",16),t.TgZ(67,"div",43)(68,"div",7)(69,"div",44)(70,"h2",45),t._uU(71),t.ALo(72,"translate"),t.qZA(),t.TgZ(73,"div",46),t._UZ(74,"img",47),t.TgZ(75,"div",48)(76,"h4",49),t._uU(77),t.ALo(78,"translate"),t.qZA(),t.TgZ(79,"p",50),t._uU(80),t.ALo(81,"translate"),t.qZA()()(),t.TgZ(82,"div",46),t._UZ(83,"img",51),t.TgZ(84,"div",48)(85,"h4",49),t._uU(86),t.ALo(87,"translate"),t.qZA(),t.TgZ(88,"p",50),t._uU(89),t.ALo(90,"translate"),t.qZA()()(),t.TgZ(91,"div",46),t._UZ(92,"img",52),t.TgZ(93,"div",48)(94,"h4",49),t._uU(95),t.ALo(96,"translate"),t.qZA(),t.TgZ(97,"p",50),t._uU(98),t.ALo(99,"translate"),t.qZA()()(),t.GkF(100,53),t.qZA(),t.TgZ(101,"div",54),t._UZ(102,"img",55,56),t.qZA()()(),t.TgZ(104,"div",57)(105,"div",7)(106,"div",58)(107,"h2",59),t._uU(108),t.ALo(109,"translate"),t.qZA(),t.TgZ(110,"p",60),t._uU(111),t.ALo(112,"translate"),t.qZA()(),t.TgZ(113,"div",61)(114,"a",62),t._uU(115),t.ALo(116,"translate"),t.qZA()()()(),t.TgZ(117,"div",63)(118,"div",64)(119,"h2",65),t._uU(120),t.ALo(121,"translate"),t.qZA(),t.TgZ(122,"div",66)(123,"div",67),t._UZ(124,"img",68),t.TgZ(125,"h4",69),t._uU(126),t.ALo(127,"translate"),t.qZA(),t._UZ(128,"p",70),t.ALo(129,"translate"),t.qZA(),t.TgZ(130,"div",67),t._UZ(131,"img",71),t.TgZ(132,"h4",69),t._uU(133),t.ALo(134,"translate"),t.qZA(),t._UZ(135,"p",70),t.ALo(136,"translate"),t.qZA(),t.TgZ(137,"div",67),t._UZ(138,"img",72),t.TgZ(139,"h4",69),t._uU(140),t.ALo(141,"translate"),t.qZA(),t._UZ(142,"p",70),t.ALo(143,"translate"),t.qZA()()()(),t.YNc(144,q,3,3,"div",73),t._UZ(145,"app-footer"),t.qZA()()(),t.YNc(146,Q,11,11,"ng-template",null,74,t.W1O),t.YNc(148,V,5,3,"ng-template",null,75,t.W1O)),2&n){const a=t.MAs(1),g=t.MAs(149);t.Q6J("fullscreen",!0)("scrollEvents",!0),t.xp6(2),t.Q6J("hideMobileHeader",a),t.xp6(1),t.Q6J("hideMobileHeader",a),t.xp6(5),t.Q6J("ngClass",i.isLoggedIn?"mb-0":"mb-8 md:mb-0"),t.xp6(2),t.Q6J("innerHtml",t.lcZ(11,52,"landing-page-title-main"),t.oJD),t.xp6(4),t.Oqu(t.lcZ(15,54,"landing-page-title-2")),t.xp6(4),t.Oqu(t.lcZ(19,56,"landing-page-title-3")),t.xp6(2),t.Q6J("ngIf",!i.isLoggedIn)("ngIfElse",g),t.xp6(6),t.Q6J("innerHtml",t.lcZ(27,58,"landing-page-connect-exchange"),t.oJD),t.xp6(6),t.Q6J("classOnVisible","fade-in-from-bottom"),t.xp6(7),t.Oqu(t.lcZ(40,60,"landing-page-next-gen-1")),t.xp6(3),t.Oqu(t.lcZ(43,62,"landing-page-next-gen-2")),t.xp6(2),t.Q6J("innerHtml",t.lcZ(45,64,"landing-page-next-gen-3"),t.oJD),t.xp6(2),t.Q6J("classOnVisible","fade-in-from-bottom"),t.xp6(5),t.Q6J("classOnVisible","fade-in-from-left"),t.xp6(2),t.hij(" ",t.lcZ(54,66,"landing-page-automated-strategy")," "),t.xp6(3),t.hij(" ",t.lcZ(57,68,"landing-page-automated-strategy-desc")," "),t.xp6(3),t.Q6J("classOnVisible","fade-in-from-right"),t.xp6(2),t.hij(" ",t.lcZ(62,70,"landing-page-copy-trader")," "),t.xp6(3),t.hij(" ",t.lcZ(65,72,"landing-page-copy-trader-desc")," "),t.xp6(6),t.Q6J("classOnVisible","fade-in-from-left"),t.xp6(1),t.Oqu(t.lcZ(72,74,"landing-page-why-strategies")),t.xp6(3),t.Q6J("classOnVisible","fade-in-from-left"),t.xp6(3),t.Oqu(t.lcZ(78,76,"landing-page-why-strategies-1")),t.xp6(3),t.Oqu(t.lcZ(81,78,"landing-page-why-strategies-1-desc")),t.xp6(3),t.Q6J("classOnVisible","fade-in-from-left"),t.xp6(3),t.Oqu(t.lcZ(87,80,"landing-page-why-strategies-2")),t.xp6(3),t.Oqu(t.lcZ(90,82,"landing-page-why-strategies-2-desc")),t.xp6(3),t.Q6J("classOnVisible","fade-in-from-left"),t.xp6(3),t.Oqu(t.lcZ(96,84,"landing-page-why-strategies-3")),t.xp6(3),t.Oqu(t.lcZ(99,86,"landing-page-why-strategies-3-desc")),t.xp6(2),t.Q6J("ngTemplateOutlet",g),t.xp6(2),t.Q6J("classOnVisible","fade-in-from-right"),t.xp6(5),t.Q6J("classOnVisible","fade-in-from-left"),t.xp6(1),t.Oqu(t.lcZ(109,88,"landing-page-pro-trader")),t.xp6(3),t.Oqu(t.lcZ(112,90,"landing-page-pro-trader-desc")),t.xp6(4),t.hij(" ",t.lcZ(116,92,"landing-page-pro-trader-learn-more")," "),t.xp6(2),t.Q6J("ngClass",i.isLoggedIn?"pb-10 sm:pb-7":"pb-10"),t.xp6(2),t.Q6J("classOnVisible","fade-in-from-top"),t.xp6(1),t.Oqu(t.lcZ(121,94,"landing-page-platform-benefits")),t.xp6(4),t.Q6J("classOnVisible","fade-in-from-bottom"),t.xp6(2),t.hij(" ",t.lcZ(127,96,"landing-page-platform-benefits-easy-trading")," "),t.xp6(2),t.Q6J("innerHtml",t.lcZ(129,98,"landing-page-platform-benefits-easy-trading-description"),t.oJD),t.xp6(3),t.Q6J("classOnVisible","fade-in-from-bottom"),t.xp6(2),t.hij(" ",t.lcZ(134,100,"landing-page-platform-benefits-support")," "),t.xp6(2),t.Q6J("innerHtml",t.lcZ(136,102,"landing-page-platform-benefits-support-description"),t.oJD),t.xp6(3),t.Q6J("classOnVisible","fade-in-from-bottom"),t.xp6(2),t.hij(" ",t.lcZ(141,104,"landing-page-platform-benefits-network")," "),t.xp6(2),t.Q6J("innerHtml",t.lcZ(143,106,"landing-page-platform-benefits-network-description"),t.oJD),t.xp6(2),t.Q6J("ngIf",!i.isLoggedIn)}},dependencies:[c.mk,c.O5,c.tP,m.W2,m.gu,m.Fo,p.rH,P.G,M.c,x.X,w.S,Z.I,k,f.X$],styles:["[_nghost-%COMP%]{--left-sidebar-width: 360px;--left-sidebar-width-small: 0px}@media (min-width: 640px){[_nghost-%COMP%]{--left-sidebar-width-small: 0px}}@media (min-width: 992px){[_nghost-%COMP%]{--left-sidebar-width: 318px}}@media (min-width: 1280px){[_nghost-%COMP%]{--left-sidebar-width: 360px}}@media (min-width: 1600px){[_nghost-%COMP%]{--left-sidebar-width: 360px}}@media (min-width: 1650px){[_nghost-%COMP%]{--left-sidebar-width: 360px}}.container[_ngcontent-%COMP%]{max-width:1170px}.top-section[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(234,239,255,.9) 0%,rgba(247,239,255,.9) 100%);background-color:#fff}.top-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{letter-spacing:-1.5px;max-width:545px;font-size:31px}@media (min-width: 768px){.top-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{max-width:322px}}@media (min-width: 1280px){.top-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{max-width:322px;font-size:40px}}.top-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:120%;line-height:1.05em}.top-section[_ngcontent-%COMP%]   .title.title-main[_ngcontent-%COMP%]{color:#009cff;font-size:36px;background-image:linear-gradient(135deg,#009cff 0%,#5816ff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent}@media (min-width: 1280px){.top-section[_ngcontent-%COMP%]   .title.title-main[_ngcontent-%COMP%]{font-size:40px}}.top-section[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{color:#8a8a8a}.top-section[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{margin-bottom:-65px}.connect-section[_ngcontent-%COMP%]     .connect-title span{color:#05f}.trading-automation-section[_ngcontent-%COMP%]{background:linear-gradient(90deg,#172054 0%,#2d2570 100%)}.trading-automation-section[_ngcontent-%COMP%]   .automation-content[_ngcontent-%COMP%]{min-width:320px}.trading-automation-section[_ngcontent-%COMP%]   .automation-content[_ngcontent-%COMP%]   .floating-image[_ngcontent-%COMP%]{height:260px}.trading-automation-section[_ngcontent-%COMP%]   .automation-content[_ngcontent-%COMP%]   .floating-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:244px;animation-name:_ngcontent-%COMP%_floating;animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}.trading-automation-section[_ngcontent-%COMP%]   .automation-content[_ngcontent-%COMP%]   .tranding-automation-text[_ngcontent-%COMP%]{gap:18px}.trading-automation-section[_ngcontent-%COMP%]   .automation-content[_ngcontent-%COMP%]   .tranding-automation-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:28px}.trading-automation-section[_ngcontent-%COMP%]   .automation-content[_ngcontent-%COMP%]   .tranding-automation-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px;color:#009cff;background-image:linear-gradient(135deg,#009cff 0%,#ff3ffb 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent}.trading-automation-section[_ngcontent-%COMP%]   .automation-content[_ngcontent-%COMP%]   .tranding-automation-text[_ngcontent-%COMP%]     .tranding-automation-slogan{font-size:19px;max-width:343px}@media (min-width: 640px){.trading-automation-section[_ngcontent-%COMP%]   .automation-content[_ngcontent-%COMP%]   .tranding-automation-text[_ngcontent-%COMP%]     .tranding-automation-slogan{max-width:unset}}.trading-automation-section[_ngcontent-%COMP%]   .automation-content[_ngcontent-%COMP%]   .tranding-automation-text[_ngcontent-%COMP%]     .tranding-automation-slogan span{color:#ffd000}.trading-automation-section[_ngcontent-%COMP%]   .automation-image[_ngcontent-%COMP%]{max-width:292px}.trading-automation-section[_ngcontent-%COMP%]   .automation-box-wrapper[_ngcontent-%COMP%]   .automation-box[_ngcontent-%COMP%]{border-radius:25px}.trading-automation-section[_ngcontent-%COMP%]   .automation-box-wrapper[_ngcontent-%COMP%]   .automation-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:112px;height:112px}.trading-automation-section[_ngcontent-%COMP%]   .automation-box-wrapper[_ngcontent-%COMP%]   .automation-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#0067fe;font-size:28px;margin:18px 0}.trading-automation-section[_ngcontent-%COMP%]   .automation-box-wrapper[_ngcontent-%COMP%]   .automation-box[_ngcontent-%COMP%]   .title.yellow[_ngcontent-%COMP%]{color:#fab901}.trading-automation-section[_ngcontent-%COMP%]   .automation-box-wrapper[_ngcontent-%COMP%]   .automation-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#6b6b6b;font-size:19px}.trading-strategies-section[_ngcontent-%COMP%]   .strategies[_ngcontent-%COMP%]{color:#676767;font-size:19px}.trading-strategies-section[_ngcontent-%COMP%]   .strategies[_ngcontent-%COMP%]   .strategy-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;height:70px}.trading-strategies-section[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{max-width:540px}.invite-section[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(2,80,237,.9) 0%,rgba(34,29,193,.9) 100%);background-color:#fff}.invite-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:28px;margin-bottom:18px}.invite-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:19px}.invite-section[_ngcontent-%COMP%]   .learn-more[_ngcontent-%COMP%]{height:62px;width:148px;font-size:13px;border-radius:3px;transition:color .5s ease,background-color .5s ease,background-size .5s ease,border-color .5s ease}.benefits-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:40px;color:#5816ff;background-image:linear-gradient(135deg,#5816ff 0%,#ff3ffb 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent}.benefits-section[_ngcontent-%COMP%]   .benefits-wrapper[_ngcontent-%COMP%]{gap:14px}.benefits-section[_ngcontent-%COMP%]   .benefits-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:28px}.benefits-section[_ngcontent-%COMP%]   .benefits-wrapper[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:19px}@media (min-width: 768px){.benefits-section[_ngcontent-%COMP%]   .benefits-wrapper[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 992px){.benefits-section[_ngcontent-%COMP%]   .benefits-wrapper[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:19px}}.signup-login-section[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(248,237,255,.9) 0%,rgba(222,238,247,.9) 100%);background-color:#fff}.sign-up[_ngcontent-%COMP%]{background-color:#f7cf2e}.login[_ngcontent-%COMP%]{background-color:#0067fe}.start-now[_ngcontent-%COMP%]{font-size:17px;background-color:#f7cf2e}.animated-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .animated-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:translate(0);transition:transform .3s}.animated-button[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%], .animated-button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:translate(-10px)}.section-seperator[_ngcontent-%COMP%]{height:90px}.section-seperator.seperator-1[_ngcontent-%COMP%]{margin-top:-70px}.section-seperator.seperator-2[_ngcontent-%COMP%]{transform:scale(-1);margin-bottom:-70px}@keyframes _ngcontent-%COMP%_floating{0%{transform:translate(0)}65%{transform:translateY(15px)}to{transform:translate(0)}}  .home-content .top-section .title-main span{font-size:140%;line-height:1em;white-space:nowrap}  .home-content .benefits-section .benefits-wrapper .description span{white-space:nowrap}  .sticky-main-header{position:sticky;top:0;transition:transform .3s;z-index:50}  .sticky-main-header.hide-header{transform:translateY(-80px)}  .light-mode .sticky-main-header ion-header{border-color:#787990}"]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(z),p.Bz]}),e})(),j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,h.u5,m.Pc,S,b.x,f.aw,d.kz,x.X]}),e})()}}]);