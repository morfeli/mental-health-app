import React, { FormEvent, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { useMindScapeContext } from "components/store/useMindScapeContext";

import { formProps } from "./ProcessForm";
import { StripeError } from "@stripe/stripe-js";
import { GoBackBtn } from "components/UI/GoBackBtn";
import { FormLayout } from "components/Layouts.tsx/FormLayout";

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
      mindScapeCtx.paymentValidityHandler();
      setIsLoading(false);
    }
  };

  return (
    <FormLayout>
      <div className="w-[500px] h-[500px] bg-[#0cbaba] blur-[100px] rounded-full absolute left-[-30%] top-[-30%]" />
      <div className="w-[500px] h-[500px] bg-[#0cbaba] blur-[100px] rounded-full absolute right-[-10%] top-[400px]" />
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="relative flex flex-col"
      >
        <div onClick={() => setFormType!("donorForm")} className="mb-4 w-fit">
          <GoBackBtn />
        </div>
        <h2 className="pb-4 text-3xl text-white">Confirm payment</h2>

        <PaymentElement id="payment-element" />

        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="bg-gradient-to-r from-[#0069a6] to-[#79d3ff] w-[300px] rounded-md self-center py-2 mt-8 text-white transition-all duration-300 hover:ring-2 hover:ring-slate-300"
        >
          <span id="button-text">Donate now</span>
        </button>

        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </FormLayout>
  );
};
