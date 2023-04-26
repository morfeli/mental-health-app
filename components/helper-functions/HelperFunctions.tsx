import { hash, compare } from "bcryptjs";

export async function hashedPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function comparePasswords(
  hashedPassword: string,
  password: string
) {
  const isValid = await compare(hashedPassword, password);
  return isValid;
}
