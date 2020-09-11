import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="nav-brand">
            <h1>
              <Link to="/" className="nav-link">
                REACT STORE
              </Link>
            </h1>
          </div>

          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-list-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-list-item">
              <Link to="/cart" className="nav-link">
                Cart
                <i
                  className="fa fa-cart-plus"
                  style={{ marginLeft: "0.5rem" }}
                ></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
