(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"52db":function(n,t,e){"use strict";e.r(t);var a=e("ba6c"),u=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);t["default"]=u.a},ac1a:function(n,t,e){"use strict";e.r(t);var a=e("ff4a"),u=e("52db");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("ad3b");var o=e("2877"),r=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},ad3b:function(n,t,e){"use strict";var a=e("e169"),u=e.n(a);u.a},ba6c:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"uni-collapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(t,e){t.isOpen&&n.push(t.nameSync)}),this.$emit("change",n)}}};t.default=a},e169:function(n,t,e){},ff4a:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ac1a"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);                
