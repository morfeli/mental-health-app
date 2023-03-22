import classNames from "classnames";
import { useMindScapeContext } from "components/store/useMindScapeContext";

import { CheckSVG } from "components/Icons/CheckSVG";
import { useEffect } from "react";

type StatusBarProps = {
  status: string;
};

const statusBarProgress = {
  infoForm: 0,
  paymentForm: 50,
  donorWall: 100,
};

export const StatusBar = ({ status }: StatusBarProps) => {
  const mindScapeCtx = useMindScapeContext();

  return (
    <section className="pt-24 pb-16">
      <div className="flex items-center justify-between w-[90vw] h-1 bg-slate-100 mx-auto xl:flex-col xl:h-[95vh] xl:w-[5px] relative">
        {/* <div
          className={classNames("absolute h-1 bg-red-300", {
            "w-0": status === "infoForm",
            "w-[50%]": status === "paymentForm",
            "w-[90vw]": status === "donorWall",
          })}
        /> */}
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

          <p className="absolute text-[0.7rem] top-6 text-slate-800">Info</p>
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
          <p className="absolute text-[0.7rem] top-7 text-slate-800">Payment</p>
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
        <div
          className={classNames(
            "relative flex items-center justify-center w-5 h-5 rounded-full",
            {
              " bg-white border-2 border-blue-700 ": status === "donorWall",
              "bg-blue-700 ": mindScapeCtx.donorWallIsValid,
            }
          )}
        >
          {mindScapeCtx.donorWallIsValid && <CheckSVG />}
          <p className="absolute text-[0.7rem] top-7 text-slate-800">
            Donor Wall
          </p>
          {status === "donorWall" ? (
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
        {/* <div
          className={classNames(
            "relative flex items-center justify-center w-5 h-5 rounded-full",
            {
              " bg-white border-2 border-blue-700 ": status === "reviewForm",
              "bg-blue-700 ": mindScapeCtx.donorWallIsValid,
            }
          )}
        >
          {mindScapeCtx.donorWallIsValid && <CheckSVG />}
          <p className="absolute text-[0.7rem] top-7 text-slate-800">
            Donor Wall
          </p>
          {status === "reviewForm" ? (
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
        </div> */}
      </div>
    </section>
  );
};
