import { PrismaClient } from "@prisma/client";

import { DonorWallPosts } from "components/DonorWallPage/DonorWallPosts";
import { Header } from "components/Header/Header";
import { Footer } from "components/LandingPage/Footer/Footer";
import { DonorWallLayout } from "components/Layouts.tsx/DonorWallLayout";

export type DonorWallProps = {
  posts: {
    id: number;
    fullName: string;
    message: string;
    createdAt: string;
    amount: number;
  }[];
};

const links = [
  { name: "Home", link: "/", id: 1 },
  { name: "Donate", link: "/donate", id: 2 },
  { name: "Resources", link: "/resources", id: 3 },
];

export default function DonorWall({ posts }: DonorWallProps) {
  if (posts.length === 0) {
    return <p>no posts</p>;
  }
  return (
    <DonorWallLayout>
      <Header links={links} route="donate" />

      <DonorWallPosts posts={posts} />

      <Footer />
    </DonorWallLayout>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const posts = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
  });

  prisma.$disconnect();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
