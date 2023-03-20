import classNames from "classnames";
import { useMindScapeContext } from "components/store/useMindScapeContext";
import { Button } from "components/UI/Button";
import { GoBackBtn } from "components/UI/GoBackBtn";
import { useEffect, useState } from "react";
import { formProps } from "./Form";

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

  const routeToReviewForm = () => {
    if (!validDonorWallMessage) {
      return;
    } else {
      mindScapeCtx.storeDonorWallData({
        fullName: form.fullName,
        message: form.message,
      });
      setFormType("reviewForm");
    }
  };
  useEffect(() => {
    console.log(mindScapeCtx.storedPaymentData, mindScapeCtx.storedInfoData);
  }, []);
  return (
    <div className="flex flex-col justify-between">
      <h2>Post a message on our Donor Wall</h2>

      <div className="mb-2">
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
              "p-2 rounded-md w-60 bg-light-gray border-none focus:outline-button-pink":
                form.valid.fullName || form.touched.fullName,
              "p-2 rounded-md w-60 bg-light-gray border-b-2 border-red-900":
                !form.valid.fullName && !form.touched.fullName,
            })}
          />
        </label>
      </div>

      <div>
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
            value={form.message}
          />
        </label>
      </div>
      <div onClick={() => setFormType("paymentForm")}>
        <GoBackBtn />
      </div>
      <div className="self-end" onClick={routeToReviewForm}>
        <Button styles="bg-blue-700 text-white w-[80px] py-1 rounded-lg">
          Next
        </Button>
      </div>
    </div>
  );
};
