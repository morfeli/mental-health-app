import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
  isValid?: boolean;
};
export const Button = ({ children, styles, isValid }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "px-2 rounded-full transition-all duration-300 hover:ring-2 hover:ring-slate-300 cursor-pointer text-center",
        styles
      )}
    >
      {children}
    </button>
  );
};
