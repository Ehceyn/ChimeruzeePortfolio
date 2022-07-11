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
              className="group flex flex-col justify-center items-center bg-[#2020205b] p-10 rounded-lg shadow-md mx-auto"
            >
              <Image
                src="/images/GraphQL-logo.png"
                alt=""
                width={100}
                height={100}
                objectFit="contain"
              />
              <p className="mt-2 text-xl font-bold tracking-tight">React</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
