import styled from "styled-components";
import namelogo from "../img/namelogo.svg";
import down_arrow from "../img/nav_button.svg";
// For links
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/envest_africa">
        <Logo src={namelogo} alt="Logo" />
      </Link>

      <UnList>
        <li>
          <Link to="/explore">
            Explore <img src={down_arrow} alt="Down Arrow" />
          </Link>
          {/* <a href="/">Explore</a> */}
        </li>
        <li>
          <Link to="/signup">
            Pitch <img src={down_arrow} alt="Down Arrow" />
          </Link>
        </li>
        <li>
          <Link to="/signup">
            Find Startups <img src={down_arrow} alt="Down Arrow" />
          </Link>
        </li>
        <li>
          <Link to="/signup">
            Dashboard <img src={down_arrow} alt="Down Arrow" />
          </Link>
        </li>
      </UnList>

      <Buttons>
        <button className="white">
          <Link to="/login">Sign In</Link>
        </button>
        <button className="purple">
          <Link to="/signup">Create Free Account</Link>
        </button>
      </Buttons>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  width: 90%;
  min-height: 10vh;
  margin: 1rem 5rem 0.5rem 5rem;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 8.5rem;
  object-fit: contain;
`;

const UnList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;

  li {
    margin: 0 0.5rem;
    padding: 0 1rem;
    font-family: Inter;
    font-weight: 500;
    font-size: .95rem;
    line-height: 29px;
    cursor: pointer;
    transition: all 0.5s ease;
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #000;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    font-family: Inter;
    font-weight: 600;
    padding: 0.5rem 0.5rem;
    border-radius: 0.2rem;
  }

  .white {
    background-color: transparent;
    border: 2px solid #4c3c81;
    width: 5rem;

    a {
      color: #4c3c81;
    }
  }

  .purple {
    background-color: #4c3c81;
    border: 1px solid #4c3c81;
    width: 10rem;

    a {
      color: #fff;
    }
  }
`;

export default Nav;
