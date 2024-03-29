import React from "react";
import Image from "next/image";
import { motion, useViewportScroll } from "framer-motion";

function Technologies() {
  const { scrollYProgress } = useViewportScroll();

  return (
    <section className="md2:px-[70px]">
      <div className=" w-full min-h-[80vh] h-fit py-20">
        <article className="w-full flex justify-center mb-20">
          <h2 className="text-5xl md2:text-6xl lg:text-8xl">TECHNOLOGIES</h2>
        </article>
        <motion.div
          animate={{
            opacity: 1,
            transiton: {
              delayChildren: 0.5,
              staggerChildren: 0.1,
            },
          }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 md2:grid-cols-4 gap-x-4 gap-y-10 px-5"
        >
          {[
            { src: "/images/html.png", name: "HTML" },
            { src: "/images/css.png", name: "CSS" },
            { src: "/images/js.png", name: "JavaScript" },
            { src: "/images/react.png", name: "react" },
            { src: "/images/nodejs.png", name: "nodeJS" },
            { src: "/images/nextjs.svg", name: "nextJS" },
            { src: "/images/GraphQL-logo.png", name: "graphQL" },
            { src: "/images/redux.png", name: "Redux" },
            { src: "/images/mongodb.png", name: "MongoDB" },
            { src: "/images/firebase.png", name: "Firebase" },
            { src: "/images/git.png", name: "Git" },
            { src: "/images/tailwind.png", name: "Tailwind" },
          ].map((r, index) => (
            <div
              key={r.name}
              className="group flex flex-col justify-center items-center shadow-xl shadow-black bg-[#2020205b] py-7 px-12 rounded-lg mx-auto"
            >
              <Image
                src={r.src || "/images/GraphQL-logo.png"}
                alt=""
                width={70}
                height={70}
                objectFit="contain"
              />
              <h4 className="mt-5 text-2xl font-bold tracking-tight capitalize">
                {r.name}
              </h4>
            </div>
          ))}
        </motion.div>
        <article className="w-full flex justify-center mt-20">
          <button className="group bg-transparent py-2 px-4 uppercase inline-flex items-center">
            View all technologies
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

export default Technologies;
