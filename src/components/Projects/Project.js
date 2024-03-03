import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SVGS from "../SVGS/SVGS";

const Project = ({ work }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const isMobile = () => {
      if (
        navigator.userAgent.match(
          /(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone|iemobile)/
        )
      ) {
        return true;
      } else {
        return false;
      }
    };
    setIsMobile(isMobile());
  }, []);

  return (
    <motion.div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      href={work.URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative ${
        !isMobile && "flex"
      } items-center justify-center bg-black w-fit rounded-xl border-[1px] border-[#2c2929] hover:border-white cursor-pointer`}
    >
      {/* <a href="#"> */}
      {/* <Image
                className={` md:rounded-2xl ${
                  isMobile ? "rounded-t-2xl" : "rounded-2xl"
                } transition-all duration-200`}
                src={work.imgURL}
                alt=""
                width={isMobile ? 400 : 600}
                height={isMobile ? 350 : 1050}
                objectFit="cover"
              /> */}
      {/* <div
                className={`${
                  isMobile ? "hidden" : "hidden"
                } md:flex items-center justify-center max-w-[540px] background opacity-0 hover:opacity-100 w-full xs:h-[450px] overflow-hidden rounded-2xl absolute transition-all duration-500`}
              >
                <div className="flex items-center justify-center max-w-[540px] rounded-tr-[100px]  bg-[#0B0B0B]  w-full xs:h-[450px] overflow-hidden">
                  <div className="space-y-8 text-center ">
                    <h4 className="text-2xl font-bold tracking-tight capitalize">
                      {work.name}
                    </h4>

                    <p className="mb-3 w-[300px] h-30 card-text">
                      {work.description}
                    </p>
                    <a className="space-y-5">
                      <h4 className="text-2xl font-bold tracking-tight capitalize">
                        Stacks
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3">
                        {work.stacks.map((stack, i) => (
                          <a
                            key={stack}
                            className=" py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none bg-[#090909] rounded-md capitalize"
                          >
                            {stack}
                          </a>
                        ))}{" "}
                      </div>
                    </a>
                    <a
                      href={work.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none rounded-md background capitalize w-[70%] mx-auto"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div> */}
      {/* </a> */}
      <div className={`p-8 space-y-6`}>
        <a href={work.URL} target="_blank" rel="noopener noreferrer">
          <h4 className="text-2xl font-bold hover:underline tracking-tight capitalize">
            {work.name}
          </h4>
        </a>

        <p className="mb-3 h-30 card-text">{work.description}</p>
        <a className="space-y-5">
          <h4 className="text-2xl font-bold tracking-tight capitalize">
            Stack
          </h4>
          <div className="grid grid-cols-6 gap-x-5 gap-y-3">
            {work.stacks.map((stack, i) => (
              <a
                key={stack}
                className=" py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none bg-[#090909] rounded-md w-fit"
              >
                <SVGS name={stack} />
              </a>
            ))}
          </div>
        </a>
        <a
          href={work.URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none rounded-md bg-[#090909] capitalize "
        >
          Visit Site
        </a>
      </div>
      <motion.a
        style={{ visibility: isHovering ? "visible" : "hidden" }}
        initial={{ scale: 0 }}
        animate={{ scale: isHovering ? 1 : 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        href={work.URL}
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 absolute -top-5 -right-5 rounded-full border bg-white flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="black"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default Project;
