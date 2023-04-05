import { DonatePage } from "components/DonatePage/DonatePage";
import { Header } from "components/Header/Header";

import { Footer } from "components/LandingPage/Footer/Footer";

const links = [
  { name: "Home", id: 1 },
  { name: "Resources", id: 2 },
];

export default function Donate() {
  return (
    <div className="flex flex-col justify-between h-screen font-Author">
      <Header route="donate" links={links} />

      <DonatePage />

      <Footer />
    </div>
  );
}
