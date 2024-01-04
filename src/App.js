import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/HeroSection/Hero";
import HIT from "./Components/HowItWork/HIT";
import Keyfeature from "./Components/KeyFeature/Keyfeature";
import Paid from "./Components/Paid/Paid";
// import "animate.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HIT />
      <Faq />
      {/* <Keyfeature /> */}
      <Paid />
      <Footer />
    </>
  );
}

export default App;
