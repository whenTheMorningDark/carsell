import Vue from 'vue';
import Vuex from 'vuex';
import detail from './detail';
import scroll from './scroll';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    detail,
    scroll
  },
});