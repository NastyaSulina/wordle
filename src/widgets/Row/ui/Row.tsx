import React from 'react'

import cn from 'clsx'

import { t } from 'i18next'

import styles from './Row.module.scss'

import { getLetterColor } from '../model/getLetterColor'

import { getLetterAriaLabel } from '../model/getLetterAriaLabel'

import { CustomCSSProperties, GameColors } from '@/shared/constants'

export type RowProps = {
    children?: React.ReactNode
    guess?: string
    correctWord: string
    isRowAccepted: boolean
    rowIndex: number
}

export const Row: React.FC<RowProps> = ({ guess = '', correctWord, isRowAccepted, rowIndex }) => {
    return (
        <div className={styles.root} aria-label={t('row_number', { index: rowIndex + 1 })}>
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const backgroundColor = isRowAccepted
                        ? getLetterColor(guess, correctWord, i)
                        : GameColors.White

                    const letterAriaLabel = getLetterAriaLabel(
                        i,
                        guess[i],
                        isRowAccepted,
                        backgroundColor,
                    )

                    return (
                        <div
                            key={i}
                            role='img'
                            aria-label={letterAriaLabel}
                            className={cn(
                                styles.cell,
                                {
                                    [styles.isRowAccepted]: isRowAccepted,
                                    [styles.isCellFilled]: guess[i] && !isRowAccepted,
                                },
                                'pixelated',
                            )}
                            style={
                                {
                                    '--pixelated-main': `${backgroundColor}`,
                                    ...(isRowAccepted ? { animationDelay: `${i * 100}ms` } : {}),
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
