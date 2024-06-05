import React from 'react';
import logo from '../assets/Logo.png'; // Import the logo image
import './About.css';

function About() {
  return (
    <section className="about" style={{ backgroundImage: `url(${logo})` }}>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to L'mo9ef! Founded by Aissa Zerrad, a passionate software engineer from Morocco, L'mo9ef is the culmination of a visionary journey to revolutionize service provision. Our mission is simple: to seamlessly connect individuals with skilled artisans, transcending geographical boundaries and fostering a sense of community empowerment.
        </p>
        <p>
          At L'mo9ef, we believe in the transformative power of technology to enhance lives and create meaningful connections. Through our intuitive platform, users gain access to a diverse network of vetted professionals, ensuring unmatched quality and reliability.
        </p>
        <p>
          L'mo9ef isn't just a platform; it's a vibrant ecosystem where connections are forged, experiences are shared, and excellence is celebrated. Join us as we embark on a journey to redefine service provision, one connection at a time.
        </p>
      </div>
    </section>
  );
}

export default About;
