import styled from "styled-components";
import namelogo from "../img/namelogo.svg";
import down_arrow from "../img/nav_button.png";
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
          <Link to="/login">
            Sign In <img src={down_arrow} alt="Down Arrow" />
          </Link>
          {/* <a href="/login">Sign In</a> */}
        </li>
        <li>
          <Link to="/signup">
            <span>Join</span>
          </Link>
        </li>
      </UnList>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  width: 90%;
  /* padding: 1rem 0; */
  min-height: 10vh;
  margin: 1.8rem 5rem 0rem 5rem;
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
  padding-bottom: 1.2rem;

  li {
    margin: 0 1rem;
    padding: 0 1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #4c3c81;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      font-weight: 700;
    }
  }

  span {
    border: 1px solid #a191d6;
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    font-weight: 700;
    transition: all 0.5s ease;

    &:hover {
      background-color: #4c3c81;
      color: white;
    }
  }
`;

export default Nav;
