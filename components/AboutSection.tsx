import React from "react";
import { skill_img } from "@/utils/images";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl pb-4">
          About Me
          <hr className="w-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I am an established software engineer with a deep passion for{" "}
              <span className="font-bold">{"finance"}</span> and
              <span className="font-bold">{" economics"}</span>.
            </p>
            <br />
            <p>
              Graduated from Clemson University in 2019 with a BS in{" "}
              <span className="font-bold">{"Computer Science"}</span> and am
              currently working on building innovative solutions at Ally
              Financial.
            </p>
            <br />
            <p>
              My desire is to evolve my curiosity for decoding financial trends,
              unearthing investment opportunities, and leveraging real estate as
              a vehicle for wealth generation. All the while, staying committed
              to using my knowledge to{" "}
              <span className="font-bold">{"empower"}</span> others,
              <span className="font-bold">{" demystifying"}</span> intimidating
              realms of personal finance, and encourage individuals to unlock
              thier financial potential.
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
