import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { MainPage } from '@/pages/MainPage'
import { ErrorPage } from '@/pages/ErrorPage'

const Routing = () => {
    return (
        <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/wordle' : '/'}>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/error' element={<ErrorPage />} />
                <Route path='*' element={<Navigate to='/error' replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
