import { GameColors } from '../../../shared/constants'

export function getLetterColor(guess: string, correctWord: string, index: number) {
    const guessArr = guess.split('')
    const correctArr = correctWord.split('')

    const used = Array(correctArr.length).fill(false)
    const colors = Array(guessArr.length).fill(GameColors.Gray)

    // Зеленые
    for (let i = 0; i < guessArr.length; i++) {
        if (guessArr[i] === correctArr[i]) {
            colors[i] = GameColors.Green
            used[i] = true
        }
    }

    // Желтые
    for (let i = 0; i < guessArr.length; i++) {
        if (colors[i] !== GameColors.Gray) {
            continue
        }

        const guessLetter = guessArr[i]

        for (let j = 0; j < correctArr.length; j++) {
            if (!used[j] && correctArr[j] === guessLetter) {
                colors[i] = GameColors.Yellow
                used[j] = true

                break
            }
        }
    }

    return colors[index] ?? GameColors.Gray
}
