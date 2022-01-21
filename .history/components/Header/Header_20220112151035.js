import React from "react";
import {
  StyledHeader,
  Container,
  Nav,
  Navlinks,
  SocialIconsDiv,
} from "../Header/HeaderStyles";
import Section1 from "../globalStyles/ReUsedStyles";
import Image from "next/image";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Image
            src="/images/immersewhite.png"
            height="40px"
            width="40px"
            alt="Logo"
          />
          <Section1>About</Section1>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
