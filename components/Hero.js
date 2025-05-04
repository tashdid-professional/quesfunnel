"use client";
import React from "react";
import { Mouse } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="bg-[#E5E7FF]  flex flex-col text-center items-center justify-center pb-20">
      <div className="lg:text-8xl text-4xl font-bold ">
        <motion.button
          className="bg-white rounded-2xl font-normal mb-5 text-sm lg:px-7 px-4 lg:py-2 py-1 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, }}
        >
          READY TO START
        </motion.button>

        <motion.h1
          className="flex flex-col gap-5 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Be Found <br />
          <motion.span
            className=""
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            Be Chosen <br />
          </motion.span>
          <motion.span
            className="flex gap-5 lg:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Be Remembered
          </motion.span>
        </motion.h1>
      </div>
      <motion.h1
        className="my-7 lg:text-lg lg:px-0 px-10 lg:w-[50%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        We build dedicated tech teams that empower startups with strategic
        solutions, creative design, and cutting-edge technology.
      </motion.h1>
      <a href="#team">
        <div className="text-white bg-gray-900 hover:bg-purple-500 duration-300  rounded-full p-7">
          <Mouse size={30} />
        </div>
      </a>
    </div>
  );
}

export default Hero;
