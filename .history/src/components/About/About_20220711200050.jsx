import React from "react";
import { CgMenuGridO } from "react-icons/cg";

function About() {
  return (
    <section className="">
      <div className=" w-full min-h-[80vh] h-fit py-20">
        <article className="w-full flex justify-center mb-20">
          <h2>ABOUT ME</h2>
        </article>
        <div className="flex">
          <CgMenuGridO fontSize="100px" />
          <CgMenuGridO fontSize="100px" />
        </div>
        <div>
          <CgMenuGridO fontSize="100px" />
        </div>
      </div>
    </section>
  );
}

export default About;
