import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />

      <nav>
        <Link className="nav-link">Features</Link>
        <Link className="nav-link">How it Works</Link>
      </nav>

      <Link className="started" to="/signup">
        Get Started
      </Link>
    </div>
  );
}

export default Header;
