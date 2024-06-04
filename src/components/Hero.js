import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Find Local Experts for Your Needs</h1>
      <p>From home repairs to personal tutoring, get the help you need from trusted professionals.</p>
      <div className="cta-buttons">
        <button>Get Started</button>
        <button>List Your Service</button>
      </div>
    </section>
  );
}

export default Hero;
