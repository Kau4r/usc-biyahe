'use client'
import { useTheme } from "next-themes"

import Styles from './theme.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    const chkTheme = (theme) => {
        return theme === 'light' ? faSun : faMoon
    }

    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={Styles.theme}>
            <FontAwesomeIcon icon={chkTheme(theme)}/>
        </button>
    )
}