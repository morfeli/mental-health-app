import { LoginOverlay } from "components/Layouts.tsx/LoginOverlay";
import { UserForm } from "./UserForm";

export const LoginScreen = () => {
  return (
    <main className="flex justify-between">
      <UserForm />

      <LoginOverlay />
    </main>
  );
};
