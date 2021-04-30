import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "./button";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY);
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
      lineItems: [
        {
          price:
            process.env.NODE_ENV === "production"
              ? "price_1IlgkBA5obl98iViK9CguaQr"
              : "price_1IlNPIA5obl98iViOBypvOWy",
          quantity: 1,
        },
      ],
      successUrl: `${process.env.GATSBY_FRONTEND_URL}/purchase-success`,
      cancelUrl: process.env.GATSBY_FRONTEND_URL,
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
