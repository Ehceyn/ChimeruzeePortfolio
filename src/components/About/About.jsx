import React from "react";
import { CgMenuGridO } from "react-icons/cg";

function About() {
  return (
    <section className="">
      <div className=" w-full min-h-[100vh] h-fit py-20 relative ">
        <section className=" w-full  ">
          <article className="w-full flex justify-center mb-10 md:mb-20">
            <h2 className="text-5xl md2:text-6xl lg:text-8xl">ABOUT ME</h2>
          </article>
          <div className="w-full flex flex-col items-center space-y-5 px-7 md2:px-0">
            <p className="text-[#999] text-2xl max-w-[500px] text-center ">
              Meet Chimeruzee Chidum, a highly motivated and hardworking
              individual who always brings his A-game to the team. With his
              quick learning abilities and innovative thinking, he&apos;s always
              ready to take on new challenges and tackle complex problems with
              ease. And with his excellent communication and interpersonal
              skills, he&apos;s the ultimate team player.
            </p>
            <p className="text-[#999] text-2xl max-w-[500px] text-center">
              When it comes to tech, he is a real pro. He&apos;s built several
              solutions using React, Nextjs, Node and Graphql, and has a knack
              for working seamlessly with teams. But don&apos;t let his love for
              all things tech fool you, he&apos;s also a real people person and
              loves chatting about business and tech over a cup of coffee.
            </p>
            <p className="text-[#999] text-2xl max-w-[500px] text-center">
              In his free time, you&apos;ll find him swimming, traveling,
              listening to gospel music, singing (although he&apos;ll be the
              first to admit his singing voice is better suited for frogs than
              humans 😂), playing Scrabble, table tennis and football (although
              he&apos;s more of a spectator than a player 😌). Bottom line, he
              is a jovial, relatable guy who will quickly become a valuable
              asset to any team. Give him a chance and you&apos;ll see for
              yourself why we&apos;re convinced you&apos;ll love him too ❤️😎
            </p>
          </div>
        </section>

        <section className="absolute top-0 w-full">
          <div className="w-full relative min-h-[100vh]">
            <div className="absolute top-0 left-0">
              <div className="flex transform -translate-y-8">
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
              </div>
              <div>
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <div className="w-full flex justify-end">
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
              </div>
              <div className="flex">
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
                <CgMenuGridO className="text-[80px] md2:text-[120px] text-[#46444456]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
