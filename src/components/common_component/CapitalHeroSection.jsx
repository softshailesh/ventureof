import React from 'react';
import { motion } from "framer-motion";
import {useNavigate } from "react-router";
import invest_hero_bg from "../../assets/captial_hero_bg.webp";

const CapitalHeroSection = () => {
  const navigate = useNavigate();
  return (
   <div
  className="w-full bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: `url(${invest_hero_bg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#FCB711]/40 backdrop-blur-[1px]"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-white text-center
  px-4 sm:px-6 md:px-10 lg:px-16
  py-16 sm:py-20 md:py-24 lg:py-28">

    {/* Welcome */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-3 mb-4"
    >
      <span className="w-8 sm:w-16 md:w-28 lg:w-36 h-[1px] bg-white/70"></span>

      <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-medium tracking-wide">
        Welcome
      </span>

      <span className="w-8 sm:w-16 md:w-28 lg:w-36 h-[1px] bg-white/70"></span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="font-semibold
      text-[22px] sm:text-[30px] md:text-[38px] lg:text-[48px] xl:text-[56px]
      leading-[120%] max-w-[900px]"
    >
      Raise Capital
    </motion.h1>

    {/* Line */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "120px" }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="h-[2px] bg-white/70 mt-4 mb-4"
    ></motion.div>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-xs sm:text-sm md:text-base lg:text-lg
      opacity-90 max-w-[650px] mb-6"
    >
      Perpetuating Free Enterprise, Capitalism !
    </motion.p>

    {/* Button */}
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onClick={() => navigate("/startup")}
      className="bg-[#42b87c] text-white
      px-5 sm:px-6 md:px-7
      py-2 sm:py-3
      text-sm sm:text-base md:text-lg
      rounded-md hover:bg-lime-700 transition"
    >
      Startup Funding
    </motion.button>

  </div>
</div>
  );
};

export default CapitalHeroSection;
