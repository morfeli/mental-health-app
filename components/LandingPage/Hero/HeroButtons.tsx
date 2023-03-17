import { DonateBtn } from "components/UI/DonateBtn";
import { TherapyBtn } from "components/UI/TherapyBtn";

export const HeroButtons = () => {
  return (
    <div className="flex justify-around px-6 md:w-[75vw] md:mx-auto mt-8">
      <DonateBtn />
      <TherapyBtn />
    </div>
  );
};
