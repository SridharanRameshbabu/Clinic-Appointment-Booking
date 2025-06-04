import React from 'react'
import './Navbar.css'
import logo from '../../assests/logo.png';
import { Link } from 'react-router-dom';

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
                        {usertype !== "patient" && usertype !== "clinic" && (
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white d-flex align-items-center" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item dropdown me-3">
                                    <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Register
                                    </span>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/clinicregister">Clinic</Link></li>
                                        <li><Link className="dropdown-item" to="/patientregister">Patient</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown me-4">
                                    <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Login
                                    </span>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/cliniclogin">Clinic</Link></li>
                                        <li><Link className="dropdown-item" to="/patientlogin">Patient</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        )}
                        {usertype === "patient" && (
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white d-flex align-items-center" to="/patientdashboard">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white d-flex align-items-center" to="/cliniclist">
                                        Clinic List
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white d-flex align-items-center" to="/bookappointment">
                                        Book Appointment
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white d-flex align-items-center" to="/" onClick={() => { usertype = null; localStorage.removeItem("usertype") }}>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        )}
                        {usertype === "clinic" && (
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white d-flex align-items-center" to="/clinicdashboard">
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link text-white d-flex align-items-center" to="/" onClick={() => { usertype = null; localStorage.removeItem("usertype") }}>
                                        Logout
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
