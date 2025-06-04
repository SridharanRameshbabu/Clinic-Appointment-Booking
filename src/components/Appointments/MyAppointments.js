import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './MyAppointment.css'

const MyAppointments = () => {

    const [appointments,SetAppointments] = useState([])
    const [completed,setCompleted] = useState([])

    useEffect(() =>{
        const appointmentData = JSON.parse(localStorage.getItem("appointments")) || [];
        SetAppointments(appointmentData)
        const completedAppointment = JSON.parse(localStorage.getItem("completedappointments")) || [];
        setCompleted(completedAppointment)
        
    },[])

  return (
    <div>
        <Navbar />
        <div className="container mt-5">
            <div className="table-responsive">
                <h3 className="mb-4 table-heading text-center">📅 Appointment List</h3>
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
                    {appointments.map((appointment, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{appointment.patientName}</td>
                        <td>{appointment.clinicName}</td>
                        <td>{appointment.appointmentDate}</td>
                        <td>{appointment.appointmentTime}</td>
                        <td>
                        <span
                            className={`status-badge ${
                            appointment.status === 'Approved'
                                ? 'approved'
                                : appointment.status === 'Pending'
                                ? 'pending'
                                : 'rejected'
                            }`}
                        >
                            {appointment.status}
                        </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <div>
                <h3 className="my-4 table-heading text-center">✅ Completed Appointments</h3>
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
        </div>

        <Footer />
    </div>
  )
}

export default MyAppointments
