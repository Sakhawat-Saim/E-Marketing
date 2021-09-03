import { Button } from "@material-ui/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { paymentContext } from "../../../../App";

const CheckoutForm = () => {
  const [paymentPaid, setPaymentPaid] = useContext(paymentContext);
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message);
      setSuccessMessage(null);
    } else {
      setSuccessMessage(paymentMethod.id);
      setErrorMessage(null);
      setPaymentPaid({isPaid: true});
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <br/><br/>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </Button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && (
        <p style={{ color: "green" }}>Your payment was successful</p>
      )}
    </div>
  );
};

export default CheckoutForm;
