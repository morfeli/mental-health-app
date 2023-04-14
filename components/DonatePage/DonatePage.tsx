import { DonateOverlay } from "./DonateOverlay";
import { ProcessForm } from "./ProcessForm";

export const DonatePage = () => {
  return (
    <DonateOverlay>
      <section className="relative z-50 pb-16 pt-28 xl:pt-20 xl:flex xl:justify-around">
        <div className="p-4 pl-5 text-white xl:pt-20">
          <h1 className="z-50 pb-2 text-5xl md:text-7xl">DONATE TODAY</h1>
          <h2 className="pb-4 text-4xl md:text-4xl xl:py-6">
            Be a part of the change
          </h2>
          <p className="text-md md:text-2xl md:w-[600px] 2xl:w-[450px]">
            Insert text here relating nami and their part in mental health
            awareness. MindScape's misson and goals, what we plan on for the
            future..
          </p>
        </div>
        <ProcessForm />
      </section>
    </DonateOverlay>
  );
};
