import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Landingpageee from "./pages/Landingpageee";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveAuthToken, setUserRole } from "./redux/Auth/auth-actions";
import { AuthenticatedRoutes } from "./routes";
import { GuestsRoutes } from "./routes";
import { ROUTES } from "./constants";
import AdminDashboard from "./pages/AdminDashboard";
import NotFoundComponent from "./components/NotFoundComponent";
import Login from "./pages/Login";
import Registrationsuccessful from "./components/Registrationsuccessful";
import Productsauth from "./components/Productsauth";
import Prodauth from "./components/Prodauth";
import Maincartauth from "./pages/Maincartauth";
import SingleItemauth from "./components/SingleItemauth";
import Menauth from "./pages/Menauth";
import Womenauth from "./pages/Womenauth";
import Jeweleryauth from "./pages/Jeweleryauth";
import Electronicsauth from "./pages/Electronicsauth";
import Otp from "./pages/Otp";
import Forgotpassword from "./pages/Forgotpassword";
import Forgotpasslogin from "./pages/Forgotpasslogin";
import Register from "./pages/Register";
import Maincart from "./pages/Maincart";
import Products from "./components/Products";
import Contact from "./pages/Contact";
import Prod from "./components/Prod";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import Profile from "./pages/Profile";
import ProductDetail from "./components/ProductDetail";
import SingleItem from "./components/SingleItem";

function App({ current, saveToken, saveRole, role, token }) {
  const [appReady, setAppReady] = useState(false);

  const setUserTokenToReduxStateFromLocalStorage = useCallback(() => {
    const storedToken = localStorage.getItem("user-token");
    if (storedToken) {
      saveToken(storedToken);
    }
  }, [saveToken]);

  const setRoleToReduxStateFromLocalStorage = useCallback(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      saveRole(storedRole);
    }
  }, [saveRole]);

  const handleAppLoad = useCallback(() => {
    setUserTokenToReduxStateFromLocalStorage();
    setRoleToReduxStateFromLocalStorage();
    setAppReady(true);
  }, [saveToken, saveRole]);

  useEffect(() => {
    handleAppLoad();
  }, [handleAppLoad]);

  if (!appReady) {
    return <Loading />;
  }

  return (
    <>
      <ToastContainer />

      <Router>
        <div className="app">
          <Switch>
            {/* Guest Routes */}
            <Route path="/auth/signin" component={Login} />

            <Route
              exact
              path={ROUTES.AUTH}
              render={() =>
                token && role ? <Redirect to="/dashboard" /> : <Landingpageee />
              }
            />
            <Route path={ROUTES.SIGN_IN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={Register} />
            <Route
              path={ROUTES.REGISTRATION_SUCCESS}
              component={Registrationsuccessful}
            />
            <Route path={ROUTES.PRODUCTSAUTH} component={Productsauth} />
            <Route path={ROUTES.PRODAUTH} component={Prodauth} />
            <Route path={ROUTES.CARTAUTH} component={Maincartauth} />
            <Route path={ROUTES.PRODUCTAUTH} component={SingleItemauth} />
            <Route path={ROUTES.MENAUTH} component={Menauth} />
            <Route path={ROUTES.WOMENAUTH} component={Womenauth} />
            <Route path={ROUTES.JEWELERYAUTH} component={Jeweleryauth} />
            <Route path={ROUTES.ELECTRONICSAUTH} component={Electronicsauth} />
            <Route path={ROUTES.OTPAUTH} component={Otp} />
            <Route
              path={ROUTES.FORGOTPASSWORDAUTH}
              component={Forgotpassword}
            />
            <Route
              path={ROUTES.FORGOTPASSLOGINAUTH}
              component={Forgotpasslogin}
            />

            {/* Add other guest routes here */}

            {/* Authenticated Routes */}
            <Route path="/dashboard">
              {token ? (
                <>{role === "admin" ? <AdminDashboard /> : <Home />}</>
              ) : (
                <Redirect to="/auth" />
              )}
            </Route>

            {/* Protected Routes for User Role */}
            <Route path="/cart">
              {token && role === "user" ? (
                <Maincart />
              ) : (
                <Redirect to="/auth" />
              )}
            </Route>

            <Route path="/products">
              {token ? <Products /> : <Redirect to="/auth" />}
            </Route>

            <Route path="/contact">
              {token ? <Contact /> : <Redirect to="/auth" />}
            </Route>

            <Route path="/prod">
              {token ? <Prod /> : <Redirect to="/auth" />}
            </Route>

            <Route path="/men">
              {token ? <Men /> : <Redirect to="/auth" />}
            </Route>

            <Route path="/women">
              {token ? <Women /> : <Redirect to="/auth" />}
            </Route>

            <Route path="/jewelery">
              {token ? <Jewelery /> : <Redirect to="/auth" />}
            </Route>

            <Route path="/electronics">
              {token ? <Electronics /> : <Redirect to="/auth" />}
            </Route>

            <Route path="/profile">
              {token ? <Profile /> : <Redirect to="/auth" />}
            </Route>

            <Route path="/profile">
              {token ? <Profile /> : <Redirect to="/auth" />}
            </Route>

            <Route path="/productt/:productId">
              {token ? <ProductDetail /> : <Redirect to="/auth" />}
            </Route>

            {!current ? (
              <Redirect to="/auth" />
            ) : (
              <Route path="/product/:id">
                {token ? <SingleItem /> : <Redirect to="/auth" />}
              </Route>
            )}

            {/* Redirect to Dashboard */}
            <Route exact path="/">
              {token ? <Redirect to="/dashboard" /> : <Redirect to="/auth" />}
            </Route>

            {/* Handle other routes or 404 */}
            <Route>
              <NotFoundComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
    token: state.auth.token,
    role: state.auth.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(saveAuthToken(token)),
    saveRole: (role) => dispatch(setUserRole(role)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
