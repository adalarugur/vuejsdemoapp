import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import {router} from './router'; //router import edip ekledik
import {store} from './store/store' // store uygulamaya dahil edildi.

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})