"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Linkedin, MousePointer2 } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function OurTeam() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <section className=" my-24 flex flex-col items-center px-9" id="team" ref={sectionRef}>
      <motion.button className="bg-[#E5E7FF] rounded-3xl px-9 py-2 text-black"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.25 }}>
        OUR ELITE SQUAD
      </motion.button>
      <motion.h1 className="text-6xl font-bold mt-6 mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.5 }}>About us</motion.h1>
      <motion.div className="flex lg:flex-row flex-col gap-6"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 1 }}>
        <div>
          <Image
            src={isHovered == false ? "/zahin-2.jpeg" : "/zahin-vector.jpg"}
            width={400}
            height={400}
            alt="Zahin"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="duration-300"
          ></Image>
          <h1 className="text-3xl font-thin mt-4 mb-2">Ashraful Zahin</h1>
          <h1 className="text-gray-600">Founder & CEO</h1>
          <a
            href="https://www.linkedin.com/in/ashraful-alam-zahin-9530332a2/"
            target="_blank"
          >
            <div className="flex mt-7">
              <div className="bg-black text-white   rounded-full p-3">
                <Linkedin size={15} />
              </div>
            </div>
          </a>
        </div>
        <div>
          <Image
            src={isHovered2 == false ? "/tashdid.JPG" : "/tashdid-vector.jpg"}
            width={400}
            height={400}
            alt="Tashdid"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className="duration-300"
          ></Image>
          <h1 className="text-3xl font-thin mt-4 mb-2">Habibur Rahman</h1>
          <h1 className="text-gray-600">Lead Fullstack Developer</h1>

          <div className="flex mt-7 space-x-3">
            <a
              href="https://www.linkedin.com/in/habibur-rahman-tashdid/"
              target="_blank"
            >
              <div className="bg-black text-white   rounded-full p-3">
                <Linkedin size={15} />
              </div>
            </a>
            <a href="https://www.tashdid.online/" target="_blank">
              <div className="bg-black text-white   rounded-full p-3">
                <MousePointer2 size={15} />
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default OurTeam;
