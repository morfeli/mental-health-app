import { DonateSVG } from "components/Icons/DonateSVG";
import { SectionLayout } from "components/Layouts.tsx/SectionLayout";
import { Button } from "components/UI/Button";
import { LineBreak } from "components/UI/LineBreak";
import { Progress } from "components/UI/Progress";
import { HeroImage } from "../Hero/HeroImage";

export const Donate = () => {
  return (
    <SectionLayout id="Donate">
      <div className="text-center lg:flex lg:flex-row-reverse lg:justify-evenly">
        <div className="lg:w-[50vw]">
          <h2 className="text-2xl w-[300px] mx-auto lg:w-fit lg:text-4xl">
            Together we can create an impactful force
          </h2>
          <p className="p-6 leading-8 lg:text-lg lg:leading-10">
            MindScape has set a goal of $5,000.00 USD to be proceeded to NAMI by
            the end of May, Mental Health Awareness month. We will continue to
            keep our donation wallet up and running nonetheless. We strive to
            create a better tomorrow - where all people affected by mental
            illness can experience hope, happiness and purpose. Together we can
            create a significant change.
          </p>

          <Progress value={0} />

          <div className="pt-12">
            <Button styles="mx-auto w-[125px] pl-6 py-2 bg-[#168aad] text-white border-white border-[1px] shadow-2xl hover:bg-bluePrimary text-lg flex items-center relative">
              Donate
              <DonateSVG />
            </Button>
          </div>
        </div>

        <HeroImage source="/mental-heath-image-donate.webp" />
      </div>
      <LineBreak />
    </SectionLayout>
  );
};
