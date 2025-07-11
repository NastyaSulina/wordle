import React from 'react'

import cn from 'clsx'

import styles from './Row.module.scss'

import { CustomCSSProperties } from '@/shared/constants'

export type RowProps = {
    children?: React.ReactNode
    guess?: string
    correctWord: string
    isEntered?: boolean
}

export const Row: React.FC<RowProps> = ({ guess = '', correctWord, isEntered }) => {
    return (
        <div className={styles.root}>
            {Array(5)
                .fill('')
                .map((_, i) => {
                    let backgroundColor

                    if (!isEntered) {
                        backgroundColor = 'var(--white)'
                    } else if (guess[i] === correctWord[i]) {
                        backgroundColor = 'var(--green)'
                    } else if (correctWord.includes(guess[i])) {
                        backgroundColor = 'var(--yellow)'
                    } else {
                        backgroundColor = 'var(--gray)'
                    }

                    return (
                        <div
                            // eslint-disable-next-line react/no-array-index-key
                            key={i}
                            className={cn(styles.cell, 'pixelated')}
                            style={{ '--accent': `${backgroundColor}` } as CustomCSSProperties}
                        >
                            {guess[i]}
                        </div>
                    )
                })}
        </div>
    )
}
