import { makeAutoObservable } from 'mobx'

class MessageStore {
    message: string | null = null
    buttonText: string = ''
    onClose: (() => void) | null = null

    constructor() {
        makeAutoObservable(this)
    }

    show(message: string, options?: { onClose?: () => void; buttonText?: string }) {
        this.message = message
        this.buttonText = options?.buttonText ?? 'OK'
        this.onClose = options?.onClose ?? null
    }

    clear() {
        this.message = null
        this.buttonText = ''

        if (this.onClose) {
            this.onClose()
            this.onClose = null
        }
    }
}

export const messageStore = new MessageStore()
