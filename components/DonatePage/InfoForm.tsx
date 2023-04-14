import { useMindScapeContext } from "components/store/useMindScapeContext";
import { NextBtn } from "components/UI/NextBtn";

import { useEffect, useState } from "react";
import classNames from "classnames";
import { formProps } from "./ProcessForm";
import { DollarSVG } from "components/UI/DollarSVG";
import { FormLayout } from "components/Layouts.tsx/FormLayout";
import { ErrorSVG } from "components/UI/ErrorSVG";

export interface UserSignUp {
  firstName: string;
  lastName: string;
  email: string;
  amount: string;

  touched: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    amount: boolean;
  };
  valid: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    amount: boolean;
  };
}

const intialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  amount: "",

  touched: {
    firstName: false,
    lastName: false,
    email: false,
    amount: false,
  },
  valid: {
    firstName: true,
    lastName: true,
    email: true,
    amount: true,
  },
};

// #38bef8
const presetAmountValues = [25, 50, 100, 150, 200, 250];

const isEmpty = (value: string) => value.trim() === "";
const isEmailValid = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

export const InfoForm = ({ setFormType }: formProps) => {
  const [form, setForm] = useState<UserSignUp>(intialFormState);
  const [emailMessage, setEmailMessage] = useState<string>();

  const mindScapeCtx = useMindScapeContext();

  const [validInfoCredentials, setValidInfoCredentials] =
    useState<boolean>(false);

  useEffect(() => {
    mindScapeCtx.storeInfoData(
      {
        firstName: "",
        lastName: "",
        email: "",
        amount: 0,
      },
      false
    );
  }, []);

  const routeToDonateForm = () => {
    const firstNameisValid = !isEmpty(form.firstName);
    const lastNameisValid = !isEmpty(form.lastName);
    const emailIsValid = isEmailValid(form.email);
    const amountIsValid = !isEmpty(form.amount);

    setForm((current) => ({
      ...current,
      valid: {
        firstName: firstNameisValid,
        lastName: lastNameisValid,
        email: emailIsValid,
        amount: amountIsValid,
      },
    }));

    const formIsValid =
      firstNameisValid && lastNameisValid && emailIsValid && amountIsValid;

    if (!formIsValid) {
      if (!emailIsValid) {
        setEmailMessage("Email is invalid, please enter a valid email.");
      }
      return;
    } else {
      const data = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        amount: form.amount,
      };

      // TODO: send post request to backend api - validate on the server - send back response and update the status

      fetch("/api/infoCredenitals", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data) {
            return;
          } else {
            console.log(data);
          }

          const { firstName, lastName, email, userDonationAmount } = data.data;

          mindScapeCtx.storeInfoData(
            {
              firstName: firstName,
              lastName: lastName,
              email: email,
              amount: userDonationAmount,
            },
            true
          );
          setFormType!(data.formType);
        });
    }
  };
  // bg-gradient-to-br from-sky-400 to-cyan-300
  return (
    <FormLayout>
      <div className="w-[500px] h-[500px] bg-gradient-to-br from-bluePrimary to-blueSecondary blur-[50px] rounded-full absolute left-[-20%] top-[-45%]" />
      <div className="w-[300px] h-[300px] bg-gradient-to-br from-blueSecondary to-bluePrimary blur-[50px] rounded-full absolute right-[-10%] top-[500px]" />

      <h2 className="relative pb-4 pl-6 text-4xl text-white">
        Info Credentials
      </h2>
      <div className="relative flex flex-col self-center pb-4">
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
              "relative rounded-lg placeholder:text-sky-500 border-2 border-sky-800 bg-white text-sky-500 p-2 xl:py-3 xl:pl-4 w-[75vw] xl:w-[375px] outline-none transition-all cursor-pointer hover:shadow-md hover:shadow-slate-500 focus:bg-sky-100 text-xl":
                form.valid.firstName || form.touched.firstName,
              "relative rounded-lg p-2 xl:py-3 xl:pl-4 w-[75vw] xl:w-[375px] bg-white border-b-2  border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none text-xl":
                !form.valid.firstName && !form.touched.firstName,
            })}
          />
        </label>
        {!form.valid.firstName && !form.touched.firstName && <ErrorSVG />}
      </div>
      <div className="relative flex flex-col self-center pb-4">
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
              "rounded-lg bg-white text-sky-500  p-2 xl:py-3 xl:pl-4 w-[75vw] placeholder:text-sky-500 xl:w-[375px] border-2 border-sky-800 outline-none transition-all cursor-pointer hover:shadow-md hover:shadow-slate-500 focus:bg-sky-100 text-xl":
                form.valid.lastName || form.touched.lastName,
              "rounded-lg p-2 xl:py-3 xl:pl-4 w-[75vw] xl:w-[375px] border-b-2 border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none text-xl":
                !form.valid.lastName && !form.touched.lastName,
            })}
          />
        </label>
        {!form.valid.lastName && !form.touched.lastName && <ErrorSVG />}
      </div>
      <div className="relative flex flex-col self-center pb-4">
        <label htmlFor="email">
          <input
            id="email"
            type="text"
            placeholder="Email"
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
              "rounded-lg bg-white text-sky-500 p-2 xl:py-3 xl:pl-4 w-[75vw] placeholder:text-sky-500 xl:w-[375px] border-2 border-sky-800 outline-none transition-all cursor-pointer hover:shadow-md hover:shadow-slate-500 focus:bg-sky-100 text-xl":
                form.valid.email || form.touched.email,
              "rounded-lg p-2 xl:py-3 xl:pl-4 w-[75vw] xl:w-[375px] border-b-2 border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none text-xl":
                !form.valid.email && !form.touched.email,
            })}
          />
        </label>
        {!form.valid.email && !form.touched.email && <ErrorSVG />}
        {/* {emailMessage && !form.touched.email ? (
          <span className="absolute top-[25px] right-3 text-red-600">
            Please enter a valid email
          </span>
        } */}
      </div>

      <p className="relative pb-2 pl-8 text-lg text-sky-500 2xl:text-2xl">
        Choose a one-time amount
      </p>
      <div className="relative grid grid-cols-2 gap-2 w-[250px] 2xl:w-[320px] 2xl:grid-cols-3 2xl:gap-4 mx-auto pb-2 justify-items-center">
        {presetAmountValues.map((item, i) => (
          <div
            key={item}
            className="w-24 py-2 m-2 text-lg text-center bg-white border-2 rounded-md shadow-md cursor-pointer text-slate-600 border-bluePrimary hover:bg-gradient-to-br from-sky-400 to-cyan-300 hover:text-white"
          >
            ${item}
          </div>
        ))}
      </div>

      <div className="relative self-center">
        <label htmlFor="amount">
          <input
            id="amount"
            type="number"
            step="0.01"
            placeholder="Other amount"
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
              "border-2 rounded-lg relative bg-white text-sky-500 placeholder:text-sky-500  p-2 xl:py-3 pl-8 w-[75vw] xl:w-[375px] outline-none transition-all cursor-pointer border-sky-800 hover:shadow-md hover:shadow-slate-500 focus:bg-sky-100 text-xl":
                form.valid.amount || form.touched.amount,
              "rounded-lg relative p-2 pl-8 xl:py-3 w-[75vw] xl:w-[375px] bg-white border-b-2 border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none text-xl":
                !form.valid.amount && !form.touched.amount,
            })}
          />
          <DollarSVG />
          {!form.valid.amount && !form.touched.amount && <ErrorSVG />}
        </label>
      </div>

      <div
        className="mt-[3rem] self-center relative"
        onClick={routeToDonateForm}
      >
        <NextBtn isValid={validInfoCredentials} />
      </div>
    </FormLayout>
  );
};
