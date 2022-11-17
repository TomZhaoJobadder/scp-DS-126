"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[9814],{9814:(y,u,a)=>{a.r(u),a.d(u,{NzDemoMessageModule:()=>v});var T=a(3238),f=a(4515),r=a(2720),g=a(4344),l=a(5760);const _=[r.gR,g.sL,l.PV];var d=a(1380),e=a(9724);let U=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message"]],viewQuery:function(n,s){if(1&n&&e.Gf(d.G,5),2&n){let i;e.iGM(i=e.CRH())&&(s.codeBoxes=i)}},decls:0,vars:0,template:function(n,s){},encapsulation:2}),o})();var A=a(3563),p=a(695),m=a(8918),Z=a(8741),z=a(5535),c=a(8238);let q=(()=>{class o{constructor(n){this.message=n}createBasicMessage(){this.message.info("This is a normal message")}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-info"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,s){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.createBasicMessage()}),e._uU(1,"Display normal message"),e.qZA()),2&n&&e.Q6J("nzType","primary")},directives:[g.ix,c.dQ,m.w],encapsulation:2}),o})(),C=(()=>{class o{constructor(n){this.message=n}createBasicMessage(){this.message.success("This is a prompt message for success, and it will disappear in 10 seconds",{nzDuration:1e4})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-duration"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,s){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.createBasicMessage()}),e._uU(1,"Customized display duration"),e.qZA()),2&n&&e.Q6J("nzType","default")},directives:[g.ix,c.dQ,m.w],encapsulation:2}),o})();var h=a(4612);let M=(()=>{class o{constructor(n){this.message=n}startShowMessages(){this.message.loading("Action in progress",{nzDuration:2500}).onClose.pipe((0,h.b)(()=>this.message.success("Loading finished",{nzDuration:2500}).onClose),(0,h.b)(()=>this.message.info("Loading finished is finished",{nzDuration:2500}).onClose)).subscribe(()=>{console.log("All completed!")})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-close"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,s){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.startShowMessages()}),e._uU(1,"Display a sequence of messages"),e.qZA()),2&n&&e.Q6J("nzType","default")},directives:[g.ix,c.dQ,m.w],encapsulation:2}),o})(),D=(()=>{class o{constructor(n){this.message=n}createMessage(n){this.message.create(n,`This is a message of ${n}`)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-other"]],decls:6,vars:0,consts:[["nz-button","",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.createMessage("success")}),e._uU(1,"Success"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return s.createMessage("error")}),e._uU(3,"Error"),e.qZA(),e.TgZ(4,"button",0),e.NdJ("click",function(){return s.createMessage("warning")}),e._uU(5,"Warning"),e.qZA())},directives:[g.ix,c.dQ,m.w],styles:["[nz-button][_ngcontent-%COMP%]{margin-right:8px}"]}),o})(),b=(()=>{class o{constructor(n){this.message=n}createBasicMessage(){const n=this.message.loading("Action in progress..",{nzDuration:0}).messageId;setTimeout(()=>{this.message.remove(n)},2500)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-loading"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,s){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.createBasicMessage()}),e._uU(1,"Display a loading indicator"),e.qZA()),2&n&&e.Q6J("nzType","default")},directives:[g.ix,c.dQ,m.w],encapsulation:2}),o})(),N=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message"]],viewQuery:function(n,s){if(1&n&&e.Gf(d.G,5),2&n){let i;e.iGM(i=e.CRH())&&(s.codeBoxes=i)}},decls:341,vars:27,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-message-demo-info","nzTitle","Normal prompt"],["nzHref","#components-message-demo-other","nzTitle","Other types of message"],["nzHref","#components-message-demo-duration","nzTitle","Customize duration"],["nzHref","#components-message-demo-loading","nzTitle","Message of loading"],["nzHref","#components-message-demo-close","nzTitle","Customize duration"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//message/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Normal prompt","nzSelector","nz-demo-message-info","nzGenerateCommand","ng g ng-zorro-antd:message-info <name>","nzComponentName","NzDemoMessageInfoComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Customize duration","nzSelector","nz-demo-message-duration","nzGenerateCommand","ng g ng-zorro-antd:message-duration <name>","nzComponentName","NzDemoMessageDurationComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Customize duration","nzSelector","nz-demo-message-close","nzGenerateCommand","ng g ng-zorro-antd:message-close <name>","nzComponentName","NzDemoMessageCloseComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Other types of message","nzSelector","nz-demo-message-other","nzGenerateCommand","ng g ng-zorro-antd:message-other <name>","nzComponentName","NzDemoMessageOtherComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Message of loading","nzSelector","nz-demo-message-loading","nzGenerateCommand","ng g ng-zorro-antd:message-loading <name>","nzComponentName","NzDemoMessageLoadingComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Usage"],["nzTitle","Installation"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nzmessageservice"],[1,"api-type-label","service"],["onclick","window.location.hash = 'nzmessageservice'",1,"anchor"],["id","global-configuration"],["onclick","window.location.hash = 'global-configuration'",1,"anchor"],["href","/docs/global-config/en"],["id","nzmessageref"],["onclick","window.location.hash = 'nzmessageref'",1,"anchor"],[1,"token","class-name"],[1,"token","operator"],["spellcheck","true",1,"token","comment"]],template:function(n,s){1&n&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(x){return s.goLink(x)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),e.qZA()(),e.TgZ(9,"section",8)(10,"h1"),e._uU(11,"Message"),e._UZ(12,"span",9)(13,"span",10),e.TgZ(14,"a",11),e._UZ(15,"i",12),e.qZA()(),e.TgZ(16,"section",8),e.IAx(),e.TgZ(17,"p"),e._uU(18,"Display global messages as feedback in response to user operations."),e.qZA(),e.TgZ(19,"h2",13)(20,"span"),e._uU(21,"When To Use"),e.qZA(),e.TgZ(22,"a",14),e._uU(23,"#"),e.qZA()(),e.TgZ(24,"ul")(25,"li"),e._uU(26," To provide feedback such as success, warning, error etc."),e.qZA(),e.TgZ(27,"li"),e._uU(28," A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt."),e.qZA()(),e.TgZ(29,"pre",15)(30,"code")(31,"span",16),e._uU(32,"import"),e.qZA(),e._uU(33," "),e.TgZ(34,"span",17),e._uU(35,"{"),e.qZA(),e._uU(36," NzMessageModule "),e.TgZ(37,"span",17),e._uU(38,"}"),e.qZA(),e._uU(39," "),e.TgZ(40,"span",16),e._uU(41,"from"),e.qZA(),e._uU(42," "),e.TgZ(43,"span",18),e._uU(44,"'ng-zorro-antd/message'"),e.qZA(),e.TgZ(45,"span",17),e._uU(46,";"),e.qZA()()(),e.fQ9(),e.qZA()(),e.TgZ(47,"nz-tabset",19)(48,"nz-tab",20)(49,"div",21)(50,"div",22)(51,"nz-code-box",23),e._UZ(52,"nz-demo-message-info",24),e.TgZ(53,"div",25),e.IAx(),e.TgZ(54,"p"),e._uU(55,"Normal messages as feedbacks."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(56,"nz-code-box",26),e._UZ(57,"nz-demo-message-duration",24),e.TgZ(58,"div",25),e.IAx(),e.TgZ(59,"p"),e._uU(60,"Customize message display duration from default "),e.TgZ(61,"code"),e._uU(62,"3s"),e.qZA(),e._uU(63," to "),e.TgZ(64,"code"),e._uU(65,"10s"),e.qZA(),e._uU(66,"."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(67,"nz-code-box",27),e._UZ(68,"nz-demo-message-close",24),e.TgZ(69,"div",25),e.IAx(),e.TgZ(70,"p"),e._uU(71,"You can subscribe to "),e.TgZ(72,"code"),e._uU(73,"onClose"),e.qZA(),e._uU(74," event to make some operations. This case would open three messages in sequence."),e.qZA(),e.fQ9(),e.qZA()()(),e.TgZ(75,"div",22)(76,"nz-code-box",28),e._UZ(77,"nz-demo-message-other",24),e.TgZ(78,"div",25),e.IAx(),e.TgZ(79,"p"),e._uU(80,"Messages of success, error and warning types."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(81,"nz-code-box",29),e._UZ(82,"nz-demo-message-loading",24),e.TgZ(83,"div",25),e.IAx(),e.TgZ(84,"p"),e._uU(85,"Display a global loading indicator, which is dismissed by itself asynchronously."),e.qZA(),e.fQ9(),e.qZA()()()()(),e.TgZ(86,"nz-tab",30),e._uU(87," Content of Tab Pane 2 "),e.qZA(),e._UZ(88,"nz-tab",31),e.qZA(),e.TgZ(89,"section",32),e.IAx(),e.TgZ(90,"h2",33)(91,"span"),e._uU(92,"API"),e.qZA(),e.TgZ(93,"a",34),e._uU(94,"#"),e.qZA()(),e.TgZ(95,"h3",35)(96,"span"),e._uU(97,"NzMessageService"),e.qZA(),e.TgZ(98,"label",36),e._uU(99,"service"),e.qZA(),e.TgZ(100,"a",37),e._uU(101,"#"),e.qZA()(),e.TgZ(102,"p"),e._uU(103,"This components provides some service methods, with usage and arguments as following:"),e.qZA(),e.TgZ(104,"ul")(105,"li")(106,"code"),e._uU(107,"NzMessageService.success(content, [options])"),e.qZA()(),e.TgZ(108,"li")(109,"code"),e._uU(110,"NzMessageService.error(content, [options])"),e.qZA()(),e.TgZ(111,"li")(112,"code"),e._uU(113,"NzMessageService.info(content, [options])"),e.qZA()(),e.TgZ(114,"li")(115,"code"),e._uU(116,"NzMessageService.warning(content, [options])"),e.qZA()(),e.TgZ(117,"li")(118,"code"),e._uU(119,"NzMessageService.loading(content, [options])"),e.qZA()()(),e.TgZ(120,"table")(121,"thead")(122,"tr")(123,"th"),e._uU(124,"Argument"),e.qZA(),e.TgZ(125,"th"),e._uU(126,"Description"),e.qZA(),e.TgZ(127,"th"),e._uU(128,"Type"),e.qZA(),e.TgZ(129,"th"),e._uU(130,"Default"),e.qZA()()(),e.TgZ(131,"tbody")(132,"tr")(133,"td"),e._uU(134,"content"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"The content of message"),e.qZA(),e.TgZ(137,"td")(138,"code"),e._uU(139,"string | TemplateRef<void>"),e.qZA()(),e.TgZ(140,"td"),e._uU(141,"-"),e.qZA()(),e.TgZ(142,"tr")(143,"td"),e._uU(144,"options"),e.qZA(),e.TgZ(145,"td"),e._uU(146,"Support setting the parameters for the current message box, see the table below"),e.qZA(),e.TgZ(147,"td")(148,"code"),e._uU(149,"object"),e.qZA()(),e.TgZ(150,"td"),e._uU(151,"-"),e.qZA()()()(),e.TgZ(152,"p"),e._uU(153,"The parameters that are set by the "),e.TgZ(154,"code"),e._uU(155,"options"),e.qZA(),e._uU(156," support are as follows:"),e.qZA(),e.TgZ(157,"table")(158,"thead")(159,"tr")(160,"th"),e._uU(161,"Argument"),e.qZA(),e.TgZ(162,"th"),e._uU(163,"Description"),e.qZA(),e.TgZ(164,"th"),e._uU(165,"Type"),e.qZA()()(),e.TgZ(166,"tbody")(167,"tr")(168,"td"),e._uU(169,"nzDuration"),e.qZA(),e.TgZ(170,"td"),e._uU(171,"Duration (milliseconds), does not disappear when set to 0"),e.qZA(),e.TgZ(172,"td")(173,"code"),e._uU(174,"number"),e.qZA()()(),e.TgZ(175,"tr")(176,"td"),e._uU(177,"nzPauseOnHover"),e.qZA(),e.TgZ(178,"td"),e._uU(179,"Do not remove automatically when mouse is over while setting to "),e.TgZ(180,"code"),e._uU(181,"true"),e.qZA()(),e.TgZ(182,"td")(183,"code"),e._uU(184,"boolean"),e.qZA()()(),e.TgZ(185,"tr")(186,"td"),e._uU(187,"nzAnimate"),e.qZA(),e.TgZ(188,"td"),e._uU(189,"Whether to turn on animation"),e.qZA(),e.TgZ(190,"td")(191,"code"),e._uU(192,"boolean"),e.qZA()()()()(),e.TgZ(193,"p"),e._uU(194,"Methods for destruction are also provided:"),e.qZA(),e.TgZ(195,"ul")(196,"li")(197,"code"),e._uU(198,"message.remove(id)"),e.qZA(),e._uU(199," // Remove the message with the specified id. When the id is empty, remove all messages (the message id is returned by the above method)"),e.qZA()(),e.TgZ(200,"h3",38)(201,"span"),e._uU(202,"Global Configuration"),e.qZA(),e.TgZ(203,"a",39),e._uU(204,"#"),e.qZA()(),e.TgZ(205,"p"),e._uU(206,"You can use "),e.TgZ(207,"code"),e._uU(208,"NzConfigService"),e.qZA(),e._uU(209," to configure this component globally. Please check the "),e.TgZ(210,"a",40),e._uU(211,"Global Configuration"),e.qZA(),e._uU(212," chapter for more information."),e.qZA(),e.TgZ(213,"table")(214,"thead")(215,"tr")(216,"th"),e._uU(217,"Argument"),e.qZA(),e.TgZ(218,"th"),e._uU(219,"Description"),e.qZA(),e.TgZ(220,"th"),e._uU(221,"Type"),e.qZA(),e.TgZ(222,"th"),e._uU(223,"Default"),e.qZA()()(),e.TgZ(224,"tbody")(225,"tr")(226,"td"),e._uU(227,"nzDuration"),e.qZA(),e.TgZ(228,"td"),e._uU(229,"Duration (milliseconds), does not disappear when set to 0"),e.qZA(),e.TgZ(230,"td")(231,"code"),e._uU(232,"number"),e.qZA()(),e.TgZ(233,"td")(234,"code"),e._uU(235,"3000"),e.qZA()()(),e.TgZ(236,"tr")(237,"td"),e._uU(238,"nzMaxStack"),e.qZA(),e.TgZ(239,"td"),e._uU(240,"The maximum number of messages that can be displayed at the same time"),e.qZA(),e.TgZ(241,"td")(242,"code"),e._uU(243,"number"),e.qZA()(),e.TgZ(244,"td")(245,"code"),e._uU(246,"7"),e.qZA()()(),e.TgZ(247,"tr")(248,"td"),e._uU(249,"nzPauseOnHover"),e.qZA(),e.TgZ(250,"td"),e._uU(251,"Do not remove automatically when mouse is over while setting to "),e.TgZ(252,"code"),e._uU(253,"true"),e.qZA()(),e.TgZ(254,"td")(255,"code"),e._uU(256,"boolean"),e.qZA()(),e.TgZ(257,"td")(258,"code"),e._uU(259,"true"),e.qZA()()(),e.TgZ(260,"tr")(261,"td"),e._uU(262,"nzAnimate"),e.qZA(),e.TgZ(263,"td"),e._uU(264,"Whether to turn on animation"),e.qZA(),e.TgZ(265,"td")(266,"code"),e._uU(267,"boolean"),e.qZA()(),e.TgZ(268,"td")(269,"code"),e._uU(270,"true"),e.qZA()()(),e.TgZ(271,"tr")(272,"td"),e._uU(273,"nzTop"),e.qZA(),e.TgZ(274,"td"),e._uU(275,"Distance from top"),e.qZA(),e.TgZ(276,"td")(277,"code"),e._uU(278,"number | string"),e.qZA()(),e.TgZ(279,"td")(280,"code"),e._uU(281,"24"),e.qZA()()(),e.TgZ(282,"tr")(283,"td"),e._uU(284,"nzDirection"),e.qZA(),e.TgZ(285,"td"),e._uU(286,"Direction of the text in the messages"),e.qZA(),e.TgZ(287,"td")(288,"code"),e._uU(289,"'ltr' | 'rtl'"),e.qZA()(),e.TgZ(290,"td"),e._uU(291,"-"),e.qZA()()()(),e.TgZ(292,"h3",41)(293,"span"),e._uU(294,"NzMessageRef"),e.qZA(),e.TgZ(295,"a",42),e._uU(296,"#"),e.qZA()(),e.TgZ(297,"p"),e._uU(298,"It's the object that returned when you call "),e.TgZ(299,"code"),e._uU(300,"NzMessageService.success"),e.qZA(),e._uU(301," and others."),e.qZA(),e.TgZ(302,"pre",15)(303,"code")(304,"span",16),e._uU(305,"export"),e.qZA(),e._uU(306," "),e.TgZ(307,"span",16),e._uU(308,"interface"),e.qZA(),e._uU(309," "),e.TgZ(310,"span",43),e._uU(311,"NzMessageRef"),e.qZA(),e._uU(312," "),e.TgZ(313,"span",17),e._uU(314,"{"),e.qZA(),e._uU(315,"\n  messageId"),e.TgZ(316,"span",17),e._uU(317,":"),e.qZA(),e._uU(318," "),e.TgZ(319,"span",16),e._uU(320,"string"),e.qZA(),e.TgZ(321,"span",17),e._uU(322,";"),e.qZA(),e._uU(323,"\n  onClose"),e.TgZ(324,"span",17),e._uU(325,":"),e.qZA(),e._uU(326," Subject"),e.TgZ(327,"span",44),e._uU(328,"<"),e.qZA(),e.TgZ(329,"span",16),e._uU(330,"false"),e.qZA(),e.TgZ(331,"span",44),e._uU(332,">"),e.qZA(),e.TgZ(333,"span",17),e._uU(334,";"),e.qZA(),e._uU(335," "),e.TgZ(336,"span",45),e._uU(337,"// It would emit an event when the message is closed"),e.qZA(),e._uU(338,"\n"),e.TgZ(339,"span",17),e._uU(340,"}"),e.qZA()()(),e.fQ9(),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(47),e.Q6J("nzGutter",16),e.xp6(1),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-message-demo-info")("nzLink","components-message-demo-info")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/info.md"),e.xp6(5),e.Q6J("nzId","components-message-demo-duration")("nzLink","components-message-demo-duration")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/duration.md"),e.xp6(11),e.Q6J("nzId","components-message-demo-close")("nzLink","components-message-demo-close")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/close.md"),e.xp6(8),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-message-demo-other")("nzLink","components-message-demo-other")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/other.md"),e.xp6(5),e.Q6J("nzId","components-message-demo-loading")("nzLink","components-message-demo-loading")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/loading.md"))},directives:[A.$,p.IT,p.Fp,l.Ls,m.w,Z.xH,Z.xw,z.SK,z.t3,d.G,q,C,M,D,b],encapsulation:2}),o})(),v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[f.G,..._,T.Bz.forChild([{path:"en",component:N},{path:"zh",component:U}])]]}),o})()}}]);