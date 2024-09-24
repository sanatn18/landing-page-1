import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false); //creating a state for the hamburger menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='nav'>
        <div className="nav-logo">Bikers Arena</div>
        <div className={`nav-menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      </div>
      
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar