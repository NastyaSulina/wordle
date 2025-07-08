import { observer } from 'mobx-react-lite'

import styles from './Keyboard.module.scss'

import { RU_KEYBOARD_LAYOUT } from '../model/keyboardLayout'

import { appStore } from '@/app/appStore'
import { Button } from '@/shared/ui/Button'
import { CustomCSSProperties } from '@/shared/types'

export const Keyboard = observer(() => {
    const {
        allEnteredLetters,
        correctLetters,
        presentLetters,
        handleLetterInput,
        onEnterPress,
        onBackspacePress,
    } = appStore

    return (
        <div className={styles.root}>
            {RU_KEYBOARD_LAYOUT.map((row) => (
                <div key={row.join('')} className={styles.row}>
                    {row.map((letter) => {
                        const isSpecial = letter === 'Enter' || letter === '←'
                        let backgroundColor

                        if (!isSpecial && correctLetters.includes(letter)) {
                            backgroundColor = 'var(--green)'
                        } else if (!isSpecial && presentLetters.includes(letter)) {
                            backgroundColor = 'var(--yellow)'
                        } else if (!isSpecial && allEnteredLetters.includes(letter)) {
                            backgroundColor = 'var(--gray)'
                        } else {
                            backgroundColor = 'var(--white)'
                        }

                        const handleClick = () => {
                            if (letter === 'Enter') {
                                return onEnterPress()
                            } else if (letter === '←') {
                                return onBackspacePress()
                            }

                            return handleLetterInput(letter)
                        }

                        return (
                            <Button
                                key={`letter-${letter}`}
                                onClick={handleClick}
                                style={
                                    {
                                        flex: '1 0 5px',
                                        height: '48px',
                                        '--accent': `${backgroundColor}`,
                                    } as CustomCSSProperties
                                }
                            >
                                {letter}
                            </Button>
                        )
                    })}
                </div>
            ))}
        </div>
    )
})
