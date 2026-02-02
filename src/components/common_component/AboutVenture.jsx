import React from "react";
import { motion } from "framer-motion";
import teamImg from "../../assets/team_meeting.webp";
import bgPattern from "../../assets/capital_bg.webp";
import "../../App.css";

const AboutVenture = () => {
  return (
    <section
      className="relative w-full " 
      // style={{ backgroundImage: `url(${bgPattern})` px-4 sm:px-8 md:px-12 lg:px-20 }}
    >
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-white/90" /> */}

      {/* Main Card */}
      <motion.div
        className="container p-6 sm:p-10 md:p-12 lg:p-16 " style={{margin:"auto"}}
      >
        {/* HEADER */}
        <div className=" mb-10">
          <h2 className=" text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold mb-6 text-center">
            Who We Are
          </h2>
{/* text-[#87BC25] */}
          <h4 className="text-[#1B3D36] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px]  font-semibold leading-snug  ">
            VentureYou doesn’t just fund ideas —  we build companies
          </h4>

          <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed mt-3 mb-2">
            We are a venture investment firm focused on backing high-potential
            startups at early and growth stages. Our mission is to bridge the
            gap between visionary founders and the capital, expertise, and
            networks required to scale successfully.
          </p>
          <div>
            {/* <h3 className="text-[#1B3D36] text-xl font-semibold mb-4">
              Who We Are
            </h3> */}

            <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed mb-2">
              With a disciplined investment approach and hands-on support, we
              partner closely with entrepreneurs to turn bold ideas into
              sustainable, market-leading businesses.
            </p>

            <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
              We provide everything a founder needs — at any stage of the
              startup lifecycle.
            </p>
          </div>
        </div>

        {/* WHO WE ARE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="mb-16">
          {/* <h3 className="text-[#1B3D36] text-xl font-semibold mb-8">
            How We Support Founders
          </h3> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div>
              <span className="number">1.</span>
              <h4 className="font-semibold text-[#1B3D36] mb-3">
                Fundraising Support
              </h4>
              <ul className="text-sm text-[#4A4A4A] space-y-2">
                <li>• We help you raise funds through warm intros, pitch reviews, and access to angels, family offices, and VCs.</li>
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
                <li>• We help you crack distribution, run digital campaigns, and generate actual business growth. </li>
                <li>• Sales & Marketing Strategy.</li>
                <li>• SEO + Performance Ads.</li>
                <li>• B2B/B2C Expansion Plans.</li>
                <li>• Growth Hacking Support .</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div>
              <span className="number">3.</span>
              <h4 className="font-semibold text-[#1B3D36] mb-3">
                Franchise & Expansion Support
              </h4>
              <ul className="text-sm text-[#4A4A4A] space-y-2">
                <li>• Planning to franchise your business model? We help build legal docs, franchise kits, and identify partners across India.</li>
                <li>• Franchise Strategy.</li>
                <li>• Lead Generation for Franchisees.</li>
                <li>• Compliance & Legal Support. </li>
              </ul>
            </div>
          </div>
        </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={teamImg}
              alt="Venture Team"
              className="w-full  rounded-xl shadow-md
                         border border-[#dfe5e3]"
            />
          </div>
        </div>

        {/* SERVICES */}
        

        {/* GREEN OVAL CTA */}
        {/* <div className="mt-14 bg-[#87BC25] rounded-[100px]
                        py-10 px-6 sm:px-12 md:px-20
                        text-white text-center shadow-inner">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            We partner with founders and investors <br />
            to build long-term value
          </h3>

          <p className="text-xs sm:text-sm md:text-base max-w-[900px]
                        mx-auto leading-relaxed opacity-95">
            Our approach combines disciplined capital deployment with
            hands-on involvement — helping startups scale through strategic
            mentorship, follow-on funding, and strong investor partnerships.
          </p>
        </div> */}
      </motion.div>
    </section>
  );
};

export default AboutVenture;
