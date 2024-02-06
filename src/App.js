import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/HeroSection/Hero";
import HIT from "./Components/HowItWork/HIT";
// import Keyfeature from "./Components/KeyFeature/Keyfeature.jsx";
// import NetworkofPhotographer from "./Components/NetworkOfPhotographer/NetworkofPhotographer.jsx";
// import Paid from "./Components/Paid/Paid";
import Pricing from "./Components/Pricing/Pricing.jsx";
import Featureofinstapix from "./Components/featureofinstapix/Featureofinstapix.jsx";
// import "animate.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HIT />
      <Featureofinstapix />
      <Pricing />
      <Faq />
      <Footer />
      {/* <Keyfeature />
      <NetworkofPhotographer />
      <Paid /> */}
    </>
  );
}

export default App;
