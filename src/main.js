import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/style.css';

import App from './App.vue'
import router from './routes';

Vue.use(VueAwesomeSwiper);

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
