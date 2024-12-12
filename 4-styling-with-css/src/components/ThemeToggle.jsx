import { useState } from 'react';
import './button.css';
import { useEffect } from 'react';
import themeStyles from './theme.module.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.body.className = theme === "light" ? themeStyles.lightTheme : "dark";
    }, [theme]);

    return (
        <>
            <button className="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toogle Theme
            </button>
        </>
    );
}

export default ThemeToggle;