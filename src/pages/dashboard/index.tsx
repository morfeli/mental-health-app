import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <p>error</p>;
  }

  return <div>Dashboard</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  console.log(session);

  return {
    props: {
      session,
    },
  };
};
