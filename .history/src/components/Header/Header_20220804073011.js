import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
// import { MdMenu } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../NavDropDown/use-dimensions";
import { MenuToggle } from "../NavDropDown/MenuToggle";
import { Navigation } from "../NavDropDown/Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <header className="flex items-center justify-center w-full h-[60px] md2:h-[80px] px-7 md2:px-[70px] fixed bg-[#000000a2] backdrop-blur-md shadow-sm top-0 inset-x-0 z-30">
      <div className="flex items-center justify-between w-[inherit] h-[inherit]">
        <Logo />
        <nav className="md:flex items-center w-fit h-fit space-x-4 hidden ">
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
        </nav>
        <div className="hidden md:flex items-center w-fit h-[inherit] space-x-4">
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
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/chimeruzee-chidum-7417591ba"
            className="cursor-pointer hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200"
          >
            {" "}
            <BsLinkedin className="text-[#ccc] text-[16px]" />
          </a>
          <a
            title="twitter"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com/chimeruzee1"
            className="cursor-pointer hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200"
          >
            {" "}
            <BsTwitter className="text-[#ccc] text-[16px]" />
          </a>
          <a
            title="resume"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1hPpP44F-gs2xs_Lax_930MiJSpsTbr0T/view?usp=sharing"
            className="cursor-pointer hover:bg-[#2020205b] p-4 hover:rounded-lg hover:scale-105 active:scale-100 transition-all duration-200"
          >
            {" "}
            <FaFileAlt className="text-[#ccc] text-[16px]" />
          </a>
        </div>

        {/* HAMBUGER MENU */}
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="md:hidden flex items-center w-fit"
        >
          <motion.div className="nav-background" variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </header>
  );
}

export default Header;
