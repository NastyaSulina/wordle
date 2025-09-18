import { observer } from 'mobx-react-lite'

import { useCallback, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import styles from './MainPage.module.scss'

import { Keyboard } from '@/widgets/Keyboard'
import { Row } from '@/widgets/Row'
import { appStore } from '@/app/appStore'
import { messageStore } from '@/features/Message'
import { Button, ButtonSize } from '@/shared/ui/Button'
import { LanguageSelector } from '@/features/LanguageSelector'
import { GameColors } from '@/shared/constants'
import { ThemeSelector } from '@/features/ThemeSelector'
import { useIsMobile } from '@/shared/hooks'

export const MainPage = observer(() => {
    const { t } = useTranslation()
    const isMobile = useIsMobile()

    const { init, isLoss, isWin, currentRow, correctWord, handleKeyup, guesses, currentDraft } =
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
            messageStore.show(
                isWin
                    ? t('you_won', { correctWord, count: currentRow })
                    : t('you_lost', { correctWord }),
                {
                    buttonText: t('play_again'),
                    onClose: init,
                },
            )
        }
    }, [isWin, isLoss])

    const aboutClick = useCallback(() => {
        messageStore.show(t('about_game'))
    }, [t])

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.menu}>
                    <LanguageSelector />
                    <ThemeSelector />

                    <div className={styles.about}>
                        <Button
                            size={ButtonSize.S}
                            backgroundColor={GameColors.Default}
                            onClick={aboutClick}
                        >
                            {isMobile ? '?' : t('how_to_play')}
                        </Button>
                    </div>
                </div>

                <h1 className={styles.title}>{t('title')}</h1>

                <div className={styles.rows} aria-label={t('rows')}>
                    {guesses.map((_, i) => {
                        const guessValue = i === currentRow ? currentDraft : guesses[i]

                        return (
                            <Row
                                key={i}
                                rowIndex={i}
                                guess={guessValue}
                                correctWord={correctWord}
                                isRowAccepted={i < currentRow}
                            />
                        )
                    })}
                </div>

                <Keyboard />
            </div>
        </div>
    )
})
