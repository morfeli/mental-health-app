import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import NavItem from "./NavItem";

type MobileMenuProps = {
  isOpen: boolean;
  closeMenu: React.MouseEventHandler<HTMLLIElement>;
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

const links = [
  { name: "Dashboard", id: 1 },
  { name: "Donate", id: 2 },
  { name: "Resources", id: 3 },
];

export const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  const navStyles =
    "sm:hidden fixed w-[75vw] top-[77px] right-0 z-40 bg-gradient-to-t from-[#00b4d8] to-[#78c6a3] flex flex-col items-center justify-evenly h-screen";

  const ulStyles = classNames({
    hidden: !isOpen,
    "transition-all text-white flex flex-col items-center justify-between h-[60vh]":
      isOpen,
  });

  // blue one 48cae4
  // blue two 00b4d8
  // blue three 62b6cb

  // green one 78c6a3
  //  green two 67b99a
  // green three 56ab91

  // 07bad5
  // 0cbaba

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
            {links.map(({ name }, i) => {
              return (
                <NavItem
                  key={name}
                  name={name}
                  link={name}
                  variants={itemVariants}
                  closeMenu={closeMenu}
                />
              );
            })}
          </motion.ul>

          <p className="text-lg italic text-white">MindScape</p>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
