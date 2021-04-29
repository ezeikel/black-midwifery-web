import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "./button";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51IlNKuA5obl98iViIGnj8zRU1Ew9gSxTw8gC2ezd88cVfZO4W20MhglozYeMCLPQUrig8uq4v0Ii30Wa6XGEtK0A00KrhYf1N7"
    );
  }
  return stripePromise;
};

const Checkout = ({ className }) => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1IlNPIA5obl98iViOBypvOWy", quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <Button
      primary
      disabled={loading}
      onClick={redirectToCheckout}
      text="Buy The Birth Plan Assist"
      className={className}
    />
  );
};

export default Checkout;
