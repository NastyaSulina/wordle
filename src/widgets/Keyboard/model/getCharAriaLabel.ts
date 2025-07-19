import { t } from 'i18next'

import { GameColors } from '@/shared/constants'

export function getCharAriaLabel(char: string, color: GameColors): string {
    const base = t('add', { char: char })

    const status = {
        [GameColors.Green]: t('correct_position'),
        [GameColors.Yellow]: t('wrong_position'),
        [GameColors.Gray]: t('absent'),
        [GameColors.White]: '',
        [GameColors.LightGray]: '',
    }[color]

    return status ? `${base} — ${status}` : base
}
