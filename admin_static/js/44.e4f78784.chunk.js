(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{446:function(e,t,a){(function(e,n){var r;!function(l){var o=t,c=(e&&e.exports,"object"==typeof n&&n);c.global!==c&&c.window;var i=function(e){this.message=e};(i.prototype=new Error).name="InvalidCharacterError";var u=function(e){throw new i(e)},m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=/[\t\n\f\r ]/g,d={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&u("The string to be encoded contains characters outside of the Latin1 range.");for(var t,a,n,r,l=e.length%3,o="",c=-1,i=e.length-l;++c<i;)t=e.charCodeAt(c)<<16,a=e.charCodeAt(++c)<<8,n=e.charCodeAt(++c),o+=m.charAt((r=t+a+n)>>18&63)+m.charAt(r>>12&63)+m.charAt(r>>6&63)+m.charAt(63&r);return 2==l?(t=e.charCodeAt(c)<<8,a=e.charCodeAt(++c),o+=m.charAt((r=t+a)>>10)+m.charAt(r>>4&63)+m.charAt(r<<2&63)+"="):1==l&&(r=e.charCodeAt(c),o+=m.charAt(r>>2)+m.charAt(r<<4&63)+"=="),o},decode:function(e){var t=(e=String(e).replace(s,"")).length;t%4==0&&(t=(e=e.replace(/==?$/,"")).length),(t%4==1||/[^+a-zA-Z0-9\/]/.test(e))&&u("Invalid character: the string to be decoded is not correctly encoded.");for(var a,n,r=0,l="",o=-1;++o<t;)n=m.indexOf(e.charAt(o)),a=r%4?64*a+n:n,r++%4&&(l+=String.fromCharCode(255&a>>(-2*r&6)));return l},version:"0.1.0"};void 0===(r=function(){return d}.call(t,a,t,e))||(e.exports=r)}()}).call(this,a(202)(e),a(83))},697:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),l=a(29),o=a(12),c=a(13),i=a(6),u=a(0),m=a.n(u),s=a(21),d=a(41),h=a(15),p=a(28),f=a(4),_=(a(5),a(93)),b=a(42);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}var N=a(446),g=function(e){Object(o.a)(a,e);var t=E(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).onHandle=function(){var e=Object(l.a)(r),t=r.props.match.params.model;try{var a=JSON.parse(N.decode(t));void 0==a.stat&&(a.stat=2),a.uid!=e.state.model.uid?(console.log(a),e.setState({model:a},function(){e.props.getReportByAgent(a.uid,a.s_id,a.e_id,function(t){e.setState({list:t.summary_list,nav_list:t.nav_list,current_role:t.current_role,child_role:Object(f.g)(t.current_role)})},a.stat)})):console.log(a.uid+" == "+e.state.model.uid)}catch(n){console.log(n),alert(n),_.a.goBack()}},r.gotoNext=function(e,t,a){var n=r.state.model;1===t||"\u4e0b\u7ea7\u98de\u5355"===a?_.a.push({pathname:"/report/orderlist/"+N.encode(JSON.stringify({uid:e,s_date:n.s_date,s_id:n.s_id,s_period:n.s_period,e_date:n.e_date,e_id:n.e_id,e_period:n.e_period,stat:n.stat,from:"agent2"}))}):"\u624b\u52a8\u98de\u5355"===a?_.a.push({pathname:"/report/transfer/"+N.encode(JSON.stringify({uid:e,s_date:n.s_date,s_id:n.s_id,s_period:n.s_period,e_date:n.e_date,e_id:n.e_id,e_period:n.e_period,stat:n.stat,from:"agent2"}))}):_.a.push({pathname:"/report/agent2/"+N.encode(JSON.stringify({uid:e,s_date:n.s_date,s_id:n.s_id,s_period:n.s_period,e_date:n.e_date,e_id:n.e_id,e_period:n.e_period,stat:n.stat}))})},r.gotoNav=function(e){var t=r.state.model;_.a.push({pathname:"/report/agent2/"+N.encode(JSON.stringify({uid:e,s_date:t.s_date,s_id:t.s_id,s_period:t.s_period,e_date:t.e_date,e_id:t.e_id,stat:t.stat,e_period:t.e_period}))})},r.goBack=function(){_.a.goBack()},r.htmlNumber=function(e){return e>=0?Object(f.e)(e,2):m.a.createElement("font",{color:"red"},Object(f.e)(e,2))},r.sum=function(e,t){var a=0;return e.forEach(function(e){a+=e[t]}),a},r.getTrData=function(e,t,a,n){return m.a.createElement("tr",null,m.a.createElement("td",null,e.user.name,e.role===a?"":"[",m.a.createElement("span",{style:{color:"green"}},e.role===a?"":e.role_name),e.role===a?"":"]",t>20&&e.role>1&&e.role===a&&m.a.createElement("span",{style:{cursor:"pointer",color:"red"},onClick:r.gotoNext.bind(Object(l.a)(r),e.uid,e.role,"\u4e0b\u7ea7\u98de\u5355")},"\u300c\u4e0b\u7ea7\u98de\u5355\u300d")),m.a.createElement("td",{onClick:r.gotoNext.bind(Object(l.a)(r),e.uid,e.role,e.role_name),style:{cursor:"pointer",color:"red"}},r.htmlNumber(e.total_count)),m.a.createElement("td",null,e.member_count),m.a.createElement("td",null,r.htmlNumber(e.all_total_amount)),m.a.createElement("td",null,r.htmlNumber(e.total_amount)),m.a.createElement("td",null,r.htmlNumber(e.op1.pay_amout)),m.a.createElement("td",null,r.htmlNumber(e.op1.fee_in)),m.a.createElement("td",null,r.htmlNumber(e.op1.final_profit)),a>1&&m.a.createElement("td",{className:"colBg1"},r.htmlNumber(e["op"+a].amount)),a>1&&m.a.createElement("td",{className:"colBg1"},r.htmlNumber(e["op"+a].pay_amout)),a>1&&m.a.createElement("td",{className:"colBg1"},r.htmlNumber(-1*e["op"+a].fee_out)),a>1&&m.a.createElement("td",{className:"colBg1"},r.htmlNumber(e["op"+a].final_profit)),m.a.createElement("td",{className:"colBg2"},r.htmlNumber(e["op"+t].amount)),m.a.createElement("td",{className:"colBg2"},r.htmlNumber(e["op"+t].pay_amout)),m.a.createElement("td",{className:"colBg2"},r.htmlNumber(-1*e["op"+t].fee_out)),m.a.createElement("td",{className:"colBg2"},r.htmlNumber(e["op"+t].profit)),m.a.createElement("td",{className:"colBg2"},r.htmlNumber(e["op"+t].fee_in)),m.a.createElement("td",{className:"colBg2"},r.htmlNumber(e["op"+t].final_profit)))},r.state={inited:!1,totalVO:{total_amount:0,total_yoji:0,total_profit:0,total_final_profit:0},current_role:20,child_role:20,list:[],nav_list:[],model:{uid:"",s_date:"",s_id:"",s_period:"",e_date:"",e_id:"",stat:2,e_period:""}},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.onHandle()}},{key:"componentWillReceiveProps",value:function(){this.onHandle()}},{key:"render",value:function(){var e=this,t=this.state,a=t.list,n=t.current_role,r=t.child_role,l=t.nav_list,o=t.model;return m.a.createElement("div",{className:"page-wrapper"},m.a.createElement("div",{className:"titlebar"},m.a.createElement("h3",{style:{left:"70px"}},"\u62a5\u88682 [",m.a.createElement("font",{color:"red"},0==o.stat?"\u672a\u7ed3\u7b97":"\u5df2\u7ed3\u7b97"),"]",l.map(function(t){return o.uid===t.uid?m.a.createElement("span",{style:{fontSize:"12px",color:"#999"}}," - ",Object(f.i)(t.role),"[",t.username,"]"):m.a.createElement("span",{style:{fontSize:"12px"}}," - ",Object(f.i)(t.role),"[",m.a.createElement(s.a,{to:"#",onClick:e.gotoNav.bind(e,t.uid),style:{fontSize:"12px"}},t.username),"]")}),"\xa0\xa0",m.a.createElement("span",{style:{fontSize:"12px",color:"#666"}},o.s_period.substring(4),"\u671f(",o.s_date,") - ",o.e_period.substring(4),"\u671f(",o.e_date,")  ")),m.a.createElement("button",{className:"btn",style:{marginLeft:"6px"},onClick:this.goBack.bind(this)},"\u8fd4\u56de")),m.a.createElement("div",{className:"tablelist "},m.a.createElement("table",{className:"table table-bordered table-hover"},m.a.createElement("thead",null,m.a.createElement("tr",{className:"bg1"},m.a.createElement("th",null,Object(f.i)(r)),m.a.createElement("th",null,"\u6ce8\u6570"),m.a.createElement("th",null,"\u4f1a\u5458\u6570"),m.a.createElement("th",null,"\u4e0b\u6ce8\u91d1\u989d"),m.a.createElement("th",null,"\u6709\u6548\u989d"),m.a.createElement("th",null,"\u4f1a\u5458\u6709\u6548\u989d"),m.a.createElement("th",null,"\u4f1a\u5458\u4f63\u91d1"),m.a.createElement("th",null,"\u4f1a\u5458\u76c8\u4e8f"),r>1&&m.a.createElement("th",null,Object(f.i)(r),"\u5360\u6210"),r>1&&m.a.createElement("th",null,Object(f.i)(r),"\u6709\u6548\u989d"),r>1&&m.a.createElement("th",null,Object(f.i)(r),"\u9000\u4f63"),r>1&&m.a.createElement("th",null,Object(f.i)(r),"\u76c8\u4e8f"),m.a.createElement("th",null,Object(f.i)(n),"\u5360\u6210"),m.a.createElement("th",null,Object(f.i)(n),"\u6709\u6548\u989d"),m.a.createElement("th",null,Object(f.i)(n),"\u9000\u4f63"),m.a.createElement("th",null,Object(f.i)(n),"\u5360\u6210\u76c8\u4e8f"),m.a.createElement("th",null,Object(f.i)(n),"\u8d5a\u4f63"),m.a.createElement("th",null,Object(f.i)(n),"\u76c8\u4e8f"))),m.a.createElement("tbody",{className:"tr fn-hover"},a.map(function(t,a){return e.getTrData(t,n,r,a)})),m.a.createElement("tfoot",{className:"tr bold"},m.a.createElement("tr",null,m.a.createElement("td",null,"\u603b\u8ba1"),m.a.createElement("td",null,this.htmlNumber(this.sum(a,"total_count"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a,"member_count"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a,"all_total_amount"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a,"total_amount"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e.op1}),"pay_amout"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e.op1}),"fee_in"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e.op1}),"final_profit"))),r>1&&m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e["op"+r]}),"amount"))),r>1&&m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e["op"+r]}),"pay_amout"))),r>1&&m.a.createElement("td",null,this.htmlNumber(-1*this.sum(a.map(function(e){return e["op"+r]}),"fee_out"))),r>1&&m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e["op"+r]}),"final_profit"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e["op"+n]}),"amount"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e["op"+n]}),"pay_amout"))),m.a.createElement("td",null,this.htmlNumber(-1*this.sum(a.map(function(e){return e["op"+n]}),"fee_out"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e["op"+n]}),"profit"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e["op"+n]}),"fee_in"))),m.a.createElement("td",null,this.htmlNumber(this.sum(a.map(function(e){return e["op"+n]}),"final_profit"))))))))}}]),a}(u.Component);t.default=Object(d.g)(Object(p.a)(function(){return{}},function(e){return Object(h.c)({getReportByAgent:b.C},e)})(g))}}]);