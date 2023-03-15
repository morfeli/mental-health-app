import { Header } from "components/Header/Header";
import { About } from "./About/About";
import { Donate } from "./Donate/Donate";
import { Footer } from "./Footer/Footer";
import { Hero } from "./Hero/Hero";
import { Resources } from "./Resources/Resources";
import { Support } from "./Support/Support";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Donate />
      <Resources />
      <Support />
      <Footer />
    </>
  );
};
