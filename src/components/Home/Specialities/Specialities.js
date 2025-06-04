import React from 'react';
import './Specialities.css';

import heart from '../../../assests/heart.png';
import spine from '../../../assests/spine.png';
import ortho from '../../../assests/orthopaedics.png';
import cancer from '../../../assests/cancer-care.png';
import neuro from '../../../assests/neurosciences.png';
import gastro from '../../../assests/gastroenterology.png';
import ayurveda from '../../../assests/ayurveda.png';
import dentist from '../../../assests/dentist.png';
import psych from '../../../assests/psychiatrist.png';
import gyn from '../../../assests/gynecology.png';
import uro from '../../../assests/urologist.png';
import paed from '../../../assests/pediatrician.png';

const specialties = [
  { img: heart, title: 'Cardiologist' },
  { img: spine, title: 'Neurosurgeon' },
  { img: ortho, title: 'Orthopaedics' },
  { img: cancer, title: 'Oncologist' },
  { img: neuro, title: 'Neurologist' },
  { img: gastro, title: 'Gastroenterologist' },
  { img: ayurveda, title: 'Ayurvedic' },
  { img: dentist, title: 'Dentist' },
  { img: psych, title: 'Psychiatrist' },
  { img: gyn, title: 'Gynaecologist' },
  { img: uro, title: 'Urologist' },
  { img: paed, title: 'Paediatrics' }
];

const Specialities = () => {
  return (
    <section className="specialities-section py-5">
      <div className="container text-center">
        <h2 className="mb-4">OUR SPECIALITIES</h2>
        <div className="row">
          {specialties.map((speciality, index) => (
            <div key={index} className="col-md-2 col-4 mb-4">
              <img src={speciality.img} alt={speciality.title} className="img-fluid" />
              <p>{speciality.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
