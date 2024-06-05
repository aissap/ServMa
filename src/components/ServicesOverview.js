import React from 'react';
import './ServicesOverview.css';
import serviceImage1 from '../assets/service1.jpg';
import serviceImage2 from '../assets/service2.jpg';
import serviceImage3 from '../assets/service3.jpg';
import { useHistory } from 'react-router-dom';


function ServicesOverview() {
  const serviceData = [
    { 
      id: 1, 
      image: serviceImage1, 
      title: 'Construction Workers', 
      description: 'Physical construction of buildings, infrastructure, and other structures.' 
    },
    { 
      id: 2, 
      image: serviceImage2, 
      title: 'Electrical Repair Workers', 
      description: 'Electrical maintenance and repair services to prevent potential damage or safeguard against malfunctions.' 
    },
    { 
      id: 3, 
      image: serviceImage3, 
      title: 'Plumber Workers', 
      description: 'Professionals who install, maintain, and repair pipes and plumbing systems.' 
    }
  ];

  const handleClick = (id) => {
    console.log(`Clicked on service ${id}`);
    // Handle click event, e.g., redirect to the respective services category
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
