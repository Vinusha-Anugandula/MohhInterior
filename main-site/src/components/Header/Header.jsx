import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/Mohh logo.png" alt="MOHH Interiors Logo" />
        </div>

        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Listing</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </nav>

        <div className="cta-btn">
          <button>Get in Touch</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
