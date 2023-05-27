"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[296],{296:(B,x,l)=>{l.r(x),l.d(x,{SecurityModule:()=>V});var d=l(6895),s=l(8008),c=l(3416),p=l(8854),u=l(7933);const w=[{key:"onLogin",label:"on-login"},{key:"payment",label:"payment"},{key:"activateStrategy",label:"activate-strategy"},{key:"blindExchange",label:"blind-exchange"}];var M=l(5762),e=l(4650),P=l(5433),_=l(6065),h=l(7341);const Z=function(i,r,t){return{active:i,fail:r,success:t}};function N(i,r){if(1&i&&e._UZ(0,"div",15),2&i){const t=r.index,n=e.oxw(2);e.Q6J("ngClass",e.kEZ(1,Z,t<n.displayPIN.length,n.isPINInvalid,n.isPINValid))}}const O=function(i){return{"!text-main-green":i}},A=function(){return[]};function k(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"ion-icon",4),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.handleDismiss())}),e.qZA()()(),e.TgZ(4,"div",5)(5,"div",6)(6,"h3",7),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"div",8)(10,"div",9),e.YNc(11,N,1,5,"div",10),e.qZA(),e.TgZ(12,"div",11)(13,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN+"1"))}),e._uU(14," 1 "),e.qZA(),e.TgZ(15,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN+"2"))}),e._uU(16," 2 "),e.qZA(),e.TgZ(17,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN+"3"))}),e._uU(18," 3 "),e.qZA(),e.TgZ(19,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN+"4"))}),e._uU(20," 4 "),e.qZA(),e.TgZ(21,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN+"5"))}),e._uU(22," 5 "),e.qZA(),e.TgZ(23,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN+"6"))}),e._uU(24," 6 "),e.qZA(),e.TgZ(25,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN+"7"))}),e._uU(26," 7 "),e.qZA(),e.TgZ(27,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN+"8"))}),e._uU(28," 8 "),e.qZA(),e.TgZ(29,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN+"9"))}),e._uU(30," 9 "),e.qZA(),e.TgZ(31,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(""))}),e._UZ(32,"ion-icon",13),e.qZA(),e.TgZ(33,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN+"0"))}),e._uU(34," 0 "),e.qZA(),e.TgZ(35,"div",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onChangePIN(o.displayPIN.slice(0,-1)))}),e._UZ(36,"ion-icon",14),e.qZA()()()()()}if(2&i){const t=e.oxw();e.xp6(6),e.Q6J("ngClass",e.VKq(5,O,t.step>1&&t.isPINValid)),e.xp6(1),e.hij(" ",e.lcZ(8,3,t.titles[t.step])," "),e.xp6(4),e.Q6J("ngForOf",e.DdM(7,A).constructor(t.PINLength))}}let b=(()=>{class i extends h.u{constructor(){super(...arguments),this.currentPIN="",this.handleChangeTradingPIN=new e.vpe,this.titles=["enter-current-trading-pin","enter-new-pin","confirm-new-pin","success"],this.PINLength=4,this.step=0,this.pinArray=["","",""],this.displayPIN="",this.isPINInvalid=!1,this.isPINValid=!1}onChangePIN(t){if(this.displayPIN=t,t.length===this.PINLength)switch(this.pinArray[this.step]=this.displayPIN,this.step){case 0:this.currentPIN===this.displayPIN?(console.log("Success: Entered PIN matches current PIN",this.currentPIN,this.step),this.handleSuccess(0)):(console.log("Failure: Entered PIN does not match current PIN",this.step),this.handleFailure(0));break;case 1:this.step++,this.displayPIN="";break;case 2:this.pinArray[1]!==this.pinArray[2]?(console.log("Failure: Confirmed PIN does not match entered PIN",this.pinArray[1],this.pinArray[2],this.step),this.handleFailure(2)):(console.log("Success: PIN updated successfully"),this.step++,this.handleSuccess(2))}}handleFailure(t){this.isPINInvalid=!0,setTimeout(()=>{this.pinArray[t]="",this.displayPIN="",this.isPINInvalid=!1},500)}handleSuccess(t){this.isPINValid=!0,setTimeout(()=>{this.step++,t>1?this.handleChangeTradingPIN.emit(this.pinArray[t]):(this.displayPIN="",this.isPINValid=!1)},500)}}return i.\u0275fac=function(){let r;return function(n){return(r||(r=e.n5z(i)))(n||i)}}(),i.\u0275cmp=e.Xpm({type:i,selectors:[["app-trading-password-modal"]],inputs:{currentPIN:"currentPIN"},outputs:{handleChangeTradingPIN:"handleChangeTradingPIN"},standalone:!0,features:[e.qOj,e.jDz],decls:2,vars:1,consts:[[1,"theme-modal",3,"isOpen","didDismiss"],[1,"flex","flex-col","p-2","h-full"],[1,"modal-header","flex","flex-col","items-center"],[1,"relative","w-full"],["name","close-outline",1,"absolute","right-0","top-0","w-8","h-8","sm:w-10","sm:h-10","cursor-pointer","sm:m-1",3,"click"],[1,"modal-content","mb-8","px-1","sm:px-3","h-full"],[1,"h-2/5","flex","items-center","justify-center"],[1,"text-2xl","text-text-strong","font-medium",3,"ngClass"],[1,"h-3/5","flex","flex-col","rounded-t-md","bg-main-bg"],[1,"pin-code"],["class","pin-code__circle w-4 h-4 ng rounded-full mx-2",3,"ngClass",4,"ngFor","ngForOf"],[1,"keypad","grid","grid-cols-3"],[1,"keypad__button",3,"click"],["name","refresh-outline"],["name","backspace-outline"],[1,"pin-code__circle","w-4","h-4","ng","rounded-full","mx-2",3,"ngClass"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-modal",0),e.NdJ("didDismiss",function(){return n.handleDismiss()}),e.YNc(1,k,37,8,"ng-template"),e.qZA()),2&t&&e.Q6J("isOpen",n.isOpen)},dependencies:[d.ez,d.mk,d.sg,s.Pc,s.gu,s.ki,c.aw,c.X$,p.T],styles:["ion-modal[_ngcontent-%COMP%]{--width: 100%;--height: 100%;--border-radius: 0px;--border-width: 0px}@media (min-width: 640px){ion-modal[_ngcontent-%COMP%]{--width: 400px;--height: 640px;--border-radius: 15px;--border-width: 2px}}.modal-header[_ngcontent-%COMP%]{margin-bottom:.85rem}.modal-content[_ngcontent-%COMP%]{margin-bottom:1.1rem}@media (min-width: 640px){.modal-content[_ngcontent-%COMP%]{margin-bottom:1rem}}.modal-content[_ngcontent-%COMP%]   .pin-code[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem;display:flex;align-items:center;justify-content:center}.modal-content[_ngcontent-%COMP%]   .pin-code__circle.fail[_ngcontent-%COMP%]{border-color:var(--main-red);background-color:var(--main-red);animation:_ngcontent-%COMP%_shake .5s}.modal-content[_ngcontent-%COMP%]   .pin-code__circle.success[_ngcontent-%COMP%]{background-color:var(--main-green)}.modal-content[_ngcontent-%COMP%]   .keypad[_ngcontent-%COMP%]{flex:1 1 auto;cursor:pointer;font-size:1.875rem;line-height:2.25rem;color:var(--text-strong)}.modal-content[_ngcontent-%COMP%]   .keypad__button[_ngcontent-%COMP%]{display:flex;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:center}  .light-mode .pin-code__circle:not(.success, .fail)[_ngcontent-%COMP%]{border-width:2px;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}  .light-mode .pin-code__circle:not(.success, .fail).active[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}  .dark-mode .pin-code__circle:not(.success, .fail)[_ngcontent-%COMP%]{border-width:2px;--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}  .dark-mode .pin-code__circle:not(.success, .fail).active[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(71 85 105 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(71 85 105 / var(--tw-bg-opacity))}@keyframes _ngcontent-%COMP%_shake{0%{transform:translate(0)}25%{transform:translate(-5px)}50%{transform:translate(5px)}75%{transform:translate(-5px)}to{transform:translate(0)}}"]}),i})();var C=l(5915),v=l(3366);function I(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",11)(1,"span",12),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"ion-toggle",13),e.NdJ("ionChange",function(o){const m=e.CHM(t).$implicit,Y=e.oxw(2);return e.KtG(Y.toggleAuth(o,m.key))}),e.qZA()()}if(2&i){const t=r.$implicit,n=e.oxw(2);e.xp6(2),e.hij(" ",e.lcZ(3,2,t.label)," "),e.xp6(2),e.Q6J("checked",n.securedMethods[t.key]||!1)}}function F(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2",4),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"ion-icon",5),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.handleDismiss())}),e.qZA()()(),e.TgZ(7,"div",6),e.YNc(8,I,5,4,"div",7),e.qZA(),e.TgZ(9,"div",8)(10,"button",9),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.handleDismiss())}),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"button",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onConfirmAuth())}),e._uU(14),e.ALo(15,"translate"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,5,"two-factor-authentication")," "),e.xp6(4),e.Q6J("ngForOf",t.securableMethods),e.xp6(3),e.hij(" ",e.lcZ(12,7,"cancel")," "),e.xp6(2),e.Q6J("disabled",!t.isChanged),e.xp6(1),e.hij(" ",e.lcZ(15,9,"confirm")," ")}}let y=(()=>{class i extends h.u{constructor(){super(),this.handleTwoFactorAuth=new e.vpe,this.securableMethods=w}get isChanged(){return JSON.stringify(this._securedMethods)!==JSON.stringify(this.securedMethods)}ngOnChanges(t){var n,o;(null===(n=t.securedMethods)||void 0===n?void 0:n.currentValue)!==(null===(o=t.securedMethods)||void 0===o?void 0:o.previousValue)&&(this._securedMethods=Object.assign({},this.securedMethods))}toggleAuth(t,n){this._securedMethods[n]=t.detail.checked}onConfirmAuth(){this.handleTwoFactorAuth.emit(this._securedMethods)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-two-factor-modal"]],inputs:{securedMethods:"securedMethods"},outputs:{handleTwoFactorAuth:"handleTwoFactorAuth"},standalone:!0,features:[e.qOj,e.TTD,e.jDz],decls:2,vars:1,consts:[[1,"theme-modal",3,"isOpen","didDismiss"],[1,"flex","flex-col","p-2","h-full"],[1,"modal-header","flex","flex-col","items-center"],[1,"relative","w-full"],[1,"text-2xl","sm:text-3xl","text-text-strong","font-medium","text-left","sm:text-center","ml-1","sm:ml-0","sm:my-2"],["name","close-outline",1,"absolute","right-0","top-0","w-8","h-8","sm:w-10","sm:h-10","cursor-pointer","sm:m-1",3,"click"],[1,"modal-content","mb-8","px-1","sm:px-3"],["class","w-full flex items-center justify-between pb-3 my-4 border-b border-main-border",4,"ngFor","ngForOf"],[1,"modal-footer","flex","justify-between","px-1","sm:px-3"],["appRippleEffect","",1,"btn-medium",3,"click"],["appRippleEffect","",1,"btn-blue","font-medium",3,"disabled","click"],[1,"w-full","flex","items-center","justify-between","pb-3","my-4","border-b","border-main-border"],[1,"text-lg","font-medium","text-text-strong"],[3,"checked","ionChange"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-modal",0),e.NdJ("didDismiss",function(){return n.handleDismiss()}),e.YNc(1,F,16,11,"ng-template"),e.qZA()),2&t&&e.Q6J("isOpen",n.isOpen)},dependencies:[d.ez,d.sg,s.Pc,s.gu,s.ho,s.ki,s.w,c.aw,c.X$,p.T,_.R],styles:["ion-modal[_ngcontent-%COMP%]{--width: 480px;--height: auto}ion-toggle[_ngcontent-%COMP%]{height:32px;width:65px;padding:0;--handle-width: 28px;--handle-height: 28px;--background: rgb(54, 55, 83);--background-checked: var(--accent-blue);--handle-background: rgb(107, 107, 143);--handle-background-checked: var(--main-blue);--handle-spacing: 2px;--border-radius: 16px}.modal-header[_ngcontent-%COMP%]{margin-bottom:.5rem}@media (min-width: 640px){.modal-header[_ngcontent-%COMP%]{margin-bottom:.85rem}}.modal-content[_ngcontent-%COMP%]{margin-bottom:1.1rem}@media (min-width: 640px){.modal-content[_ngcontent-%COMP%]{margin-bottom:1.6rem}}.modal-footer[_ngcontent-%COMP%]{margin-bottom:.35rem}@media (min-width: 640px){.modal-footer[_ngcontent-%COMP%]{margin-bottom:.85rem}}.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:3rem;width:8rem;border-radius:.375rem;border-width:1px;border-style:solid;font-size:1.25rem;line-height:1.75rem}@media (min-width: 640px){.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:3.5rem;width:11rem;font-size:1.5rem;line-height:2rem}}  .light-mode ion-toggle{--background: var(--grey-3);--handle-background: rgb(53, 53, 68, .34)}  .dark-mode ion-toggle{--background: #363753;--background-checked: #00328f;--handle-background: rgb(107, 107, 143)}"]}),i})();var g=l(4006),q=l(6948);function J(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"form",1)(1,"div",2)(2,"div",3)(3,"h2",4),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"ion-icon",5),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.handleDismiss())}),e.qZA()()(),e.TgZ(7,"div",6)(8,"app-phone-control",7),e.NdJ("onSelectPhoneCountry",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.onSelectPhoneCountry(o))})("onPhoneNumberChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.onPhoneNumberChange(o))}),e.qZA()(),e.TgZ(9,"div",8)(10,"button",9),e._uU(11),e.ALo(12,"translate"),e.qZA()()()}if(2&i){const t=e.oxw();e.Q6J("formGroup",t.changePhoneNumberForm),e.xp6(4),e.hij(" ",e.lcZ(5,4,"forgot-password")," "),e.xp6(6),e.Q6J("disabled",t.changePhoneNumberForm.invalid),e.xp6(1),e.hij(" ",e.lcZ(12,6,"get-verification-code")," ")}}let T=(()=>{class i extends h.u{constructor(t){super(),this.formBuilder=t,this.handleForgotPassword=new e.vpe}ngOnInit(){this.changePhoneNumberForm=this.formBuilder.group({countryCode:["+86",[g.kI.required]],phoneNumber:[null,[g.kI.required]]})}onSelectPhoneCountry(t){var n;t&&(null===(n=this.changePhoneNumberForm.get("countryCode"))||void 0===n||n.patchValue(t))}onPhoneNumberChange(t){var n;null===(n=this.changePhoneNumberForm.get("phoneNumber"))||void 0===n||n.patchValue(t)}onSendVerificationCode(){console.log("onSendVerificationCode")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-forgot-password-modal"]],outputs:{handleForgotPassword:"handleForgotPassword"},standalone:!0,features:[e.qOj,e.jDz],decls:2,vars:1,consts:[[1,"theme-modal",3,"isOpen","didDismiss"],[1,"flex","flex-col","p-2","h-full",3,"formGroup"],[1,"modal-header","flex","flex-col","items-center"],[1,"relative","w-full"],[1,"text-2xl","sm:text-3xl","text-text-strong","font-medium","text-left","sm:text-center","ml-1","sm:ml-0","sm:my-2"],["name","close-outline",1,"absolute","right-0","top-0","w-8","h-8","sm:w-10","sm:h-10","m-1","cursor-pointer",3,"click"],[1,"modal-content","px-1","sm:px-3","pt-4"],[3,"onSelectPhoneCountry","onPhoneNumberChange"],[1,"modal-footer","flex","w-full","px-1","sm:px-3"],["appRippleEffect","",1,"btn-blue","font-medium","w-full","text-xl","sm:text-2xl","h-12","sm:h-14","rounded-md","border","border-solid",3,"disabled"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-modal",0),e.NdJ("didDismiss",function(){return n.handleDismiss()}),e.YNc(1,J,13,8,"ng-template"),e.qZA()),2&t&&e.Q6J("isOpen",n.isOpen)},dependencies:[d.ez,g.u5,g._Y,g.JL,g.UX,g.sg,c.aw,c.X$,s.Pc,s.gu,s.ki,p.T,q.b,_.R],styles:["ion-modal[_ngcontent-%COMP%]{--width: 480px;--height: auto;--overflow: visible}ion-modal[_ngcontent-%COMP%]     .ion-page{overflow:visible}ion-input[_ngcontent-%COMP%]{--placeholder-color: var(--input-placeholder);--placeholder-font-weight: 500;--padding-top: 4px;--padding-bottom: 4px}ion-input.sms-code[_ngcontent-%COMP%]{--padding-start: 10px}.sms-field[_ngcontent-%COMP%]{margin-top:1.2rem}@media (min-width: 640px){.sms-field[_ngcontent-%COMP%]{margin-top:1.7rem}}.sms-btn[_ngcontent-%COMP%]{font-size:1.16rem}.modal-header[_ngcontent-%COMP%]{margin-bottom:.5rem}@media (min-width: 640px){.modal-header[_ngcontent-%COMP%]{margin-bottom:.85rem}}.modal-content[_ngcontent-%COMP%]{margin-bottom:1.1rem}@media (min-width: 640px){.modal-content[_ngcontent-%COMP%]{margin-bottom:1.6rem}}.modal-footer[_ngcontent-%COMP%]{margin-bottom:.35rem}@media (min-width: 640px){.modal-footer[_ngcontent-%COMP%]{margin-bottom:.85rem}}"]}),i})();function S(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",31)(1,"div",42),e._uU(2,"******"),e.qZA(),e.TgZ(3,"div",34),e._UZ(4,"div",35),e.TgZ(5,"button",33),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.isOpenTradingPINModal=!0)}),e._uU(6),e.ALo(7,"translate"),e.qZA()()()}2&i&&(e.xp6(6),e.hij(" ",e.lcZ(7,1,"change-password")," "))}function U(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",33),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.isOpenTradingPINModal=!0)}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&i&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"not-set")," "))}function L(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",43)(1,"div",44),e._uU(2),e.qZA(),e.TgZ(3,"div",34),e._UZ(4,"div",35),e.TgZ(5,"button",33),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.isOpenChangePhoneModal=!0)}),e._uU(6),e.ALo(7,"translate"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.phoneNumber),e.xp6(4),e.hij(" ",e.lcZ(7,2,"change-number")," ")}}function j(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",32)(1,"button",33),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.isOpenChangePhoneModal=!0)}),e._uU(2),e.ALo(3,"translate"),e.qZA()()}2&i&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"bind-now")," "))}function K(i,r){1&i&&(e.TgZ(0,"span"),e._uU(1," , "),e.qZA())}function H(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.YNc(3,K,2,0,"span",49),e.qZA()),2&i){const t=r.$implicit,n=r.index,o=e.oxw(2);e.xp6(1),e.hij(" ",e.lcZ(2,2,t)," "),e.xp6(2),e.Q6J("ngIf",n!==o.securedMethodsWith2FA.length-1)}}function E(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",31)(1,"div",45),e.YNc(2,H,4,4,"span",46),e.qZA(),e.TgZ(3,"div",47),e._UZ(4,"div",48),e.TgZ(5,"button",33),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.isOpenTwoFactorAuthModal=!0)}),e._uU(6),e.ALo(7,"translate"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.securedMethodsWith2FA),e.xp6(4),e.hij(" ",e.lcZ(7,2,"update-2FA")," ")}}function G(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",32)(1,"button",33),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.isOpenTwoFactorAuthModal=!0)}),e._uU(2),e.ALo(3,"translate"),e.qZA()()}2&i&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"not-set")," "))}const Q=function(i){return{"background-image":i}},f=function(i){return[i]},D=[{path:"",component:(()=>{class i extends M.H{constructor(){super(...arguments),this.isOpenTradingPINModal=!1,this.isOpenChangePhoneModal=!1,this.isOpenLoginPasswordModal=!1,this.isOpenTwoFactorAuthModal=!1,this.isOpenForgotPasswordModal=!1,this.tradingPIN="0218",this.securedMethods={onLogin:!1,payment:!1,activateStrategy:!1,bindExchange:!1},this.securedMethodsWith2FA=[]}ngOnInit(){}get securityLevel(){let t=2;return this.tradingPIN&&t++,this.phoneNumber&&t++,this.securedMethodsWith2FA.length>0&&t++,t}get securityLevelBackground(){return`conic-gradient(var(--main-green) 0 ${72*this.securityLevel}deg, var(--security-level) 0 288deg)`}onChangeLoginPassword(t){console.log("Change Login Password Form",t),this.isOpenLoginPasswordModal=!1}onChangeTradingPIN(t){console.log("Change Trading Password Form",t),this.tradingPIN=t,this.isOpenTradingPINModal=!1}onChangePhoneNumber(t){console.log("Change Phone Number",t),this.phoneNumber="+96 8** ***5741",this.isOpenChangePhoneModal=!1}onChangeTwoFactorAuth(t){this.securedMethods=t;const n=Object.keys(this.securedMethods).filter(o=>this.securedMethods[o]);this.securedMethodsWith2FA=n.map(o=>{const a=w.find(m=>m.key===o);return a?a.label:""}),this.isOpenTwoFactorAuthModal=!1}}return i.\u0275fac=function(){let r;return function(n){return(r||(r=e.n5z(i)))(n||i)}}(),i.\u0275cmp=e.Xpm({type:i,selectors:[["app-security"]],features:[e.qOj],decls:97,vars:64,consts:[[1,"flex","flex-col","w-full","sm:px-5","py-4"],[1,"flex","flex-auto","items-center","sm:justify-between","w-full"],[1,"block","sm:hidden","mr-1","cursor-pointer","w-8","h-8",3,"routerLink"],["name","chevron-back-outline",1,"w-8","h-8"],[1,"text-lg","xs:text-2xl","text-text-strong","font-medium"],[1,"security"],[1,"security__level"],[1,"flex","items-center","gap-x-2"],[1,"relative","w-14","h-14","rounded-full","bg-main-bg"],[1,"absolute","rounded-full","w-full","h-full",3,"ngStyle"],[1,"security-circle","absolute","flex","items-center","justify-center","inset-0","w-11","h-11","m-auto","rounded-full"],[1,"text-3xl","icon-shieldok","text-main-green"],[1,"flex","flex-col"],[1,"text-2xl","text-text-strong","font-medium"],[1,"text-sm","font-medium","text-red-1"],[1,"text-sm","font-medium","text-main-green"],[1,"px-2","sm:px-0","sm:ml-5","sm:table","sm:table-auto","w-full","font-medium","sm:max-w-fit"],[1,"block","sm:table-row-group"],[1,"block","sm:table-row","mb-4","sm:mb-0","border-b","border-main-border"],[1,"security-level-cell"],[1,"flex","items-center"],["name","checkmark-circle-outline",1,"w-8","h-8",3,"ngClass"],[1,"security-info-key-cell"],[1,"flex","items-center","h-full","whitespace-nowrap"],[1,"security-info-value-cell"],["class","flex w-full max-w-sm sm:max-w-none",4,"ngIf","ngIfElse"],["setTradingPasswordTemplate",""],["name","checkmark-circle-outline",1,"text-main-green","w-8","h-8"],[1,"flex","items-center","h-full","justify-end"],["class","flex max-w-sm sm:max-w-none",4,"ngIf","ngIfElse"],["setPhoneNumberTemplate",""],[1,"flex","w-full","max-w-sm","sm:max-w-none"],[1,"w-1/2","pr-4","md:pr-6"],["appRippleEffect","",1,"primary-btn","w-full",3,"click"],[1,"flex","w-1/2"],[1,"border-l","border-main-border","pr-4","md:pr-6","my-1"],["setTwoFactorTemplate",""],[3,"currentPIN","isOpen","handleChangeTradingPIN","isOpenChange"],[3,"isOpen","handleChangePhoneNumber","isOpenChange"],[3,"isOpen","handleChangePassword","isOpenChange"],[3,"securedMethods","isOpen","handleTwoFactorAuth","isOpenChange"],[3,"isOpen","isOpenChange"],[1,"flex","items-center","select-none","w-1/2"],[1,"flex","max-w-sm","sm:max-w-none"],[1,"flex","items-center","w-1/2"],[1,"w-1/2"],[4,"ngFor","ngForOf"],[1,"flex","w-1/2","items-center"],[1,"border-l","border-main-border","pr-4","md:pr-6","my-1","h-9"],[4,"ngIf"]],template:function(t,n){if(1&t&&(e.TgZ(0,"ng-scrollbar")(1,"div",0)(2,"div",1)(3,"div",2),e._UZ(4,"ion-icon",3),e.qZA(),e.TgZ(5,"h1",4),e._uU(6),e.ALo(7,"translate"),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8),e._UZ(12,"div",9),e.TgZ(13,"div",10),e._UZ(14,"i",11),e.qZA()(),e.TgZ(15,"div",12)(16,"h2",13),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"span",14),e._uU(20),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"span",15),e._uU(23),e.ALo(24,"translate"),e.qZA()()()(),e.TgZ(25,"div",16)(26,"div",17)(27,"div",18)(28,"div",19)(29,"div",20),e._UZ(30,"ion-icon",21),e.qZA()(),e.TgZ(31,"div",22)(32,"div",23),e._uU(33),e.ALo(34,"translate"),e.qZA()(),e.TgZ(35,"div",24),e.YNc(36,S,8,3,"div",25),e.YNc(37,U,3,3,"ng-template",null,26,e.W1O),e.qZA()(),e.TgZ(39,"div",18)(40,"div",19)(41,"div",20),e._UZ(42,"ion-icon",27),e.qZA()(),e.TgZ(43,"div",22)(44,"div",28),e._uU(45),e.ALo(46,"translate"),e.qZA()(),e.TgZ(47,"div",24),e._uU(48,"Bo*****23@gmail.com"),e.qZA()(),e.TgZ(49,"div",18)(50,"div",19)(51,"div",20),e._UZ(52,"ion-icon",21),e.qZA()(),e.TgZ(53,"div",22)(54,"div",28),e._uU(55),e.ALo(56,"translate"),e.qZA()(),e.TgZ(57,"div",24),e.YNc(58,L,8,4,"div",29),e.YNc(59,j,4,3,"ng-template",null,30,e.W1O),e.qZA()(),e.TgZ(61,"div",18)(62,"div",19)(63,"div",20),e._UZ(64,"ion-icon",27),e.qZA()(),e.TgZ(65,"div",22)(66,"div",28),e._uU(67),e.ALo(68,"translate"),e.qZA()(),e.TgZ(69,"div",24)(70,"div",31)(71,"div",32)(72,"button",33),e.NdJ("click",function(){return n.isOpenLoginPasswordModal=!0}),e._uU(73),e.ALo(74,"translate"),e.qZA()(),e.TgZ(75,"div",34),e._UZ(76,"div",35),e.TgZ(77,"button",33),e.NdJ("click",function(){return n.isOpenForgotPasswordModal=!0}),e._uU(78),e.ALo(79,"translate"),e.qZA()()()()(),e.TgZ(80,"div",18)(81,"div",19)(82,"div",20),e._UZ(83,"ion-icon",21),e.qZA()(),e.TgZ(84,"div",22)(85,"div",28),e._uU(86),e.ALo(87,"translate"),e.qZA()(),e.TgZ(88,"div",24),e.YNc(89,E,8,4,"div",25),e.YNc(90,G,4,3,"ng-template",null,36,e.W1O),e.qZA()()()()()(),e.TgZ(92,"app-trading-password-modal",37),e.NdJ("handleChangeTradingPIN",function(a){return n.onChangeTradingPIN(a)})("isOpenChange",function(a){return n.isOpenTradingPINModal=a}),e.qZA(),e.TgZ(93,"app-edit-phone-modal",38),e.NdJ("handleChangePhoneNumber",function(a){return n.onChangePhoneNumber(a)})("isOpenChange",function(a){return n.isOpenChangePhoneModal=a}),e.qZA(),e.TgZ(94,"app-change-password-modal",39),e.NdJ("handleChangePassword",function(a){return n.onChangeLoginPassword(a)})("isOpenChange",function(a){return n.isOpenLoginPasswordModal=a}),e.qZA(),e.TgZ(95,"app-two-factor-modal",40),e.NdJ("handleTwoFactorAuth",function(a){return n.onChangeTwoFactorAuth(a)})("isOpenChange",function(a){return n.isOpenTwoFactorAuthModal=a}),e.qZA(),e.TgZ(96,"app-forgot-password-modal",41),e.NdJ("isOpenChange",function(a){return n.isOpenForgotPasswordModal=a}),e.qZA()()),2&t){const o=e.MAs(38),a=e.MAs(60),m=e.MAs(91);e.xp6(3),e.Q6J("routerLink","/m"),e.xp6(3),e.hij(" ",e.lcZ(7,34,"security")," "),e.xp6(6),e.Q6J("ngStyle",e.VKq(56,Q,n.securityLevelBackground)),e.xp6(5),e.AsE(" ",e.lcZ(18,36,"security-level")," ",n.securityLevel,"/5 "),e.xp6(2),e.ekj("hidden",5===n.securityLevel),e.xp6(1),e.hij(" ",e.lcZ(21,38,"low-security")," "),e.xp6(2),e.ekj("hidden",n.securityLevel<5),e.xp6(1),e.hij(" ",e.lcZ(24,40,"secured"),"! "),e.xp6(7),e.Q6J("ngClass",e.VKq(58,f,n.tradingPIN?"text-main-green":"text-grey-2")),e.xp6(3),e.hij(" ",e.lcZ(34,42,"trading-password")," "),e.xp6(3),e.Q6J("ngIf",n.tradingPIN)("ngIfElse",o),e.xp6(9),e.hij(" ",e.lcZ(46,44,"email")," "),e.xp6(7),e.Q6J("ngClass",e.VKq(60,f,n.phoneNumber?"text-main-green":"text-grey-2")),e.xp6(3),e.hij(" ",e.lcZ(56,46,"phone-number")," "),e.xp6(3),e.Q6J("ngIf",n.phoneNumber)("ngIfElse",a),e.xp6(9),e.hij(" ",e.lcZ(68,48,"login-password")," "),e.xp6(6),e.hij(" ",e.lcZ(74,50,"change-password")," "),e.xp6(5),e.hij(" ",e.lcZ(79,52,"forgot-password")," "),e.xp6(5),e.Q6J("ngClass",e.VKq(62,f,n.securedMethodsWith2FA.length>0?"text-main-green":"text-grey-2")),e.xp6(3),e.hij(" ",e.lcZ(87,54,"require-2FA")," "),e.xp6(3),e.Q6J("ngIf",n.securedMethodsWith2FA.length>0)("ngIfElse",m),e.xp6(3),e.Q6J("currentPIN",n.tradingPIN)("isOpen",n.isOpenTradingPINModal),e.xp6(1),e.Q6J("isOpen",n.isOpenChangePhoneModal),e.xp6(1),e.Q6J("isOpen",n.isOpenLoginPasswordModal),e.xp6(1),e.Q6J("securedMethods",n.securedMethods)("isOpen",n.isOpenTwoFactorAuthModal),e.xp6(1),e.Q6J("isOpen",n.isOpenForgotPasswordModal)}},dependencies:[d.mk,d.sg,d.O5,d.PC,s.gu,s.YI,P.KC,u.rH,_.R,b,C.q,v.N,y,T,c.X$],styles:[".dark-mode .security__level{background-color:rgba(41,42,63,.59);border:2px solid rgba(70,70,97,.231372549)}  .dark-mode .security-circle{background-color:var(--grey-4)}  .light-mode .security__level{border-width:2px;border-color:var(--grey-3);--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}  .light-mode .security-circle{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}button.primary-btn[_ngcontent-%COMP%]{max-width:176px}.security[_ngcontent-%COMP%]{margin-top:.25rem;display:flex;flex-direction:column;padding-left:.625rem;padding-right:.625rem}@media (min-width: 640px){.security[_ngcontent-%COMP%]{padding-left:0;padding-right:0}}.security__level[_ngcontent-%COMP%]{margin-top:.75rem;margin-bottom:.75rem;display:flex;align-items:center;justify-content:space-between;border-radius:.375rem;padding:1.75rem .5rem}@media (min-width: 340px){.security__level[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}}.security-level-cell[_ngcontent-%COMP%]{display:none;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding-left:0;padding-right:0;vertical-align:middle}@media (min-width: 640px){.security-level-cell[_ngcontent-%COMP%]{display:table-cell;padding-left:.5rem;padding-right:.5rem}}@media (min-width: 1024px){.security-level-cell[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}}.security-info-key-cell[_ngcontent-%COMP%]{display:block;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding-left:0;padding-right:0;text-align:right;font-size:1.25rem;line-height:1.75rem;font-weight:500}@media (min-width: 640px){.security-info-key-cell[_ngcontent-%COMP%]{display:table-cell;padding-left:.5rem;padding-right:.5rem;font-size:1rem;line-height:1.5rem}}@media (min-width: 768px){.security-info-key-cell[_ngcontent-%COMP%]{padding-left:1.5rem;padding-right:1.5rem}}@media (min-width: 640px){.security-info-key-cell[_ngcontent-%COMP%]{height:60px}}@media (min-width: 768px){.security-info-key-cell[_ngcontent-%COMP%]{height:68px}}.security-info-value-cell[_ngcontent-%COMP%]{display:block;width:100%;padding-top:.5rem;padding-bottom:.5rem;vertical-align:middle;color:var(--text-strong)}@media (min-width: 640px){.security-info-value-cell[_ngcontent-%COMP%]{display:table-cell}}@media (min-width: 768px){.security-info-value-cell[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem}}@media (min-width: 640px){.security-info-value-cell[_ngcontent-%COMP%]{height:68px;width:400px}}"]}),i})()}];let z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.Bz.forChild(D),u.Bz]}),i})(),V=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,s.Pc,c.aw,P.kb,z,p.T,b,C.q,v.N,y,T]}),i})()}}]);