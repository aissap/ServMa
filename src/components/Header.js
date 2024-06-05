import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Logo.png';  // Ensure this matches your file name

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>  {/* Add About Us link */}
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search services..." />
      </div>
    </header>
  );
}

export default Header;
