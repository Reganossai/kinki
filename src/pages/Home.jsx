import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Products from "../components/Products";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveUserDetails } from "../redux/user/user-actions";
import { saveUserAddress } from "../redux/address/address-actions";
import { connect } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import Limoo from "../components/Limoo";
import Carousel from "../components/Carousel";
import Searchbar from "../components/Searchbar";

const Home = ({ token, saveUser, saveAddress }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const encodedToken = encodeURIComponent(token);
        const headers = {
          Authorization: `Bearer ${encodedToken}`,
        };

        const response = await axios.get(
          "https://kinkiverse.onrender.com/users/profile",
          {
            headers,
            signal: abortController.signal,
          }
        );

        if (!abortController.signal.aborted) {
          const userDetails = response.data.data.foundUser.name;
          const userAdd = response.data.data.foundUser.address;

          setData(response.data.data.foundUser);
          saveUser(userDetails);
          saveAddress(userAdd);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          console.log(error.response.data.message);
        }
      }
    };

    fetchData();

    return () => {
      // Cancel any ongoing requests when the component unmounts
      abortController.abort();
    };
  }, [token, saveUser, saveAddress]);

  if (!data) {
    return <p>No data to display</p>;
  }

  return (
    <div className="home">
      {/* <Announcement /> */}
      <Navbar />
      <div className="search-mobile">
      <Searchbar />
      </div>
      <Carousel />  
      <Limoo />
      <div className="filter-home-div">
        <Filter />
      </div>
      <Products />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: (user) => dispatch(saveUserDetails(user)),
    saveAddress: (address) => dispatch(saveUserAddress(address)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
