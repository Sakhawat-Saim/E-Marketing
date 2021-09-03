import React from "react";
import { Link } from "react-router-dom";
import Graphic from "./graphicAboutUs.jpg";

const AboutUs = () => {
  const linkStyle = {
    margin: "5%",
  };
  const pStyle = {
    color: "grey",
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "10%",
        }}
      >
        <div style={{ width: "50%" }}>
          <h1 style={{ fontWeight: "bold", color: "white" }}>
            Save your time and being with us
          </h1>
          <h4 style={{ color: "white" }}>Developers</h4>
          <ul>
            <li style={{ color: "white" }}>MD. Sakhawat Hossain</li>
            <li style={{ color: "white" }}>Rezwan Khan</li>
          </ul>
          <Link to="/contact">
            <button
              style={{
                padding: "10px 20px",
                border: "none",
                backgroundColor: "orange",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Go to contact
            </button>
          </Link>
        </div>
        <div style={{ width: "50%" }}>
          <img
            style={{ width: "100%", borderRadius: "20px" }}
            src={Graphic}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
