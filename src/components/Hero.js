import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import heroImage from '../assets/hero-image.jpg';  // Import hero image

function Hero() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/create-profile?userType=client');
  };

  const handleListServiceClick = () => {
    navigate('/create-profile?userType=service-provider');
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="overlay">
        <h1>Find Local Experts for Your Needs</h1>
        <p>From home repairs to personal tutoring, get the help you need from trusted professionals.</p>
        <div className="cta-buttons">
          <button onClick={handleGetStartedClick}>Get Started</button>
          <button onClick={handleListServiceClick}>List Your Service</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
