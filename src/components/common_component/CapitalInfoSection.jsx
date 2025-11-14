import React from "react";
import { motion } from "framer-motion";
import teamImg from "../../assets/team_meeting.webp";
import bgPattern from "../../assets/capital_bg.webp";

const CapitalInfoSection = () => {
  return (
    <section
      className="relative w-full  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 "
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      {/* Background Opacity Layer */}
      <div className="absolute inset-0 bg-white/90"></div>
      

      {/* WHITE CARD WITH ANIMATION */}
      <motion.div
        className="relative bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.10)] p-6 sm:p-10 md:p-12 lg:p-16 -translate-y-32 "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[#1B3D36] text-2xl sm:text-3xl md:text-4xl font-medium leading-snug mb-4">
              No One Can Get You In <br />
              Front Of More Investors <br />
              Faster Than Angel <br />
              Investors Network
            </h2>

            <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed mb-4 max-w-[550px]">
              By tapping into our network of accredited investors, we can position your
              business to succeed in raising capital faster than anyone else.
            </p>

            <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed max-w-[550px]">
              Whether you are raising capital for your startup, real estate investment,
              investment fund, or other projects, we are here to help. By tapping into our
              network of accredited investors, we can position your business to succeed in
              raising capital faster than anyone else.
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
        <div className="mt-14 bg-[#87BC25] opacity-80 rounded-[100px] py-10 px-6 sm:px-12 md:px-20 text-white text-center shadow-inner">
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
        </div>
      </motion.div>
    </section>
  );
};

export default CapitalInfoSection;
