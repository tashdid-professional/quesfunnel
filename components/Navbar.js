"use client";
import Link from "next/link";
import React from "react";
// import Link from 'next/link';
import { useState } from "react";
import { AlignRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const navs = ["Home", "Projects", "About", "Services", "Careers"];
  const [selectedNav, setSelectedNav] = useState("Home");
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="sticky z-[999] top-0 bg-[#E5E7FF]">
   
      <motion.div className="flex justify-between items-center py-6  lg:px-24 px-8 "
       initial={{ opacity: 0, }}
       animate={{ opacity: 1,  }}
       transition={{ duration: 1,delay:1.5}}>
        <div>
          <Link href={"/"}>
            <h1
              className="font-extrabold lg:text-2xl  "
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              QUEST FUNNEL
            </h1>
          </Link>
        </div>
        {/* For Desktop */}
        <div className="lg:flex space-x-2 text-lg hidden">
          {navs.map((nav, index) => (
            <Link
              key={index}
              onClick={() => {
                setSelectedNav(nav);
              }}
              href={`/${nav == "Home" ? "" : nav}`}
              className={`${
                selectedNav == nav && "bg-white rounded-sm "
              } flex items-center justify-center hover:bg-white  hover:rounded-sm w-[90px] py-1`}
            >
              {nav}
            </Link>
          ))}
        </div>
        <Link href={'/Contact'}>
        <button className="bg-blue-600 px-3 py-2 rounded-sm text-white lg:block hidden">
          Contact us
        </button></Link>
        {/* for mobile */}
        <div onClick={() => setIsToggled(!isToggled)} className="lg:hidden">
          {isToggled == false ? (
            <div className="text-white bg-black p-2 rounded-sm">
              {" "}
              <AlignRight />{" "}
            </div>
          ) : (
            <div className="text-white bg-black p-2 rounded-sm">
              {" "}
              <X />
            </div>
          )}
        </div>
      </motion.div>
      {/* For mobile */}
      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right
            animate={{ x: 0, opacity: 1 }} // Animate to center
            exit={{ x: "100%", opacity: 0 }} // Slide out to the left
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div
              className={`lg:hidden flex flex-col items-center justify-center text-2xl  ${
                isToggled == false && "hidden"
              }  mx-3 p-6 mt-5 bg-white `}
            >
              {navs.map((nav, index) => (
                <Link
                  key={index}
                  onClick={() => {
                    setSelectedNav(nav);
                  }}
                  href={`/`}
                  className={`${
                    selectedNav == nav && "bg-white rounded-sm "
                  } flex items-center justify-center hover:bg-white  hover:rounded-sm w-[90px]`}
                >
                  {nav}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
