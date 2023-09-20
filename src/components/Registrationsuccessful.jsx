import React from "react";
import {Link} from "react-router-dom";
import { ROUTES } from "../constants";

const Registrationsuccessful = () => {
  return (
    <div className="login-div">
      <div className="bg"></div>
      <div className="bgg">
      <h1 className="ov">Sign up Successful</h1>
      <Link to={ROUTES.OTPAUTH}>
        <h1 >Verify your account now before logging in by clicking this link</h1>
      </Link>
      </div>
    </div>
  );
};

export default Registrationsuccessful;
