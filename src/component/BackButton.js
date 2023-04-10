// This is the back button that takes you to homepage
import React from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <BackButtonn on onClick={handleBack}>
      <FaArrowLeft size={16} /> <p> Back</p>
    </BackButtonn>
  );
};

const BackButtonn = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 1.2rem;
  color: #e9e3e3;
  background-color: transparent;
  border: none;
  cursor: pointer;

  p{
    margin-left: .5rem;
  }

  &:hover {
    color: #908bae;
  }
`;

export default BackButton;
