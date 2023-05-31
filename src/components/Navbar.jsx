import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-main-container">
            <div className="navbar-left-container">
                <img src="" alt="Portfolio Logo" />
            </div>
            <div className="navbar-right-container">
                <Link to={'/'} className='navbar-right-txt'>projects</Link>
                <Link to={'/'} className='navbar-right-txt'>me</Link>
            </div>
        </div>
    );
}

export default Navbar;
