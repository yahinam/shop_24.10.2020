import Vue from 'vue';
import vueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import style from './style.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vueResource,
  style,
  render: (h) => h(App),
}).$mount('#app');
