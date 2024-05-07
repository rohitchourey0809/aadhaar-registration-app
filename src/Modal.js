import React from "react";

const Modal = ({ handleClose, formData, uid }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Aadhar Card</h2>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Date of Birth:</strong> {formData.dob}
        </p>
        <p>
          <strong>Address:</strong> {formData.address}
        </p>
        <p>
          <strong>Contact:</strong> {formData.contact}
        </p>
        <p>
          <strong>UID:</strong> {uid}
        </p>
      </div>
    </div>
  );
};

export default Modal;
