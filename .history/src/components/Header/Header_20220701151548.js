import React from "react";

import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-center w-full h-[90px] px-[100px]">
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
        <div className="flex items-center w-fit h-[inherit]">
          <article>G</article>
          <article>F</article>
          <article>T</article>
        </div>
      </div>
    </header>
  );
}

export default Header;
