import { Button } from "./Button";

type NextBtnProps = {
  isValid?: boolean;
};

export const NextBtn = ({ isValid }: NextBtnProps) => {
  return (
    <Button
      styles="bg-gradient-to-r from-[#0069a6] to-[#0cbaba] text-white w-[300px] py-2 rounded-lg transition-all duration-300 hover:ring-2 hover:ring-slate-300"
      isValid={isValid}
    >
      Next
    </Button>
  );
};
