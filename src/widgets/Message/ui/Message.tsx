import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react-lite'
import cn from 'clsx'

import styles from './Message.module.scss'

import { messageStore } from '../model/messageStore'

import { Button } from '@/shared/ui/Button'
import { GameColors, KeyboardKeys } from '@/shared/constants'
import { appStore } from '@/app/appStore'

export const Message = observer(() => {
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (messageStore.message) {
            buttonRef.current?.focus()
        }
    }, [messageStore.message])

    if (!messageStore.message) return null

    return ReactDOM.createPortal(
        <div className={cn(styles.overlay, { [styles.withConfetti]: appStore.isWin })}>
            <div
                className={cn(styles.modal, 'pixelated')}
                role='dialog'
                aria-modal='true'
                aria-labelledby='modal-title'
            >
                <p>{messageStore.message}</p>

                <Button
                    ref={buttonRef}
                    onClick={() => messageStore.clear()}
                    backgroundColor={appStore.isWin ? GameColors.Green : undefined}
                    onKeyDown={(e) => {
                        if (e.key === KeyboardKeys.Enter || e.key === KeyboardKeys.Space) {
                            messageStore.clear()
                        }
                    }}
                    isPixelated
                >
                    {messageStore.buttonText}
                </Button>
            </div>
        </div>,
        document.body,
    )
})
