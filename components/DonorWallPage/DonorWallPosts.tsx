import { PostCard } from "./PostCard";
import { DonorWallProps } from "@/pages/donate/donorwall";

export const DonorWallPosts = ({ posts }: DonorWallProps) => {
  return (
    <section className="h-full pt-24 xl:pt-36 xl:flex xl:justify-around xl:px-4 xl:pb-8 bg-gradient-to-tl from-sky-400 to-cyan-300">
      <div className="relative flex flex-col items-start p-4 pl-5 text-white">
        <h1 className="text-4xl tracking-tighter uppercase xl:text-6xl">
          Thank you Donors!
        </h1>
        <h2 className="py-6 text-2xl md:text-3xl xl:w-[500px]">
          Together, we can make a lasting impact and create a brighter future.
        </h2>
        <p className="text-md md:text-xl md:w-[600px] xl:w-[500px] relative">
          As we work towards a world where mental health is understood,
          accepted, and supported, we are proud to have you by our side. Thank
          you for being a beacon of hope and a catalyst for change in the fight
          for mental health awareness.
        </p>
      </div>

      <ul className="bg-white xl:w-[550px] shadow-inner rounded-lg h-[650px] overflow-hidden overflow-y-scroll scroll-smooth p-4 border-4 border-bluePrimary relative flex flex-col gap-10">
        {posts.map(({ fullName, message, createdAt, id, amount }) => (
          <PostCard
            fullName={fullName}
            message={message}
            createdAt={createdAt}
            id={id}
            amount={amount}
            key={id}
          />
        ))}
      </ul>
    </section>
  );
};
