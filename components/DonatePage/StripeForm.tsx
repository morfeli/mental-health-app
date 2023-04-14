import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

import { useMindScapeContext } from "components/store/useMindScapeContext";
import { formProps } from "./ProcessForm";

const stripePromise = loadStripe(
  "pk_test_51MoEU4Lq5q6BAK8lWwHOUeA4GweoDKPlJAgVMDzyjmt8GF7admzwcVY1aLb42srXoPb9NQBC6qaUr4goUId14hGF005KrO5o9L"
);

export const StripeForm = ({ setFormType }: formProps) => {
  const mindScapeCtx = useMindScapeContext();
  const [options, setOptions] = useState<{}>();

  const appearance = {
    theme: "flat",
    labels: "floating",
    rules: {
      ".Tab": {
        border: "1px solid #E0E6EB",
        boxShadow:
          "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)",
      },

      ".Tab:hover": {
        color: "var(--colorText)",
      },

      ".Tab--selected": {
        borderColor: "#E0E6EB",
        boxShadow:
          "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02), 0 0 0 2px var(--colorPrimary)",
      },

      ".Input--invalid": {
        boxShadow:
          "0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)",
      },

      ".Input": {
        backgroundColor: "rgb(226 232 240)",
      },

      // See all supported class names and selector syntax below
    },

    variables: {
      colorPrimary: "#0570de",
      colorBackground: "#ffffff",
      colorText: "#30313d",
      colorIcon: "blue",
      colorDanger: "#df1b41",
      fontFamily: "Ideal Sans, system-ui, sans-serif",
      spacingUnit: "2px",
      spacingGridRow: "20px",
      borderRadius: "4px",
      // See all possible variables below
    },
  };

  useEffect(() => {
    const options = {
      mode: "payment",
      amount: mindScapeCtx.storedInfoData.amount,
      currency: "usd",
      appearance,
    };

    setOptions(options);
  }, []);

  return (
    <>
      {options && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm setFormType={setFormType} />
        </Elements>
      )}
    </>
  );
};
