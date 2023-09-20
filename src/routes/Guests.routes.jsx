import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Register from "../pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registrationsuccessful from "../components/Registrationsuccessful";
import Landingpageee from "../pages/Landingpageee";
import { ROUTES } from "../constants";
import Login from "../pages/Login";
import Productsauth from "../components/Productsauth";
import Prodauth from "../components/Prodauth";
import Maincartauth from "../pages/Maincartauth";
import SingleItemauth from "../components/SingleItemauth";
import Menauth from "../pages/Menauth";
import Womenauth from "../pages/Womenauth";
import Jeweleryauth from "../pages/Jeweleryauth";
import Electronicsauth from "../pages/Electronicsauth";
import Otp from "../pages/Otp";
import Forgotpassword from "../pages/Forgotpassword";
import Forgotpasslogin from "../pages/Forgotpasslogin";

const App = ({ token,current }) => {
  if (token) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <>
      <ToastContainer />
      <Router>
        <div className="app">
          <Switch>
            <Route exact path={ROUTES.AUTH} component={Landingpageee}>
            </Route>
            <Route path={ROUTES.SIGN_IN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={Register} />
            <Route
              path={ROUTES.REGISTRATION_SUCCESS}
              component={Registrationsuccessful}
            />
              <Route  path={ROUTES.PRODUCTSAUTH} component={Productsauth} />
            <Route  path={ROUTES.PRODAUTH} component={Prodauth} />
            <Route  path={ROUTES.CARTAUTH} component={Maincartauth} />
            {!current ? (
              <Redirect to="/auth" />
            ) : (
            <Route  path={ROUTES.PRODUCTAUTH} component={SingleItemauth} />
            )}
            <Route path={ROUTES.MENAUTH} component={Menauth} />
            <Route path={ROUTES.WOMENAUTH} component={Womenauth} />
            <Route  path={ROUTES.JEWELERYAUTH} component={Jeweleryauth} />
            <Route  path={ROUTES.ELECTRONICSAUTH} component={Electronicsauth} />
            <Route  path={ROUTES.OTPAUTH} component={Otp} />
            <Route  path={ROUTES.FORGOTPASSWORDAUTH} component={Forgotpassword} />
            <Route  path={ROUTES.FORGOTPASSLOGINAUTH} component={Forgotpasslogin} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    current: state.shop.currentItem,
  };
};

export const GuestsRoutes = connect(mapStateToProps)(App);
