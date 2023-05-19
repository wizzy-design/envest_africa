import styled from "styled-components";
// Images & Logos
import purpleArrow from "../img/arrow-right-purple.svg";
import connectLogo from "../img/connect_logo.svg";
import connectBg from "../img/connect_bg.svg";
import direct1 from "../img/directpay1-logo.svg";
import direct2 from "../img/directpay2_logo.svg";
import clock from "../img/clock-loader-10.svg";
import whiteArrow from "../img/arrow-right-white.svg";
import directBg1 from "../img/directpay1.svg";
import directBg2 from "../img/directpay2.svg";
import flutter from "../img/small_flutter.svg";

const FirstSection = () => {
  return (
    <div>
      <WriteUp>
        <h1>Build for the future of digital finance.</h1>
        <p>
          Bring tomorrow's solutions to life, with our customer-focused
          solutions, today.
        </p>
      </WriteUp>

      <PictureGrid>
        {/* The Rectangle grid */}
        <Rectangle>
          <div id="connectWord">
            <div className="logo">
              <img src={connectLogo} alt="Connect Logo" />
            </div>
            <div className="words">
              <h2>Connect</h2>
              <p>
                Securely access financial accounts for statements, transactions,
                and identity
              </p>
              <button>
                Start with connect <img src={purpleArrow} alt="Purple arrow" />
              </button>
            </div>
          </div>
          <img id="connectBg" src={connectBg} alt="Connect Background" />
        </Rectangle>

        {/* First square */}
        <Square>
          <div id="directPay1">
            <div className="logo">
              <img src={direct1} alt="Direct 1 Logo" />
            </div>
            <div className="words">
              <h2>DirectPay</h2>
              <p>
                Collect bank payments in your web or mobile app. No cards. No
                chargebacks.
              </p>
              <button>
                Start with DirectPay <img src={whiteArrow} alt="Purple arrow" />
              </button>
              <p id="flutter">
                In Partnership with <img src={flutter} alt="" />
              </p>
            </div>
            <img className="illustration" src={directBg1} alt="Illustration" />
          </div>
        </Square>

        {/* Second square */}
        <Square>
          <div id="directPay2">
            <div className="logo">
              <img src={direct2} alt="Direct 2 Logo" />
            </div>
            <div className="words">
              <h2>DirectPay</h2>
              <p>
                Collect bank payments in your web or mobile app. No cards. No
                chargebacks.
              </p>
              <button>
                Request access <img src={clock} alt="Clock" />
              </button>
            </div>
            <img className="illustration" src={directBg2} alt="Illustration" />
          </div>
        </Square>
      </PictureGrid>
    </div>
  );
};

// Styled Components

const WriteUp = styled.div`
  padding: 1rem 10rem 0rem;
  h1 {
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 10px;
  padding: 2rem 10rem 8rem;

  .words {
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      color: #fff;
      line-height: 133.02%;
      padding: 0.5rem 0;
    }

    p {
      width: 303px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      color: #fff;
      line-height: 20px;
      padding: 0 0 1.5rem 0;
    }

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
    }
  }
`;

const Rectangle = styled.div`
  position: relative;
  grid-column: 1/3;
  width: 100%;
  height: 354px;
  border-radius: 8px;
  background-color: #4c3c81;

  #connectWord {
    padding: 4rem 0 0 2rem;
    .words {
      button {
        color: #4c3c81;
        background-color: #fff;
      }
    }
  }

  #connectBg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Square = styled.div`
  #directPay1 {
    position: relative;
    height: 537px;
    padding: 3rem 0 0 2rem;
    background-color: #e3def3;
    border-radius: 8px;

    .words h2,
    .words p {
      color: #000;
    }

    button {
      cursor: pointer;
      color: #fff;
      background-color: #4c3c81;
    }

    #flutter {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      padding: .5rem 0 0 0;
      gap: 0.4rem;
    }

    .illustration {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  #directPay2 {
    position: relative;
    height: 537px;
    padding: 3rem 0 0 2rem;
    background-color: #000000;
    border-radius: 8px;

    button {
      color: #fff;
      background-color: #202020;
    }

    .illustration {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`;

export default FirstSection;
