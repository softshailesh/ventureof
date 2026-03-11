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
  <div className="w-full h-full bg-white/90 px-6 md:px-10 lg:px-20 xl:px-[110px] py-12 md:py-16 lg:py-20">

    {/* SECTION 1 */}
    <motion.div
      className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* TEXT */}
      <motion.div className="w-full lg:w-1/2" variants={fadeLeft}>
        <p className="text-sm text-gray-600">Invest</p>

        <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[42px] font-medium mt-3">
          Access High-Growth Startup Investments
        </h2>

        <p className="text-[14px] md:text-[16px] text-gray-700 mt-4">
          We provide investors with structured access to carefully selected
          early-stage and growth-stage startups.
        </p>

        <ul className="list-disc list-inside text-[14px] md:text-[16px] text-gray-700 mt-3 space-y-1">
          <li>Angel Investors</li>
          <li>High-Net-Worth Individuals (HNIs)</li>
          <li>Family Offices</li>
          <li>Institutional & Strategic Investors</li>
        </ul>
      </motion.div>

      {/* IMAGE */}
      <motion.div className="w-full lg:w-1/2 flex justify-center" variants={scaleIn}>
        <img
          src={investorImg}
          className="w-full max-w-[520px] rounded-md shadow-md"
        />
      </motion.div>
    </motion.div>

    {/* SECTION 2 */}
    <motion.div
      className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* TEXT */}
      <motion.div
        className="w-full lg:w-1/2 lg:order-2"
        variants={fadeLeft}
      >
        <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[42px] font-medium">
          Our Investment Strategy
        </h2>

        <p className="text-[14px] md:text-[16px] text-gray-700 mt-4">
          We focus on:
        </p>

        <ul className="list-disc list-inside text-[14px] md:text-[16px] text-gray-700 mt-3 space-y-1">
          <li>Early-stage and growth-stage startups</li>
          <li>Scalable, technology-driven businesses</li>
          <li>Large and expanding markets</li>
          <li>Strong unit economics and growth potential</li>
          <li>Investment medium to long term</li>
          <li>Capital appreciation and strategic acquisitions</li>
        </ul>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:order-1"
        variants={scaleIn}
      >
        <img
          src={img1}
          className="w-full max-w-[520px] rounded-md shadow-md"
        />
      </motion.div>

    </motion.div>

  </div>
</div>
  );
};

export default InvestorNetwork;
