import React from 'react';
import './ServicesOverview.css';
import serviceImage1 from '../assets/service1.jpg';
import serviceImage2 from '../assets/service2.jpg';
import serviceImage3 from '../assets/service3.jpg';
// Add more imports for additional service images

function ServicesOverview() {
  const serviceData = [
    { id: 1, image: serviceImage1, title: 'Service 1', description: 'Description of Service 1' },
    { id: 2, image: serviceImage2, title: 'Service 2', description: 'Description of Service 2' },
    { id: 3, image: serviceImage3, title: 'Service 3', description: 'Description of Service 3' },
    // Add more service data for additional sections
  ];

  const handleClick = (id) => {
    // Handle click event, e.g., redirect to the respective services category
    console.log(`Clicked on service ${id}`);
  };

  return (
    <section className="services">
      {serviceData.map(service => (
        <div className="service-card" key={service.id} onClick={() => handleClick(service.id)}>
          <img src={service.image} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}

export default ServicesOverview;
