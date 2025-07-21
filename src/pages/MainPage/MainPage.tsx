import { observer } from 'mobx-react-lite'

import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import styles from './MainPage.module.scss'

import { Keyboard } from '@/widgets/Keyboard'
import { Row } from '@/widgets/Row'
import { appStore } from '@/app/appStore'
import { messageStore } from '@/widgets/Message'
import { Button, ButtonSize } from '@/shared/ui/Button'
import { LanguageSelector } from '@/widgets/LanguageSelector'
import { GameColors } from '@/shared/constants'

export const MainPage = observer(() => {
    const { t } = useTranslation()
    const { init, isLoss, isWin, currentRow, correctWord, handleKeyup, guesses } = appStore

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
            messageStore.show(
                isWin ? t('you_won', { correctWord }) : t('you_lost', { correctWord }),
                {
                    buttonText: t('play_again'),
                    onClose: init,
                },
            )
        }
    }, [isWin, isLoss])

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.menu}>
                    <LanguageSelector />

                    <div className={styles.buttonWrapper}>
                        <Button
                            size={ButtonSize.S}
                            backgroundColor={GameColors.Default}
                            onClick={() => {
                                messageStore.show(t('about_game'))
                            }}
                        >
                            {t('how_to_play')}
                        </Button>
                    </div>
                </div>

                <h1 className={styles.title}>{t('title')}</h1>

                <div className={styles.rows} aria-label={t('rows')}>
                    {guesses.map((_, i) => (
                        <Row
                            key={i}
                            rowIndex={i}
                            guess={guesses[i]}
                            correctWord={correctWord}
                            isRowAccepted={i < currentRow}
                        />
                    ))}
                </div>

                <Keyboard />
            </div>
        </div>
    )
})
