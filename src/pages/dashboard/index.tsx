import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { Questionaire } from "components/Dashboard/Questionaire";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <p>error page here</p>;
  }

  return (
    <div>
      <Questionaire />
    </div>
  );
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

  return {
    props: {
      session,
    },
  };
};
