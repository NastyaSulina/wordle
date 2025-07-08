import { createRoot } from 'react-dom/client'
import React from 'react'

import Routing from './appRouter'

import '../shared/themes/globalStyles.scss'
import { Message } from '@/widgets/Message'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Routing />
        <Message />
    </React.StrictMode>,
)
