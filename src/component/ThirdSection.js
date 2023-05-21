import styled from "styled-components";
// Images
import wisdom from "../img/profile1.svg";
import daniel from "../img/profile2.svg";
import arrows from "../img/arrows.svg";
import ellipse from "../img/ellipse.svg";

const ThirdSection = () => {
  return (
    <div>
      <WriteUp>
        <h1>Why market leaders are choosing Envest</h1>
        <p>Here's what some of them are saying.</p>
      </WriteUp>

      <CommentGrid>
        <Comment>
          <p className="apost">“</p>
          <p>
            It's important to go with a data provider that inspires confidence
            in users to give consent to share their data; this is one of our
            favourite things about Mono.
          </p>
          <div className="tag">
            <div className="icon">
              <img src={wisdom} alt="Profile img" />
            </div>
            <div className="info">
              <span id="name">Wisdom Ochei</span>
              <span id="title">Founder, Envest</span>
            </div>
          </div>
        </Comment>
        <Comment>
          <p className="apost">“</p>
          <p>
            The onboarding and integration process with Mono was smooth. Our
            Engineering and Product teams use the dashboard to oversee our
            statement collection process.
          </p>
          <div className="tag">
            <div className="icon">
              <img src={daniel} alt="Profile img" />
            </div>
            <div className="info">
              <span id="name">David Daniel</span>
              <span id="title">UI/UX Designer</span>
            </div>
          </div>
        </Comment>
      </CommentGrid>
      <Controls>
        <img src={ellipse} alt="Ellipse" />
        <img src={arrows} alt="Arrows" />
      </Controls>
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

const CommentGrid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0rem 10rem;
  justify-items: center;
`;

const Comment = styled.div`
  width: 400px;
  height: 525px;
  background: #f5f5f5;
  padding: 2rem;
  margin-bottom: 4rem;
  border-radius: 8px;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 138%;
    margin-bottom: 4rem;
  }

  .apost {
    font-size: 64px;
    height: 4rem;
    margin: 0;
    padding: 0;
  }

  .tag {
    display: flex;
    gap: 1rem;
    font-family: Inter;

    span {
      display: block;
    }

    #name {
      font-weight: 600;
    }

    #title {
      font-weight: 500;
      font-size: 13px;
      color: #606060;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  margin-bottom: 3rem;
  cursor: pointer;
`;

export default ThirdSection;
