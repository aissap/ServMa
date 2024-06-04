import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}

export default Home;
