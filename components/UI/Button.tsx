import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
};
export const Button = ({ children, styles }: ButtonProps) => {
  return (
    <button className={classNames("px-3 py-2 rounded-full", styles)}>
      {children}
    </button>
  );
};
