"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";import { Linkedin, Twitter, Facebook } from "lucide-react";

function Footer() {
   const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });
  const navs = ["Home", "Projects", "About", "Services", "Careers"];
  return (
    <div className="bg-[#7543FF] lg:pt-16  pt-12 w-full" ref={sectionRef}>
      <div className="container mx-auto lg:px-16 px-6 mb-10">
        <motion.div className="flex flex-wrap "
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay:0.5}}>
          <div className="lg:w-[40%]">
          <h1 className="text-5xl font-bold text-white lg:pb-0 pb-4 ">Let&apos;s talk</h1>
          <div className="flex gap-4 mt-5 ">
            <div className="bg-white  rounded-full p-3">
              <Linkedin size={20} />
            </div>
            <div className="bg-white  rounded-full p-3">
              <Facebook size={20} />
            </div>
            
          </div>
          </div>
          <div className="flex flex-wrap space-x-8 text-lg text-white lg:mt-0 mt-5">
            {navs.map((nav,index) => (
              <h1 key={index}>{nav}</h1>
            ))}
          </div>
        </motion.div>
      </div>
      <img src="/logo.png" alt="" className="w-full" />
    </div>
  );
}

export default Footer;
