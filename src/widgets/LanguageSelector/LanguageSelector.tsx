import { observer } from 'mobx-react-lite'

import cn from 'clsx'

import { t } from 'i18next'

import styles from './LanguageSelector.module.scss'

import { appStore } from '@/app/appStore'
import { LanguageCode, SUPPORTED_LANGUAGES } from '@/shared/constants'

export const LanguageSelector = observer(() => {
    const { language, setLanguage } = appStore

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value as LanguageCode
        setLanguage(selected)
    }

    return (
        <select
            className={cn(styles.select)}
            value={language}
            onChange={handleChange}
            aria-label={t('language')}
        >
            {Object.keys(SUPPORTED_LANGUAGES).map((langCode) => (
                <option key={langCode} value={langCode}>
                    {langCode}
                </option>
            ))}
        </select>
    )
})
