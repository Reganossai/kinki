import React from "react";
import Products from "./Products";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbarauth from "./Navbarauth";
import { ROUTES } from "../constants";
import Productsauth from "./Productsauth";
import Footerauth from "./Footerauth";

const Prodauth = () => {
  return (
    <div className="prod">
      <Navbarauth />
      <h1 className="aki">
        <Link to={ROUTES.AUTH}>
          <span>
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              className="prod-fontawesome"
            />
          </span>
        </Link>
      </h1>
      <Productsauth />

      <Footerauth />
    </div>
  );
};

export default Prodauth;
