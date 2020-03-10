import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

Vue.config.productionTip = true;
// const axios = require('axios');
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
