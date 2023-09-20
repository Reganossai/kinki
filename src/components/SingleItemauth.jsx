import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import Navbarauth from "./Navbarauth";

const SingleItemauth = ({ current, addToCart,cartCount}) => {
  return (
    <div className="polo-g">
      <Navbarauth/> 
    <div className="product-container-singleitem" >
      <h1><Link to={ROUTES.PRODAUTH}><span><FontAwesomeIcon icon={faArrowLeftLong} className="single-item-fontawesome"/></span></Link></h1>
      <img src={current.image} alt={current.title} />
      <div className="product-desc-singleitem">
        <p>{current.title}</p>
        <p>{current.description}</p>
        <p>$ {current.price}</p>

        <button id="www" className="btn btn-danger" onClick={() => {
          addToCart(current.id)
          toast("Added to cart")
          }}>Add To Cart</button>
        <button id="vvv" className="btn btn-outline-dark"><Link to={ROUTES.CARTAUTH}>View Cart</Link></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleItemauth);
