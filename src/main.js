import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(router).use(AOS).mount('#app')
AOS.init();