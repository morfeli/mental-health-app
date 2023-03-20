import classNames from "classnames";
import { CheckSVG } from "components/Icons/CheckSVG";

type StatusBarProps = {
  status: string;
};

const statusPending =
  "relative flex items-center justify-center w-5 h-5 bg-white border-2 border-blue-700 rounded-full";
const statusInitial =
  "bg-white rounded-full border-[3px] border-slate-200 w-5 h-5";

const innerDot = () => {
  return <div className="w-2 h-2 bg-blue-700 rounded-full" />;
};

export const StatusBar = ({ status }: StatusBarProps) => {
  return (
    <section className="pt-24 pb-16">
      <div className="flex items-center justify-between w-[90vw] h-1 bg-slate-100 mx-auto">
        <div
          className={classNames(statusPending, {
            "relative flex items-center justify-center w-5 h-5 bg-blue-700 rounded-full":
              status === "paymentForm" ||
              status === "donorWall" ||
              status === "reviewForm",
          })}
        >
          {status === "paymentForm" && <CheckSVG />}
          <p className="absolute text-[0.7rem] top-6 text-slate-800">Info</p>
          {status === "infoForm" && (
            <div className="w-2 h-2 bg-blue-700 rounded-full" />
          )}
        </div>
        <div
          className={classNames("relative flex items-center justify-center", {
            "relative flex items-center justify-center w-5 h-5 bg-white border-2 border-blue-700 rounded-full":
              status === "paymentForm",
          })}
        >
          <p className="absolute text-[0.7rem] top-7 text-slate-800">Payment</p>
          {status === "paymentForm" ? (
            <div className="w-2 h-2 bg-blue-700 rounded-full" />
          ) : (
            <div className="bg-white rounded-full border-[3px] border-slate-200 w-5 h-5" />
          )}
        </div>
        <div className="relative flex items-center justify-center">
          <p className="absolute text-[0.7rem] text-center top-7 w-[70px] text-slate-800">
            Donor Wall
          </p>
          <div className="bg-white rounded-full border-[3px] border-slate-200 w-5 h-5" />
        </div>
        <div className="relative flex items-center justify-center">
          <p className="absolute text-[0.7rem] top-7 text-slate-800">Review</p>
          <div className="bg-white rounded-full border-[3px] border-slate-200 w-5 h-5" />
        </div>
      </div>
    </section>
  );
};
