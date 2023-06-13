import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import vn from '../locales/vn.json';
import fr from '../locales/fr.json';

const i18n = createI18n({
  locale: 'en', // Ngôn ngữ mặc định
  fallbackLocale: 'en',
  messages: {
    en,
    vn,
    fr,
  }
});

export default i18n;