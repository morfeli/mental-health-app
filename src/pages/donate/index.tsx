import { Header } from "components/Header/Header";
import { Form } from "components/DonatePage/Form";
import { Footer } from "components/LandingPage/Footer/Footer";
import { StatusBar } from "components/DonatePage/StatusBar";

export default function DonatePage() {
  return (
    <>
      <Header />
      <main>
        {/* <StatusBar /> */}
        <Form />
      </main>
      <Footer />
    </>
  );
}
