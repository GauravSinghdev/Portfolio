"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";


const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "Our web development services offer custom website creation, responsive design, and robust backend solutions using the latest technologies like React, Node.js, and PostgreSQL. We ensure high-quality, secure, and SEO-friendly websites tailored to your business needs. Contact us to elevate your online presence with expert, scalable web solutions.",
    href: "/"
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: "Our UI/UX design services provide intuitive, visually appealing, and user-centric designs that enhance user engagement and satisfaction. We use the latest design tools and principles to create seamless, responsive interfaces tailored to your brand. Contact us to transform your digital experience with expert UI/UX solutions.",
    href: "/"
  },
  {
    num: '03',
    title: 'Java Development',
    description: "Our Java development services deliver robust, scalable, and secure applications tailored to your business needs. We specialize in creating high-performance solutions using the latest Java technologies and frameworks. Contact us to develop reliable and efficient Java-based software.",
    href: "/"
  },
  {
    num: '04',
    title: 'SEO',
    description: "Our SEO services boost your online visibility and drive organic traffic through tailored strategies and the latest optimization techniques. We enhance your search engine rankings with keyword research, on-page and off-page SEO, and content optimization. Contact us to improve your website's performance and achieve higher search engine rankings.",
    href: "/"
  }

]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1, 
                    transition: {
                    delay: 2.4, 
                    duration: 0.4, 
                    ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"  
        >
        {services.map((services, index) => {
          return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
                <Link 
                  href={services.href} 
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent translate-all duration:500">{services.title}</h2>
              {/* description */}
              <p className="text-white/60">{services.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          )
        })}

        </motion.div>
      </div>
    </section>
  )
}

export default Services