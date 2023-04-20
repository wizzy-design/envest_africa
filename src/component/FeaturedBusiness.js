import FeatureCard from "./FeatureCard";
import styled from "styled-components";

// Images
import agrisoft from "../img/agrosoft.png";
import lovefood from "../img/lovefoods.png";
import ajoo from "../img/ajoomicrofinance.png";
import tour from "../img/tourafrica.png";
import vit from "../img/vitagro.png";
import tutor from "../img/protutor.png";

const FeaturedBusiness = () => {
  return (
    <Featured>
      <h1>Featured Businesses</h1>

      <Cards>
        <div className="cards1">
          <FeatureCard
            imageUrl={agrisoft}
            title="Agrisoft Tech"
            description="$2 million seed funding"
          />
          <FeatureCard
            imageUrl={lovefood}
            title="Love Foods"
            description="Food and beverages"
          />
          <FeatureCard
            imageUrl={ajoo}
            title="Ajoo Microfinance"
            description="Fintech company"
          />
        </div>
        <div className="cards2">
          <FeatureCard
            imageUrl={tour}
            title="Tour Africa"
            description="Travel and Tourism"
          />
          <FeatureCard
            imageUrl={vit}
            title="Vit Agro"
            description="Agriculture"
          />
          <FeatureCard
            imageUrl={tutor}
            title="Pro Tutors"
            description="Education"
          />
        </div>
      </Cards>
    </Featured>
  );
};

const Featured = styled.div`
  margin-bottom: 8rem;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .cards1,
  .cards2 {
    display: flex;
    gap: 1rem;
  }
`;

export default FeaturedBusiness;
