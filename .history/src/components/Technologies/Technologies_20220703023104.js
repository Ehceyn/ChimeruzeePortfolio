import React from "react";
import Image from "next/image";

function Technologies() {
  return (
    <section className="px-[70px]">
      <div className=" w-full min-h-[80vh] h-fit py-20">
        <article className="w-full flex justify-center mb-20">
          <h2>TECHNOLOGIES</h2>
        </article>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-10 px-10">
          {[
            { src: "/images/html.png", name: "HTML" },
            { src: "/images/css.png", name: "CSS" },
            { src: "/images/js.png", name: "JavaScript" },
            { src: "/images/react.png", name: "react" },
            { src: "/images/nodejs.png", name: "nodeJS" },
            { src: "/images/nextjs.png", name: "nextJS" },
            { src: "/images/GraphQL-logo.png", name: "graphQL" },
            { src: "/images/redux.png", name: "Redux" },
            { src: "/images/mongodb.png", name: "MongoDB" },
            { src: "/images/firebase.png", name: "Firebase" },
            { src: "/images/git.png", name: "Git" },
            { src: "/images/tailwind.png", name: "TailwindCss" },
          ].map((r, index) => (
            <div
              key={r.name}
              className="group flex flex-col justify-center items-center bg-[#2020205b] py-10 px-16 rounded-lg shadow-md mx-auto"
            >
              <Image
                src={r.src || "/images/GraphQL-logo.png"}
                alt=""
                width={100}
                height={100}
                objectFit="contain"
              />
              <h4 className="mt-5  text-2xl font-bold tracking-tight capitalize">
                {r.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
