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
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'user-language',
        },
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
