import React from "react";
import axios from "axios";
import { useState } from "react";
import {  useHistory } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/Kinkiversity (1).png"

const Otp = () => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [formData, setFormData] = useState({
    token: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const result = (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      token: formData.token,
    };

    axios({
      method: "post",
      url: "https://kinkiverse.onrender.com/users/verify",
      data: body,
    })
      .then((response) => {
        console.log(response.data);

        history.push("/auth/signin");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };

  
  const resendOtp = () => {

    const email= localStorage.getItem('email');
    const body = {
        email: email,
    };

    axios({
      method: "post",
      url: "https://kinkiverse.onrender.com/users/otp",
      data: body,
    })
      .then((response) => {
        console.log(response.data);
        toast('otp sent to your email');
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
        
      });
  };

  if (loading) {
    return <img className="login-loading" src={logo} alt="logo"/>
  }

  return (
    <div className="login-div">
      <div className="bg"></div>
      <div className="bgg">
        <h2>Email Verification</h2>
        <h2>Enter the Verification code that was sent to your email.</h2>
        <form onSubmit={result}>
          <div className="inp-1">
            <label htmlFor="email">Verification code </label>
            <input
              type="text"
              name="token"
              required
              onChange={handleChange}
              value={formData.token}
              placeholder="Enter Verification Code"
            />
          </div>
          <button type="submit" id="otp" className="btn btn-success">
            Verify code
          </button>
          <button type="button" id="resend-otp" className="btn btn-outline-dark" onClick={resendOtp}>Resend Otp</button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
