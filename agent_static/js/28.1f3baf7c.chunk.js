(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{647:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(13),l=n(15),i=n(16),c=n(8),s=n(0),o=n.n(s),u=n(39),p=n(17),m=n(47),d=(n(4),n(76)),f=n(5),h=(n(63),n(57));function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var v=function(e){Object(l.a)(n,e);var t=g(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).onSubmit=function(){var e=document.getElementById("parent_uid").value;h.a.push({pathname:"/agent/user/"+e+"/"+r.state.role})},r.goBack=function(){h.a.goBack()},r.state={uid:"",parent_role:1,role:1,title:"",tname:"",list:[],loginer:{role:0}},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.parent_role,n=e.role,a=e.uid,r=this;f.a.isEqual(this.props.loginer,this.state.loginer)||this.setState({loginer:this.props.loginer}),r.setState({uid:a,parent_role:parseInt(t),role:parseInt(n),title:"\u65b0\u589e"+r.getRoleName(parseInt(n)),tname:r.getRoleName(parseInt(t))}),r.props.listUser(n,33,"",0,0,999999,function(e){r.setState({list:e.parent})})}},{key:"getRoleName",value:function(e){switch(e){case 999:return"\u4ee3\u74067";case 70:return"\u4ee3\u74066";case 60:return"\u4ee3\u74065";case 50:return"\u4ee3\u74064";case 40:return"\u4ee3\u74063";case 30:return"\u4ee3\u74062";case 20:return"\u4ee3\u7406";case 1:return"\u4f1a\u5458"}}},{key:"componentDidUpdate",value:function(e){f.a.isEqual(this.props.loginer,this.state.loginer)||this.setState({loginer:this.props.loginer})}},{key:"getRoleList",value:function(){var e=this.state.loginer.role,t=this.state.role,n=new Array;n=999===e?[999,70,60,50,40,30,20]:70===e?[70,60,50,40,30,20]:60===e?[60,50,40,30,20]:50===e?[50,40,30,20]:40===e?[40,30,20]:30===e?[30,20]:[20];for(var a=new Array,r=0;r<n.length;r++)n[r]>=t&&a.push(n[r]);return a}},{key:"render",value:function(){var e=this,t=this.state,n=t.list,a=t.title,r=t.tname,l=(t.uid,t.role);return o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"module"},o.a.createElement("div",{name:"module",id:"account_higher"},o.a.createElement("div",{class:"caption mt5 pb5"},o.a.createElement("div",{class:"fl"},o.a.createElement("i",{class:"ico ico-gold"}),a," ",o.a.createElement("input",{type:"button",value:"\u8fd4\u56de",class:"btn red fn-back",onClick:this.goBack.bind(this)}))),o.a.createElement("table",{class:"t-1 tc"},o.a.createElement("thead",null," ",o.a.createElement("tr",{class:"bg2"},o.a.createElement("td",{colSpan:"2"},"\u9009\u62e9\u4e0a\u7ea7"))," "),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{width:"20%",style:{textAlign:"right",paddingRight:"15px"}},"\u9009\u62e9\u4e0a\u7ea7",r),o.a.createElement("td",{style:{textAlign:"left",paddingLeft:"25px"}},o.a.createElement("select",{id:"parent_uid",name:"parentid",className:"za_select"},1!==l&&n.map(function(e){return o.a.createElement("option",{value:e.uid,selected:!0},e.username)}),1===l&&this.getRoleList().map(function(t,a){return o.a.createElement("optgroup",{label:e.getRoleName(t)},n.map(function(e,n){return e.role===t&&o.a.createElement("option",{value:e.uid,selected:!0},e.username)}))})))),o.a.createElement("tr",null," ",o.a.createElement("td",null)," ",o.a.createElement("td",{style:{textAlign:"left",paddingLeft:"25px"}},o.a.createElement("input",{type:"button",value:"\u63d0\u4ea4",onClick:this.onSubmit.bind(this)})," ")," ")," ")," "))," "))}}]),n}(s.Component);t.default=Object(u.g)(Object(m.a)(function(e){return{loginer:e.auth.user}},function(e){return Object(p.c)({listUser:d.z},e)})(v))}}]);