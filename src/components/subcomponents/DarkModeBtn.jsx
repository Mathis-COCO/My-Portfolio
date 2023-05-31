import { useContext, useState } from "react";
import {ThemeContext} from '../../contexts/ThemeContext'

function DarkModeBtn() {
    const [appTheme, setAppTheme] = useContext(ThemeContext)

    const handleDarkModeToggle = () => {
      appTheme === 'Light' ? setAppTheme('Dark') : setAppTheme('Light');
      document.body.classList.toggle('dark-mode');
    };

    return (
        <div className="dark-mode-container">
            <input type="checkbox" id="dark-mode-toggle" onChange={handleDarkModeToggle} />
            <label htmlFor="dark-mode-toggle"></label>
        </div>
    );
}

export default DarkModeBtn;
