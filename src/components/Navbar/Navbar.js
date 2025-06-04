import React from 'react'
import './Navbar.css'
import logo from '../../assests/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let usertype = JSON.parse(localStorage.getItem("usertype"))

    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top px-4">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">
                        <img src={logo} alt="Logo" width="130" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        {/* Guest View */}
                        {usertype !== "patient" && usertype !== "clinic" && (
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/">
                                        <i className="bi bi-house-door-fill me-1"></i> Home
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/clinicregister">
                                        <i className="bi bi-hospital-fill me-1"></i> Clinic Register
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/patientregister">
                                        <i className="bi bi-person-plus-fill me-1"></i> Patient Register
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/cliniclogin">
                                        <i className="bi bi-box-arrow-in-right me-1"></i> Clinic Login
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/patientlogin">
                                        <i className="bi bi-box-arrow-in-right me-1"></i> Patient Login
                                    </Link>
                                </li>
                            </ul>
                        )}

                        {/* Patient View */}
                        {usertype === "patient" && (
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/patientdashboard">
                                        <i className="bi bi-house-door-fill me-1"></i> Home
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/cliniclist">
                                        <i className="bi bi-hospital me-1"></i> Clinic List
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/bookappointment">
                                        <i className="bi bi-calendar-check-fill me-1"></i> Book Appointment
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/" onClick={() => { localStorage.removeItem("usertype") }}>
                                        <i className="bi bi-box-arrow-right me-1"></i> Logout
                                    </Link>
                                </li>
                            </ul>
                        )}

                        {/* Clinic View */}
                        {usertype === "clinic" && (
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/clinicdashboard">
                                        <i className="bi bi-speedometer2 me-1"></i> Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white" to="/" onClick={() => { localStorage.removeItem("usertype") }}>
                                        <i className="bi bi-box-arrow-right me-1"></i> Logout
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
