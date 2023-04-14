// The section of the landing page that introduces Envest
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
        <Right>
          <div className="write-up">
            <h1>Actively track your investments with EASE.</h1>
            <p>
              Envest helps Local and Foreign Investors identify, vet, and invest
              in quality businesses, and also helps businesses raise funds to
              help push their business goals from all over the globe.
            </p>
            <div className="buttons">
              <button>Invest in a startup</button>
            </div>
          </div>
        </Right>

        <Left>
          <img src={growthcurve} alt="Pic with queston mark" />
        </Left>
      </Intro2>
    </Introo>
  );
};

const Introo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 5rem;
`;

const Intro1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0rem 0rem 5rem 0rem;
`;

const Left = styled.div`
  width: 40%;
  img {
    width: 24rem;
  }
`;

const Right = styled.div`
  width: 60%;
 
  .write-up {
    /* width: 80%; */
    /* max-width: 60%; */
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
    width: 100%;
    padding: 1rem 0;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #5e5757;
    line-height: 29px;
  }

  button {
    width: 10rem;
    margin-top: 2rem;
    margin-right: 2rem;
    padding: 1rem .5rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #4c3c81;
    background: transparent;
    border: 2px solid #4c3c81;
    outline: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      background-color: #4c3c81;
      color: white;
    }
  }

`;

const Intro2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0rem 0rem 5rem 0rem;

  img{
    width: 28rem;
  }

  button{
    width: 20rem;
    padding: 1rem .5rem;
  }
`;

export default Intro;
