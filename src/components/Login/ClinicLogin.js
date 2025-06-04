import React, { useEffect, useState } from 'react'
import { FaEnvelope,FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './ClinicLogin.css'

const ClinicLogin = () => {

    const [formData,setFormData] = useState({})
    const [clinicdata,setClinicData] = useState([])

    
    useEffect(() =>{
        const Clinics = JSON.parse(localStorage.getItem("clinicdetails")) || [];
        setClinicData(Clinics);
    },[])

    const Navigate = useNavigate()

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setFormData({...formData,[name]:value})
    }

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log(clinicdata.email)
    //     if(clinicdata && (clinicdata.email===formData.email || clinicdata.doctorEmail===formData.email) && clinicdata.password===formData.password)
    //     {
    //         alert("Login Successful")
    //         localStorage.setItem("usertype",JSON.stringify("clinic"))
    //         Navigate("/clinicdashboard")
    //     }
    // }


    const handleSubmit = (e) => {
      e.preventDefault();

      const matchedClinic = clinicdata.find((clinic) => 
          (clinic.email === formData.email || clinic.doctorEmail === formData.email) &&
          clinic.password === formData.password
      );

      if (matchedClinic) {
          alert("Login Successful");
          localStorage.setItem("usertype", JSON.stringify("clinic"));
          Navigate("/clinicdashboard");
      } else {
          alert("Invalid email or password");
      }
    };


  return (
    <div className="clinic-login" style={{width:"100%" , height:"100vh"}}>
      <div className="container" style={{ maxWidth: "500px" }}>
        <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
          <h2 className="text-center mb-4 text-primary">Clinic Login</h2>
          <div className="mb-3">
            <label className="form-label text-black">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label text-black">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default ClinicLogin
