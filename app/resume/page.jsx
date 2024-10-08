"use client";
import {
  FaHtml5,
  FaCss3,
  FaAngular,
  FaJs,
  FaReact,
  FaFigma,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//about data
const about = {
  title: "About me",
  description: `I'm a calm person, passionate about web technologies and always in search of
knowledge. I have a dynamic and proactive profile, I love studying and keeping up
to date with the latest trends in the sector. In addition to my love for programming,
I also like to walk around and enjoy leisure time. I am easy to deal with and
communicate easily, which allows me to work collaboratively and effectively in a
team. I am always open to new challenges and opportunities to apply my skills
and knowledge in exciting projects.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Élvio de Sousa",
    },
    {
      fieldName: "Phone",
      fieldValue: "+244 923839208",
    },
    {
      fieldName: "Experience",
      fieldValue: "over 8 Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "live:helviosadoc",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Angolan",
    },
    {
      fieldName: "E-mail",
      fieldValue: "helviosadoc@hotmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese, English",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Solid experience as a Front-End Developer, Full Stack Developer and Teacher, I have developed a wide range of technical and pedagogical skills. My background has enabled me to master the creation of interactive and responsive interfaces, as well as build comprehensive solutions that cover both front-end and back-end development.",
  items: [
    {
      company: "Okayulatech, Luanda",
      position: "Front-End Developer",
      duration: "Feb 2022 - Present",
    },
    {
      company: "Colégio a Luz do Saber",
      position: "Teacher",
      duration: "2021",
    },
    {
      company: "Freelancer, Luanda",
      position: "Full Stack Developer",
      duration: "Mar 2020 - Jun 2021",
    },
    {
      company: "LEVALUP, Luanda",
      position: "Full Stack Developer",
      duration: "Feb 2017 - Aug 2019",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I constantly seek knowledge from various sources to provide excellent service and stay updated with the continuous advancements in the world of information technology. My commitment to ongoing learning allows me to quickly adapt to new trends and technologies, ensuring that I can deliver innovative and effective solutions and contribute significantly to the success of the projects I am involved in.",
  items: [
    {
      institution: "Rockeseat",
      degree: "React, React native and AdonisJs",
      duration: "Jul 2022",
    },
    {
      institution: "Digital Inovation One",
      degree: "Introduction to Git and GitHub",
      duration: "May 2021",
    },
    {
      institution: "Digital Inovation One",
      degree: "Algorithm and Data Structure",
      duration: "May 2021",
    },
    {
      institution: "Online Course",
      degree: "Html, js and css3",
      duration: "2020",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "With a broad range of skills in various programming languages and technologies, I have the ability to tackle and solve complex development challenges efficiently. My experience spans from creating interactive and responsive interfaces to implementing comprehensive front-end and back-end solutions.",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaAngular />, name: "angular" },
    { icon: <FaReact />, name: "react.js" },
    /* { icon: <FaFigma />, name: "figma" }, */
    { icon: <FaPhp />, name: "php" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[900px] text-justify text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                           flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[900px] text-justify text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                           flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="text-justify max-w-[900px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[900px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
