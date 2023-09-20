import React, { useState, useEffect, useMemo, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import kinkiverse from "../assets/Kinkiversity (1).png";
import { saveAuthToken, setUserRole } from "../redux/Auth/auth-actions";
import { ROUTES } from "../constants";
import Searchbar from "./Searchbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Navbar = ({ cart, token, saveToken,saveRole, user, productData }) => {
  const [searchData, setSearchData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [nav, setNav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isLoggedIn = useMemo(() => (token ? true : false), [token]);
  const history = useHistory();
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
    saveRole("");
    localStorage.setItem("user-token", "");
    localStorage.setItem("role", "");
    console.log("ovi")
    history.push('/auth');
  }, [saveToken,saveRole]);

  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="logo-div">
        <Link className="logo-links" to={ROUTES.DASHBOARD}>
          <img src={kinkiverse} alt="kink" />
          <h1 className="logo">Kinkiverse.</h1>
        </Link>
      </div>
      <div id="navbarSupportedContent">
        <ul>
          <li>
            <Searchbar />
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to={ROUTES.DASHBOARD}
              id="menu-links"
            >
              HOME
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink activeClassName="active" to={ROUTES.PROD} id="menu-links">
              PRODUCTS
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink
              activeClassName="active"
              to={ROUTES.CONTACT}
              id="menu-links"
            >
              CONTACT US
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink activeClassName="active" to={ROUTES.CART} id="menu-links">
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

          <li className="nav-link">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user}
              </button>
              <div
                id="dropdown"
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <ul>
                  <li>
                    <Link to="/profile">Profile </Link>
                  </li>

                  <br />
                  <li>
                    {isLoggedIn ? (
                      <button
                        id="logoutt"
                        className="btn btn-primary"
                        onClick={handleLogout}
                      >
                        Log out
                      </button>
                    ) : null}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {nav ? (
        <div id="navbarSupportedContentMobile">
          <ul>
            <li className="nav-link">
              <Link to="/profile" id="menu-links">
                PROFILE
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/prod" id="menu-links">
                PRODUCTS
              </Link>
            </li>

            <li className="nav-link">
              <NavLink
                activeClassName="active"
                to={ROUTES.CONTACT}
                id="menu-links"
              >
                CONTACT US
              </NavLink>
            </li>

            <li className="nav-link">
              <Link to="/cart" id="menu-links">
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
            <li>
              {isLoggedIn ? (
                <button className="btn btn-primary" onClick={handleLogout}>
                  Log out
                </button>
              ) : null}
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
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(saveAuthToken(token)),
    saveRole: (role) => dispatch(setUserRole(role)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
