import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Row.module.scss'

import { GameColors } from '@/shared/constants'
import { getLetterAriaLabel, getLetterColor, Letter } from '@/entities/Letter'

export type RowProps = {
    children?: React.ReactNode
    guess?: string
    correctWord: string
    isRowAccepted: boolean
    rowIndex: number
}

export const Row: React.FC<RowProps> = ({ guess = '', correctWord, isRowAccepted, rowIndex }) => {
    const { t } = useTranslation()

    return (
        <div className={styles.root} aria-label={t('row_number', { index: rowIndex + 1 })}>
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const backgroundColor = isRowAccepted
                        ? getLetterColor(guess, correctWord, i)
                        : GameColors.Default

                    const letterAriaLabel = getLetterAriaLabel(
                        i,
                        guess[i],
                        isRowAccepted,
                        backgroundColor,
                    )

                    return (
                        <Letter
                            key={i}
                            letterIndex={i}
                            word={guess}
                            backgroundColor={backgroundColor}
                            letterAriaLabel={letterAriaLabel}
                            isAccepted={isRowAccepted}
                        />
                    )
                })}
        </div>
    )
}
