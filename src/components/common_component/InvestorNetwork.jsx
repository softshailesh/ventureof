import React from "react";
import { motion } from "framer-motion";
import investor_network_bg from "../../assets/investor_network_bg.webp";
import investorImg from "../../assets/investor_network.webp";
import img1 from "../../assets/invest1.webp";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

const fadeLeft = {
  hidden: { opacity: 1, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

// const fadeRight = {
//   hidden: { opacity: 0, x: 40 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
// };

const scaleIn = {
  hidden: { opacity: 1, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const InvestorNetwork = () => {
  return (
    <div
      className="w-full bg-center bg-cover relative"
      style={{ backgroundImage: `url(${investor_network_bg})` }}
    >
      {/* White Transparent Overlay */}
      <div className=" w-full h-full bg-white/90 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[110px] py-12 md:py-20 xl:py-[80px]">

        <motion.div
          className=" container w-full  mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >

          <motion.div className="w-full md:w-1/2" variants={fadeLeft}>
            <p className="text-[14px] text-gray-600">
              Invest
            </p>

            <h2 className="font-inter font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[120%] lg:leading-[48px] mt-3">
              Access High-Growth Startup Investments 
            </h2>

            <p className="font-inter font-medium text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-4">
              We provide investors with structured access to carefully selected early-stage and growth-stage startups. Our venture platform is designed to identify exceptional opportunities, manage risk, and create long-term capital appreciation.
            </p>

            <p className="font-inter font-medium text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-4">
              Our platform is suitable for:
            </p>
            <ul className="list-disc list-inside font-inter font-medium text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-2 space-y-1">
              <li>Angel Investors</li>
              <li>High-Net-Worth Individuals (HNIs)</li>
              <li>Family Offices</li>
              <li>Institutional & Strategic Investors</li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2   "
             variants={scaleIn}
             style={{margin:"auto"}}
          >
            <img
                src={investorImg}
                alt="Investors meeting"
                className="w-full h-auto rounded-md shadow-md"
                style={{opacity:"1 !important"}}
              />
           
          </motion.div>

        </motion.div>
        <motion.div
          className=" container w-full  mx-auto flex flex-col md:flex-row gap-12 lg:gap-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="w-full md:w-1/2   "
             variants={scaleIn}
             style={{margin:"auto"}}
          >
            <img
                src={img1}
                className="w-full h-auto rounded-md shadow-md"
                style={{opacity:"1 !important"}}
              />
           
          </motion.div>

          <motion.div className="w-full md:w-1/2" style={{margin:"auto"}} variants={fadeLeft}>
           
            <h2 className="font-inter font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[120%] lg:leading-[48px] mt-3">
             Our Investment Strategy
            </h2>

            <p className="font-inter font-medium text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-4">
              We focus on:
            </p>
            <ul className="list-disc list-inside font-inter font-medium text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-2 space-y-1">
              <li>Early-stage and growth-stage startups </li>
            <li>Scalable, technology-driven businesses </li>
            <li>Large and expanding markets</li>
            <li>Strong unit economics and growth potential</li>
            <li>Investment medium to long term</li>
            <li>Capital appreciation and strategic acquisitions</li>
            </ul>
          </motion.div>

          

        </motion.div>
      </div>
    </div>
  );
};

export default InvestorNetwork;
