import { makeAutoObservable } from 'mobx'
import { t } from 'i18next'

import { messageStore } from '../widgets/Message'

import i18n from '../../i18n'

import { KeyboardKeys, LanguageCode, SUPPORTED_LANGUAGES } from '@/shared/constants'

class AppStore {
    correctWord: string = ''
    guesses: string[] = []
    currentRow: number = 0
    language: LanguageCode = LanguageCode.ru

    constructor() {
        makeAutoObservable(this)
    }

    setLanguage = (lang: LanguageCode) => {
        this.language = lang
        i18n.changeLanguage(lang)

        this.init()
    }

    get words() {
        return SUPPORTED_LANGUAGES[this.language].words
    }

    get letterRegex() {
        return SUPPORTED_LANGUAGES[this.language].regex
    }

    get isWin() {
        return this.guesses[this.currentRow - 1] === this.correctWord
    }

    get isLoss() {
        return this.currentRow === 6 && !this.isWin
    }

    get allEnteredLetters() {
        return this.guesses.slice(0, this.currentRow).join('').split('')
    }

    get correctLetters() {
        return this.correctWord.split('').filter((letter, i) =>
            this.guesses
                .slice(0, this.currentRow)
                .map((guess) => guess[i])
                .includes(letter),
        )
    }

    get presentLetters() {
        return this.correctWord
            .split('')
            .filter((letter) => this.allEnteredLetters.includes(letter))
    }

    init = () => {
        const words = this.words
        this.correctWord = words[Math.floor(Math.random() * words.length)]
        this.guesses = new Array(6).fill('')
        this.currentRow = 0
    }

    submitGuess = () => {
        const guess = this.guesses[this.currentRow]

        if (guess.length === 5 && this.words.includes(guess)) {
            this.currentRow += 1
        } else if (guess.length === 5) {
            messageStore.show(t('invalid_word'), {
                buttonText: t('submit'),
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
        if (this.isWin || this.isLoss) return

        if (!letter.match(this.letterRegex)) {
            return
        }

        const guess = this.guesses[this.currentRow]

        if (guess.length < 5) {
            this.guesses[this.currentRow] += letter.toLowerCase()
        }
    }

    handleKeyup = (e: KeyboardEvent) => {
        if (messageStore.message || this.isWin || this.isLoss) return

        if (e.key === KeyboardKeys.Enter) {
            this.onEnterPress()
        } else if (e.key === KeyboardKeys.Backspace) {
            this.onBackspacePress()
        } else if (e.key.length === 1) {
            this.handleLetterInput(e.key)
        }
    }
}

export const appStore = new AppStore()
