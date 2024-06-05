import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.jpg';  // Import hero image

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="overlay">
        <h1>Find Local Experts for Your Needs</h1>
        <p>From home repairs to personal tutoring, get the help you need from trusted professionals.</p>
        <div className="cta-buttons">
          <button>Get Started</button>
          <button>List Your Service</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
