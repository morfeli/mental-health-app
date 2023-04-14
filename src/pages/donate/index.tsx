import { Header } from "components/Header/Header";
import { DonatePage } from "components/DonatePage/DonatePage";
import { Footer } from "components/LandingPage/Footer/Footer";

const links = [
  { name: "Home", link: "/", id: 1 },
  { name: "Donor Wall", link: "/donorwall", id: 2 },
  { name: "Resources", link: "/resources", id: 3 },
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
