import styled from "styled-components";
import vector from "../img/Vector.png";

const FeatureCard = (props) => {
  return (
    <Card>
      <Image>
        <img src={props.imageUrl} alt="card pic" id="cardimage" />
      </Image>
      <WriteUp>
        <h2>
          {props.title} <img src={vector} alt="green tick" id="tick" />
        </h2>
        <p>{props.description}</p>
      </WriteUp>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto; // So it doesn't shrink and grow
  margin: 0rem 1rem;
  width: 250px;
  cursor: pointer;
`;

const Image = styled.div`
  #cardimage {
    width: 100%;
    height: 16rem;
    object-fit: contain;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const WriteUp = styled.div`
  height: 6rem;
  line-height: 30px;
  padding: 0rem 0 1rem 0;

  h2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4c3c81;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;

    #tick {
      width: 0.7rem;
    }
  }

  p {
    color: #4c3c81;
    font-size: 1.1rem;
    font-family: Montserrat;
  }
`;

export default FeatureCard;
