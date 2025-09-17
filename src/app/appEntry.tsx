import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import Routing from './appRouter'
import '@/shared/theme/globalStyles.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    </React.StrictMode>,
)
