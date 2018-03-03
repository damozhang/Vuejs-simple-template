require('./bootstrap');

window.Vue = require('vue');

import axios from 'axios';
Vue.prototype.$http = axios;

const app = new Vue({
  el: '#app',
  components: {
    "site-header": require('./components/Header.vue'),
    "site-footer": require('./components/Footer.vue')
  }
});
