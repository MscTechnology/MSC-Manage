import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import tr from './TR/TR.js';
import en from './EN/EN.js';
import moment from 'moment';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en,
      tr
    }
  });

export default i18n;



