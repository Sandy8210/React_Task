import React, { useState } from "react";
import Input from "./component/Input/Input";
import OTP from "./pages/OTP";

const App = () => {
  const [otp, setOtp] = useState("");

  const handleChangeOTP = (newOTP) => {
    setOtp(newOTP);
  };

  return (
    <div>
      <OTP length={6} onChangeOTP={handleChangeOTP} />
      <h3>entered otp : {otp}</h3>
    </div>
  );
};

export default App;
