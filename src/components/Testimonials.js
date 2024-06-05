import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial">
        <p>"Amazing service! Fixed my plumbing issues in no time."</p>
        <div className="rating">
          <span role="img" aria-label="Star">&#x2B50;</span>
          <span role="img" aria-label="Star">&#x2B50;</span>
          <span role="img" aria-label="Star">&#x2B50;</span>
          <span role="img" aria-label="Star">&#x2B50;</span>
          <span role="img" aria-label="Star">&#x2B50;</span>
        </div>
        <cite>– Jane Doe</cite>
      </div>
      <div className="testimonial">
        <p>"Great personal trainer who helped me reach my fitness goals."</p>
        <div className="rating">
          <span role="img" aria-label="Star">&#x2B50;</span>
          <span role="img" aria-label="Star">&#x2B50;</span>
          <span role="img" aria-label="Star">&#x2B50;</span>
          <span role="img" aria-label="Star">&#x2B50;</span>
          <span role="img" aria-label="Star">&#x2B50;</span>
        </div>
        <cite>– John Smith</cite>
      </div>
    </section>
  );
}

export default Testimonials;
