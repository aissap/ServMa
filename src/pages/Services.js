import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Our Services</h1>
        <p>Find the best professionals for all your needs</p>
      </section>

      {/* Service Categories */}
      <section className="service-categories">
        <h2>Service Categories</h2>
        <div className="categories-grid">
          <div className="category-card">Plumbing</div>
          <div className="category-card">Carpentry</div>
          <div className="category-card">Cleaning</div>
          <div className="category-card">Electrical</div>
          {/* Add more categories as needed */}
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-services">
        <h2>Featured Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Top-rated Plumber</h3>
            <p>John Doe - 5 stars</p>
            <p>Expert plumbing services with excellent reviews.</p>
            <button>Learn More</button>
          </div>
          <div className="service-card">
            <h3>Popular Carpenter</h3>
            <p>Jane Smith - 4.8 stars</p>
            <p>Skilled carpentry services for all your woodwork needs.</p>
            <button>Learn More</button>
          </div>
          <div className="service-card">
            <h3>New Cleaning Service</h3>
            <p>Mary Johnson - 4.9 stars</p>
            <p>Reliable and thorough cleaning services for your home.</p>
            <button>Learn More</button>
          </div>
          {/* Add more service cards as needed */}
        </div>
      </section>
    </div>
  );
}

export default Services;
