import React, { useState } from "react";
import Input from "../component/Input/Input";

const OTP = ({ length, onChangeOTP }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (!value) return;

    if (index < length - 1 && value) {
      element.nextSibling.focus();
    }

    onChangeOTP(newOtp.join(""));
  };

  const handleBackSpace = (element, index) => {
    // Clear the current input field
    // move focus to the preveious input field
    // update the parent component

    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);

    if (index > 0) {
      element.previousSibling.focus();
    }

    onChangeOTP(newOtp.join(""));
  };

  return (
    <div>
      {otp.map((data, index) => (
        <Input
          type="text"
          value={data}
          maxLength={1}
          key={index}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              handleBackSpace(e.target, index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default OTP;
