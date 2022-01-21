import React from "react";
import Logo from "./Logo";
import {
  StyledHeader,
  Container,
  Nav,
  Navlinks,
  SocialIconsDiv,
} from "../Header/HeaderStyles";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo />
          About
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
