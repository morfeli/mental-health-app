import classNames from "classnames";
import { useMindScapeContext } from "components/store/useMindScapeContext";
import { Button } from "components/UI/Button";
import { GoBackBtn } from "components/UI/GoBackBtn";
import { useEffect, useState } from "react";
import { formProps } from "./ProcessForm";

interface Donor {
  fullName: string;
  message: string;

  touched: {
    fullName: boolean;
    message: boolean;
  };
  valid: {
    fullName: boolean;
    message: boolean;
  };
}

const initialFormState = {
  fullName: "",
  message: "",

  touched: {
    fullName: false,
    message: false,
  },
  valid: {
    fullName: true,
    message: true,
  },
};

export const DonorForm = ({ setFormType }: formProps) => {
  const [form, setForm] = useState<Donor>(initialFormState);

  const [validDonorWallMessage, setValidDonorWallMessage] = useState(true);
  const mindScapeCtx = useMindScapeContext();

  useEffect(() => {
    mindScapeCtx.storeDonorWallData(
      {
        fullName: "",
        message: "",
      },
      false
    );
  }, []);

  const routeToPaymentForm = () => {
    if (!validDonorWallMessage) {
      return;
    } else {
      mindScapeCtx.storeDonorWallData(
        {
          fullName: form.fullName,
          message: form.message,
        },
        true
      );
      setFormType!("paymentForm");
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <h2 className="pb-4 pl-8 text-xl">Post a message on our Donor Wall</h2>

      <div className="self-center pb-4">
        <label htmlFor="fullName">
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                fullName: e.target.value,
                touched: {
                  ...current.touched,
                  fullName: true,
                },
              }))
            }
            value={form.fullName}
            className={classNames({
              "p-2 rounded-md w-[75vw] bg-slate-200 outline-none border-none hover:shadow-xl hover:shadow-blue-300 transition-all cursor-pointer outline-offset-0 outline-2 focus:outline-purple-300":
                form.valid.fullName || form.touched.fullName,
              "p-2 rounded-md w-[75vw] bg-slate-200 border-b-2  border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none":
                !form.valid.fullName && !form.touched.fullName,
            })}
          />
        </label>
      </div>

      <div className="self-center pb-4">
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            placeholder="Post a message"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                message: e.target.value,
                touched: {
                  ...current.touched,
                  message: true,
                },
              }))
            }
            className={classNames({
              "p-2 rounded-md w-[75vw] bg-slate-200 outline-none border-none hover:shadow-xl hover:shadow-blue-300 transition-all cursor-pointer outline-offset-0 outline-2 focus:outline-purple-300":
                form.valid.message || form.touched.message,
              "p-2 rounded-md w-[75vw] bg-slate-200 border-b-2  border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none":
                !form.valid.message && !form.touched.message,
            })}
            value={form.message}
          />
        </label>
      </div>
      <div className="flex items-center justify-between mt-[3rem] px-10">
        <div onClick={() => setFormType!("infoForm")}>
          <GoBackBtn />
        </div>
        <div className="self-end " onClick={routeToPaymentForm}>
          <Button styles="bg-blue-700 text-white w-[80px] py-1 rounded-lg">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
