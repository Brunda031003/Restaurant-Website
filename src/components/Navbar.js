import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">🍜BRUZ</Link>
            </div>
            <div className="nav-links">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive ? 'active' : ''
                    }
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({ isActive }) => 
                        isActive ? 'active' : ''
                    }
                >
                    About
                </NavLink>
                <NavLink 
                to="/products"
                className={({ isActive }) => 
                    isActive ? 'active' : ''
                }
            >
                Menu
                </NavLink>
                <NavLink 
                to="/Login"
                className={({ isActive }) => 
                    isActive ? 'active' : ''
                }
            >
                Login
                </NavLink>
        </div>
    </nav>
);
}

export default Navbar;