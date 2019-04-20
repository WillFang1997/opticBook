(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/im-chat/chatinput"],{"02b3":function(t,n,e){"use strict";var u=e("f0c1"),i=e.n(u);i.a},"24c6":function(t,n,e){"use strict";e.r(n);var u=e("7f67"),i=e("4ef0");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("02b3");var c=e("2877"),o=Object(c["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},4452:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"chat-input",data:function(){return{inputValue:""}},methods:{startRecognize:function(){var t={},n=this;t.engine="iFly",n.inputValue="",plus.speech.startRecognize(t,function(t){console.log(t),n.inputValue+=t},function(t){console.log("语音识别失败："+t.message)})},sendMessge:function(){var t=this;""==t.inputValue.trim()?t.inputValue="":(this.$emit("send-message",{type:"text",content:t.inputValue}),t.inputValue="")}}};n.default=u},"4ef0":function(t,n,e){"use strict";e.r(n);var u=e("4452"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=i.a},"7f67":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return i})},f0c1:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/im-chat/chatinput-create-component',
    {
        'components/im-chat/chatinput-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("24c6"))
        })
    },
    [['components/im-chat/chatinput-create-component']]
]);                
