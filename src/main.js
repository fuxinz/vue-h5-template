import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import bus from '@/libs/bus'
import 'lib-flexible/flexible'
import 'reset-css/reset.css'
import Mint from 'mint-ui'
import { myInput, globalToast } from './components/index'
import filter from '@/libs/filter' // 过滤
import '@/assets/css/common.less'
import moment from 'moment'

Vue.use(Mint)
Vue.use(globalToast)
Vue.use(filter)

Vue.component('my-input', myInput) // 公共input

Vue.config.productionTip = false
Vue.prototype.$Bus = bus
Vue.prototype.moment = moment
Vue.prototype.$MessageBox = Mint.MessageBox

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
