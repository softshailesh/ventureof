import React from "react";
import img2 from "../../assets/invest2.webp";

const WhyRaisingCapital = () => {
  return (
    <div>
  <section className="w-full py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">

    {/* Heading */}
    <h2 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-medium text-center mb-10 md:mb-14 lg:mb-16">
      Why We Are Raising Capital
    </h2>

    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      {/* LEFT TEXT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <p className="text-[#000] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-3">
          The startup ecosystem presents significant opportunities for investors who have access to quality deal flow and professional execution.
        </p>

        <p className="text-[#000] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-3">
          We are raising capital to:
        </p>

        <ul className="list-disc list-inside text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] text-gray-700 space-y-1 mb-3">
          <li>Invest in early and growth-stage startups</li>
          <li>Build a diversified venture portfolio</li>
          <li>Support follow-on funding rounds</li>
          <li>Capture value through strategic exits</li>
        </ul>

        <p className="text-[#000] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
          Investor capital is deployed with a clear mandate, strong oversight, and active portfolio management.
        </p>

      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={img2}
          alt="Team Meeting"
          className="w-full max-w-[420px] sm:max-w-[450px] md:max-w-[480px] rounded-lg object-cover shadow-md"
        />
      </div>

    </div>

  </section>
</div>
  );
};

export default WhyRaisingCapital;
