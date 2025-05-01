'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function HorizontalScrollImage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '-60%']);

  return (
    <div className="lg:block hidden">
      <div className="" />

      <motion.section
        ref={containerRef}
        className=" top-0  overflow-hidden"
      >
        <motion.div
          style={{ x }}
          className="flex h-full w-[300vw]"
        >
          <img
            src="/panaroma.jpg"
            alt="Scrolling Image"
            className="h-[60vh] w-full object-cover"
          />
          <img
            src="/panaroma.jpg"
            alt="Scrolling Image"
            className="
            ml-10 h-[60vh] w-full object-cover"
          />
        </motion.div>
      </motion.section>

      
    </div>
  );
}
