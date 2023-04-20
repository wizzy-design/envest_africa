import IndustryCard from "./IndustryCard";
import styled from "styled-components";

// Images
import tech from "../img/tech_industry.png";
import farm from "../img/farm_industry.png";
import POS from "../img/POS_industry.png";
import food from "../img/food_industry.png";
import plane from "../img/plane_industry.png";
import house from "../img/house_industry.png";

const Industries = () => {
  return (
    <Industry>
      <h1>Popular Industries</h1>

      <Cards>
        <IndustryCard
          imageUrl={tech}
          title="Tech"
          description="1200+ businesses"
        />
        <IndustryCard
          imageUrl={farm}
          title="Agriculture"
          description="200+ businesses"
        />
        <IndustryCard
          imageUrl={POS}
          title="Fintech"
          description="100+ businesses"
        />
        <IndustryCard
          imageUrl={food}
          title="Food"
          description="200+ businesses"
        />
        <IndustryCard
          imageUrl={plane}
          title="Travel & Tour"
          description="200+ businesses"
        />
        <IndustryCard
          imageUrl={house}
          title="Real Estate"
          description="200+ businesses"
        />
      </Cards>
    </Industry>
  );
};

const Industry = styled.div`
  margin: 8rem 0 4rem 0;
  h1 {
    text-align: center;
    margin: 2rem 0 2.5rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
`;

export default Industries;
