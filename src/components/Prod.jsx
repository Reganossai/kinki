import React from "react";
import Products from "./Products";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Prod = () => {
  return (
    <div className="prod">
      <Navbar />
      <div className="prrr">
      <h1 className="aki">
        <Link to="/">
          <span>
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              className="prod-fontawesome"
            />
          </span>
        </Link>
      </h1>
      <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Prod;
