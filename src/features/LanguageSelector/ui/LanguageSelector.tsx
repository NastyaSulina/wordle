import { observer } from 'mobx-react-lite'
import cn from 'clsx'
import { useTranslation } from 'react-i18next'

import styles from './LanguageSelector.module.scss'

import { appStore } from '@/app/appStore'
import { LanguageCode, SUPPORTED_LANGUAGES } from '@/shared/constants/supportedLanguages'
import { Select } from '@/shared/ui/Select/Select'

export const LanguageSelector = observer(() => {
    const { t } = useTranslation()
    const { language, setLanguage } = appStore

    const options = Object.entries(SUPPORTED_LANGUAGES).map(([code, config]) => ({
        value: code,
        title: config.label,
    }))

    return (
        <div className={cn(styles.selectWrapper)} aria-label={t('language')}>
            <Select
                options={options}
                selected={language}
                onChange={(lang) => setLanguage(lang as LanguageCode)}
            />
        </div>
    )
})
