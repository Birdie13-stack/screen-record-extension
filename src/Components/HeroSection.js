import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import hero_img from "../assets/hero-img.jpg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="main-content">
        <div className="hero-text">
          <h1>Show Them Don't Just Tell</h1>

          <p>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>

          <Link className="button">Install HelpMeOut </Link>
        </div>
        <img src={hero_img} alt="" className="main-img" />
      </div>
    </div>
  );
}

export default HeroSection;
