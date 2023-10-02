import React from "react";
import google from "../assets/google.png";
import fb from "../assets/fb.png";
import logo from "../assets/logo.jpg";
import or from "../assets/or.png";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="signup">
      <img src={logo} alt="" className="image" />
      <div className="sign">
        <h2>Log In</h2>
        <p className="signup-text">
          Join millions of others in sharing successful moves on{" "}
          <b>HelpMeOut</b>.
        </p>
        <button className="google">
          <img src={google} alt="" className="sign-icon" />
          Continue with Google
        </button>

        <button className="fb">
          <img src={fb} alt="" className="sign-icon" />
          Continue with Google
        </button>

        <img src={or} alt="" className="or" />
      </div>
      <form action="">
        <div className="formgroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email Address"
          />
        </div>
        <br />
        <div className="formgroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <Link to="/login" className="signup-btn">
          Log In
        </Link>

        <p>Don't have an account yet? Create on here:</p>
        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
      </form>
    </div>
  );
}

export default LogIn;
