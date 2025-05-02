import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import '../App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Think Kre8tiv Media</h1>

        <div className="hamburger-menu" onClick={toggleMenu}>
  {menuOpen ? <FaTimes size={30} color="#111827" /> : <FaBars size={30} color="#111827" />}
</div>


        {/* Nav Links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/AboutUs" onClick={() => setMenuOpen(false)}>AboutUs</Link></li>
          <li><Link to="/Services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/Gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
