import classNames from "classnames";
import { useMindScapeContext } from "components/store/useMindScapeContext";
import { Button } from "components/UI/Button";

import { useEffect, useState } from "react";
import { formProps } from "./ProcessForm";

export interface UserSignUp {
  firstName: string;
  lastName: string;
  email: string;
  twitter: string;
  amount: string;

  touched: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    twitter: boolean;
    amount: boolean;
  };
  valid: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    twitter: boolean;
    amount: boolean;
  };
}

const intialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  twitter: "",
  amount: "",

  touched: {
    firstName: false,
    lastName: false,
    email: false,
    twitter: false,
    amount: false,
  },
  valid: {
    firstName: true,
    lastName: true,
    email: true,
    twitter: true,
    amount: true,
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
        amount: 0,
      },
      false
    );
  }, []);

  const routeToDonateForm = () => {
    if (!validInfoCredentials) {
      return;
    } else {
      mindScapeCtx.storeInfoData(
        {
          firstName: form.firstName,
          lastName: form.lastName,
          amount: parseInt(form.amount),
        },
        true
      );
      setFormType!("donorForm");
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <h2 className="pb-4 pl-8 text-xl">Info Credentials</h2>
      <div className="self-center pb-4">
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
              "p-2 rounded-md w-[75vw] bg-slate-200 outline-none border-none hover:shadow-xl hover:shadow-blue-300 transition-all cursor-pointer outline-offset-0 outline-2 focus:outline-purple-300":
                form.valid.firstName || form.touched.firstName,
              "p-2 rounded-md w-[75vw] bg-slate-200 border-b-2  border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none":
                !form.valid.firstName && !form.touched.firstName,
            })}
          />
        </label>
      </div>
      <div className="self-center pb-4">
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
              "p-2 rounded-md w-[75vw] bg-slate-200 outline-none border-none hover:shadow-xl hover:shadow-blue-300 transition-all cursor-pointer outline-offset-0 outline-2 focus:outline-purple-300":
                form.valid.lastName || form.touched.lastName,
              "p-2 rounded-md w-[75vw] bg-slate-200 border-b-2  border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none":
                !form.valid.lastName && !form.touched.lastName,
            })}
          />
        </label>
      </div>

      <div className="self-center">
        <label htmlFor="amount">
          <input
            id="amount"
            type="number"
            step="0.01"
            placeholder="Donation Amount"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                amount: e.target.value,
                touched: {
                  ...current.touched,
                  amount: true,
                },
              }))
            }
            value={form.amount}
            className={classNames({
              "p-2 rounded-md w-[75vw] bg-slate-200 outline-none border-none hover:shadow-xl hover:shadow-blue-300 transition-all cursor-pointer outline-offset-0 outline-2 focus:outline-purple-300":
                form.valid.amount || form.touched.amount,
              "p-2 rounded-md w-[75vw] bg-slate-200 border-b-2  border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none":
                !form.valid.amount && !form.touched.amount,
            })}
          />
        </label>
      </div>

      <div className="self-end mt-[3rem] mr-[4rem]" onClick={routeToDonateForm}>
        <Button styles="bg-blue-700 text-white w-[80px] py-1 rounded-lg">
          Next
        </Button>
      </div>
    </div>
  );
};
