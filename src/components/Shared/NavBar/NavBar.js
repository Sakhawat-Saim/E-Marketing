import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "./marketingLogo.png";
import { UserContext } from "../../../App";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { isLoggedIn, name, imageUrl, isAdmin, email, isUser} = loggedInUser;
  console.log(email, isAdmin, isUser);
  const linkStyle = {
    textDecoration: "none",
    color: "#3aafd0",
    fontSize: "16px",
    margin: "0px 20px",
    fontWeight: "700",
  };
  return (
    <>
      <Navbar
        style={{
          padding: "0px 5%",
          borderBottom: "0.1px solid lightgrey",
          backgroundColor: "#F8FDFF",
        }}
        expand="lg"
      >
        <Navbar.Brand href="#home">
          <img
            style={{
              width: "50px",
            }}
            src={logo}
            alt="logo"
          ></img>
          <span style={{ fontWeight: "700" }}>eMarketing</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link style={linkStyle} to="/home">
              Home
            </Link>
            <Link style={linkStyle} to="/about-us">
              About
            </Link>
            <Link style={linkStyle} to="/contact">
              Contact
            </Link>
            {
              isUser && <Link style={linkStyle} to="/customer">
              Client-board
            </Link>
            }
            {
              isAdmin && <Link style={linkStyle} to="/admin">
              Admin
            </Link>
            }
          </Nav>
          <Nav>
            {isLoggedIn && (
              <div>
                <Link
                  style={{
                    color: "#063970",
                    fontSize: "18px",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  {name}
                </Link>&nbsp;&nbsp;
                <img style={{width: '40px', borderRadius: '50%'}} src={imageUrl} alt=""></img>
              </div>
            )}
            { !isLoggedIn && (
              <Link style={{
                color: 'white',
                backgroundColor: '#3F51B5',
                padding: '3px 10px',
                borderRadius: '5px',
                fontWeight: '800',
                textDecoration: 'none'
                }} to="/logIn">
                Log In
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
