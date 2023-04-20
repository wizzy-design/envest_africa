import styled from "styled-components";
import farm from "../img/farm.png";

const ExploreSearch = () => {
  return (
    <Section>
      <Left>
        <h1>Reachout to top investors and pitch your BIG IDEAS</h1>

        <div>
          <Search>
            <input type="text" />
            <button type="submit">Search</button>
          </Search>

          <Suggest>
            <span>Popular:</span>
            <ul>
              <li>VC</li>
              <li>YC Acelerator</li>
              <li>Silicon Valley</li>
            </ul>
          </Suggest>
        </div>
      </Left>

      <Right>
        <Img>
          <img className="man" src={farm} alt="Man holding paper" />
        </Img>
      </Right>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
`;

const Left = styled.div`
  width: 50%;

  h1 {
    width: 90%;
    line-height: 3rem;
    padding-bottom: 3rem;
  }
`;

const Search = styled.form`
  display: flex;
  padding-bottom: 0.5rem;
  input {
    width: 100%;
    height: 2.5rem;
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }

  button {
    font-size: 20px;
    width: 8rem;
    height: 2.5rem;
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    cursor: pointer;
    color: white;
    background-color: #4c3c81;
    border: #4c3c81;
  }
`;

const Suggest = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  span {
    font-size: 20px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: #4c3c81;
  }

  ul {
    display: flex;
    align-items: center;
  }

  li {
    border: 1px solid #a191d6;
    border-radius: 0.3rem;
    padding: 0.2rem 1rem;
    &:hover {
      background-color: #4c3c81;
      color: white;
      transition: all 0.5s ease;
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
  /* position: relative; */
  overflow: hidden;
  height: 70vh;
  border-radius: 3rem;

  img.man {
    height: 70vh;
    width: 100%;
    object-fit: contain;
  }
`;

export default ExploreSearch;
