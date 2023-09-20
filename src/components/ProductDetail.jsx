import React from "react";
import { useSelector,useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { ROUTES } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get } from "react-hook-form";

const ProductDetail = () => {
  const getProducts = useSelector((state) => state.selectProduct);

  console.log(getProducts);
  const dispatch = useDispatch();

  const addToCart = (id) => {
   
    dispatch({ type: 'ADD_TO_CART', payload: { id } });
  };
  


  return (
    <div>
   
      <Navbar/> 
    <div className="product-container-singleitem" >
      <h1><Link to={ROUTES.DASHBOARD}><span><FontAwesomeIcon icon={faXmark} className="single-item-fontawesome"/></span></Link></h1>
      <img src={getProducts.selectedProduct.image} alt={getProducts.selectedProduct.title} />
      <div className="product-desc-singleitem">
        <p>{getProducts.selectedProduct.title}</p>
        <p>$ {getProducts.selectedProduct.price}</p>

        <button id="www" className="btn btn-danger" onClick={() =>
         {addToCart(getProducts.selectedProduct.id)
          toast("Added to cart")
        }}>Add To Cart</button>
        <button id="vvv" className="btn btn-outline-dark"><Link to={ROUTES.CART}>View Cart</Link></button>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;