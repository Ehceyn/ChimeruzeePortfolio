import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 w-full mb-7 px-5 py-10">
        <article>
          <Image
            src="/images/immersewhite.png"
            alt=""
            width={150}
            height={30}
            objectFit="contain"
          />
        </article>
        <article className="space-y-7 transition-[border] duration-300 ">
          <p className="cursor-pointer hover:underline hover:underline-offset-1 w-fit">
            Contact
          </p>
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
          <p className="cursor-pointer hover:underline hover:underline-offset-1 w-fit">
            New Products
          </p>
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
