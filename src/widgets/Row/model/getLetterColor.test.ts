import { getLetterColor } from './getLetterColor'

import { GameColors } from '../../../shared/constants'

describe('getLetterColor', () => {
    it('зеленый: буква на своем месте', () => {
        const result = getLetterColor('норка', 'норка', 0)
        expect(result).toBe(GameColors.Green)
    })

    it('зеленый: два зелёных, если буква дважды встречается на своих местах', () => {
        const result1 = getLetterColor('анапа', 'анана', 0)
        const result2 = getLetterColor('анапа', 'анана', 2)

        expect(result1).toBe(GameColors.Green)
        expect(result2).toBe(GameColors.Green)
    })

    it('желтый: буква есть, но не на своем месте', () => {
        const result = getLetterColor('арбуз', 'норка', 0)
        expect(result).toBe(GameColors.Yellow)
    })

    it('желтый: не более одного жёлтого, если буква одна в слове', () => {
        const result1 = getLetterColor('анонс', 'норка', 1)
        const result2 = getLetterColor('анонс', 'норка', 3)

        expect(result1).toBe(GameColors.Yellow)
        expect(result2).toBe(GameColors.Gray)
    })

    it('серый: буква не в слове', () => {
        const result = getLetterColor('трель', 'норка', 0)
        expect(result).toBe(GameColors.Gray)
    })

    it('серый: буква уже использована в правильной позиции', () => {
        const result = getLetterColor('анора', 'норка', 0)
        expect(result).toBe(GameColors.Gray)
    })

    it('серый: индекс вне диапазона', () => {
        const result = getLetterColor('норка', 'норка', 10)
        expect(result).toBe(GameColors.Gray)
    })
})
