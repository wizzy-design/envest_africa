// Explore page is the page where the navigation link "Explore Page" takes you to
import Nav from "../component/Nav";
import ExploreSearch from "../component/ExploreSearch";
import Companies from "../component/Companies";
import Industries from "../component/Industries";
// import styled from "styled-components";

const ExplorePage = () => {
  return (
    <div>
      <Nav />
      <ExploreSearch />
      <Companies />
      <Industries />
    </div>
  );
};

// const ExploreDiv = styled.div`
//   width: 100vw;
//   overflow: hidden;
// `;

export default ExplorePage;
