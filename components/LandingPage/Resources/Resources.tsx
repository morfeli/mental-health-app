import { ArrowUp } from "components/Icons/ArrowUp";
import { SectionLayout } from "components/Layouts.tsx/SectionLayout";
import { Button } from "components/UI/Button";
import { LineBreak } from "components/UI/LineBreak";

export const Resources = () => {
  return (
    <SectionLayout id="Resources">
      <div className="text-center">
        <h2 className="text-2xl lg:text-4xl">Keep your mind clear</h2>
        <p className="p-6 py-8 text-lg leading-8 md:w-[650px] lg:w-[800px] md:mx-auto">
          We've collected numerous information about mental illness ranging from
          early signs of conditions, treatments and mental health by the
          numbers. Millions of people in the U.S. are affected by mental illness
          every year. It is crucial to be educated on one of the worlds leading
          illness to better support you and your loved ones.
        </p>
      </div>

      <div className="pt-8">
        <Button styles="w-[300px] mx-auto pl-6 py-2 bg-[#168aad] text-white border-white border-[1px] shadow-2xl hover:bg-bluePrimary text-lg flex items-center relative">
          Learn more about Mental Health
          <ArrowUp />
        </Button>
      </div>
      {/* <LineBreak /> */}
    </SectionLayout>
  );
};
