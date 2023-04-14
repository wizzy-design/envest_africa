import BackButton from "../component/BackButton";
// Images
import Envest from "../img/Envest.png";
import Union from "../img/Union.png";
import Union2 from "../img/Union2.png";
// Styled component
import styled from "styled-components";

const LoginPage = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <Page>
      <img src={Union} alt="3 dots" className="union union1" />
      <img src={Union2} alt="3 dotss" className="union union2" />

      {/* A back/exit button */}
      <BackButtonDiv>
        <BackButton />
      </BackButtonDiv>

      <LoginForm>
        <Logo>
          <img src={Envest} alt="Logo" />
        </Logo>
        <Title>
          <h1>Welcome Back</h1>
          <h2>Log in to continue</h2>
        </Title>
        <Form>
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log In" className="button button1" />
            <input
              type="button"
              onClick={goBack}
              value="Cancel"
              className="button"
            />
          </form>
        </Form>
      </LoginForm>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(76, 60, 129);
  overflow: hidden;

  img.union {
    position: absolute;
    width: 1.2rem;
  }
  img.union1 {
    left: 2rem;
    top: -2rem;
  }
  img.union2 {
    right: 2rem;
    bottom: -2rem;
  }
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-width: 35%;
  /* height: 75%; */
  min-height: 447px;
  max-height: 500px;
  border-radius: 0.8rem;
  background-color: white;
`;

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
    font-size: 2.2rem;
    color: #6d6a7a;
    margin-bottom: 0.3rem;
  }
  h2 {
    font-size: 1.2rem;
    font-family: "Montserrat";
  }
`;

const Form = styled.div`
  margin: 1rem 0rem;
  width: 90%;

  form {
    display: flex;
    flex-direction: column;

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

    input.button{
      margin-top: .5rem;
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
    input.button1{
      margin-top: 2rem;
    }
  }
`;

const BackButtonDiv = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

export default LoginPage;
