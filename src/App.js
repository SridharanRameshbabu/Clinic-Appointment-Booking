import React from "react";
import PatientLogin from "./components/Login/PatientLogin";
import Patientsignup from "./components/Signup/Patientsignup";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import PatientDashboard from "./components/Dashboard/PatientDashboard";
import ClinicRegistration from "./components/Signup/ClinicRegistration";
import ClinicLogin from "./components/Login/ClinicLogin";
import ClinicDashboard from "./components/Dashboard/ClinicDashboard";
import BookAppointment from "./components/Appointments/BookAppointment";
import ClinicsList from "./components/Clinics/ClinicsList";
import MyAppointments from "./components/Appointments/MyAppointments";
import PendingAppointment from "./components/Appointments/PendingAppointment";
import CompletedAppointment from "./components/Appointments/CompletedAppointment";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patientregister" element={<Patientsignup />} />
          <Route path="/clinicregister" element={<ClinicRegistration />} />
          <Route path="/patientlogin" element={<PatientLogin />} />
          <Route path="/cliniclogin" element={<ClinicLogin />} />
          <Route path="/patientdashboard" element={<PatientDashboard/>} />
          <Route path="/clinicdashboard" element={<ClinicDashboard />} />
          <Route path="/bookappointment" element={<BookAppointment />} />
          <Route path="/cliniclist" element={<ClinicsList />} />
          <Route path="/appointments" element={<MyAppointments />} />
          <Route path="/pendingappointments" element={<PendingAppointment />} />
          <Route path="/patients" element={<CompletedAppointment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
