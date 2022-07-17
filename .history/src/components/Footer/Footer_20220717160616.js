import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="px-7 md2:px-[70px]">
        <hr className="border border-[#2020205b]" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 w-full mb-7 px-7 md2:px-[70px] py-10 ">
        {/* <article className="flex items-center h-fit mt-5 justify-start">
          <Image
            src="/images/immersewhite.png"
            height="40px"
            width="40px"
            alt="Logo"
            objectFit="contain"
          />
          <h4 className="text-4xl font-bold tracking-tight capitalize ml-10">
            Meruzee
          </h4>
        </article> */}
        <article className="space-y-7 transition-[border] duration-300 ">
          <h4 className="mt-5  text-2xl font-bold tracking-tight capitalize">
            Site
          </h4>
          <a className="cursor-pointer hover:underline capitalize hover:underline-offset-1 w-fit">
            Home
          </a>
          <a className="cursor-pointer hover:underline capitalize hover:underline-offset-1 w-fit">
            Blog
          </a>
        </article>
        <article className="space-y-7">
          <h4 className="mt-5  text-2xl font-bold tracking-tight capitalize">
            Socials
          </h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/ehceyn"
            className="cursor-pointer hover:underline capitalize hover:underline-offset-1 w-fit"
          >
            github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/chimeruzee-chidum-7417591ba"
            className="cursor-pointer hover:underline capitalize hover:underline-offset-1 w-fit"
          >
            linkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com/chimeruzee1"
            className="cursor-pointer hover:underline capitalize hover:underline-offset-1 w-fit"
          >
            twitter
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1hPpP44F-gs2xs_Lax_930MiJSpsTbr0T/view?usp=sharing"
            className="cursor-pointer hover:underline capitalize hover:underline-offset-1 w-fit"
          >
            Download Resume
          </a>
        </article>
      </div>
      <div className="w-full flex bg-secondary-darker h-[10vh] bottom-0 text-[#666666] justify-center items-center">
        <p>Copyright &copy;2022 All rights reserved | Meruzee </p>
      </div>
    </>
  );
}
