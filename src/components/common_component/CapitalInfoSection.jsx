import React from "react";
import { motion } from "framer-motion";
import teamImg from "../../assets/team_meeting.webp";
import bgPattern from "../../assets/capital_bg.webp";

const CapitalInfoSection = () => {
  return (
    <section
  className="relative w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24
  py-10 sm:py-12 md:py-16 lg:py-20"
  style={{ backgroundImage: `url(${bgPattern})` }}
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-white/90"></div>

  {/* Card */}
  <motion.div
    className="relative max-w-7xl mx-auto bg-white rounded-xl
    shadow-[0_4px_25px_rgba(0,0,0,0.10)]
    p-6 sm:p-8 md:p-12 lg:p-16
    lg:-translate-y-24"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

      {/* LEFT CONTENT */}
      <div className="text-center lg:text-left mx-auto lg:mx-0">
        <h2 className="text-[#1B3D36]
        text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px]
        font-medium leading-snug mb-4">
          A Structured Gateway to Venture-Backed Growth
        </h2>

        <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed mb-4 max-w-[550px] mx-auto lg:mx-0">
          VenturesYou raise capital from qualified investors to deploy into
          high-potential startups across early and growth stages. Our
          capital-raising platform is built on disciplined investment strategy,
          transparent governance, and long-term value creation.
        </p>

        <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed max-w-[550px] mx-auto lg:mx-0">
          We align investor capital with carefully selected ventures designed
          to deliver superior risk-adjusted returns.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={teamImg}
          alt="Team Meeting"
          className="w-full max-w-[420px] sm:max-w-[450px] md:max-w-[480px]
          rounded-xl shadow-md border border-[#dfe5e3]"
        />
      </div>

    </div>
  </motion.div>
</section>
  );
};

export default CapitalInfoSection;
