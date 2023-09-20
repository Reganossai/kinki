import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { saveUserDetails } from "../redux/user/user-actions";
import Navbar from "../components/Navbar";
import logo from "../assets/Kinkiversity (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ token, saveUser }) => {
  const [data, setData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);

  const handleBack = () => {
    setIsEditing(false);
    setIsChangePassword(false);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChangePasswordClick = () => {
    setIsChangePassword(true);
  };

  const updateProfileData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  
  const [formData, setFormData] = useState({
    oldPassword : "",
    newPassword : "",
    retypeNewPassword : "",

  });

  
  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangePasswordSave = (e) => {
    e.preventDefault();

    const encodedToken = encodeURIComponent(token);
    const headers = {
      Authorization: `Bearer ${encodedToken}`,
      "Content-Type": "application/json",
    };

    const body = {
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
      retypeNewPassword: formData.retypeNewPassword,
    }

    axios({
      method: "put",
      url: "https://kinkiverse.onrender.com/users/password/update",
      headers,
      data:body
    })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setIsChangePassword(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      });
  };

  const handleSaveClick = (e) => {
    e.preventDefault();

    const encodedToken = encodeURIComponent(token);
    const headers = {
      Authorization: `Bearer ${encodedToken}`,
      "Content-Type": "application/json",
    };

    axios({
      method: "put",
      url: "https://kinkiverse.onrender.com/users/update",
      headers,
      data: JSON.stringify(updatedData),
    })
      .then((response) => {
        console.log(response.data);
        setIsEditing(false);
        updateProfileData(updatedData);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  useEffect(() => {
    setLoading(true);
    const encodedToken = encodeURIComponent(token);
    const headers = {
      Authorization: `Bearer ${encodedToken}`,
    };
    axios({
      method: "get",
      url: "https://kinkiverse.onrender.com/users/profile",
      headers,
    })
      .then((response) => {
        console.log(response.data.data.foundUser);
        setData(response.data.data.foundUser);
        const userDetails = response.data.data.foundUser.name;
        saveUser(userDetails);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      });
  }, [saveUser, token]);

  if (loading) {
    return <img className="login-loading" src={logo} />;
  }

  if (typeof data !== "object" || data === null) {
    return <p>No data to display</p>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <div></div>
        <div className="prof-div">
          <h1>
            USER'S PROFILE
            <span>
              <button
                id="edit-bt"
                className="btn btn-outline-dark"
                onClick={handleEditClick}
              >
                Edit Profile
              </button>
            </span>
          </h1>
          <hr className="hr-pl" />
          <h2>Email</h2>
          <h4>{data.email}</h4>

          <h2>Name</h2>
          <h4>{data.name}</h4>

          <h2>Phone number</h2>
          <h4>{data.phone}</h4>

          <h2>Home Address</h2>
          <h4>{data.address}</h4>

          <h2>Country</h2>
          <h4>{data.country}</h4>

          <h2>State</h2>
          <h4>{data.state}</h4>

          <h2>City</h2>
          <h4>{data.city}</h4>

          <button
            id="change-pass-bt"
            className="btn btn-outline-dark"
            onClick={handleChangePasswordClick}
          >
            Change password
          </button>
        </div>

        {isChangePassword ? (
          <div className="edit-prof-form">
            <form onSubmit={handleChangePasswordSave}>
            <h1 className="kloe">
                <button className="bh" onClick={handleBack}>
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowLeftLong}
                      className="prod-fontawesome"
                    />
                  </span>
                  
                </button>
              </h1>
              <label className="labilo" htmlFor="oldPassword">
                Old password
              </label>
              <div className="inp-9">
                <input
                  type="password"
                  value={formData.oldPassword}
                  name="oldPassword"
                  onChange={handlePasswordChange}
                />
              </div>

              <label className="labilo" htmlFor="newPassword">
                New password
              </label>
              <div className="inp-9">
                <input
                  type="password"
                  value={formData.newPassword}
                  name="newPassword"
                  onChange={handlePasswordChange}
                />
              </div>

              <label className="labilo" htmlFor="retypePassword">
                Retype password
              </label>
              <div className="inp-9">
                <input
                  type="password"
                  value={formData.retypeNewPassword}
                  name="retypeNewPassword"
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                type="submit"
                id="save-bt"
                className="btn btn-outline-dark"
              >
                Save
              </button>
            </form>
          </div>
        ) : null}
        {isEditing ? (
          <div className="edit-prof-form">
            <form onSubmit={handleSaveClick}>
              <h1 className="kloe">
                <button className="bh" onClick={handleBack}>
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowLeftLong}
                      className="prod-fontawesome"
                    />
                  </span>
                  
                </button>
              </h1>
              <label className="labilo" htmlFor="name">
                Name
              </label>
              <div className="inp-9">
                <input
                  type="text"
                  value={updatedData.name || ""}
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <label className="labilo" htmlFor="phone">
                Phone
              </label>
              <div className="inp-9">
                <input
                  type="text"
                  value={updatedData.phone || ""}
                  name="phone"
                  onChange={handleChange}
                />
              </div>

              <label className="labilo" htmlFor="address">
                Address
              </label>
              <div className="inp-9">
                <input
                  type="text"
                  value={updatedData.address || ""}
                  name="address"
                  onChange={handleChange}
                />
              </div>

              <label className="labilo" htmlFor="country">
                Country
              </label>
              <div className="inp-9">
                <input
                  type="text"
                  value={updatedData.country || ""}
                  name="country"
                  onChange={handleChange}
                />
              </div>

              <label className="labilo" htmlFor="state">
                State
              </label>
              <div className="inp-9">
                <input
                  type="text"
                  value={updatedData.state || ""}
                  name="state"
                  onChange={handleChange}
                />
              </div>

              <label className="labilo" htmlFor="city">
                City
              </label>
              <div className="inp-9">
                <input
                  type="text"
                  value={updatedData.city || ""}
                  name="city"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                id="save-bt"
                className="btn btn-outline-dark"
              >
                Save
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    saveUser: (user) => dispatch(saveUserDetails(user)),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(Profile);
