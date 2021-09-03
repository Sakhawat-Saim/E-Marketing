import { Input, Select } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ProcessPayment from "./PaymentProcess/ProcessPayment";
import fakeData from "../../Home/fakedata.json";
import ServiceOption from "./ServiceOption/ServiceOption";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";
import { paymentContext, titleContext } from "../../../App";
import axios from "axios";
import { Redirect } from "react-router";

const Book = () => {
  const [titleText, setTitleText] = useContext(titleContext);
  const [paymentPaid, setPaymentPaid] = useContext(paymentContext);
  // console.log(paymentPaid);
  const { register, handleSubmit } = useForm();
  const [book, setBook] = useState(null);
  const handleOnBlur = (e) => {
    console.log(e.target.value);
    const selectedService = e.target.value;
    setBook({ service: `${selectedService}` });
  };
  // console.log();
  const onSubmit = (data) => {
    console.log(data);
    const bookedInfo = {
      email: data.email,
      name: data.name,
      service: data.service,
      date: new Date().toDateString(),
    };
    axios
      .post("https://fast-tor-66437.herokuapp.com/addBookings", bookedInfo)
      .then(function (response) {
        console.log(response);
        setPaymentPaid({ isPaid: false });
        alert("Data submission Successful!");
        // window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div style={{ padding: "5%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label>Customer data</label>
          <label for="exampleInputName1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            {...register("name")}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            {...register("email")}
          ></input>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Select Servies
          </label>
          {
            titleText === "" && <label style={{
              backgroundColor: 'green',
              color: 'white',
              borderRadius: '5px',
              padding: '3px 6px'
            }}>{titleText.title}</label>
          }
          {titleText.title === "" && (
            <select
              class="form-control"
              aria-label="Default select example"
              name="service"
              {...register("service")}
            >
              {fakeData.map((service) => {
                return <ServiceOption service={service}></ServiceOption>;
              })}
            </select>
          )}
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          disabled={!paymentPaid.isPaid}
        >
          Submit
        </button>
      </form>
      <br />
      <label>Before you submit please Pay with</label>
      <br />
      <label style={{ color: "green" }}>
        You have to pay ${titleText.price}
      </label>
      <br />
      <br />
      <ProcessPayment />
    </div>
  );
};

export default Book;
