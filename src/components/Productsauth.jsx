import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Product from "./Product";
import Loading from "./Loading";
import Productauth from "./Productauth";

const Productsauth = ({ products }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  
  return (
    <div className="pro">
      <div className="products-div">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div className="odu">
              {products.map((prod) => (
                <Productauth key={prod.id} productData={prod} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Productsauth);
