import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Portfolio.css";
import cloud from "./cloud.png";
import code from "./code.png"; // Import your project icons
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
      {/* Projects Section */}
      <div className="portfolio-container">
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-box">
            <div className="project-content">
              <img src={code} alt="project icon" className="project-icon" />
              <div className="project-info">
                <h3 className="project-title">E-Commerce Website</h3>
                <p className="project-description">
                  A full-stack e-commerce platform built with React, Node.js,
                  and PostgreSQL.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/yourusername/project1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} /> GitHub
                  </a>
                  <a
                    href="https://yourproject.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={20} /> Live Demo
                  </a>
                  <a
                    href="https://github.com/yourusername/project2"
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

          {/* Project 2 */}
          <div className="project-box">
            <div className="project-content">
              <img
                src={programming}
                alt="project icon"
                className="project-icon"
              />
              <div className="project-info">
                <h3 className="project-title">Task Manager App</h3>
                <p className="project-description">
                  A productivity app with drag-and-drop functionality using
                  React and Express.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/yourusername/project2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} /> GitHub
                  </a>
                  <a
                    href="https://yourproject2.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={20} /> Live Demo
                  </a>
                  <a
                    href="https://github.com/yourusername/project2"
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

          {/* Project 3 */}
          <div className="project-box">
            <div className="project-content">
              <img src={bluecode} alt="project icon" className="project-icon" />
              <div className="project-info">
                <h3 className="project-title">Weather Dashboard</h3>
                <p className="project-description">
                  Real-time weather app using React and weather API integration.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/yourusername/project3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} /> GitHub
                  </a>
                  <a
                    href="https://yourproject3.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={20} /> Live Demo
                  </a>
                  <a
                    href="https://github.com/yourusername/project2"
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
        </div>
      </div>
    </>
  );
};

export default Portfolio;
