import React, { FormEvent, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { useMindScapeContext } from "components/store/useMindScapeContext";

import { formProps } from "./ProcessForm";
import { StripeError } from "@stripe/stripe-js";
import { GoBackBtn } from "components/UI/GoBackBtn";

export const CheckoutForm = ({ setFormType }: formProps) => {
  const mindScapeCtx = useMindScapeContext();
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | StripeError>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret
    const res = await fetch("/api/stripeServer", {
      method: "POST",
      body: JSON.stringify(mindScapeCtx.storedInfoData.amount),
    });

    const clientSecret = await res.json();

    console.log(clientSecret.clientSecret);

    // Confirm the PaymentIntent using the details collected by the Payment Element
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: clientSecret.clientSecret,
      confirmParams: {
        return_url: "https://github.com/",
      },
      redirect: "if_required",
    });

    if (error) {
      console.log(error);
      setErrorMessage(error);
    } else {
      // Your customer is redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer is redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      setFormType!("success");
      mindScapeCtx.paymentValidityHandler();
      setIsLoading(false);
    }
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex flex-col p-4"
    >
      <PaymentElement id="payment-element" />

      <div className="flex items-center justify-between">
        <div onClick={() => setFormType!("donorForm")}>
          <GoBackBtn />
        </div>

        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="bg-blue-600 text-white p-2 w-[200px] rounded-md self-center my-8"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
      </div>

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};
