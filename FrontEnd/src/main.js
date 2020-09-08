import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import {urlBase64ToUint8Array} from './extra/functions'
import {PUBLIC_VAPID_KEY} from './extra/keys'
import vSelect from 'vue-select'
import 'buefy/dist/buefy.css'
import './icons.js'


Vue.use(Buefy)


Vue.config.productionTip = false

Vue.component('v-select', vSelect)
Vue.use(Buefy)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

if (navigator.serviceWorker && Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then(swr => {
        swr.pushManager
            .subscribe({
                applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
                userVisibleOnly: true
            })
            .then(pushSubscription => {
                console.log(pushSubscription)
            })
    })
}
