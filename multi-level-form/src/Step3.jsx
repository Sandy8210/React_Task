import React from "react";

const Step3 = ({ formData, prevStep, submitForm }) => {
  return (
    <div className="form-step">
      <h2>Step 3</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <div className="btn">
        <button onClick={prevStep}>Back</button>
        <button onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
};

export default Step3;
