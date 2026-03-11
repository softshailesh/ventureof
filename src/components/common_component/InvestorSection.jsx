import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/investor_img1.webp";
import img2 from "../../assets/investor_img2.webp";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const InvestorSection = () => {
  return (
    <div className="w-full bg-[#F1FAF5] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-16 md:py-24 space-y-20">
      <h2
        className="font-inter font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[120%] lg:leading-[48px] text-center"
      >
        Why Invest With Us
      </h2>

      <div className="container mx-auto space-y-16">
        {/* ---------------- Row 1 ---------------- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.div variants={fadeLeft} className="text-center md:text-left">
            <h3 className="font-inter font-medium text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[120%] lg:leading-[52px] text-[#0D3D2E]">
              Curated Deal Flow
            </h3>
            <p className="font-inter font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[26px] mt-4 text-gray-700">
              We source and screen startups through a rigorous evaluation
              process, focusing on strong teams, scalable models, and
              high-growth markets.
            </p>
          </motion.div>

          <motion.div className="w-full h-[250px] sm:h-[300px] md:h-[350px]" variants={fadeRight}>
            <img
              src={img1}
              alt="Investment discussion"
              className="w-full h-full object-cover object-center rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>

        {/* ---------------- Row 2 ---------------- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeDown}
        >
          <motion.div
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] order-2 md:order-1"
            variants={fadeLeft}
          >
            <img
              src={img2}
              alt="Investment discussion"
              className="w-full h-full object-cover object-center rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div className="order-1 md:order-2 text-center md:text-left" variants={fadeRight}>
            <h3 className="font-inter font-medium text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[120%] lg:leading-[52px] text-[#0D3D2E]">
              Professional Due Diligence.
            </h3>

            <p className="font-inter font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[26px] mt-4 text-gray-700">
              Every investment opportunity undergoes detailed analysis covering:
            </p>

            <ul className="list-disc text-gray-700 text-sm sm:text-[14px] md:text-[15px] space-y-2 pl-5 mt-3 text-left md:text-left">
              <li>Market size and competitive landscape</li>
              <li>Business model viability</li>
              <li>Financial projections</li>
              <li>Founder capability and execution risk </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ---------------- Row 3 ---------------- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.div variants={fadeLeft} className="text-center md:text-left">
            <h3 className="font-inter font-medium text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[120%] lg:leading-[52px] text-[#0D3D2E]">
              Active Portfolio Support
            </h3>
            <p className="font-inter font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[26px] mt-4 text-gray-700">
              We work closely with portfolio companies to improve performance,
              governance, and investor readiness—protecting and enhancing
              investor value.
            </p>
          </motion.div>

          <motion.div className="w-full h-[250px] sm:h-[300px] md:h-[350px]" variants={fadeRight}>
            <img
              src={img1}
              alt="Investment discussion"
              className="w-full h-full object-cover object-center rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>

        {/* ---------------- Row 4 ---------------- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeDown}
        >
          <motion.div
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] order-2 md:order-1"
            variants={fadeLeft}
          >
            <img
              src={img2}
              alt="Investment discussion"
              className="w-full h-full object-cover object-center rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div className="order-1 md:order-2 text-center md:text-left" variants={fadeRight}>
            <h3 className="font-inter font-medium text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[120%] lg:leading-[52px] text-[#0D3D2E]">
              Diversified Exposure
            </h3>
            <p className="font-inter font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[26px] mt-4 text-gray-700">
              Investors gain access to multiple startups across sectors and
              stages, reducing single-company risk.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorSection;
