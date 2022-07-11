import React from "react";
import { CgMenuGridO } from "react-icons/cg";

function About() {
  return (
    <section className="">
      <div className=" w-full min-h-[80vh] h-fit py-20 relative">
        <article className="w-full flex justify-center">
          <h2>ABOUT ME</h2>
        </article>
        <div className="absolute top-0 left-0">
          <div className="flex">
            <CgMenuGridO fontSize="120px" className="text-[#46444456]" />
            <CgMenuGridO fontSize="120px" className="text-[#46444456]" />
          </div>
          <div>
            <CgMenuGridO fontSize="120px" className="text-[#46444456]" />
          </div>
        </div>
        <div className="w-[400px]">
          <h4 className="text-[#999] text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            nemo eveniet autem libero praesentium sit assumenda est deleniti
            exercitationem dolorem accusamus voluptates maxime blanditiis
            dolores voluptas voluptatem, veritatis tempore repudiandae. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Corrupti itaque
            blanditiis qui expedita sunt, quis eos deleniti earum. Impedit nam
            ea error possimus amet ad autem molestias dignissimos soluta fugit!
          </h4>
        </div>
        <div className="absolute bottom-0 right-0">
          <div>
            <CgMenuGridO fontSize="120px" className="text-[#46444456]" />
          </div>
          <div className="flex">
            <CgMenuGridO fontSize="120px" className="text-[#46444456]" />
            <CgMenuGridO fontSize="120px" className="text-[#46444456]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
