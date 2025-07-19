import { useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import styles from './ErrorPage.module.scss'

import { Button } from '@/shared/ui/Button'

export const ErrorPage = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>{t('page_not_found')}</h1>

                <Button onClick={() => navigate('/')} isPixelated>
                    {t('to_main_page')}
                </Button>
            </div>
        </div>
    )
}
