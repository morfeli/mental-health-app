type HeroOverlayProps = {
  children: React.ReactNode;
  id?: string;
};

export const HeroOverlay = ({ children, id }: HeroOverlayProps) => {
  return (
    <section
      className="font-Author relative flex flex-col items-center justify-center w-screen h-[900px] md:h-fit md:pb-24 overflow-hidden text-white bg-gradient-to-t from-greenSecondary to-greenPrimary"
      id={id && id}
    >
      <div className="w-[1000px] h-[1000px] bg-bluePrimary blur-[200px] rounded-full absolute left-[35%] top-[-100px] " />
      <div className="z-50 flex flex-col justify-between pt-24 md:pt-36 sm:px-4">
        {children}
      </div>
    </section>
  );
};
