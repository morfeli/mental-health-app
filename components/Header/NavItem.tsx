import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";

type NavItemProps = {
  link: string;
  name: string;
  nav?: boolean;
  route?: string;
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

const NavItem = ({
  closeMenu,
  link,
  variants,
  nav,
  name,
  route,
}: NavItemProps) => {
  const navItemStyle = classNames(
    "list-none tracking-wide font-Author cursor-pointer transition-colors ease-in-out delay-75 after:block after:w-0 after:h-0.5 after:transition-all duration-700 hover:after:w-full after:bg-white",
    {
      "pl-12 lg:pl-16": nav,
      "text-xl": nav,
      "text-2xl": !nav,
      "text-[#dcdcdc]": route === "donate",
    }
  );

  if (route === "donate") {
    return (
      <Link href={link}>
        <li className={navItemStyle} id={`navLink-${link}`} onClick={closeMenu}>
          {name}
        </li>
      </Link>
    );
  }
  return (
    <motion.a
      id={`navLink-${link}`}
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
