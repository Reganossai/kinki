import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "../constants";
import logo from "../assets/Kinkiversity (1).png"

const Forgotpassword = () => {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypeNewPassword, setRetypeNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [formData, setFormData] = useState({
    token: "",
    newPassword: "",
    retypeNewPassword: "",
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
      newPassword: formData.newPassword,
      retypeNewPassword:formData.retypeNewPassword,
    };

    axios({
      method: "put",
      url: "https://kinkiverse.onrender.com/users/password/set",
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

  if (loading) {
    return <img  className="login-loading" src={logo}/>
  }

  return (
    <div className="register-div">
      <div className="bg"></div>
      <div className="bgg">
        <h2>Password reset</h2>
        <form onSubmit={result}>
          <div className="inp-1">
            <label htmlFor="otp">Enter OTP </label>
            <input
              type="text"
              placeholder="Enter otp"
              name="token"
              onChange={handleChange}
              required
              value={formData.token}
            />
          </div>

          <div className="inp-1">
            <label htmlFor="otp">Type New Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
              name="newPassword"
              onChange={handleChange}
              required
              value={formData.newPassword}
            />
          </div>

          <div className="inp-1">
            <label htmlFor="otp">Retype New Password </label>
            <input
              type="password"
              placeholder="Retype New Password"
              name="retypeNewPassword"
              required
              onChange={handleChange}
              value={formData.retypeNewPassword}
            />
          </div>
          <button type="submit" id="otp" className="btn btn-success">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
