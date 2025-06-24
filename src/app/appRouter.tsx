import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Landing } from '@/pages/Landing'
import { ErrorPage } from '@/pages/ErrorPage'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/error' element={<ErrorPage />} />
                <Route path='*' element={<Navigate to='/error' replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
