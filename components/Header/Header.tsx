import { useEffect, useState } from "react";
import { MobileBtn } from "./MobileBtn";
import { MobileMenu } from "./MobileMenu";

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
    <header className="fixed z-[60] w-screen transition duration-300 ease-in-out bg-opacity-50 shadow-lg transform-gpu border-b-2 backdrop-blur-sm ">
      <div className="flex items-center justify-between w-screen px-8 py-1 bg-opacity-50 bg-zinc-800">
        <h2 className="text-xl italic text-white z-[60]">MindScape</h2>
        <MobileBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
        <MobileMenu isOpen={isOpen} closeMenu={closeMenuHandler} />
      </div>
    </header>
  );
};
