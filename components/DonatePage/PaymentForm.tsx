import classNames from "classnames";
import { useMindScapeContext } from "components/store/useMindScapeContext";
import { Button } from "components/UI/Button";
import { GoBackBtn } from "components/UI/GoBackBtn";
import { useEffect, useState } from "react";
import { formProps } from "./Form";

interface Payment {
  cardName: string;
  cardNumber: string;
  expiration: string;
  ccv: string;
  zip: string;

  touched: {
    cardName: boolean;
    cardNumber: boolean;
    expiration: boolean;
    ccv: boolean;
    zip: boolean;
  };
  valid: {
    cardName: boolean;
    cardNumber: boolean;
    expiration: boolean;
    ccv: boolean;
    zip: boolean;
  };
}

const initialFormState = {
  cardName: "",
  cardNumber: "",
  expiration: "",
  ccv: "",
  zip: "",

  touched: {
    cardName: false,
    cardNumber: false,
    expiration: false,
    ccv: false,
    zip: false,
  },
  valid: {
    cardName: true,
    cardNumber: true,
    expiration: true,
    ccv: true,
    zip: true,
  },
};

export const PaymentForm = ({ setFormType }: formProps) => {
  const [form, setForm] = useState<Payment>(initialFormState);

  const [validPaymentCredentials, setValidPaymentCredentials] = useState(true);
  const mindScapeCtx = useMindScapeContext();

  useEffect(() => {
    mindScapeCtx.storePaymentData(
      {
        cardName: "",
        cardNumber: "",
        expiration: "",
        ccv: "",
        zip: "",
      },
      false
    );
  }, []);

  const routeToDonorWallForm = () => {
    if (!validPaymentCredentials) {
      return;
    } else {
      mindScapeCtx.storePaymentData(
        {
          cardName: form.cardName,
          cardNumber: form.cardNumber,
          expiration: form.expiration,
          ccv: form.ccv,
          zip: form.zip,
        },
        true
      );
      setFormType("donorWall");
    }
  };

  return (
    <div className="flex flex-col justify-between pb-12">
      <h2>Payment Credentials</h2>
      <div>
        <label htmlFor="cardName">
          <input
            id="cardName"
            type="text"
            placeholder="Full name on card"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                cardName: e.target.value,
                touched: {
                  ...current.touched,
                  cardName: true,
                },
              }))
            }
            value={form.cardName}
            className={classNames({
              "p-2 rounded-md w-60 bg-light-gray border-none focus:outline-button-pink":
                form.valid.cardName || form.touched.cardName,
              "p-2 rounded-md w-60 bg-light-gray border-b-2 border-red-900":
                !form.valid.cardName && !form.touched.cardName,
            })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="cardNumber">
          <input
            id="cardNumber"
            type="number"
            placeholder="Card number"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                cardNumber: e.target.value,
                touched: {
                  ...current.touched,
                  cardNumber: true,
                },
              }))
            }
            value={form.cardNumber}
            className={classNames({
              "p-2 rounded-md w-60 bg-light-gray border-none focus:outline-button-pink":
                form.valid.cardNumber || form.touched.cardNumber,
              "p-2 rounded-md w-60 bg-light-gray border-b-2 border-red-900":
                !form.valid.cardNumber && !form.touched.cardNumber,
            })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="expiration">
          <input
            id="expiration"
            type="number"
            placeholder="Expiration"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                expiration: e.target.value,
                touched: {
                  ...current.touched,
                  expiration: true,
                },
              }))
            }
            value={form.expiration}
            className={classNames({
              "p-2 rounded-md w-60 bg-light-gray border-none focus:outline-button-pink":
                form.valid.expiration || form.touched.expiration,
              "p-2 rounded-md w-60 bg-light-gray border-b-2 border-red-900":
                !form.valid.expiration && !form.touched.expiration,
            })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="ccv">
          <input
            id="ccv"
            type="number"
            placeholder="CCV"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                ccv: e.target.value,
                touched: {
                  ...current.touched,
                  ccv: true,
                },
              }))
            }
            value={form.ccv}
            className={classNames({
              "p-2 rounded-md w-60 bg-light-gray border-none focus:outline-button-pink":
                form.valid.ccv || form.touched.ccv,
              "p-2 rounded-md w-60 bg-light-gray border-b-2 border-red-900":
                !form.valid.ccv && !form.touched.ccv,
            })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="zip">
          <input
            id="zip"
            type="number"
            placeholder="Zip Code"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                zip: e.target.value,
                touched: {
                  ...current.touched,
                  zip: true,
                },
              }))
            }
            value={form.zip}
            className={classNames({
              "p-2 rounded-md w-60 bg-light-gray border-none focus:outline-button-pink":
                form.valid.zip || form.touched.zip,
              "p-2 rounded-md w-60 bg-light-gray border-b-2 border-red-900":
                !form.valid.zip && !form.touched.zip,
            })}
          />
        </label>
      </div>

      <div onClick={() => setFormType("infoForm")}>
        <GoBackBtn />
      </div>
      <div className="self-end" onClick={routeToDonorWallForm}>
        <Button styles="bg-blue-700 text-white w-[80px] py-1 rounded-lg">
          Next
        </Button>
      </div>
    </div>
  );
};
