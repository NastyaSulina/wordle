import { useEffect, useState } from 'react'

export const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)

        const updateIsMobile = () => setIsMobile(mediaQuery.matches)

        updateIsMobile()
        mediaQuery.addEventListener('change', updateIsMobile)

        return () => {
            mediaQuery.removeEventListener('change', updateIsMobile)
        }
    }, [breakpoint])

    return isMobile
}
