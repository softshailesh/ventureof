import React from "react";
import build1 from "../../assets/founder.png";
import build2 from "../../assets/investor.png";
import { useNavigate } from "react-router-dom";

const BuildLegacySection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#798980] py-16 md:py-24 px-6 md:px-16 lg:px-28">
      <div className="container" style={{ margin: "auto" }}>
        {/* ============== SECTION 1 ============== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20 mx-auto">
          {/* Left Text Block */}
          <div className="mx-auto">
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-medium text-white leading-tight mb-5">
              For Founders
            </h2>

            {/* <strong className="text-white">We Partner With Visionaries</strong> */}

            <p className="text-white  leading-relaxed mb-4 max-w-md mt-3">
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
              onClick={() =>{ 
                console.log("clikceddddddddddddddd")
                navigate("/investor")}}
              className="bg-[#42b87c] text-white px-2 xl:px-4 py-2 rounded-md hover:bg-lime-700 transition whitespace-nowrap cursor-pointer"
            >
              Investor
            </button>

            {/* <strong className="text-white">What You Get:</strong>

          <ul className="list-disc text-white text-sm space-y-2 pl-5 mt-3">
            <li>Early-stage or growth capital</li>
            <li>Long-term partnership mindset</li>
            <li>Strategic mentorship</li>
            <li>Access to investors and advisors</li>
            <li>Support through future fundraising rounds</li>
          </ul> */}
          </div>

          <img
            src={build1}
            className="rounded-md w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* ============== SECTION 2 ============== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Right Text Block */}
          <div className="md:order-2 mx-auto">
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-medium text-white leading-tight mb-3">
              For Investors
            </h2>

            {/* <strong className="text-white mb-3">Access Curated Startup Opportunities</strong> */}

            <p className="text-white  leading-relaxed mb-4 max-w-md mt-3">
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
              className="bg-[#42b87c] text-white px-2 xl:px-4 py-2 rounded-md hover:bg-lime-700 transition whitespace-nowrap cursor-pointer"
            >
              Startup Funding
            </button>

            {/* <strong className="text-white ">Why Invest With Us:</strong>

          <ul className="list-disc text-white text-sm space-y-2 pl-5 mt-3 mb-3">
            <li>Professional deal screening.</li>
            <li>Diversified startup exposure.</li>
            <li>Transparent reporting.</li>
            <li>Long-term value focus. </li>
          </ul> */}
          </div>

          <img
            src={build2}
            className="rounded-md w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default BuildLegacySection;
