"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[447],{447:(M,m,n)=>{n.d(m,{m:()=>Y});var g=n(655),_=n(6895),t=n(4650),d=n(4006),l=n(8008),p=n(3416),f=n(5433),v=n(8854),u=n(9116),y=n(7154),c=n(6511),x=n(7645),E=n(9808),O=n(293),P=n(2343),b=n(3709),S=n(225),w=n(7011),Z=n(6832),k=n(6647),D=n(9177),U=n(9787),I=n(8798),B=n(5116);const T=function(r,a,e){return{isShowingAutomated:r,isShowingCopyTrade:a,showOnlyActivated:e}};function K(r,a){if(1&r&&(t.TgZ(0,"h2",19),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"filterStrategy"),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.AsE(" ",t.lcZ(2,2,e.title)," (",t.Dn7(3,4,e.itemList,t.kEZ(8,T,e.isShowingAutomated,e.isShowingCopyTrade,e.showOnlyActivated),e.filter).length,") ")}}function R(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"div",28),t.NdJ("click",function(){t.CHM(e),t.oxw();const s=t.MAs(7),o=t.oxw();return t.KtG(o.clearSearch(s))}),t._UZ(1,"i",29),t.qZA()}}function W(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"div",20)(1,"button",21),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.isOpenFilterModal=!0)}),t._UZ(2,"app-filter-icon",22),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",23)(6,"ion-input",24,25),t.NdJ("ngModelChange",function(s){t.CHM(e);const o=t.oxw();return t.KtG(o.searchText=s)}),t.ALo(8,"translate"),t.qZA(),t.YNc(9,R,2,0,"div",26),t._UZ(10,"i",27),t.qZA()()}if(2&r){const e=t.oxw();t.xp6(3),t.hij(" ",t.lcZ(4,4,"filter")," "),t.xp6(3),t.s9C("placeholder",t.lcZ(8,6,"input-placeholder-search")),t.Q6J("ngModel",e.searchText),t.xp6(3),t.Q6J("ngIf",e.searchText)}}const J=function(r){return{"!text-[#ffc000]":r}},F=function(r){return{"text-main-blue":r}};function N(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"div",30)(1,"div",31),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.handleLike())}),t._UZ(2,"app-star-icon",32),t.qZA(),t._UZ(3,"div",33),t.TgZ(4,"app-check-circle",34),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.handleSub())}),t.qZA()()}if(2&r){const e=t.oxw();t.xp6(2),t.Q6J("ngClass",t.VKq(2,J,e.isLike)),t.xp6(2),t.Q6J("ngClass",t.VKq(4,F,e.isSub))}}function Q(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"app-strategy-item",38),t.NdJ("click",function(){const o=t.CHM(e).$implicit,h=t.oxw(2);return t.KtG(h.selectReal(o.id))})("notifyParentEvent",function(s){t.CHM(e);const o=t.oxw(2);return t.KtG(o.handleNotifyParent(s))}),t.qZA()}if(2&r){const e=a.$implicit,i=a.index,s=t.oxw().ngLet,o=t.oxw();t.Q6J("customClass",i<s.length-1?"border-b border-main-border":"")("active",o.selectId===e.id||o.routePushFirstList==e.id)("data",e)}}function j(r,a){if(1&r&&(t.TgZ(0,"ng-scrollbar",35),t.YNc(1,Q,1,3,"app-strategy-item",36),t.TgZ(2,"div",37),t._uU(3),t.ALo(4,"translate"),t.qZA()()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.realStrategyPageList),t.xp6(2),t.Oqu(t.lcZ(4,2,"no-more-results"))}}const G=function(r){return{"min-height.px":r}},A=function(r,a){return{active:r,desc:a}};let Y=(()=>{class r extends y.H{constructor(e,i,s,o,h){super(),this.activatedRoute=e,this.tradeService=i,this.strategyService=s,this.cdr=o,this.i18n=h,this.isOpenFilterModal=!1,this.itemList=[],this.selectMode=!0,this.filterMode=!0,this.showOnlyActivated=!1,this.showTitle=!1,this.showBorder=!1,this.activeMode=!1,this.notifyParentEvent=new t.vpe,this.isShowingCopyTrade=!0,this.isShowingAutomated=!0,this.realStrategyPageList=[],this.strategyId="",this.sortType="earnings",this.sortBy="desc",this.replaceStrategyList=P.y,this.isLike=!1,this.isSub=!1,this.selectedItem=0,this.scrollConfig={noMore:!1,loading:!1,distance:1,throttle:300,page:0,rows:50},this.filter={field:"yield",order:-1},this.searchText="",this.isFavorite=!1}handleNotifyParent(e){this.notifyParentEvent.emit(e)}get isMobile(){return window.innerWidth<640}get title(){return this.showOnlyActivated?"my-active-strategies":"strategies"}ngOnInit(){return(0,g.mG)(this,void 0,void 0,function*(){this.activatedRoute.queryParams.subscribe(e=>(0,g.mG)(this,void 0,void 0,function*(){let i=e.id;i&&(this.selectId=i)})),this.updateStrategyList(),this.getRealStrategyPage()})}addLike(e,i){const s=this.realStrategyPageList.find(o=>o.id===i);s.isLike=!s.isLike,e?s.likeNum+=1:s.likeNum-=1}updateStrategyList(){return(0,g.mG)(this,void 0,void 0,function*(){this.itemList=yield(0,E.n)(yield this.tradeService.getAllStrategies())})}clearSearch(e){this.searchText="",e.setFocus()}handleFilter(e){switch(this.filter.field===e?this.filter.order=-this.filter.order:(this.filter.field=e,this.filter.order=-1),console.log(this.filter.order),console.log(e),e){case"rank":this.sortType="ranking";break;case"yield":this.sortType="earnings";break;case"date":this.sortType="launchTime";break;default:this.sortType=""}switch(this.filter.order){case-1:this.sortBy="desc";break;case 1:this.sortBy="asc";break;default:this.sortType="asc"}this.filter=Object.assign({},this.filter),this.init()}handleLike(){this.isLike=!this.isLike,this.init(this.isLike,!1)}handleSub(){this.isSub=!this.isSub,this.init(!1,this.isSub)}init(e,i){this.scrollConfig.noMore=!1,this.scrollConfig.loading=!1,this.scrollConfig.page=0,this.realStrategyPageList=[],this.getRealStrategyPage(e,i)}selectReal(e){this.selectId=e}handleAutomatedClick(){this.isShowingAutomated=!this.isShowingAutomated,!this.isShowingAutomated&&!this.isShowingCopyTrade&&(this.isShowingCopyTrade=!0)}handleCopyTradeClick(){this.isShowingCopyTrade=!this.isShowingCopyTrade,!this.isShowingAutomated&&!this.isShowingCopyTrade&&(this.isShowingAutomated=!0)}handleModalApply(e){this.isShowingAutomated=e.isShowingAutomated,this.isShowingCopyTrade=e.isShowingCopyTrade}getRealStrategyPage(e,i){this.scrollConfig.loading||(this.scrollConfig.loading=!0,this.strategyService.getRealStrategyPageList({page:this.scrollConfig.page,rows:this.scrollConfig.rows,isLike:this.isLike,isSub:this.isSub,sortOrder:this.sortBy,sortBy:this.sortType}).subscribe({next:s=>{s.rows?(this.scrollConfig.page++,0!==this.realStrategyPageList.length&&(this.realStrategyPageList=[]),s.rows.forEach(o=>{const h=this.replaceStrategyList.find(L=>Object.is(o.id,L.id));h&&(o.name=h.name);let C=[];o.accounts&&JSON.parse(o.accounts).forEach(H=>{C.push(H.symbolIcon)}),this.realStrategyPageList.push(Object.assign(Object.assign({},o),{icons:C,isActivated:o.isSub,type:"automated"}))}),this.scrollConfig.noMore=s.rows.length<this.scrollConfig.rows):this.scrollConfig.noMore=!0},error:s=>{console.error(s)}}).add(()=>{this.scrollConfig.loading=!1}))}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(b.gz),t.Y36(S.X),t.Y36(w.k),t.Y36(t.sBO),t.Y36(p.sK))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-algorithm-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(c.V,5),2&e){let s;t.iGM(s=t.CRH())&&(i.StrategyItem=s.first)}},inputs:{selectMode:"selectMode",filterMode:"filterMode",showOnlyActivated:"showOnlyActivated",showTitle:"showTitle",showBorder:"showBorder",activeMode:"activeMode",routePushFirstList:"routePushFirstList"},outputs:{notifyParentEvent:"notifyParentEvent"},standalone:!0,features:[t.qOj,t.jDz],decls:35,vars:45,consts:[[1,"h-full","flex","flex-col","pt-2","sm:px-2","kkkkaaaa"],["class","text-text-strong text-xl mb-2",4,"ngIf"],[3,"ngStyle"],["class","flex items-center mb-0.5 -mx-1",4,"ngIf"],[1,"flex","items-center","font-medium","tracking-tight"],["class","flex items-center",4,"ngIf"],[1,"filter-item","px-1","py-1","rounded","mr-1",3,"ngClass","click"],[1,"flex","items-center","text-xs","font-medium","tracking-tight","pr-3","relative"],["name","caret-up-outline",1,"absolute","-right-0.5"],[1,"flex","items-center","text-xs","font-medium","tracking-tight","pr-3","relative","whitespace-nowrap"],[1,"flex-1"],[1,"border-main-border","border-b","-mx-2"],[1,"flex","text-sm","mt-0.5","font-medium"],[1,"flex-1","whitespace-nowrap"],[1,"w-16","text-right","whitespace-nowrap"],[1,"border-main-border","border-b","-mx-2","mt-0.5"],[1,"flex-1","-mx-2"],["visibility","hover","scrollShadow","","backToTopBtn","","class","h-full w-full",4,"ngLet"],[3,"isShowingAutomated","isShowingCopyTrade","isOpen","apply","isOpenChange"],[1,"text-text-strong","text-xl","mb-2"],[1,"flex","items-center","mb-0.5","-mx-1"],[1,"rounded-md","border","border-solid","border-main-border","px-2","text-text-strong","flex","items-center","text-xl",3,"click"],[1,"w-5","mr-1.5","fill-grey-2"],[1,"ml-2","flex-1","rounded-full","border-border-input","border","flex","items-center","bg-bg-input","px-2"],[1,"text-text-strong","theme-input",3,"ngModel","placeholder","ngModelChange"],["input",""],["style","background: #7e7e962e; width: 17px; height: 17px","class","rounded-full mr-1 flex items-center justify-center",3,"click",4,"ngIf"],[1,"icon-searchsimple"],[1,"rounded-full","mr-1","flex","items-center","justify-center",2,"background","#7e7e962e","width","17px","height","17px",3,"click"],[1,"icon-close","cursor-pointer"],[1,"flex","items-center"],[1,"-ml-2","cursor-pointer",2,"width","40px","height","20px",3,"click"],[1,"cursor-pointer",3,"ngClass"],[1,"h-4","border-l","border-main-border","mr-0.5"],[1,"p-1.5","mr-2","cursor-pointer",3,"ngClass","click"],["visibility","hover","scrollShadow","","backToTopBtn","",1,"h-full","w-full"],[3,"customClass","active","data","click","notifyParentEvent",4,"ngFor","ngForOf"],[1,"pt-8","sm:pt-12","pb-12","text-center","mb-32","sm:mb-0"],[3,"customClass","active","data","click","notifyParentEvent"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,K,4,12,"h2",1),t.TgZ(2,"div",2),t.YNc(3,W,11,8,"div",3),t.TgZ(4,"div",4),t.YNc(5,N,5,6,"div",5),t.TgZ(6,"button",6),t.NdJ("click",function(){return i.handleFilter("rank")}),t.TgZ(7,"div",7),t._uU(8),t.ALo(9,"translate"),t._UZ(10,"ion-icon",8),t.qZA()(),t.TgZ(11,"button",6),t.NdJ("click",function(){return i.handleFilter("yield")}),t.TgZ(12,"div",7),t._uU(13),t.ALo(14,"translate"),t._UZ(15,"ion-icon",8),t.qZA()(),t.TgZ(16,"button",6),t.NdJ("click",function(){return i.handleFilter("date")}),t.TgZ(17,"div",9),t._uU(18),t.ALo(19,"translate"),t._UZ(20,"ion-icon",8),t.qZA()(),t._UZ(21,"div",10),t.qZA()(),t._UZ(22,"div",11),t.TgZ(23,"div",12)(24,"div",13),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.TgZ(27,"div",14),t._uU(28),t.ALo(29,"translate"),t.qZA()(),t._UZ(30,"div",15),t.TgZ(31,"div",16),t.YNc(32,j,5,4,"ng-scrollbar",17),t.ALo(33,"filterStrategy"),t.qZA()(),t.TgZ(34,"app-filter-modal",18),t.NdJ("apply",function(o){return i.handleModalApply(o)})("isOpenChange",function(o){return i.isOpenFilterModal=o}),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",i.showTitle),t.xp6(1),t.Q6J("ngStyle",t.VKq(30,G,i.filterMode?72:32)),t.xp6(1),t.Q6J("ngIf",i.filterMode),t.xp6(2),t.Q6J("ngIf",!i.activeMode),t.xp6(1),t.Q6J("ngClass",t.WLB(32,A,"rank"===i.filter.field,-1===i.filter.order)),t.xp6(2),t.hij(" ",t.lcZ(9,16,"dashboard-filter-rank")," "),t.xp6(3),t.Q6J("ngClass",t.WLB(35,A,"yield"===i.filter.field,-1===i.filter.order)),t.xp6(2),t.hij(" ",t.lcZ(14,18,"Annualized-Revenue")," "),t.xp6(3),t.Q6J("ngClass",t.WLB(38,A,"date"===i.filter.field,-1===i.filter.order)),t.xp6(2),t.hij(" ",t.lcZ(19,20,"dashboard-filter-date")," "),t.xp6(7),t.hij(" ",t.lcZ(26,22,"dashboard-side-menu-header-pair")," "),t.xp6(3),t.hij(" ",t.lcZ(29,24,"yield-alls")," "),t.xp6(4),t.Q6J("ngLet",t.Dn7(33,26,i.itemList,t.kEZ(41,T,i.isShowingAutomated,i.isShowingCopyTrade,i.showOnlyActivated),i.filter)),t.xp6(2),t.Q6J("isShowingAutomated",i.isShowingAutomated)("isShowingCopyTrade",i.isShowingCopyTrade)("isOpen",i.isOpenFilterModal))},dependencies:[_.ez,_.mk,_.sg,_.O5,_.PC,d.u5,d.JJ,d.On,d.UX,l.Pc,l.gu,l.pK,l.j9,p.aw,p.X$,u.Q,Z.r,k.r,D.k,f.kb,f.KC,v.T,U.E,I.B,B.h,c.V,x.D,O.t],styles:["app-check-circle[_ngcontent-%COMP%]     svg, app-gear-icon[_ngcontent-%COMP%]     svg{width:20px}.filter-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:none}.filter-item.active[_ngcontent-%COMP%]{background-color:var(--main-blue-transparent);color:var(--main-blue)}.filter-item.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:block;transition:transform .3s}.filter-item.active.desc[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}ion-input[_ngcontent-%COMP%]{--padding-start: 4px;--padding-end: 4px;--padding-top: 2px;--padding-bottom: 2px}.icon-close[_ngcontent-%COMP%]{font-size:9px}"]}),r})()},293:(M,m,n)=>{n.d(m,{t:()=>_});var g=n(4650);let _=(()=>{class t{transform(l,{isShowingCopyTrade:p=!1,isShowingAutomated:f=!1,showOnlyActivated:v=!0},{field:u="rank",order:y=-1}){return l.filter(c=>(!v||c.isActivated)&&"automated"===c.type&&f||"copy"===c.type&&p).sort((c,x)=>(c[u]-x[u])*y)}}return t.\u0275fac=function(l){return new(l||t)},t.\u0275pipe=g.Yjl({name:"filterStrategy",type:t,pure:!0,standalone:!0}),t})()}}]);