import React from "react";
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

function ResponsiveHeader() {
  return (
    <StyledHeader>
      <Navbar>
        {/* <ToggleBtnContainer>
          <ToggleBtn />
        </ToggleBtnContainer> */}
        <Container>
          <StyledLink to="/">ProgLearn</StyledLink>
        </Container>
        <Spacer />
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
                <StyledButton>Log in</StyledButton>
              </ButtonContainer>
            </Li>
            <Li>
              <ButtonContainer>
                <StyledButton>Sign up</StyledButton>
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
