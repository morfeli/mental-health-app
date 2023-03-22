import { Dispatch, FormEvent, SetStateAction, useState } from "react";

import { useMindScapeContext } from "components/store/useMindScapeContext";

import { StatusBar } from "./StatusBar";

import { InfoForm } from "./InfoForm";
import { PaymentForm } from "./PaymentForm";
import { DonorForm } from "./DonorForm";
import { ReviewForm } from "./ReviewForm";

export type formProps = {
  setFormType: Dispatch<SetStateAction<string>>;
  setInfoHandler?: Dispatch<SetStateAction<string>>;
};

export const Form = () => {
  const [renderFormType, setRenderFormType] = useState("infoForm");

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  //   className="grid grid-cols-1 px-12 gap-y-4 gap-x-"
  return (
    <form
      className="pt-8 xl:flex xl:justify-between xl:items-center xl:w-[90vw] xl:mx-auto"
      onSubmit={submitFormHandler}
    >
      <StatusBar status={renderFormType} />
      <div>
        {renderFormType === "infoForm" && (
          <InfoForm setFormType={setRenderFormType} />
        )}
        {renderFormType === "paymentForm" && (
          <PaymentForm setFormType={setRenderFormType} />
        )}
        {renderFormType === "donorWall" && (
          <DonorForm setFormType={setRenderFormType} />
        )}
        {renderFormType === "reviewForm" && (
          <ReviewForm setFormType={setRenderFormType} />
        )}
      </div>
    </form>
  );
};
