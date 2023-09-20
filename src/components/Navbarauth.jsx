import React, { useState, useEffect, useMemo, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import kinkiverse from "../assets/Kinkiversity (1).png";
import { saveAuthToken } from "../redux/Auth/auth-actions";
import { ROUTES } from "../constants";

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Navbarauth = ({ cart, token, saveToken }) => {
  const [cartCount, setCartCount] = useState(0);
  const [nav, setNav] = useState(false);
  const isLoggedIn = useMemo(() => (token ? true : false), [token]);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const handleLogout = useCallback(() => {
    saveToken("");
    localStorage.setItem("user-token", "");
  }, [saveToken]);

  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="logo-div">
        <Link className="logo-links" to={ROUTES.AUTH}>
          <img src={kinkiverse} alt="kink" />
          <h1 className="logo">Kinkiverse.</h1>
        </Link>
      </div>
      <div id="navbarSupportedContenty">
        <ul>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to={ROUTES.AUTH}
              id="menu-links"
            >
              HOME
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink
              activeClassName="active"
              to={ROUTES.PRODAUTH}
              id="menu-links"
            >
              PRODUCTS
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink
              activeClassName="active"
              to={ROUTES.CARTAUTH}
              id="menu-links"
            >
              <div>
                <span>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="navbar-carticon"
                  />
                </span>
                Cart ({cartCount})
              </div>
            </NavLink>
          </li>
          <li>
            <button id="aka-1" className="btn btn-primary">
             <Link to={ROUTES.SIGN_IN}>SIGN IN</Link>
            </button >
          </li>


          <li>
            <button id="aka-2" className="btn btn-primary">
             <Link to={ROUTES.SIGN_UP}>REGISTER</Link>
            </button >
          </li>
        </ul>
      </div>

      {nav ? (
        <div id="navbarSupportedContentMobile">
          <ul>
            <li>
              <Link to={ROUTES.SIGN_UP} id="menu-links">
                REGISTER
              </Link>
            </li>
            <li className="nav-link">
              <Link to={ROUTES.SIGN_IN} id="menu-links">
                SIGN IN
              </Link>
            </li>
          

            <li className="nav-link">
              <Link to={ROUTES.PRODAUTH} id="menu-links">
                PRODUCTS
              </Link>
            </li>

            <li className="nav-link">
              <Link to={ROUTES.CARTAUTH} id="menu-links">
                <div>
                  <span>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="navbar-carticon"
                    />
                  </span>
                  Cart ({cartCount})
                </div>
              </Link>
            </li>
        
          </ul>
        </div>
      ) : null}

      <div onClick={handleNav} className="zaracho">
        {nav ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(saveAuthToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbarauth);
