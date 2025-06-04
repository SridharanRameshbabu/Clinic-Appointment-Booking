import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Patientsignup.css";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt, FaTransgender, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import image from "../../assests/clipboard-stethoscope.jpg";

const Patientsignup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
    age: "",
    gender: "",
    phone: "",
    address: ""
  });

  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(formData.password !== formData.cpassword){
      alert("Password do not match");
      return;
    }

    console.log("Submitted Data:", formData);
    localStorage.setItem("patientData", JSON.stringify(formData));
    alert("Registration Successful!");
    Navigate("/patientLogin");
  };

  return (
    <div className="patient-signup-container">
      <div className="signup-card shadow-lg">
        <h2 className="text-center mb-3" style={{color: "black"}}>Patient Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6 form-group">
              <label><FaUser className="me-2" />First Name</label>
              <input type="text" name="firstname" className="form-control" value={formData.firstname} onChange={handleChange} required />
            </div>
            <div className="col-md-6 form-group">
              <label><FaUser className="me-2" />Last Name</label>
              <input type="text" name="lastname" className="form-control" value={formData.lastname} onChange={handleChange} required />
            </div>
            <div className="col-md-6 form-group">
              <label><FaUser className="me-2" />Username</label>
              <input type="text" name="username" className="form-control" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="col-md-6 form-group">
              <label><FaEnvelope className="me-2" />Email</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="col-md-6 form-group">
              <label><FaLock className="me-2" />Password</label>
              <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="col-md-6 form-group">
              <label><FaLock className="me-2" />Confirm Password</label>
              <input type="password" name="cpassword" className="form-control" value={formData.cpassword} onChange={handleChange} required />
            </div>
            <div className="col-md-4 form-group">
              <label><FaCalendarAlt className="me-2" />Age</label>
              <input type="number" name="age" className="form-control" value={formData.age} onChange={handleChange} required />
            </div>
            <div className="col-md-4 form-group">
              <label><FaTransgender className="me-2" />Gender</label>
              <select name="gender" className="form-control" value={formData.gender} onChange={handleChange} required>
                <option value="" disabled>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-4 form-group">
              <label><FaPhone className="me-2" />Phone</label>
              <input type="tel" name="phone" className="form-control" maxLength="10" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="col-12 form-group">
              <label><FaMapMarkerAlt className="me-2" />Address</label>
              <textarea name="address" rows="3" className="form-control" value={formData.address} onChange={handleChange} required></textarea>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-4">Register</button>
          <p className="text-center mt-3" style={{ color: "black" }}>Already have an account? <a href="/patientlogin" className="text-decoration-none text-primary">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Patientsignup;
