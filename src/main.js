import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store/index'
import router from './router/index'
import SvgIcon from './components/SvgIcon.vue'

createApp(App)
  .use(router)
  .use(store)
  .component('SvgIcon', SvgIcon)
  .mount('#app')
