// Footer of the landing page
import Envest from "../img/Envest.svg";
import styled from "styled-components";
import whiteArrow from "../img/arrow-right-white.svg";
import twitter from "../img/mdi_twitter.svg";
import linkedin from "../img/typcn_social-linkedin.svg";
import dot from "../img/period.svg";

const Footer = () => {
  return (
    <Foooter>
      <div className="footer">
        <div className="foot-top">
          <div className="foot-head">
            <h1>Start Invest with Envest</h1>
            <p>
              Access high-quality financial data and start processing payments
              directly from bank accounts in minutes.
            </p>

            <div className="buttons">
              <button className="purple">
                Get started for free <img src={whiteArrow} alt="White arrow" />
              </button>
              <button className="grey">
                Contact sales <img src={whiteArrow} alt="White arrow" />
              </button>
            </div>
          </div>
          <div className="line"></div>
          <div className="foot-body">
            <div className="foot-list">
              <h2>Explore</h2>
              <ul>
                <li>Businesses</li>
                <li>Startups</li>
              </ul>
            </div>
            <div className="foot-list">
              <h2>Pitch</h2>
              <ul>
                <li>Schedules</li>
                <li>Presentations</li>
                <li>How it works</li>
              </ul>
            </div>
            <div className="foot-list">
              <h2>Industries</h2>
              <ul>
                <li>Tech</li>
                <li>Agriculture</li>
                <li>Education</li>
                <li>FinTech</li>
                <li>Transport</li>
                <li>Food and Beverages</li>
              </ul>
            </div>
            <div className="foot-list">
              <h2>About</h2>
              <ul>
                <li>T & C</li>
                <li>FAQ</li>
                <li>Legal</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="foot-end">
          <div className="part one">
            <img src={Envest} alt="logo" />
            <p> © Envest Nigeria Limited</p>
          </div>
          <div className="part two">
            <p>
              <img src={twitter} alt="Twitter icon" /> Twitter
            </p>
            <img id="dot" src={dot} alt="Period" />
            <p>
              <img src={linkedin} alt="LinkedIn icon" /> LinkedIn
            </p>
          </div>
        </div>
      </div>
    </Foooter>
  );
};

export default Footer;

const Foooter = styled.footer`
  padding: 5rem 10rem 3rem;
  background-color: #000;

  li {
    color: #c1baba;
  }

  .footer {
    display: flex;
    flex-direction: column;

    .foot-top {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 2rem;

      .foot-head {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1,
        p {
          font-family: Inter;
          color: #fff;
        }

        h1 {
          line-height: 133.02%;
        }

        p {
          font-weight: 400;
          padding: 0.5rem 0 1rem;
          text-align: center;
          width: 50%;
          line-height: 25px;
          color: rgb(193, 186, 186);
        }

        .buttons {
          display: flex;
          gap: 1rem;
          padding: 0.5rem 0 2rem 0;
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

          .purple {
            color: #ffffff;
            background-color: #4c3c81;
          }

          .grey {
            color: #ffffff;
            background-color: #202020;
          }
        }
      }

      .foot-body {
        display: flex;
        justify-content: center;
        gap: 4rem;
        padding: 1.5rem 0 0 0;

        h2 {
          font-family: "Montserrat", sans-serif;
          color: #e8e2e2;
        }

        ul li {
          margin: 0;
          padding: 0;
          font-size: 0.9rem;
          line-height: 2rem;
        }

        .foot-list {
          margin: 0 3.5rem 0 0;

          h2 {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
        }
      }
    }

    .line {
      background-color: #202020;
      width: 100%;
      height: 1px;
      margin: 2rem 0;
    }

    .foot-end {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: Inter;

      p {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 13px;
        color: #ffffff;
        padding-top: 4.5px;
        height: 21.57px;
      }

      .part {
        width: 100%;
        display: flex;
        align-items: center;

        #dot {
          width: 3px;
        }
      }

      .one {
        gap: 3.5rem;
        img {
          width: 111px;
        }
      }

      .two {
        gap: 0.8rem;
        justify-content: flex-end;
      }
    }
  }
`;
