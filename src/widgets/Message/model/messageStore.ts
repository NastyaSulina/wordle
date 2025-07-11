import { makeAutoObservable } from 'mobx'

import { t } from 'i18next'

class MessageStore {
    message: string | null = null
    buttonText: string = ''
    onClose: (() => void) | null = null

    constructor() {
        makeAutoObservable(this)
    }

    show(message: string, options?: { onClose?: () => void; buttonText?: string }) {
        this.message = message
        this.buttonText = options?.buttonText ?? t('submit')
        this.onClose = options?.onClose ?? null
    }

    clear() {
        if (this.onClose) {
            this.onClose()
            this.onClose = null
        }

        this.message = null
        this.buttonText = ''
    }
}

export const messageStore = new MessageStore()
