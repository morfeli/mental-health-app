import classNames from "classnames";
import { useMindScapeContext } from "components/store/useMindScapeContext";

import { CheckSVG } from "components/Icons/CheckSVG";

type StatusBarProps = {
  status: string;
};

export const StatusBar = ({ status }: StatusBarProps) => {
  const mindScapeCtx = useMindScapeContext();

  return (
    <div className="pt-8 pb-2">
      <div className="flex items-center justify-between  w-[90vw] h-1 bg-gradient-to-t from-gray-900 via-gray-100 to-gray-900 mx-auto relative xl:w-[450px]">
        <div
          className={classNames(
            "h-1 bg-bluePrimary transition-all ease-in-out delay-150 duration-1000 absolute",
            {
              "w-0": status === "infoForm",
              "w-[50%]": status === "donorForm",
              "w-[100%]": status === "paymentForm",
            }
          )}
        />
        <div
          className={classNames(
            "relative flex items-center justify-center w-5 h-5 border-4 border-bluePrimary rounded-full",
            {
              "bg-white": status === "infoForm",
              "bg-bluePrimary":
                status === "paymentForm" || "donorWall" || "reviewForm",
            }
          )}
        >
          {mindScapeCtx.infoDataIsValid && <CheckSVG />}
          {status === "infoForm" && (
            <div className="w-2 h-2 rounded-full bg-bluePrimary" />
          )}
        </div>
        <div
          className={classNames(
            "relative flex items-center justify-center w-5 h-5 rounded-full",
            {
              " bg-white border-4 border-bluePrimary ": status === "donorForm",
              "bg-bluePrimary": mindScapeCtx.donorWallIsValid,
            }
          )}
        >
          {mindScapeCtx.donorWallIsValid && <CheckSVG />}

          {status === "donorForm" ? (
            <div className="w-2 h-2 rounded-full bg-bluePrimary" />
          ) : (
            <div
              className={classNames(
                "bg-white rounded-full border-[3px] border-slate-500 w-5 h-5",
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
              " bg-white border-4 border-bluePrimary ":
                status === "paymentForm",
              "bg-bluePrimary ": mindScapeCtx.paymentIsValid,
            }
          )}
        >
          {mindScapeCtx.paymentIsValid && <CheckSVG />}

          {status === "paymentForm" ? (
            <div className="w-2 h-2 rounded-full bg-bluePrimary" />
          ) : (
            <div
              className={classNames(
                "bg-white rounded-full border-[3px] border-slate-500 w-5 h-5",
                {
                  hidden: mindScapeCtx.paymentIsValid,
                }
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};
