import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../redux/Shopping/shopping-actions";

const Productauth = ({ productData, product, addToCart, loadCurrentItem, }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);



  return (
    <div className="product-container"  onMouseEnter={() => setIsButtonVisible(true)}
    onMouseLeave={() => setIsButtonVisible(false)}>
       <img src={productData.image} alt={productData.title} />
       {isButtonVisible && (
        <div className="button-container">
           <Link to={`/auth/product/${productData.id}`}>
          <button onClick={() => loadCurrentItem(productData)}>View Product</button>
          </Link>
        </div>
      )}
      <p className="peter">$ {productData.price}</p>
       <h6>{productData.title}</h6>
       <Link to={`/auth/product/${productData.id}`}>
          <button
          id="prod-but"
            className="btn btn-outline-dark"
            onClick={() => loadCurrentItem(productData)}
          >
            View Item
          </button>
        </Link>
      
        
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Productauth);
