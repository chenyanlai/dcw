(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{446:function(e,t,a){(function(e,n){var l;!function(r){var c=t,i=(e&&e.exports,"object"==typeof n&&n);i.global!==i&&i.window;var o=function(e){this.message=e};(o.prototype=new Error).name="InvalidCharacterError";var d=function(e){throw new o(e)},s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",y=/[\t\n\f\r ]/g,u={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&d("The string to be encoded contains characters outside of the Latin1 range.");for(var t,a,n,l,r=e.length%3,c="",i=-1,o=e.length-r;++i<o;)t=e.charCodeAt(i)<<16,a=e.charCodeAt(++i)<<8,n=e.charCodeAt(++i),c+=s.charAt((l=t+a+n)>>18&63)+s.charAt(l>>12&63)+s.charAt(l>>6&63)+s.charAt(63&l);return 2==r?(t=e.charCodeAt(i)<<8,a=e.charCodeAt(++i),c+=s.charAt((l=t+a)>>10)+s.charAt(l>>4&63)+s.charAt(l<<2&63)+"="):1==r&&(l=e.charCodeAt(i),c+=s.charAt(l>>2)+s.charAt(l<<4&63)+"=="),c},decode:function(e){var t=(e=String(e).replace(y,"")).length;t%4==0&&(t=(e=e.replace(/==?$/,"")).length),(t%4==1||/[^+a-zA-Z0-9\/]/.test(e))&&d("Invalid character: the string to be decoded is not correctly encoded.");for(var a,n,l=0,r="",c=-1;++c<t;)n=s.indexOf(e.charAt(c)),a=l%4?64*a+n:n,l++%4&&(r+=String.fromCharCode(255&a>>(-2*l&6)));return r},version:"0.1.0"};void 0===(l=function(){return u}.call(t,a,t,e))||(e.exports=l)}()}).call(this,a(202)(e),a(83))},695:function(e,t,a){"use strict";a.r(t);var n=a(94),l=a(9),r=a(10),c=a(12),i=a(13),o=a(6),d=a(0),s=a.n(d),y=a(41),u=a(15),m=a(28),p=a(4),f=(a(5),a(93)),h=a(42);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(o.a)(e);if(t){var l=Object(o.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var g=a(446),v=function(e){Object(c.a)(a,e);var t=b(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onSelectDate=function(e){var t=0,a=0,l=-1,r=-1;if("today"===e)t=a=parseInt(Object(p.a)((new Date).getTime(),"yyyyMMdd"));else if("yestoday"===e)t=a=parseInt(Object(p.a)((new Date).getTime()-864e5,"yyyyMMdd"));else if("this_week"===e){var c=(new Date).getDay();t=0===c?parseInt(Object(p.a)((new Date).getTime()-5184e5,"yyyyMMdd")):1===c?parseInt(Object(p.a)((new Date).getTime(),"yyyyMMdd")):parseInt(Object(p.a)((new Date).getTime()-24*(c-1)*6e4*60,"yyyyMMdd")),r=0}else if("last_week"===e){var i=(new Date).getDay();0===i?(t=parseInt(Object(p.a)((new Date).getTime()-5184e5-6048e5,"yyyyMMdd")),a=parseInt(Object(p.a)((new Date).getTime()-6048e5,"yyyyMMdd"))):1===i?(t=parseInt(Object(p.a)((new Date).getTime()-6048e5,"yyyyMMdd")),a=parseInt(Object(p.a)((new Date).getTime()+5184e5-6048e5,"yyyyMMdd"))):(t=parseInt(Object(p.a)((new Date).getTime()-24*(i-1)*6e4*60-6048e5,"yyyyMMdd")),a=parseInt(Object(p.a)((new Date).getTime()+24*(7-i)*6e4*60-6048e5,"yyyyMMdd")))}else if("this_month"===e){var o=(new Date).getDate();t=parseInt(Object(p.a)((new Date).getTime()-24*(o-1)*6e4*60,"yyyyMMdd")),r=0}else{var d=(new Date).getDate();t=parseInt(Object(p.a)((new Date).getTime()-24*(d-1)*6e4*60-2592e6,"yyyyMMdd")),a=parseInt(Object(p.a)((new Date).getTime()-24*d*6e4*60,"yyyyMMdd"))}console.log(t+" -- "+a);for(var s=n.state.list,y=0;y<s.length;y++){var u=s[y],m=parseInt(Object(p.a)(u.luck_time,"yyyyMMdd"));if(-1===r&&a>=m){r=y;break}a>m&&console.log("("+r+") "+a+">"+m)}for(var f=s.length-1;f>=0;f--){var h=s[f],b=parseInt(Object(p.a)(h.luck_time,"yyyyMMdd"));if(-1===l&&t<=b){l=f;break}}console.log(l+" -- "+r),-1!==l&&-1!==r?n.setState({s_idx:l,e_idx:r}):alert("\u62b1\u6b49\uff0c\u9009\u62e9\u7684\u65f6\u95f4\u8303\u56f4\u5185\u6682\u65e0\u6570\u636e\uff01")},n.onSubmit=function(){var e=parseInt(document.getElementById("start_sel").value),t=parseInt(document.getElementById("end_sel").value),a=n.getRadioButtonCheckedValue("Report"),l=n.state.list;if(e<t)alert("\u8bf7\u6b63\u786e\u9009\u62e9\u67e5\u8be2\u65e5\u671f");else if(e!=t&&l[t].done<2)alert("\u5f53\u524d\u300c"+l[t].period+"\u671f\u300d\u6ce8\u5355\u672a\u7ed3\u7b97\uff0c\u6682\u65f6\u65e0\u6cd5\u4e0e\u5176\u4ed6\u671f\u6570\u5408\u5e76\u67e5\u8be2\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u671f\u6570\uff01");else{var r={s_date:Object(p.a)(l[e].open_time,"yyyy-MM-dd"),s_id:l[e].lottery_id,s_period:l[e].period,e_date:Object(p.a)(l[t].luck_time,"yyyy-MM-dd"),e_id:l[t].lottery_id,e_period:l[t].period,stat:n.state.stat,uid:"me"};"1"===a?f.a.push({pathname:"/report/agent2/"+g.encode(JSON.stringify(r))}):f.a.push({pathname:"/report/pa_monthly2/"+g.encode(JSON.stringify(r))})}},n.changeStat=function(e){n.setState({stat:e})},n.state={inited:!1,start:"",end:"",totalVO:{total_amount:0,total_yoji:0,total_profit:0,total_final_profit:0},current_role:window.role,list:[],s_idx:0,e_idx:0,stat:1,uid:""},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;e.props.listAllLottery(0,50,function(t){console.log(t),e.setState({list:t.list},function(){e.onSelectDate("today")})})}},{key:"componentDidUpdate",value:function(e){}},{key:"getRadioButtonCheckedValue",value:function(e){for(var t=document.getElementsByName(e),a=0;a<t.length;a++){if(t[a].checked)return t[a].value}}},{key:"render",value:function(){var e,t=this.state,a=t.list,l=t.stat,r=t.s_idx,c=t.e_idx;return s.a.createElement("div",{className:"page-wrapper"},s.a.createElement("div",{className:"titlebar"},s.a.createElement("h3",null,"\u62a5\u88682")),s.a.createElement("table",{class:"table table-bordered"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"\u5f69\u79cd"),s.a.createElement("td",{style:{textAlign:"left",paddingLeft:"15px"}},s.a.createElement("select",{name:""},s.a.createElement("option",{value:""},"\u6fb3\u95e8\u516d\u5408\u5f69")))),s.a.createElement("tr",null,s.a.createElement("td",null,"\u65e5\u671f\u67e5\u8be2"),s.a.createElement("td",{style:{textAlign:"left",paddingLeft:"15px"}},s.a.createElement("select",{name:"StartDt",class:"vm",id:"start_sel"},a.map(function(e,t){return r===t?s.a.createElement("option",{selected:!0,value:t},Object(p.a)(e.open_time,"yyyy-MM-dd")," (",e.period,"\u671f)"):s.a.createElement("option",{value:t},Object(p.a)(e.open_time,"yyyy-MM-dd")," (",e.period,"\u671f)")})),"\xa0-\xa0",s.a.createElement("select",{name:"EndDt",class:"vm",id:"end_sel"},a.map(function(e,t){return c===t?s.a.createElement("option",{selected:!0,value:t},Object(p.a)(e.luck_time,"yyyy-MM-dd")," (",e.period,"\u671f)"):s.a.createElement("option",{value:t},Object(p.a)(e.luck_time,"yyyy-MM-dd")," (",e.period,"\u671f)")})),"\xa0\xa0",s.a.createElement("input",{type:"button",class:"fn-daterange vm",value:"\u4eca\u5929",onClick:this.onSelectDate.bind(this,"today")}),"\xa0\xa0",s.a.createElement("input",{type:"button",class:"fn-daterange vm",value:"\u6628\u5929",onClick:this.onSelectDate.bind(this,"yestoday")}),"\xa0\xa0",s.a.createElement("input",{type:"button",class:"fn-daterange vm",value:"\u672c\u5468",onClick:this.onSelectDate.bind(this,"this_week")}),"\xa0\xa0",s.a.createElement("input",{type:"button",class:"fn-daterange vm",value:"\u4e0a\u5468",onClick:this.onSelectDate.bind(this,"last_week")}),"\xa0\xa0",s.a.createElement("input",{type:"button",class:"fn-daterange vm",value:"\u672c\u6708",onClick:this.onSelectDate.bind(this,"this_month")}),"\xa0\xa0",s.a.createElement("input",{type:"button",class:"fn-daterange vm",value:"\u4e0a\u6708",onClick:this.onSelectDate.bind(this,"last_month")}))),s.a.createElement("tr",null,s.a.createElement("td",null,"\u7c7b\u522b"),s.a.createElement("td",{style:{textAlign:"left",paddingLeft:"15px"}},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"Report",value:"1",defaultChecked:!0})," \u603b\u8d26"),"\xa0\xa0",s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"Report",value:"2"})," \u5206\u7c7b\u8d26"))),s.a.createElement("tr",null,s.a.createElement("td",null,"\u7ed3\u7b97\u72b6\u6001"),s.a.createElement("td",{style:{textAlign:"left",paddingLeft:"15px"}},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"stat",value:"1",checked:1===l,onClick:this.changeStat.bind(this,1)})," \u5df2\u7ed3\u7b97")," \xa0\xa0",s.a.createElement("label",null,s.a.createElement("input",(e={type:"checkbox",name:"stat",value:"0"},Object(n.a)(e,"name","Report"),Object(n.a)(e,"checked",0===l),Object(n.a)(e,"onClick",this.changeStat.bind(this,0)),e))," \u672a\u7ed3\u7b97"))),s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",{style:{textAlign:"left",paddingLeft:"15px"}}," \u6ce8\u610f\uff1a\u67e5\u8be2\u671f\u6570\u8de8\u5ea6\u4e0d\u80fd\u8d85\u8fc7 13 \u671f\uff01 "))),s.a.createElement("tfoot",null," ",s.a.createElement("tr",null," ",s.a.createElement("td",null)," ",s.a.createElement("td",{style:{textAlign:"left",paddingLeft:"15px"}}," ",s.a.createElement("button",{type:"button",class:"btn",onClick:this.onSubmit.bind(this)},"\u67e5\u8be2")," ")," ")," ")))}}]),a}(d.Component);t.default=Object(y.g)(Object(m.a)(function(){return{}},function(e){return Object(u.c)({listAllLottery:h.L},e)})(v))}}]);