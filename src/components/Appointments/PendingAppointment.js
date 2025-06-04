import React,{useState,useEffect} from 'react'
import './PendingAppointment.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const PendingAppointment = () => {

    const [appointments,SetAppointments] = useState([])
    const [completedAppointments,SetCompletedAppointments] = useState([])
    
    useEffect(() =>{
        const appointmentData = JSON.parse(localStorage.getItem("appointments")) || [];
        SetAppointments(appointmentData)
        const completedData = JSON.parse(localStorage.getItem("completedappointments")) || [];
        SetCompletedAppointments(completedData)
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
                    <th><i className="bi bi-gear-fill me-1"></i>Action</th>
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
                    <td>
                        {appointment.status === 'pending' && (
                            <>
                                <button className="btn btn-success me-2" onClick={() => {
                                    appointment.status = 'Approved'
                                    SetAppointments([...appointments])
                                    localStorage.setItem("appointments", JSON.stringify(appointments))
                                    }}><i class="bi bi-check-circle-fill text-white"></i> Approve
                                </button>
                                <button className='btn btn-danger' onClick={() => {
                                        appointment.status = 'Rejected'
                                        SetAppointments([...appointments])
                                        localStorage.setItem("appointments", JSON.stringify(appointments))
                                    }}><i class="bi bi-x-circle-fill text-white"></i> Reject
                                </button>
                            </>
                        )}

                        {appointment.status === 'Approved' && (
                            <button className='btn' onClick={() =>{
                                const completedAppointment = {
                                    ...appointment,
                                    status: 'Completed'
                                };
                                SetCompletedAppointments([...completedAppointments, completedAppointment]);
                                localStorage.setItem("completedappointments", JSON.stringify([...completedAppointments, completedAppointment]));
                                
                                // Remove from pending appointments
                                const updatedAppointments = appointments.filter(app => app !== appointment);
                                SetAppointments(updatedAppointments);
                                localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
                            }}
                        ><i class="bi bi-check2-square text-primary"></i>Mark as Completed</button>
                        )}

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

export default PendingAppointment
