import React from "react";
import { BsGithub, BsLinkedIn, BsTwitter } from "react-icons/bs";

import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-center w-full h-[90px] px-[70px]">
      <div className="flex items-center justify-between w-[inherit] h-[inherit]">
        <Image
          src="/images/immersewhite.png"
          height="40px"
          width="40px"
          alt="Logo"
          objectFit="contain"
        />
        <nav className="flex items-center w-fit h-fit">
          <article className="navlinks">Projects</article>
          <article className="navlinks">About</article>
          <article className="navlinks">Contact</article>
          <article className="navlinks">Blog</article>
        </nav>
        <div className="flex items-center w-fit h-[inherit] space-x-5">
          <article>
            <BsGithub className="text-[#ccc] text-[16px]" />
          </article>
          <article>
            <BsLinkedIn className="text-[#ccc] text-[16px]" />
          </article>
          <article>
            <BsTwitter className="text-[#ccc] text-[16px]" />
          </article>
        </div>
      </div>
    </header>
  );
}

export default Header;
