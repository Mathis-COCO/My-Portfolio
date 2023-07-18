import style from './header.module.scss';
import { Link } from 'react-router-dom';
import DarkModeBtn from '../Buttons/DarkModeButton/index.tsx';
import React from 'react';

function Navbar() {
    return (
        <>
            <div className={style.navbarMain}>
                <div className={style.navbarLeftContainer}>
                    <img src="" alt="Portfolio Logo" />
                </div>
                <div className={style.navbarRight}>
                    <Link to={'/'} className={style.navbarRightTxt}>projects</Link>
                    <Link to={'/'} className={style.navbarRightTxt}>me</Link>
                    <DarkModeBtn />
                </div>
            </div>
        </>
    );
}

export default Navbar;
