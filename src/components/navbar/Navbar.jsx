import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-details">
        <div className="nav-logo">
          <img src="./" alt="" />
        </div>
        <div className="nav-content">
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="nav-login">
        <a href="#" className="p-text">
          Login
        </a>
        <a href="#" className="p-text-button">
          register
        </a>
      </div>
    </div>
  );
};
export default Navbar;
