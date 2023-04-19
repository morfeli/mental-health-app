import { ArrowRightSVG } from "components/Icons/ArrowRightSVG";
import { Button } from "components/UI/Button";
import { Dispatch, SetStateAction } from "react";

export type SignInFormProps = {
  setHandler: Dispatch<SetStateAction<boolean>>;
};
export const SignInForm = ({ setHandler }: SignInFormProps) => {
  const inputStyle =
    "p-2 w-[400px] bg-gray-100 border-2 rounded-md border-slate-200 mt-2 hover:shadow-lg cursor-pointer";
  return (
    <div className="self-center">
      <div>
        <label htmlFor="email" className="flex flex-col">
          Email Address
          <input id="email" type="email" className={inputStyle} />
        </label>
      </div>
      <div className="pt-8 ">
        <label htmlFor="password" className="flex flex-col">
          Password
          <input id="password" type="password" className={inputStyle} />
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
    </div>
  );
};
