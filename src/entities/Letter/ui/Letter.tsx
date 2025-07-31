import React from 'react'
import cn from 'clsx'

import styles from './Letter.module.scss'

import { CustomCSSProperties, GameColors } from '@/shared/constants'

export type LetterProps = {
    letterIndex?: number
    letterAriaLabel?: string
    word: string
    isAccepted: boolean
    backgroundColor: GameColors
}

export const Letter: React.FC<LetterProps> = ({
    word,
    isAccepted,
    backgroundColor,
    letterAriaLabel = '',
    letterIndex = 0,
}) => {
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
                    [styles.popInEffect]: word[letterIndex] && !isAccepted,
                },
                'pixelated',
            )}
            style={style}
        >
            {word[letterIndex]}
        </div>
    )
}
