import { ArrowRightSVG } from "components/Icons/ArrowRightSVG";
import { Button } from "components/UI/Button";
import { SignInFormProps } from "./SignInForm";

export const SignUpForm = ({ setHandler }: SignInFormProps) => {
  const labelStyle = "flex flex-col py-1";
  const inputStyle =
    "p-2 w-[400px] bg-gray-100 border-2 rounded-md border-slate-200 mt-2 hover:shadow-lg cursor-pointer";
  return (
    <div className="self-center">
      <div>
        <label htmlFor="fName" className={labelStyle}>
          First Name
          <input id="fName" type="text" className={inputStyle} />
        </label>
      </div>
      <div>
        <label htmlFor="lName" className={labelStyle}>
          Last Name
          <input id="lName" type="text" className={inputStyle} />
        </label>
      </div>
      <div>
        <label htmlFor="email" className={labelStyle}>
          Email Address
          <input id="email" type="email" className={inputStyle} />
        </label>
      </div>
      <div className="">
        <label htmlFor="pw" className={labelStyle}>
          Password
          <input id="pw" type="password" className={inputStyle} />
        </label>
      </div>
      <div className="">
        <label htmlFor="confirmPw" className={labelStyle}>
          Confirm Password
          <input id="confirmPw" type="password" className={inputStyle} />
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
    </div>
  );
};
