import { useEffect } from "react";

import { Header } from "components/Header/Header";
import { About } from "./About/About";
import { Donate } from "./Donate/Donate";
import { Footer } from "./Footer/Footer";
import { Hero } from "./Hero/Hero";
import { Resources } from "./Resources/Resources";
import { Support } from "./Support/Support";

const links = [
  { name: "About", link: "About", id: 1 },
  { name: "Donate", link: "Donate", id: 2 },
  { name: "Resources", link: "Resources", id: 3 },
];

export type LandingPageProps = {
  data?: {
    firstName: string;
    lastName: string;
    email: string;
    id: number;
  };
};

export const LandingPage = ({ data }: LandingPageProps) => {
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
      <Header route="home" links={links} data={data} />
      <main className="body">
        <Hero />
        <About />
        <Donate />
        <Resources />
        <Support data={data} />
      </main>
      <Footer />
    </>
  );
};
