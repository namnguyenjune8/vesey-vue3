
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Toaster from '@meforma/vue-toaster';
import i18n from './plugins/i18n';

const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
  i18n.global.locale = savedLanguage; // Khôi phục trạng thái ngôn ngữ từ localStorage
}


createApp(App).use(i18n).use(Toaster).use(router).use(AOS).mount('#app')
AOS.init();

     