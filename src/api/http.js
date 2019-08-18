import axios from 'axios';
import Vue from 'vue';
const instance = axios.create({ timeout: 1000 * 12 });
// 请求拦截
instance.interceptors.request.use(config => {
  Vue.prototype.$loading.show();
  return config;
}, error => {
  return Promise.reject(error);
})
// 响应拦截
instance.interceptors.response.use(response => {
  // console.log(Vue.prototype.$loading);
  Vue.prototype.$loading.close();
  // this.$loading.hide()
  return response;
}, error => {
  return Promise.reject(error);
})


export default instance;