import { observer } from 'mobx-react-lite'

import styles from './Keyboard.module.scss'

import { RU_KEYBOARD_LAYOUT, EN_KEYBOARD_LAYOUT } from '../model/keyboardLayout'

import { appStore } from '@/app/appStore'
import { Button } from '@/shared/ui/Button'
import { CustomCSSProperties, KeyboardKeys } from '@/shared/constants'

export const Keyboard = observer(() => {
    const {
        allEnteredLetters,
        correctLetters,
        presentLetters,
        handleLetterInput,
        onEnterPress,
        onBackspacePress,
        language,
    } = appStore

    const KEYBOARD_LAYOUT = language === 'ru' ? RU_KEYBOARD_LAYOUT : EN_KEYBOARD_LAYOUT

    return (
        <div className={styles.root}>
            {KEYBOARD_LAYOUT.map((row, rowIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={rowIndex} className={styles.row}>
                    {row.map((letter) => {
                        let backgroundColor = 'var(--white)'

                        if (letter.type === 'char') {
                            if (correctLetters.includes(letter.label)) {
                                backgroundColor = 'var(--green)'
                            } else if (presentLetters.includes(letter.label)) {
                                backgroundColor = 'var(--yellow)'
                            } else if (allEnteredLetters.includes(letter.label)) {
                                backgroundColor = 'var(--gray)'
                            }
                        }
                        const handleClick = () => {
                            if (letter.code === KeyboardKeys.Enter) {
                                onEnterPress()
                            } else if (letter.code === KeyboardKeys.Backspace) {
                                onBackspacePress()
                            } else {
                                handleLetterInput(letter.label)
                            }
                        }

                        return (
                            <Button
                                key={letter.code}
                                onClick={handleClick}
                                style={
                                    {
                                        flex: '1 0 5px',
                                        height: '48px',
                                        '--accent': `${backgroundColor}`,
                                    } as CustomCSSProperties
                                }
                            >
                                {letter.label}
                            </Button>
                        )
                    })}
                </div>
            ))}
        </div>
    )
})
