"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8360],{8512:(O,g,e)=>{e.d(g,{Z:()=>_});var p=e(6895),t=e(4650),m=e(1782),s=e(4006),c=e(8008),u=e(3416),f=e(8854),x=e(7341),h=e(4950),C=e(6065);function r(d,n){if(1&d){const o=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.TgZ(4,"div",5)(5,"h2",6),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"ion-icon",8),t.NdJ("click",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.handleDismiss())}),t.qZA()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"ion-label",11),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"app-number-field",12),t.NdJ("ngModelChange",function(l){t.CHM(o);const a=t.oxw();return t.KtG(a.depositAmount=l)}),t.ALo(18,"translate"),t.TgZ(19,"div",13)(20,"span",14),t._uU(21," $ "),t.qZA()()(),t.TgZ(22,"div",15)(23,"span"),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.TgZ(26,"span"),t._uU(27),t.ALo(28,"number"),t.qZA()(),t.TgZ(29,"div",16)(30,"button",17),t.NdJ("click",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.handleSend.emit(!0))}),t._UZ(31,"i",18),t.TgZ(32,"span",19),t._uU(33),t.ALo(34,"translate"),t.qZA()(),t.TgZ(35,"button",20),t.NdJ("click",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.onDepoist())}),t._UZ(36,"i",21),t.TgZ(37,"span",22),t._uU(38),t.ALo(39,"translate"),t.qZA()()()()(),t.TgZ(40,"div",23)(41,"button",24),t.NdJ("click",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.handleDismiss())}),t._uU(42),t.ALo(43,"translate"),t.qZA(),t.TgZ(44,"button",25),t.NdJ("click",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.handleRedeemGiftCode.emit(!0))}),t._uU(45),t.ALo(46,"translate"),t.qZA()()()}if(2&d){const o=t.oxw();t.xp6(6),t.hij(" ",t.lcZ(7,14,"account-credits")," "),t.xp6(3),t.hij(" ",t.lcZ(10,16,"deposit-modal-subtitle")," "),t.xp6(6),t.hij(" ",t.lcZ(16,18,"deposit-amount")," "),t.xp6(2),t.s9C("placeholder",t.lcZ(18,20,"deposit-amount")),t.Q6J("min",10)("digits",2)("ngModel",o.depositAmount),t.xp6(7),t.hij(" ",t.lcZ(25,22,"available-balance")," "),t.xp6(3),t.hij(" $",t.xi3(28,24,o.availableBalance,"1.2-2")," "),t.xp6(6),t.hij(" ",t.lcZ(34,27,"send")," "),t.xp6(2),t.Q6J("disabled",o.depositAmount<10),t.xp6(3),t.hij(" ",t.lcZ(39,29,"deposit")," "),t.xp6(4),t.hij(" ",t.lcZ(43,31,"close")," "),t.xp6(3),t.hij(" ",t.lcZ(46,33,"redeem-gift-code")," ")}}let _=(()=>{class d extends x.u{constructor(){super(...arguments),this.availableBalance=0,this.handleSend=new t.vpe,this.handleRedeemGiftCode=new t.vpe,this.depositAmount=10}ngOnInit(){}onDepoist(){this.handleDismiss(),setTimeout(()=>{this.router.navigate(["/confirm-order"],{queryParams:{orderType:"deposit",count:1,amount:this.depositAmount}})},1e3)}}return d.\u0275fac=function(){let n;return function(i){return(n||(n=t.n5z(d)))(i||d)}}(),d.\u0275cmp=t.Xpm({type:d,selectors:[["app-deposit-modal"]],inputs:{availableBalance:"availableBalance"},outputs:{handleSend:"handleSend",handleRedeemGiftCode:"handleRedeemGiftCode"},standalone:!0,features:[t.qOj,t.jDz],decls:2,vars:1,consts:[[1,"theme-modal","settings-modal",3,"isOpen","didDismiss"],[1,"flex","flex-col","p-2","h-full"],[1,"modal-header","flex","flex-col","items-center"],[1,"flex","items-start","w-full"],["src","assets/icon/wallet/ottopoints-green.png","alt","Otto",1,"h-6","sm:h-8","mr-1","mt-[3px]","sm:mt-0.5"],[1,"flex-1","text-text-strong","font-medium"],[1,"text-2xl","sm:text-3xl"],[1,"p-0","mt-1","text-base","sm:text-lg","font-medium","text-grey-1"],["name","close-outline",1,"w-8","h-8","sm:w-10","sm:h-10","cursor-pointer",3,"click"],[1,"modal-content","flex","flex-col","flex-auto","items-center","w-full"],[1,"w-full","px-1","sm:px-4","md:w-4/5"],[1,"text-xl","text-grey-1","font-medium","ml-1"],[1,"mt-0.5","w-full",3,"placeholder","min","digits","ngModel","ngModelChange"],["slot","start"],[1,"ml-2","text-3xl","text-text-strong","font-medium"],[1,"mt-1.5","flex","w-full","justify-between","font-medium","text-grey-1"],[1,"mt-4","flex","w-full","space-x-2"],["appRippleEffect","",1,"bg-main-blue-transparent","text-main-blue","relative","font-medium","w-full","m-0","mt-1.5","h-14","border-2","border-solid","border-main-blue","rounded-md",3,"click"],[1,"hidden","2xs:block","icon-arrow","absolute","left-6","text-2xl"],[1,"text-xl","xs:text-2xl"],["appRippleEffect","",1,"btn-green","relative","font-medium","w-full","m-0","mt-1.5","h-14","border","border-solid","rounded-md",3,"disabled","click"],[1,"hidden","2xs:block","icon-download","absolute","left-6","text-2xl"],[1,"text-xl","xs:text-2xl","2xs:ml-4"],[1,"modal-footer","flex","justify-between","px-1","sm:px-3"],["appRippleEffect","",1,"btn-medium","w-32","sm:w-44",3,"click"],["appRippleEffect","",1,"bg-main-yellow","text-black","font-medium","flex","items-center","justify-center","px-4",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"ion-modal",0),t.NdJ("didDismiss",function(){return i.handleDismiss()}),t.YNc(1,r,47,35,"ng-template"),t.qZA()),2&o&&t.Q6J("isOpen",i.isOpen)},dependencies:[p.ez,p.JJ,m.Bz,s.UX,s.JJ,s.u5,s.On,u.aw,u.X$,c.Pc,c.gu,c.Q$,c.ki,f.T,C.R,h.E],styles:["ion-modal[_ngcontent-%COMP%]{--height: auto;--max-width: 800px}ion-modal[_ngcontent-%COMP%]   .account-balance[_ngcontent-%COMP%]{background-color:var(--bg-balance-box)}.modal-header[_ngcontent-%COMP%]{margin-bottom:.85rem}.modal-content[_ngcontent-%COMP%]{margin-top:3rem;margin-bottom:5rem}.modal-footer[_ngcontent-%COMP%]{margin-bottom:.35rem}@media (min-width: 640px){.modal-footer[_ngcontent-%COMP%]{margin-bottom:.85rem}}.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:3rem;border-radius:.375rem;border-width:1px;border-style:solid;font-size:1.25rem;line-height:1.75rem}@media (min-width: 640px){.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:3.5rem;font-size:1.5rem;line-height:2rem}}"]}),d})()},8241:(O,g,e)=>{e.d(g,{X:()=>d});var p=e(6895),t=e(4650),m=e(4006),s=e(8008),c=e(3416),u=e(8854),f=e(9116),x=e(7341),h=e(4950),C=e(6065);const r=function(n){return[n]};function _(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.TgZ(4,"div",5)(5,"h2",6),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"ion-icon",8),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.handleDismiss())}),t.qZA()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"ion-label",11),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"app-number-field",12),t.NdJ("ngModelChange",function(a){t.CHM(i);const M=t.oxw();return t.KtG(M.giftCodeAmount=a)}),t.ALo(18,"translate"),t.TgZ(19,"div",13)(20,"span",14),t._uU(21," $ "),t.qZA()()(),t.TgZ(22,"ion-item",15)(23,"ion-checkbox",16),t.NdJ("ngModelChange",function(a){t.CHM(i);const M=t.oxw();return t.KtG(M.isMultiplePurchase=a)}),t.qZA(),t.TgZ(24,"ion-label",17),t._uU(25),t.ALo(26,"translate"),t.qZA()(),t.TgZ(27,"div",18)(28,"span",19),t._uU(29),t.ALo(30,"translate"),t.qZA(),t.TgZ(31,"app-number-field",20),t.NdJ("ngModelChange",function(a){t.CHM(i);const M=t.oxw();return t.KtG(M.purchaseCount=a)}),t.ALo(32,"translate"),t._UZ(33,"img",21),t.qZA()(),t.TgZ(34,"button",22),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.onPurchaseGiftCode())}),t.TgZ(35,"span",23),t._uU(36),t.ALo(37,"translate"),t.qZA(),t.TgZ(38,"span",24),t._uU(39),t.ALo(40,"translate"),t.qZA()()()(),t.TgZ(41,"div",25)(42,"button",26),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.handleDismiss())}),t._uU(43),t.ALo(44,"translate"),t.qZA(),t.TgZ(45,"button",27),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.handleRedeemGiftCode.emit(!0))}),t.TgZ(46,"span",23),t._uU(47),t.ALo(48,"translate"),t.qZA(),t.TgZ(49,"span",24),t._uU(50),t.ALo(51,"translate"),t.qZA()()()()}if(2&n){const i=t.oxw();t.xp6(6),t.hij(" ",t.lcZ(7,18,"buy-gift-code")," "),t.xp6(3),t.hij(" ",t.lcZ(10,20,"giftcode-purchase-modal-subtitle")," "),t.xp6(6),t.hij(" ",t.lcZ(16,22,"giftcode-amount")," "),t.xp6(2),t.s9C("placeholder",t.lcZ(18,24,"giftcode-amount")),t.Q6J("digits",2)("ngModel",i.giftCodeAmount),t.xp6(6),t.Q6J("ngModel",i.isMultiplePurchase),t.xp6(2),t.hij(" ",t.lcZ(26,26,"multiple-purchase-option")," "),t.xp6(2),t.Q6J("ngClass",t.VKq(42,r,i.isMultiplePurchase?"visible":"invisible sm:hidden")),t.xp6(2),t.hij(" ",t.lcZ(30,28,"purchase-count-question")," "),t.xp6(2),t.s9C("placeholder",t.lcZ(32,30,"purchase-count")),t.Q6J("min",2)("ngModel",i.purchaseCount),t.xp6(5),t.hij(" ",t.lcZ(37,32,"purchase-gift-codes")," "),t.xp6(3),t.hij(" ",t.lcZ(40,34,"purchase")," "),t.xp6(4),t.hij(" ",t.lcZ(44,36,"close")," "),t.xp6(4),t.hij(" ",t.lcZ(48,38,"redeem-gift-code")," "),t.xp6(3),t.hij(" ",t.lcZ(51,40,"redeem")," ")}}let d=(()=>{class n extends x.u{constructor(){super(...arguments),this.handleRedeemGiftCode=new t.vpe,this.isMultiplePurchase=!1,this.giftCodeAmount=10,this.purchaseCount=2}onPurchaseGiftCode(){this.handleDismiss(),setTimeout(()=>{this.router.navigate(["/confirm-order"],{queryParams:{orderType:"gift",count:this.isMultiplePurchase?this.purchaseCount:1,amount:this.giftCodeAmount}})},1e3)}}return n.\u0275fac=function(){let o;return function(l){return(o||(o=t.n5z(n)))(l||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["app-giftcode-purchase-modal"]],outputs:{handleRedeemGiftCode:"handleRedeemGiftCode"},standalone:!0,features:[t.qOj,t.jDz],decls:2,vars:1,consts:[[1,"theme-modal","settings-modal",3,"isOpen","didDismiss"],[1,"flex","flex-col","p-2","h-full"],[1,"modal-header","flex","flex-col","items-center"],[1,"flex","items-start","w-full"],["src","assets/icon/wallet/gift-box.png","alt","Gift",1,"h-6","sm:h-8","mr-1","mt-1","sm:mt-0"],[1,"flex-1","text-text-strong","font-medium"],[1,"text-2xl","sm:text-3xl"],[1,"p-0","mt-1","text-base","sm:text-lg","font-medium","text-grey-1"],["name","close-outline",1,"w-8","h-8","sm:w-10","sm:h-10","cursor-pointer","sm:m-1",3,"click"],[1,"modal-content","flex","flex-col","flex-auto","items-center","w-full","pt-8"],[1,"w-full","px-1","sm:px-3","sm:w-4/5"],[1,"text-grey-1","font-medium","ml-1"],[1,"mt-0.5",3,"placeholder","digits","ngModel","ngModelChange"],["slot","start"],[1,"ml-2","text-3xl","text-text-strong","font-medium"],["lines","none",1,"multiple-purchase-checkbox"],["mode","md",1,"m-0","mr-1.5",3,"ngModel","ngModelChange"],[1,"text"],[1,"flex","items-center","justify-between","w-full","mb-2",3,"ngClass"],[1,"text-lg","sm:text-2xl","text-text-strong"],[1,"w-32",3,"placeholder","min","ngModel","ngModelChange"],["src","assets/icon/wallet/gift-box.png","alt","Otto","slot","start",1,"h-6","ml-1"],["appRippleEffect","",1,"btn-blue","border","border-solid","rounded-md","text-2xl","h-16","uppercase","font-medium","w-full",3,"click"],[1,"hidden","xs:block"],[1,"block","xs:hidden"],[1,"modal-footer","mt-1","flex","justify-between","px-1","sm:px-3"],["appRippleEffect","",1,"btn-medium","w-28","2xs:w-32","sm:w-44",3,"click"],["appRippleEffect","",1,"bg-main-yellow","text-black","font-medium","rounded-md","whitespace-nowrap","px-3",3,"click"]],template:function(i,l){1&i&&(t.TgZ(0,"ion-modal",0),t.NdJ("didDismiss",function(){return l.handleDismiss()}),t.YNc(1,_,52,44,"ng-template"),t.qZA()),2&i&&t.Q6J("isOpen",l.isOpen)},dependencies:[p.ez,p.mk,m.UX,m.JJ,m.u5,m.On,c.aw,c.X$,s.Pc,s.nz,s.gu,s.Ie,s.Q$,s.ki,s.w,f.Q,u.T,C.R,h.E],styles:["ion-modal[_ngcontent-%COMP%]{--height: auto}@media (min-width: 640px){ion-modal[_ngcontent-%COMP%]{--height: 540px}}ion-modal[_ngcontent-%COMP%]   .gift-codes[_ngcontent-%COMP%]{background-color:var(--bg-balance-box)}ion-item.multiple-purchase-checkbox[_ngcontent-%COMP%]{--padding-start: 0px;--padding-top: 0px;--padding-bottom: 0px;--padding-end: 0px}ion-item.multiple-purchase-checkbox[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--background: var(--main-bg);--border-color: var(--main-border)}ion-item.multiple-purchase-checkbox[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--color: var(--grey-1)}.modal-header[_ngcontent-%COMP%]{margin-bottom:.85rem}.modal-content[_ngcontent-%COMP%]{margin-bottom:.35rem}@media (min-width: 640px){.modal-content[_ngcontent-%COMP%]{margin-bottom:1.6rem}}.modal-footer[_ngcontent-%COMP%]{margin-bottom:.35rem}@media (min-width: 640px){.modal-footer[_ngcontent-%COMP%]{margin-bottom:.85rem}}.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:3rem;border-radius:.375rem;border-width:1px;border-style:solid;font-size:1.25rem;line-height:1.75rem}@media (min-width: 640px){.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:3.5rem;font-size:1.5rem;line-height:2rem}}"]}),n})()},4362:(O,g,e)=>{e.d(g,{w:()=>C});var p=e(6895),t=e(4650),m=e(5762),s=e(8008),c=e(3416),u=e(9116),f=e(8854),x=e(2203),h=e(609);let C=(()=>{class r extends m.H{constructor(){super(...arguments),this.accountCredits=0,this.rewardsPoints=0,this.giftCodesCount=0,this.ottoOptions=0,this.handleOnClickAccountCredits=new t.vpe,this.handleOnClickRewardsPoints=new t.vpe,this.handleOnClickGiftCodes=new t.vpe,this.handleOnClickOttoOptions=new t.vpe}}return r.\u0275fac=function(){let _;return function(n){return(_||(_=t.n5z(r)))(n||r)}}(),r.\u0275cmp=t.Xpm({type:r,selectors:[["app-wallet-overview"]],inputs:{accountCredits:"accountCredits",rewardsPoints:"rewardsPoints",giftCodesCount:"giftCodesCount",ottoOptions:"ottoOptions"},outputs:{handleOnClickAccountCredits:"handleOnClickAccountCredits",handleOnClickRewardsPoints:"handleOnClickRewardsPoints",handleOnClickGiftCodes:"handleOnClickGiftCodes",handleOnClickOttoOptions:"handleOnClickOttoOptions"},standalone:!0,features:[t.qOj,t.jDz],decls:62,vars:31,consts:[[1,"wallet-overview-container","grid","grid-cols-1","sm:grid-cols-2","xl:grid-cols-4","gap-y-3","sm:gap-x-4","xl:gap-x-4","text-text-strong","font-medium","text-base","leading-6"],[1,"grid","sm:grid-rows-2","gap-y-3"],[1,"wallet-box","relative","py-1","rounded-lg","border-2","border-main-green","bg-pro-switch",3,"click"],["src","assets/icon/wallet/ottopoints-green.png","alt","Otto",1,"left-3","h-11","mr-1"],[1,"flex","flex-col","items-center","justify-center"],[1,"flex","items-center"],["format","(ddd).dd",3,"input"],[1,"hidden","sm:block","btn-green","deposit","text-2xl","border","border-solid","rounded-md","font-medium","relative","text-white",3,"click"],[1,"button-icon","icon-download","absolute","left-4","top-2","text-4xl"],[1,"gradient-border-wrapper","p-0.5","relative"],[1,"wallet-box","relative","py-1","rounded-lg","bg-pro-switch",3,"click"],["src","assets/icon/wallet/rewards-points.png","alt","Rewards",1,"left-3","h-11","mr-1"],["format","(,ddd).dd",3,"input"],[1,"hidden","sm:block","gradient-border-wrapper","p-0.5","relative"],[1,"claim-rewards","deposit","text-2xl","w-full","h-full","rounded-md","font-medium","relative","text-white",3,"click"],[1,"button-icon","absolute","left-4","top-3.5","w-9","h-9"],[1,"wallet-box","relative","py-1","rounded-lg","border-2","border-main-yellow","bg-pro-switch",3,"click"],["src","assets/icon/wallet/gift-box.png","alt","Gift",1,"left-3","h-11","mr-1"],[1,"hidden","sm:block","buy-gift-btn","text-2xl","border","border-solid","rounded-md","font-medium","relative","text-black","bg-main-yellow",3,"click"],["src","assets/icon/wallet/gift-box.png","alt","Otto",1,"button-icon","absolute","left-4","top-2","h-10","mr-1"],[1,"wallet-box","relative","py-1","rounded-lg","border-2","border-accent-blue","bg-pro-switch",3,"click"],["src","assets/icon/wallet/otto-options.png","alt","Otto Options",1,"left-3","h-11","mr-1"],[1,"hidden","sm:block","get-option-btn","text-2xl","rounded-md","font-medium","relative","text-white","bg-accent-blue",3,"click"],[1,"button-icon","absolute","left-6","top-2.5","font-bold","text-4xl"]],template:function(d,n){1&d&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.NdJ("click",function(){return n.handleOnClickAccountCredits.emit(!0)}),t._UZ(3,"img",3),t.TgZ(4,"div",4)(5,"p"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",5),t._uU(9," $"),t._UZ(10,"app-odometer",6),t.qZA()()(),t.TgZ(11,"button",7),t.NdJ("click",function(){return n.handleOnClickAccountCredits.emit(!0)}),t._UZ(12,"i",8),t.TgZ(13,"span"),t._uU(14),t.ALo(15,"translate"),t.qZA()()(),t.TgZ(16,"div",1)(17,"div",9)(18,"div",10),t.NdJ("click",function(){return n.handleOnClickRewardsPoints.emit(!0)}),t._UZ(19,"img",11),t.TgZ(20,"div",4)(21,"p"),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"div",5),t._UZ(25,"app-odometer",12),t.qZA()()()(),t.TgZ(26,"div",13)(27,"button",14),t.NdJ("click",function(){return n.handleOnClickRewardsPoints.emit(!0)}),t._UZ(28,"app-crown",15),t.TgZ(29,"span"),t._uU(30),t.ALo(31,"translate"),t.qZA()()()(),t.TgZ(32,"div",1)(33,"div",16),t.NdJ("click",function(){return n.handleOnClickGiftCodes.emit(!0)}),t._UZ(34,"img",17),t.TgZ(35,"div",4)(36,"p"),t._uU(37),t.ALo(38,"translate"),t.qZA(),t.TgZ(39,"div",5),t._uU(40),t.ALo(41,"translate"),t.qZA()()(),t.TgZ(42,"button",18),t.NdJ("click",function(){return n.handleOnClickGiftCodes.emit(!0)}),t._UZ(43,"img",19),t.TgZ(44,"span"),t._uU(45),t.ALo(46,"translate"),t.qZA()()(),t.TgZ(47,"div",1)(48,"div",20),t.NdJ("click",function(){return n.handleOnClickOttoOptions.emit(!0)}),t._UZ(49,"img",21),t.TgZ(50,"div",4)(51,"p"),t._uU(52),t.ALo(53,"translate"),t.qZA(),t.TgZ(54,"div",5),t._UZ(55,"app-odometer",12),t.qZA()()(),t.TgZ(56,"button",22),t.NdJ("click",function(){return n.handleOnClickOttoOptions.emit(!0)}),t.TgZ(57,"div",23),t._uU(58," + "),t.qZA(),t.TgZ(59,"span"),t._uU(60),t.ALo(61,"translate"),t.qZA()()()()),2&d&&(t.xp6(6),t.Oqu(t.lcZ(7,13,"account-credits")),t.xp6(4),t.Q6J("input",n.accountCredits),t.xp6(4),t.hij(" ",t.lcZ(15,15,"deposit")," "),t.xp6(8),t.Oqu(t.lcZ(23,17,"rewards-points")),t.xp6(3),t.Q6J("input",n.rewardsPoints),t.xp6(5),t.hij(" ",t.lcZ(31,19,"claim-rewards")," "),t.xp6(7),t.Oqu(t.lcZ(38,21,"gift-codes")),t.xp6(3),t.AsE(" ",n.giftCodesCount," ",t.lcZ(41,23,"unused-codes")," "),t.xp6(5),t.hij(" ",t.lcZ(46,25,"buy-gift-codes")," "),t.xp6(7),t.Oqu(t.lcZ(53,27,"otto-options")),t.xp6(3),t.Q6J("input",n.ottoOptions),t.xp6(5),t.hij(" ",t.lcZ(61,29,"get-options")," "))},dependencies:[p.ez,s.Pc,c.aw,c.X$,u.Q,x.C,f.T,h.D],styles:['.gradient-border-wrapper[_ngcontent-%COMP%]{z-index:1}.gradient-border-wrapper[_ngcontent-%COMP%]:after{content:"";background:linear-gradient(.25turn,#e01ae1,#451ae1,#e01ae1);background:linear-gradient(45deg,#0014ff,#042fff,#044dff,#ff00f7,#fd8aff,#002bff,#7a00ff,#ff00c8,#e400ff);background-position:0 50%;background-size:200% 200%;animation:_ngcontent-%COMP%_changeBg 2.5s linear infinite;position:absolute;z-index:-1;inset:0;border-radius:.5rem}@keyframes _ngcontent-%COMP%_changeBg{50%{background-position:100% 50%}}button.claim-rewards[_ngcontent-%COMP%]{background-color:#5510a9}@media (min-width: 1280px){button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%]{display:none}button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-left:0}}@media (min-width: 1478px){button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%]{display:block}button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-left:24px}}@media (min-width: 1600px){button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%]{display:none}button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-left:0}}@media (min-width: 1860px){button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%]{display:block}button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-left:24px}}.wallet-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}@media (min-width: 1280px){.wallet-box[_ngcontent-%COMP%]{justify-content:space-between}}@media (min-width: 1440px){.wallet-box[_ngcontent-%COMP%]{justify-content:center}}@media (min-width: 1600px){.wallet-box[_ngcontent-%COMP%]{justify-content:space-between}}@media (min-width: 1850px){.wallet-box[_ngcontent-%COMP%]{justify-content:space-between}}.wallet-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute}@media (min-width: 1280px){.wallet-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative}}@media (min-width: 1440px){.wallet-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute}}@media (min-width: 1600px){.wallet-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative}}@media (min-width: 1850px){.wallet-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute}}.wallet-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1 1 0%}']}),r})()}}]);