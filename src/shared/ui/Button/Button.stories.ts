import { fn } from 'storybook/test'

import { Button, ButtonSize } from './Button'

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
        isPixelated: {
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
        isPixelated: true,
    },
}

export const Custom: Story = {
    args: {
        children: 'Custom Button',
        isDisabled: false,
        isLoading: false,
        backgroundColor: 'var(--green)',
        isPixelated: true,
    },
}

export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        size: ButtonSize.M,
        isDisabled: true,
        isLoading: false,
        isPixelated: true,
    },
}

export const Loading: Story = {
    args: {
        children: 'Loading...',
        size: ButtonSize.S,
        isDisabled: false,
        isLoading: true,
        isPixelated: true,
    },
}

export const Simple: Story = {
    args: {
        children: 'Simple Button',
        size: ButtonSize.L,
        isDisabled: false,
        isLoading: false,
        backgroundColor: '#fff',
        isPixelated: false,
    },
}
