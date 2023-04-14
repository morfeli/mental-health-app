import type { NextApiRequest, NextApiResponse } from "next";

const isEmpty = (value: string) => value.trim() === "";

export default async function infoCredenitalsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return;
  }

  const { fullName, message } = req.body;

  const fullNameIsValid = !isEmpty(fullName);
  const messageIsValid = !isEmpty(message);

  const donorWallPostIsValid = fullNameIsValid && messageIsValid;

  if (!donorWallPostIsValid) {
    res.status(400).json({
      message: "Error, something went wrong... try again.",
    });
    return;
  }

  const data = {
    fullName,
    message,
  };

  res.status(201).json({
    message: "Valid credenitals",
    formType: "paymentForm",
    data,
  });
}
