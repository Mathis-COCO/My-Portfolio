import '../assets/css/Homepage.scss'
import Navbar from '../components/Navbar';
import ThreeBuilding from '../components/ThreeArt';

function Homepage() {
    const welcome = 'welcome to my portfolio'
    return (
        <div>
            <Navbar />
            <div className="homepage-main">
                <ThreeBuilding className='homepage-planets' />
                <p className='homepage-text h-text-1'>mathis coco</p>
                <h2 className='homepage-text h-text-2'>{welcome}</h2>
            </div>
        </div>
    );
}

export default Homepage;
