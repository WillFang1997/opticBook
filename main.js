import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

//挂载全局变量okayapiHost AppKey AppSecrect
Vue.prototype.user="";
Vue.prototype.okayapiHost="https://hn216.api.okayapi.com/";
Vue.prototype.okayApiAppKey="90FA8105FF31C9DDB89274C01CC3A6C6";
Vue.prototype.okayApiAppSecrect="YgCeB4GTVuxEvOBBc9jPvyZfzH9DVHVPntZ16KisC6kylGZIwIzYkmsJrhWE7J0Ry7IC";

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
