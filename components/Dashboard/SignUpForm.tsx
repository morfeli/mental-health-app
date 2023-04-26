import { useState } from "react";
import { motion } from "framer-motion";

import { ArrowRightSVG } from "components/Icons/ArrowRightSVG";
import { Button } from "components/UI/Button";
import { SignInFormProps } from "./SignInForm";
import { useToast } from "components/helper-functions/useToast";

interface UserSignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  touched: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  };
  valid: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  };
}

const intialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",

  touched: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
  valid: {
    firstName: true,
    lastName: true,
    email: true,
    password: false,
    confirmPassword: false,
  },
};

const isEmpty = (value: string) => value.trim() === "";
const isNineChars = (value: string) => value.trim().length >= 9;
const isEmailValid = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: -25,
  },
  open: { opacity: 1, x: 0 },
};

export const SignUpForm = ({ setHandler }: SignInFormProps) => {
  const [form, setForm] = useState<UserSignUp>(intialFormState);
  const [passwordsDontMatch, setPasswordsDontMatch] = useState<boolean>(false);
  const { toast } = useToast();

  const labelStyle = "flex flex-col py-1";
  const inputStyle =
    "p-2 w-[400px] bg-gray-100 border-2 rounded-md border-slate-200 mt-2 hover:shadow-lg cursor-pointer";

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstNameisValid = !isEmpty(form.firstName);
    const lastNameisValid = !isEmpty(form.lastName);
    const emailIsValid = isEmailValid(form.email);
    const passwordIsValid = isNineChars(form.password);
    const confirmPasswordIsValid = isNineChars(form.confirmPassword);

    setForm((current) => ({
      ...current,
      valid: {
        firstName: firstNameisValid,
        lastName: lastNameisValid,
        email: emailIsValid,
        password: passwordIsValid,
        confirmPassword: confirmPasswordIsValid,
      },
    }));

    if (form.password != form.confirmPassword) {
      setPasswordsDontMatch((current) => !current);
      return;
    }

    const formIsValid =
      firstNameisValid &&
      lastNameisValid &&
      emailIsValid &&
      passwordIsValid &&
      confirmPasswordIsValid;

    if (!formIsValid) {
      console.log("not valid");
      return;
    } else {
      const data = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
      };

      fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data) {
            return;
          } else {
            const { title, message } = data.serverMessage;
            toast({
              title: title,
              description: message,
            });
          }
        });
    }
  };
  return (
    <>
      <form className="self-center" onSubmit={submitHandler}>
        <div>
          <label htmlFor="fName" className={labelStyle}>
            First Name
            <input
              id="fName"
              type="text"
              className={inputStyle}
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
            />
          </label>
        </div>
        <div>
          <label htmlFor="lName" className={labelStyle}>
            Last Name
            <input
              id="lName"
              type="text"
              className={inputStyle}
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
            />
          </label>
        </div>
        <div>
          <label htmlFor="email" className={labelStyle}>
            Email Address
            <input
              id="email"
              type="email"
              className={inputStyle}
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
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="pw" className={labelStyle}>
            Password
            <input
              id="pw"
              type="password"
              className={inputStyle}
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  password: e.target.value,
                  touched: {
                    ...current.touched,
                    password: true,
                  },
                }))
              }
              value={form.password}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="confirmPw" className={labelStyle}>
            Confirm Password
            <input
              id="confirmPw"
              type="password"
              className={inputStyle}
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  confirmPassword: e.target.value,
                  touched: {
                    ...current.touched,
                    confirmPassword: true,
                  },
                }))
              }
              value={form.confirmPassword}
            />
          </label>
        </div>

        <div className="absolute bottom-[70px]">
          <Button styles="bg-blue-500 text-white w-[400px] py-2 flex justify-center items-center">
            Sign Up
            <ArrowRightSVG />
          </Button>
        </div>
        <button
          className="absolute left-[100px] bottom-[30px]"
          onClick={() => setHandler((current) => !current)}
        >
          <p className="text-blue-500 underline cursor-pointer underline-offset-1 text-bold">
            Have an account? Sign in here
          </p>
        </button>
      </form>
    </>
  );
};
