import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  background-color: #0b0c10;
  /* #306be2 */
  /* #4abdac */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 10;
  font-family: "Raleway-Regular";
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #66fcf1;
  font-size: 22px;
  font-family: "Raleway-Medium";
`;

export const StyledButton = styled.button`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: whitesmoke;
  border: solid;
  border-color: #66fcf1;
  border-radius: 0.25rem;
  outline: none;
  &:hover {
    color: #1f2833;
    background: #66fcf1;
  }
  display: block;
  justify-content: space-around;
  background: transparent;
  cursor: pointer;
  padding: 15px;
  box-sizing: border-box;
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

export const Spacer = styled.div`
  flex: 0.5;
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
  position: relative;
  display: inline-block;
`;

export const SearchBar = styled.input`
  width: 200%;
  height: 30px;
  padding-left: 5px;
  background: white;
  border-radius: 25px;
  border: 2px solid #45a29e;
  @media (max-width: 925px) {
    max-width: 185px;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchBox = styled.form`
  position: relative;
  display: inline-block;
  box-align: center;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  @media (max-width: 617px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 12px;
`;
