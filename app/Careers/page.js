"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function page() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <div
      className="flex flex-col items-center pt-26 bg-[#E5E7FF]"
      ref={sectionRef}
    >
      <motion.button
        className="bg-white rounded-3xl px-9 py-2 text-sm text-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:0.25 }}
      >
        OPEN POSITONS
      </motion.button>
      <motion.h1
        className="lg:text-6xl text-4xl font-bold mt-6 pb-26"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 ,delay:.5}}
      >
        Team up with us
      </motion.h1>
    </div>
  );
}

export default page;
