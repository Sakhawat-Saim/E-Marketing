import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Graphic from "./graphic.jpg";

const Contact = () => {
  return (
    <div style={{ textAlign: "center", padding: "4% 0%" }}>
      <h1 className="text-primary font-weight-bold">Contact Us</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            width: "70%",
            paddingTop: "2%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              width: "30%",
            }}
          >
            <div style={{ width: "20%" }}>
              <FontAwesomeIcon style={{ fontSize: "50px" }} icon={faPhoneAlt} />
            </div>
            <div style={{ width: "80%" }}>
              <h4>Mobile</h4>
              <h5>01234567890</h5>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              width: "30%",
            }}
          >
            <div style={{ width: "20%" }}>
              <FontAwesomeIcon style={{ fontSize: "50px" }} icon={faEnvelope} />
            </div>
            <div style={{ width: "80%" }}>
              <h4>Email</h4>
              <h5>hello@gmail.com</h5>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              width: "30%",
            }}
          >
            <div style={{ width: "20%" }}>
              <FontAwesomeIcon
                style={{ fontSize: "50px" }}
                icon={faMapMarkerAlt}
              />
            </div>
            <div style={{ width: "80%" }}>
              <h4>RS SOFT BANGLADESH LTD</h4>
              <h5>Bashundhara, Dhaka.</h5>
            </div>
          </div>
        </div>
      </div>
      <img style={{ width: "70%", padding: "2% 0%" }} src={Graphic} alt="" />
    </div>
  );
};

export default Contact;
