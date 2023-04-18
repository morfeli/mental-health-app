import { ProcessForm } from "./Forms/ProcessForm";

export const DonatePage = () => {
  return (
    <section className="relative z-50 pb-16 bg-white 2xl:h-screen pt-28 xl:pt-20 xl:flex xl:justify-around bg-gradient-to-br from-sky-400 to-cyan-300 ">
      <div className="p-4 pl-5 text-white xl:pt-20">
        <h1 className="z-50 pb-2 text-5xl md:text-7xl">DONATE TODAY</h1>
        <h2 className="pb-4 text-4xl md:text-4xl xl:py-6">
          Be a part of the change
        </h2>
        <p className="text-md md:text-2xl md:w-[600px] 2xl:w-[450px]">
          Insert text here relating nami and their part in mental health
          awareness. MindScape's misson and goals, what we plan on for the
          future..
        </p>
      </div>
      <ProcessForm />
    </section>
  );
};