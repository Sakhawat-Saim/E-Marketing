import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import SplitCardForm from "./SplitCardForm";
import CheckoutForm from "./CheckoutForm";
import SplitCardForm from "./SplitCardForm";
// import { SplitButton } from "react-bootstrap";

const stripePromise = loadStripe(
  "pk_test_51IfJ0GLAYzyd4WsmWgU42G7y78nLXNUkCo2zlqTB3l2BNqQqMxtMlBzFZh9DbFCS9M08dMpCDGtYtg26cUUIV7jP0052CihiBc"
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      {/* <CheckoutForm />
      <SplitCardForm/> */}
      <CheckoutForm/>
    </Elements>
  );
};

export default ProcessPayment;
