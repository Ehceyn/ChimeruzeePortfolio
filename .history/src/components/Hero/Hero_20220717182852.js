import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fromBottom, heroImage } from "../../../animations/animation";

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
    background: `linear-gradient(${degree}deg, #f27121, #e94057, #8a2387
) border-box, linear-gradient(${degree}deg, #f27121, #e94057, #8a2387
) padding-box`,
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      transition="transition"
      className="flex flex-col-reverse md2:flex-row md2:justify-between justify-center items-center w-full min-h-[100vh]  pt-[80px] pb-20 px-5 md:px-[40px] lg:px-[70px] "
    >
      {/* <video
        src="/video/vid.mp4"
        className="absolute t-0 inset-x-0 "
        autoPlay
        loop
        muted
      ></video> */}
      <div className="w-fit text-center md2:text-left leading-loose md2:mr-[100px] mt-[40px] md2:mt-0">
        <motion.h1
          variants={fromBottom}
          className="text-7xl md2:text-8xl lg:text-9xl"
        >
          Howdy!{" "}
        </motion.h1>
        <motion.h1
          variants={fromBottom}
          className="text-7xl md2:text-8xl lg:text-9xl"
        >
          I&apos;m Chimeruzee.
        </motion.h1>
        <h4 className="flex items-center w-fit  font-bold max-w-[800px] h-fit py-5 text-2xl md2:text-2xl md2:px-0 px-5">
          I&apos;m a creative Frontend developer. An innovative and good team
          player who loves going extra mile to deliver a project. I make things
          work.
        </h4>
        <button
          type="button"
          className="text-white buttonGrad mt-5 focus:outline-none uppercase rounded-2xl w-[180px] py-4 text-center"
        >
          hire me
        </button>
      </div>

      <div className="max-w-[250px] min-w-[250px] md2:max-w-[350px] md2:min-w-[350px] lg:max-w-[400px] lg:min-w-[400px] object-contain ">
        <motion.div
          className="border-[7px] md2:border-[10px] border-white rounded-full object-cover flex justify-center items-center p-[7px] md2:p-[10px] "
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
    </motion.section>
  );
}

export default Hero;
