// Components
import LandingSection from "../component/LandingSection";
import Companies from "../component/Companies";
import FirstSection from "../component/FirstSection";
import SecondSection from "../component/SecondSection";
import ThirdSection from "../component/ThirdSection";
import FourthSection from "../component/FourthSection";
// import Footer from "../component/Footer";
import Nav from "../component/Nav";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <LandingSection />
      <Companies />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
