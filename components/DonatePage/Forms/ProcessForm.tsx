import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";

import { DonorForm } from "./DonorForm";
import { InfoForm } from "./InfoForm";
import { StatusBar } from "../StatusBar";
import { StripeForm } from "./StripeForm";
import { useMindScapeContext } from "components/store/useMindScapeContext";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../UI/Dialog";

export type formProps = {
  setFormType?: Dispatch<SetStateAction<string>>;
  status?: string;
  setInfoHandler?: Dispatch<SetStateAction<string>>;
};

export const ProcessForm = () => {
  const router = useRouter();
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

        <Dialog
          open={mindScapeCtx.paymentIsValid}
          onOpenChange={() => {
            router.reload();
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Thank you for your support!</DialogTitle>
              <DialogDescription>
                All donations are proceeded to NAMI. We thank you for supporting
                our goal in causing awareness towards mental health. We sent you
                an email confirmation regarding your contribution! If you
                haven't done so already, we encourage you to sign up on our
                platform to ultilize the User Therapy Dashboard.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
