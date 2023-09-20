import React, { useState } from "react";
import { toast } from "react-toastify";

const AgeVerificationPopup = ({ onAgeVerified }) => {
  const handleVerify = () => {
    localStorage.setItem("ageVerified", "true"); // Set the flag in local storage
    onAgeVerified(true);
  };
  return (
    <div className="age-verification-popup">
      <div className="popup-content">
        <div className="content">
          <h1>
            Welcome To Kinkiverse. We’re so glad you’re here!.You can now
            explore a lot of our products ranging from clothings down to
            jewelery,gadgets and so much more. We’ve got something for you.
            Let’s go!
          </h1>
        </div>
        
        <button onClick={handleVerify}>Get Started</button>
        
      </div>
    </div>
  );
};

export default AgeVerificationPopup;
