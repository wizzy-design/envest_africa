// Form that prospective investor fills
// Styled component
import styled from "styled-components";
import { useState } from "react";
// Logos
import Envest from "../img/Envest.png";
import google2 from "../img/google2.png";
import apple from "../img/apple.png";
// Link
import { Link } from "react-router-dom";
// Component
import SignUpForm from "./SignUpForm";

const InvestorForm = ({ onBackClick }) => {
  const [seekForm, setSeekForm] = useState(true);

  const handleSignUpClick = () => {
    setSeekForm(false);
  };
  return (
    <Form>
      {seekForm ? (
        <form>
          {/* Envest Logo */}
          <Logo>
            <img src={Envest} alt="Logo" />
          </Logo>
          {/* Subscript */}
          <h3>
            Discover Market trending startups across the African continent 💼🌍
          </h3>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {/* Submit buttons */}
          <div className="buttons">
            <input
              type="submit"
              value="Sign Up"
              id="submit"
              className="button"
              onClick={handleSignUpClick}
            />
            <input
              type="button"
              onClick={onBackClick}
              value="Cancel"
              className="button"
            />
          </div>

          {/* Alternative way to Sign Up */}
          <div className="continue">
            <p>
              By Signing up, you accept the terms and conditions & privacy
              policy of Envest or continue with ⬇️;
            </p>
            <div className="continue_buttons">
              <div className="google">
                <img src={google2} alt="Google icon" />
                <span>Continue with Google</span>
              </div>
              <div className="apple">
                <img src={apple} alt="Apple icon" />
                <span>Continue with Apple</span>
              </div>
            </div>
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </form>
      ) : (
        // Form i'd be taken to after i click on sign up button
        <SignUpForm />
      )}
    </Form>
  );
};

const Form = styled.div`
  max-width: 30rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-family: Montserrat;
      font-size: 1rem;
      font-weight: 500;
      line-height: 29px;
      text-align: center;
      width: 80%;
      color: #6d6a7a;
      margin-bottom: 1.5rem;
    }

    input {
      width: 80%;
      outline: none;
      padding: 0.5rem 0;
      margin-bottom: 1.3rem;
      border: none;
      border-bottom: 1px dotted #6d6a7a;
      font-size: 1rem;

      ::placeholder {
        font-size: 1rem;
        letter-spacing: 1.5px;
        color: #6d6a7a;
      }
    }

    .buttons {
      display: flex;
      flex-direction: column;
      margin: 0.5rem;

      input.button {
        width: 12rem;
        margin: 0.6rem 0rem;
        /* padding: 0.5rem 1.5rem; */
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

    .continue {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0.4rem;

      p {
        width: 80%;
        text-align: center;
        font-size: 0.8rem;
        font-family: "Poppins", sans-serif;
        margin-bottom: 1.5rem;
        color: #6d6a7a;
      }

      .continue_buttons {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 1.5rem;

        .google,
        .apple {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-family: Montserrat;
          font-weight: 700;
          font-size: 1.1rem;
          width: 16rem;
          background-color: #e3def3;
          padding: 0.5rem;
          cursor: pointer;
          border-radius: 0.3rem;
          transition: all ease 0.5s;

          &:hover {
            color: #cecccc;
            background-color: #726d8e;
          }

          img {
            width: 1rem;
          }
        }
      }
    }
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  img {
    width: 45%;
  }
`;

export default InvestorForm;
