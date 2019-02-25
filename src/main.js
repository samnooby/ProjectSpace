import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import SpaceForceLogo from '@/components/SpaceForceLogo.vue'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.component('SpaceForceLogo', SpaceForceLogo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
