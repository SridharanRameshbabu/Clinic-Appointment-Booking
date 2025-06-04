import React  from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import completed from "../../assests/appointment.png"
import pending from "../../assests/clock.png"


const ClinicDashboard = () => {

  const clinicdetail = JSON.parse(localStorage.getItem('clinicdetails'))
  const appointmentData = JSON.parse(localStorage.getItem("appointments")) || [];
  const CompletedAppointment = JSON.parse(localStorage.getItem('completedappointments')) || [];
  return (
    <div>
      <>
      <Navbar />

      <div className='container' style={{paddingTop:"73px"}}>
        <h1>{clinicdetail.clinicName}</h1>
        <div className='row my-4 justify-content-center'>
          <div className='col-md-4'>
            <a href="/patients" className='text-decoration-none'>
              <div className='card p-2'>
                <div className='d-flex justify-content-between align-items-center'>
                  <img src={completed} alt="completed appointments" style={{width:"100px"}} />
                  <div className='card-body text-end'>
                    <h3 className='mb-2'>{CompletedAppointment.length}</h3>
                    <h4><span className='badge bg-success mt-3'>Patients<i class="bi bi-check2-square text-white ms-2"></i></span></h4>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className='col-md-4'>
            <a href="/pendingappointments" className='text-decoration-none'>
            <div className='card p-2'>
              <div className='d-flex justify-content-between align-items-center'>
                <img src={pending} alt="completed appointments" style={{width:"100px"}} />
                <div className='card-body text-end'>
                  <h3 className='mb-2'>{appointmentData.length}</h3>
                  <h4><span className='badge bg-warning mt-3'>Pending Appointment<i class="bi bi-clock-fill text-white ms-2"></i></span></h4>
                </div>
              </div>
            </div>
            </a>
          </div>

        </div>
      </div>

      <Footer />
      </>
    </div>
  )
}

export default ClinicDashboard
