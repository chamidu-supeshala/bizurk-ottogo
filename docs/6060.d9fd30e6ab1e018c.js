"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6060],{4872:(b,g,o)=>{o.d(g,{$:()=>l});var l=(()=>((l||(l={})).Free="free",l))()},6060:(b,g,o)=>{o.d(g,{z:()=>U});var l=o(655),a=o(6895),m=o(4006),p=o(8008),d=o(3416),h=o(8854),x=o(9116),e=o(4650),_=o(3709),s=o(7340),C=o(5762),f=o(4872);function M(n,i){1&n&&(e.TgZ(0,"div",13)(1,"div",14)(2,"h2",15),e._uU(3," $0.00 "),e.qZA(),e.TgZ(4,"div",16)(5,"div",17),e._uU(6),e.ALo(7,"translate"),e.qZA()()()()),2&n&&(e.xp6(6),e.hij(" ",e.lcZ(7,1,"limited-time")," "))}function P(n,i){if(1&n&&(e.TgZ(0,"p",18),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.membership.description," ")}}function O(n,i){1&n&&e._UZ(0,"ion-icon",25)}function v(n,i){if(1&n&&(e.TgZ(0,"div",26),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,t.answer)," ")}}function y(n,i){if(1&n&&(e.TgZ(0,"details",19)(1,"summary")(2,"span",20),e._UZ(3,"ion-icon",21),e.qZA(),e.TgZ(4,"span",22),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.YNc(7,O,1,0,"ion-icon",23),e.YNc(8,v,3,3,"div",24),e.qZA()()),2&n){const t=i.$implicit;e.xp6(4),e.Q6J("ngClass",t.customNameClass),e.xp6(1),e.Oqu(e.lcZ(6,4,t.name)),e.xp6(2),e.Q6J("ngIf",t.answer),e.xp6(1),e.Q6J("ngIf",t.answer)}}function w(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"article",1)(1,"div",2)(2,"h2",3),e._uU(3," OTTO+ "),e.qZA()(),e.YNc(4,M,8,3,"div",4),e.TgZ(5,"div",5)(6,"div",6),e._uU(7),e.qZA(),e.TgZ(8,"div",7),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e.YNc(11,P,2,1,"p",8),e.TgZ(12,"div",9),e.YNc(13,y,9,6,"details",10),e.qZA(),e.TgZ(14,"div",11),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.handleProceed())}),e._uU(15),e.ALo(16,"translate"),e._UZ(17,"div",12),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngIf",t.membership.type===t.membershipType.Free),e.xp6(2),e.ekj("strikethrough",t.membership.type===t.membershipType.Free),e.xp6(1),e.hij(" $",t.membership.price," "),e.xp6(2),e.AsE(" /",t.membership.period," ",e.lcZ(10,9,t.membership.periodType)," "),e.xp6(2),e.Q6J("ngIf",t.membership.description),e.xp6(2),e.Q6J("ngForOf",t.membership.features),e.xp6(2),e.hij(" ",e.lcZ(16,11,t.membership.buttonText)," ")}}let k=(()=>{class n extends C.H{constructor(){super(...arguments),this.onProceed=new e.vpe,this.membershipType=f.$}ngOnInit(){}handleProceed(){this.onProceed.emit()}}return n.\u0275fac=function(){let i;return function(r){return(i||(i=e.n5z(n)))(r||n)}}(),n.\u0275cmp=e.Xpm({type:n,selectors:[["app-membership-card"]],inputs:{membership:"membership"},outputs:{onProceed:"onProceed"},standalone:!0,features:[e.qOj,e.jDz],decls:1,vars:1,consts:[["class","price-table text-text-strong px-3 py-5 xs:px-5 xs:py-6 2xs:p-6 sm:p-8",4,"ngIf"],[1,"price-table","text-text-strong","px-3","py-5","xs:px-5","xs:py-6","2xs:p-6","sm:p-8"],[1,"flex"],[1,"relative","title","font-black","text-center"],["class","flex-col items-center justify-center text-2xl font-medium w-fit mx-auto",4,"ngIf"],[1,"price","mt-1","tracking-tight"],[1,"w-fit","mx-auto","relative"],[1,"price-small","price-alignment","font-normal","text-lg","mt-1"],["class","description",4,"ngIf"],[1,"features","mt-4"],["class","feature",4,"ngFor","ngForOf"],[1,"btn","cursor-pointer","font-medium",3,"click"],[1,"btn2"],[1,"flex-col","items-center","justify-center","text-2xl","font-medium","w-fit","mx-auto"],[1,"price","mt-px","text-4xl","font-bold"],[1,"free-promotion-price","font-black","tracking-tight"],[1,"p-px","rainbow-border","-top-2","left-28","whitespace-nowrap","!absolute","h-fit","w-fit"],[1,"free-badge","text-sm","w-full","h-full","pt-px","px-2","spacing","text-center","leading-5","font-bold","uppercase","text-black"],[1,"description"],[1,"feature"],[1,"flex","items-center","justify-center","bg-main-green","w-6","h-6","rounded-full","mr-3"],["name","checkmark-outline",1,"w-5","h-5","text-white"],[1,"name",3,"ngClass"],["name","help-circle-outline","class","cursor-help peer w-7 h-7 ml-1.5",4,"ngIf"],["class","cursor-help answer hidden peer-hover:flex hover:flex",4,"ngIf"],["name","help-circle-outline",1,"cursor-help","peer","w-7","h-7","ml-1.5"],[1,"cursor-help","answer","hidden","peer-hover:flex","hover:flex"]],template:function(t,r){1&t&&e.YNc(0,w,18,13,"article",0),2&t&&e.Q6J("ngIf",r.membership)},dependencies:[a.ez,a.mk,a.sg,a.O5,m.u5,m.UX,_.Bz,p.Pc,p.gu,d.aw,d.X$],styles:['[_nghost-%COMP%]{--c-blue-900: #081030;--c-blue-800: #111b40;--c-blue-500: #1d7bdb;--c-blue-300: #293359;--c-blue-200: #4e5985;--c-blue-100: #dfe8ff;--c-green-400: #12c792}  .dark-mode{--c-blue-700: #152148}  .dark-mode .free-badge{background-color:#ffe7ae}  .dark-mode .price-table{background-image:linear-gradient(135deg,rgba(74,222,128,.15),rgba(29,123,219,.1) 20%,var(--c-blue-700) 40%,var(--c-blue-700) 100%)}  .light-mode{--c-blue-700: #ffffff}  .light-mode .free-badge{background-color:#ffd641}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font:inherit}a[_ngcontent-%COMP%]{color:inherit}.price-table[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;background-color:var(--c-blue-700);border-radius:16px;max-width:375px;display:inline-block;flex-direction:column;box-shadow:0 15px 45px rgba(0,0,0,.15);position:relative}.price-table[_ngcontent-%COMP%]:after{content:"";display:block;top:-3px;left:-3px;bottom:-3px;right:-3px;z-index:-1;position:absolute;border-radius:16px;background-image:linear-gradient(135deg,#f951ff,var(--c-blue-500) 40%,var(--c-blue-300) 60%,#7428ff 100%)}.price-table[_ngcontent-%COMP%]   .price-small[_ngcontent-%COMP%]{align-self:center;align-items:center;text-align:center}.price-table[_ngcontent-%COMP%]   .price-alignment[_ngcontent-%COMP%]{margin-left:-8px}.price-table[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{line-height:1;font-size:44px;font-weight:700;align-self:center;align-items:center;text-align:center;gap:4px;position:relative}.price-table[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .strikethrough[_ngcontent-%COMP%]:before{position:absolute;content:"";left:-5px;top:50%;right:-5px;border-top:3px solid;border-color:red;transform:rotate(-24deg)}.price-table[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;line-height:1.25;margin:0 auto 4px;letter-spacing:2px}.price-table[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:1rem;text-align:center;margin-top:10px}.feature[_ngcontent-%COMP%]{position:relative}.feature[_ngcontent-%COMP%] + .feature[_ngcontent-%COMP%]{margin-top:16px}.feature[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{display:inline-flex;align-items:center;list-style:none}.feature[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker{display:none}.feature[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;background-color:var(--c-green-400);display:flex;align-items:center;justify-content:center;margin-right:12px}.feature[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:18px;height:18px;color:#fff}.feature[_ngcontent-%COMP%]   .question-icon[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:6px;cursor:pointer}.feature[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{padding:12px;background-color:#000;color:#fff;border-radius:15px;position:absolute;top:30px;z-index:100;transform-origin:bottom center;width:80%;left:20%;border:1px solid var(--c-blue-300);box-shadow:0 15px 30px rgba(0,0,0,.1)}@media (min-width: 640px){.feature[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{left:50%}}.free-promotion-price[_ngcontent-%COMP%]{font-size:44px;background:linear-gradient(60deg,var(--rainbow-colors));background-position:0 50%;background-size:300%;animation:_ngcontent-%COMP%_anime 5.5s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent}@keyframes _ngcontent-%COMP%_scale{0%{transform:translatey(-100%) translate(-50%) scale(0)}to{transform:translatey(-100%) translate(-50%) scale(1)}}.btn[_ngcontent-%COMP%], .btn2[_ngcontent-%COMP%]{margin-top:25px;width:295px;height:73px;font-size:30px;text-align:center;line-height:70px;color:rgba(255,255,255,.9);border-radius:15px;background:linear-gradient(-45deg,#ffa63d,#ff3d77,#338aff,#3cf0c5);background-size:600%;animation:_ngcontent-%COMP%_anime 16s linear infinite}.btn2[_ngcontent-%COMP%]{position:absolute;margin-top:-70px;z-index:-1;filter:blur(30px);opacity:.8}.rainbow-border[_ngcontent-%COMP%]{position:relative;z-index:1}.rainbow-border[_ngcontent-%COMP%]:after{content:"";position:absolute;z-index:-1;inset:0;border-radius:12px;background:linear-gradient(60deg,var(--rainbow-colors));background-position:0 50%;background-size:300% 300%;animation:_ngcontent-%COMP%_anime 5.5s linear infinite}.free-badge[_ngcontent-%COMP%]{border-radius:12px}@media (min-width: 640px){.free-badge[_ngcontent-%COMP%]{font-size:15px}}.free-badge[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}.free-badge[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px}i[_ngcontent-%COMP%]{position:absolute;opacity:0;top:0;left:0;background:linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,.03) 1%,rgba(255,255,255,.6) 30%,rgba(255,255,255,.85) 50%,rgba(255,255,255,.85) 70%,rgba(255,255,255,.85) 71%,rgba(255,255,255,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffffff",endColorstr="#00ffffff",GradientType=1);width:15%;height:100%;transform:skew(-10deg);animation:_ngcontent-%COMP%_move 2s;animation-iteration-count:infinite;animation-delay:1s}@keyframes _ngcontent-%COMP%_move{0%{left:0;opacity:0}5%{opacity:0}48%{opacity:.2}80%{opacity:0}to{left:82%}}@keyframes _ngcontent-%COMP%_anime{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}'],data:{animation:[(0,s.X$)("flexAnimation",[(0,s.SB)("void",(0,s.oB)({display:"none"})),(0,s.SB)("flex",(0,s.oB)({display:"flex"})),(0,s.eR)("void <=> flex",(0,s.jt)("500ms ease-in-out"))])]}}),n})();const Z=[{name:"membership-feature-1",answer:"membership-feature-1-tooltip",customNameClass:"font-medium line-loading"},{name:"membership-feature-2",answer:"membership-feature-2-tooltip"},{name:"membership-feature-3",answer:"membership-feature-3-tooltip"},{name:"membership-feature-4"}];var T=o(7341),u=o(7102),A=o(6065);function z(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"app-membership-card",14),e.NdJ("onProceed",function(){const j=e.CHM(t).$implicit,J=e.oxw(2);return e.KtG(J.handleProceed(j))}),e.qZA()}2&n&&e.Q6J("membership",i.$implicit)}function F(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e._UZ(3,"img",5),e.TgZ(4,"div",6)(5,"h2",7),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"p",8),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e.TgZ(11,"ion-icon",9),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.handleDismiss())}),e.qZA()()(),e.TgZ(12,"div",10),e.YNc(13,z,1,1,"app-membership-card",11),e.qZA(),e.TgZ(14,"div",12)(15,"button",13),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.handleDismiss())}),e._uU(16),e.ALo(17,"translate"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(6),e.hij(" ",e.lcZ(7,4,"select-membership-plan")," "),e.xp6(3),e.hij(" ",e.lcZ(10,6,"membership-plan-description")," "),e.xp6(4),e.Q6J("ngForOf",t.availableMemberships),e.xp6(3),e.hij(" ",e.lcZ(17,8,"go-back")," ")}}let U=(()=>{class n extends T.u{constructor(){super(...arguments),this.availableMemberships=[{price:40,period:4,periodType:"weeks",description:"",features:Z,buttonText:"select-membership",type:f.$.Free}]}ngOnInit(){}handleProceed(t){return(0,l.mG)(this,void 0,void 0,function*(){this.proceedCardCallBack?yield this.proceedCardCallBack(t,this.modalRef):(yield this.modalRef.dismiss(),t.type===f.$.Free&&this.router.navigate(["/confirm-order"],{queryParams:{orderData:encodeURI(JSON.stringify([{type:u.yh.FreeMembership,amount:0,originalAmount:40,quantity:1},{type:u.yh.HashPower,amount:100,quantity:0},{type:u.yh.AcountCredit,amount:100,quantity:0,amountStepBy:100}]))}}))})}}return n.\u0275fac=function(){let i;return function(r){return(i||(i=e.n5z(n)))(r||n)}}(),n.\u0275cmp=e.Xpm({type:n,selectors:[["app-membership-modal"]],inputs:{proceedCardCallBack:"proceedCardCallBack"},standalone:!0,features:[e.qOj,e.jDz],decls:3,vars:1,consts:[[1,"theme-modal","settings-modal",3,"isOpen","didDismiss"],["modal",""],[1,"flex","flex-col","p-2","h-full"],[1,"modal-header","flex","flex-col","items-center"],[1,"flex","items-start","w-full"],["src","assets/icon/wallet/membership.png","alt","Membership",1,"h-6","sm:h-8","mr-1","mt-1","sm:mt-0"],[1,"flex-1","text-text-strong","font-medium"],[1,"text-2xl","sm:text-3xl"],[1,"p-0","mt-1","text-sm","sm:text-base","font-medium","text-grey-1"],["name","close-outline",1,"w-8","h-8","sm:w-10","sm:h-10","cursor-pointer",3,"click"],[1,"modal-content","flex","flex-col","flex-auto","items-center","w-full","pt-8"],[3,"membership","onProceed",4,"ngFor","ngForOf"],[1,"modal-footer","mt-1","flex","justify-between","px-1","sm:px-3"],["appRippleEffect","",1,"btn-medium","w-28","2xs:w-32","sm:w-44","capitalize",3,"click"],[3,"membership","onProceed"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-modal",0,1),e.NdJ("didDismiss",function(){return r.handleDismiss()}),e.YNc(2,F,18,10,"ng-template"),e.qZA()),2&t&&e.Q6J("isOpen",r.isOpen)},dependencies:[a.ez,a.sg,m.UX,m.u5,d.aw,d.X$,p.Pc,p.gu,p.ki,x.Q,h.T,A.R,k],styles:["ion-modal[_ngcontent-%COMP%]{--height: auto}.modal-header[_ngcontent-%COMP%]{margin-bottom:.85rem}.modal-content[_ngcontent-%COMP%]{margin-bottom:.35rem}@media (min-width: 640px){.modal-content[_ngcontent-%COMP%]{margin-bottom:1.6rem}}.modal-footer[_ngcontent-%COMP%]{margin-bottom:.35rem}@media (min-width: 640px){.modal-footer[_ngcontent-%COMP%]{margin-bottom:.85rem}}.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:3rem;border-radius:.375rem;border-width:1px;border-style:solid;font-size:1.25rem;line-height:1.75rem}@media (min-width: 640px){.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:3.5rem;font-size:1.5rem;line-height:2rem}}"]}),n})()}}]);