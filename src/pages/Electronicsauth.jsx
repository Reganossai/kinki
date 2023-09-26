import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { loadCurrentItem, addToCart } from "../redux/Shopping/shopping-actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ROUTES } from "../constants";
import Navbarauth from "../components/Navbarauth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Electronicsauth = ({current,addToCart}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const electron = data.filter(
    (product) => product.category === "electronics" 
  );

  const callBck = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callBck();
  }, [callBck]);

  if (loading) {
    return <Loading />;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div className="filt">
        <Navbarauth/>
        <h1><Link to={ROUTES.AUTH}><span><FontAwesomeIcon icon={faXmark} className="filt-fontawesome"/></span></Link></h1>
        
      {electron.map((elec) => (
        <div key={elec.id} className="filter">
          <div>
            <img src={elec.image} alt={elec.title} />
          </div>

          <p>{elec.title}</p>

          <p className="peter">$ {elec.price}</p>

          <button onClick={() => {
            addToCart(elec.id)
            toast("Added to Cart")
            }} id="filter-1" className="btn btn-primary">Add To Cart</button>
        <button id="filter-2" className="btn btn-outline-dark"><Link to={ROUTES.CARTAUTH}>View Cart</Link></button>
        </div>
      ))}
    
    </div>
  );
};



const mapStateToProps = (state) => {
    return {
      current: state.electronics.currentItem,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Electronicsauth);
