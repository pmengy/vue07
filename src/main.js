import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
