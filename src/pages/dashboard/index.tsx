import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { Questionaire } from "components/Dashboard/Questionaire";
import { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";

type DashboardProps = {
  answeredQuestionaire: boolean;
};

export default function Dashboard({ answeredQuestionaire }: DashboardProps) {
  const [innerWidth, setInnerWidth] = useState(1024);
  const { data: session, status } = useSession();

  const isMobile = innerWidth <= 1024;

  const changeWidth = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    changeWidth();

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [isMobile]);

  if (status === "unauthenticated") {
    return <p>error page here</p>;
  }

  if (isMobile) {
    return <p>Noncaptable for mobile devices</p>;
  }

  return (
    <>
      {!answeredQuestionaire && <Questionaire user={session?.user?.email!} />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const prisma = new PrismaClient();

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const email = session.user?.email!;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const didUserAnswerQuestionaire = user?.answeredQuestionaire!;

  prisma.$disconnect();
  return {
    props: {
      session,
      answeredQuestionaire: didUserAnswerQuestionaire,
    },
  };
};
