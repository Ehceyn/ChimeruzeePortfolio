import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="flex justify-between items-center w-full h-[80vh] py-0 px-[70px]">
      <div className="w-fit leading-tight mr-[100px]">
        <h1>Howdy! </h1>
        <h1>I&apos;m Chimeruzee.</h1>
        <p className="flex items-center w-fit max-w-[800px] h-fit py-5 ">
          I&apos;m developer with over two years of experience in frontend
          development. An innovative and good team player who loves going extra
          mile to deliver a project
        </p>
      </div>
      <div className="max-w-[500px] object-contain">
        <div className="border-[5px] border-white rounded-full object-cover flex justify-center items-center p-[10px] ">
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
