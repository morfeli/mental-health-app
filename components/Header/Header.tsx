import { useEffect, useState } from "react";
import { MobileBtn } from "./MobileBtn";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [innerWidth, setInnerWidth] = useState<number>();

  const toggleMenuHandler = (): void => {
    setIsOpen((current) => !current);
  };

  const closeMenuHandler = (): void => {
    setIsOpen(false);
  };

  const changeWidth = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    changeWidth();

    window.addEventListener("resize", changeWidth);

    if (innerWidth == 768) {
      setIsOpen(false);
    }

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [innerWidth]);

  useEffect(() => {
    const section = document.getElementById("body");

    if (isOpen) {
      section?.classList.add("open");
    } else {
      section?.classList.remove("open");
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 flex items-center justify-between w-screen px-6 py-4 bg-transparent md:px-14">
      <h2 className="text-xl italic text-white">MindScape</h2>
      <MobileBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
    </header>
  );
};
