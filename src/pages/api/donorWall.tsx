import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const isEmpty = (value: string) => value.trim() === "";
const prisma = new PrismaClient();

export default async function infoCredenitalsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return;
  }

  const { fullName, message, amount } = req.body;

  const fullNameIsValid = !isEmpty(fullName);
  const messageIsValid = !isEmpty(message);

  // Run a more secure validation rather than just checking if the value exists...
  // const amountIsValid = !isEmpty(amount);

  const donorWallPostIsValid = fullNameIsValid && messageIsValid;

  if (!donorWallPostIsValid) {
    res.status(400).json({
      message: "Error, something went wrong... try again.",
    });
    return;
  }

  const newPost = await prisma.post.create({
    data: {
      fullName: fullName,
      message: message,
      amount: amount,
    },
  });

  prisma.$disconnect();

  res.status(201).json({
    message: "Valid credenitals",
    formType: "paymentForm",
    newPost,
  });
}
