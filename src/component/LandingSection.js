import styled from "styled-components";
import man from "../img/new_man.svg";
import blackArrow from "../img/arrow-right-black.svg";
import whiteArrow from "../img/arrow-right-white.svg";

const LandingSection = () => {
  return (
    <Section>
      <Left>
        <div className="announcement">
          <span className="new">NEW</span> Envest Dashboard 2.0 is live!{" "}
          <img src={blackArrow} alt="Black Arrow" />
        </div>

        <h1>Invest and Discover Quality</h1>
        <h2>Discover and Invest in Quality Businesses in Nigeria. </h2>

        <div className="buttons">
          <button className="purple">
            Get started for free <img src={whiteArrow} alt="White arrow" />
          </button>
          <button className="white">
            Contact sales <img src={blackArrow} alt="Black arrow" />
          </button>
        </div>
      </Left>

      <Right>
        <Img>
          <img className="man" src={man} alt="Man holding paper" />
        </Img>
      </Right>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 10rem;
  width: 80%;
`;

const Left = styled.div`
  margin: 0 0 1rem;

  .announcement {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15rem;
    margin-bottom: 2rem;
    padding: 0.4rem 0.5rem;
    font-size: 0.7rem;
    border-radius: 1.2rem;
    background-color: #f5f5f5;
    font-family: Inter;
    cursor: pointer;

    .new {
      /* font-size: 1rem; */
      margin-right: 0.5rem;
      padding: 0.2rem 0.5rem;
      border-radius: 1rem;
      color: #ffffff;
      background-color: #4c3c81;
    }
  }

  h1 {
    width: 90%;
    font-family: Inter;
    font-size: 55px;
    font-weight: 600;
    line-height: 77px;
    letter-spacing: 0em;
    text-align: left;
    color: #000;
  }

  h2 {
    width: 70%;
    font-family: Inter;
    font-size: 19px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    padding: 1.5rem 0;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 0 0 0;
    button {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      justify-content: center;
      padding: 0.8rem 0;
      width: 10rem;
      border: none;
      border-radius: 0.2rem;
      cursor: pointer;
      font-size: 0.85rem;

      /* img{
        width: 1rem;
      } */
    }

    .purple {
      color: #ffffff;
      background-color: #4c3c81;
    }

    .white{
      color: #000;
      background-color: #f5f5f5;
    }
  }
`;

const Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
`;

const Img = styled.div`
  padding: 0.5rem 0 0 0;
  width: 100%;

  img.man {
    object-fit: cover;
  }
`;

export default LandingSection;
