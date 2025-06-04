import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './BookAppointment.css'

const BookAppointment = () => {

  const [clinicdata, setClinicData] = useState([])
  const [appointmentData, setAppointmentData] = useState([])
    useEffect(() =>{
      const clinicdata = JSON.parse(localStorage.getItem("clinicdetails")) || [];
      setClinicData(clinicdata)
      const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
      setAppointmentData(appointments)
    },[])

  const [formData,setFormData] = useState({
    patientName: '',
    clinicName: '',
    appointmentDate: '',
    appointmentTime: '',
    status: 'pending',
  });

  const handlechange =  (e) =>{
    const name= e.target.name;
    const value = e.target.value;
    setFormData({...formData,[name]:value})
  }

  const handlesubmit =(e) =>{
    e.preventDefault();
    setAppointmentData([...appointmentData, formData]);
    localStorage.setItem("appointments", JSON.stringify([...appointmentData, formData]));
    alert("Appointment Booked Successfully");
    setFormData({
      patientName: '',
      clinicName: '',
      appointmentDate: '',
      appointmentTime: '',
      status: 'pending',
    });
  }


  return (
    <div>
      <Navbar />

        <div className='container' style={{paddingTop: '83px'}}>
          <h1 className='text-center' style={{textTransform: 'capitalize',marginBottom:"20px"}}>Book Appointment</h1>
          <form className='mt-1 appointment-form' onSubmit={(e) =>{handlesubmit(e)}}>
            <div className='mb-2'>
              <label htmlFor='patientName' className='form-label'>Patient Name</label>
              <input type='text' className='form-control' name='patientName' placeholder='Enter Patient Name' value={formData.patientName} onChange={(e) => handlechange(e)}  />
            </div>

            <div className='mb-2'>
              <label htmlFor='clinicName' className='form-label'>Clinic Name</label>
              <select className='form-select' name='clinicName' required value={formData.clinicName} onChange={(e) => handlechange(e)}>
                <option value=''>Select Clinic</option>
                {clinicdata.length > 0 && clinicdata.map((clinicdata, index) => (
                  <option key={index} value={clinicdata.clinicName}>{clinicdata.clinicName}</option>
                ))}
              </select>
            </div>

            <div className='mb-2'>
              <label htmlFor='appointmentDate' className='form-label'>Appointment Date</label>
              <input type='date' className='form-control' name='appointmentDate' required value={formData.appointmentDate} onChange={(e) =>{handlechange(e)}} />
            </div>

            <div className='mb-2'>
              <label htmlFor='appointmentTime' className='form-label'>Appointment Time</label>
              <input type='time' className='form-control' name='appointmentTime' required onChange={(e) => handlechange(e)} />
            </div>

            <button type='submit' className='btn btn-primary'>Book Appointment</button>
          </form>
        </div>
        <Footer />
    </div>
  )
}

export default BookAppointment
