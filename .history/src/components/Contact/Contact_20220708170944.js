import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <section className=" w-full min-h-[80vh] h-fit mb-20 relative">
      <div className="w-full  py-20 px-[70px] min-h-[80vh] bg-[#2020205b] h-fit">
        <article className="w-full flex justify-center mb-20">
          <h2>CONTACT</h2>
        </article>

        <div className="flex">
          {/* Form Starts*/}
          <form className="bg-blue-500">
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 ">
                <p>Your email</p>
              </label>
              <input
                type="email"
                id="email"
                className="border focus:outline-none rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@flowbite.com"
                required=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className=" border focus:outline-none rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required=""
              />
            </div>

            <button
              type="submit"
              className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
          <article className="bg-red-500">
            <h2 className="text-white">Get In Touch</h2>
          </article>
        </div>
        {/* Form Ends */}
      </div>
    </section>
  );
}

export default Contact;
