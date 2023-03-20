import classNames from "classnames";
import { useMindScapeContext } from "components/store/useMindScapeContext";
import { Button } from "components/UI/Button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { formProps } from "./Form";

export interface UserSignUp {
  firstName: string;
  lastName: string;
  email: string;
  twitter: string;

  touched: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    twitter: boolean;
  };
  valid: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    twitter: boolean;
  };
}

const intialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  twitter: "",

  touched: {
    firstName: false,
    lastName: false,
    email: false,
    twitter: false,
  },
  valid: {
    firstName: true,
    lastName: true,
    email: true,
    twitter: true,
  },
};

export const InfoForm = ({ setFormType }: formProps) => {
  const [form, setForm] = useState<UserSignUp>(intialFormState);
  const mindScapeCtx = useMindScapeContext();

  const [validInfoCredentials, setValidInfoCredentials] = useState(true);

  useEffect(() => {
    mindScapeCtx.storeInfoData(
      {
        firstName: "",
        lastName: "",
        email: "",
        twitter: "",
      },
      false
    );
  }, []);

  const routeToPaymentForm = () => {
    if (!validInfoCredentials) {
      return;
    } else {
      mindScapeCtx.storeInfoData(
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          twitter: form.twitter,
        },
        true
      );
      setFormType("paymentForm");
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <h2>Info Credentials</h2>
      <div>
        <label htmlFor="firstName">
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                firstName: e.target.value,
                touched: {
                  ...current.touched,
                  firstName: true,
                },
              }))
            }
            value={form.firstName}
            className={classNames({
              "p-2 rounded-md w-60 bg-light-gray border-none":
                form.valid.firstName || form.touched.firstName,
              "p-2 rounded-md w-60 bg-light-gray border-b-2 border-red-900":
                !form.valid.firstName && !form.touched.firstName,
            })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                lastName: e.target.value,
                touched: {
                  ...current.touched,
                  lastName: true,
                },
              }))
            }
            value={form.lastName}
            className={classNames({
              "p-2 rounded-md w-60 bg-light-gray border-none focus:outline-button-pink":
                form.valid.lastName || form.touched.lastName,
              "p-2 rounded-md w-60 bg-light-gray border-b-2 border-red-900":
                !form.valid.lastName && !form.touched.lastName,
            })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="Create a dummy email address"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                email: e.target.value,
                touched: {
                  ...current.touched,
                  email: true,
                },
              }))
            }
            value={form.email}
            className={classNames({
              "p-2 rounded-md w-60 bg-light-gray border-none focus:outline-button-pink":
                form.valid.email || form.touched.email,
              "p-2 rounded-md w-60 bg-light-gray border-b-2 border-red-900":
                !form.valid.email && !form.touched.email,
            })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="twitter">
          <input
            id="twitter"
            type="text"
            placeholder="Twitter @"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                twitter: e.target.value,
                touched: {
                  ...current.touched,
                  twitter: true,
                },
              }))
            }
            value={form.twitter}
            className={classNames({
              "p-2 rounded-md w-60 bg-light-gray border-none focus:outline-button-pink":
                form.valid.twitter || form.touched.twitter,
              "p-2 rounded-md w-60 bg-light-gray border-b-2 border-red-900":
                !form.valid.twitter && !form.touched.twitter,
            })}
          />
        </label>
      </div>

      <div className="self-end pt-8" onClick={routeToPaymentForm}>
        <Button styles="bg-blue-700 text-white w-[80px] py-1 rounded-lg">
          Next
        </Button>
      </div>
    </div>
  );
};
