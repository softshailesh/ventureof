import React from 'react';
import { motion } from "framer-motion";
import invest_hero_bg from "../../assets/captial_hero_bg.webp";

const CapitalHeroSection = () => {
  return (
    <div
      className="w-full h-[350px] sm:h-[420px] md:h-[480px] lg:h-[564px] 
                 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${invest_hero_bg})` }}
    >

      {/* Yellow Overlay */}
      <div className="absolute inset-0 bg-[#FCB711]/40 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-white">

        {/* Welcome (with side lines) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="w-10 sm:w-36 h-[1px] bg-white/70"></span>
          <span className="text-sm sm:text-[22px] font-medium tracking-wide">
            Welcome
          </span>
          <span className="w-10 sm:w-36 h-[1px] bg-white/70"></span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-inter font-semibold 
          text-[24px] sm:text-[32px] md:text-[42px] lg:text-[50px] 
          leading-[110%] text-center max-w-[850px]"
        >
          Are You Looking For Capital <br className="hidden sm:block" /> 
          For Your Business?
        </motion.h1>

        {/* Underline decorative dotted line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "150px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="h-[2px] bg-white/60 mt-3 mb-3"
        ></motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-inter font-light text-xs sm:text-sm md:text-base 
          tracking-wide opacity-90 text-center max-w-[600px]"
        >
          Perpetuating Free Enterprise, Capitalism, & Angel Investing since 1997!
        </motion.p>

        

      </div>

    </div>
  );
};

export default CapitalHeroSection;
