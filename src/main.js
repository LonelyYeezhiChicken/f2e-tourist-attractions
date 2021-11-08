import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from "./store/index"
import router from "./router/index"
import './assets/icon'



createApp(App)
.use(router)
.use(store)
.mount('#app')

