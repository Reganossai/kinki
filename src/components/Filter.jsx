import React from 'react';
import {Link} from "react-router-dom";
import { ROUTES } from '../constants';

const filter = () => {
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
                <Link className="dropdown-item" to={ROUTES.MEN}>
                  Male Wears
                </Link>
                <Link className="dropdown-item" to={ROUTES.WOMEN}>
                  Female Wears
                </Link>
                <Link className="dropdown-item" to={ROUTES.JEWELERY}>
                  Jewelery
                </Link>
                <Link className="dropdown-item" to={ROUTES.ELECTRONICS}>
                  Electronics/Gadgets
                </Link>
              </div>
            </div>

      
    </div>
  )
}

export default filter