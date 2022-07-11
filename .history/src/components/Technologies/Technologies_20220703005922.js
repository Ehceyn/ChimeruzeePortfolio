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
              className="group max-w-lg bg-transparent  rounded-lg shadow-md object-cover  mx-auto"
            >
              <a
                href="#"
                className="flex flex-col items-center bg-[#00000086] rounded-lg shadow-md md:flex-row md:max-w-xl "
              >
                <div>
                  <Image
                    className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="/images/meruz-bw.jpg"
                    alt=""
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h4 className="mb-2 text-2xl font-bold tracking-tight">
                    Noteworthy technology acquisitions 2021
                  </h4>
                  <p className="mb-3 w-[300px] h-30 card-text">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
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
