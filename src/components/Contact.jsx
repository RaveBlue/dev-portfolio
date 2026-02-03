import React from "react";
import "./Contact.css";
import cloud from "./cloud.png";
import clo from "./clo.png";
import contactus from "./contactus.png";
import application from "./application.png";

const Contact = () => {
  return (
    <div className="main">
      <div className="top-container">
        <img
          className="top-cloud"
          src={cloud}
          alt="icon"
          style={{ width: "120px", marginBottom: "20px" }}
        />
        <h1 className="cursive-name has-text-weight-medium">Contact Me</h1>
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

      <div className="middle-container">
        <div className="profile">
          <img className="me" src={clo} alt="contact" />
          <h2>Hello.</h2>
          <p className="intro">
            You can contact me on LinkedIn, through Email or by Phone.
          </p>
        </div>
        <hr />
        <div className="skills">
          <h2>Contact Info</h2>
          <div className="skill-row">
            <img className="code" src={contactus} alt="phone" />
            <h3>Raven Ontiveros</h3>
            <ul>
              <li>
                <strong>Phone Number:</strong> (915)328-9112
              </li>
              <li>
                <strong>Email:</strong> Raveblue21@yahoo.com
              </li>
              <li>
                <strong>Gmail:</strong>ravenontiveros21@gmail.com
              </li>
            </ul>
            <div className="skill-row">
              <img className="more" src={application} alt="app" />
              <h3>Links</h3>
              <ul>
                <li>
                  <a
                    className="resume"
                    href="https://docs.google.com/document/d/1ErfEPhA3GOZN9oltJF4SZqJKsY5jPKuqQ6ooMSOPqgI/edit?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Resume &rarr;</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
