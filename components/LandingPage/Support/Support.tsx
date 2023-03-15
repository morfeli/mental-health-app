import { Button } from "components/UI/Button";

export const Support = () => {
  return (
    <section className="rounded-md flex w-[90vw] h-96 justify-center mx-auto flex-col items-center p-4 m-12 mb-24 bg-gradient-to-r from-[#48cae4] via-[#5e60ce] to-[#006466] text-white shadow-xl">
      <p className="pb-4 italic">MindScape Logo</p>
      <h2 className="text-4xl">Feeling meh?</h2>
      <p className="p-2 py-8 text-center text-md md:w-[600px]">
        Login today to connect with a professional therapist, keep log of your
        daily activies and find the way to yourself. Wellness made simple, for
        you.
      </p>

      <Button styles="py-2 w-[100px] bg-[#00b4d8]">Login</Button>
    </section>
  );
};
