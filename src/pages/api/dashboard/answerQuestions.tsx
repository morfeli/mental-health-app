import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function answerQuestionsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const data = JSON.parse(req.body);

    const { mood, sleep, stress, therapy, support, user } = data;

    const updateUser = mood && sleep && stress && therapy && support && user;

    if (!updateUser) return;

    const prisma = new PrismaClient();

    const updatedUser = await prisma.user.update({
      where: {
        email: user,
      },

      data: {
        answeredQuestionaire: true,
        questionaireAnswers: {
          mood,
          sleep,
          stress,
          therapy,
          support,
        },
      },
    });

    console.log(updatedUser);

    prisma.$disconnect();

    res.status(201).json({ message: "Success", user: updatedUser });
  }
}
