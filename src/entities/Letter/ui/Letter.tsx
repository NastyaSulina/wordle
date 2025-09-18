import { FC, memo } from 'react'
import cn from 'clsx'

import styles from './Letter.module.scss'

import { CustomCSSProperties, GameColors } from '@/shared/constants'

export type LetterProps = {
    letter: string
    letterIndex?: number
    letterAriaLabel?: string
    isAccepted: boolean
    backgroundColor: GameColors
}

export const Letter: FC<LetterProps> = memo(
    ({ isAccepted, backgroundColor, letter = '', letterAriaLabel = '', letterIndex = 0 }) => {
        const style: CustomCSSProperties = {
            '--pixelated-main': backgroundColor,
            ...(isAccepted ? { animationDelay: `${letterIndex * 100}ms` } : {}),
        }

        return (
            <div
                role='img'
                aria-label={letterAriaLabel}
                className={cn(
                    styles.root,
                    {
                        [styles.flipReveal]: isAccepted,
                        [styles.popInEffect]: letter && !isAccepted,
                    },
                    'pixelated',
                )}
                style={style}
            >
                {letter}
            </div>
        )
    },
)
