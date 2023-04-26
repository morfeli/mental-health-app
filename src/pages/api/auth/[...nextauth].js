import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { comparePasswords } from "../../../../components/helper-functions/HelperFunctions";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) {
          prisma.$disconnect();

          throw new Error("No user found!");
        }

        const isValid = await comparePasswords(
          credentials?.password,
          user.password
        );

        if (!isValid) {
          prisma.$disconnect();

          throw new Error("Invalid password");
        }

        const userInfo = {
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          objectId: user?.id,
        };

        prisma.$disconnect();

        if (user) {
          return {
            name: userInfo,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  secret: "MUNKNATION",
});
