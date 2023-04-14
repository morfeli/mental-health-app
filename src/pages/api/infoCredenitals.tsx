import type { NextApiRequest, NextApiResponse } from "next";

const isEmpty = (value: string) => value.trim() === "";
const isEmailValid = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

export default async function infoCredenitalsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return;
  }

  const { firstName, lastName, email, amount } = req.body;

  const firstNameisValid = !isEmpty(firstName);
  const lastNameisValid = !isEmpty(lastName);
  const emailIsValid = isEmailValid(email);
  const amountIsValid = !isEmpty(amount);

  const formIsValid =
    firstNameisValid && lastNameisValid && emailIsValid && amountIsValid;

  if (!formIsValid) {
    res.status(400).json({
      message: "Error, something went wrong... try again.",
    });
    return;
  }

  const userDonationAmount = parseInt(amount);

  const data = {
    firstName,
    lastName,
    email,
    userDonationAmount,
  };

  res.status(201).json({
    message: "Valid credenitals",
    formType: "donorForm",
    data,
  });
}
