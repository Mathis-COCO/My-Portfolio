import { Link } from 'react-router-dom';
import '../assets/css/components/Navbar.scss'

function Navbar() {
    return (
        <div className="navbar-main-container">
            <div className="navbar-left-container">
                <img src="" alt="Portfolio Logo" />
            </div>
            <div className="navbar-right-container">
                <Link className='navbar-right-txt'>projects</Link>
                <Link className='navbar-right-txt'>me</Link>
            </div>
        </div>
    );
}

export default Navbar;
