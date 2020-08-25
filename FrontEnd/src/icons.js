import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGifts } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
 
library.add(faGifts)
dom.watch()
Vue.component('fa-icon', FontAwesomeIcon)