import { useEffect, useRef } from 'react'

import ReactDOM from 'react-dom'
import { observer } from 'mobx-react-lite'
import cn from 'clsx'

import styles from './Message.module.scss'

import { messageStore } from '../model/messageStore'

import { Button, ButtonSize } from '@/shared/ui/Button'

export const Message = observer(() => {
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (messageStore.message && overlayRef.current) {
            overlayRef.current.focus()
        }
    }, [messageStore.message])

    if (!messageStore.message) return null

    return ReactDOM.createPortal(
        <div
            ref={overlayRef}
            className={styles.overlay}
            role='button'
            tabIndex={0}
            onClick={() => messageStore.clear()}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    messageStore.clear()
                }
            }}
        >
            <div className={cn(styles.modal, 'pixelated')}>
                <h2>{messageStore.message}</h2>

                <Button onClick={() => messageStore.clear()} size={ButtonSize.M}>
                    {messageStore.buttonText}
                </Button>
            </div>
        </div>,
        document.body,
    )
})
