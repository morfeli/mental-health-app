import { ProcessForm } from "./ProcessForm";

export const UserDonateLayout = () => {
  return (
    <section className="pt-20 ">
      <div className="p-8 ">
        <h1 className="pb-2 text-2xl">Donate today!</h1>
        <h2 className="pb-4 text-xl">Be part of the change</h2>
        <p className="text-md">
          Insert text here relating nami and their part in mental health
          awareness. MindScape's misson and goals, what we plan on for the
          future..
        </p>
      </div>

      <ProcessForm />
    </section>
  );
};
