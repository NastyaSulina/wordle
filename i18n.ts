import i18n from 'i18next'

import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import ru from '@/shared/locales/ru.json'
import en from '@/shared/locales/en.json'

import 'intl-pluralrules'

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en,
            ru,
        },
        fallbackLng: 'ru',
        supportedLngs: ['en', 'ru'],
        nonExplicitSupportedLngs: true,
        load: 'languageOnly',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'user-language',
            convertDetectedLanguage: (lng) => lng?.split('-')[0],
        },
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
