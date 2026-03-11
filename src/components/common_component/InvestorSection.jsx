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
    <div className="w-full bg-[#F1FAF5] px-6 md:px-10 lg:px-20 xl:px-28 py-16 md:py-20 lg:py-24">

  {/* Title */}
  <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[42px] font-medium text-center mb-16">
    Why Invest With Us
  </h2>

  <div className="max-w-7xl mx-auto space-y-20">

    {/* -------- Row 1 -------- */}
    <motion.div
      className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      {/* TEXT */}
      <motion.div variants={fadeLeft} className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#0D3D2E]">
          Curated Deal Flow
        </h3>

        <p className="text-[14px] md:text-[16px] text-gray-700 mt-4 leading-[26px]">
          We source and screen startups through a rigorous evaluation
          process, focusing on strong teams, scalable models, and
          high-growth markets.
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.div variants={fadeRight} className="w-full lg:w-1/2 flex justify-center">
        <img
          src={img1}
          className="w-full max-w-[520px] h-auto rounded-lg shadow-md"
        />
      </motion.div>
    </motion.div>

    {/* -------- Row 2 -------- */}
    <motion.div
      className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeDown}
    >
      {/* TEXT */}
      <motion.div
        className="w-full lg:w-1/2 lg:order-2 text-center lg:text-left"
        variants={fadeRight}
      >
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#0D3D2E]">
          Professional Due Diligence
        </h3>

        <p className="text-[14px] md:text-[16px] text-gray-700 mt-4">
          Every investment opportunity undergoes detailed analysis covering:
        </p>

        <ul className="list-disc text-gray-700 text-[14px] md:text-[16px] space-y-2 pl-5 mt-3">
          <li>Market size and competitive landscape</li>
          <li>Business model viability</li>
          <li>Financial projections</li>
          <li>Founder capability and execution risk</li>
        </ul>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        className="w-full lg:w-1/2 lg:order-1 flex justify-center"
        variants={fadeLeft}
      >
        <img
          src={img2}
          className="w-full max-w-[520px] h-auto rounded-lg shadow-md"
        />
      </motion.div>
    </motion.div>

    {/* -------- Row 3 -------- */}
    <motion.div
      className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <motion.div variants={fadeLeft} className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#0D3D2E]">
          Active Portfolio Support
        </h3>

        <p className="text-[14px] md:text-[16px] text-gray-700 mt-4 leading-[26px]">
          We work closely with portfolio companies to improve performance,
          governance, and investor readiness—protecting and enhancing
          investor value.
        </p>
      </motion.div>

      <motion.div variants={fadeRight} className="w-full lg:w-1/2 flex justify-center">
        <img
          src={img1}
          className="w-full max-w-[520px] h-auto rounded-lg shadow-md"
        />
      </motion.div>
    </motion.div>

    {/* -------- Row 4 -------- */}
    <motion.div
      className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeDown}
    >
      <motion.div
        className="w-full lg:w-1/2 lg:order-2 text-center lg:text-left"
        variants={fadeRight}
      >
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#0D3D2E]">
          Diversified Exposure
        </h3>

        <p className="text-[14px] md:text-[16px] text-gray-700 mt-4 leading-[26px]">
          Investors gain access to multiple startups across sectors and
          stages, reducing single-company risk.
        </p>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 lg:order-1 flex justify-center"
        variants={fadeLeft}
      >
        <img
          src={img2}
          className="w-full max-w-[520px] h-auto rounded-lg shadow-md"
        />
      </motion.div>
    </motion.div>

  </div>
</div>
  );
};

export default InvestorSection;
