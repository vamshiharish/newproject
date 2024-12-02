import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="your-icon.png" alt="Logo" />
      </div>
      <button className="contact-btn">Contact</button>
    </nav>
  );
}

export default Navbar;
