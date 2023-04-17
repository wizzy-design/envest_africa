// SignUpForm is the form i'm taken to after signing up
import styled from "styled-components";
// Images
import Envest from "../img/Envest.png";
import { useState } from "react";
// Pages
import { Page1, Page2 } from "./SignUpPages";

const SignUpForm = () => {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Logo>
        <img src={Envest} alt="Logo" />
      </Logo>
      <Form>
        <form>
          {page === 1 && <Page1 onNext={handleNext} />}
          {page === 2 && <Page2 />}
        </form>
      </Form>
    </>
  );
};

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: .7rem 0rem;
  img {
    width: 40%;
  }
`;

const Form = styled.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

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

    p {
      font-size: 0.9rem;
      font-family: "Poppins", sans-serif;
      margin-top: 0.8rem;
      text-align: center;
    }
  }
`;

export default SignUpForm;
