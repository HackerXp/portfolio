"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

//components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Music player",
    description:
      "A simple music player made with HTML5, JavaScript, and CSS3, a basic application that allows the user to play audio files directly in the browser. I used the HTML5 <audio> tag to support audio playback, combined with JavaScript to control the player's functionalities, such as play, pause, and volume control. CSS3 was used to style the player interface, making it more user-friendly and visually appealing.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/work-1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Calculator",
    description:
      "A basic application implemented with HTML, CSS3, and JavaScript. It allows the user to perform simple mathematical operations such as addition, subtraction, multiplication, and division, and is an excellent way to demonstrate the interaction between HTML for structure, CSS3 for styling, and JavaScript for logic.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/work-4.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Tic-Tac-Toe game",
    description:
      "Tic-Tac-Toe, also known as Noughts and Crosses, a simple board game  implemented using HTML, CSS3, and JavaScript. The application allows two players to play against each other on a 3x3 grid. The goal is for one player to align three of their symbols (X or O) horizontally, vertically, or diagonally.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/work-2.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "mobile",
    title: "E-rápido",
    description:
      "E-rápido is a mobile application developed in React Native, designed to function as a digital wallet with the goal of connecting people interested in lending money to each other. Through the platform, users can initiate loan negotiations, but to start the process, participants must have each other's phone contact. The application facilitates the management and security of transactions, offering an intuitive interface to connect lenders and borrowers, ensuring efficient and secure communication.",
    stack: [{ name: "React native" }, { name: "Adonis js" }, { name: "MySQL" }],
    image: "/assets/work/work-mobile-1.jpg",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "Portfolio",
    description:
      "A portfolio is an organized collection of work and projects that showcases a professional’s skills, experience, and achievements. In a portfolio, you can include examples of previous projects, case studies, descriptions of completed work, and any other materials that illustrate your competencies and expertise in your field.",
    stack: [
      { name: "Next js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/cover-linkedin.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "fullstack",
    title: "Information Management System",
    description:
      "An Information Management System (IMS) is a solution designed to collect, store, manage, and disseminate information within an organization. Its goal is to facilitate efficient access to information, support decision-making, and improve operational efficiency.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "codeigniter" },
      { name: "mysql" },
    ],
    image: "/assets/work/sgi.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSildeChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent 
              text-outline"
              >
                {project.num}
              </div>

              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white
               group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>

              {/* project category */}
              <p className="text-white/60 text-justify">
                {project.description}
              </p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {stack.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5
                       flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent hover:rotate-45 transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="">Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5
                       flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="">Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSildeChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className={
                            project.category == "mobile"
                              ? "object-contain"
                              : "object-cover"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
