import React from "react";
import { motion } from "framer-motion";
import {useNavigate } from "react-router";
import invest_hero_bg from "../../assets/invest_hero_bg.webp";

const InvestHeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-[350px] sm:h-[420px] md:h-[480px] lg:h-[564px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${invest_hero_bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FCB71180]/50 flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-[117px] text-white flex-col">

        {/* <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-inter font-medium 
          text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] 
          leading-[110%] text-center tracking-normal"
        >
          Connecting Indian Entrepreneurs <br /> and Angel Investors
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="font-inter font-medium text-[12px] sm:text-[14px] 
          leading-[120%] tracking-normal mt-[7px] text-center max-w-[600px]"
        >
          Perpetuating Free Enterprise, Capitalism, & Angel Investing since 1997!
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="w-[160px] sm:w-[174px] h-[40px] sm:h-[42px] 
          bg-[#87BC25] font-inter font-medium text-[12px] leading-[100%] rounded-[4px]
          hover:bg-[#76a81f] transition mt-[28px] sm:mt-[40px] tracking-normal"
        >
          Join Investors Community
        </motion.button> */}

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
          Invest

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
          tracking-wide opacity-90 text-center max-w-[600px] mb-8" style={{fontWeight:700}}
        >
          Perpetuating Free Enterprise, Capitalism !
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-inter font-light text-xs sm:text-sm md:text-base 
          tracking-wide opacity-90 text-center max-w-[600px] mb-8"
        >
         <button
              onClick={() => navigate("/investor")}
              className="bg-[#42b87c] text-white px-2 xl:px-4 py-2 rounded-md hover:bg-lime-700 transition whitespace-nowrap cursor-pointer"
            >
              Investor  
            </button>
        </motion.p>

      </div>
    </div>
  );
};

export default InvestHeroSection;
