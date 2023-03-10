import { HeroOverlay } from "components/Layouts.tsx/HeroOverlay";
import { HeroButtons } from "./HeroButtons";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
  return (
    <HeroOverlay id="Hero">
      <h2 className="md:hidden px-4 text-2xl w-[300px] leading-10 sm:text-3xl md:w-[700px] mx-auto text-center">
        Be Kind to Your Mind: Mental Health Awareness Starts Here
      </h2>
      <h2 className="hidden mx-auto text-center md:block md:text-3xl lg:text-[3rem]">
        Be Kind to Your Mind:
      </h2>
      <p className="hidden pt-2 mx-auto text-center md:block md:text-3xl lg:text-[3rem] lg:pt-8">
        Mental Health Awareness Starts Here
      </p>
      <p className="p-4 text-md text-center md:text-xl md:w-[700px] lg:w-[1100px] md:mx-auto my-2 md:leading-8 lg:py-6">
        MindScape was created to provide information and resources for people
        looking to learn more about mental health, reduce stigma, promote
        self-care, connect people with mental health professionals and to offer
        support to others who may be struggling.
      </p>

      <HeroButtons />

      <HeroImage />
    </HeroOverlay>
  );
};
