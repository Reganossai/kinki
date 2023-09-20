import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Payment from "../Payment";
import { ROUTES } from "../../constants";

const Cart = ({ cart, token }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  if (token) {
    setIsLoggedIn(true);
  }

  return (
    <div>
      <div className="product-container-singleitem">
        <h2>
          <Link to={ROUTES.AUTH}>
            <span>
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className="single-item-fontawesome"
              />
            </span>
          </Link>
        </h2>

        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="product-container-singleitem">
        <h4>Cart Summary</h4>

        <span className="summ">TOTAL: ({totalItems} items)</span>
        <span className="sum">$ {totalPrice}</span>

        {isLoggedIn ? (
          <Payment />
        ) : (
          <div className="login-to-pay">
            <Link to={ROUTES.SIGN_IN}> Please Log in to Pay </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Cart);
