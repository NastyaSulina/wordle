import cn from 'clsx'

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
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    style?: React.CSSProperties
    ref?: React.Ref<HTMLButtonElement>
} & React.HTMLAttributes<HTMLButtonElement>

export const Button = ({
    children,
    size,
    isDisabled = false,
    isLoading = false,
    onClick,
    ref,
    style,
    ...rest
}: ButtonProps) => {
    const btnClass = cn(
        styles.root,
        size && styles[`size${size}`],
        {
            [styles.disabled!]: isDisabled,
            [styles.loading!]: isLoading,
        },
        'pixelated',
    )

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
        style,
    }

    return (
        <button type='button' ref={ref} className={btnClass} {...commonProps}>
            {content}
        </button>
    )
}
