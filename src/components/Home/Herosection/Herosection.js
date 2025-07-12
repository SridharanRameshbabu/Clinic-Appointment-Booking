import React from 'react';
import './Herosection.css';
import {Link} from 'react-router-dom'

const Herosection = () => {

  const usertype = localStorage.getItem("usertype");
  return (
    <div className="text-center" style={{paddingTop: '70px'}}>
      <div className="hero-section pt-5 bg-light">
        <h1 className="display-3 pt-5">Book Trusted Doctor Appointments Instantly with Visit Dr</h1>
        <p className="lead">Find experienced doctors, schedule appointments, and manage your healthcare—all in one place.<br/>
Trusted by patients. Recommended by professionals.</p>
        <Link to={usertype !== "patient" ? "/patientregister" : "/bookappointment"} className="btn btn-primary">
          Book an Appointment
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
