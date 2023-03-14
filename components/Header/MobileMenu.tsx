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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
