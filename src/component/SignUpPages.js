import styled from "styled-components";

export function Page1({ onNext }) {
  return (
    <SignUp>
      <Title>
        <h2>Tell us more about yourself</h2>
      </Title>
      <input placeholder="Full Name" type="text" />
      <input placeholder="Occupation" type="text" />
      <input placeholder="Country of residence" type="text" />
      <input placeholder="State/Province" type="text" />
      <input placeholder="City" type="text" />
      <br />
      <button onClick={onNext}>Next</button>
    </SignUp>
  );
}

export function Page2() {
  return (
    <SignUp>
      <Title>
        <h2>Tell us more about business</h2>
      </Title>
      <input placeholder="Business Name" type="text" />
      <input placeholder="Industry" type="text" />
      <input placeholder="Number Of Employees" type="text" />
      <input placeholder="Certificate Of Incorporation" type="text" />
      <input placeholder="Proof  of address" type="text" />
      <br />
      <button>Finish</button>
    </SignUp>
  );
}

const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130%;
  line-height: 3rem;

  button {
    width: 16rem;
    font-size: 1rem;
    margin: 1.2rem 0 0 0;
    padding: 0.5rem;
    border-radius: 0.3rem;
    background: transparent;
    border: 2px solid rgb(76, 60, 129);
    cursor: pointer;
    font-weight: bold;
    color: rgb(76, 60, 129);
    transition: all 0.5s ease 0s;

    &:hover {
      color: white;
      background-color: rgb(76, 60, 129);
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6d6a7a;
  margin-bottom: 1.2rem;
  h2 {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    color: #6d6a7a;
  }
`;
