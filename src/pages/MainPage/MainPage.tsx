import { observer } from 'mobx-react-lite'

import { useEffect } from 'react'

import styles from './MainPage.module.scss'

import { Keyboard } from '@/widgets/Keyboard'
import { Row } from '@/widgets/Row'
import { appStore } from '@/app/appStore'
import { messageStore } from '@/widgets/Message'

export const MainPage = observer(() => {
    const { init, isLoss, isWin, currentRow, correctWord, handleKeyup, guesses } = appStore

    useEffect(() => {
        init()
        window.addEventListener('keyup', handleKeyup)

        return () => {
            window.removeEventListener('keyup', handleKeyup)
        }
    }, [])

    useEffect(() => {
        if (isWin || isLoss) {
            messageStore.show(
                isWin ? 'You won!' : `You lost :(\nCorrect word was: ${correctWord}`,
                {
                    buttonText: 'Play Again',
                    onClose: init,
                },
            )
        }
    }, [isWin, isLoss])

    console.log('correctWord', correctWord)

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    <a href='/'>
                        <h1 className={styles.title}>Wordle</h1>
                    </a>
                    <div className={styles.help}>?</div>
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
