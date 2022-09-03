import { useState } from "react";
import { Link } from "react-scroll";

import Logo from '../images/sport.png';

import './Navbar.css';

export default function Navbar() {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }
    
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={ nav ? "nav active" : "nav" }>
            <Link to="main" className="logo" smooth={true} duration={2000}>
                <img src={Logo} alt="carroms" />
            </Link>
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
                <li><Link to="games" smooth={true} duration={1000}>Calendar</Link></li>
                {/* <li><Link to="details" smooth={true} duration={1000}>Details</Link></li> */}
                {/* <li><Link to="about" smooth={true} duration={1000}>About</Link></li> */}
                <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
            </ul>
        </nav>
    )
}
