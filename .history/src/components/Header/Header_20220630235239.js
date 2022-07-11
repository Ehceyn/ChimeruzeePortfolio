import React from "react";
import {
  StyledHeader,
  Container,
  Nav,
  NavLink,
  SocialIconsDiv,
} from "../Header/HeaderStyles";
import Image from "next/image";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Image
          src="/images/immersewhite.png"
          height="40px"
          width="40px"
          alt="Logo"
          objectFit="contain"
        />
        <Nav>
          <NavLink>Projects</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Blog</NavLink>
        </Nav>
        <SocialIconsDiv>
          <div>G</div>
          <div>F</div>
          <div>T</div>
        </SocialIconsDiv>
      </Container>
    </StyledHeader>
  );
}

export default Header;
