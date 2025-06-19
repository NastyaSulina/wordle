import { createRoot } from 'react-dom/client'
import React from 'react'

import Routing from './appRouter'
import './styles/globalStyles.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>,
)
