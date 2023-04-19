import { ArrowRightSVG } from "components/Icons/ArrowRightSVG";
import { Button } from "components/UI/Button";
import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export const UserForm = () => {
  const [isSignedUp, setIsSignedUp] = useState<boolean>(true);
  return (
    <form className="h-screen bg-white w-[40vw] justify-center flex flex-col font-Author relative">
      <div className="flex flex-col pl-20">
        <h2>MindScape Logo</h2>

        {isSignedUp ? (
          <p className="py-8 text-3xl">Login to your account</p>
        ) : (
          <p className="py-8 text-3xl">Create an account</p>
        )}
      </div>
      {isSignedUp ? (
        <SignInForm setHandler={setIsSignedUp} />
      ) : (
        <SignUpForm setHandler={setIsSignedUp} />
      )}
    </form>
  );
};
