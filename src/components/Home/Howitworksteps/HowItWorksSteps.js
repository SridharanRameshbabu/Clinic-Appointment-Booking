import React from 'react';
import './HowItWorksSteps.css';

import search from '../../../assests/search.jpg';
import calendar from '../../../assests/calender.jpg';
import book from '../../../assests/book.jpg';
import meet from '../../../assests/meet.jpg';
import cure from '../../../assests/cure.jpg';

const steps = [
  {
    title: 'Search A Doctor',
    img: search,
    description: 'Now find top doctors in a SINGLE CLICK.'
  },
  {
    title: 'Check His Availability',
    img: calendar,
    description: 'Based on dynamic online calendar.'
  },
  {
    title: 'Book an Appointment',
    img: book,
    description: 'Get confirmed appointment by making online payment.'
  },
  {
    title: 'Visit the Doctor',
    img: meet,
    description: 'At the appointed date and time.'
  },
  {
    title: 'GET Cured!!!',
    img: cure,
    description: 'By taking prescribed medicines and advice.'
  }
];

const HowItWorksSteps = () => {
  return (
    <section className="how-steps-section bg-dark py-5">
      <div className="container p-3">
        <h2 className="text-center my-4 text-white">How It Works</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {steps.map((step, index) => (
            <div key={index} className="card m-2 text-center p-3 how-step-card">
              <div className="card-body">
                <h5 className="card-title">{step.title}</h5>
                <img
                  src={step.img}
                  alt={step.title}
                  className="img-fluid mx-auto d-block"
                  width="80"
                />
                <p className="card-text mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
