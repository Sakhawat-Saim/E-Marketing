import React, { useEffect, useState } from "react";
// import Servieses from "../../Home/Servieses/Servieses";
import ServiceMngCard from "./ServiceMngCard/ServiceMngCard";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://fast-tor-66437.herokuapp.com/addService")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
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
        return <ServiceMngCard service={service}></ServiceMngCard>;
      })}
    </div>
  );
};

export default ManageService;
