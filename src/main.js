import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/clear.css'
import vPage from 'v-page'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'   
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
window.axios = axios

Vue.use(VueAxios,axios)
Vue.use(router)
Vue.use(vPage)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  render: h => h(App)
})
