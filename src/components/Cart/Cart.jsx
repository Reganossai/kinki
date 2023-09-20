import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Payment from "../Payment";
import { ROUTES } from "../../constants";
// import {  FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const Cart = ({ cart, token }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

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

  //   const config = {
  //     public_key: 'FLWPUBK-62dbbc23f0bc909463b116528ca791c2-X',
  //     tx_ref: Date.now(),
  //     amount: totalPrice,
  //     currency: 'USD',
  //     payment_options: 'card,mobilemoney,ussd',
  //     customer: {
  //       email: 'ossaireagano@gmail.com',
  //       phone_number: '08108315163',
  //       name: 'Reagan Ossai',
  //     },
  //     customizations: {
  //       title: 'Buy Reagan A Coffee',
  //       description: 'Coffee for Reagan',
  //       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
  //     },
  //   };

  // const fwConfig = {
  // ...config,
  // text: 'Proceed to Checkout',
  // callback: (response) => {
  // console.log(response);
  // closePaymentModal() // this will close the modal programmatically
  // },
  // onClose: () => {},
  // };

  return (
    <div>
      <div className="product-container-singleitem">
        <h2>
          <Link to={ROUTES.PRODUCT}>
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

        <Payment />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
