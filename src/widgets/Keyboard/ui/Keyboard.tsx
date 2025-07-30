import { observer } from 'mobx-react-lite'
import cn from 'clsx'
import { useTranslation } from 'react-i18next'

import styles from './Keyboard.module.scss'

import { getCharAriaLabel } from '../model/getCharAriaLabel'

import { appStore } from '@/app/appStore'
import { Button, ButtonSize } from '@/shared/ui/Button'
import { KeyboardKeys, GameColors, SUPPORTED_LANGUAGES } from '@/shared/constants'

export const Keyboard = observer(() => {
    const { t } = useTranslation()
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
                    {row.map(({ label, code, type }) => {
                        const isChar = type === 'char'
                        const handleClick = () => {
                            if (code === KeyboardKeys.Enter) return onEnterPress()
                            if (code === KeyboardKeys.Backspace) return onBackspacePress()

                            return handleLetterInput(label)
                        }

                        let backgroundColor = GameColors.LightGray
                        if (isChar) {
                            if (correctLetters.includes(label)) {
                                backgroundColor = GameColors.Green
                            } else if (presentLetters.includes(label)) {
                                backgroundColor = GameColors.Yellow
                            } else if (allEnteredLetters.includes(label)) {
                                backgroundColor = GameColors.Gray
                            }
                        }

                        const ariaLabel = isChar ? getCharAriaLabel(code, backgroundColor) : code

                        const buttonContent = isChar ? (
                            label
                        ) : (
                            <img
                                className={cn(
                                    styles.icon,
                                    code === KeyboardKeys.Enter ? styles.check : styles.backspace,
                                )}
                                alt=''
                            />
                        )

                        return (
                            <Button
                                key={code}
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
