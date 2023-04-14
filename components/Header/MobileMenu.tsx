import classNames from "classnames";
import { Button } from "components/UI/Button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import NavItem from "./NavItem";

type MobileMenuProps = {
  isOpen: boolean;
  closeMenu: React.MouseEventHandler<HTMLLIElement>;
  route: string;
  links: {
    name: string;
    link: string;
    id: number;
  }[];
};

const navBarVariants = {
  closed: { opacity: 0, x: 100 },
  open: { opacity: 1, x: 0 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

export const MobileMenu = ({
  isOpen,
  closeMenu,
  route,
  links,
}: MobileMenuProps) => {
  const navStyles = classNames(
    "sm:hidden fixed w-[75vw] top-[77px] right-0 z-40  flex flex-col items-center justify-evenly h-screen",
    {
      "bg-gradient-to-t from-[#2e7e9b] via-[#3e9cb9] to-[#62b5ce]":
        route === "home",
      "bg-slate-200": route === "donate",
    }
  );

  const ulStyles = classNames({
    hidden: !isOpen,
    "transition-all text-white flex flex-col items-center justify-between h-[60vh]":
      isOpen,
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className={navStyles}
          aria-label="Site Navigation"
          role="navigation"
          variants={navBarVariants}
          initial="closed"
          animate="open"
          transition={{ type: "spring", stiffness: 100 }}
          exit={{
            opacity: 0,
            x: "100%",
            transition: { delay: 0.5, duration: 0.3 },
          }}
        >
          <motion.ul
            className={ulStyles}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {links.map(({ name, link }, i) => {
              return (
                <NavItem
                  key={name}
                  name={name}
                  link={link}
                  variants={itemVariants}
                  closeMenu={closeMenu}
                  route={route}
                />
              );
            })}
            <Button styles="bg-[#0cbaba] w-[100px] py-2">Login</Button>
          </motion.ul>

          <Link href="/">
            <p className="text-lg italic text-white">MindScape</p>
          </Link>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
