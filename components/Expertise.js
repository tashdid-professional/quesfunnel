"use client"
import React from 'react'
import Image from 'next/image'
import { useRef } from "react";
import { motion ,useInView} from 'framer-motion'

function Expertise() {
   const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });
  return (
    <div className='flex flex-col justify-around items-center my-22 px-5' ref={sectionRef}>
      <motion.button className="bg-[#E5E7FF] rounded-3xl px-9 py-2 text-black"
       initial={{ opacity: 0, y: 50 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 1, delay: 0.25 }}>
        CORE FEATURES
      </motion.button>
      <motion.h1 className="text-6xl font-bold mt-6 mb-12"
       initial={{ opacity: 0, y: 50 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 1, delay: 0.5 }}>Expertise</motion.h1>
      {/* Container for every single expertises */}
      <motion.div className='flex flex-wrap gap-8'
       initial={{ opacity: 0, y: 50 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 1, delay: 0.75 }}>
        {/* Web Dev */}
        <div className=''>
            <Image src={'/graphic-1.jpg'} alt='bashas' height={300} width={400}></Image>
            <h1 className='text-2xl font-thin mt-8 mb-16'>Website Development</h1>
            <button className='bg-[#E5E7FF] px-5 p-2 text-xs font-semibold rounded-xl'>WEB APP</button>
            <button className='bg-[#B1F0DB] px-5 p-2 text-xs font-semibold rounded-xl mx-3'>UI</button>
            <button className='bg-[#E5E7FF] px-5 p-2 text-xs font-semibold rounded-xl'>UX</button>
        </div>
        {/* CopyWriting */}
        <div className=''>
            <Image src={'/graphic-2.jpg'} alt='bashas' height={300} width={400}></Image>
            <h1 className='text-2xl font-thin mt-8 mb-16'>Copy Writing</h1>
            <button className='bg-[#E5E7FF] px-5 p-2 text-xs font-semibold rounded-xl'>WEB APP</button>
            <button className='bg-[#B1F0DB] px-5 p-2 text-xs font-semibold rounded-xl mx-3'>UI</button>
            <button className='bg-[#E5E7FF] px-5 p-2 text-xs font-semibold rounded-xl'>UX</button>
        </div>
        {/* Bullshit */}
        <div className=''>
            <Image src={'/graphic-3.jpg'} alt='bashas' height={300} width={400}></Image>
            <h1 className='text-2xl font-thin mt-8 mb-16'>SEO </h1>
            <button className='bg-[#E5E7FF] px-5 p-2 text-xs font-semibold rounded-xl'>WEB APP</button>
            <button className='bg-[#B1F0DB] px-5 p-2 text-xs font-semibold rounded-xl mx-3'>UI</button>
            <button className='bg-[#E5E7FF] px-5 p-2 text-xs font-semibold rounded-xl'>UX</button>
        </div>
      </motion.div>
    </div>

  )
}

export default Expertise
