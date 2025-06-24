import cn from 'clsx'

import styles from './Button.module.scss'

import { Spinner } from '../Spinner'

export enum ButtonSize {
    S = 'S',
    M = 'M',
    L = 'L',
}

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary',
    danger = 'danger',
}

export type ButtonProps = {
    children: React.ReactNode
    size?: ButtonSize
    isDisabled?: boolean
    isLoading?: boolean
    isRounded?: boolean
    isOutlined?: boolean
    buttonType: ButtonType
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    ref?: React.Ref<HTMLButtonElement>
} & React.HTMLAttributes<HTMLButtonElement>

export const Button = ({
    children,
    size = ButtonSize.M,
    isDisabled = false,
    isLoading = false,
    isRounded = false,
    isOutlined = false,
    buttonType = ButtonType.primary,
    onClick,
    ref,
    ...rest
}: ButtonProps) => {
    const btnClass = cn(styles.root, styles[`size${size}`], styles[buttonType], {
        [styles.disabled!]: isDisabled,
        [styles.loading!]: isLoading,
        [styles.rounded!]: isRounded,
        [styles.outlined!]: isOutlined,
    })

    const content = isLoading ? (
        <div className={styles.content}>
            <div className={styles.hide}>{children}</div>
            <div className={styles.spinnerWrapper}>
                <Spinner />
            </div>
        </div>
    ) : (
        children
    )

    const commonProps = {
        ...rest,
        onClick: isDisabled || isLoading ? undefined : onClick,
    }

    return (
        <button type='button' ref={ref} className={btnClass} {...commonProps}>
            {content}
        </button>
    )
}
