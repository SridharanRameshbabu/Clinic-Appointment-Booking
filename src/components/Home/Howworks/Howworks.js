import React from 'react';
import './Howworks.css';
import registerImg from '../../../assests/register.jpg';
import findImg from '../../../assests/find.jpg';
import appointmentImg from '../../../assests/appointment.jpg';

const Howworks = () => {

  const items = [
    {
      img: registerImg,
      title: 'Step 1: Register',
      text: 'Patients and doctors register on the platform to access the services.',
    },
    {
      img: findImg,
      title: 'Step 2: Find a Doctor',
      text: 'Patients can browse through registered clinics and doctors.',
    },
    {
      img: appointmentImg,
      title: 'Step 3: Book an Appointment',
      text: 'Select a doctor, choose a time, and book an appointment online.',
    },
  ]

  return (
    <section className="container my-5">
      <div className="row text-center how1">
      {items.map((item,index) => 
        <div className="col-md-4 pb-4">
            <div className="card shadow-sm p-3" key={index}>
              <img src={item.img} alt={item.title} className='card-img-top mx-auto d-block' width={80} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          </div>
          )}
      </div>
    </section>
  );
};

export default Howworks;
