import Image from "next/image";
import React from "react";
import { HeadingDiv, H1, H3 } from "../Globals/ReUsedStyles";
import { Container, Div1, Div2, Hero_P } from "./HeroStyles";

function Hero() {
  return (
    <Container>
      <Div1>
        <H1>Howdy! I am Chimeruzee.</H1>
        <H1>I make beautiful things</H1>
        <Hero_P>
          lorem ipsum dolor sit amet, consectetur adipis lorem, sed diam nonumy
          eirmod tempor inviduer par i, consectetur adipis lorem, sed diam
          nonumy eirmod tempor inviduer par i consectetur adipis lorem, sed diam
          nonumy eirmod tempor inviduer par i consectetur adipis lorem, sed diam
          nonumy eirmod tempor inviduer par i{" "}
        </Hero_P>
      </Div1>
      <Div2>
        <Image
          src="/images/immerseblack.png"
          width="500"
          height="500"
          alt="Image"
        />
      </Div2>
    </Container>
  );
}

export default Hero;
