import { createApp } from 'vue'
import router from './plugins/router'
import App from './app.vue'
import fontAwesomeIcon from './plugins/icons'

import './assets/styles/style.scss'


createApp(App)
    .use(router)
    .component('fa', fontAwesomeIcon)
    .mount('#app')
