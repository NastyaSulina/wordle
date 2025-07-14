import { fn } from 'storybook/test'

import { Button, ButtonSize } from './Button'

import { CustomCSSProperties } from '@/shared/constants'

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
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Default Button',
        size: ButtonSize.L,
        isDisabled: false,
        isLoading: false,
    },
}

export const Custom: Story = {
    args: {
        children: 'Custom Button',
        isDisabled: false,
        isLoading: false,
        style: { '--accent': '#B4D7AC', height: '48px', width: '200px' } as CustomCSSProperties,
    },
}

export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        size: ButtonSize.M,
        isDisabled: true,
        isLoading: false,
    },
}

export const Loading: Story = {
    args: {
        children: 'Loading...',
        size: ButtonSize.S,
        isDisabled: false,
        isLoading: true,
    },
}
