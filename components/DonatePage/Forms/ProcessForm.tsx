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
      <div>
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
                We are incredibly grateful for your recent donation to our
                mental health awareness campaign. Your generosity will go a long
                way in helping us raise awareness, break down stigmas, and
                provide support for individuals and families affected by mental
                health issues.
              </DialogDescription>
              <DialogDescription>
                With compassion and understanding, we can build a society where
                everyone feels empowered to openly discuss mental health and get
                the help they need. Your donation is a meaningful step towards
                that goal. Thank you for your kindness and support. Together, we
                are making a difference.
              </DialogDescription>
              <DialogDescription>
                All donations are proceeded to NAMI. Once again, thank you for
                your kindness and generosity. We sent you an email confirmation
                regarding your contribution! If you haven't done so already, we
                encourage you to sign up on our platform to ultilize the User
                Therapy Dashboard.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
