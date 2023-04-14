import NavItem from "./NavItem";
import { Button } from "components/UI/Button";
import { HeaderProps } from "./Header";

export const Navigation = ({ route, links }: HeaderProps) => {
  return (
    <nav className="hidden sm:flex xl:pr-2">
      <ul className="flex">
        {links.map((link, i) => {
          return (
            <NavItem
              name={link.name}
              link={link.link}
              key={link.id}
              nav
              route={route}
            />
          );
        })}
        {/* <NavItem name="About" link="About" nav />
        <NavItem name="Donate" link="Donate" nav />
        <NavItem name="Resources" link="Resources" nav /> */}
        <Button styles="bg-[#0cbaba] ml-12 w-[80px] py-0">Login</Button>
        {/* <NavItem name="Dashboard" link="Dashboard" nav /> */}
      </ul>
    </nav>
  );
};
