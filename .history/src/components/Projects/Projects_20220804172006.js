import React, { useEffect, useState } from "react";
import Image from "next/image";

function Projects() {
  // Check if it's a mobile device
  const [isMobile, setIsMobile] = useState(false);

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
    <section className="md2:px-[70px] mt-20">
      <div className=" w-full min-h-[80vh] bg-[#2020205b] md2:rounded-3xl py-20">
        <article className="w-full flex justify-center mb-20">
          <h2 className="text-5xl md2:text-6xl lg:text-8xl">PROJECTS</h2>
        </article>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 px-7 md:px-20">
          {/* All project cards */}
          {[
            { src: "/images/test1.jpg", name: "HTML" },
            { src: "/images/test2.jpg", name: "CSS" },
            { src: "/images/test1.jpg", name: "HTML" },
            { src: "/images/test2.jpg", name: "CSS" },
            { src: "/images/test1.jpg", name: "HTML" },
            { src: "/images/test2.jpg", name: "CSS" },
          ].map((r) => (
            <div
              key={r.name}
              className={`relative ${
                !isMobile && "flex"
              } items-center justify-center md:max-w-[540px] bg-black w-full md:h-[450px] overflow-hidden rounded-2xl border-[1px] border-gray-800 shadow-md shadow-[#030303] object-cover mx-auto`}
            >
              {/* <a href="#"> */}
              <Image
                className={` md:rounded-2xl ${
                  isMobile ? "rounded-t-2xl" : "rounded-2xl"
                } transition-all duration-200`}
                src={r.src}
                alt=""
                width={isMobile ? 400 : 600}
                height={isMobile ? 350 : 1050}
                objectFit="cover"
              />
              <div
                className={`${
                  isMobile ? "hidden" : "flex"
                } md:flex items-center justify-center max-w-[540px] background opacity-0 hover:opacity-100 w-full xs:h-[450px] overflow-hidden rounded-2xl absolute transition-all duration-500`}
              >
                <div className="flex items-center justify-center max-w-[540px] rounded-tr-[100px]  bg-[#0B0B0B]  w-full xs:h-[450px] overflow-hidden">
                  <div className="space-y-8 text-center ">
                    <h4 className="text-2xl font-bold tracking-tight capitalize">
                      TechArmy EdTech Web App
                    </h4>

                    <p className="mb-3 w-[300px] h-30 card-text">
                      Here are the biggest enterprise technology acquisitions of
                      2021 Here are the biggest enterprise technology
                      acquisitions of 2021 technology acquisitions of 2021 2021
                      Here are the biggest enterprise technology acquisitions of
                      2021 technology acquisitions of 2021 biggest enterprise
                      technology acquisitions of 2021 technology acquisitions of
                      2021
                    </p>
                    <a className="space-y-5">
                      <h4 className="text-2xl font-bold tracking-tight capitalize">
                        Stacks
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3">
                        <a className=" py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none bg-[#090909] rounded-md capitalize">
                          React
                        </a>
                        <a className=" py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none bg-[#090909] rounded-md capitalize">
                          nodeJS
                        </a>
                        <a className=" py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none bg-[#090909] rounded-md capitalize">
                          Firebase
                        </a>
                        <a className=" py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none bg-[#090909] rounded-md capitalize">
                          nextJS
                        </a>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none rounded-md background capitalize w-[70%] mx-auto"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
              {/* </a> */}
              <div
                className={`p-5 ${
                  isMobile ? "block" : "hidden"
                } md:hidden space-y-6`}
              >
                <h4 className="text-2xl font-bold tracking-tight capitalize">
                  TechArmy EdTech Web App
                </h4>

                <p className="mb-3 w-[300px] h-30 card-text">
                  Here are the biggest enterprise technology acquisitions of
                  2021 Here are the biggest enterprise technology acquisitions
                  of 2021 technology acquisitions of 2021 2021 Here are the
                  biggest enterprise technology acquisitions of 2021 technology
                  acquisitions of 2021 biggest enterprise technology
                  acquisitions of 2021 technology acquisitions of 2021
                </p>
                <a className="space-y-5">
                  <h4 className="text-2xl font-bold tracking-tight capitalize">
                    Stacks
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3">
                    <a className=" py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none bg-[#090909] rounded-md capitalize">
                      React
                    </a>
                  </div>
                </a>
                <a
                  href="#"
                  className="py-3 px-4 font-medium text-center text-white focus:ring-4 focus:outline-none rounded-md background capitalize "
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
        <article className="w-full flex justify-center mt-20">
          <button className="group bg-transparent py-2 px-4 uppercase inline-flex items-center">
            View all projects
            <svg
              className="ml-2 -mr-1 w-7 h-7 group-hover:translate-x-1 transition-all duration-200"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </article>
      </div>
    </section>
  );
}

export default Projects;
