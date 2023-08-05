"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4260],{4260:(P,_,s)=>{s.d(_,{k:()=>w});var m=s(6895),t=s(4650),h=s(3709),c=s(4006),l=s(8008),p=s(3416),u=s(8854),g=s(7341),C=s(4950),a=s(7102),v=s(655),b=s(6339),x=s(6065);function Z(i,r){if(1&i){const n=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"ion-icon",4),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.handleDismiss())}),t.qZA(),t.TgZ(4,"div",5)(5,"h2",6),t._uU(6),t.ALo(7,"translate"),t.qZA()(),t.TgZ(8,"ion-icon",7),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.handleDismiss())}),t.qZA()()(),t.TgZ(9,"div",8),t._UZ(10,"div",9),t.TgZ(11,"div",10)(12,"p",11),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"span",12)(16,"p"),t._uU(17),t.ALo(18,"number"),t.qZA(),t._UZ(19,"img",13),t.qZA()(),t.TgZ(20,"div",10)(21,"p"),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"span",12)(25,"p"),t._uU(26),t.ALo(27,"number"),t.qZA(),t._UZ(28,"img",14),t.qZA()(),t._UZ(29,"div",15),t.TgZ(30,"div",16)(31,"p"),t._uU(32),t.ALo(33,"translate"),t.qZA(),t.TgZ(34,"span",17)(35,"p"),t._uU(36),t.ALo(37,"number"),t.qZA(),t._UZ(38,"img",18),t.qZA()()(),t.TgZ(39,"div",19)(40,"button",20),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.handleConfirm())}),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"ion-button",21),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.handleDismiss())}),t._uU(44),t.ALo(45,"translate"),t.qZA()()()}if(2&i){const n=t.oxw();t.xp6(6),t.hij(" ",t.lcZ(7,11,"Confirm Convert Points")," "),t.xp6(7),t.hij(" ",t.lcZ(14,13,"Amount of Otto Points to Convert")," "),t.xp6(4),t.hij("-",t.xi3(18,15,n.convertAmount,"0.2-2"),""),t.xp6(5),t.hij(" ",t.lcZ(23,18,"Conversion Fee")," "),t.xp6(4),t.hij("-",t.xi3(27,20,n.conversionFee,"0.2-2"),""),t.xp6(6),t.hij(" ",t.lcZ(33,23,"total")," "),t.xp6(4),t.hij("+",t.xi3(37,25,n.totalAmount,"0.2-2"),""),t.xp6(2),t.Q6J("src",n.convertedImage,t.LSH)("alt",n.convertOption),t.xp6(3),t.hij(" ",t.lcZ(42,28,"confirm")," "),t.xp6(3),t.hij(" ",t.lcZ(45,30,"go-back")," ")}}let A=(()=>{class i extends g.u{constructor(n,e){super(),this.walletService=n,this.i18n=e,this.convertAmount=0,this.convertOption=a.nC.Credits,this.notifyParentEvent=new t.vpe,this.convertToCreditRate=1,this.convertToOptionRate=.5}ngOnInit(){}get totalAmount(){return this.convertOption===a.nC.Credits?this.convertAmount*this.convertToCreditRate:this.convertAmount*this.convertToOptionRate}get convertedImage(){return this.convertOption===a.nC.Credits?"assets/icon/wallet/ottopoints-green.png":"assets/icon/wallet/otto-options.png"}get conversionFee(){return this.convertOption===a.nC.Credits?.005*this.convertAmount:0}handleConfirm(){this.convertOption===a.nC.Credits?this.walletService.pointExchangeBalance({point:this.convertAmount}).pipe().subscribe(n=>(0,v.mG)(this,void 0,void 0,function*(){0===n.code?(this.toast.toastSuccess(this.i18n.instant("convert-points-successfully")),this.notifyParentEvent.emit(!0),this.handleDismiss()):this.toast.toastError(n.message)})):this.walletService.exchangeOttoOptions({point:this.convertAmount}).pipe().subscribe(n=>(0,v.mG)(this,void 0,void 0,function*(){0===n.code?(this.toast.toastSuccess(this.i18n.instant("convert-points-successfully")),this.notifyParentEvent.emit(!0),this.handleDismiss()):this.toast.toastError(n.message)}))}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(b.X),t.Y36(p.sK))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-convert-confirm-modal"]],inputs:{convertAmount:"convertAmount",convertOption:"convertOption"},outputs:{notifyParentEvent:"notifyParentEvent"},standalone:!0,features:[t.qOj,t.jDz],decls:2,vars:1,consts:[[1,"theme-modal",3,"isOpen","didDismiss"],[1,"flex","flex-col","p-2","h-full"],[1,"modal-header","flex","flex-col","items-center","sm:mb-5"],[1,"flex","items-start","sm:items-center","w-full"],["name","chevron-back-outline",1,"w-10","h-10","cursor-pointer",3,"click"],[1,"flex-1","text-2xl","xs:text-3xl","text-text-strong","font-medium"],[1,"modal-title"],["name","close-outline",1,"w-10","h-10","cursor-pointer",3,"click"],[1,"modal-content","flex","flex-col","flex-auto","items-center","w-full","px-4","my-8","text-text-strong","font-medium"],[1,"w-full","border-b","border-main-border","mb-1"],[1,"w-full","flex","items-center","justify-between","py-2"],[1,"flex-1"],[1,"flex","items-center","gap-x-1"],["src","assets/images/rewards-points.png","alt","Rewards Points",1,"h-7","mx-1"],["src","assets/images/rewards-points.png","alt","USDT",1,"h-7","mx-1"],[1,"w-full","border-b","border-main-border","mt-1"],[1,"w-full","flex","items-center","justify-between","py-2","text-3xl","capitalize"],[1,"flex","items-center","gap-x-2"],[1,"h-9","mr-1",3,"src","alt"],[1,"modal-footer","w-full","flex-col","items-center","px-4"],["appRippleEffect","",1,"btn-blue","w-full","uppercase","text-3xl","font-medium","rounded-md","h-16",3,"click"],["expand","block","fill","clear","size","large",1,"go-back","w-full","text-2xl","font-medium",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-modal",0),t.NdJ("didDismiss",function(){return e.handleDismiss()}),t.YNc(1,Z,46,32,"ng-template"),t.qZA()),2&n&&t.Q6J("isOpen",e.isOpen)},dependencies:[m.ez,m.JJ,c.UX,c.u5,p.aw,p.X$,l.Pc,l.YG,l.gu,l.ki,u.T,x.R],styles:["ion-modal[_ngcontent-%COMP%]{--max-width: 500px;--height: auto;--backdrop-opacity: .32 !important}.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-width:1px;border-style:solid}"]}),i})();var f=s(5433);function T(i,r){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&i){const n=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,n.balance,"0.2-2")," ")}}function O(i,r){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&i){const n=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,n.ottoOptions,"0.2-2")," ")}}function M(i,r){if(1&i){const n=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"ion-icon",4),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.handleDismiss())}),t.qZA(),t.TgZ(3,"div",5)(4,"h2",6),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"ion-icon",7),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.handleDismiss())}),t.qZA()()(),t.TgZ(8,"ng-scrollbar",8)(9,"div",9)(10,"p",10),t._uU(11),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"div",11)(14,"div",12)(15,"ion-label",13),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"app-number-field",14),t.NdJ("ngModelChange",function(o){t.CHM(n);const d=t.oxw();return t.KtG(d.convertAmount=o)}),t.ALo(19,"translate"),t._UZ(20,"img",15),t.TgZ(21,"span",16),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.convertAmount=o.ottoPoints)}),t._uU(22),t.ALo(23,"translate"),t.qZA()(),t.TgZ(24,"div",17)(25,"span"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"span"),t._uU(29),t.ALo(30,"number"),t.qZA()(),t.TgZ(31,"ion-range",18),t.NdJ("ionChange",function(o){t.CHM(n);const d=t.oxw();return t.KtG(d.onChangeConvertAmountRange(o))}),t.qZA(),t.TgZ(32,"div",19)(33,"span",20),t._UZ(34,"ion-icon",21),t.qZA()(),t.TgZ(35,"div",22)(36,"ion-label",13),t._uU(37),t.ALo(38,"translate"),t.qZA(),t.TgZ(39,"div",23),t._UZ(40,"img",24),t.TgZ(41,"ion-label",25),t._uU(42),t.ALo(43,"number"),t.qZA()()(),t.TgZ(44,"div",17)(45,"span"),t._uU(46),t.ALo(47,"translate"),t.qZA(),t.YNc(48,T,3,4,"span",26),t.YNc(49,O,3,4,"ng-template",null,27,t.W1O),t.qZA(),t.TgZ(51,"button",28),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.isOpenConfirmModal=!0)}),t._uU(52),t.ALo(53,"translate"),t.qZA(),t.TgZ(54,"div",29),t._UZ(55,"img",30),t.TgZ(56,"span"),t._uU(57,"1.00"),t.qZA(),t.TgZ(58,"span",31),t._uU(59,"="),t.qZA(),t._UZ(60,"img",32),t.TgZ(61,"span"),t._uU(62),t.ALo(63,"number"),t.qZA()()()()()}if(2&i){const n=t.MAs(50),e=t.oxw();t.xp6(5),t.hij(" ",t.lcZ(6,25,e.isConvertToCredits?"convert-to-account-credits":"convert-to-otto-options")," "),t.xp6(3),t.Q6J("autoHeightDisabled",!1),t.xp6(3),t.hij(" ",t.lcZ(12,27,e.isConvertToCredits?"convert-to-account-credits-subtitle":"convert-to-otto-options-subtitle")," "),t.xp6(5),t.hij(" ",t.lcZ(17,29,"amount-of-convert")," "),t.xp6(2),t.Q6J("placeholder",t.lcZ(19,31,"Convert Amount"))("min",10)("digits",2)("ngModel",e.convertAmount),t.xp6(4),t.hij(" ",t.lcZ(23,33,"max")," "),t.xp6(4),t.hij(" ",t.lcZ(27,35,"available")," "),t.xp6(3),t.hij(" ",t.xi3(30,37,e.ottoPoints,"0.2-2")," "),t.xp6(2),t.Q6J("value",e.convertAmount)("max",e.ottoPoints)("min",10),t.xp6(6),t.hij(" ",t.lcZ(38,40,"amount-of-receive")," "),t.xp6(3),t.Q6J("src",e.convertedImage,t.LSH)("alt",e.convertOption),t.xp6(2),t.hij(" ",t.xi3(43,42,e.convert(e.convertAmount),"0.2-2")," "),t.xp6(4),t.hij(" ",t.lcZ(47,45,"available")," "),t.xp6(2),t.Q6J("ngIf",e.isConvertToCredits)("ngIfElse",n),t.xp6(3),t.Q6J("disabled",0===e.ottoPoints),t.xp6(1),t.hij(" ",t.lcZ(53,47,"convert")," "),t.xp6(8),t.Q6J("src",e.convertedImage,t.LSH),t.xp6(2),t.Oqu(t.xi3(63,49,e.convert(1),"0.2-2"))}}let w=(()=>{class i extends g.u{constructor(){super(...arguments),this.convertOption=a.nC.Credits,this.ottoPoints=0,this.balance=0,this.ottoOptions=0,this.refresh=new t.vpe,this.rewardsPoints=1200,this.accountCredits=35.23,this.convertToCreditRate=1,this.convertToOptionRate=.5,this.convertAmount=10,this.isOpenConfirmModal=!1}ngOnInit(){}get isConvertToCredits(){return this.convertOption===a.nC.Credits}get convertedImage(){return this.convertOption===a.nC.Credits?"assets/icon/wallet/ottopoints-green.png":"assets/icon/wallet/otto-options.png"}willDismiss(){this.convertAmount=10}onChangeConvertAmountRange(n){n.detail.value&&(this.convertAmount=n.detail.value)}convert(n){return this.convertOption===a.nC.Credits?n*this.convertToCreditRate:n*this.convertToOptionRate}}return i.\u0275fac=function(){let r;return function(e){return(r||(r=t.n5z(i)))(e||i)}}(),i.\u0275cmp=t.Xpm({type:i,selectors:[["app-convert-points-modal"]],inputs:{convertOption:"convertOption",ottoPoints:"ottoPoints",balance:"balance",ottoOptions:"ottoOptions"},outputs:{refresh:"refresh"},standalone:!0,features:[t.qOj,t.jDz],decls:3,vars:4,consts:[[1,"theme-modal","settings-modal",3,"isOpen","willDismiss","didDismiss"],[3,"isOpen","convertOption","convertAmount","isOpenChange","notifyParentEvent"],[1,"flex","items-center","p-2","pb-0"],[1,"modal-header","flex","items-start","w-full"],["name","chevron-back-outline",1,"w-10","h-10","cursor-pointer","mt-1",3,"click"],[1,"flex-1","text-text-strong","font-medium","pt-1"],[1,"text-2xl","sm:text-3xl"],["name","close-outline",1,"w-8","h-8","sm:w-10","sm:h-10","cursor-pointer","sm:m-1",3,"click"],["visibility","hover",2,"max-height","80vh",3,"autoHeightDisabled"],[1,"flex-1","text-text-strong","font-medium","ml-10","mb-6","sm:mb-8","mt-1","sm:mt-0","px-2"],[1,"p-0","text-base","sm:text-lg","font-medium","text-grey-1"],[1,"modal-content","flex","flex-col","flex-auto","items-center","w-full","p-2"],[1,"w-full","px-4","md:w-3/5"],[1,"text-grey-1","font-medium","ml-1","mb-0.5"],[3,"placeholder","min","digits","ngModel","ngModelChange"],["src","assets/images/rewards-points.png","alt","Rewards Points","slot","start",1,"h-8","ml-1.5"],["slot","end",1,"bg-main-blue-transparent","text-main-blue","rounded","font-medium","mr-1","px-0.5","cursor-pointer",3,"click"],[1,"flex","justify-between","mx-1","text-grey-1","mt-0.5"],[1,"p-1",3,"value","max","min","ionChange"],[1,"flex","justify-center","mb-1"],[1,"flex","items-center","justify-center","w-8","h-8","mx-2","sm:mx-4","bg-grey-4","rounded-full","border","border-main-border"],["name","arrow-down-outline",1,"text-3xl","text-text-strong"],[1,"flex","flex-col"],[1,"rounded-md","border-border-input","border","flex","items-center","bg-grey-4","px-0.5","py-1.5"],[1,"h-8","mx-1",3,"src","alt"],[1,"text-text-strong","text-2xl"],[4,"ngIf","ngIfElse"],["optionAmountTemplate",""],["appRippleEffect","",1,"btn-blue","text-3xl","h-16","border","border-solid","rounded-lg","uppercase","font-medium","w-full","mt-4",3,"disabled","click"],[1,"flex","items-center","justify-center","text-text-strong","text-xl","sm:text-2xl","mt-4","sm:mb-4"],["src","assets/images/rewards-points.png","alt","Otto Token",1,"h-7","mr-1"],[1,"mx-3"],["alt","USDT",1,"h-7","mr-1",3,"src"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-modal",0),t.NdJ("willDismiss",function(){return e.handleDismiss()})("didDismiss",function(){return e.willDismiss()}),t.YNc(1,M,64,52,"ng-template"),t.qZA(),t.TgZ(2,"app-convert-confirm-modal",1),t.NdJ("isOpenChange",function(d){return e.isOpenConfirmModal=d})("notifyParentEvent",function(){return e.refresh.emit(!0)}),t.qZA()),2&n&&(t.Q6J("isOpen",e.isOpen),t.xp6(2),t.Q6J("isOpen",e.isOpenConfirmModal)("convertOption",e.convertOption)("convertAmount",e.convertAmount))},dependencies:[m.ez,m.O5,m.JJ,h.Bz,c.UX,c.JJ,c.u5,c.On,p.aw,p.X$,l.Pc,l.gu,l.Q$,l.I_,l.ki,l.QI,u.T,x.R,A,C.E,f.kb,f.KC],styles:["ion-modal[_ngcontent-%COMP%]{--max-width: 640px;--width: 640px;--height: auto}ion-modal[_ngcontent-%COMP%]   .account-balance[_ngcontent-%COMP%], ion-modal[_ngcontent-%COMP%]   .otto-points[_ngcontent-%COMP%]{background:var(--bg-balance-box);width:45%;max-width:260px}@media (min-width: 640px){ion-modal[_ngcontent-%COMP%]   .account-balance[_ngcontent-%COMP%], ion-modal[_ngcontent-%COMP%]   .otto-points[_ngcontent-%COMP%]{width:40%}}ion-range[_ngcontent-%COMP%]{--bar-background-active: #8008ff;--bar-height: 8px;--bar-border-radius: 8px;--knob-background: #8008ff;--knob-size: 32px}ion-range[_ngcontent-%COMP%]::part(knob){border:1px solid #bb02ff}.modal-content[_ngcontent-%COMP%]{margin-top:1.1rem;margin-bottom:1.1rem}@media (min-width: 640px){.modal-content[_ngcontent-%COMP%]{margin-top:1.6rem;margin-bottom:1.6rem}}  .light-mode ion-range{--bar-background: rgb(0, 0, 0, .1)}  .dark-mode ion-range{--bar-background: #363770}"]}),i})()}}]);