import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from '../../assets/locals/English.json';
import French from '../../assets/locals/French.json';
import Spanish from '../../assets/locals/Spanish.json';



const resources = {
  en: {
    translation: English,
  },
  fr: {
    translation: French,
  },
  es: {
    translation: Spanish,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes strings
  },
});

export default i18n;