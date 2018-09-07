import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
  state: state,
  mutations: mutations,   //突变
  plugins: [createPersistedState()] 
})