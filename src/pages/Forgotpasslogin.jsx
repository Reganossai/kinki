import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/Kinkiversity (1).png";

const Verification = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
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
      email: formData.email,
    };

    axios({
      method: "post",
      url: "https://kinkiverse.onrender.com/users/otp",
      data: body,
    })
      .then((response) => {
        console.log(response.data);

        history.push("/auth/forgot-password");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <img  className="login-loading" src={logo}/>
  }

  return (
    <div className="login-div">
      <div className="bg"></div>
      <div className="bgg">
        <form onSubmit={result}>
          <div className="inp-1">
            <label htmlFor="email">Enter Your Email </label>
            <input
              type="text"
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" id="otp" className="btn btn-success">
            send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
