import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "do",
    description: `AI-Powered life management assistant designed to help you take control of your day, optimize your time, and achieve your most ambitious goals.
    Built using the Fastify framework and leveraging the cutting-edge capabilities of OpenAI's Assistants API.`,
    image: "/do.png",
    github: "https://github.com/lukepaez/do",
    link: "",
  },
  {
    name: "Cryptly",
    description: `Cryptly is a password generator tool designed with customizable features to enhance user security. Stack includes React, Express, and Chakra UI.`,
    image: "/cryptly.png",
    github: "https://github.com/lukepaez/pwd-generator",
    link: "",
  },
  {
    name: "Personal Portfolio",
    description:
      "Personal portfolio documenting my career, skills, and projects.",
    image: "/snapshot.png",
    github: "https://github.com/lukepaez/my-website",
    link: "https://paezluke.vercel.app/",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      {" "}
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
