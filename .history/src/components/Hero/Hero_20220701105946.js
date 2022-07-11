import Image from "next/image";
import React from "react";
import { HeadingDiv, H1, H3 } from "../Globals/ReUsedStyles";
import {
  Container,
  Div1,
  Div2,
  HeroImage,
  HeroImageDiv,
  Hero_P,
} from "./HeroStyles";

function Hero() {
  return (
    <section className="flex justify-center items-center w-full h-[80vh] py-0 px-[100px]">
      <Div1>
        <H1>Howdy! </H1>
        <H1>I&apos;m Chimeruzee.</H1>
        <Hero_P>
          lorem ipsum dolor sit amet, consectetur adipis lorem, sed diam nonumy
          eirmod tempor inviduer par i, consectetur adipis lorem, sed diam
          nonumy eirmod tempor inviduer par i consectetur adipis lorem, sed diam
          nonumy eirmod tempor inviduer par i consectetur adipis lorem, sed diam
          nonumy eirmod tempor inviduer par i{" "}
        </Hero_P>
      </Div1>
      <Div2>
        <HeroImageDiv>
          <HeroImage
            src="/images/meruz-bw.jpg"
            width="400"
            height="400"
            alt="Chimeruzee"
            objectFit="cover"
          />
        </HeroImageDiv>
      </Div2>
    </section>
  );
}

export default Hero;