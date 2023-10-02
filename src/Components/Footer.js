import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="" className="logo" />

      <div className="bottom-nav">
        <ul>
          <li>
            <b>Menu</b>
          </li>
          <li>Home</li>
          <li>Converter</li>
          <li>How it Works</li>
        </ul>
        <ul>
          <li>
            <b>About Us</b>
          </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <li>
            <b>Screen Record</b>
          </li>
          <li>Browser Window</li>
          <li>Desktop</li>
          <li>Application</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
