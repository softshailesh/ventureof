import React from "react";
import { motion } from "framer-motion";
import invest_hero_bg from "../../assets/invest_hero_bg.webp";

const InvestHeroSection = () => {
  return (
    <div
      className="w-full h-[350px] sm:h-[420px] md:h-[480px] lg:h-[564px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${invest_hero_bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FCB71180]/50 flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-[117px] text-white flex-col gap-4">

        {/* Heading Animation */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-inter font-medium 
          text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] 
          leading-[110%] text-center tracking-normal"
        >
          Connecting Indian Entrepreneurs <br /> and Angel Investors
        </motion.p>

        {/* Subtext Animation */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="font-inter font-medium text-[12px] sm:text-[14px] 
          leading-[120%] tracking-normal mt-[7px] text-center max-w-[600px]"
        >
          Perpetuating Free Enterprise, Capitalism, & Angel Investing since 1997!
        </motion.p>

        {/* Button with Scroll Animation */}
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
        </motion.button>

      </div>
    </div>
  );
};

export default InvestHeroSection;
