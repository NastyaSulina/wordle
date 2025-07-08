import { makeAutoObservable } from 'mobx'

import words from '../../public/dictionaries/ru.json'

import { messageStore } from '../widgets/Message'

export const KeyboardKeys = {
    Enter: 'Enter',
    Backspace: 'Backspace',
}

class AppStore {
    correctWord: string = ''
    guesses: string[] = []
    currentRow: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    get isWin() {
        // Игрок победил, если последний введённый ряд совпадает с загаданным словом
        return this.guesses[this.currentRow - 1] === this.correctWord
    }

    get isLoss() {
        // Игрок проиграл, если использованы все 6 попыток
        return this.currentRow === 6 && !this.isWin
    }

    get allEnteredLetters() {
        // Возвращает массив всех введённых букв до текущей строки
        return this.guesses.slice(0, this.currentRow).join('').split('')
    }

    get correctLetters() {
        // Буквы, которые стоят на своих местах (зелёные)
        return this.correctWord.split('').filter((letter, i) =>
            this.guesses
                .slice(0, this.currentRow)
                .map((guess) => guess[i])
                .includes(letter),
        )
    }

    get presentLetters() {
        // Буквы, которые есть в слове, но не обязательно на своих местах (жёлтые)
        return this.correctWord
            .split('')
            .filter((letter) => this.allEnteredLetters.includes(letter))
    }

    init = () => {
        this.correctWord = words[Math.floor(Math.random() * words.length)]
        this.guesses = new Array(6).fill('')
        this.currentRow = 0
    }

    submitGuess = () => {
        const guess = this.guesses[this.currentRow]

        if (guess.length === 5 && words.includes(guess)) {
            this.currentRow += 1
        } else if (guess.length === 5) {
            messageStore.show('Пожалуйста, введите существующее слово из 5 букв', {
                buttonText: 'OK',
            })
        }
    }

    onEnterPress = () => {
        this.submitGuess()
    }

    onBackspacePress = () => {
        this.guesses[this.currentRow] = this.guesses[this.currentRow].slice(0, -1)
    }

    handleLetterInput = (letter: string) => {
        if (this.isWin || this.isLoss) {
            return
        }

        if (/^[a-zA-Z]$/.test(letter)) {
            messageStore.show('Пожалуйста, переключите раскладку', {
                buttonText: 'OK',
            })
            return
        }

        if (this.guesses[this.currentRow].length < 5 && /^[а-яА-Я]$/.test(letter)) {
            this.guesses[this.currentRow] += letter.toLowerCase()
        }
    }

    handleKeyup = (e: KeyboardEvent) => {
        if (this.isWin || this.isLoss) {
            return
        }

        if (e.key === KeyboardKeys.Enter) {
            this.onEnterPress()
        } else if (e.key === KeyboardKeys.Backspace) {
            this.onBackspacePress()
        } else {
            this.handleLetterInput(e.key)
        }
    }
}

export const appStore = new AppStore()
