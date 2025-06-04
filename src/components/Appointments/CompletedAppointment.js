import React, { useEffect, useState } from 'react'
import './CompletedAppointment.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const CompletedAppointment = () => {

    const [completed,setCompleted] = useState([])

    useEffect(() =>{
        const completedAppointment = JSON.parse(localStorage.getItem("completedappointments")) || [];
        setCompleted(completedAppointment)
    },[])


  return (
    <div>
       <Navbar />
       <div className='container mt-5'> 
        <h3 className="mb-4 table-heading text-center">✅ Completed Appointments</h3>
        <table className="table table-striped table-hover custom-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th><i className="bi bi-person-fill me-1"></i>Patient Name</th>
                    <th><i className="bi bi-hospital-fill me-1"></i>Clinic Name</th>
                    <th><i className="bi bi-calendar-event me-1"></i>Date</th>
                    <th><i className="bi bi-clock-fill me-1"></i>Time</th>
                    <th><i className="bi bi-info-circle-fill me-1"></i>Status</th>
                </tr>
            </thead>
            <tbody>
                {completed.map((appointment, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{appointment.patientName}</td>
                        <td>{appointment.clinicName}</td>
                        <td>{appointment.appointmentDate}</td>
                        <td>{appointment.appointmentTime}</td>
                        <td>
                            <span className={`status-badge completed`}>
                                {appointment.status}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default CompletedAppointment
