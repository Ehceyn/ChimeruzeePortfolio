import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 w-full mb-7 px-5 py-10 border-t border-gray-900">
        <article className="flex items-start mt-5 justify-start">
          <Image
            src="/images/immersewhite.png"
            height="40px"
            width="40px"
            alt="Logo"
            objectFit="contain"
          />
          <h4 className="text-4xl font-bold tracking-tight capitalize ml-10">
            Meruz
          </h4>
        </article>
        <article className="space-y-7 transition-[border] duration-300 ">
          <h4 className="mt-5  text-2xl font-bold tracking-tight capitalize">
            Site
          </h4>
          <p className="cursor-pointer hover:underline hover:underline-offset-1 w-fit">
            FAQs
          </p>
          <p className="cursor-pointer hover:underline hover:underline-offset-1 w-fit">
            Blog
          </p>
          <p className="cursor-pointer hover:underline hover:underline-offset-1 w-fit">
            Address
          </p>
        </article>
        <article className="space-y-7">
          <h4 className="mt-5  text-2xl font-bold tracking-tight capitalize">
            Socials
          </h4>
          <p className="cursor-pointer hover:underline hover:underline-offset-1 w-fit">
            Subscribe to Newsletter
          </p>
          <button
            type="button"
            className=" py-2 px-4 rounded-xl border border-primary-light hover:text-primary-light"
          >
            Subscribe
          </button>
        </article>
      </div>
      <div className="w-full flex bg-secondary-darker h-[10vh] bottom-0 text-[#666666] justify-center items-center">
        <p>Copyright &copy;2022 All rights reserved | Tronix Labs </p>
      </div>
    </>
  );
}