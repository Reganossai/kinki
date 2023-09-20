import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../redux/Shopping/shopping-actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    setInput(newValue);
    adjustQty(item.id, newValue);
  };

  const incrementQty = () => {
    const newValue = input + 1;
    setInput(newValue);
    adjustQty(item.id, newValue);
  };

  const decrementQty = () => {
    if (input > 1) {
      const newValue = input - 1;
      setInput(newValue);
      adjustQty(item.id, newValue);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-pll-mine">
      <div className="proooooooo">
        <div className="product-cart-container-singleitem">
        <img className="kila" src={item.image} alt={item.title} />
        <div className="kila-kilap">
        <p className="kilaa">{item.title}</p>
        <p className="kilap">$ {item.price}</p>
        </div>
        
        </div>

        <div className="product-cart-container-singleitem">
          
            <button className="btn btn-outline-dark" id="lord" onClick={handleRemove}>Remove</button>

            <button
              id="mine"
              className="btn btn-outline-dark"
              onClick={decrementQty}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>

            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />

            <button
              id="pll"
              className="btn btn-outline-dark"
              onClick={incrementQty}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          
        </div>
     
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
