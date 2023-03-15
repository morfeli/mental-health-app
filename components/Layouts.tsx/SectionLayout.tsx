import classNames from "classnames";

type SectionLayoutProps = {
  children: React.ReactNode;
  id: string;
};

export const SectionLayout = ({ children, id }: SectionLayoutProps) => {
  return (
    <section
      className={classNames(
        "flex flex-col py-[6rem] text-white font-Author",
        {}
      )}
      id={id}
    >
      {children}
    </section>
  );
};
