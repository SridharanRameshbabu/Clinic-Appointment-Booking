import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./PatientDashboard.css"
import bookappointment from "../../assests/medical-appointment.png"
import myappointment from "../../assests/schedule.png"
import clinic from "../../assests/cs.png"
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'

const PatientDashboard = () => {
    const user = JSON.parse(localStorage.getItem("patientData"))
    const data = [
        {
            image: bookappointment,
            title: "Book Appointment",
            description: "Make an Appointment to the Doctor",
            link: "/bookappointment",
            linktext: "Book Appointment"
        },
        {
            image: clinic,
            title: "Clinic List",
            description: "View the Clinic near your location.",
            link: "/cliniclist",
            linktext: "View Clinics"

        },
        {
            image: myappointment,
            title: "Appointments",
            description: "View and manage your appointments.",
            link: "/appointments",
            linktext:"View Appointments"
        }
    ]
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1 className='text-center' style={{paddingTop:'63px', textTransform:'capitalize'}}>Welcome {user ? user.firstname : "guest"}</h1>
          <div className='row my-4 dash'>
          {data.map((item,index) =>(
            <div className='col-md-4 mb-4' key={index}>
              <div className='card text-center'>
                <div className='card-body'>
                  <img src={item.image} alt="My Appointments" className='img-fluid' style={{width: "100px", height: "100px"}}/>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>{item.description}</p>
                  <Link to={item.link} className='btn btn-primary'>{item.linktext}</Link>
                </div>
              </div>
            </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PatientDashboard
