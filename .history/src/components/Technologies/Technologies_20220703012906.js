import React from "react";
import Image from "next/image";

function Technologies() {
  return (
    <section className="px-[70px]">
      <div className=" w-full min-h-[80vh] h-fit py-20">
        <article className="w-full flex justify-center mb-20">
          <h2>TECHNOLOGIES</h2>
        </article>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-10 px-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((r) => (
            <div
              key={r}
              className="group bg-[#2020205b]  h-36 w-36  rounded-lg shadow-md mx-auto"
            >
              <a
                href="#"
                className="flex justify-between items-center rounded-lg shadow-md "
              >
                <Image
                  src="/images/GraphQL-logo.png"
                  alt=""
                  width={120}
                  height={120}
                  objectFit="contain"
                />
                {/* <div className="flex items-center p-4 leading-normal">
                  <p className="mb-2 text-xl font-bold tracking-tight">
                    React
                  </p>
                </div> */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
