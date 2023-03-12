import { ArrowUp } from "components/Icons/ArrowUp";
import { Donate } from "components/Icons/Donate";
import { Button } from "components/UI/Button";

export const HeroButtons = () => {
  return (
    <div className="flex justify-around px-6 md:w-[75vw] md:mx-auto mt-8">
      <Button styles="w-[125px] pl-6 bg-[#168aad] text-white border-white border-[1px] shadow-2xl hover:bg-bluePrimary text-lg flex items-center relative">
        Donate
        <Donate />
      </Button>
      <Button styles="w-[125px] pl-6 bg-[#168aad] text-white border-white border-[1px] shadow-2xl hover:bg-bluePrimary text-lg flex items-center relative">
        Therapy
        <ArrowUp />
      </Button>
    </div>
  );
};
