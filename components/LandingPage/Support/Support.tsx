import { Button } from "components/UI/Button";
import Link from "next/link";

export const Support = () => {
  return (
    <section className="pb-24 font-Author">
      <div className="rounded-md border-white border-2 flex w-[90vw] h-96 justify-center mx-auto flex-col items-center  bg-gradient-to-r from-[#48cae4] via-[#5e60ce] to-[#006466] text-white shadow-xl">
        <p className="pb-4 italic">MindScape Logo</p>
        <h2 className="text-4xl">Feeling meh?</h2>
        <p className="p-2 py-8 text-center text-md md:w-[500px]">
          Login today to connect with a professional therapist, keep log of your
          daily activies and find the way to yourself. Wellness made simple, for
          you.
        </p>
        <Link href="/login">
          <Button styles="py-2 w-[100px] bg-[#00b4d8] text-center">
            Login
          </Button>
        </Link>
      </div>
    </section>
  );
};
