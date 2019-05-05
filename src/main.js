import Vue from 'vue';
import App from './App.vue';
import {router} from './router'; //router import edip ekledik
import {store} from './store/store' // store uygulamaya dahil edildi.
new Vue({
  el: '#app',
  render: h => h(App),
  routers,
  store
})