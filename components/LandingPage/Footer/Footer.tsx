import classNames from "classnames";

type FooterProps = {
  styles?: string;
};

export const Footer = ({ styles }: FooterProps) => {
  return (
    <footer
      className={classNames(
        "bg-[#168aad] text-white flex justify-between p-6 relative z-50",
        styles
      )}
    >
      <h2>MindScape</h2>
      <p>footer content</p>
    </footer>
  );
};
