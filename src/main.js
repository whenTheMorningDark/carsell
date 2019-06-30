// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'common/js/rem.js'; // 引入适配移动端js
import 'common/style/index.scss';
import KaIcon from './index';
Vue.use(KaIcon);
import store from './store';
import Alert from 'components/Alert/src/alert.js';
import FastClick from 'fastclick'
// Vue.use(Loading);
FastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.prototype.$Alert = Alert;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
