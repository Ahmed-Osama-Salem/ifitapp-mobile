import arabic from 'i18n/locales/ar.json';
import english from 'i18n/locales/en.json';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: I18nManager.isRTL ? 'ar' : 'en',
  fallbackLng: 'en',
  resources: {
    en: english,
    ar: arabic,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
