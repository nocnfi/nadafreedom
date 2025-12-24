import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Pastikan path ini benar sesuai folder resources/js/locales/
import idTranslation from './locales/id.json';
import enTranslation from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ID: { translation: idTranslation }, // Gunakan ID (Huruf Besar)
      EN: { translation: enTranslation }  // Gunakan EN (Huruf Besar)
    },
    fallbackLng: 'ID',
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'], // Ini penting agar tersimpan di browser
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;