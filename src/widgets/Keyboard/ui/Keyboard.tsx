import { observer } from 'mobx-react-lite'
import cn from 'clsx'
import { t } from 'i18next'

import styles from './Keyboard.module.scss'

import { getCharAriaLabel } from '../model/getCharAriaLabel'

import { appStore } from '@/app/appStore'
import { Button, ButtonSize } from '@/shared/ui/Button'
import { KeyboardKeys, GameColors, SUPPORTED_LANGUAGES } from '@/shared/constants'
import backspaceIcon from '@/shared/assets/backspace.svg'
import checkIcon from '@/shared/assets/check.svg'

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

    const KEYBOARD_LAYOUT = SUPPORTED_LANGUAGES[language].keyboard

    return (
        <div className={styles.root} role='region' aria-label={t('keyboard')}>
            {KEYBOARD_LAYOUT.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={cn(styles.row, {
                        [styles.innerPadding]: language === 'en' && rowIndex === 1,
                    })}
                >
                    {row.map((letter) => {
                        let backgroundColor = GameColors.LightGray

                        if (letter.type === 'char') {
                            if (correctLetters.includes(letter.label)) {
                                backgroundColor = GameColors.Green
                            } else if (presentLetters.includes(letter.label)) {
                                backgroundColor = GameColors.Yellow
                            } else if (allEnteredLetters.includes(letter.label)) {
                                backgroundColor = GameColors.Gray
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

                        const ariaLabel =
                            letter.type === 'char'
                                ? getCharAriaLabel(letter.code, backgroundColor)
                                : letter.code

                        let buttonContent

                        if (letter.code === 'Backspace') {
                            buttonContent = (
                                <img src={backspaceIcon} className={styles.icon} alt='' />
                            )
                        } else if (letter.code === 'Enter') {
                            buttonContent = <img src={checkIcon} className={styles.icon} alt='' />
                        } else {
                            buttonContent = letter.label
                        }

                        return (
                            <Button
                                key={letter.code}
                                aria-label={ariaLabel}
                                size={ButtonSize.S}
                                onClick={handleClick}
                                backgroundColor={backgroundColor}
                            >
                                {buttonContent}
                            </Button>
                        )
                    })}
                </div>
            ))}
        </div>
    )
})
