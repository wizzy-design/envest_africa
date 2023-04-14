// JoinPage is the signup page user is led to after clicking the 'Join' button in the navigation
import { useState } from "react";
import BackButton from "../component/BackButton";
// Images
import Union from "../img/Union.png";
import Union2 from "../img/Union2.png";
// Styled component
import styled from "styled-components";
// Forms
import UserType from "../component/UserType";
import SeekInvest from "../component/SeekInvest";
import InvestorForm from "../component/InvestorForm";

const JoinPage = () => {
  const [userType, setUserType] = useState(null);

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };

  const handleBackClick = () => {
    setUserType(null);
  };

  return (
    <Page>
      <img src={Union} alt="3 dots" className="union union1" />
      <img src={Union2} alt="3 dotss" className="union union2" />
      <BackButtonDiv>
        <BackButton />
      </BackButtonDiv>
      <LoginForm>
        {userType ? (
          <>
            {/* Render the appropriate form based on the selected user type */}
            {userType === "investor" ? (
              <InvestorForm onBackClick={handleBackClick} />
            ) : (
              <SeekInvest onBackClick={handleBackClick} />
            )}
          </>
        ) : (
          <UserType onUserTypeSelect={handleUserTypeSelect} />
        )}
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
  height: 75%;
  min-height: 447px;
  max-height: 500px;
  max-width: 600px;
  border-radius: 0.8rem;
  background-color: white;
  overflow-x: hidden;
`;

const BackButtonDiv = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

export default JoinPage;
