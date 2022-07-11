import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="flex justify-between items-center w-full h-[100vh] pt-[90px] mb-20 px-[70px] hero">
      <video src="/video/vid.mp4" autoPlay loop muted></video>
      <div className="w-fit leading-tight mr-[100px] ">
        <h1>Howdy! </h1>
        <h1>I&apos;m Chimeruzee.</h1>
        <h3 className="flex items-center w-fit max-w-[800px] h-fit py-5 ">
          I&apos;m a creative Frontend developer. An innovative and good team
          player who loves going extra mile to deliver a project. I make things
          work.
        </h3>
      </div>
      <div className="max-w-[400px] min-w-[400px] object-contain ">
        <div className="border-[10px] border-gradient border-white rounded-full object-cover flex justify-center items-center p-[10px] ">
          <Image
            src="/images/meruz-bw.jpg"
            width="400"
            height="400"
            alt="Chimeruzee"
            objectFit="cover"
            className="rounded-full background"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
