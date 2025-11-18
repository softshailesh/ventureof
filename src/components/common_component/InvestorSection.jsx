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

      {/* ---------------- Row 1 ---------------- */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp} // whole row fades upward
      >
        {/* Left Text - comes from LEFT */}
        <motion.div variants={fadeLeft}>
          <h2 className="font-inter font-medium text-[32px] lg:text-[44px] leading-[120%] lg:leading-[52px] tracking-normal text-[#0D3D2E]">
            Are You Looking For A Way To Diversify Your Investments & Make The
            Most Of Your Money?
          </h2>

          <p className="font-inter font-medium text-[14px] leading-[26px] tracking-normal text-gray-700 mt-4">
            Investing in alternative assets such as real estate, angel
            investing, oil and gas, and other asset classes not offered by
            financial planners is one of the smartest ways to grow your wealth.
          </p>
        </motion.div>

        {/* Right Image - comes from RIGHT */}
        <motion.div className="w-full h-[350px]" variants={fadeRight}>
          <img
            src={img1}
            alt="Investment discussion"
            className="w-full h-full object-cover object-center rounded-lg shadow-md"
          />
        </motion.div>
      </motion.div>

      {/* ---------------- Row 2 ---------------- */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeDown} // row drops from top
      >
        {/* Left Image - comes from LEFT */}
        <motion.div className="w-full h-[350px] order-2 md:order-1" variants={fadeLeft}>
          <img
            src={img2}
            alt="Investment discussion"
            className="w-full h-full object-cover object-center rounded-lg shadow-md"
          />
        </motion.div>

        {/* Right Text - comes from RIGHT */}
        <motion.div className="order-1 md:order-2" variants={fadeRight}>
          <h2 className="font-inter font-medium text-[32px] lg:text-[44px] leading-[120%] lg:leading-[52px] tracking-normal text-[#0D3D2E]">
            Invest In The Right Opportunities.
          </h2>

          <p className="font-inter font-medium text-[14px] leading-[26px] tracking-normal text-gray-700 mt-4">
            At Angel Investors Network, we provide access to high-quality,
            vetted investment opportunities. We understand that it can be
            difficult to navigate the world of alternative asset investing on
            your own. That’s why we are here – to help you invest in the right
            opportunities.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InvestorSection;
