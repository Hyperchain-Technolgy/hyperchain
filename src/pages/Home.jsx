import Header from "../components/Header";
import Hero from "../components/Hero";
import KnowUs from "../components/KnowUs";
import OurServices from "../components/OurServices";
import BlockchainConsultation from "../components/BlockchainConsultation";
import Showcase from "../components/Showcase";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import ScrollingFooter from "../components/ScrollingFooter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <KnowUs />
      <OurServices />
      <BlockchainConsultation />
      <Showcase />
      <Clients />
      <Contact />
      <ScrollingFooter />
      <Footer />
    </>
  );
}

export default Home;
