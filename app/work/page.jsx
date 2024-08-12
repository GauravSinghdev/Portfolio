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
} from '../../components/ui/tooltip';

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'Full-Stack',
    title: 'Mediclone - Blogging App',
    description: 'MediClone is a dynamic platform for writers and readers, inspired by Medium. It offers a space where storytelling meets community, empowering both seasoned authors and budding writers to share their ideas, insights, and experiences with a vibrant audience.',
    stack: [
      { name: 'React.js' }, 
      { name: "TypeScript" }, 
      { name: "TailwindCSS" }, 
      { name: "PostgreSQL" }, 
      { name: "Hono + Cloudflare" }
    ],
    image: '/assets/work/MediClone.png',
    live: "https://medium-clone-ruby.vercel.app/",
    github: "https://github.com/GauravSinghdev/Medium-Clone",
  },
  {
    num: '02',
    category: 'Full-Stack',
    title: 'RabbitType - Typing Test App',
    description: 'RabbitType is an engaging typing speed application designed to help users improve their typing accuracy and speed. With real-time feedback, animated caret, and dynamic text highlighting, it provides an intuitive and enjoyable typing practice experience for users of all levels.',
    stack: [
      { name: 'React.js' }, 
      { name: "TypeScript" }, 
      { name: "TailwindCSS" }, 
      { name: "PostgreSQL" }, 
      { name: "Hono + Cloudflare" }
    ],
    image: '/assets/work/MediClone.png',
    live: "https://rabbit-type.vercel.app/",
    github: "https://github.com/GauravSinghdev/monkeyType---Clone",
  },
  {
    num: '03',
    category: 'MERN-Stack',
    title: 'Khuchies - Cookie Store App',
    description: 'Welcome to Khuchies the Cookie Delights, your go-to online store for the finest and freshest cookies accross Rajasthan. Our e-commerce platform offers a wide range of gourmet cookies, from classic chocolate chip to unique seasonal flavors, all made with high-quality ingredients.',
    stack: [
      { name: 'React.js' }, 
      { name: "TailwindCSS" }, 
      { name: "JavaScript" },
      { name: "Mongodb" },
      { name: "Express.js" }
    ],
    image: '/assets/work/Khuchies.png',
    live: "https://khuchies-thecookiestore.vercel.app",
    github: "https://github.com/GauravSinghdev/khuchies-TheCookieStore",
  },
  {
    num: '04',
    category: 'MERN-Stack',
    title: 'NoteMaster - Note making App',
    description: "Welcome to NoteMaster, the ultimate app designed to help you capture and organize your thoughts effortlessly. Whether you're a student, professional, or creative thinker, NoteMaster is your perfect companion for taking notes, managing tasks, and staying organized.",
    stack: [
      { name: 'React.js' }, 
      { name: "TailwindCSS" }, 
      { name: "JavaScript" },
      { name: "Mongodb" },
      { name: "Express.js" }
    ],
    image: '/assets/work/NoteMaster.png',
    live: "https://note-app-codewithkara.vercel.app/",
    github: "https://github.com/GauravSinghdev/Note-App",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <div className="flex flex-col gap-2">
                <p className="text-white/90 text-xl underline underline-offset-4 decoration-accent">{project.title}</p>
                <p className="text-white/60">{project.description}</p>
              </div>
              
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
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
              onSlideChange={handleSlideChange} 
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image} 
                        fill 
                        className="object-cover" 
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
