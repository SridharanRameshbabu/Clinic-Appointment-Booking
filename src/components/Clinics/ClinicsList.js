import React ,{useState,useEffect}from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './ClinicsList.css'
import { useNavigate } from 'react-router-dom'

const ClinicsList = () => {
    const Navigate = useNavigate();

    const [clinicData,setClinicData] = useState([])
    useEffect(() => {
        const clinicData = JSON.parse(localStorage.getItem("clinicdetails")) || [];
        setClinicData(clinicData);
    }, []);

  return (
    <div>
      <Navbar />
      <h2 style={{paddingTop:"80px"}} className='text-center'>Registered Clinics</h2>
      <div className="container d-flex flex-column align-items-center" style={{ paddingTop: "20px" }}>
        {clinicData.map((clinic, index) => (
          <div key={index} className="custom-card mb-4 w-100 max-width-card">
            <div className="row g-0">
              {/* Clinic Details */}
              <div className="col-md-6 clinic-section p-4">
                <h4 className="section-title">{clinic.clinicName}</h4>
                <p className="texts"><span className="label">Type:</span> {clinic.clinicType}</p>
                <p className="texts"><span className="label">Address:</span> {clinic.address1}, {clinic.address2}, {clinic.city}, {clinic.state}, {clinic.zip}, {clinic.country}</p>
                <p className="texts"><span className="label">Phone:</span> {clinic.phone}</p>
                <p className="texts"><span className="label">Email:</span> {clinic.email}</p>
                <p className="texts"><span className="label">Open:</span> {clinic.openTime} <span className="label">| Close:</span> {clinic.closeTime}</p>
                <p className="texts"><span className="label">Working Days:</span> {clinic.days.join(', ')}</p>
              </div>

              {/* Doctor Details */}
              <div className="col-md-6 doctor-section p-4">
                <h5 className="section-subtitle">Doctor Details</h5>
                <p className="texts"><span className="label">Name:</span> {clinic.doctorName}</p>
                <p className="texts"><span className="label">Email:</span> {clinic.doctorEmail}</p>
                <p className="texts"><span className="label">Phone:</span> {clinic.doctorPhone}</p>
                <p className="texts"><span className="label">Speciality:</span> {clinic.speciality}</p>
                <p className="texts"><span className="label">Qualification:</span> {clinic.qualification}</p>
                <p className="texts"><span className="label">Experience:</span> {clinic.experience}</p>
              </div>
            </div>

            {/* Apply Button */}
            <div className="text-center p-3 card-footer-section">
              <button className="btn btn-primary apply-btn" onClick={() =>{Navigate('/bookappointment')}}>Apply Now</button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default ClinicsList
