(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-notice-bar/uni-notice-bar"],{"0988":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"6635"))},o={name:"uni-notice-bar",components:{uniIcon:i},props:{text:String,moreText:String,backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},single:{type:[String,Boolean],default:!1},scrollable:{type:[String,Boolean],default:!1},showIcon:{type:[String,Boolean],default:!1},showGetMore:{type:[String,Boolean],default:!1},showClose:{type:[String,Boolean],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,show:!0,animation:""}},watch:{text:function(t,n){var e=this;this.$nextTick(function(){setTimeout(e.setAnimation,200)})}},onReady:function(){this.setAnimation()},methods:{clickMore:function(){this.$emit("getmore")},onClick:function(n){var e=n.touches?n.touches[0]?n.touches[0].clientX:n.changedTouches[0].clientX:n.detail.clientX;t.upx2px(48)+12>e&&"true"===String(this.showClose)&&(this.show=!1,this.$emit("close")),this.$emit("click")},setAnimation:function(){var n=this;!1!==this.scrollable&&"false"!==this.scrollable&&t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){n.animation="notice ".concat(t[0].width/n.speed,"s linear infinite both")})}}};n.default=o}).call(this,e("543d")["default"])},"5e7e":function(t,n,e){"use strict";e.r(n);var i=e("0988"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"7c86":function(t,n,e){"use strict";e.r(n);var i=e("ba97"),o=e("5e7e");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("933a");var c=e("2877"),u=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},"933a":function(t,n,e){"use strict";var i=e("a5ac"),o=e.n(i);o.a},a5ac:function(t,n,e){},ba97:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7c86"))
        })
    },
    [['components/uni-notice-bar/uni-notice-bar-create-component']]
]);                
