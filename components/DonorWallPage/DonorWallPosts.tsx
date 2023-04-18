import { PostCard } from "./PostCard";
import { DonorWallProps } from "@/pages/donate/donorwall";

export const DonorWallPosts = ({ posts }: DonorWallProps) => {
  return (
    <section className="pt-24 xl:pt-32 xl:flex xl:justify-between xl:px-24 xl:pb-8 bg-gradient-to-tl from-sky-400 to-cyan-300">
      <div className="flex flex-col items-start p-4 pl-5 text-white">
        <h1 className="text-4xl uppercase xl:text-6xl">Thank you Donors!</h1>
        <h2 className="py-4 text-2xl md:text-4xl">Be a part of the change</h2>
        <p className="text-md md:text-2xl md:w-[600px] xl:w-[550px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          blanditiis cumque perferendis minus dignissimos sint odio quae amet
          libero laudantium possimus veritatis, dolores culpa natus eligendi
          explicabo? Asperiores, debitis fuga.
        </p>
      </div>

      <ul className="bg-white shadow-inner  rounded-lg h-[650px]  overflow-hidden overflow-y-scroll scroll-smooth xl:w-[650px] border-4 border-bluePrimary relative">
        {/* <div className="w-[500px] h-[500px] bg-gradient-to-br from-sky-400 to-cyan-300 blur-[100px] rounded-full absolute left-[-30%] top-[-30%]" /> */}
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
