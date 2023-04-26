import { Dispatch, SetStateAction, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { ArrowRightSVG } from "components/Icons/ArrowRightSVG";
import { Button } from "components/UI/Button";
import { toast } from "components/helper-functions/useToast";

export type SignInFormProps = {
  setHandler: Dispatch<SetStateAction<boolean>>;
};

const isTenChars = (value: string) => value.trim().length >= 10;

const emailValidation = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

type UserLoginIn = {
  email: string;
  password: string;

  touched: {
    email: boolean;
    password: boolean;
  };
  valid: {
    email: boolean;
    password: boolean;
  };
};

const intialFormState = {
  email: "",
  password: "",

  touched: {
    email: false,
    password: false,
  },
  valid: {
    email: false,
    password: false,
  },
};

export const SignInForm = ({ setHandler }: SignInFormProps) => {
  const [form, setForm] = useState<UserLoginIn>(intialFormState);
  const router = useRouter();

  const submitLoginData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailIsValid = emailValidation(form.email);
    const passwordisValid = isTenChars(form.password);

    setForm((current) => ({
      ...current,
      valid: {
        email: emailIsValid,
        password: passwordisValid,
      },
    }));

    const formIsValid = emailIsValid && passwordisValid;

    if (!formIsValid) {
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (!result?.error) {
      toast({
        title: "Successful login",
        description: "Wellness awaits you",
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } else {
      toast({
        title: "Unsuccessful login attempt",
        description: "Please try again",
      });
    }

    setForm(intialFormState);
  };

  const inputStyle =
    "p-2 w-[400px] bg-gray-100 border-2 rounded-md border-slate-200 mt-2 hover:shadow-lg cursor-pointer";
  return (
    <form className="self-center" onSubmit={submitLoginData}>
      <div>
        <label htmlFor="email" className="flex flex-col">
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
      <div className="pt-8 ">
        <label htmlFor="password" className="flex flex-col">
          Password
          <input
            id="password"
            type="password"
            className={inputStyle}
            required
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

      <div className="absolute bottom-[120px]">
        <Button styles="bg-blue-500 text-white w-[420px] py-2 flex justify-center items-center">
          Login
          <ArrowRightSVG />
        </Button>
      </div>
      <button onClick={() => setHandler((current) => !current)}>
        <p className="absolute left-[100px] bottom-[80px] underline underline-offset-1 text-blue-500 text-bold cursor-pointer">
          Don't have an account? Sign up here
        </p>
      </button>
    </form>
  );
};
