import style from './homepage.module.scss';
import { useEffect } from 'react';
import ThreeBuilding from '../../components/ThreeJS/index.tsx';
import React from 'react';

function Homepage() {
    const welcome = 'welcome to my portfolio'

    useEffect(() => {
        setTimeout(() => {
            const planets = document.querySelector('.homepage-planets');
            if (planets) {
                planets.classList.add('fade-in');
            }
        }, 100);
      }, []);

    return (
        <>
            <div className={style.homepageMain}>
                <p className={style.homepageText}>mathis coco</p>
                <h2 className={style.homepageText}>{welcome}</h2>
                <ThreeBuilding className={style.homepagePlanets} />
            </div>
        </>
    );
}

export default Homepage;
