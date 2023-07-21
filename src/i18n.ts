import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import en from './assets/locales/en.json';

const resources = {
    en: {
        translation: en,
    },
};

i18next.use(initReactI18next).init({
    resources,
    lng: 'en',
});

export default i18n;
