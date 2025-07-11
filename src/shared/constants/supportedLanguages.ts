import ruWords from '../../../public/dictionaries/ru.json'
import enWords from '../../../public/dictionaries/en.json'

export const SUPPORTED_LANGUAGES = {
    ru: {
        words: ruWords,
        regex: /^[а-яА-ЯёЁ]$/,
    },
    en: {
        words: enWords,
        regex: /^[a-zA-Z]$/,
    },
}

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES
