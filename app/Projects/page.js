"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LatestProjects from "@/components/LatestProjects";
import Image from "next/image";

function page() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <div
      className="flex flex-col items-center pt-26 bg-[#E5E7FF] lg:px-20 px-5"
      ref={sectionRef}
    >
      <motion.button
        className="bg-white rounded-3xl px-9 py-2 text-sm text-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:0.25 }}
      >
        LATEST WORKS
      </motion.button>
      <motion.h1
        className="lg:text-6xl text-4xl font-bold mt-6 pb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 ,delay:.5}}
      >
        Take a look at our works
      </motion.h1>
       {/* Image and infos */}
              <div className="bg-[#E5E7FF] flex lg:h-[600px] h-[700px] items-center lg:px-0 px-4">
                <div className="flex gap-7 lg:flex-row flex-col">
                  {/* Image */}
                  <motion.div
                    className="lg:w-1/2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <Image
                      src={"/adox-studio.jpg"}
                      alt="adox"
                      width={650}
                      height={500}
                    />
                  </motion.div>
      
                  {/* Infos */}
                  <motion.div
                    className="lg:w-1/2 flex flex-col justify-between items-start gap-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <button className="bg-white rounded-3xl px-7 text-sm py-1 text-black">
                      PORTFOLIO
                    </button>
                    <h1 className="text-4xl font-semibold">
                      Adox Studio Website to showcase a Designer's talent
                    </h1>
                    <h2>
                      Adox studio offers multiples services such as designs,
                      cinematography and UI/UX designs
                    </h2>
                    <div className="flex space-x-1">
                      <img
                        src="/next.svg"
                        alt=""
                        className="bg-black p-2 rounded-full"
                      />
                      <img
                        src="/tail.svg"
                        alt=""
                        className="bg-black p-2 rounded-full"
                      />
                      <img
                        src="/ts.svg"
                        alt=""
                        className="bg-black p-2 rounded-full"
                      />
                    </div>
                    <h2 className="text-[#333A8D]">
                      Website Development and management
                    </h2>
                    <button className="bg-[#333A8D] px-4 py-3 rounded-lg text-white font-semibold">
                      Explore
                    </button>
                  </motion.div>
                </div>
              </div>
    </div>
  );
}

export default page;
