import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ClinicRegistration.css";
import { useNavigate , Link} from "react-router-dom";

const ClinicRegistration = () => {

  const [clinicdata, setClinicData] = useState([]);
  const [step, setStep] = useState(1);

  useEffect(() =>{
    const clinicdetails = JSON.parse(localStorage.getItem("clinicdetails")) || []
    setClinicData(clinicdetails)
  },[])

  const [formData, setFormData] = useState({
    clinicName: "",
    clinicType: "",
    regNumber: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    altPhone: "",
    email: "",
    website: "",
    openTime: "",
    closeTime: "",
    days: [],
    doctorName: "",
    doctorEmail: "",
    password: "",
    confirmPassword: "",
    speciality: "",
    doctorPhone: "",
    qualification: "",
    experience: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "days") {
      const newDays = checked
        ? [...formData.days, value]
        : formData.days.filter((day) => day !== value);
      setFormData((prev) => ({ ...prev, days: newDays }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = () => setStep(1);
  
  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    if(formData.phone.length !== 10 || (formData.altPhone && formData.altPhone.length !== 10)){
      alert("Phone number must be 10 digits.");
      return
    }

    if(formData.doctorPhone.length !==10){
      alert("Phone number must be 10 digits.");
      return;
    }

    if(formData.password !== formData.confirmPassword){
      alert("Passwords do not match. Please try again.");
      return;
    }
    console.log("Submitted Clinic Data:", formData);
    const newclinicData = {...formData}
    const updatedClinicData = [...clinicdata, newclinicData]
    setClinicData(updatedClinicData);
    
    alert("Clinic Registered Successfully!");
    localStorage.setItem("clinicdetails",JSON.stringify(updatedClinicData))
    Navigate("/cliniclogin")
  };


  return (
    <div className="clinic-body">
      <div className="p-4 shadow-lg form-container">
        <h3 className="text-center mb-4">
          {step === 1 ? "Clinic Details" : "Doctor Details"}
        </h3>
        <form onSubmit={step === 1 ? handleNext : handleSubmit}>
          <div className="row g-3">
            {step === 1 && (
              <>
                <div className="col-md-6">
                  <label className="form-label text-black">Clinic Name</label>
                  <input type="text" name="clinicName" className="form-control" value={formData.clinicName} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Clinic Type</label>
                  <select
                    name="clinicType"
                    className="form-control"
                    value={formData.clinicType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Clinic Type --</option>

                    <option value="General and Family Clinics">General and Family Clinics</option>

                    <option value="Specialty Clinics">Specialty Clinics</option>

                    <option value="Women and Children Clinics">Women and Children Clinics</option>

                    <option value="Dental Clinics">Dental Clinics</option>

                    <option value="Mental Health Clinics">Mental Health Clinics</option>

                    <option value="Diagnostic & Therapy Clinics">Diagnostic & Therapy Clinics</option>

                    <option value="Alternative Clinics">Alternative Clinics</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label text-black">Registration Number</label>
                  <input type="text" name="regNumber" className="form-control" value={formData.regNumber} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Phone</label>
                  <input type="tel" name="phone" className="form-control" maxLength="10" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Alternate Phone</label>
                  <input type="tel" name="altPhone" className="form-control" maxLength="10" value={formData.altPhone} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Email</label>
                  <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Website</label>
                  <input type="url" name="website" className="form-control" value={formData.website} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Open Time</label>
                  <input type="time" name="openTime" className="form-control" value={formData.openTime} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Close Time</label>
                  <input type="time" name="closeTime" className="form-control" value={formData.closeTime} onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label className="form-label text-black">Working Days</label><br />
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div key={day} className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="days" value={day} onChange={handleChange} checked={formData.days.includes(day)} />
                      <label className="form-check-label">{day}</label>
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Address Line 1</label>
                  <input type="text" name="address1" className="form-control" value={formData.address1} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Address Line 2</label>
                  <input type="text" name="address2" className="form-control" value={formData.address2} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label text-black">City</label>
                  <input type="text" name="city" className="form-control" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <label className="form-label text-black">State</label>
                  <input type="text" name="state" className="form-control" value={formData.state} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <label className="form-label text-black">Zip Code</label>
                  <input type="text" name="zip" className="form-control" value={formData.zip} onChange={handleChange} required />
                </div>
                <div className="col-md-12">
                  <label className="form-label text-black">Country</label>
                  <input type="text" name="country" className="form-control" value={formData.country} onChange={handleChange} required />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="col-md-6">
                  <label className="form-label text-black">Doctor Name</label>
                  <input type="text" name="doctorName" className="form-control" value={formData.doctorName} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Doctor Email</label>
                  <input type="email" name="doctorEmail" className="form-control" value={formData.doctorEmail} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Password</label>
                  <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Confirm Password</label>
                  <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Doctor Speciality</label>
                  <select
                    name="speciality"
                    className="form-control"
                    value={formData.speciality}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Speciality --</option>

                    <optgroup label="General Medicine">
                      <option value="General Physician">General Physician</option>
                      <option value="Family Medicine">Family Medicine</option>
                      <option value="Internal Medicine">Internal Medicine</option>
                    </optgroup>

                    <optgroup label="Surgical Specialities">
                      <option value="General Surgeon">General Surgeon</option>
                      <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                      <option value="Neurosurgeon">Neurosurgeon</option>
                      <option value="Cardiothoracic Surgeon">Cardiothoracic Surgeon</option>
                      <option value="Plastic Surgeon">Plastic Surgeon</option>
                      <option value="ENT Specialist">ENT (Ear, Nose, Throat) Specialist</option>
                    </optgroup>

                    <optgroup label="Medical Specialities">
                      <option value="Cardiologist">Cardiologist</option>
                      <option value="Dermatologist">Dermatologist</option>
                      <option value="Endocrinologist">Endocrinologist</option>
                      <option value="Gastroenterologist">Gastroenterologist</option>
                      <option value="Pulmonologist">Pulmonologist</option>
                      <option value="Neurologist">Neurologist</option>
                      <option value="Oncologist">Oncologist</option>
                      <option value="Nephrologist">Nephrologist</option>
                      <option value="Rheumatologist">Rheumatologist</option>
                    </optgroup>

                    <optgroup label="Women & Children">
                      <option value="Gynecologist">Gynecologist</option>
                      <option value="Obstetrician">Obstetrician</option>
                      <option value="Pediatrician">Pediatrician</option>
                      <option value="Neonatologist">Neonatologist</option>
                    </optgroup>

                    <optgroup label="Mental Health & Rehab">
                      <option value="Psychiatrist">Psychiatrist</option>
                      <option value="Psychologist">Psychologist</option>
                      <option value="Addiction Specialist">Addiction Specialist</option>
                    </optgroup>

                    <optgroup label="Diagnostic & Others">
                      <option value="Radiologist">Radiologist</option>
                      <option value="Pathologist">Pathologist</option>
                      <option value="Anesthesiologist">Anesthesiologist</option>
                      <option value="Physiotherapist">Physiotherapist</option>
                      <option value="Chiropractor">Chiropractor</option>
                    </optgroup>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label text-black">Phone</label>
                  <input type="tel" name="doctorPhone" maxLength="10" className="form-control" value={formData.doctorPhone} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Qualification</label>
                  <input type="text" name="qualification" className="form-control" value={formData.qualification} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-black">Experience (in years)</label>
                  <input type="number" name="experience" className="form-control" value={formData.experience} onChange={handleChange} />
                </div>
                <div className="col-12 mt-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                    <label className="form-check-label">
                      I agree to the <Link to="/" className="text-primary">Terms and Conditions</Link>.
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mt-4 d-flex justify-content-between">
            {step === 2 && (
              <button type="button" className="btn btn-secondary" onClick={handleBack}>
                Back
              </button>
            )}
            <button type="submit" className="btn btn-primary ms-auto">
              {step === 1 ? "Next" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClinicRegistration;
