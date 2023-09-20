import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { saveAuthToken, setUserRole } from "../redux/Auth/auth-actions";
import {
  useHistory,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { ROUTES } from "../constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminDashboard = ({ saveToken, saveRole, role, token }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [file, setFile] = useState(null);
 
  

  const handleLogout = useCallback(() => {
    saveToken("");
    saveRole("");
    localStorage.setItem("user-token", "");
    localStorage.setItem("role", "");
    history.push("/auth/signin");
  }, [saveToken, saveRole, history]);

  const isAddingClick = () => {
    setIsAdding(true);
  };

  const handleBack = () => {
    setIsAdding(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
    description: "",
    price: "",
    // sizes: [], // Initialize as an empty array for sizes
    photo: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // if (name === "sizes") {
    //   // Handle sizes as an array of strings (e.g., "XL", "XXL")
    //   const sizeArray = value.split(",").map((size) => size.trim());
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [name]: sizeArray,
    //   }));
    // } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  const handleAddProducts = async(e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare the photos for upload
    const photoFormData = new FormData();
    photoFormData.append("file", file);
    

    // Send the photoFormData to the API to get URLs
    axios({
      method: "put",
      url: "https://kinkiverse.onrender.com/files/upload?type=image",
      data: photoFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((photoResponse) => {
        // Extract the photo URL from the API response
       
        const photoUrl = photoResponse.data.data[0].url;

        // Prepare the final payload with the photo URL
        const body = {
          name: formData.name,
          categoryId: formData.categoryId,
          description: formData.description,
          price: formData.price,
          photo: [photoUrl], // Use an array to match your API structure
        };

        // Send the final payload to create the deal
        axios({
          method: "post",
          url: "https://kinkiverse.onrender.com/admin/deals",
          data: body,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(response.data);

            setIsAdding(false);
            toast("Added deal successfully");
          })
          .catch((error) => {
            console.log(error);
            toast.error(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error uploading photos");
        setLoading(false);
      });
  };

  if (!token || role !== "admin") {
    return <Redirect to={ROUTES.AUTH} />; // Redirect unauthorized users to the login page
  }

  return (
    <div className="register-div">
      <h1>AdminDashboard</h1>
      <div className="log-createe">
        <button className="btn btn-danger" onClick={handleLogout}>
          log out
        </button>

        <button id="create" className="btn btn-primary" onClick={isAddingClick}>
          Create Deal
        </button>
      </div>
      {isAdding ? (
        <div className="edit-prof-form">
          <form onSubmit={handleAddProducts}>
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
                value={formData.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <label className="labilo" htmlFor="categoryId">
              Category ID
            </label>
            <div className="inp-9">
              <select
                name="categoryId"
                className="select-cate"
                value={formData.categoryId}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1"> adult toy</option>
                <option value="2">sissy</option>
                <option value="3"> abdl/ddlg</option>
                <option value="4"> diapers</option>
                <option value="5"> pet play</option>
              </select>
            </div>
            <label className="labilo" htmlFor="description">
              Description
            </label>
            <div className="inp-9">
              <input
                type="text"
                value={formData.description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <label className="labilo" htmlFor="price">
              Price
            </label>
            <div className="inp-9">
              <input
                type="text"
                value={formData.price}
                name="price"
                onChange={handleChange}
              />
            </div>
            {/* <label className="labilo" htmlFor="sizes">
              Sizes (comma-separated)
            </label>
            <div className="inp-9">
              <input
                type="text"
                value={formData.sizes.join(", ")}
                name="sizes"
                onChange={handleChange}
              />
            </div> */}

            <label className="labilo" htmlFor="photos">
              Photos
            </label>
            <div className="inp-9">
              <input
                type="file"
                name="file"
                accept="image/*,audio/*,video/*,application/pdf"
                onChange={handleFileChange}
              />
            </div>

            <button type="submit" id="save-bt" className="btn btn-outline-dark">
              Create Deal
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    token: state.auth.token,
    user: state.user.user,
    role: state.auth.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(saveAuthToken(token)),
    saveRole: (role) => dispatch(setUserRole(role)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
