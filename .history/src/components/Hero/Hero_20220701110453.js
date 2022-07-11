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
    <section className="flex justify-between items-center w-full h-[80vh] py-0 px-[100px]">
      <div className="w-fit mr-[100px]">
        <h1>Howdy! </h1>
        <h1>I&apos;m Chimeruzee.</h1>
        <p className="flex items-center w-fit max-w-[800px] h-fit py-5 text-base">
          lorem ipsum dolor sit amet, consectetur adipis lorem, sed diam nonumy
          eirmod tempor inviduer par i, consectetur adipis lorem, sed diam
          nonumy eirmod tempor inviduer par i consectetur adipis lorem, sed diam
          nonumy eirmod tempor inviduer par i consectetur adipis lorem, sed diam
          nonumy eirmod tempor inviduer par i{" "}
        </p>
      </div>
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