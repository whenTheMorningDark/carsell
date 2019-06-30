/* eslint-disable indent */
import Vue from 'vue';
import Router from 'vue-router';
import Home from 'pages/home/home';
import Detail from 'pages/detail/detail';
import Login from 'pages/login/login';
import Tel from 'pages/tel';
import Order from 'pages/order';
import My from 'pages/my';
Vue.use(Router)
Router.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}

// 或者你可以新建一个方法
Router.prototype.goBack = function () {
  this.isBack = true
  this.go(-1)
}
export default new Router({
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      // eslint-disable-next-line indent
      keepAlive: true
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: {
      // eslint-disable-next-line indent
      keepAlive: true,
      require: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tel',
    name: 'tel',
    component: Tel
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/',
    redirect: '/home'
  }
  ]
})
