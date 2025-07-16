import { observer } from 'mobx-react-lite'

import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import styles from './MainPage.module.scss'

import { Keyboard } from '@/widgets/Keyboard'
import { Row } from '@/widgets/Row'
import { appStore } from '@/app/appStore'
import { messageStore } from '@/widgets/Message'
import { Button } from '@/shared/ui/Button'
import { CustomCSSProperties } from '@/shared/constants'

export const MainPage = observer(() => {
    const { t } = useTranslation()
    const { init, isLoss, isWin, currentRow, correctWord, handleKeyup, guesses, language } =
        appStore

    useEffect(() => {
        init()

        const handler = (e: KeyboardEvent) => {
            if (messageStore.message) return

            handleKeyup(e)
        }

        document.addEventListener('keyup', handler)

        return () => document.removeEventListener('keyup', handler)
    }, [])

    useEffect(() => {
        if (isWin || isLoss) {
            messageStore.show(isWin ? t('you_won') : `${t('you_lost')} ${correctWord}`, {
                buttonText: t('play_again'),
                onClose: init,
            })
        }
    }, [isWin, isLoss])

    console.log('correctWord', correctWord)

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    <a href='/'>
                        <h1 className={styles.title}>{t('title')}</h1>
                    </a>
                    {/* // TODO: Поправить переключение языков */}
                    <Button
                        style={
                            {
                                width: '60px',
                                height: '48px',
                            } as CustomCSSProperties
                        }
                        onClick={() => appStore.setLanguage(language === 'ru' ? 'en' : 'ru')}
                    >
                        {language}
                    </Button>
                </nav>

                <div className={styles.rows}>
                    {guesses.map((_, i) => (
                        <Row
                            // eslint-disable-next-line react/no-array-index-key
                            key={i}
                            guess={guesses[i]}
                            correctWord={correctWord}
                            isEntered={i < currentRow}
                        />
                    ))}
                </div>

                <Keyboard />
            </div>
        </div>
    )
})
