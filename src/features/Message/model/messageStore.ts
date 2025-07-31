import { makeAutoObservable, runInAction } from 'mobx'

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
        setTimeout(() => {
            runInAction(() => {
                if (this.onClose) {
                    this.onClose()
                    this.onClose = null
                }

                this.message = null
                this.buttonText = ''
            })
        }, 200)
    }
}

export const messageStore = new MessageStore()
