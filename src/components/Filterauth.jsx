import React from 'react';
import {Link} from "react-router-dom";
import { ROUTES } from '../constants';

const filterauth = () => {
  return (
    <div>
        <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to={ROUTES.MENAUTH}>
                  Male Wears
                </Link>
                <Link className="dropdown-item" to={ROUTES.WOMENAUTH}>
                  Female Wears
                </Link>
                <Link className="dropdown-item" to={ROUTES.JEWELERYAUTH}>
                  Jewelery
                </Link>
                <Link className="dropdown-item" to={ROUTES.ELECTRONICSAUTH}>
                  Electronics/Gadgets
                </Link>
              </div>
            </div>

      
    </div>
  )
}

export default filterauth