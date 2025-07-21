import { useState } from 'react'
import cn from 'clsx'

import styles from './Select.module.scss'

import { KeyboardKeys } from '@/shared/constants'
import { useOutsideClick } from '@/shared/hooks'
import checkIcon from '@/shared/assets/check.svg'

export type Option = {
    title: string
    value: string
}

type SelectProps = {
    options: Option[]
    selected: string | null
    placeholder?: string
    onChange: (value: string) => void
    onClose?: () => void
    hasError?: boolean
}

export const Select = ({
    options,
    selected,
    placeholder = '',
    onChange,
    onClose,
    hasError = false,
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen((prev) => !prev)

    const close = () => {
        setIsOpen(false)
        onClose?.()
    }

    const handleOptionClick = (value: string) => {
        onChange(value)
        close()
    }

    const ref = useOutsideClick(close)

    const selectedOption = options.find((opt) => opt.value === selected)

    return (
        <div
            ref={ref}
            className={cn(styles.select, {
                [styles.open]: isOpen,
                [styles.error]: hasError,
            })}
        >
            <button
                className={styles.placeholder}
                aria-haspopup='listbox'
                aria-expanded={isOpen}
                onClick={toggle}
                onKeyDown={(e) => {
                    if (e.key === KeyboardKeys.Enter || e.key === KeyboardKeys.Space) {
                        e.preventDefault()
                        toggle()
                    } else if (e.key === KeyboardKeys.Escape) {
                        close()
                    }
                }}
            >
                <span>{selectedOption ? selectedOption.title : placeholder}</span>

                <span
                    className={cn(styles.chevron, {
                        [styles.chevronOpen]: isOpen,
                    })}
                    aria-hidden
                />
            </button>

            {isOpen && (
                <div className={styles.optionsWrapper} role='listbox' tabIndex={-1}>
                    {options.map((option) => {
                        const isSelected = selected === option.value
                        return (
                            <button
                                key={option.value}
                                role='option'
                                aria-selected={isSelected}
                                className={styles.option}
                                onClick={() => handleOptionClick(option.value)}
                                onKeyDown={(e) => {
                                    if (
                                        e.key === KeyboardKeys.Enter ||
                                        e.key === KeyboardKeys.Space
                                    ) {
                                        e.preventDefault()
                                        handleOptionClick(option.value)
                                    }
                                }}
                            >
                                <span>{option.title}</span>

                                {isSelected && (
                                    <img
                                        className={styles.check}
                                        src={checkIcon}
                                        aria-hidden
                                        alt=''
                                    />
                                )}
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
