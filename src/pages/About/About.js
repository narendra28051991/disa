import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import Image from '../../images/calender.png';

import './About.css';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

export default function About() {

    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const item = {
      price: "price_1LcuwLHSm36v49j4Lm8B8wic",
      quantity: 1
    };

    const checkoutOptions = {
      lineItems: [item],
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`
    };

    const redirectToCheckout = async () => {
      setIsLoading(true);
      console.log("redirectToCheckout");

      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout(checkoutOptions);
      console.log("Stripe checkout error", error);

      if (error) setStripeError(error.message);
      setIsLoading(false);
    };

    if (stripeError) alert(stripeError);

  return (
    <div id="about">
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>Denmark Indian Sports Association (DISA) is found in 2022 in Høje-Taastrup Kommune. The main goal is "SPORTS-FOR-ALL". Focus on family sports activities that involves whole family, irrespective of age.</p>
        <button onClick={redirectToCheckout} disabled={isLoading} >READ MORE</button>
      </div>
      <div className="about-image">
        <img src={Image} alt="about description" />
      </div>
    </div>
  )
}
