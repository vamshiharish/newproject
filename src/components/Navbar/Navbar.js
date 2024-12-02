import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2 src="your-icon.png" alt="Logo"> CMS</h2>
      </div>
      <button className="contact-btn">Contact</button>
    </nav>
  );
}

export default Navbar;
