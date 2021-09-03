import { Button, Input } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const linkStyle = {
    TextDecoration: "none",
    color: "white",
    margin: "0px 10px",
  };
  const liStyle = {
    listStyle: "none",
  };
  return (
    <div id="footerSuperDiv" style={{ textAlign: "center"}}>
      <div id="footerSubDiv1">
        <p
          style={{
            fontSize: "50px",
            fontWeight: "800",
            color: "white",
            borderTop: "3px solid blue",
            paddingTop: '5%'
          }}
        >
          Get a free micro rocket boost
        </p>
        <small style={{ color: "white" }}>
          No credit card or commitment required
        </small>
        <br />
        <Input
          placeholder="Enter your Email"
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            border: "3px solid lightblue",
            margin: "2%",
            padding: "5px 10px",
            width: "50%",
          }}
        ></Input>
        <Button
          variant="primary"
          style={{
            backgroundColor: "#ffc107",
            margin: "2%",
            padding: '1% 3%',
            border: "4px solid lightblue",
            fontWeight: "800",
          }}
        >
          GET STARTED
        </Button>
        <div class="container">
          <div class="row">
            <div class="col-sm" style={{ color: "white", textAlign: "left" }}>
              <h2>eMarketing</h2>
              <p>Fully Autonomous Rocket Deployment Computation System</p>
              <br />
              <li style={liStyle}>
                <Link style={linkStyle}>Facebook</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Youtube</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Instagram</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Twitter</Link>
              </li>
              <p>
                © {new Date().getFullYear()} lorou Inc. All rights reserved.
              </p>
            </div>
            <div class="col-sm" style={{ color: "white", textAlign: "left" }}>
              <h2>Product</h2>
              <li style={liStyle}>
                <Link style={linkStyle}>Our Difference</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>How it works</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Pricing</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>FAQs</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Demo</Link>
              </li>
            </div>
            <div class="col-sm" style={{ color: "white", textAlign: "right" }}>
              <h2>Company</h2>
              <li style={liStyle}>
                <Link style={linkStyle}>About us</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Contact us</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Projects</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Partners</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Legal</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Website terms</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Privacy policy</Link>
              </li>
            </div>
            <div class="col-sm" style={{ color: "white", textAlign: "right" }}>
              <h2>Developers Info</h2>
              <li style={liStyle}>
                <Link style={linkStyle}>Musiur Alam opu</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>musiuralamo@gmail.com</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>BSc in CSE</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>North South University</Link>
              </li>
              <li style={liStyle}>
                <Link style={linkStyle}>Programming hero</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
