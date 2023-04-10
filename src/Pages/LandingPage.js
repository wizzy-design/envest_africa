// Components
import SearchSection from "../component/SearchSection";
import Companies from "../component/Companies";
import Intro from "../component/Intro";
import Footer from "../component/Footer";
import Nav from "../component/Nav";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <SearchSection />
      <Companies />
      <Intro />
      <Footer />
    </div>
  );
};

export default LandingPage;
