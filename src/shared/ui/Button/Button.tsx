import { FC } from 'react'
import cn from 'clsx'
import styles from './Button.module.scss'

type Props = {
    text?: string
    ariaLabel?: string
    buttonType: ButtonType
    onClick: (e: any) => void
    isAnimated?: boolean
    disabled?: boolean
}

export enum ButtonType {
    black = 'black',
    white = 'white',
    gradient = 'gradient',
}

export const Button: FC<Props> = ({
    buttonType = ButtonType.black,
    text = '',
    ariaLabel = '',
    onClick,
    isAnimated,
    disabled = false,
    ...props
}) => {
    return (
        <button
            type='button'
            className={cn(styles.root, styles[buttonType], isAnimated && styles.isAnimated)}
            aria-label={ariaLabel}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {text}
        </button>
    )
}
