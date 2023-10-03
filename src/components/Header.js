import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleLogin = () => {
    setBtnName(btnName == "Login" ? "Logout" : "Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              handleLogin();
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
