"use client"
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Text() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <div
      className="bg-gradient-to-r from-[#CDF9EA] to-[#E7DAFC] to-60% lg:h-[70vh] h-[80vh] flex justify-around items-center"
      ref={sectionRef}
    >
      <motion.h1
        className="lg:w-[60%] w-[80%] lg:text-5xl text-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.25 }}
      >
        Unleash your organization's potential with cutting-edge product design
        and technology expertise for{" "}
        <span className="text-[#7543FF]">unparalleled impact.</span>
      </motion.h1>
    </div>
  );
}

export default Text;
