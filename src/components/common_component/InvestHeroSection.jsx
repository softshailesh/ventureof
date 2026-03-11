import React from "react";
import { motion } from "framer-motion";
import {useNavigate } from "react-router";
import invest_hero_bg from "../../assets/invest_hero_bg.webp";

const InvestHeroSection = () => {
  const navigate = useNavigate();
  return (
   <div
  className="w-full min-h-[320px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[560px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
  style={{ backgroundImage: `url(${invest_hero_bg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#FCB71180]/50 flex flex-col items-center justify-center text-white px-6 sm:px-10 md:px-16 lg:px-24 text-center">

    {/* Welcome */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-3 mb-4"
    >
      <span className="w-10 sm:w-20 md:w-32 h-[1px] bg-white/70"></span>
      <span className="text-xs sm:text-base md:text-lg font-medium tracking-wide">
        Welcome
      </span>
      <span className="w-10 sm:w-20 md:w-32 h-[1px] bg-white/70"></span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="font-semibold
      text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px]
      leading-tight max-w-[800px]"
    >
      Invest
    </motion.h1>

    {/* Decorative line */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "140px" }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="h-[2px] bg-white/70 mt-3 mb-4"
    />

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-xs sm:text-sm md:text-base font-semibold opacity-90 max-w-[600px] mb-4"
    >
      Perpetuating Free Enterprise, Capitalism!
    </motion.p>

    {/* Button */}
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      onClick={() => navigate("/investor")}
      className="bg-[#42b87c] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-lime-700 transition text-sm sm:text-base"
    >
      Investor
    </motion.button>

  </div>
</div>
  );
};

export default InvestHeroSection;
