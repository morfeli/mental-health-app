import { LoginOverlay } from "components/Layouts.tsx/LoginOverlay";
import { UserForm } from "./UserForm";

import { Toaster } from "../UI/Toaster";

export const LoginScreen = () => {
  return (
    <main className="flex justify-between">
      <UserForm />

      <LoginOverlay />

      <Toaster />
    </main>
  );
};
