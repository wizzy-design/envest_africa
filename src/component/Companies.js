// Companies component is the line of companies we are trusted by
// Images
import flutterwave from "../img/flutterwave-logo.svg";
import evolve from "../img/evolve-logo.svg";
import autocheck from "../img/autocheck-logo.svg";
import carbon from "../img/carbon-logo.svg";

import styled from "styled-components";

const Companies = () => {
  return (
    <Partners>
      <h3>Trusted By</h3>

      <Companys>
        <li>
          <img src={carbon} alt="Carbon" />
        </li>
        <li>
          <img src={autocheck} alt="Autocheck" />
        </li>
        <li>
          <img src={flutterwave} alt="Flutterwave" />
        </li>
        <li>
          <img src={evolve} alt="Evolve" />
        </li>
      </Companys>
    </Partners>
  );
};

const Partners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 2rem 5rem 6rem;

  h3 {
    padding: 0 0 2rem 0;
    font-family: Inter;
    font-size: 1rem;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const Companys = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;
  }
`;

export default Companies;
