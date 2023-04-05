import classNames from "classnames";
import { useMindScapeContext } from "components/store/useMindScapeContext";

import { CheckSVG } from "components/Icons/CheckSVG";

type StatusBarProps = {
  status: string;
};

export const StatusBar = ({ status }: StatusBarProps) => {
  const mindScapeCtx = useMindScapeContext();

  return (
    <section className="py-8">
      <div className="flex items-center justify-between w-[90vw] h-1 bg-slate-100 mx-auto  relative">
        <div
          className={classNames(
            "relative flex items-center justify-center w-5 h-5 border-2 border-blue-700 rounded-full",
            {
              "bg-white": status === "infoForm",
              "bg-blue-700":
                status === "paymentForm" || "donorWall" || "reviewForm",
            }
          )}
        >
          {mindScapeCtx.infoDataIsValid && <CheckSVG />}
          {status === "infoForm" && (
            <div className="w-2 h-2 bg-blue-700 rounded-full" />
          )}

          <p className="absolute text-[0.7rem] top-6 text-slate-800 hidden xl:flex">
            Info
          </p>
        </div>
        <div
          className={classNames(
            "relative flex items-center justify-center w-5 h-5 rounded-full",
            {
              " bg-white border-2 border-blue-700 ": status === "donorForm",
              "bg-blue-700 ": mindScapeCtx.donorWallIsValid,
            }
          )}
        >
          {mindScapeCtx.donorWallIsValid && <CheckSVG />}
          <p className="absolute text-[0.7rem] top-7 text-slate-800 hidden xl:flex">
            Donor Wall
          </p>
          {status === "donorForm" ? (
            <div className="w-2 h-2 bg-blue-700 rounded-full" />
          ) : (
            <div
              className={classNames(
                "bg-white rounded-full border-[3px] border-slate-200 w-5 h-5",
                {
                  hidden: mindScapeCtx.donorWallIsValid,
                }
              )}
            />
          )}
        </div>
        <div
          className={classNames(
            "relative flex items-center justify-center w-5 h-5 rounded-full",
            {
              " bg-white border-2 border-blue-700 ": status === "paymentForm",
              "bg-blue-700 ": mindScapeCtx.paymentIsValid,
            }
          )}
        >
          {mindScapeCtx.paymentIsValid && <CheckSVG />}
          <p className="absolute text-[0.7rem] top-7 text-slate-800 hidden xl:flex">
            Payment
          </p>
          {status === "paymentForm" ? (
            <div className="w-2 h-2 bg-blue-700 rounded-full" />
          ) : (
            <div
              className={classNames(
                "bg-white rounded-full border-[3px] border-slate-200 w-5 h-5",
                {
                  hidden: mindScapeCtx.paymentIsValid,
                }
              )}
            />
          )}
        </div>
      </div>
    </section>
  );
};
