import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { ru } from '@/shared/locales/ru'
import { en } from '@/shared/locales/en'

i18n.use(initReactI18next).init({
    resources: {
        en,
        ru,
    },
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
