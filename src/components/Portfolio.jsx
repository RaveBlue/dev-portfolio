import React from "react";
import "./Portfolio.css";
import cloud from "./cloud.png";

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;
