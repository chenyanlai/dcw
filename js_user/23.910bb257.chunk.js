(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{465:function(t,e,a){"use strict";var r=a(9),l=a(10),n=a(11),s=a(12),i=a(6),o=a(0),c=a.n(o),u=a(44),m=a(15),p=a(30),_=a(4),d=a(3);function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,r=Object(i.a)(t);if(e){var l=Object(i.a)(this).constructor;a=Reflect.construct(r,arguments,l)}else a=r.apply(this,arguments);return Object(s.a)(this,a)}}var b=0,y=function(t){Object(n.a)(a,t);var e=h(a);function a(t){var l;return Object(r.a)(this,a),(l=e.call(this,t)).state={current_lottery:{close_tm_time:1611063e6,close_zm_time:1611063e6,done:0,lottery_id:"hk_2020001",lottery_type:"hk",luck_time:1611063e6,open_time:16103502e5,period:"2020020",status:0,tm:0,zm:0},lastes_lottery:{close_tm_time:1611063e6,close_zm_time:1611063e6,done:0,lottery_id:"hk_2020001",lottery_type:"hk",luck_time:1611063e6,open_time:16103502e5,period:"2020020",status:0,tm:0,zm:0},count_down:""},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){void 0===this.props.lastes_lottery||_.a.isEqual(this.props.lastes_lottery,this.state.lastes_lottery)||this.setState({lastes_lottery:this.props.lastes_lottery}),void 0===this.props.current_lottery||_.a.isEqual(this.props.current_lottery,this.state.current_lottery)||(this.setState({current_lottery:this.props.current_lottery}),this.countDownLottery(this.props.current_lottery))}},{key:"componentDidUpdate",value:function(t){_.a.isEqual(this.props.lastes_lottery,this.state.lastes_lottery)||this.setState({lastes_lottery:this.props.lastes_lottery}),_.a.isEqual(this.props.current_lottery,this.state.current_lottery)||(this.setState({current_lottery:this.props.current_lottery}),this.countDownLottery(this.props.current_lottery))}},{key:"formatDuration",value:function(t){t=Math.floor(t/1e3);var e=Math.floor(t/60);return e<60?e+"\u5206 "+t%60+"\u79d2":Math.floor(e/60)+"\u65f6 "+(e%=60)+"\u5206 "+t%60+"\u79d2"}},{key:"countDownLottery",value:function(t){var e=this;if(clearInterval(b),0===t.done)if(0==t.status){var a=t.open_time-(new Date).getTime();a>0?e.setState({count_down:"\u8ddd\u79bb\u5f00\u76d8:"+e.formatDuration(a)}):e.setState({count_down:"\u51c6\u5907\u5f00\u76d8"}),b=setInterval(function(){(a=t.open_time-(new Date).getTime())>0?e.setState({count_down:"\u8ddd\u79bb\u5f00\u76d8:"+e.formatDuration(a)}):e.setState({count_down:"\u51c6\u5907\u5f00\u76d8"})},1e3)}else if(1==t.status){var r=t.close_tm_time-(new Date).getTime();r>0?e.setState({count_down:"\u8ddd\u79bb\u5c01\u76d8:"+e.formatDuration(r)}):e.setState({count_down:"\u5373\u5c06\u5c01\u76d8"}),b=setInterval(function(){(r=t.close_tm_time-(new Date).getTime())>0?e.setState({count_down:"\u8ddd\u79bb\u5c01\u76d8:"+e.formatDuration(r)}):e.setState({count_down:"\u5373\u5c06\u5c01\u76d8"})},1e3)}else 2==t.status?e.setState({count_down:"\u5df2\u5c01\u76d8\uff0c\u7b49\u5f85\u5f00\u5956"}):3==t.status&&e.setState({count_down:"\u5df2\u5c01\u76d8\uff0c\u5df2\u5f00\u5956"});else e.setState({count_down:"\u5df2\u5c01\u76d8\uff0c\u5df2\u5f00\u5956"})}},{key:"render",value:function(){var t=this.state,e=(t.urrent_lottery,t.lastes_lottery),a=t.count_down;return c.a.createElement("div",{class:"bet-drawno"},e.done>=1?c.a.createElement("ul",null,c.a.createElement("li",{className:""},"\u5f00\u5956\uff1a"),c.a.createElement("li",{className:"ball "+Object(d.c)(e.n1)},e.n1),c.a.createElement("li",{className:"ball "+Object(d.c)(e.n2)},e.n2),c.a.createElement("li",{className:"ball "+Object(d.c)(e.n3)},e.n3),c.a.createElement("li",{className:"ball "+Object(d.c)(e.n4)},e.n4),c.a.createElement("li",{className:"ball "+Object(d.c)(e.n5)},e.n5),c.a.createElement("li",{className:"ball "+Object(d.c)(e.n6)},e.n6),c.a.createElement("li",{className:""},"+"),c.a.createElement("li",{className:"ball "+Object(d.c)(e.nt)},e.nt)):c.a.createElement("span",null,a))}}]),a}(o.Component);Object(u.g)(Object(p.a)(function(t){t.nav,t.auth;var e=t.heartbeat;return t.notify,{lastes_lottery:e.lastes_lottery,current_lottery:e.current_lottery}},function(t){return Object(m.c)({},t)})(y))},546:function(t,e,a){"use strict";a.r(e);var r=a(9),l=a(10),n=a(25),s=a(11),i=a(12),o=a(6),c=a(0),u=a.n(c),m=a(44),p=a(15),_=a(30),d=a(3),h=a(4),b=a(33);a(465);function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,r=Object(o.a)(t);if(e){var l=Object(o.a)(this).constructor;a=Reflect.construct(r,arguments,l)}else a=r.apply(this,arguments);return Object(i.a)(this,a)}}var f=function(t){Object(s.a)(a,t);var e=y(a);function a(t){var l;return Object(r.a)(this,a),(l=e.call(this,t)).onSelectBall=function(t){if(!l.state.isClosed){var e=l.state.ball_list;if(e[t].selected)delete e[t].selected;else{for(var a=l.state.max_size,r=0;r<e.length;r++)e[r].selected&&a--;if(a<=0)return void alert("\u6700\u591a\u9009\u62e9"+l.state.max_size+"\u4e2a\u53f7\u7801");e[t].selected=!0}l.setState({ball_list:e})}},l.onSubmitPreview=function(){var t=parseInt(document.getElementById("play_input").value,10);if(!(isNaN(t)||t<=0)){for(var e=new Array,a="",r=0,n=1,s=0;s<l.state.ball_list.length;s++){var i=l.state.ball_list[s];i.selected&&(a+=","+i.number,n=Object(d.g)(n*i.rate),r++)}r<2?alert("\u81f3\u5c11\u9700\u8981\u9009\u62e9"+l.state.min_size+"\u4e2a\u53f7\u7801"):(e.push({number:a.substring(1),rate:n,amount:t}),l.props.playOrder("\u8fc7\u5173",l.state.algorithm_name,e))}},l.onKeyDown=function(t){var e=t||window.event;e&&13==e.keyCode&&l.onSubmitPreview()},l.onCleanForm=function(){document.getElementById("play_input").value="";for(var t=l.state.ball_list,e=0;e<t.length;e++)delete t[e].selected;l.setState({ball_list:t})},l.renderBallTable3=function(t,e,a,r){return u.a.createElement("td",{style:{padding:"0px"}},u.a.createElement("table",{cellPadding:"0",cellSpacing:"0",className:"t-3 tc"},u.a.createElement("thead",null," ",u.a.createElement("tr",{class:"blue-bg"},u.a.createElement("th",{class:"t8-border-bottom"},r)," ")," "),u.a.createElement("tbody",{className:"fn-hover"},t.map(function(t,r){return u.a.createElement("tr",{key:"tr-"+t.number+r},u.a.createElement("td",{style:{height:"24px"},onClick:l.onSelectBall.bind(Object(n.a)(l),r+e)},u.a.createElement("label",{class:"t3-label"},u.a.createElement("input",{disabled:a,type:"radio",class:"fn_radio_select",checked:void 0!==t.selected}),"\xa0\xa0",u.a.createElement("span",{className:"quickbet sense",onClick:l.onSelectBall.bind(Object(n.a)(l),r+e)},Object(d.f)(t.rate)))))}))))},l.state={inited:!1,reset:!1,ball_list_a:[],ball_list:[],algorithm_name:"\u8fc7\u5173",min_size:2,max_size:8,isClosed:!0,current_lottery:{status:0},rate_item:{}},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({ball_list:this.state.ball_list_a}),h.a.isEqual(this.props.current_lottery,this.state.current_lottery)||this.setState({current_lottery:this.props.current_lottery,isClosed:1!==this.props.current_lottery.status}),this.props.getLiveOdds("\u8fc7\u5173")}},{key:"componentDidUpdate",value:function(t){if(h.a.isEqual(this.props.reset,this.state.reset)||(this.setState({reset:this.props.reset}),this.onCleanForm()),h.a.isEqual(this.props.current_lottery,this.state.current_lottery)||this.setState({current_lottery:this.props.current_lottery,isClosed:1!==this.props.current_lottery.status}),!h.a.isEqual(this.props.rate_item,this.state.rate_item))if(void 0===this.props.rate_item.rate_list)this.setState({rate_item:this.props.rate_item});else{var e=this.state.ball_list;0===e.length?this.setState({rate_item:this.props.rate_item,ball_list:this.props.rate_item.rate_list}):(this.props.rate_item.rate_list.forEach(function(t,a){e[a].rate=t.rate}),this.setState({rate_item:this.props.rate_item,ball_list:e}))}}},{key:"render",value:function(){var t=this.state,e=t.ball_list,a=t.isClosed;return u.a.createElement("div",{className:a?"main lotteryClosed":"main"},u.a.createElement("table",{className:"t-ball tc",style:{marginTop:"15px"}},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{style:{padding:"0px"}},u.a.createElement("table",{cellPadding:"0",cellSpacing:"0",className:"t-3 tc"},u.a.createElement("thead",null," ",u.a.createElement("tr",{class:"blue-bg"}," ",u.a.createElement("th",{class:"t8-border-bottom"},"\u9879\u76ee"))," "),u.a.createElement("tbody",{className:"fn-hover"},e.slice(0,6).map(function(t,e){return u.a.createElement("tr",{key:"tr-"+t.number+e},u.a.createElement("td",{style:{height:"24px"}},t.number.substring(0,3)))})))),this.renderBallTable3(e.slice(0,6),0,a,"\u5355"),this.renderBallTable3(e.slice(6,12),6,a,"\u53cc"),this.renderBallTable3(e.slice(12,18),12,a,"\u5927"),this.renderBallTable3(e.slice(18,24),18,a,"\u5c0f"),this.renderBallTable3(e.slice(24,30),24,a,"\u7ea2\u6ce2"),this.renderBallTable3(e.slice(30,36),30,a,"\u7eff\u6ce2"),this.renderBallTable3(e.slice(36,42),36,a,"\u84dd\u6ce2")))),u.a.createElement("div",{class:"bet-btn"},u.a.createElement("span",null,"\u4e0b\u6ce8\u91d1\u989d\uff1a"),u.a.createElement("input",{type:"text",className:"w60 number",name:"bet_money",onKeyUp:this.onKeyDown.bind(this),id:"play_input",required:"",number:"true",maxlengththousands:"8",disabled:a}),"\xa0\xa0\xa0",u.a.createElement("input",{type:"button",value:"\u4e0b\u6ce8",style:{fontSize:"12px"},className:"sense_inp",onClick:this.onSubmitPreview,disabled:a})," \xa0\xa0",u.a.createElement("input",{type:"button",class:"fn_cancel_bet",value:"\u91cd\u7f6e",style:{fontSize:"12px"},onClick:this.onCleanForm,disabled:a})))}}]),a}(c.Component);e.default=Object(m.g)(Object(_.a)(function(t){var e=t.play,a=t.rate,r=t.heartbeat;return{reset:e.reset,rate_item:a.rate_item,current_lottery:r.current_lottery}},function(t){return Object(p.c)({playOrder:b.r,getLiveOdds:b.d},t)})(f))}}]);