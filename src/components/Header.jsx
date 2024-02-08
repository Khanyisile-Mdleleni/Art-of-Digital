import React from "react";
import logo from "../assets/img/logoo.png";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar"> {/* Remove unnecessary div wrapper */}
      <div className="header__logo">
        <img
          src={logo}
          alt="logo image"
          style={{
            width: "45px",
            height: "45px",
            marginTop: "5px",
          }}
        />
        <h4
          style={{
            position: "absolute",
            top: "8px",
            left: "60px",
            marginTop: "10px",
          }}
        >
          Ace of Digital
        </h4>
      </div>
      <ul className="list-items">
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="list-item">
          <Link to="/services">Services</Link>
        </li>
        <li className="list-item">
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li className="list-item">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
