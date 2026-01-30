import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <h2 className="title is-4 has-text-weight-normal has-text-info ml-4 mt-3 is-family-sans-serif">
          Raven Ontiveros
        </h2>
      </div>

      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <Link
            to="/"
            className="navbar-item custom-nav-link has-text-weight-medium"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="navbar-item custom-nav-link has-text-weight-medium"
          >
            About
          </Link>
          <Link
            to="/Portfolio"
            className="navbar-item custom-nav-link has-text-weight-medium"
          >
            Portfolio
          </Link>
          <a
            href="https://github.com/RaveBlue"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item custom-nav-link has-text-weight-medium"
          >
            <FaGithub size={20} style={{ marginRight: "8px" }} />
            Github
          </a>

          <div className="navbar-item">
            <Link to="/Contact">
              <button className="button is-info is-rounded contact-button">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*<nav className="navbar">
      /*<div className="logo">
        <h2 className="name">Raven Ontiveros</h2>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>

        <li className="nav-item">
          <button type="button" className="contact-button">
            Contact
          </button>
        </li>
  </ul>*/}
    </nav>
  );
};

export default Navbar;
