import { useEffect } from "react";

import { Header } from "components/Header/Header";
import { About } from "./About/About";
import { Donate } from "./Donate/Donate";
import { Footer } from "./Footer/Footer";
import { Hero } from "./Hero/Hero";
import { Resources } from "./Resources/Resources";
import { Support } from "./Support/Support";

export const LandingPage = () => {
  useEffect(() => {
    let section = document.querySelectorAll("section");

    window.onscroll = () => {
      section.forEach((sec) => {
        let top = window.scrollY + 250;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        const target = document.getElementById(`navLink-${id}`);

        if (top >= offset && top < offset + height) {
          target?.classList.add("activeLink");
        } else {
          target?.classList.remove("activeLink");
        }
      });
    };
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Donate />
        <Resources />
        <Support />
      </main>
      <Footer />
    </>
  );
};
