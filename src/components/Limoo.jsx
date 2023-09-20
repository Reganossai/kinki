import React from 'react';
import { connect } from 'react-redux';
import Limo from './Limo';
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/Kinkiversity (1).png"
import { setCategories } from '../redux/categories/categories';



const Limoo = ({ current, token,products }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  

return (
  <div className='limzy'>
    <h1 className='titleee'>CATEGORIES</h1>
    <div className="lim-main">
      {products.map((item) => (
        <Limo key={item.id} currentData={item} />
      ))}
    </div>
  </div>
);
};

const mapStateToProps = (state) => {
    return {
      current: state.category.products,
      token: state.auth.token,
      products: state.category.products
    };
  };
  
  export default connect(mapStateToProps)(Limoo);
  