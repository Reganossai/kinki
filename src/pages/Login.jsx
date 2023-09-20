import styled from "styled-components";
import { mobile } from "../responsive";
import { connect } from "react-redux";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { saveAuthToken, setUserRole } from "../redux/Auth/auth-actions";
import logo from "../assets/Kinkiversity (1).png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "../constants";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 5px 8px 30px #848884;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Login = ({ saveToken,saveRole }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const history = useHistory();

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      password: formData.password,
    };

    axios({
      method: "post",
      url: "https://kinkiverse.onrender.com/users/signin",
      data: body,
    })
      .then((response) => {
        console.log(response.data)
          const token = response.data.data.token;
          const role = response.data.data.user.role;
          saveRole(role);
          saveToken(token);
          setIsLoggedIn(true);
           const saveUserToken =  localStorage.setItem("user-token", token);
           const Role =  localStorage.setItem("role", role);
          history.push("/dashboard");
        
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message)
        setLoading(false);
      });
  };

  if (loading) {
    return (
       <img  className="login-loading" src={logo}/>
      
    );
  }

  return (
    <div className="login-div">
      <div className="bgg">
        <h1> SIGN IN </h1>
        <form onSubmit={result} className="formis-2">
          <div className="inp-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="inp-1">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <span
        className={`password-toggle ${showPassword ? 'show' : ''}`}
        onClick={togglePasswordVisibility}></span>
          </div>
          <p className="err-mess">{message}</p>

          <button id="log-bt" className="btn btn-primary" type="submit">
            LOGIN
          </button>
          

          <div className="pedro">
            <div className="fop">
            <Link to={ROUTES.SIGN_UP}>
             Signup
            </Link>
            </div>
            
            <div className="fopa">
            <Link  to={ROUTES.FORGOTPASSLOGINAUTH}>
              Forgot Password?
            </Link>
            </div>
          </div>
         
           
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(saveAuthToken(token)),
    saveRole: (role) => dispatch(setUserRole(role)),
    
  };
};

export default connect(null, mapDispatchToProps)(Login);
