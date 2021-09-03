import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import rocketLaunch from "./startingMax.png";
import working from "./WorkingLight.png";
import review from "./Review.jpg";
// import fakeData from "./fakedata.json";
// import fakeReview from "./fakeReview.json";
import fakeProjects from "./fakeProjects.json";
import fakeData1 from "./fakeData1.json";
import "./Home.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Servieses from "./Servieses/Servieses";
import Reveiws from "./Review/Reveiws";
import ProjectCard from "./Projects/ProjectCard";
import HowWeDoCard from "./HowWeDoCard/HowWeDoCard";
// import axios from "axios";
const Home = () => {
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://fast-tor-66437.herokuapp.com/addService")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch("https://fast-tor-66437.herokuapp.com/addReview")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const linkStyle = {
  //   textDecoration: "none",
  //   color: "#3aafd0",
  //   fontSize: "16px",
  //   margin: "0px 20px",
  //   fontWeight: "700",
  // };
  return (
    <section id="body">
      <main>
        {/* banner Section */}
        <section>
          <div id="bannerContainer" className="container">
            <div
              className="bannerDivs"
              style={{
                width: "100%",
                padding: "2% 5%",
                height: "100%",
              }}
            >
              <div>
                <p
                  id="bannerParagraph"
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "30px",
                    fontWeight: "600",
                  }}
                >
                  We give rocket to your business and you decide where to fly
                </p>
                <p>
                  We build digital product, from idea to design, development to
                  marketing & PR to post launch campaign and support
                </p>
              </div>
              <Button
                style={{
                  border: "1px solid skyblue",
                  borderRadius: "30px",
                  margin: "10px 10px",
                }}
                variant="contained"
                color="primary"
              >
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "300",
                  }}
                  href="#services"
                >
                  GET STARTED
                </a>
              </Button>
              <Button
                style={{
                  border: "1px solid blue",
                  borderRadius: "30px",
                  margin: "10px 2%",
                }}
                variant="contained"
                color="default"
              >
                <Link
                  style={{
                    color: "blue",
                    textDecoration: "none",
                    fontWeight: "300",
                  }}
                  to="/about-us"
                >
                  LEARN MORE
                </Link>
              </Button>
            </div>
            <div
              className="bannerDivs"
              style={{
                width: "100%",
                padding: "0% 2%",
                height: "100%",
              }}
            >
              <img style={{ width: "100%" }} src={rocketLaunch} alt=""></img>
            </div>
          </div>
        </section>
        {/* servies */}
        <section id="services" className="container">
          <div id="sectionSectionDiv">
            <div
              className="serviesDivs"
              style={{ width: "96%", padding: "0% 2%", height: "100%" }}
            >
              <small>Modern digital agency</small>
              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: "600px",
                  fontFamily: "roboto",
                }}
              >
                A transformative agency partner with creative spark.
              </h2>
              <p>
                We look more like a modern management consultancy solving major
                problems for businesses. From marketing strategy and web
                experience to lead generation—even culture transformation.
              </p>
              <Link>Know more about us...</Link>
              <img style={{ width: "100%" }} src={working} alt=""></img>
            </div>
            <div
              className="serviesDivs"
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {services.map((service) => {
                return <Servieses service={service}></Servieses>;
              })}
            </div>
          </div>
        </section>
        {/* HowWeDo */}
        <section class="container" style={{ textAlign: "center" }}>
          <small style={{ color: "grey" }}>Workflow</small>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "600px",
              fontFamily: "roboto",
            }}
          >
            How We Do It
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {fakeData1.map((card) => {
              return <HowWeDoCard card={card}></HowWeDoCard>;
            })}
          </div>
        </section>
        {/* projects 3 */}
        <section style={{ margin: "3% 0%" }}>
          <div class="container" style={{ textAlign: "center" }}>
            <small style={{ color: "grey" }}>Our Works</small>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "600px",
                fontFamily: "roboto",
              }}
            >
              Ongoing Projects
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {fakeProjects.map((project) => {
                return <ProjectCard project={project}></ProjectCard>;
              })}
            </div>
          </div>
        </section>
        {/* review 4 */}
        <section style={{ paddingBottom: "3%" }} className="container">
          <div id="reviewSectionDiv">
            <div
              className="reviewDivs"
              style={{ width: "100%", padding: "0% 2%", height: "96%" }}
            >
              <small>What our client say</small>
              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: "600px",
                  fontFamily: "roboto",
                }}
              >
                User Testimonial
              </h2>
              <p>
                Curabitur blandit tempus porttitor. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Etiam porta sem
                malesuada magna mollis euismod.
              </p>
              <Link>Know more about us...</Link>
              <img style={{ width: "100%" }} src={review} alt=""></img>
            </div>
            <div
              className="reviewDivs"
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {reviews.map((review) => {
                return <Reveiws review={review}></Reveiws>;
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Home;
