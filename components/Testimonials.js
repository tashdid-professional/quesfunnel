"use client"
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function Testimonials() {
  const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false });
  return (
    <div className="mt-16 lg:px-20 " ref={sectionRef}>
      {/* Container div */}
      <div className="lg:flex justify-between gap-10">
        {/* Info div */}
        <motion.div className="lg:w-1/2 flex flex-col justify-center items-start px-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}>
          <button className="bg-[#E5E7FF] rounded-3xl px-7 text-sm py-1 text-black  ">
            OUR TESTIMONIALS
          </button>
          <h1 className="lg:text-4xl text-2xl font-bold my-10">From satisfied clients</h1>
          <div className="flex  items-center gap-4 mb-6">
            <Image
              src={"/saadman.JPG"}
              width={70}
              height={100}
              alt="saadman"
              className="rounded-full"
            ></Image>
            <div>
              <h1 className="lg:text-lg">Mohammed Sadman Sakib Bin Islam</h1>
              <h1 className="lg:text-sm text-xs font-thin text-gray-600">
                Founder and Designer at Adox Studio & Bigdog Digital
              </h1>
            </div>
          </div>
          <h1 className="text-lg ">
            I had an incredible experience working with them. Their
            professionalism and creativity added value to my project. Lastly,
            their communication and dedication to deliver a project drives me to
            work with them the in future!
          </h1>
          <a href="https://www.linkedin.com/in/spi97/" target="_blank">
            <h1 className="font-bold mt-7">See LinkedIn profile</h1>
          </a>
        </motion.div>
        {/* Image div */}
        <motion.div className="bg-[#E5E7FF] p-8 lg:w-1/2 lg:mt-0 mt-4 mx-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}>
          <Image
            src={"/adox-mockup.png"}
            width={700}
            height={100}
            alt="adox-mockup"
          ></Image>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
