import React from 'react';
import './ServicesOverview.css';

function ServicesOverview() {
  return (
    <section className="services-overview">
      <h2>Our Services</h2>
      <div className="services">
        <div className="service">
          <img src="home-repair.jpg" alt="Home Repairs" />
          <h3>Home Repairs</h3>
          <p>Find trusted professionals to fix anything around your house.</p>
        </div>
        <div className="service">
          <img src="personal-training.jpg" alt="Personal Training" />
          <h3>Personal Training</h3>
          <p>Get in shape with the help of a personal trainer.</p>
        </div>
        <div className="service">
          <img src="tutoring.jpg" alt="Tutoring" />
          <h3>Tutoring</h3>
          <p>Improve your skills with personalized tutoring sessions.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
