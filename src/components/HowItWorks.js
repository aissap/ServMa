import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Search</h3>
          <p>Find the service you need by browsing our categories.</p>
        </div>
        <div className="step">
          <h3>2. Contact</h3>
          <p>Reach out to the professional to discuss your requirements.</p>
        </div>
        <div className="step">
          <h3>3. Book & Meet</h3>
          <p>Schedule a meeting and get the job done.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
