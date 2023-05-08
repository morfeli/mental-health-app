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
            ...user,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      /* Step 1: update the token based on the user object */
      if (user) {
        token.lastName = user.lastName;
        token.firstName = user.firstName;
        token.email = user.email;
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      /* Step 2: update the session.user based on the token object */
      if (token && session.user) {
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: "MUNKNATION",
});
