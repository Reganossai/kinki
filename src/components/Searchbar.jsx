import React, { useState } from "react";
import {
  faCartShopping,
  faBars,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { selectProduct } from "../redux/search/select-product-action";

const Searchbar = ({ token, products }) => {
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered,setWordEntered] = useState("");

  const dispatch = useDispatch();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  }
  return (
    <div>
      <form id="search-form" className="form-inline my-2 my-lg-0">
        <input
          id="searchito"
          className="form-control mr-sm-2"
          value={wordEntered}
          type="text"
          onChange={handleFilter}
          placeholder="Search"
          aria-label="Search"
        />
        {filteredData.length != 0 && (
          <div className="searchlist">
            {filteredData.map((value, key) => {
              return (
                <div key={value.id}>
                  <Link
                    className="muti"
                    to={`/productt/${value.id}`}
                    onClick={() => dispatch(selectProduct(value))}
                  >
                    <p className="muti-p"> {value.title}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        {filteredData.length === 0 ? (
          <div>
            <button
              id="searchito-bt"
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <Link to="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </button>
          </div>
        ) : (
          <button className="x-mak-btn" onClick={clearInput}><FontAwesomeIcon icon={faXmark} className="x-mak" /></button>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Searchbar);
