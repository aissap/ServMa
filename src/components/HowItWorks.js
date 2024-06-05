// HowItWorks.js
import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search-icon.png';
import contactIcon from '../assets/contact-icon.png';
import bookMeetIcon from '../assets/book-meet-icon.png';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="animated-text">How It Works</h2>
      <div className="steps">
        <div className="step">
          <Link to="/search">
            <img src={searchIcon} alt="Search Icon" className="icon" />
            <div className="step-info">
              <h3>1. Search</h3>
              <p>Find the service you need by browsing our categories.</p>
            </div>
          </Link>
        </div>
        <div className="step">
          <Link to="/contact">
            <img src={contactIcon} alt="Contact Icon" className="icon" />
            <div className="step-info">
              <h3>2. Contact</h3>
              <p>Reach out to the professional to discuss your requirements.</p>
            </div>
          </Link>
        </div>
        <div className="step">
          <Link to="/book-meet">
            <img src={bookMeetIcon} alt="Book & Meet Icon" className="icon" />
            <div className="step-info">
              <h3>3. Book & Meet</h3>
              <p>Schedule a meeting and get the job done.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
