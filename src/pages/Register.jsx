import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "../constants";
import logo from "../assets/Kinkiversity (1).png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ margin: "100px 0px 0px 0px" })}
`;

const Wrapper = styled.div`
  width: 60%;
  padding: 20px;
  background-color: white;
  border-radius: 25px;
  margin: 10px 0px

  box-shadow: 5px 8px 30px #848884;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const h1 = styled.span`
  font-size: 15px;
  margin: 30px 0px 0px 10px;
`;

const Already = styled.p`
  font-size: 15px;
  margin: 5px 0px;
`;

const Button = styled.button`
  width: 80px;
  border: none;
  padding: 10px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
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
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      postalCode: formData.postalCode,
    };

    localStorage.setItem("email", formData.email);

    axios({
      method: "post",
      url: "https://kinkiverse.onrender.com/users/signup",
      data: body,
    })
      .then((response) => {
        console.log(response.data);

        history.push("/auth/registration-success");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <img className="login-loading" src={logo} />;
  }

  return (
    <div className="register-div">
      <h1>CREATE AN ACCOUNT</h1>
      <form onSubmit={result} className="formis">
        <div className="inp">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="inp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="inp">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="inp">
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="inp">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="inp">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="United States of America">
              United States of America
            </option>
           
          </select>
        </div>

        <div className="inp">
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Alabama"> Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona"> Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="	Idaho"> Idaho</option>
            <option value="Illinois"> Illinois</option>
            <option value="Indiana"> Indiana</option>
            <option value="Iowa"> Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts	">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana"> Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada"> Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey"> New Jersey</option>
            <option value="New Mexico"> New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina	"> North Carolina</option>
            <option value="North Dakota	">North Dakota	</option>
            <option value="Ohio"> Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota	">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="	Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington"> Washington</option>
            <option value="West Virginia"> West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming"> Wyoming</option>
          </select>
        </div>

        <div className="inp">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="inp">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            required
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>

        <h1 className="agreement">
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </h1>

        <div id="create-btn">
          <button id="reg-bt" className="btn btn-success" type="submit">
            CREATE ACCOUNT
          </button>
          <Link to={ROUTES.SIGN_IN}>
            <b>Already Have an account? Sign in</b>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
