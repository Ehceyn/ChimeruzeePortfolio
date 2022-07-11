import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-center w-full h-[80px] px-[70px] fixed bg-[#000000a2] backdrop-blur-md shadow-sm t-0 inset-x-0 z-30">
      <div className="flex items-center justify-between w-[inherit] h-[inherit]">
        <Image
          src="/images/immersewhite.png"
          height="40px"
          width="40px"
          alt="Logo"
          objectFit="contain"
        />
        <nav className="flex items-center w-fit h-fit space-x-4">
          <article className="navlinks hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200">
            Home
          </article>
          <article className="navlinks hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200">
            About
          </article>
          <article className="navlinks hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200">
            Projects
          </article>
          <article className="navlinks hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200">
            Contact
          </article>
          <article className="navlinks hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200">
            Blog
          </article>
        </nav>
        <div className="flex items-center w-fit h-[inherit] space-x-4">
          <a
            title="github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/ehceyn"
            className="cursor-pointer hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200"
          >
            <BsGithub className="text-[#ccc] text-[16px]" />
          </a>
          <a
            title="linkedIn"
            className="cursor-pointer hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200"
          >
            {" "}
            <BsLinkedin className="text-[#ccc] text-[16px]" />
          </a>
          <a
            title="twitter"
            className="cursor-pointer hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200"
          >
            {" "}
            <BsTwitter className="text-[#ccc] text-[16px]" />
          </a>
          <a
            title="resume"
            className="cursor-pointer hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200"
          >
            {" "}
            <FaFileAlt className="text-[#ccc] text-[16px]" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
