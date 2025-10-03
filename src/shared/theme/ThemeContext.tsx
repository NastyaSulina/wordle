import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export enum Theme {
    light = 'light',
    dark = 'dark',
}

const ThemeContext = createContext<{
    theme: Theme
    setTheme: (theme: Theme) => void
}>({
    theme: Theme.light,
    setTheme: () => {},
})

const THEME_KEY = 'user-theme'

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const getSystemTheme = (): Theme => {
        return window?.matchMedia('(prefers-color-scheme: dark)')?.matches
            ? Theme.dark
            : Theme.light
    }

    const getStoredTheme = (): Theme | null => {
        try {
            const stored = localStorage.getItem(THEME_KEY)
            return stored === Theme.light || stored === Theme.dark ? stored : null
        } catch {
            return null
        }
    }

    const [theme, setThemeState] = useState(() => {
        return getStoredTheme() || getSystemTheme()
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)

        try {
            localStorage.setItem(THEME_KEY, theme)
        } catch {
            // Ничего не делаем, если localStorage недоступен
        }
    }, [theme])

    const contextValue = useMemo(
        () => ({
            theme,
            setTheme: setThemeState,
        }),
        [theme],
    )

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
