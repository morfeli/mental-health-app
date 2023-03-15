import { HeroImage } from "components/LandingPage/Hero/HeroImage";
import { SectionLayout } from "components/Layouts.tsx/SectionLayout";
import { LineBreak } from "components/UI/LineBreak";

export const About = () => {
  return (
    <SectionLayout id="About">
      <div className="text-center lg:flex lg:justify-evenly">
        <div className="lg:w-[50vw]">
          <h2 className="text-2xl lg:text-4xl">
            Normalize mental health illness
          </h2>
          <p className="pt-2 text-xl lg:text-3xl">You can make a difference</p>

          <p className="p-6 leading-8 lg:text-lg lg:leading-10">
            Our ideology is simple, your mental health comes first and vocalize
            how you feel when you feel. We want to make it clear that if you
            have - or think you have a mental health issue, you are not alone.
            MindScape was built to provide support, educate the public & to
            connect those who may be suffering with professional help. All
            donations will proceed to NAMI, the National Aliicance on Mental
            Illness. We are not partners with NAMI, just supporters.
          </p>

          <p>Insert content here regarding user therapy dashboard</p>
        </div>
        <HeroImage source="/mental-health-image.webp" />
      </div>
      <LineBreak />
    </SectionLayout>
  );
};
