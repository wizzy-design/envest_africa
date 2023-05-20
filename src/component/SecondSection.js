import styled from "styled-components";
// Images & Logos
import purpleArrow from "../img/arrow-right-purple.svg";
import phone from "../img/mobilePhone.svg";
import union from "../img/Union.svg";

const SecondSection = () => {
  return (
    <div>
      <WriteUp>
        <h1>Business building with Envest</h1>
        <p>
          Here are some of the interesting features and experiences powered by
          Envest.
        </p>
      </WriteUp>
      <PictureGrid>
        <List>
          <ul>
            <li id="lead">Leading</li>
            <li>Financial Management</li>
            <li>Account Verification</li>
            <li>Payments</li>
          </ul>
        </List>
        <div className="words">
          <h2>Actively track your Investment with EASE-</h2>
          <p>
            Envest helps local and foreign Investors identify, vet and Invest in
            quality businesses.
            <br />
            <br /> We also help businesses to raise funds to help push our
            business goals from all over the world.
          </p>
          <button>
            Read more about Statement Pages{" "}
            <img src={purpleArrow} alt="Purple arrow" />
          </button>
        </div>
        <img id="union1" src={union} alt="Union" />
        <img id="union2" src={union} alt="Union 2" />
        <img id="phone" src={phone} alt="Phone" />
      </PictureGrid>
    </div>
  );
};

// Styled Components

const WriteUp = styled.div`
  padding: 1rem 10rem 1.5rem;
  h1 {
    font-family: 600;
    width: 446px;
    color: #000;
    line-height: 40.87px;
    padding: 0 0 1.2rem;
  }

  p {
    font-family: Inter;
    width: 346px;
  }
`;

const PictureGrid = styled.div`
  margin: 1rem 10rem 8rem;
  position: relative;
  border-radius: 8px;
  background-color: #f5f5f5;
  height: 635px;

  .words {
    width: 40%;
    padding: 4rem 0 0 2rem;

    h2 {
      font-family: Inter;
      font-size: 1.9rem;
      padding-bottom: 1.5rem;
    }

    p {
      font-family: Inter;
      font-size: 14.5px;
      font-weight: 500;
      color: #606060;
      line-height: 18px;
    }

    button {
      margin: 2rem 0 0 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #4c3c81;
      border: none;
      font-family: Inter;
      font-weight: 600;
      cursor: pointer;
      background-color: transparent;
    }
  }

  #phone {
    position: absolute;
    right: 2rem;
    bottom: 0;
  }

  #union1 {
    width: 0.93rem;
    position: absolute;
    right: 23rem;
    bottom: 21rem;
  }

  #union2 {
    width: 0.93rem;
    position: absolute;
    right: 25rem;
    bottom: 23.5rem;
  }
`;

const List = styled.div`
  padding: 3rem 1rem;
  ul {
    display: flex;
    align-items: center;

    li {
      font-weight: 500;
      color: #000;
      font-family: Inter;
      font-size: 13px;
    }

    #lead {
      padding: 0.5rem 1rem;
      border-radius: 26px;
      background-color: #000;
      color: #fff;
    }
  }
`;

export default SecondSection;
