import React from "react";
import {Link} from "react-router-dom";
import { ROUTES } from "../constants";


const Verficationsuccessfull = () => {
  return (
    <div className="login-div">
      <div className="bg"></div>
      <div className="bgg">
        <h1 className="ov">Verification Successful</h1>
     
          <h1>You can now log into your account</h1>
      
        <Link to={ROUTES.SIGN_IN}>
          <h1>Log in here</h1>
        </Link>
        
      </div>
    </div>
  );
};

export default Verficationsuccessfull;
