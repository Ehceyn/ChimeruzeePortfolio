import React from "react";
import { CgMenuGridO } from "react-icons/cg";

function About() {
  return (
    <section className="">
      <div className=" w-full min-h-[100vh] h-fit py-20 relative ">
        <section className=" w-full  ">
          <article className="w-full flex justify-center mb-10 md:mb-20">
            <h2 className="text-5xl md2:text-6xl lg:text-8xl">ABOUT ME</h2>
          </article>
          <div className="w-full flex flex-col items-center space-y-5 px-7 md2:px-0">
            <h4 className="text-[#999] text-2xl max-w-[400px] text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nemo eveniet autem libero praesentium sit assumenda est
              deleniti exercitationem dolorem accusamus voluptates maxime
              blanditiis dolores voluptas voluptatem, veritatis tempore
              repudiandae. deleniti exercitationem dolorem accusamus voluptates
              maxime blanditiis dolores voluptas voluptatem, veritatis tempore
              repudiandae.
            </h4>
            <h4 className="text-[#999] text-2xl max-w-[400px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nemo eveniet autem libero praesentium sit assumenda est
              deleniti exercitationem dolorem accusamus voluptates maxime
              blanditiis dolores voluptas voluptatem, veritatis tempore
              repudiandae.
            </h4>
            <h4 className="text-[#999] text-2xl max-w-[400px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nemo eveniet autem libero praesentium sit assumenda est
              deleniti exercitationem dolorem accusamus voluptates maxime
              blanditiis dolores voluptas voluptatem, veritatis tempore
              repudiandae.
            </h4>
          </div>
        </section>

        <section className="absolute top-0 w-full">
          <div className="w-full relative min-h-[100vh]">
            <div className="absolute top-0 left-0">
              <div className="flex transform -translate-y-8">
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
              </div>
              <div>
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <div className="w-full flex justify-end">
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
              </div>
              <div className="flex">
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
