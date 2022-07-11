import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <section className="px-[70px]">
      <section className=" w-full min-h-[80vh] h-fit bg-[#00000086] rounded-3xl py-10">
        <article className="w-full flex justify-center">
          <h2>PROJECTS</h2>
        </article>
        {/* All project cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 px-10 pt-20">
          {[1, 2, 3, 4].map((r) => (
            <div
              key={r}
              className="max-w-lg bg-transparent w-[1000px] rounded-lg border border-gray-800 shadow-md dark:bg-gray-800 dark:border-gray-700 object-cover  mx-auto"
            >
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/images/meruz-bw.jpg"
                  alt=""
                  width={500}
                  height={400}
                  objectFit="cover"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021
                </p>
                <a
                  href="#"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
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
      </section>
    </section>
  );
}

export default Projects;
