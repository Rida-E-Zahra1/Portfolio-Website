import React, { useState } from 'react'
import { Link, location, useLocation } from 'react-router-dom'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

  const [isMobile, setIsMobile] = useState(false);

  let menuToggle = (e) => {
    // Wait for the animation to complete before toggling the menu
    setTimeout(() => setIsMobile(!isMobile), 300);
  };

  const location = useLocation(); // Hook to get the current location
  // Function to determine if the which page's link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div>
        <nav className='navbar'>
            <h1 className='nav-logo'>My Portfolio</h1>
            <ul className={isMobile ? 'nav-links nav-links-mobile' : 'nav-links'}>
                <li><Link to='/' onClick={menuToggle} className={isActive('/') ? 'active' : ''}>
                  Home</Link></li>
                <li><Link to='/education' onClick={menuToggle} className={isActive('/education') ? 'active' : ''}>
                  Education</Link></li>
                <li><Link to='/projects' onClick={menuToggle} className={isActive('/projects') ? 'active' : ''}>
                  Projects</Link></li>
                <li><Link to='/skills' onClick={menuToggle} className={isActive('/skills') ? 'active' : ''}>
                  Skills</Link></li>
                <li><Link to='/contact' onClick={menuToggle} className={isActive('/contact') ? 'active' : ''}>
                  Contact</Link></li>
            </ul>
            <button className='mobile-menu-icon' onClick={menuToggle}>
              <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
            </button>
        </nav>
    </div>
  )
}
