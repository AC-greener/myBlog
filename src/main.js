import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import '@/assets/font/iconfont.css'
import 'animate.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
