// UserType is the form that asks the user whether he/she wants to sign in as a investor/invested
import { useState } from "react";
import styled from "styled-components";
// Images
import Envest from "../img/Envest.png";

const UserType = ({ onUserTypeSelect }) => {
  const [showButtons, setShowButtons] = useState(true);

  const handleInvestorClick = () => {
    setShowButtons(false);
    onUserTypeSelect("investor");
  };

  const handleSeekerClick = () => {
    setShowButtons(false);
    onUserTypeSelect("seeker");
  };

  return (
    <>
      {/* <button onClick={handleButtonClick}>Toggle Form</button> */}
      {showButtons && (
        <>
          <Logo>
            <img src={Envest} alt="Logo" />
          </Logo>
          <Title>
            <h1>What do you mainly want to do?</h1>
            {/* <h2>Log in to continue</h2> */}
          </Title>
          <Form>
            <form>
              <input
                onClick={handleInvestorClick}
                type="button"
                value="I'm here to invest"
                className="submit"
              />

              <input
                onClick={handleSeekerClick}
                type="button"
                value="I'm here to be invested in"
                className="submit"
              />
            </form>
            {/* A back/exit button */}
          </Form>
        </>
      )}
    </>
  );
};

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  img {
    width: 35%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6d6a7a;
  margin-bottom: 1.2rem;
  h1 {
    text-align: center;
    width: 80%;
    font-size: 1.7rem;
    color: #6d6a7a;
    margin-top: 2.5rem;
  }
  /* h2 {
    font-size: 1.2rem;
    font-family: "Montserrat";
  } */
`;

const Form = styled.div`
  margin: 1rem 0rem;
  width: 90%;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    input {
      outline: none;
      padding: 0.5rem 0;
      margin-bottom: 1rem;
      border: none;
      border-bottom: 1px dotted #6d6a7a;
      font-size: 1rem;

      ::placeholder {
        font-size: 1rem;
        letter-spacing: 1.5px;
        color: #6d6a7a;
      }
    }

    input.submit {
      width: 100%;
      margin-top: 0.5rem;
      border-radius: 0.3rem;
      background: transparent;
      border: 2px solid #4c3c81;
      cursor: pointer;
      font-weight: bold;
      color: #4c3c81;
      transition: 0.5s ease all;

      &:hover {
        color: white;
        background-color: #4c3c81;
      }
    }
  }
`;

export default UserType;
