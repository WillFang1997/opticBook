(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/list2detail-detail/list2detail-detail"],{"7c80":function(t,e,n){"use strict";n.r(e);var a=n("a61a"),i=n("a571");for(var l in i)"default"!==l&&function(t){n.d(e,t,function(){return i[t]})}(l);n("fa70");var r=n("2877"),o=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"8b52":function(t,e,n){},"99ab":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"list-triplex-row",banner:{},htmlString:""}},onShareAppMessage:function(){return{title:this.banner.title,path:"/pages/template/list2detail-detail/list2detail-detail?detailDate="+JSON.stringify(this.banner)}},onLoad:function(e){try{this.banner=JSON.parse(decodeURIComponent(e.detailDate))}catch(n){this.banner=JSON.parse(e.detailDate)}this.getDetail(),t.setNavigationBarTitle({title:this.banner.title})},methods:{getDetail:function(){var e=this;t.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+this.banner.post_id,success:function(t){200==t.statusCode&&(e.htmlString=t.data.content.replace(/\\/g,"").replace(/<img/g,'<img style="display:none;"'))},fail:function(){console.log("fail")}})}}};e.default=n}).call(this,n("543d")["default"])},a571:function(t,e,n){"use strict";n.r(e);var a=n("99ab"),i=n.n(a);for(var l in a)"default"!==l&&function(t){n.d(e,t,function(){return a[t]})}(l);e["default"]=i.a},a61a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},fa70:function(t,e,n){"use strict";var a=n("8b52"),i=n.n(a);i.a}},[["a5c2","common/runtime","common/vendor"]]]);