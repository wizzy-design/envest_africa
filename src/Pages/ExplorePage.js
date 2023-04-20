// Explore page is the page where the navigation link "Explore Page" takes you to
import Nav from "../component/Nav";
import ExploreSearch from "../component/ExploreSearch";
import Companies from "../component/Companies";
import Industries from "../component/Industries";
import FeaturedBusiness from "../component/FeaturedBusiness";
import Footer from "../component/Footer";

const ExplorePage = () => {
  return (
    <div>
      <Nav />
      <ExploreSearch />
      <Companies />
      <Industries />
      <FeaturedBusiness />
      <Footer />
    </div>
  );
};

export default ExplorePage;
