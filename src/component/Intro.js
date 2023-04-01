import Questions from "../img/Questions.png";
import Envest from "../img/Envest.png";
import growthcurve from "../img/growthcurve.png";
import styled from "styled-components";

const Intro = () => {
  return (
    <Introo>
      <Intro1>
        <Left>
          <img src={Questions} alt="Pic with queston mark" />
        </Left>

        <Right>
          <div className="write-up">
            <h1>
              What is <img src={Envest} alt="Logo" />
            </h1>
            <p>
              Envest helps Local and Foreign Investors identify, vet, and invest
              in quality businesses, and also helps businesses raise funds to
              help push their business goals from all over the globe.
            </p>
            <div className="buttons">
              <button>Find Startups</button>
              <button>Join Now</button>
            </div>
          </div>
        </Right>
      </Intro1>
      <Intro2>
        <Left>
          <div className="write-up">
            <h1>Actively track your investments with EASE.</h1>
            <p>
              Envest helps Local and Foreign Investors identify, vet, and invest
              in quality businesses, and also helps businesses raise funds to
              help push their business goals from all over the globe.
            </p>
            <div className="buttons button">Invest in a startup</div>
          </div>
        </Left>

        <Right>
          <img src={growthcurve} alt="Pic with queston mark" />
        </Right>
      </Intro2>
    </Introo>
  );
};

const Introo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;
`;

const Intro1 = styled.div`
  display: flex;
  align-items: center;
`;

const Intro2 = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  img {
    width: 22rem;
  }
`;

const Right = styled.div`
  img {
    width: 25rem;
  }

  .write-up{
    padding: 0 1rem;
  }

  .write-up h1 {
    font-size: 3rem;
    padding-bottom: 2rem;
  }

  .write-up h1 img {
    width: 10rem;
  }

  .write-up p {
    width: 80%;
    padding: 1rem 0;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    /* line-height: 29px; */
  }
`;

export default Intro;
