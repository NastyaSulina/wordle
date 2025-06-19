import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Landing } from '@/pages/Landing'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                {/* <Route path='/error' element={<ErrorPage />} />
                <Route path='*' element={<Navigate to='/error' replace />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
