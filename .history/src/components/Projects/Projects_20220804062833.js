import React from "react";
import Image from "next/image";

function Projects() {
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
              className="group flex items-center justify-center max-w-[540px] bg-black w-full xs:h-[450px] overflow-hidden rounded-2xl border-[1px] border-gray-800 shadow-lg shadow-[#0f0e0ed3] object-cover mx-auto"
            >
              {/* <a href="#"> */}
              <Image
                className="rounded-2xl group-hover:scale-105 transition-all duration-200"
                src={r.src}
                alt=""
                width={600}
                height={1050}
                objectFit="cover"
              />
              {/* </a> */}
              {/* <div className="p-5">
                <a href="#">
                  <h4 className="mb-2 text-2xl font-bold tracking-tight">
                    Noteworthy technology acquisitions 2021
                  </h4>
                </a>
                <p className="mb-3 w-[300px] h-30 card-text">
                  Here are the biggest enterprise technology acquisitions of
                  2021 Here are the biggest enterprise technology acquisitions
                  of 2021 technology acquisitions of 2021
                </p>
                <a
                  href="#"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none background rounded-md"
                >
                  Visit site
                  <svg
                    className="ml-2 -mr-1 w-4 h-4 group-hover:translate-x-1 transition-all duration-200 ease-in-out"
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
                </a>
              </div> */}
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
