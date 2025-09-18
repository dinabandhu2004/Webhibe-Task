import React from "react";
import "../css/Header.css"; 
import logo from "../assets/logo.png";
import { FaUser, FaStar, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      {/* Top Black Bar */}
      <div className="top-bar">
        <div className="left"> 
          <span className="logo">envato<span>market</span></span>
        </div>
        <div className="right">
          <button className="buy-btn">Buy now</button>
        </div>
      </div>

      {/* Offer Bar */}
      <div className="offer-bar">
        <p>Flat 50% Off On Grocery Shop.</p>
        <div className="nav-links">
          <a href="#" style={{color:"white"}}>Help?</a>
          <a href="#" style={{color:"white"}}>Track Order</a>

          {/* Language Dropdown */}
          <div className="dropdown white-text">
            <span>Language ▼</span>
            <div className="dropdown-content">
              <a href="#">English</a>
              <a href="#">Hindi</a>
              <a href="#">Spanish</a>
            </div>
          </div>

          {/* Currency Dropdown */}
          <div className="dropdown white-text">
            <span>Currency ▼</span>
            <div className="dropdown-content">
              <a href="#">INR ₹</a>
              <a href="#">USD $</a>
              <a href="#">EUR €</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        {/* Logo */}
        <div className="logo-area">
          <img src={logo} alt="logo" />
        </div>

        {/* Search */}
        <div className="search-box">
          <select>
            <option>Vegetables</option>
            <option>Cold Drink</option>
            <option>Fruits</option>
            <option>Bakrey</option>
          </select>
          <input type="text" placeholder="Search products..." />
          <button className="search-btn"><FaSearch /></button>
        </div>

        {/* Right Icons */}
        <div className="right-icons">
          {/* Account Dropdown */}
          <div className="dropdown dark-text">
            <span><FaUser /> Account</span>
            <div className="dropdown-content">
              <a href="#">Login</a>
              <a href="#">Register</a>
              <a href="#">My Profile</a>
            </div>
          </div>

          <div className="icon-item"><FaStar /> <span>3 Items Wishlist</span></div>
          <div className="icon-item"><FaShoppingCart /> <span>4 Items Cart</span></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
