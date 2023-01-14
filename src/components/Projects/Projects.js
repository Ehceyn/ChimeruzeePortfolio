import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import SVGS from "../SVGS/SVGS";
import { WorksContext } from "../../State/Providers/WorksProvider";
import Logo from "../Logo/Logo";
import { data as works } from "../../data";
import { motion } from "framer-motion";
import Project from "./Project";
import { data } from "autoprefixer";
function Projects() {
  // const { works, work, loading, error, getWork } = useContext(WorksContext);
  // console.log(works, "works");
  // console.log(work, "work");
  // console.log(loading, "loading");
  // console.log(error, "error");
  // Check if it's a mobile device

  return (
    <section className="md2:px-[70px] mt-20">
      <div className=" w-full h-fit bg-[#2020205b] md2:rounded-3xl py-20">
        <article className="w-full flex justify-center mb-20">
          <h2 className="text-5xl md2:text-6xl lg:text-8xl">PROJECTS</h2>
        </article>
        {/* {loading && (
          <div className="w-full h-80 flex items-center justify-center">
            <Logo bgColor="background" size={80} />
          </div>
        )} */}

        <div className=" grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 px-7 md:px-20">
          {/* All project cards */}
          {works?.map((work, i) => (
            <div key={work.name}>
              <Project work={work} />
            </div>
          ))}
        </div>
        {/* <article className="w-full flex justify-center mt-20">
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
        </article> */}
      </div>
    </section>
  );
}

export default Projects;
