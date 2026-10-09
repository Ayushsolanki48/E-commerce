import React from "react";
import  "./Navbar.css";

import logo from "../assets/logo.webp";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" height="50" />
        <p>Shopify</p>
      </div>

      <ul className="nav-menu">
        <li>Home</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="Cart" height="40" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;