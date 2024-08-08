"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Developement",
    description:
      "Web development involves creating websites and web applications, focusing on both the client-side (front-end) and server-side (back-end). Front-end development uses HTML, CSS, and JavaScript to design and implement user interfaces, while back-end development involves server-side languages, databases, and APIs to handle data and business logic. Full-stack development encompasses both areas, providing end-to-end solutions.",
    href: "",
  },
  {
    title: "Database",
    description:
      "I offer comprehensive database design services, from initial modeling to ongoing administration. My work includes creating efficient and scalable data models, optimizing performance to ensure fast and reliable access to information, and maintaining data integrity. With a focus on efficiency and security, I ensure that you and your organization can operate with a robust and dependable database.",
    href: "",
  },
  /*   {
    title: "UI/UX",
    description:
      "Web development involves creating websites and web applications, focusing on both the client-side (front-end) and server-side (back-end). Front-end development uses HTML, CSS, and JavaScript to design and implement user interfaces, while back-end development involves server-side languages, databases, and APIs to handle data and business logic. Full-stack development encompasses both areas, providing end-to-end solutions.",
    href: "",
  }, */
  {
    title: "Copyrighter",
    description:
      "I offer the creation of persuasive and engaging texts to promote products, services, and brands. I develop strategic content for ads, sales pages, email marketing, and social media, always aligned with your target audience and campaign objectives. I also optimize the text for SEO, collaborate with designers, and adjust the content as needed to maximize effectiveness and return on investment.",
    href: "",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {index + 1 < 9 ? `0${index + 1}` : index + 1}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                    transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={service.href}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 text-justify">
                  {service.description}
                </p>
                {/* description */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
