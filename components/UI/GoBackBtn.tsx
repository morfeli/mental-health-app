import { ArrowBack } from "./ArrowBack";
import { Button } from "./Button";

export const GoBackBtn = () => {
  return (
    <Button styles="text-lg flex w-fit items-center text-white">
      <ArrowBack />
      Back
    </Button>
  );
};
