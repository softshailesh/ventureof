import React from "react";
import build1 from "../../assets/founder.png";
import build2 from "../../assets/investor.png";
import { useNavigate } from "react-router-dom";

const BuildLegacySection = () => {
  const navigate = useNavigate();
  return (
   <section className="w-full bg-[#798980] py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
  <div className="max-w-[1200px] mx-auto">

    {/* SECTION 1 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">

      {/* Left Text Block */}
      <div className="text-center lg:text-left">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-medium text-white leading-tight mb-5">
          For Founders
        </h2>

        <p className="text-white leading-relaxed mb-4 mt-3 text-[14px] sm:text-[15px] md:text-[16px]">
          We partner with visionaries who are building ambitious startups
          and seeking more than just capital. From early-stage to growth
          funding, we bring a long-term partnership mindset focused on
          helping you scale sustainably. Beyond investment, we provide
          strategic mentorship, connect you with experienced investors and
          advisors, and stand by your side through future fundraising
          rounds—offering support, guidance, and insight at every stage of
          your journey.
        </p>

        <button
          onClick={() => navigate("/investor")}
          className="bg-[#42b87c] text-white px-4 py-2 rounded-md hover:bg-lime-700 transition"
        >
          Investor
        </button>
      </div>

      {/* Image */}
      <img
        src={build1}
        className="rounded-md w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[360px] object-cover"
        alt=""
      />

    </div>

    {/* SECTION 2 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* Image */}
      <img
        src={build2}
        className="rounded-md w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[360px] object-cover"
        alt=""
      />

      {/* Right Text Block */}
      <div className="text-center lg:text-left">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-medium text-white leading-tight mb-3">
          For Investors
        </h2>

        <p className="text-white leading-relaxed mb-4 mt-3 text-[14px] sm:text-[15px] md:text-[16px]">
          We provide investors with access to curated startup opportunities
          that have been carefully vetted across high-growth sectors. Our
          structured investment approach emphasizes thorough professional
          deal screening, diversified startup exposure, and active portfolio
          management to reduce risk while maximizing long-term value
          creation. With a strong focus on transparency, we offer clear
          reporting and maintain a long-term value-driven mindset designed
          to deliver sustainable returns over time.
        </p>

        <button
          onClick={() => navigate("/startup")}
          className="bg-[#42b87c] text-white px-4 py-2 rounded-md hover:bg-lime-700 transition"
        >
          Startup Funding
        </button>
      </div>

    </div>

  </div>
</section>
  );
};

export default BuildLegacySection;
