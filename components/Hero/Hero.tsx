import { ArrowUp } from "components/Icons/ArrowUp";
import { Donate } from "components/Icons/Donate";
import { HeroOverlay } from "components/Layouts.tsx/HeroOverlay";
import { Button } from "components/UI/Button";
import Image from "next/image";

export const Hero = () => {
  return (
    <HeroOverlay id="Hero">
      <div className="">
        <h2 className="px-4 text-3xl w-[365px] mx-auto text-center lg:w-[500px] md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">
          Be Kind to Your Mind: Mental Health Awareness Starts Here
        </h2>
        <p className="p-4 text-lg text-center md:text-2xl md:leading-8 lg:py-2">
          MindScape was created to provide information and resources for people
          looking to learn more about mental health, reduce stigma, promote
          self-care, connect people with mental health professionals and to
          offer support to others who may be struggling.
        </p>
      </div>
      <div className="my-4">
        <Image
          src={"/mental-health.webp"}
          width={350}
          height={350}
          alt="Hero Image"
          className="mx-auto rounded-xl md:w-[350px] lg:w-[700px] lg:h-[400px] border-2 border-white shadow-xl"
        />
      </div>
      <div className="flex justify-between px-14 md:w-[75vw] md:mx-auto mt-8">
        <Button styles="bg-blueSecondary text-white border-white border-2 shadow-lg w-24 hover:bg-bluePrimary text-lg flex items-center relative">
          Donate
          <Donate />
        </Button>
        <Button styles="bg-blueSecondary text-white border-white border-2 shadow-lg w-24 hover:bg-bluePrimary text-lg flex items-center relative">
          Therapy
          <ArrowUp />
        </Button>
      </div>
    </HeroOverlay>
  );
};
