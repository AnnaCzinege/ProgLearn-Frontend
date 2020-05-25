import React from "react";
import SiteLogo from "../../site_logo.png";
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
} from "../elements/HeaderElements";

function ResponsiveHeader() {
  return (
    <StyledHeader>
      <Navbar>
        <Spacer />
        {/* <ToggleBtnContainer>
          <ToggleBtn />
        </ToggleBtnContainer> */}
        <LogoContainer>
          <StyledLink to="/">
            <Logo src={SiteLogo} alt="" />
          </StyledLink>
        </LogoContainer>
        <div>
          <form></form>
        </div>
        <MenuContainer>
          <Ul>
            <Li>
              <StyledLink>bDMIPRO</StyledLink>
            </Li>
            <Li>
              <StyledLink>Watchlist</StyledLink>
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
