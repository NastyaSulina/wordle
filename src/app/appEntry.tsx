import { createRoot } from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routing from './appRouter'

import '../../i18n'

import { Message } from '@/widgets/Message'
import '@/shared/theme/globalStyles.scss'
import { ThemeProvider } from '@/shared/theme/ThemeContext'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/wordle' : '/'}>
                <Routing />
                <Message />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
)
