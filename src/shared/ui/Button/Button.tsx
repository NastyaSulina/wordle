import cn from 'clsx'

import { memo } from 'react'

import styles from './Button.module.scss'

export enum ButtonSize {
    S = 'S',
    M = 'M',
    L = 'L',
}

export type ButtonProps = {
    children: React.ReactNode
    size?: ButtonSize
    isDisabled?: boolean
    isLoading?: boolean
    isPixelated?: boolean
    backgroundColor?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    ref?: React.Ref<HTMLButtonElement>
} & React.HTMLAttributes<HTMLButtonElement>

export const Button = memo(
    ({
        children,
        size = ButtonSize.M,
        isDisabled = false,
        isLoading = false,
        isPixelated = false,
        backgroundColor,
        onClick,
        ref,
        ...rest
    }: ButtonProps) => {
        const btnClass = cn(
            styles.root,
            styles[`size${size}`],
            {
                [styles.disabled!]: isDisabled,
                [styles.loading!]: isLoading,
            },
            isPixelated && 'pixelated',
        )

        let btnStyle = {}

        if (backgroundColor) {
            btnStyle = isPixelated ? { '--pixelated-main': backgroundColor } : { backgroundColor }
        }

        const content = isLoading ? (
            <div className={styles.content}>
                <div className={styles.hide}>{children}</div>
                <div className={styles.loadingWrapper}>...Loading</div>
            </div>
        ) : (
            children
        )

        const commonProps = {
            ...rest,
            onClick: isDisabled || isLoading ? undefined : onClick,
        }

        return (
            <button type='button' ref={ref} className={btnClass} style={btnStyle} {...commonProps}>
                {content}
            </button>
        )
    },
)
