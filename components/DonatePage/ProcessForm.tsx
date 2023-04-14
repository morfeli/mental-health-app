import { Dispatch, SetStateAction, useState } from "react";
import { DonorForm } from "./DonorForm";
import { InfoForm } from "./InfoForm";
import { StatusBar } from "./StatusBar";
import { StripeForm } from "./StripeForm";
import { useMindScapeContext } from "components/store/useMindScapeContext";
import { Modal } from "components/UI/Modal";

export type formProps = {
  setFormType?: Dispatch<SetStateAction<string>>;
  status?: string;
  setInfoHandler?: Dispatch<SetStateAction<string>>;
};

export const ProcessForm = () => {
  const mindScapeCtx = useMindScapeContext();
  const [status, setStatus] = useState<string>("infoForm");

  return (
    <section>
      <StatusBar status={status} />
      <div className="">
        {status === "infoForm" && (
          <InfoForm setFormType={setStatus} status={status} />
        )}
        {status === "donorForm" && (
          <DonorForm setFormType={setStatus} status={status} />
        )}
        {status === "paymentForm" && (
          <StripeForm setFormType={setStatus} status={status} />
        )}

        <Modal show={mindScapeCtx.paymentIsValid}>
          Thank you message goes here
        </Modal>
      </div>
    </section>
  );
};
