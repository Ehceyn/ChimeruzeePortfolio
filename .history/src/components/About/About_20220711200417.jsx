import React from "react";
import { CgMenuGridO } from "react-icons/cg";

function About() {
  return (
    <section className="">
      <div className=" w-full min-h-[80vh] h-fit py-20">
        <article className="w-full flex justify-center">
          <h2>ABOUT ME</h2>
        </article>
        <div className="flex">
          <CgMenuGridO fontSize="100px" className="text-[#46444456]" />
          <CgMenuGridO fontSize="100px" className="text-[#0000005d]" />
        </div>
        <div>
          <CgMenuGridO fontSize="100px" className="text-[black]" />
        </div>
      </div>
    </section>
  );
}

export default About;
