import React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PatientLogin.css"; 
import { useNavigate } from "react-router-dom";

const PatientLogin = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit =(e) =>{
        const user = JSON.parse(localStorage.getItem("patientData"))
        e.preventDefault()
        if(user && user.email === email && user.password === password)
        {
            alert("Login Successfull")
            localStorage.setItem("usertype",JSON.stringify("patient"))
            navigate("/patientdashboard")
        }
    }

  return (
    <div className="login-body d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card p-4 shadow">
              <h2 className="text-center mb-4">Patient Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    style={{color:"black"}}
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
                <div className="text-center mt-3">
                  <p>
                    Don't have an account?{" "}
                    <a href="/patientregister" className="text-decoration-none">
                      Register here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
