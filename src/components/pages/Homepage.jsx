import { useEffect } from 'react';
import ThreeBuilding from '../common/ThreeArt';

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
        <div className='homepage-main'>
            <div className='homepage-main'>
                <ThreeBuilding className='homepage-planets' />
                <p className='homepage-text h-text-1'>mathis coco</p>
                <h2 className='homepage-text h-text-2'>{welcome}</h2>
            </div>
        </div>
    );
}

export default Homepage;
