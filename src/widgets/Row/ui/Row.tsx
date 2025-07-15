import React from 'react'

import cn from 'clsx'

import styles from './Row.module.scss'

import { getLetterColor } from '../model/getLetterColor'

import { CustomCSSProperties, LetterColor } from '@/shared/constants'

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
                    const backgroundColor = isEntered
                        ? getLetterColor(guess, correctWord, i)
                        : LetterColor.White

                    return (
                        <div
                            // eslint-disable-next-line react/no-array-index-key
                            key={i}
                            className={cn(styles.cell, 'pixelated', {
                                [styles.isEntered]: isEntered,
                            })}
                            style={
                                {
                                    '--accent': `${backgroundColor}`,
                                    transitionDelay: `${i * 100}ms`,
                                } as CustomCSSProperties
                            }
                        >
                            {guess[i]}
                        </div>
                    )
                })}
        </div>
    )
}
