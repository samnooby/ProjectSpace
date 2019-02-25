import Vue from 'vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { Ripple } from 'vuetify/lib/directives'

import App from './App.vue'
import SpaceForceLogo from '@/components/SpaceForceLogo.vue'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  directives: {
    Ripple
  }
})
Vue.component('SpaceForceLogo', SpaceForceLogo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
