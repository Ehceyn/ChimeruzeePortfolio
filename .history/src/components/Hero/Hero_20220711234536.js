import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroImage } from "../../../animations/animation";

function Hero() {
  const [degree, setDegree] = useState(210);
  setTimeout(() => {
    setInterval(() => {
      if (degree <= 360) {
        setDegree(degree + 5);
      } else {
        setDegree(0);
      }
    }, 1000);
  }, 5000);

  /* Linear Gradient Border for hero image */
  const borderGradient = {
    background: `linear-gradient(${degree}deg, #0070fdff, #d50098ff, #fd2828) border-box, linear-gradient(${degree}deg, #0070fdff, #d50098ff, #fd2828) padding-box`,
  };

  return (
    <section className="flex flex-col-reverse md2:flex-row md2:justify-between justify-center items-center w-full min-h-[100vh]  pt-[80px] pb-20 px-[40px] lg:px-[70px] ">
      {/* <video
        src="/video/vid.mp4"
        className="absolute t-0 inset-x-0 "
        autoPlay
        loop
        muted
      ></video> */}
      <div className="w-fit text-center md2:text-left leading-loose md2:mr-[100px] mt-[40px] md2:mt-0">
        <h1 className="text-6xl md2:text-8xl lg:text-9xl">Howdy! </h1>
        <h1 className="text-6xl md2:text-8xl lg:text-9xl">
          I&apos;m Chimeruzee.
        </h1>
        <h3 className="flex items-center w-fit max-w-[800px] h-fit py-5 text-4xl">
          I&apos;m a creative Frontend developer. An innovative and good team
          player who loves going extra mile to deliver a project. I make things
          work.
        </h3>
        <button
          type="button"
          className="text-white mt-5 focus:outline-none uppercase rounded-lg w-[180px] py-6 text-center background"
        >
          hire me
        </button>
      </div>

      <div className="max-w-[250px] min-w-[250px] md2:max-w-[350px] md2:min-w-[350px] lg:max-w-[400px] lg:min-w-[400px] object-contain ">
        <motion.div
          initial="initial"
          animate="animate"
          transition="transition"
          className="border-[10px] border-white rounded-full object-cover flex justify-center items-center p-[10px] "
          style={borderGradient}
        >
          <Image
            src="/images/meruz-bw.jpg"
            width="400"
            height="400"
            alt="Chimeruzee"
            objectFit="cover"
            className="rounded-full background"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;