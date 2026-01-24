import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import tr from './tr.json';
import ru from './ru.json';

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, tr: { translation: tr }, ru: { translation: ru } },
  lng: 'en',
  fallbackLng: 'tr',
  interpolation: { escapeValue: false }
});
