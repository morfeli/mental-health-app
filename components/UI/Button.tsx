import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
};
export const Button = ({ children, styles }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "px-3 py-2 rounded-full transition-all duration-300 hover:ring-2 hover:ring-slate-300",
        styles
      )}
    >
      {children}
    </button>
  );
};
