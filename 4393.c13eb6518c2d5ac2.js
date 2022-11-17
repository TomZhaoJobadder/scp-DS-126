"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[4393],{4393:(O,u,d)=>{d.r(u),d.d(u,{NzDemoCheckboxModule:()=>y});var z=d(3238),k=d(4515),i=d(6202),p=d(4344);const Z=[i.Wr,p.sL];var s=d(1380),e=d(9724);let C=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-checkbox"]],viewQuery:function(n,t){if(1&n&&e.Gf(s.G,5),2&n){let a;e.iGM(a=e.CRH())&&(t.codeBoxes=a)}},decls:0,vars:0,template:function(n,t){},encapsulation:2}),o})();var _=d(3563),m=d(695),x=d(5760),g=d(8918),b=d(8741),h=d(5535),r=d(2552);let T=(()=>{class o{constructor(){this.checked=!0}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-checkbox-basic"]],decls:2,vars:1,consts:[["nz-checkbox","",3,"ngModel","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(l){return t.checked=l}),e._uU(1,"Checkbox"),e.qZA()),2&n&&e.Q6J("ngModel",t.checked)},directives:[i.Ie,r.JJ,r.On],encapsulation:2}),o})();var f=d(8238);let A=(()=>{class o{constructor(){this.isCheckedButton=!0,this.isDisabledButton=!1}checkButton(){this.isCheckedButton=!this.isCheckedButton}disableButton(){this.isDisabledButton=!this.isDisabledButton}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-checkbox-controller"]],decls:8,vars:10,consts:[[2,"margin-bottom","20px"],["nz-checkbox","",3,"ngModel","nzDisabled","ngModelChange"],["nz-button","",3,"nzType","nzSize","click"]],template:function(n,t){1&n&&(e.TgZ(0,"p",0)(1,"label",1),e.NdJ("ngModelChange",function(l){return t.isCheckedButton=l}),e._uU(2),e.qZA()(),e.TgZ(3,"p")(4,"button",2),e.NdJ("click",function(){return t.checkButton()}),e._uU(5),e.qZA(),e.TgZ(6,"button",2),e.NdJ("click",function(){return t.disableButton()}),e._uU(7),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("ngModel",t.isCheckedButton)("nzDisabled",t.isDisabledButton),e.xp6(1),e.AsE(" ",t.isCheckedButton?"Checked":"Unchecked"," - ",t.isDisabledButton?"Disabled":"Enabled"," "),e.xp6(2),e.Q6J("nzType","primary")("nzSize","small"),e.xp6(1),e.hij(" ",t.isCheckedButton?"Unchecked":"Checked"," "),e.xp6(1),e.Q6J("nzType","primary")("nzSize","small"),e.xp6(1),e.hij(" ",t.isDisabledButton?"Enabled":"Disabled"," "))},directives:[i.Ie,r.JJ,r.On,p.ix,f.dQ,g.w],styles:["button[_ngcontent-%COMP%]{margin-right:8px}"]}),o})(),U=(()=>{class o{constructor(){this.allChecked=!1,this.indeterminate=!0,this.checkOptionsOne=[{label:"Apple",value:"Apple",checked:!0},{label:"Pear",value:"Pear",checked:!1},{label:"Orange",value:"Orange",checked:!1}]}updateAllChecked(){this.indeterminate=!1,this.checkOptionsOne=this.checkOptionsOne.map(this.allChecked?n=>Object.assign(Object.assign({},n),{checked:!0}):n=>Object.assign(Object.assign({},n),{checked:!1}))}updateSingleChecked(){this.checkOptionsOne.every(n=>!n.checked)?(this.allChecked=!1,this.indeterminate=!1):this.checkOptionsOne.every(n=>n.checked)?(this.allChecked=!0,this.indeterminate=!1):this.indeterminate=!0}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-checkbox-check-all"]],decls:5,vars:3,consts:[[2,"border-bottom","1px solid rgb(233, 233, 233)"],["nz-checkbox","",3,"ngModel","nzIndeterminate","ngModelChange"],[3,"ngModel","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"label",1),e.NdJ("ngModelChange",function(l){return t.allChecked=l})("ngModelChange",function(){return t.updateAllChecked()}),e._uU(2," Check all "),e.qZA()(),e._UZ(3,"br"),e.TgZ(4,"nz-checkbox-group",2),e.NdJ("ngModelChange",function(l){return t.checkOptionsOne=l})("ngModelChange",function(){return t.updateSingleChecked()}),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngModel",t.allChecked)("nzIndeterminate",t.indeterminate),e.xp6(3),e.Q6J("ngModel",t.checkOptionsOne))},directives:[i.Ie,r.JJ,r.On,i.ub],encapsulation:2}),o})(),q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-checkbox-disabled"]],decls:3,vars:2,consts:[["nz-checkbox","","nzDisabled","",3,"ngModel"]],template:function(n,t){1&n&&e._UZ(0,"label",0)(1,"br")(2,"label",0),2&n&&(e.Q6J("ngModel",!1),e.xp6(2),e.Q6J("ngModel",!0))},directives:[i.Ie,r.JJ,r.On],encapsulation:2}),o})(),D=(()=>{class o{constructor(){this.checkOptionsOne=[{label:"Apple",value:"Apple",checked:!0},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],this.checkOptionsTwo=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear",checked:!0},{label:"Orange",value:"Orange"}],this.checkOptionsThree=[{label:"Apple",value:"Apple",disabled:!0,checked:!0},{label:"Pear",value:"Pear",disabled:!0},{label:"Orange",value:"Orange"}]}log(n){console.log(n)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-checkbox-group"]],decls:7,vars:3,consts:[[3,"ngModel","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"nz-checkbox-group",0),e.NdJ("ngModelChange",function(l){return t.checkOptionsOne=l})("ngModelChange",function(){return t.log(t.checkOptionsOne)}),e.qZA(),e._UZ(1,"br")(2,"br"),e.TgZ(3,"nz-checkbox-group",0),e.NdJ("ngModelChange",function(l){return t.checkOptionsTwo=l})("ngModelChange",function(){return t.log(t.checkOptionsTwo)}),e.qZA(),e._UZ(4,"br")(5,"br"),e.TgZ(6,"nz-checkbox-group",0),e.NdJ("ngModelChange",function(l){return t.checkOptionsThree=l})("ngModelChange",function(){return t.log(t.checkOptionsThree)}),e.qZA()),2&n&&(e.Q6J("ngModel",t.checkOptionsOne),e.xp6(3),e.Q6J("ngModel",t.checkOptionsTwo),e.xp6(3),e.Q6J("ngModel",t.checkOptionsThree))},directives:[i.ub,r.JJ,r.On],encapsulation:2}),o})(),N=(()=>{class o{log(n){console.log(n)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-checkbox-layout"]],decls:17,vars:1,consts:[[2,"width","100%",3,"nzOnChange"],["nz-row",""],["nz-col","","nzSpan","8"],["nz-checkbox","","nzValue","A",3,"ngModel"],["nz-checkbox","","nzValue","B"],["nz-checkbox","","nzValue","C"],["nz-checkbox","","nzValue","D"],["nz-checkbox","","nzValue","E"]],template:function(n,t){1&n&&(e.TgZ(0,"nz-checkbox-wrapper",0),e.NdJ("nzOnChange",function(l){return t.log(l)}),e.TgZ(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"A"),e.qZA()(),e.TgZ(5,"div",2)(6,"label",4),e._uU(7,"B"),e.qZA()(),e.TgZ(8,"div",2)(9,"label",5),e._uU(10,"C"),e.qZA()(),e.TgZ(11,"div",2)(12,"label",6),e._uU(13,"D"),e.qZA()(),e.TgZ(14,"div",2)(15,"label",7),e._uU(16,"E"),e.qZA()()()()),2&n&&(e.xp6(3),e.Q6J("ngModel",!0))},directives:[i.EZ,h.SK,h.t3,i.Ie,r.JJ,r.On],encapsulation:2}),o})(),v=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-checkbox"]],viewQuery:function(n,t){if(1&n&&e.Gf(s.G,5),2&n){let a;e.iGM(a=e.CRH())&&(t.codeBoxes=a)}},decls:317,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-checkbox-demo-basic","nzTitle","Basic"],["nzHref","#components-checkbox-demo-disabled","nzTitle","Disabled"],["nzHref","#components-checkbox-demo-controller","nzTitle","Controlled Checkbox"],["nzHref","#components-checkbox-demo-group","nzTitle","Checkbox Group"],["nzHref","#components-checkbox-demo-check-all","nzTitle","Check all"],["nzHref","#components-checkbox-demo-layout","nzTitle","Use with Grid"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//checkbox/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-checkbox-basic","nzGenerateCommand","ng g ng-zorro-antd:checkbox-basic <name>","nzComponentName","NzDemoCheckboxBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Controlled Checkbox","nzSelector","nz-demo-checkbox-controller","nzGenerateCommand","ng g ng-zorro-antd:checkbox-controller <name>","nzComponentName","NzDemoCheckboxControllerComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Check all","nzSelector","nz-demo-checkbox-check-all","nzGenerateCommand","ng g ng-zorro-antd:checkbox-check-all <name>","nzComponentName","NzDemoCheckboxCheckAllComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Disabled","nzSelector","nz-demo-checkbox-disabled","nzGenerateCommand","ng g ng-zorro-antd:checkbox-disabled <name>","nzComponentName","NzDemoCheckboxDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Checkbox Group","nzSelector","nz-demo-checkbox-group","nzGenerateCommand","ng g ng-zorro-antd:checkbox-group <name>","nzComponentName","NzDemoCheckboxGroupComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Use with Grid","nzSelector","nz-demo-checkbox-layout","nzGenerateCommand","ng g ng-zorro-antd:checkbox-layout <name>","nzComponentName","NzDemoCheckboxLayoutComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Usage"],["nzTitle","Installation"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","[nz-checkbox]"],[1,"api-type-label","directive"],["onclick","window.location.hash = '[nz-checkbox]'",1,"anchor"],["id","nz-checkbox-group"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-checkbox-group'",1,"anchor"],["id","nz-checkbox-wrapper"],["onclick","window.location.hash = 'nz-checkbox-wrapper'",1,"anchor"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(n,t){1&n&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(l){return t.goLink(l)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7)(9,"nz-link",8),e.qZA()(),e.TgZ(10,"section",9)(11,"h1"),e._uU(12,"Checkbox"),e._UZ(13,"span",10)(14,"span",11),e.TgZ(15,"a",12),e._UZ(16,"i",13),e.qZA()(),e.TgZ(17,"section",9),e.IAx(),e.TgZ(18,"p"),e._uU(19,"Checkbox."),e.qZA(),e.TgZ(20,"h2",14)(21,"span"),e._uU(22,"When To Use"),e.qZA(),e.TgZ(23,"a",15),e._uU(24,"#"),e.qZA()(),e.TgZ(25,"ul")(26,"li"),e._uU(27," Used for selecting multiple values from several options."),e.qZA(),e.TgZ(28,"li"),e._uU(29," If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted."),e.qZA()(),e.TgZ(30,"pre",16)(31,"code")(32,"span",17),e._uU(33,"import"),e.qZA(),e._uU(34," "),e.TgZ(35,"span",18),e._uU(36,"{"),e.qZA(),e._uU(37," NzCheckboxModule "),e.TgZ(38,"span",18),e._uU(39,"}"),e.qZA(),e._uU(40," "),e.TgZ(41,"span",17),e._uU(42,"from"),e.qZA(),e._uU(43," "),e.TgZ(44,"span",19),e._uU(45,"'ng-zorro-antd/checkbox'"),e.qZA(),e.TgZ(46,"span",18),e._uU(47,";"),e.qZA()()(),e.fQ9(),e.qZA()(),e.TgZ(48,"nz-tabset",20)(49,"nz-tab",21)(50,"div",22)(51,"div",23)(52,"nz-code-box",24),e._UZ(53,"nz-demo-checkbox-basic",25),e.TgZ(54,"div",26),e.IAx(),e.TgZ(55,"p"),e._uU(56,"Basic usage of checkbox."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(57,"nz-code-box",27),e._UZ(58,"nz-demo-checkbox-controller",25),e.TgZ(59,"div",26),e.IAx(),e.TgZ(60,"p"),e._uU(61,"Communicated with other components."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(62,"nz-code-box",28),e._UZ(63,"nz-demo-checkbox-check-all",25),e.TgZ(64,"div",26),e.IAx(),e.TgZ(65,"p"),e._uU(66,"The "),e.TgZ(67,"code"),e._uU(68,"nzIndeterminate"),e.qZA(),e._uU(69," property can help you to achieve a 'check all' effect."),e.qZA(),e.fQ9(),e.qZA()()(),e.TgZ(70,"div",23)(71,"nz-code-box",29),e._UZ(72,"nz-demo-checkbox-disabled",25),e.TgZ(73,"div",26),e.IAx(),e.TgZ(74,"p"),e._uU(75,"Disabled checkbox."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(76,"nz-code-box",30),e._UZ(77,"nz-demo-checkbox-group",25),e.TgZ(78,"div",26),e.IAx(),e.TgZ(79,"p"),e._uU(80,"Generate a group of checkboxes from an array."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(81,"nz-code-box",31),e._UZ(82,"nz-demo-checkbox-layout",25),e.TgZ(83,"div",26),e.IAx(),e.TgZ(84,"p"),e._uU(85,"We can use "),e.TgZ(86,"code"),e._uU(87,"nz-checkbox"),e.qZA(),e._uU(88," and Grid in "),e.TgZ(89,"code"),e._uU(90,"nz-checkbox-wrapper"),e.qZA(),e._uU(91,", to implement complex layout."),e.qZA(),e.fQ9(),e.qZA()()()()(),e.TgZ(92,"nz-tab",32),e._uU(93," Content of Tab Pane 2 "),e.qZA(),e._UZ(94,"nz-tab",33),e.qZA(),e.TgZ(95,"section",34),e.IAx(),e.TgZ(96,"h2",35)(97,"span"),e._uU(98,"API"),e.qZA(),e.TgZ(99,"a",36),e._uU(100,"#"),e.qZA()(),e.TgZ(101,"h3",37)(102,"span"),e._uU(103,"[nz-checkbox]"),e.qZA(),e.TgZ(104,"label",38),e._uU(105,"directive"),e.qZA(),e.TgZ(106,"a",39),e._uU(107,"#"),e.qZA()(),e.TgZ(108,"table")(109,"thead")(110,"tr")(111,"th"),e._uU(112,"Property"),e.qZA(),e.TgZ(113,"th"),e._uU(114,"Description"),e.qZA(),e.TgZ(115,"th"),e._uU(116,"Type"),e.qZA(),e.TgZ(117,"th"),e._uU(118,"Default"),e.qZA()()(),e.TgZ(119,"tbody")(120,"tr")(121,"td")(122,"code"),e._uU(123,"[nzId]"),e.qZA()(),e.TgZ(124,"td"),e._uU(125,"input id attribute inside the component"),e.qZA(),e.TgZ(126,"td")(127,"code"),e._uU(128,"string"),e.qZA()(),e.TgZ(129,"td"),e._uU(130,"-"),e.qZA()(),e.TgZ(131,"tr")(132,"td")(133,"code"),e._uU(134,"[nzAutoFocus]"),e.qZA()(),e.TgZ(135,"td"),e._uU(136,"get focus when component mounted"),e.qZA(),e.TgZ(137,"td")(138,"code"),e._uU(139,"boolean"),e.qZA()(),e.TgZ(140,"td")(141,"code"),e._uU(142,"false"),e.qZA()()(),e.TgZ(143,"tr")(144,"td")(145,"code"),e._uU(146,"[nzDisabled]"),e.qZA()(),e.TgZ(147,"td"),e._uU(148,"Disable checkbox"),e.qZA(),e.TgZ(149,"td")(150,"code"),e._uU(151,"boolean"),e.qZA()(),e.TgZ(152,"td")(153,"code"),e._uU(154,"false"),e.qZA()()(),e.TgZ(155,"tr")(156,"td")(157,"code"),e._uU(158,"[ngModel]"),e.qZA()(),e.TgZ(159,"td"),e._uU(160,"Specifies whether the checkbox is selected, double binding"),e.qZA(),e.TgZ(161,"td")(162,"code"),e._uU(163,"boolean"),e.qZA()(),e.TgZ(164,"td")(165,"code"),e._uU(166,"false"),e.qZA()()(),e.TgZ(167,"tr")(168,"td")(169,"code"),e._uU(170,"[nzIndeterminate]"),e.qZA()(),e.TgZ(171,"td"),e._uU(172,"set the status of indeterminate\uff0conly affect the style"),e.qZA(),e.TgZ(173,"td")(174,"code"),e._uU(175,"boolean"),e.qZA()(),e.TgZ(176,"td")(177,"code"),e._uU(178,"false"),e.qZA()()(),e.TgZ(179,"tr")(180,"td")(181,"code"),e._uU(182,"[nzValue]"),e.qZA()(),e.TgZ(183,"td"),e._uU(184,"use for the callback of "),e.TgZ(185,"code"),e._uU(186,"nz-checkbox-wrapper"),e.qZA()(),e.TgZ(187,"td")(188,"code"),e._uU(189,"any"),e.qZA()(),e.TgZ(190,"td"),e._uU(191,"-"),e.qZA()(),e.TgZ(192,"tr")(193,"td")(194,"code"),e._uU(195,"(ngModelChange)"),e.qZA()(),e.TgZ(196,"td"),e._uU(197,"The callback function that is triggered when the state changes."),e.qZA(),e.TgZ(198,"td")(199,"code"),e._uU(200,"EventEmitter<boolean>"),e.qZA()(),e.TgZ(201,"td"),e._uU(202,"-"),e.qZA()()()(),e.TgZ(203,"h3",40)(204,"span"),e._uU(205,"nz-checkbox-group"),e.qZA(),e.TgZ(206,"label",41),e._uU(207,"component"),e.qZA(),e.TgZ(208,"a",42),e._uU(209,"#"),e.qZA()(),e.TgZ(210,"table")(211,"thead")(212,"tr")(213,"th"),e._uU(214,"Property"),e.qZA(),e.TgZ(215,"th"),e._uU(216,"Description"),e.qZA(),e.TgZ(217,"th"),e._uU(218,"Type"),e.qZA(),e.TgZ(219,"th"),e._uU(220,"Default"),e.qZA()()(),e.TgZ(221,"tbody")(222,"tr")(223,"td")(224,"code"),e._uU(225,"[ngModel]"),e.qZA()(),e.TgZ(226,"td"),e._uU(227,"Specifies options, double binding"),e.qZA(),e.TgZ(228,"td")(229,"code"),e._uU(230,"Array<{ label: string; value: string; checked?: boolean; }>"),e.qZA()(),e.TgZ(231,"td")(232,"code"),e._uU(233,"[]"),e.qZA()()(),e.TgZ(234,"tr")(235,"td")(236,"code"),e._uU(237,"[nzDisabled]"),e.qZA()(),e.TgZ(238,"td"),e._uU(239,"Disable all checkboxes"),e.qZA(),e.TgZ(240,"td")(241,"code"),e._uU(242,"boolean"),e.qZA()(),e.TgZ(243,"td")(244,"code"),e._uU(245,"false"),e.qZA()()(),e.TgZ(246,"tr")(247,"td")(248,"code"),e._uU(249,"(ngModelChange)"),e.qZA()(),e.TgZ(250,"td"),e._uU(251,"The callback function that is triggered when the state changes."),e.qZA(),e.TgZ(252,"td")(253,"code"),e._uU(254,"EventEmitter<Array<{ label: string; value: string; checked?: boolean; }>>"),e.qZA()(),e.TgZ(255,"td"),e._uU(256,"-"),e.qZA()()()(),e.TgZ(257,"h3",43)(258,"span"),e._uU(259,"nz-checkbox-wrapper"),e.qZA(),e.TgZ(260,"label",41),e._uU(261,"component"),e.qZA(),e.TgZ(262,"a",44),e._uU(263,"#"),e.qZA()(),e.TgZ(264,"table")(265,"thead")(266,"tr")(267,"th"),e._uU(268,"Property"),e.qZA(),e.TgZ(269,"th"),e._uU(270,"Description"),e.qZA(),e.TgZ(271,"th"),e._uU(272,"Type"),e.qZA(),e.TgZ(273,"th"),e._uU(274,"Default"),e.qZA()()(),e.TgZ(275,"tbody")(276,"tr")(277,"td")(278,"code"),e._uU(279,"(nzOnChange)"),e.qZA()(),e.TgZ(280,"td"),e._uU(281,"The callback function that is triggered when the state changes."),e.qZA(),e.TgZ(282,"td")(283,"code"),e._uU(284,"EventEmitter<any[]>"),e.qZA()(),e.TgZ(285,"td"),e._uU(286,"-"),e.qZA()()()(),e.TgZ(287,"h2",45)(288,"span"),e._uU(289,"Methods"),e.qZA(),e.TgZ(290,"a",46),e._uU(291,"#"),e.qZA()(),e.TgZ(292,"h3",37)(293,"span"),e._uU(294,"[nz-checkbox]"),e.qZA(),e.TgZ(295,"label",38),e._uU(296,"directive"),e.qZA(),e.TgZ(297,"a",39),e._uU(298,"#"),e.qZA()(),e.TgZ(299,"table")(300,"thead")(301,"tr")(302,"th"),e._uU(303,"Name"),e.qZA(),e.TgZ(304,"th"),e._uU(305,"Description"),e.qZA()()(),e.TgZ(306,"tbody")(307,"tr")(308,"td"),e._uU(309,"focus()"),e.qZA(),e.TgZ(310,"td"),e._uU(311,"get focus"),e.qZA()(),e.TgZ(312,"tr")(313,"td"),e._uU(314,"blur()"),e.qZA(),e.TgZ(315,"td"),e._uU(316,"remove focus"),e.qZA()()()(),e.fQ9(),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(48),e.Q6J("nzGutter",16),e.xp6(1),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-checkbox-demo-basic")("nzLink","components-checkbox-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/basic.md"),e.xp6(5),e.Q6J("nzId","components-checkbox-demo-controller")("nzLink","components-checkbox-demo-controller")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/controller.md"),e.xp6(5),e.Q6J("nzId","components-checkbox-demo-check-all")("nzLink","components-checkbox-demo-check-all")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/check-all.md"),e.xp6(8),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-checkbox-demo-disabled")("nzLink","components-checkbox-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/disabled.md"),e.xp6(5),e.Q6J("nzId","components-checkbox-demo-group")("nzLink","components-checkbox-demo-group")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/group.md"),e.xp6(5),e.Q6J("nzId","components-checkbox-demo-layout")("nzLink","components-checkbox-demo-layout")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/checkbox/demo/layout.md"))},directives:[_.$,m.IT,m.Fp,x.Ls,g.w,b.xH,b.xw,h.SK,h.t3,s.G,T,A,U,q,D,N],encapsulation:2}),o})(),y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[k.G,...Z,z.Bz.forChild([{path:"en",component:v},{path:"zh",component:C}])]]}),o})()}}]);