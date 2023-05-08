import { DefaultSession, DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
  /**
   * Role of user
   */
  user: {
    firstName: string;
    lastName: string;
    email: string;
    /**
     * Field to check whether a user has a subscription
     */
    id: number;
  };
}

// nextauth.d.ts
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}

// nextauth.d.ts
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
