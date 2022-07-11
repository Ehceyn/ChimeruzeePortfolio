import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <section className=" w-full min-h-[80vh] h-fit mb-20 relative">
      <div className="w-full  py-20 px-[70px] min-h-[80vh] bg-[#2020205b] h-fit">
        <article className="w-full flex justify-center mb-20">
          <h2>CONTACT</h2>
        </article>

        <div className="flex w-full justify-center">
          {/* Form Starts*/}
          <div className="w-[300px] ">
            <form className="">
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">
                  <p>Your email</p>
                </label>
                <input
                  type="email"
                  id="email"
                  className="border focus:outline-none rounded-lg block w-full p-2.5 border-gray-600 bg-transparent placeholder-gray-400 text-white focus:ring-[#0070fdff] focus:border-[#0070fdff]"
                  required=""
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">
                  <p>Your Password</p>
                </label>
                <input
                  type="password"
                  id="password"
                  className=" border focus:outline-none rounded-lg block w-full p-2.5 border-gray-600 bg-transparent placeholder-gray-400 text-white focus:ring-[#0070fdff] focus:border-[#0070fdff]"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="text-white mt-3 focus:outline-none uppercase rounded-lg w-full sm:w-auto px-20 py-5 text-center background"
              >
                Send
              </button>
            </form>
          </div>

          <article className="flex justify-end w-[600px] ">
            <article className="text-white text-[3em] font-extrabold font-[GTWalsheimPro]">
              Get In Touch
            </article>
          </article>
        </div>
        {/* Form Ends */}
      </div>
    </section>
  );
}

export default Contact;
