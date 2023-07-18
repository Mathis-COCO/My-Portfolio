import style from './darkModeButton.module.scss';
import { useContext } from "react";
import {ThemeContext} from '../../../contexts/ThemeContext.tsx';
import React from 'react';

function DarkModeBtn() {
    const [appTheme, setAppTheme] = useContext(ThemeContext)

    const handleDarkModeToggle = () => {
      appTheme === 'Light' ? setAppTheme('Dark') : setAppTheme('Light');
      document.body.classList.toggle('dark-mode');
    };

    return (
        <>
            <div className={style.darkModeContainer}>
                <input type="checkbox" id="dark-mode-toggle" onChange={handleDarkModeToggle} />
                <label htmlFor="dark-mode-toggle"></label>
            </div>
        </>
    );
}

export default DarkModeBtn;
