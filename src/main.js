import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import SvgIcon from './components/SvgIcon.vue'
import './index.css'

const app = createApp(App)

app.use(router).use(store).component('SvgIcon', SvgIcon).mount('#app')

app.config.globalProperties.$google = window.google
