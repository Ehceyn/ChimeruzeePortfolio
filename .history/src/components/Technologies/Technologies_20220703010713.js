import React from "react";
import Image from "next/image";

function Technologies() {
  return (
    <section className="px-[70px]">
      <div className=" w-full min-h-[80vh] h-fit py-20">
        <article className="w-full flex justify-center mb-20">
          <h2>TECHNOLOGIES</h2>
        </article>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 px-10">
          {[1, 2].map((r) => (
            <div
              key={r}
              className="group w-fit bg-[red] rounded-lg shadow-md object-cover  mx-auto"
            >
              <a
                href="#"
                className="flex flex-col items-center rounded-lg shadow-md md:flex-row md:max-w-xl "
              >
                <Image
                  className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src="/images/meruz-bw.jpg"
                  alt=""
                  width={150}
                  height={150}
                  objectFit="cover"
                />
                <div className="flex items-center p-4 leading-normal">
                  <h4 className="mb-2 text-2xl font-bold tracking-tight">
                    Noteworthy
                  </h4>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
