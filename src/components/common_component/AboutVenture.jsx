import React from "react";
import { motion } from "framer-motion";
import teamImg from "../../assets/team_meeting.webp";
import bgPattern from "../../assets/capital_bg.webp";
import "../../App.css";

const AboutVenture = () => {
  return (
   <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16">
  {/* Main Card */}
  <motion.div
    className="max-w-[1200px] mx-auto p-6 sm:p-10 md:p-12 lg:p-16"
  >
    {/* HEADER */}
    <div className="mb-10">
      <h2 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold mb-6 text-center">
        Who We Are
      </h2>

      <h4 className="text-[#1B3D36] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-snug">
        VentureYou doesn’t just fund ideas — we build companies
      </h4>

      <p className="text-[#4A4A4A] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mt-3 mb-2">
        We are a venture investment firm focused on backing high-potential
        startups at early and growth stages. Our mission is to bridge the
        gap between visionary founders and the capital, expertise, and
        networks required to scale successfully.
      </p>

      <p className="text-[#4A4A4A] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-2">
        With a disciplined investment approach and hands-on support, we
        partner closely with entrepreneurs to turn bold ideas into
        sustainable, market-leading businesses.
      </p>

      <p className="text-[#4A4A4A] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
        We provide everything a founder needs — at any stage of the
        startup lifecycle.
      </p>
    </div>

    {/* CONTENT GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      
      {/* LEFT CONTENT */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div>
            <span className="number">1.</span>
            <h4 className="font-semibold text-[#1B3D36] mb-3">
              Fundraising Support
            </h4>
            <ul className="text-sm text-[#4A4A4A] space-y-2">
              <li>• Warm intros to investors.</li>
              <li>• Investor Pitch Prep.</li>
              <li>• Valuation Assistance.</li>
              <li>• Due Diligence Help.</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div>
            <span className="number">2.</span>
            <h4 className="font-semibold text-[#1B3D36] mb-3">
              Startup Growth Services
            </h4>
            <ul className="text-sm text-[#4A4A4A] space-y-2">
              <li>• Sales & Marketing Strategy.</li>
              <li>• SEO + Performance Ads.</li>
              <li>• B2B/B2C Expansion Plans.</li>
              <li>• Growth Hacking Support.</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div>
            <span className="number">3.</span>
            <h4 className="font-semibold text-[#1B3D36] mb-3">
              Franchise & Expansion Support
            </h4>
            <ul className="text-sm text-[#4A4A4A] space-y-2">
              <li>• Franchise Strategy.</li>
              <li>• Franchise Lead Generation.</li>
              <li>• Compliance & Legal Support.</li>
            </ul>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={teamImg}
          alt="Venture Team"
          className="
            w-full
            max-w-[520px]
            md:max-w-[450px]
            lg:max-w-[500px]
            rounded-xl
            shadow-md
            border border-[#dfe5e3]
          "
        />
      </div>

    </div>
  </motion.div>
</section>
  );
};

export default AboutVenture;
