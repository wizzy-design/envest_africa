// Footer of the landing page
import Envest from "../img/Envest.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foooter>
      <div className="footer">
        <div className="foot-top">
          <div className="foot-head">
            <img src={Envest} alt="logo" />
          </div>
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
        <div className="foot-end">
          <div className="line"></div>
          <img src={Envest} alt="logo" />
        </div>
      </div>
    </Foooter>
  );
};

export default Footer;

const Foooter = styled.footer`
  padding: 3rem 5rem;
  background-color: #4c3c81;

  li {
    color: #c1baba;
  }

  .footer {
    display: flex;
    flex-direction: column;

    .foot-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4rem;

      .foot-head img {
        width: 65%;
      }

      .foot-body {
        display: flex;

        .foot-list {
          margin: 0 3.5rem 0 0;

          h2{
            margin-bottom: 1rem;
          }
        }

        h2 {
          font-family: "Montserrat", sans-serif;
          color: #e8e2e2;
        }

        ul li {
          margin: 0;
          padding: 0;
          font-size: 1.1rem;
          line-height: 2rem;
        }
      }
    }

    .foot-end .line{
        background-color: #19161686;
        width: 100%;
        height: 2px;
        margin: 2rem 0;
    }

    .foot-end img {
      width: 10%;
    }
  }
`;
