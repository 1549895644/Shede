// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import defaultStore from "./store"

// 常量的书写规范一般都是大写的
Vue.prototype.IWEN = "iwen";
const store = defaultStore();

// 动态注册模块
store.registerModule('moduleC', {
  state:{
    moduleCCount:1000
  }
})

// 取消动态注册模块
store.unregisterModule("moduleC");

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // 注入
  components: { App },
  template: '<App/>'
})
