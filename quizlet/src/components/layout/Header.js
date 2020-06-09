import React, { useContext } from "react";
import {
  StyledHeader,
  Spacer,
  Navbar,
  MenuContainer,
  Ul,
  Li,
  ButtonContainer,
  StyledLink,
  StyledButton,
  SearchBar,
  SearchBox,
  Container,
} from "../elements/HeaderElements";
import ThemeToggler from "../ThemeToggler";
import { ThemeContext } from "../contexts/ThemeContext";
import AppTheme from "../Colors";

function ResponsiveHeader() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <StyledHeader theme={theme}>
      <Navbar>
        {/* <ToggleBtnContainer>
          <ToggleBtn />
        </ToggleBtnContainer> */}
        <Container>
          <StyledLink to="/" theme={theme}>
            ProgLearn
          </StyledLink>
        </Container>
        <Spacer />
        <ThemeToggler />
        <Container>
          <SearchBox>
            <SearchBar
              type="text"
              name="search"
              placeholder="Search..."
            ></SearchBar>
          </SearchBox>
        </Container>
        <Spacer />
        <MenuContainer>
          <Ul>
            <Li>
              <ButtonContainer>
                <StyledButton theme={theme}>Log in</StyledButton>
              </ButtonContainer>
            </Li>
            <Li>
              <ButtonContainer>
                <StyledButton theme={theme}>Sign up</StyledButton>
              </ButtonContainer>
            </Li>
            <Li></Li>
          </Ul>
        </MenuContainer>
      </Navbar>
    </StyledHeader>
  );
}

export default ResponsiveHeader;
