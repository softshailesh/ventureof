import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/invest1.webp";
import img2 from "../../assets/invest2.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const InvestmentOpportunities = () => {
  return (
    <section className="w-full container mx-auto px-4 lg:px-[170px] py-16">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="font-inter font-medium text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[100%] tracking-normal text-center text-[#0D3D2E]">
          Our Investment Strategy
        </h2>

        {/* <p
          className="
    font-inter 
    font-medium 
    text-[12px] sm:text-[13px] md:text-[14px] 
    leading-[100%] 
    tracking-normal
    text-center
    text-gray-600
    mt-2
  "
        >
         
        </p> */}

        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:mb-20 md:mb-20 sm:mb-12">
        {/* Left Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeRight}
        >
          <h3
            className="
    font-inter
    font-medium
    text-[22px] sm:text-[28px] md:text-[32px]
    leading-[100%]
    tracking-normal
    text-[#0D3D2E]
  "
          >
            We focus on:
          </h3>

          <ul className="list-disc text-gray-700 text-sm space-y-2 pl-5 mt-3">
            <li>Early-stage and growth-stage startups </li>
            <li>Scalable, technology-driven businesses </li>
            <li>Large and expanding markets</li>
            <li>Strong unit economics and growth potential</li>
            <li>Investment medium to long term</li>
            <li>Capital appreciation and strategic acquisitions</li>
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full h-[320px] sm:h-[380px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeLeft}
        >
          <img
            src={img1}
            alt="Investment meeting"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </motion.div>
      </div>

      {/* SECTION 2 */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="w-full h-[320px] sm:h-[380px] order-2 md:order-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeRight}
        >
          <img
            src={img2}
            alt="Angel Investor Team"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeLeft}
        >
          <p
            className="
    font-inter
    font-medium
    text-[22px] sm:text-[28px] md:text-[32px]
    leading-[100%]
    tracking-normal
    text-[#0D3D2E]
  "
          >
            Return Focus:
           
          </p>

          <p
            className="
    font-inter 
    font-medium 
    text-[14px] sm:text-[16px] 
    leading-[26px] 
    tracking-normal 
    text-gray-700 
    mt-4
  "
          >
             Investment Horizon: Medium to long term
          </p>
        </motion.div>
      </div> */}
    </section>
  );
};

export default InvestmentOpportunities;
