import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="bottom-container">
        <a
          href="https://www.linkedin.com/in/raven-ontiveros21"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaLinkedin className="footer-icon" size={30} />
        </a>
        <a
          href="https://github.com/RaveBlue"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link-github"
        >
          <FaGithub className="footer-icon" size={30} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaInstagram className="footer-icon" size={30} />
        </a>
        <p className="copyright">All contents &copy; 2026 Raven Ontiveros</p>
      </div>
    </footer>
  );
}
export default Footer;
