import React from "react";
import "./Home.css";
import logo from "./_6eb45498-fcc4-40a6-ae16-b5ac2689a8ad.jpeg";
import { NavLink } from "react-router-dom";

function Home({ onBack, showContactForm, onLoginClick }) {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
      fontWeight: isActive ? "bold" : "normal",
    };
  }

  return (
    <nav>
      <div className="home-container">
        <img src={logo} alt="Home Logo" className="logo" />

        <div className="button-div">
          <ul className="bar-menu">
            <li className="elements">
              <NavLink to="/" style={navLinkStyles} onClick={onBack}>
                Home
              </NavLink>
            </li>
            <li className="elements">Select Language</li>
            <li className="elements">
              <NavLink to="/contact" style={navLinkStyles} onClick={showContactForm}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sign-in-container">
          <button className="btn btn-primary" onClick={onLoginClick}>
            <NavLink to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
              SIGN IN
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Home;
