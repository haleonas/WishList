import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'
import vSelect from 'vue-select'

Vue.config.productionTip = false

Vue.component('v-select',vSelect)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
