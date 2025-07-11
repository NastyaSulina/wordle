import { createRoot } from 'react-dom/client'
import React from 'react'

import Routing from './appRouter'

import '../../i18n'
import { Message } from '@/widgets/Message'
import '@/shared/themes/globalStyles.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Routing />
        <Message />
    </React.StrictMode>,
)
