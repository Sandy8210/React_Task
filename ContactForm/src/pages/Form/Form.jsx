import React from "react";
import Input from "../../component/Input/Input";
import "./Form.css";

const Form = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Contact Form</h2>
        <form action="" className="form">
          <div className="input-group">
            <Input type={"text"} placeholder={"firstname"} />
            <Input type={"text"} placeholder={"lastname"} />
          </div>

          <div className="input-group">
            <Input type={"email"} placeholder={"email"} />
            <Input type={"text"} placeholder={"phone"} />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
