import React from "react";
import "./Home.css";
//import Ravenimg from "./Ravenimg.png";
import code from "./code.png";
import programming from "./programming.png";
import crochet from "./crochet.gif";
import graphicdesign from "./graphicdesign.png";
import frontend from "./frontend.png";

const Home = () => {
  return (
    <>
      <div className="top-container">
        <h1 className="cursive-name has-text-weight-medium">I'm Raven. </h1>
        <div className="dev-text">
          <h2 className="has-text-weight-normal">
            Software Developer | Fullstack Developer.
          </h2>
        </div>
      </div>

      <div>
        <section className="section">
          <img
            src={programming}
            alt="icon"
            style={{ width: "120px", marginBottom: "20px" }}
          />
          <h1 className="title"></h1>
          <h2 className="subtitle is-size-5">
            Hi, My name is Raven. Nice to meet you.
          </h2>
          <p className="bio-text">
            Web Design and Development graduate with additional training from
            Fullstack Academy Software Engineering Immersive bootcamp. I have
            hands-on experience with
            <strong className="strong-text has-text-weight-semibold">
              {" "}
              HTML, CSS, JavaScript, React, Node.js, Express.js, PostgreSQL,
              Git, and Python.{" "}
            </strong>
            I enjoy combining technical and creative skills, and outside of
            development I like to{" "}
            <strong className="strong-text">crochet</strong>, which has
            strengthened my patience, focus, and eye for detail.
          </p>
          <img
            src={crochet}
            alt="animation"
            style={{ width: "100px", marginTop: "30px" }}
          />
        </section>
      </div>
      <div>
        <section className="section skills-section">
          <h1 className="skills-text has-text-centered">Skills</h1>

          <div className="columns">
            <div className="column tech-column">
              <img
                src={frontend}
                alt="icon"
                style={{ width: "100px", marginBottom: "20px" }}
              />
              <h3 className="subtitle is-5">Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS, Tailwind, Bulma</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>

            <div className="column tech-column">
              <img
                src={code}
                alt="icon"
                style={{ width: "100px", marginBottom: "20px" }}
              />

              <h3 className="subtitle is-5">Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>Python</li>
              </ul>
            </div>
          </div>

          <div className="column tech-column">
            <img
              src={graphicdesign}
              alt="icon"
              style={{ width: "100px", marginBottom: "20px" }}
            />
            <h3 className="subtitle is-5">Design Tools</h3>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Illustator</li>
              <li>Dreamweaver</li>
              <li>InDesign</li>
              <li>After Effects</li>
              <li>Figma</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
