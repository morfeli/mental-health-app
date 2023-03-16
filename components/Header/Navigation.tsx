import NavItem from "./NavItem";
import { Button } from "components/UI/Button";

export const Navigation = () => {
  return (
    <nav className="hidden sm:flex">
      <ul className="flex">
        <NavItem name="About" link="About" nav />
        <NavItem name="Donate" link="Donate" nav />
        <NavItem name="Resources" link="Resources" nav />
        <Button styles="bg-[#0cbaba] ml-12 w-[80px] py-0">Login</Button>
        {/* <NavItem name="Dashboard" link="Dashboard" nav /> */}
      </ul>
    </nav>
  );
};
