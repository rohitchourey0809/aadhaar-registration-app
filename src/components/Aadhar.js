import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Aadhar.css"; 

const AadharForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    contact: "",
  });
  const [uid, setUid] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.contact.length !== 10 || isNaN(formData.contact)) {
      setError(
        "Mobile number must be 10 digits long and contain only numbers."
      );
    } else {
      setError("");
      const generatedUid = generateUid();
      localStorage.setItem(
        "userData",
        JSON.stringify({ formData, uid: generatedUid })
      );
      setUid(generatedUid);
      navigate("/display");
    }
  };

  const generateUid = () => {
    const uid = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
    return uid.toString();
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Aadhar Card Application</h2>
        <form onSubmit={handleSubmit} className="aadhar-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
            {error && <p className="error">{error}</p>}
          </div>
          <button type="submit" className="submit-button">
            Generate UID
          </button>
        </form>
      </div>
    </div>
  );
};

export default AadharForm;
