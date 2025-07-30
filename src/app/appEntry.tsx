import { createRoot } from 'react-dom/client'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'

import Routing from './appRouter'

import i18n from '../../i18n'

import { Message } from '@/widgets/Message'
import '@/shared/theme/globalStyles.scss'
import { ThemeProvider } from '@/shared/theme/ThemeContext'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider>
                <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/wordle' : '/'}>
                    <Routing />
                    <Message />
                </BrowserRouter>
            </ThemeProvider>
        </I18nextProvider>
    </React.StrictMode>,
)
