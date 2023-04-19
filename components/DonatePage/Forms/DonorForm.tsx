import classNames from "classnames";
import { useMindScapeContext } from "components/store/useMindScapeContext";
import { Button } from "components/UI/Button";
import { GoBackBtn } from "components/UI/GoBackBtn";
import { NextBtn } from "components/UI/NextBtn";
import { useEffect, useState } from "react";
import { formProps } from "./ProcessForm";
import { FormLayout } from "components/Layouts.tsx/FormLayout";

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

const isEmpty = (value: string) => value.trim() === "";

export const DonorForm = ({ setFormType, status }: formProps) => {
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
    const fullNameIsValid = !isEmpty(form.fullName);
    const messageIsValid = !isEmpty(form.message);

    setForm((current) => ({
      ...current,
      valid: {
        fullName: fullNameIsValid,
        message: messageIsValid,
      },
    }));

    const formIsValid = fullNameIsValid && messageIsValid;

    if (!formIsValid) {
      return;
    } else {
      const data = {
        fullName: form.fullName,
        message: form.message,
        amount: mindScapeCtx.storedInfoData.amount,
      };

      // TODO: send post request to backend api - validate on the server - send back response and update the status

      fetch("/api/donorWall", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data) {
            return;
          } else {
            console.log(data);
          }

          const { fullName, message } = data.newPost;

          mindScapeCtx.storeDonorWallData(
            {
              fullName: fullName,
              message: message,
            },
            true
          );
          setFormType!(data.formType);
        });
    }
  };

  return (
    <FormLayout status={status}>
      <div className="w-[500px] h-[500px] bg-[#0cbaba] to-cyan-300 blur-[50px] rounded-full absolute left-[-30%] top-[-50%]" />
      <div className="w-[500px] h-[500px] bg-[#0cbaba] blur-[50px] rounded-full absolute right-[-60%] top-[200px]" />
      <div
        onClick={() => setFormType!("infoForm")}
        className="relative pb-4 w-fit"
      >
        <GoBackBtn />
      </div>
      <h2 className="relative pb-4 pl-2 text-3xl text-white">
        Donor wall post
      </h2>

      <div className="relative self-center pb-6">
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
              "rounded-lg bg-white text-sky-500 p-2 xl:py-3 xl:pl-4 w-[75vw] placeholder:text-sky-500 xl:w-[375px] border-2 border-sky-800 outline-none transition-all cursor-pointer hover:shadow-md hover:shadow-slate-500 focus:ring-2 focus:ring-sky-800 text-xl":
                form.valid.fullName || form.touched.fullName,
              "p-2 rounded-md w-[75vw] xl:w-[375px] bg-slate-200 border-b-2  border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none text-lg":
                !form.valid.fullName && !form.touched.fullName,
            })}
          />
        </label>
      </div>

      <div className="relative self-center pb-4">
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
              "scroll-pb-12 rounded-lg bg-white text-sky-500 p-2 xl:py-3 xl:pl-4 w-[75vw] placeholder:text-sky-500 xl:w-[375px] border-2 border-sky-800 outline-none transition-all cursor-pointer hover:shadow-md hover:shadow-slate-500 focus:ring-2 focus:ring-sky-800 text-xl":
                form.valid.message || form.touched.message,
              "p-2 rounded-md w-[75vw] bg-slate-200 border-b-2 xl:w-[375px] border-red-600 border-2 shadow-red-600 placeholder-red-600 cursor-pointer hover:bg-slate-100 transition-colors delay-100 outline-none text-lg":
                !form.valid.message && !form.touched.message,
            })}
            value={form.message}
          />
        </label>
      </div>

      <div
        className="self-center mt-[3rem] relative"
        onClick={routeToPaymentForm}
      >
        <NextBtn />
      </div>
    </FormLayout>
  );
};
