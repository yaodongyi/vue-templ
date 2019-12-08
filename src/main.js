/*
 * @Author: yaodongyi
 * @Date: 2019-12-06 16:26:12
 * @Description: 
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import js
import '@utils/prototype' /* 重写prototype */;
import '@utils/rem';
import '@tools/vant.js';

import Navigation from 'vue-navigation' /* 缓存navigation */;
Vue.use(Navigation, { router });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
