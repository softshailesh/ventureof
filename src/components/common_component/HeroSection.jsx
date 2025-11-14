import React from "react";
import { motion } from "framer-motion";
import herosection_bg from "../../assets/bg_herosection.webp";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[350px] sm:h-[420px] md:h-[480px] lg:h-[564px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${herosection_bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0F342D]/50 flex items-center px-6 sm:px-10 md:px-16 lg:px-[117px]">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white max-w-[600px]"
        >
          {/* Heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-inter font-medium text-[26px] sm:text-[32px] md:text-[40px] lg:text-[52px] leading-[110%]"
          >
            The Nation’s First <br className="hidden sm:block" />
            Online Angel Investor
            <br className="hidden sm:block" />
            Community
          </motion.p>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-inter font-normal text-[12px] sm:text-[14px] mt-[14px] sm:mt-[19px] leading-[150%]"
          >
            Perpetuating Free Enterprise, Capitalism, & Angel Investing since
            1997!
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-[25px] sm:mt-[39px] bg-[#87BC25] text-white px-4 sm:px-6 py-2 rounded-md text-[12px] sm:text-[14px] font-medium hover:bg-[#76a81f] transition"
          >
            Join Investors Community
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

