import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Portfolio.css";
import cloud from "./cloud.png";
import code from "./code.png";
import programming from "./programming.png";
import bluecode from "./bluecode.png";

const Portfolio = () => {
  return (
    <>
      <div className="top-container">
        <img
          className="top-cloud"
          src={cloud}
          alt="icon"
          style={{ width: "120px", marginBottom: "20px" }}
        />
        <h1 className="cursive-name has-text-weight-medium">Portfolio</h1>
        <div className="dev-text"></div>
        <img
          className="bottom-cloud-right"
          src={cloud}
          alt="cloud"
          style={{
            width: "100px",
            position: "absolute",
            bottom: "0",
            right: "40px",
          }}
        />
      </div>

      <div className="portfolio-container">
        <div className="projects-grid">
          <div className="project-box">
            <div className="project-content">
              <img src={code} alt="project icon" className="project-icon" />
              <div className="project-info">
                <h3 className="project-title">Divine Protein Ice-cream 🍦</h3>
                <p className="project-description">
                  <strong>Developer | 2026</strong>
                  <br />A full-stack e-commerce application that allows users to
                  securely browse, purchase and manage orders for protein
                  ice-cream products, creating a seamless and modern online
                  shopping experience. Implemented key features including
                  JWT-based user authentication, real-time shopping cart,
                  checkout and order history designed with PostgreSQL-backed
                  data storage.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/RaveBlue/divine-icecream"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} /> GitHub
                  </a>
                  <a
                    href="https://divine-icecream-git-main-raveblues-projects.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={20} /> Project Link
                  </a>
                  <a
                    href="https://youtu.be/9u-1m9k7cSU"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-box">
            <div className="project-content">
              <img
                src={programming}
                alt="project icon"
                className="project-icon"
              />
              <div className="project-info">
                <h3 className="project-title">React Pizza 🍕</h3>
                <p className="project-description">
                  <strong>Developer | 2023</strong>
                  <br />
                  Pizza order application using React, JSX, and Tailwind CSS,
                  designed to provide a fast and intuitive user experience for
                  selecting and purchasing menu items. Developed features such
                  as an order confirmation system with unique order IDs, price
                  calculation, and estimated delivery time display to enhance
                  usability and order tracking.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/yourusername/react-pizza"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} /> GitHub
                  </a>
                  <a
                    href="https://react-pizza21.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={20} />
                    Project Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-box">
            <div className="project-content">
              <img
                src={programming}
                alt="project icon"
                className="project-icon"
              />
              <div className="project-info">
                <h3 className="project-title">Strangers Things </h3>
                <p className="project-description">
                  <strong>Developer | 2023</strong>
                  <br />
                  Built a Craigslist-inspired front-end CRUD application
                  enabling users to perform create, read, update, and delete
                  operations on marketplace listings. Engineered the application
                  using React, HTML, CSS, and AJAX, while independently
                  overseeing the full development lifecycle, including API
                  integration, testing, and deployment.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/RaveBlue/strangers_things.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-box">
            <div className="project-content">
              <img
                src={programming}
                alt="project icon"
                className="project-icon"
              />
              <div className="project-info">
                <h3 className="project-title">
                  Peaches & Cream Smoothie Cafe{" "}
                </h3>
                <p className="project-description">
                  <strong>Designer | 2022</strong>
                  <br />A website designed for a fictional smoothie business I
                  came up with. Adobe Illustrator was used to design the logo,
                  flaticon website was used for other logo icons. Built and
                  designed with HTML, CSS, and Bootstrap and designed by myself.
                </p>
                <div className="project-links">
                  <a
                    href="https://spectacular-melba-bf9a76.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={20} /> Project Link
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*these two divs need to be at the end*/}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
