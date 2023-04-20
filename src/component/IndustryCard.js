import styled from "styled-components";

const IndustryCard = (props) => {
  return (
    <Card>
      <Image>
        <img src={props.imageUrl} alt="card pic" />
      </Image>
      <WriteUp>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>Explore</button>
      </WriteUp>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto; // So it doesn't shrink and grow
  margin: 1rem 1rem;
  width: 300px;
  border: 1px solid #b9ade0;
  border-radius: 10px;
  cursor: pointer;
`;

const Image = styled.div`
  img {
    width: 100%;
    height: 18rem;
    object-fit: cover;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const WriteUp = styled.div`
  height: 10rem;
  line-height: 29px;
  padding: 1.5rem 0 1rem 1rem;

  h2 {
    color: #4c3c81;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
  }

  p {
    color: #4c3c81;
    font-size: 1.1rem;
    font-family: Montserrat;
  }

  button {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #4c3c81;
    width: 6rem;
    padding: 0.5rem 0;
    background: transparent;
    border: 1px solid #4c3c81;
    border-radius: 2.5px;
    cursor: pointer;
    transition: all ease 0.5s;

    &:hover {
      color: white;
      background: #4c3c81;
    }
  }
`;

export default IndustryCard;
