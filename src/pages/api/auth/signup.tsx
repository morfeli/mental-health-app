// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";

import { hashedPassword } from "../../../../components/helper-functions/HelperFunctions";

type Data = {
  email?: boolean;
  message?: string;
  success?: boolean;
  serverMessage?: {
    title: string;
    message: string;
  };
};

const isEmpty = (value: string) => value.trim() === "";

const isNineChars = (value: string) => value.trim().length >= 9;

const emailValidation = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

export default async function signUpHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const prisma = new PrismaClient();
    const data = req.body;

    const { firstName, lastName, email, password, confirmPassword } = data;

    const firstNameIsValid = !isEmpty(firstName);
    const lastNameisValid = !isEmpty(lastName);
    const emailIsValid = emailValidation(email);
    const passwordisValid = isNineChars(password);
    const confirmPasswordisValid = isNineChars(confirmPassword);

    if (password !== confirmPassword) {
      prisma.$disconnect();
      return;
    }

    const userDataIsValid =
      firstNameIsValid &&
      lastNameisValid &&
      emailIsValid &&
      passwordisValid &&
      confirmPasswordisValid;

    if (!userDataIsValid) {
      prisma.$disconnect();
      return;
    }

    const existingUserEmailorName = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUserEmailorName) {
      prisma.$disconnect();

      const serverMessage = {
        title: "Email already in use",
        message: "Please login",
      };

      res.status(201).json({ serverMessage, email: true });
      return;
    }

    const protectedPassword = await hashedPassword(password);

    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: protectedPassword,
      },
    });

    prisma.$disconnect();

    const serverMessage = {
      title: "Succesful sign up!",
      message: "You are being redirected to login :)",
    };

    res.status(201).json({ serverMessage, success: true });
  }
}
