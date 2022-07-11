import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="px-[70px]">
        <hr className="border-gray-900" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 w-full mb-7 px-[70px] py-10 ">
        <article className="flex items-center h-fit mt-5 justify-start">
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
          <p className="cursor-pointer hover:underline capitalize hover:underline-offset-1 w-fit">
            Home
          </p>
          <p className="cursor-pointer hover:underline capitalize hover:underline-offset-1 w-fit">
            Blog
          </p>
          
        </article>
        <article className="space-y-7">
          <h4 className="mt-5  text-2xl font-bold tracking-tight capitalize">
            Socials
          </h4>
          <p className="cursor-pointer hover:underline capitalize hover:underline-offset-1 w-fit">
github          </p>
          <p className="cursor-pointer hover:underline capitalize hover:underline-offset-1 w-fit">
github          </p>
            Subscribe
          </button>
        </article>
      </div>
      <div className="w-full flex bg-secondary-darker h-[10vh] bottom-0 text-[#666666] justify-center items-center">
        <p>Copyright &copy;2022 All rights reserved | Meruz </p>
      </div>
    </>
  );
}
