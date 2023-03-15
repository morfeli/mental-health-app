import classNames from "classnames";
import { motion } from "framer-motion";

type NavItemProps = {
  link: string;
  name: string;
  nav?: boolean;
  closeMenu?: React.MouseEventHandler<HTMLLIElement>;
  onClick?: () => void;
  variants?: {
    closed: {
      opacity: number;
    };
    open: {
      opacity: number;
    };
  };
};

const NavItem = ({ closeMenu, link, variants, nav, name }: NavItemProps) => {
  const navItemStyle = classNames(
    "list-none tracking-wide font-Author cursor-pointer transition-colors ease-in-out delay-75 after:block after:w-0 after:h-0.5 after:transition-all duration-700 hover:after:w-full after:bg-white",
    {
      "pl-12 lg:pl-20": nav,
      "text-xl": nav,
      "text-2xl": !nav,
    }
  );
  return (
    <motion.a
      variants={variants}
      href={`#${link}`}
      onClick={(e) => {
        const section = document.getElementById(`${link}`);
        e.preventDefault();
        section && section.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <li id={`navLink-${link}`} onClick={closeMenu} className={navItemStyle}>
        {name}
      </li>
    </motion.a>
  );
};

export default NavItem;
