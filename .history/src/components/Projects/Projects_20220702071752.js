import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <section className="px-[70px]">
      <section className=" w-full min-h-[80vh] h-fit bg-[#00000086] rounded-3xl pt-10 pb-20">
        <article className="w-full flex justify-center">
          <h2>PROJECTS</h2>
        </article>
        {/* All project cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 px-10 pt-20">
          {[1, 2, 3, 4, 5, 6].map((r) => (
            <div
              key={r}
              className="group max-w-lg bg-transparent w-[512px] rounded-lg border border-gray-800 shadow-md dark:bg-gray-800 dark:border-gray-700 object-cover  mx-auto"
            >
              <a href="#">
                <Image
                  className="rounded-t-lg group-hover:scale-105 transition-all duration-200"
                  src="/images/meruz-bw.jpg"
                  alt=""
                  width={500}
                  height={400}
                  objectFit="cover"
                />
              </a>
              <div className="p-5">
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
              </div>
            </div>
          ))}
        </div>
        <article className="w-full flex justify-center mt-20">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 ">
            <p className="uppercase inline-flex items-center">
              View all projects
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
            </p>
          </button>
        </article>
      </section>
    </section>
  );
}

export default Projects;
