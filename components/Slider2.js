'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function HorizontalScrollImage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-60%', '-10%']);

  return (
    <div className="mt-7 lg:block hidden">
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
            src="/panaroma2.jpg"
            alt="Scrolling Image"
            className="h-[60vh] w-full object-cover mr-10"
          />
          <img
            src="/panaroma2.jpg"
            alt="Scrolling Image"
            className="h-[60vh] w-full object-cover"
          />
        </motion.div>
      </motion.section>

      
    </div>
  );
}
