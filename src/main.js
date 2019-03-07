import Vue from 'vue';
import './plugins/vuetify';
import router from './router';
import store from './store';

import 'vuetify/dist/vuetify.min.css';
import VueYoutube from 'vue-youtube';

import App from './App.vue';
import SpaceForceLogo from '@/components/SpaceForceLogo.vue';

Vue.config.productionTip = false;

Vue.component('SpaceForceLogo', SpaceForceLogo);

Vue.use(VueYoutube);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
