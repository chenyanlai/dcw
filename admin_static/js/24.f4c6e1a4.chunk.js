(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{443:function(e,t,a){"use strict";var n=a(9),l=a(10),r=a(12),i=a(13),o=a(6),u=a(0),s=a.n(u),c=(a(28),a(4),a(5));function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(o.a)(e);if(t){var l=Object(o.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var p=function(e){Object(r.a)(a,e);var t=d(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).onPage=function(e){e<=0||(l.setState({current_page:e}),l.props.onPage&&l.props.onPage(e))},l.getPageData=function(e,t){if(t.length<=12)return t;var a=new Array;return e<=2?(a.push(t[0]),a.push(t[1]),a.push(t[2]),a.push(t[3]),a.push(t[5]),a.push({idx:0,label:" . . . "}),a.push(t[t.length-5]),a.push(t[t.length-4]),a.push(t[t.length-3]),a.push(t[t.length-2]),a.push(t[t.length-1])):(a.push(t[e-3]),a.push(t[e-2]),a.push(t[e-1]),e<=t.length-1&&a.push(t[e]),e+1<=t.length-1&&(a.push(t[e+1]),t.length-5>e+2&&a.push({idx:0,label:" . . . "}),e+2<=t.length-5&&a.push(t[t.length-5]),e+2<=t.length-4&&a.push(t[t.length-4]),e+2<=t.length-3&&a.push(t[t.length-3]),e+2<=t.length-2&&a.push(t[t.length-2]),e+2<=t.length-1&&a.push(t[t.length-1]))),a},l.state={pager:{},list:[],total_page:1,current_page:1},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.pager;this.setData(e)}},{key:"componentDidUpdate",value:function(){var e=this.props.pager;this.setData(e)}},{key:"setData",value:function(e){if(!c.a.isEqual(e,this.state.pager)){var t=Math.floor(e.total/e.size);e.size%e.total!==0&&t++;for(var a=new Array,n=1;n<=t;n++)a.push({idx:n,label:n});var l=e.offset/e.size+1;this.setState({list:a,total_page:t,current_page:l,pager:e})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.current_page,n=t.total_page,l=t.list;return s.a.createElement("nav",{"aria-label":"Page navigation"},s.a.createElement("ul",{class:"pagination pagination-lg justify-content-center"},a>1&&s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",onClick:this.onPage.bind(this,1),href:"javascript:;",tabindex:"-1","aria-disabled":"true"},"\u9996\u9875")),1===a&&n>0&&s.a.createElement("li",{class:"page-item disabled"},s.a.createElement("a",{class:"page-link",href:"javascript:;",tabindex:"-1","aria-disabled":"true"},"\u4e0a\u4e00\u9801")),a>1&&s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",onClick:this.onPage.bind(this,a-1),href:"javascript:;",tabindex:"-1","aria-disabled":"true"},"\u4e0a\u4e00\u9801")),this.getPageData(a,l).map(function(t){return s.a.createElement("li",{className:a===t.idx?"page-item active":"page-item"},s.a.createElement("a",{onClick:e.onPage.bind(e,t.idx),className:"page-link",href:"javascript:;"},t.label))}),a===n&&s.a.createElement("li",{class:"page-item disabled"},s.a.createElement("a",{class:"page-link",href:"javascript:;",tabindex:"-1","aria-disabled":"true"},"\u4e0b\u4e00\u9801")),a<n&&s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",onClick:this.onPage.bind(this,a+1),href:"javascript:;",tabindex:"-1","aria-disabled":"true"},"\u4e0b\u4e00\u9801"))))}}]),a}(u.Component);t.a=p},444:function(e,t,a){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}a.d(t,"a",function(){return n})},689:function(e,t,a){"use strict";a.r(t);var n=a(444),l=a(9),r=a(10),i=a(29),o=a(12),u=a(13),s=a(6),c=a(0),d=a.n(c),p=a(21),m=a(41),f=a(15),h=a(28),g=a(4),y=(a(5),a(93),a(42)),b=a(443);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(s.a)(e);if(t){var l=Object(s.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var v=function(e){Object(o.a)(a,e);var t=_(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).sum=function(e,t){var a=0;return e.forEach(function(e){a+=e[t]}),a},n.onPage=function(e){var t=Object(i.a)(n),a=(e-1)*n.state.pageSize;n.props.listOrder(n.state.uid,n.state.lottery_id,"","",a,n.state.pageSize,function(e){console.log(e),t.setState({list:e.list,pager:e.pager,nav_list:e.nav_list})})},n.getRoleName=function(e){switch(e){case 1:return"\u4f1a\u5458";case 20:return"\u4ee3\u7406";case 30:return"\u4ee3\u74062";case 40:return"\u4ee3\u74063";case 50:return"\u4ee3\u74064";case 60:return"\u4ee3\u74065";case 70:return"\u4ee3\u74066";case 999:return"\u4ee3\u74067"}},n.htmlNumber=function(e){return e>=0?Object(g.e)(e):d.a.createElement("font",{color:"red"},Object(g.e)(e))},n.getItem=function(e){var t=document.getElementById("play_name_"+e).value,a=document.getElementById("algorithm_name_"+e).value,l=document.getElementById("alias_"+e).value.replace(/\s+/g,""),r=parseFloat(document.getElementById("period_amount_"+e).value),i=document.getElementById("created_at_"+e).value,o=document.getElementById("odds_"+e).value,u=0;null!=document.getElementById("fee_"+e)&&(u=document.getElementById("fee_"+e).value);var s=new Array;if("\u8fde\u7801"===t||"\u751f\u8096\u8fde"===t||"\u5c3e\u6570\u8fde"===t||"\u4e0d\u4e2d"===t||"\u591a\u9009\u4e2d\u4e00"===t||"\u7279\u5e73\u4e2d"===t||"\u5408\u8096"===t){var c,d=n.parseComboCount(a);if(-1!==l.indexOf("\u62d6")){var p=l.split("\u62d6"),m=n.parseStr(p[0]).split(","),f=n.parseStr(p[1]).split(",");c=Object(g.r)(m,f)}else if(-1!==l.indexOf("\u78b0")){var h=l.split("\u78b0"),y=n.parseStr(h[0]).split(","),b=n.parseStr(h[1]).split(",");c=Object(g.n)(y,b)}else{var _=l;c=Object(g.m)(_.split(","),d)}console.log(c);for(var v=0;v<c.length;v++)s.push({number:c[v],odds:o})}else s.push({number:l,odds:o});return{play_name:t,algorithm_name:a,alias:l,fee:u,period_amount:r,created_at:i,number_list:s}},n.parseStr=function(e){var t=e.indexOf("["),a=e.indexOf("]");return-1!==t&&-1!==a?e.substring(t+1,a):(-1!==t&&(e=e.substring(t+1)),-1!==a&&(e=e.substring(0,a)),e.replace(/\s+/g,""))},n.parseComboCount=function(e){var t={"\u5341\u4e8c":12,"\u5341\u4e00":11,"\u5341":10,"\u4e5d":9,"\u516b":8,"\u4e03":7,"\u516d":6,"\u4e94":5,"\u56db":4,"\u4e09":3,"\u4e8c":2,"\u4e00":1},a=e.substring(0,2),n=e.substring(0,1);return void 0!==t[a]?t[a]:t[n]},n.isModify=function(e,t){return void 0!==e[""+t]},n.onModify=function(e){var t=n.state.modify_idx;void 0===t[""+e]&&(t[""+e]=n.state.list[e],n.setState({modify_idx:t}))},n.cancelModify=function(e){var t=n.state.modify_idx,a=t[e+""];void 0!==a&&(document.getElementById("created_at_"+e).value=Object(g.a)(a.created_at,"yyyy-MM-dd hh:mm:ss"),document.getElementById("play_name_"+e).value=a.play_name,document.getElementById("algorithm_name_"+e).value=a.algorithm_name,document.getElementById("alias_"+e).value=a.alias,document.getElementById("period_amount_"+e).value=a.period_amount,document.getElementById("odds_"+e).value=Object(g.e)(a.number_list[0].odds),null!=document.getElementById("fee_"+e)&&(document.getElementById("fee_"+e).value=a.op999.yoji),delete t[e+""],n.setState({modify_idx:t}))},n.modifyCount=function(e){var t=0;for(var a in e)t++;return t},n.onSubmitChange=function(){var e=Object(i.a)(n),t=n.state.modify_idx,a=new Array;for(var l in t){var r=t[l],o=n.getItem(l);o.order_id=r.order_id,a.push(o)}console.log(a),n.props.updateOrder(a,function(t){e.setState({modify_idx:{}})})},n.state={inited:!1,pager:{},list:[],totalVO:{total_amount:0,total_yoji:0,total_profit:0,total_final_profit:0},pageSize:50,pageOffset:0,current_role:window.role,uid:"",nav_list:[],lottery_id:"hk_2021001",modify_idx:{}},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params,a=t.uid,n=t.lottery_id;this.props.listOrder(a,n,"","",0,this.state.pageSize,function(t){console.log(t),e.setState({list:t.list,pager:t.pager,nav_list:t.nav_list})}),e.setState({lottery_id:n,uid:a})}},{key:"getXiajiRole",value:function(e){return 999==e?70:20==e?1:e-10}},{key:"getShangjiRole",value:function(e){return 999==e?0:1==e?20:70==e?999:e+10}},{key:"getXiajiOP",value:function(e,t){var a=this.getXiajiRole(t),n=e["op"+a];return void 0===n||null===n?{fee_id:0,fee_out:0,final_profit:0}:0===n.fee_in&&0===n.fee_out?this.getXiajiOP(e,a):n}},{key:"getShangjiOP",value:function(e,t){var a=this.getShangjiRole(t),n=e["op"+a];return void 0===n||null===n?{fee_id:0,fee_out:0,final_profit:0}:0===n.fee_in&&0===n.fee_out?this.getShangjiOP(e,a):n}},{key:"render",value:function(){var e=this,t=this.state,a=t.list,n=t.pager,l=t.lottery_id,r=t.nav_list,i=t.modify_idx;return d.a.createElement("div",{className:"page-wrapper",style:{paddingBottom:"65px"}},d.a.createElement("div",{className:"titlebar"},d.a.createElement("h3",null,"\u6ce8\u55ae\u7ba1\u7406 - ",l.substring(7),"\u671f",r.map(function(t,a){return d.a.createElement("span",{style:{fontSize:"12px",color:"#999"}}," - ",e.getRoleName(t.role),"[",a===r.length-1&&d.a.createElement("label",{style:{color:"#000",fontSize:"14px"}},t.username," "),1!==t.role&&a!==r.length-1&&d.a.createElement(p.a,{to:"/admin/manage_order/"+t.uid},t.username),"]")}))),d.a.createElement("div",{className:"tablelist"},d.a.createElement("table",{className:"table table-bordered table-striped table-hover"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"\u5e8f\u53f7"),d.a.createElement("th",{width:"180"},"\u4e0b\u6ce8\u65f6\u95f4"),d.a.createElement("th",null,"\u9805\u76ee"),d.a.createElement("th",null,"\u73a9\u6cd5"),d.a.createElement("th",null,"\u6295\u6ce8\u53f7\u7801"),d.a.createElement("th",null,"\u5355\u6ce8\u91d1\u984d"),d.a.createElement("th",null,"\u6ce8\u6570/\u603b\u91d1\u989d"),d.a.createElement("th",null,"\u8d54\u7387"),1===r.length&&999===r[0].role&&d.a.createElement("th",null,"\u4f63\u91d1(%)"),d.a.createElement("th",null,"\u64cd\u4f5c"),d.a.createElement("th",null,"\u4ee3\u74067\u5360\u6210"),d.a.createElement("th",null,"\u4ee3\u74066\u5360\u6210"),d.a.createElement("th",null,"\u4ee3\u74065\u5360\u6210"),d.a.createElement("th",null,"\u4ee3\u74064\u5360\u6210"))),d.a.createElement("tbody",null,a.map(function(t,a){return d.a.createElement("tr",{key:"tr-"+a,className:e.isModify(i,a)?"table-danger":""},d.a.createElement("td",null,a+1),d.a.createElement("td",{width:"160",style:{padding:"10px 8px"}},d.a.createElement("input",{type:"text",id:"created_at_"+a,onChange:e.onModify.bind(e,a),style:{backgroundColor:"#fff",width:"100%"},defaultValue:Object(g.a)(t.created_at,"yyyy-MM-dd hh:mm:ss")})),d.a.createElement("td",{width:"80",style:{padding:"10px 8px"}},d.a.createElement("input",{onChange:e.onModify.bind(e,a),id:"play_name_"+a,type:"text",style:{backgroundColor:"#fff",width:"100%"},defaultValue:t.play_name})),d.a.createElement("td",{width:"80",style:{padding:"10px 8px"}},d.a.createElement("input",{onChange:e.onModify.bind(e,a),id:"algorithm_name_"+a,type:"text",style:{backgroundColor:"#fff",width:"100%"},defaultValue:t.algorithm_name})),d.a.createElement("td",{width:"350",style:{padding:"10px 8px"}},d.a.createElement("input",{onChange:e.onModify.bind(e,a),id:"alias_"+a,type:"text",style:{backgroundColor:"#fff",width:"100%",textAlign:"center"},defaultValue:t.alias})),d.a.createElement("td",{width:"80",style:{padding:"10px 8px"}},d.a.createElement("input",{onChange:e.onModify.bind(e,a),id:"period_amount_"+a,type:"text",style:{backgroundColor:"#fff",width:"100%"},defaultValue:t.period_amount})),d.a.createElement("td",null,t.number_list.length," / ",Object(g.e)(t.total_amount)),d.a.createElement("td",{width:"80",style:{padding:"10px 8px"}},d.a.createElement("input",{onChange:e.onModify.bind(e,a),id:"odds_"+a,type:"text",style:{backgroundColor:"#fff",width:"100%"},defaultValue:Object(g.e)(t.number_list[0].odds)})),1===r.length&&999===r[0].role&&d.a.createElement("td",{width:"80",style:{padding:"10px 8px"}},d.a.createElement("input",{onChange:e.onModify.bind(e,a),id:"fee_"+a,type:"text",style:{backgroundColor:"#fff",width:"100%"},defaultValue:Object(g.e)(t.op999.yoji)})),d.a.createElement("td",{width:"80",style:{paddingLeft:"10px"}},d.a.createElement("button",{onClick:e.cancelModify.bind(e,a),style:{display:e.isModify(i,a)?"block":"none"},className:"btn"},"\u64a4\u9500")),d.a.createElement("td",null,Object(g.e)(t.op999.amount)),d.a.createElement("td",null,Object(g.e)(t.op70.amount)),d.a.createElement("td",null,Object(g.e)(t.op60.amount)),d.a.createElement("td",null,Object(g.e)(t.op50.amount)))})))),d.a.createElement(b.a,{pager:n,onPage:this.onPage.bind(this)}),d.a.createElement("div",{className:"footbar",style:{left:"0px",zIndex:"99"}},this.modifyCount(i)>0&&d.a.createElement("button",{id:"submitBtn",className:"btn",onClick:this.onSubmitChange.bind(this)},"\u4fdd\u5b58",this.modifyCount(i),"\u6761\u4fee\u6539")))}}]),a}(c.Component);t.default=Object(m.g)(Object(h.a)(function(e){return Object(n.a)(e),{}},function(e){return Object(f.c)({listOrder:y.V,updateOrder:y.Ab},e)})(v))}}]);