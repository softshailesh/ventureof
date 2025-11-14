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
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-[170px] py-16">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="font-inter font-medium text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[100%] tracking-normal text-center text-[#0D3D2E]">
          Looking for Indian investment opportunities?
        </h2>

        <p
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
          Browse our latest startup pitches from around India and connect with
          entrepreneurs
        </p>

        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* SECTION 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
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
            Redefining The Future...
          </h3>

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
            The AIN Investment Marketplace stands as the premier destination for
            discerning investors seeking the most promising deals, meticulously
            curated for success. Here, opportunity meets foresight, connecting
            you with investments that are not just poised for growth but are
            primed to redefine the future of industry.
          </p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
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

        {/* Right Text */}
        <motion.div
          className="order-1 md:order-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeLeft}
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
            Our Angel Investor Team
          </h3>

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
            We have a team of experienced investors who can help you mitigate
            your risk when making investment decisions. We also provide
            comprehensive research and an online platform that allows you to
            easily network and research investment opportunities, as well as
            make direct investments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
