import React, { useState } from "react";
import hero from "../assets/hero.png";
import "../css/Hero.css";
import { CiLocationOn } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero-container">
      {/* 🔹 Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="/" className="color-hover logo">Home</a>

          {/* Desktop Menu */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            {/* Categories Dropdown */}
            <div className="dropdown">
              <span className="color-hover">Categories ▾</span>
              <div className="dropdown-content mega-menu">
                <div className="column">
                  <a href="/">Vegetables</a>
                  <a href="/">Fruits</a>
                  <a href="/">Dairy</a>
                  <a href="/">Bakery</a>
                </div>
                <div className="column">
                  <a href="/">Snacks</a>
                  <a href="/">Beverages</a>
                  <a href="/">Meat</a>
                  <a href="/">Frozen Foods</a>
                </div>
                <div className="column">
                  <a href="/">Organic</a>
                  <a href="/">Cereals</a>
                  <a href="/">Spices</a>
                  <a href="/">Others</a>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="dropdown">
              <span className="color-hover">Products ▾</span>
              <div className="dropdown-content single-col">
                <a href="/">Product 1</a>
                <a href="/">Product 2</a>
                <a href="/">Product 3</a>
              </div>
            </div>

            {/* Pages Dropdown */}
            <div className="dropdown">
              <span className="color-hover">Pages ▾</span>
              <div className="dropdown-content single-col">
                <a href="/">About Us</a>
                <a href="/">Contact</a>
                <a href="/">FAQ</a>
              </div>
            </div>

            {/* Blog Dropdown */}
            <div className="dropdown">
              <span className="color-hover">Blog ▾</span>
              <div className="dropdown-content single-col">
                <a href="/">Blog 1</a>
                <a href="/">Blog 2</a>
              </div>
            </div>

            <a href="/" className="color-hover">Offers</a>
          </div>
        </div>

        {/* 🔹 Right Side (Location + Hamburger) */}
        <div className="nav-right">
          <div className="location-select">
            <CiLocationOn className="loc-icon" />
            <select>
              <option>Surat</option>
              <option>Delhi</option>
              <option>Kolkata</option>
            </select>
          </div>

          {/* Hamburger for Mobile */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <p className="offer-text">Flat 30% Off</p>
          <h1>
            Explore <span className="highlight">Healthy</span> & Fresh Fruits
          </h1>
          <button className="shop-btn">Shop Now</button>
        </div>

        <div className="hero-image">
          <img src={hero} alt="Fresh Fruits" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
