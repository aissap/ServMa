import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send email
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <section className="contact-us" style={{ backgroundColor: '#ead173' }}> {/* Set background color */}
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactUs;
