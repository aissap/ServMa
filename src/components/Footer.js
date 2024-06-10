import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebookLogo from '../assets/facebook-logo.png'; // Import Facebook logo
import instagramLogo from '../assets/instagram-logo.png'; // Import Instagram logo

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#ead173' }}> {/* Set background color */}
      <div className="footer-content">
        <div className="footer-column">
          <h3 style={{ color: '#333' }}>L'mo9ef</h3> {/* Set text color */}
          <ul>
            <li><Link to="/about" style={{ color: '#333' }}>About Us</Link></li> {/* Set text color */}
            <li><Link to="/services" style={{ color: '#333' }}>Services</Link></li> {/* Set text color */}
            <li><Link to="/contact" style={{ color: '#333' }}>Contact Us</Link></li> {/* Set text color */}
          </ul>
        </div>
        <div className="footer-column">
          <h3 style={{ color: '#333' }}>Connect with Us</h3> {/* Set text color */}
          <ul>
            <li><a href="https://www.facebook.com"><img src={facebookLogo} alt="Facebook" /></a></li> {/* Add Facebook logo */}
            <li><a href="https://www.instagram.com"><img src={instagramLogo} alt="Instagram" /></a></li> {/* Add Instagram logo */}
            {/* Add links for other social media platforms */}
          </ul>
        </div>
        <div className="footer-column">
          <h3 style={{ color: '#333' }}>Contact Info</h3> {/* Set text color */}
          <p style={{ color: '#333' }}>Email: aissazerrad93@gmail.com</p> {/* Set text color */}
          <p style={{ color: '#333' }}>Phone: +212 707696305</p> {/* Set text color */}
          <p style={{ color: '#333' }}>Address: 123 Main Street, Oujda, Morocco</p> {/* Set text color */}
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{ color: '#333' }}>&copy; 2024 L'mo9ef. All rights reserved.</p> {/* Set text color */}
      </div>
    </footer>
  );
}

export default Footer;
