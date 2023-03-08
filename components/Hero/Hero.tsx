import { HeroOverlay } from "components/Layouts.tsx/HeroOverlay";
import { Button } from "components/UI/Button";
import Image from "next/image";

export const Hero = () => {
  return (
    <HeroOverlay id="Hero">
      <div className="md:flex md:items-center md:justify-around md:w-screen">
        <h2 className="px-4 text-3xl w-[350px] md:w-[500px] md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">
          Be Kind to Your Mind: Mental Health Awareness Starts Here
        </h2>
        <div className="my-8">
          <Image
            src={"/mental-health-3.webp"}
            width={350}
            height={350}
            alt="Hero Image"
            className="mx-auto rounded-xl md:w-[500px] lg:w-[700px] lg:h-[500px] border-2 border-white shadow-xl"
          />
        </div>
      </div>
      <p className="p-4 text-lg text-center md:text-2xl md:leading-8 md:w-[700px] md:mx-auto lg:py-8">
        MindScape was created to provide information and resources for people
        looking to learn more about mental health, reduce stigma, promote
        self-care, connect people with mental health professionals and to offer
        support to others who may be struggling.
      </p>

      <div className="flex justify-between px-14 md:w-[50vw] md:mx-auto mt-8">
        <Button styles="bg-blueSecondary text-white border-white border-2 shadow-lg md:w-40 hover:bg-bluePrimary md:text-lg">
          Donate
        </Button>
        <Button styles="bg-blueSecondary text-white border-white border-2 shadow-lg md:w-40 hover:bg-bluePrimary md:text-lg">
          Seek Therapy
        </Button>
      </div>
    </HeroOverlay>
  );
};
