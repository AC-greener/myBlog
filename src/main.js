import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import '@/assets/font/iconfont.css'
import 'animate.css'

//后台路由守卫
router.beforeEach((to, from, next) => {
  let RegExp = /^\/admin/;
  if(RegExp.test(to.path)) {
    next({path: '/login'})   //   重定向到/login路由下
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
