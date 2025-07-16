import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react-lite'
import cn from 'clsx'

import styles from './Message.module.scss'

import { messageStore } from '../model/messageStore'

import { Button, ButtonSize } from '@/shared/ui/Button'
import { KeyboardKeys } from '@/shared/constants'

export const Message = observer(() => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const previousFocusRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (messageStore.message) {
            previousFocusRef.current = document.activeElement as HTMLElement
            buttonRef.current?.focus()
        }

        return () => {
            previousFocusRef.current?.focus()
        }
    }, [messageStore.message])

    if (!messageStore.message) return null

    return ReactDOM.createPortal(
        <div className={styles.overlay}>
            <div
                className={cn(styles.modal, 'pixelated')}
                role='dialog'
                aria-modal='true'
                aria-labelledby='modal-title'
            >
                <h2>{messageStore.message}</h2>

                <Button
                    ref={buttonRef}
                    onClick={() => messageStore.clear()}
                    onKeyDown={(e) => {
                        if (e.key === KeyboardKeys.Enter || e.key === KeyboardKeys.Space) {
                            messageStore.clear()
                        }
                    }}
                    size={ButtonSize.M}
                >
                    {messageStore.buttonText}
                </Button>
            </div>
        </div>,
        document.body,
    )
})
