import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  background-color: grey;
  /* #306be2 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  z-index: 5;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: orange;
  }
`;

export const ToggleBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
    background: #333;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

export const LogoContainer = styled.div`
  padding: 5px;
  align-content: center;
`;

export const Logo = styled.img`
  align-content: center;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Li = styled.li`
  padding: 0 1rem;
`;

export const MenuContainer = styled.div`
  @media (max-width: 617px) {
    display: none;
  }
`;
