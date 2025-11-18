import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/member_investor1.webp";
import img2 from "../../assets/member_investor2.webp";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const InvestorInfoSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* ---------- SECTION 1 ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        {/* Left Image – slide from left */}
        <motion.img
          src={img1}
          alt="Investor meeting"
          className="w-full h-auto rounded-lg shadow-md"
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Right Text – fade up */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
            When you become a member of Angel Investors Network,
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You’ll not only receive amazing investment opportunities in your
            inbox every month, but you’ll also become part of an exclusive and
            prestigious club of successful investors.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We provide our members with the privacy, exclusivity, and prestige
            they deserve, as well as the personal attention that only our brand
            can provide.
          </p>
        </motion.div>
      </div>

      {/* ---------- SECTION 2 ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Left – fade up */}
        <motion.div
          className="order-2 md:order-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
            Angel Investors Network
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Is more than just an online investor community – It’s a place where
            investors can connect, collaborate, and grow by joining our
            membership program.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You’ll gain access to the best investment opportunities, get
            personalized advice and assistance, and become part of an exclusive
            club of successful investors.
          </p>
        </motion.div>

        {/* Image Right – slide from right */}
        <motion.img
          src={img2}
          alt="Angel network"
          className="w-full h-auto rounded-lg shadow-md order-1 md:order-2"
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        />
      </div>
    </section>
  );
};

export default InvestorInfoSection;
