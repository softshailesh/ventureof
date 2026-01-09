import React from "react";
import { motion } from "framer-motion";
import Investor_bg from "../../assets/Investor_bg.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ProtectLegacy = () => {
  return (
    <section
      className="relative w-full h-[470px] md:h-[550px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${Investor_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 md:bg-white/50 backdrop-blur-sm"></div>

      {/* Content */}
      <motion.div
        className="relative mx-auto px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl font-semibold text-gray-800 leading-snug"
        >
          Build & Protect Your <br className="hidden md:block" /> legacy!
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed"
        >
          For more than 25 years, we've been providing a platform for
          high-net-worth investors to access incredible investment
          opportunities in private markets. Our members now hail from all over
          the world, and they join us because of the unparalleled deal flow and
          access to the best investment opportunities available.
          <br />
          We’ve been providing a platform for high-net-worth investors to access
          incredible investment opportunities in private markets. Our members
          now hail from all over the world.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ProtectLegacy;
