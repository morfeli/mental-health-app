import NavItem from "./NavItem";

export const Navigation = () => {
  return (
    <nav className="hidden sm:flex">
      <ul className="flex">
        <NavItem name="Dashboard" link="Dashboard" nav />
        <NavItem name="Donate" link="Donate" nav />
        <NavItem name="Resources" link="Resources" nav />
      </ul>
    </nav>
  );
};
