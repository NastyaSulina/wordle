import { t } from 'i18next'

import { GameColors } from '@/shared/constants'

export function getLetterAriaLabel(
    index: number,
    letter: string | undefined,
    isRowAccepted: boolean,
    color: GameColors,
): string {
    const base = t('letter_number', { index: index + 1 }) + (letter ?? t('empty'))

    if (!isRowAccepted || !letter) return base

    const status = {
        [GameColors.Green]: t('correct_position'),
        [GameColors.Yellow]: t('wrong_position'),
        [GameColors.Gray]: t('absent'),
        [GameColors.Default]: '',
        [GameColors.LightGray]: '',
    }[color]

    return status ? `${base} — ${status}` : base
}
