import React from "react";
import SiteLogo from "../../site_logo.png";
import SearchImg from "../../search-icon.png";
import {
  StyledHeader,
  LogoContainer,
  Spacer,
  Navbar,
  Logo,
  MenuContainer,
  Ul,
  Li,
  StyledLink,
  StyledButton,
  SearchBar,
  SearchBox,
  SearchIcon,
} from "../elements/HeaderElements";

function ResponsiveHeader() {
  return (
    <StyledHeader>
      <Navbar>
        <Spacer />
        {/* <ToggleBtnContainer>
          <ToggleBtn />
        </ToggleBtnContainer> */}
        <StyledLink to="/">
          <LogoContainer>
            <Logo src={SiteLogo} alt="" />
          </LogoContainer>
        </StyledLink>
        <div>
          <SearchBox>
            <SearchBar
              type="text"
              name="search"
              placeholder="Search..."
            ></SearchBar>
          </SearchBox>
        </div>
        <Spacer />
        <Spacer />
        <MenuContainer>
          <Ul>
            <Li>
              <StyledButton>Log in</StyledButton>
            </Li>
            <Li>
              <StyledButton>Sign up</StyledButton>
            </Li>
            <Li></Li>
          </Ul>
        </MenuContainer>
        <Spacer />
      </Navbar>
      <div></div>
      <div></div>
    </StyledHeader>
  );
}

export default ResponsiveHeader;
