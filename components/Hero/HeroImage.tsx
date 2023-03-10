import Image from "next/image";

export const HeroImage = () => {
  return (
    <div className="mt-14">
      <Image
        src={"/mental-health.webp"}
        width={350}
        height={350}
        alt="Hero Image"
        className="mx-auto rounded-xl md:w-[500px] border-4 border-blue-600 shadow-xl"
      />
    </div>
  );
};
