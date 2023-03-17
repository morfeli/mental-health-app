import { ArrowUp } from "components/Icons/ArrowUp";
import { Button } from "./Button";

export const TherapyBtn = () => {
  return (
    <Button styles="w-[125px] pl-6 py-2 bg-[#168aad] text-white border-white border-[1px] shadow-2xl hover:bg-bluePrimary text-lg flex items-center relative">
      Therapy
      <ArrowUp />
    </Button>
  );
};
