// Form that prospective investor fills
// Styled component
import styled from "styled-components";

const InvestorForm = ({ onBackClick }) => {
  return (
    <Form>
      <form>
        <h1>Investor</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Log In" className="button" />
        <input
          type="button"
          onClick={onBackClick}
          value="Cancel"
          className="button"
        />
      </form>
    </Form>
  );
};

const Form = styled.div`
  margin: 1rem 0rem;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    h1 {
      text-align: center;
    }

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

    input.button {
      margin-top: 2rem;
      margin-bottom: 1rem;
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

export default InvestorForm;
