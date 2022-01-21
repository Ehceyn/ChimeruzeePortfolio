import React from "react";
import {
  StyledHeader,
  Container,
  Nav,
  Navlinks,
  SocialIconsDiv,
} from "../Header/HeaderStyles";
import Image from "next/image";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Image
            src="/images/logo.png"
            height="40px"
            width="100px"
            alt="Logo"
          />
          About
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
