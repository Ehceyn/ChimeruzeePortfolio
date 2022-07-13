import React from "react";
import Image from "next/image";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section className=" w-full min-h-[80vh] h-fit mb-20 ">
      <div className="w-full  py-20 px-7 md2:px-[70px] min-h-[80vh] bg-[#2020205b] h-fit">
        <article className="w-full flex justify-center mb-10 md:mb-20">
          <h2 className="text-5xl md2:text-6xl lg:text-8xl">CONTACT</h2>
        </article>

        <div className="flex flex-col-reverse md2:flex-row w-full items-center md2:justify-center space-y-10 md2:space-y-0 md2:space-x-32 lg:space-x-64">
          {/* Form Starts*/}
          <div className="  md:w-[400px] w-full">
            <form className="flex md2:block flex-col items-center">
              <div className="mb-6 w-full">
                <label htmlFor="name" className="block mb-2">
                  <p>Full name</p>
                </label>
                <input
                  type="text"
                  id="name"
                  className="border focus:outline-none rounded-lg block w-full font-[Sintony-Regular] p-2.5 border-gray-600 bg-transparent placeholder-[#999] text-white focus:ring-[#0070fdff] focus:border-[#0070fdff]"
                  required
                />
              </div>
              <div className="w-full mb-6">
                <label htmlFor="email" className="block mb-2">
                  <p>Email</p>
                </label>
                <input
                  type="email"
                  id="email"
                  className="border focus:outline-none rounded-lg block w-full font-[Sintony-Regular] p-2.5 border-gray-600 bg-transparent placeholder-[#999] text-white focus:ring-[#0070fdff] focus:border-[#0070fdff]"
                  required
                />
              </div>
              <div className="w-full mb-6">
                <label htmlFor="number" className="block mb-2">
                  <p>Phone Number</p>
                </label>
                <input
                  type="tel"
                  maxLength="14"
                  id="number"
                  className="border focus:outline-none rounded-lg block w-full font-[Sintony-Regular] p-2.5 border-gray-600 bg-transparent placeholder-[#999] text-white focus:ring-[#0070fdff] focus:border-[#0070fdff]"
                />
              </div>

              <div className="w-full mb-6">
                <label htmlFor="message" className="block mb-2">
                  <p>Message</p>
                </label>
                <textarea
                  id="message"
                  className=" border focus:outline-none rounded-lg block w-full font-[Sintony-Regular] p-2.5 border-gray-600 bg-transparent placeholder-[#999] text-white focus:ring-[#0070fdff] focus:border-[#0070fdff]"
                  required
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                className="text-white mt-5 focus:outline-none uppercase rounded-2xl w-[180px] py-4 text-center background"
              >
                Send
              </button>
            </form>
          </div>

          <article className="flex">
            <div className=" md:w-[400px] w-full">
              <article className="text-[2.2em] md2:text-[2.7em] lg:text-[3em] font-extrabold font-[GTWalsheimPro] ">
                Get In Touch
              </article>
              <h4 className="text-[#999] text-2xl">
                Let&apos;s bring that dream to reality together. That&apos;s why
                i&apos;m here.
              </h4>
              <article className="mt-10 space-y-5">
                <article className="flex items-center space-x-3">
                  <div className="background w-fit rounded-full p-3">
                    <MdLocationOn className="text-[#ccc] text-[16px]" />
                  </div>
                  <h4 className="text-[#999] text-2xl">
                    Rumuokwurusi, Port Harcourt, Nigeria.
                  </h4>
                </article>
                <article className="flex items-center space-x-3">
                  <div className="background w-fit rounded-full p-3">
                    <MdEmail className="text-[#ccc] text-[16px]" />
                  </div>
                  <h4 className="text-[#999] text-2xl">itzmeruz31@gmail.com</h4>
                </article>
                <article className="flex items-center space-x-3">
                  <div className="background w-fit rounded-full p-3">
                    <MdLocalPhone className="text-[#ccc] text-[16px]" />
                  </div>
                  <h4 className="text-[#999] text-2xl">+234 811 0743 559</h4>
                </article>
              </article>
            </div>
          </article>
        </div>
        {/* Form Ends */}
      </div>
    </section>
  );
}

export default Contact;
