import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "./button";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_KEY);
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
      successUrl: process.env.FRONTEND_URL,
      cancelUrl: process.env.FRONTEND_URL,
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
      text="Buy The Birth Plan Assist (£0.99)"
      className={className}
    />
  );
};

export default Checkout;
