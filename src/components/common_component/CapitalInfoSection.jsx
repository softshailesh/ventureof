import React from "react";
import { motion } from "framer-motion";
import teamImg from "../../assets/team_meeting.webp";
import bgPattern from "../../assets/capital_bg.webp";

const CapitalInfoSection = () => {
  return (
    <section
      className=" mx-auto relative w-full  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 "
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      {/* Background Opacity Layer */}
      <div className="absolute inset-0 bg-white/90"></div>
      

      {/* WHITE CARD WITH ANIMATION */}
      <motion.div
        className="container relative bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.10)] p-6 sm:p-10 md:p-12 lg:p-16 -translate-y-32 "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="mx-auto">
            <h2 className="text-[#1B3D36] text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-medium leading-snug mb-4">
              A Structured Gateway to Venture-Backed Growth
            </h2>

            <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed mb-4 max-w-[550px]">
             VenturesYou raise capital from qualified investors to deploy into high-potential startups across early and growth stages. Our capital-raising platform is built on disciplined investment strategy, transparent governance, and long-term value creation.

            </p>

            <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed max-w-[550px]">
             We align investor capital with carefully selected ventures designed to deliver superior risk-adjusted returns.

            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={teamImg}
              alt="Team Meeting"
              className="w-full max-w-[450px] rounded-xl shadow-md border border-[#dfe5e3]"
            />
          </div>
        </div>

        {/* GREEN OVAL */}
        {/* <div className="mt-14 bg-[#87BC25] opacity-80 rounded-[100px] py-10 px-6 sm:px-12 md:px-20 text-white text-center shadow-inner">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 leading-snug">
            Let us help you raise capital and get the funding you <br />
            need to take your business to the next level.
          </h3>

          <p className="text-xs sm:text-sm md:text-base max-w-[850px] mx-auto leading-relaxed opacity-95">
            Our core expertise lies in empowering companies to navigate the complex journey
            of capital raising with strategic finesse and precision. Through bespoke
            consulting, we tailor our approach to each company’s unique needs, guiding them
            through the intricacies of securing investment. Our services extend beyond
            consultation, offering a seamless transition to visibility in our exclusive
            investment marketplace.
          </p>
        </div> */}
      </motion.div>
    </section>
  );
};

export default CapitalInfoSection;
