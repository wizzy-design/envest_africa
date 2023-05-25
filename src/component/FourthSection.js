import styled from "styled-components";
import subtractBg from "../img/subtractBg.svg";
import plug from "../img/plugIcon.svg";
import purpleArrow from "../img/arrow-right-purple.svg";
import phone from "../img/phonecodes.svg";
import suitcase from "../img/suitcase.svg";
import folder from "../img/folder.svg";
import fan from "../img/fan.svg";

const FourthSection = () => {
  return (
    <Started imageUrl={subtractBg}>
      <WriteUp>
        <h1>Getting started</h1>
      </WriteUp>

      <Grids>
        <Rectangle>
          <Write>
            <img src={plug} alt="Plug Icon" className="icon" />
            <h1>Powerful APIs and easy-to-use resources</h1>
            <button>
              Read our API Docs <img src={purpleArrow} alt="Purple Arrow" />
            </button>
          </Write>
          <img id="phone" src={phone} alt="Phone" />
        </Rectangle>
        <Square>
          <Write>
            <img src={suitcase} alt="Plug Icon" className="icon" />
            <h2>Plug-and-play SDKs</h2>
            <button>
              Read our API Docs <img src={purpleArrow} alt="Purple Arrow" />
            </button>
          </Write>
        </Square>
        <Square>
          <Write>
            <img src={folder} alt="Folder" className="icon" />
            <h2>Beautiful seamless UX</h2>
            <button>
              Read our API Docs <img src={purpleArrow} alt="Purple Arrow" />
            </button>
          </Write>
        </Square>
        <Square>
          <Write>
            <img src={fan} alt="Fan" className="icon" />
            <h2>Always-on support</h2>
            <button>
              Read our API Docs <img src={purpleArrow} alt="Purple Arrow" />
            </button>
          </Write>
        </Square>
      </Grids>
    </Started>
  );
};

// Styled Components

const Started = styled.div`
  padding: 5rem 0;
  height: 880px; //  100vh
  background: url(${(props) => props.imageUrl});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-color: #514285;
`;

const WriteUp = styled.div`
  padding: 1rem 10rem 1.5rem;
  h1 {
    font-family: 600;
    width: 446px;
    color: #fff;
    line-height: 40.87px;
    padding: 0 0 1.2rem;
  }
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  padding: 0rem 10rem;
  justify-content: center;
  gap: 1rem;
`;

const Write = styled.div`
  padding: 2.5rem 3rem;

  h1 {
    padding-top: 0.5rem;
    width: 40%;
    line-height: 47.89px;
    color: #000;
  }

  h2 {
    padding-top: 0.5rem;
    font-family: Inter;
  }

  button {
    margin: 2rem 0px 0px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgb(76, 60, 129);
    border: none;
    font-family: Inter;
    font-weight: 600;
    cursor: pointer;
    background-color: transparent;
  }
`;

const Rectangle = styled.div`
  cursor: pointer;
  position: relative;
  grid-column: 1/4;
  width: 100%;
  height: 344px;
  background-color: #fff;
  border-radius: 8px;

  #phone {
    position: absolute;
    right: 2.5rem;
    bottom: 0;
  }
`;

const Square = styled.div`
  cursor: pointer;
  width: 100%;
  height: 243px;
  background-color: #fff;
  border-radius: 8px;
`;

export default FourthSection;
