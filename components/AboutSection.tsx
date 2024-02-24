import React from "react";
import { skill_img } from "@/utils/images";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I am an <span className="font-bold">{"established"}</span>{" "}
              software engineer with a deep passion for{" "}
              <span className="font-bold">{"finance"}</span> and
              <span className="font-bold">{" economics"}</span>.
            </p>
            <br />
            <p>
              I bring strong technical acumen, a track record of delivering
              innovative solutions, and a relentless drive for excellence.
              Poised to create forward-thinking strategies that have a lasting
              impact and excited to tackle new challenges, collaborate with
              diverse teams, and drive digital transformation, all while
              aspiring to make a positive difference.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-evenly mt-2">
              {skill_img.map((item) => {
                return (
                  <div className=" w-20 h-20 mr-2 mb-2" key={item.id}>
                    <img key={item.id} src={item.src} alt={item.alt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
