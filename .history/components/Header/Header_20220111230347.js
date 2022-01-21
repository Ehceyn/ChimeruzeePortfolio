import React from "react";
import {
  StyledHeader,
  Container,
  Nav,
  Logo,
  Navlinks,
  SocialIconsDiv,
} from "../Header/HeaderStyles";
import Image from "next/image";

function Header() {
  return (
    <StyledHeader>
      <Image
        src="/public/images/logo.png"
        height="40px"
        width="40px"
        alt="Logo"
      />
      {/* <Container>
    <Nav>

    </Nav>
        </Container> */}
    </StyledHeader>
  );
}

export default Header;
