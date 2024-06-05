import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Logo.png';
import { ReactComponent as MoonIcon } from '../assets/Moon.svg';
import { ReactComponent as SunIcon } from '../assets/Sun.svg';

function Header() {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    document.body.className = themeMode;
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className={`header ${themeMode}`}>
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search services..." />
      </div>
      <div className="dark-mode-switch" onClick={toggleTheme}>
        {themeMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </div>
    </header>
  );
}

export default Header;
