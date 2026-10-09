import { useState } from "react";
import React from "react";
import  "./Navbar.css";

import logo from "../assets/logo.webp";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
  const [menu,setmenu]=useState("home")
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" height="50" />
        <p>Shopify</p>
      </div>

      <ul className="nav-menu">
        <li onClick={ ()=>{setmenu("home")}}>Home{menu==="home" ? <hr/>:<></>}</li>
        <li onClick={ ()=>{setmenu("Men")}}>Men{menu==="Men" ? <hr/>:<></>}</li>
        <li onClick={ ()=>{setmenu("Women")}}>Women{menu==="Women" ? <hr/>:<></>}</li>
        <li onClick={ ()=>{setmenu("Kids")}}>Kids{menu==="Kids" ? <hr/>:<></>}</li>
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