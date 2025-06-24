import { fn } from 'storybook/test'

import { Button, ButtonType, ButtonSize } from './Button'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
        },
        buttonType: {
            control: 'select',
            options: Object.values(ButtonType),
        },
        size: {
            control: 'select',
            options: Object.values(ButtonSize),
        },
        isDisabled: {
            control: 'boolean',
        },
        isLoading: {
            control: 'boolean',
        },
        isRounded: {
            control: 'boolean',
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        buttonType: ButtonType.primary,
        size: ButtonSize.M,
        isDisabled: false,
        isLoading: false,
        isRounded: true,
        isOutlined: false,
    },
}

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        buttonType: ButtonType.secondary,
        size: ButtonSize.S,
        isDisabled: false,
        isLoading: false,
        isRounded: false,
        isOutlined: false,
    },
}

export const Danger: Story = {
    args: {
        children: 'Danger Button',
        buttonType: ButtonType.danger,
        size: ButtonSize.L,
        isDisabled: false,
        isLoading: false,
        isRounded: false,
        isOutlined: true,
    },
}

export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        buttonType: ButtonType.primary,
        size: ButtonSize.M,
        isDisabled: true,
        isLoading: false,
        isRounded: false,
        isOutlined: false,
    },
}

export const Loading: Story = {
    args: {
        children: 'Loading...',
        buttonType: ButtonType.secondary,
        size: ButtonSize.M,
        isDisabled: false,
        isLoading: true,
        isRounded: true,
        isOutlined: false,
    },
}
