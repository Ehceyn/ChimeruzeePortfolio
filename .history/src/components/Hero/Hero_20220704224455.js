import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroImage } from "../../../animations/animation";

function Hero() {
  const colors = ["#0070fdff", "#fd2828", "#d50098ff"];

  const [degree, setDegree] = useState(210);
  const [color1, setColor1] = useState("#0070fdff");
  const [color2, setColor2] = useState("#fd2828");
  const [color3, setColor3] = useState("#d50098ff");

  setInterval(() => {
    if (degree <= 360) {
      setDegree(degree + 5);
    } else {
      setDegree(0);
    }
    setColor1(colors[Math.floor(Math.random() * colors.length)]);
    setColor2(colors[Math.floor(Math.random() * colors.length)]);
    setColor3(colors[Math.floor(Math.random() * colors.length)]);
  }, 1000);

  /* Linear Gradient Border for hero image */
  const borderGradient = {
    background: `linear-gradient(${degree}deg, ${color1}, ${color2}, ${color3}) border-box, linear-gradient(${degree}deg, ${color1}, ${color2}, ${color3},) padding-box`,
  };
  // colors[Math.floor(Math.random() * colors.length)];

  return (
    <section className="flex justify-between items-center w-full h-[100vh]  pt-[80px] pb-20 px-[70px] ">
      {/* <video
        src="/video/vid.mp4"
        className="absolute t-0 inset-x-0 "
        autoPlay
        loop
        muted
      ></video> */}
      <div className="w-fit leading-tight mr-[100px]">
        <h1>Howdy! </h1>
        <h1>I&apos;m Chimeruzee.</h1>
        <h3 className="flex items-center w-fit max-w-[800px] h-fit py-5 ">
          I&apos;m a creative Frontend developer. An innovative and good team
          player who loves going extra mile to deliver a project. I make things
          work.
        </h3>
      </div>
      <div className="max-w-[400px] min-w-[400px] object-contain ">
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
