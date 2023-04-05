import { Dispatch, SetStateAction, useState } from "react";
import { DonorForm } from "./DonorForm";
import { InfoForm } from "./InfoForm";
import { StatusBar } from "./StatusBar";
import { StripeForm } from "./StripeForm";

export type formProps = {
  setFormType?: Dispatch<SetStateAction<string>>;
  setInfoHandler?: Dispatch<SetStateAction<string>>;
};

export const ProcessForm = () => {
  const [status, setStatus] = useState<string>("infoForm");

  return (
    <section className="">
      <StatusBar status={status} />
      {status === "infoForm" && <InfoForm setFormType={setStatus} />}
      {status === "donorForm" && <DonorForm setFormType={setStatus} />}
      {status === "paymentForm" && <StripeForm setFormType={setStatus} />}
      {status === "success" && <p>Success Content</p>}
    </section>
  );
};
