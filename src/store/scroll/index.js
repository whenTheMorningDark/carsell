import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getter'
import mutations from './mutations'
import state from './state'
Vue.use(Vuex);
export default {
  namespaced: true,  // 多出的一行
  state,
  mutations,
  actions,
  getters
};