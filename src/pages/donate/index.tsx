import { Header } from "components/Header/Header";
import { Form } from "components/DonatePage/Form";
import { Footer } from "components/LandingPage/Footer/Footer";

export default function DonatePage() {
  return (
    <div className="flex flex-col justify-between h-screen font-Author">
      <Header />

      <Form />

      <Footer />
    </div>
  );
}
