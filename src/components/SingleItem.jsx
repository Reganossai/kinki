import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

const SingleItem = ({ current, addToCart,cartCount}) => {
  return (
    <div className="polo-g">
      <Navbar/> 
    <div className="product-container-singleitem" >
      <h1><Link to={ROUTES.DASHBOARD}><span><FontAwesomeIcon icon={faArrowLeftLong} className="single-item-fontawesome"/></span></Link></h1>
      <img src={current.image} className="hijab" alt={current.title} />
      <div className="product-desc-singleitem">
        <p>{current.name}</p>
        <p>$ {current.price}</p>

        <button id="www" className="btn btn-danger" onClick={() =>
         {addToCart(current.id)
          toast("Added to cart")
        }}>Add To Cart</button>
        <button id="vvv" className="btn btn-outline-dark"><Link to={ROUTES.CART}>View Cart</Link></button>
      </div>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
