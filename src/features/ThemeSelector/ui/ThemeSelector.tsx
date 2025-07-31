import { observer } from 'mobx-react-lite'
import cn from 'clsx'

import { useTranslation } from 'react-i18next'

import styles from './ThemeSelector.module.scss'

import { Select } from '@/shared/ui/Select/Select'
import { Theme, useTheme } from '@/shared/theme/ThemeContext'

export const ThemeSelector = observer(() => {
    const { theme, setTheme } = useTheme()
    const { t } = useTranslation()

    const options = [
        {
            value: Theme.dark,
            title: t('dark_theme'),
        },
        {
            value: Theme.light,
            title: t('light_theme'),
        },
    ]

    return (
        <div className={cn(styles.root)}>
            <Select
                options={options}
                selected={theme}
                onChange={(value) => {
                    setTheme(value as Theme)
                }}
            />
        </div>
    )
})
