import React from "react";
import "./Display.css"

const DisplayData = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("userData", userData);

  return (
    <div className="container">
      <div className="display-info-container">
        <h3>Generated UID:</h3>
        <p>{userData.uid}</p>
        <div className="aadhar-card">
          <h2>Aadhar Card</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Name:</strong>
                </td>
                <td>{userData.formData.name}</td>
              </tr>
              <tr>
                <td>
                  <strong>Date of Birth:</strong>
                </td>
                <td>{userData.formData.dob}</td>
              </tr>
              <tr>
                <td>
                  <strong>Address:</strong>
                </td>
                <td>{userData.formData.address}</td>
              </tr>
              <tr>
                <td>
                  <strong>Contact:</strong>
                </td>
                <td>{userData.formData.contact}</td>
              </tr>
              <tr>
                <td>
                  <strong>UID:</strong>
                </td>
                <td>{userData.uid}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
