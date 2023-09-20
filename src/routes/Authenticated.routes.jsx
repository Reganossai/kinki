import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Home from "../pages/Home";
import Maincart from "../pages/Maincart";
import Products from "../components/Products";
import SingleItem from "../components/SingleItem";
import Prod from "../components/Prod";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "../pages/Contact";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Jewelery from "../pages/Jewelery";
import Electronics from "../pages/Electronics";
import { ROUTES } from "../constants";
import Profile from "../pages/Profile";
import ProductDetail from "../components/ProductDetail";

const App = ({ current, token,role }) => {
  if (!token) {
    return <Redirect to={ROUTES.AUTH} />;
  }

  return (
    <>
      <ToastContainer />
      <Router>
        <div className="app">
          <Switch>
            <Route exact path={ROUTES.DASHBOARD} component={Home} />
            <Route path={ROUTES.CART} component={Maincart} />
            <Route  path={ROUTES.PRODUCTS} component={Products} />
            <Route  path={ROUTES.PROD} component={Prod} />
            <Route path={ROUTES.CONTACT} component={Contact} />
            <Route path={ROUTES.MEN} component={Men} />
            <Route path={ROUTES.WOMEN} component={Women} />
            <Route  path={ROUTES.JEWELERY} component={Jewelery} />
            <Route  path={ROUTES.ELECTRONICS} component={Electronics} />
            <Route  path={ROUTES.PROFILE} component={Profile} />
            <Route  path={ROUTES.SEARCH} component={ProductDetail} />
            
            {!current ? (
              <Redirect to="/" />
            ) : (
              <Route exact path={ROUTES.PRODUCT} component={SingleItem} />
            )}
          </Switch>
        </div>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
    token: state.auth.token,
  };
};

export const AuthenticatedRoutes = connect(mapStateToProps)(App);
