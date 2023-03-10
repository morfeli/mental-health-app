import { ArrowUp } from "components/Icons/ArrowUp";
import { Donate } from "components/Icons/Donate";
import { Button } from "components/UI/Button";

export const HeroButtons = () => {
  return (
    <div className="flex justify-between px-14 md:w-[75vw] md:mx-auto mt-8">
      <Button styles="w-[150px] pl-4 bg-[#168aad] text-white border-white border-2 shadow-2xl hover:bg-bluePrimary text-lg flex items-center relative">
        Donate
        <Donate />
      </Button>
      <Button styles="w-[150px] pl-4 bg-[#168aad] text-white border-white border-2 shadow-2xl hover:bg-bluePrimary text-lg flex items-center relative">
        Therapy
        <ArrowUp />
      </Button>
    </div>
  );
};
