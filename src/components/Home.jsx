import React from "react";
import "./Home.css";
//import Ravenimg from "./Ravenimg.png";
import code from "./code.png";
import programming from "./programming.png";
import crochet from "./crochet.gif";
import graphicdesign from "./graphicdesign.png";
import frontend from "./frontend.png";
import cloud from "./cloud.png";
import bubbletea from "./bubbletea.png";
import latteart from "./latteart.png";
import coffeemachine from "./coffeemachine.gif";
import strawberry from "./strawberry.jpg";
import bear from "./bear.jpg";

const Home = () => {
  return (
    <>
      <div>
        <div className="top-container">
          <img
            className="top-cloud"
            src={cloud}
            alt="icon"
            style={{ width: "120px", marginBottom: "20px" }}
          />
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

          <div>
            <section className="section aboutme-section">
              <div className="container" style={{ maxWidth: "700px" }}>
                <h1 className="title skills-text has-text-centered">
                  About Me
                </h1>

                <div className="content about-content">
                  {/* Education & Career Box */}
                  <div className="about-box education-box">
                    <h3 className="subtitle is-5 has-text-danger-light has-text-weight-medium">
                      Education & Career
                    </h3>
                    <ul className="about-list">
                      <li>🎓 Web Design and Development graduate</li>
                      <li>
                        💻 Attended Fullstack Academy Software Engineering
                        bootcamp
                      </li>
                      <li>
                        🌟 Always learning new technologies and frameworks
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Hobbies & Interests Box */}
                <div className="about-box hobbies-box ">
                  <h3 className="subtitle is-5 has-text-danger-light has-text-weight-medium">
                    Hobbies & Interests
                  </h3>
                  <ul className="about-list">
                    <li>
                      🧶 Passionate crocheter - love creating handmade projects
                    </li>
                    <li>💪🏻 Health and fitness enthusiast</li>
                    <li>📚 Love to Read</li>
                  </ul>
                </div>

                {/* Favorites Box */}
                <div className="about-box favorites-box">
                  <h3 className="subtitle is-5 has-text-danger-light has-text-weight-medium">
                    Favorites
                  </h3>
                  <ul className="about-list">
                    <li>💙 Favorite color: Blue</li>
                    <li>🍓 Favorite fruits: Strawberries & Blueberries🫐</li>
                    <li>
                      🍵 Favorite drinks: Matcha lattes, Iced Coffee & boba
                      tea🧋
                    </li>
                    <li>
                      🥥 I 🤍 anything coconut scented and love coconut flavored
                      drinks
                    </li>
                    <li>🍙 Favorite Foods: Gimbap,Tteokbokki & Tacos 🌮 </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "100px",
              marginTop: "100px",
              marginBottom: "100px",
            }}
          >
            <img src={bubbletea} alt="icon" style={{ width: "80px" }} />
            <img src={coffeemachine} alt="icon" style={{ width: "80px" }} />
            <img src={latteart} alt="icon" style={{ width: "80px" }} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <section className="section">
            <h1 className="skills-text has-text-centered">Crochet Projects</h1>
            <p className="has-text-danger-light">
              Some fun crochet projects ✨
            </p>

            <div className="image-grid">
              <div className="image-item">
                <img src={strawberry} alt="Project 1" />
                <p></p>
              </div>

              <div className="image-item">
                <img src={bear} alt="Project 2" />
                <p></p>
              </div>

              <div className="image-item">
                <img src={code} alt="Project 3" />
                <p></p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="section">
            <h1 className="skills-text has-text-centered">My Projects</h1>

            <div className="image-grid">
              <div className="image-item">
                <img src={code} alt="Project 1" />
                <p>Project Title 1</p>
              </div>

              <div className="image-item">
                <img src={frontend} alt="Project 2" />
                <p>Project Title 2</p>
              </div>

              <div className="image-item">
                <img src={programming} alt="Project 3" />
                <p>Project Title 3</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;
