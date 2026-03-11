import React from "react";
import step1Img from "../../assets/process_step1.svg";
import step2Img from "../../assets/process_step2.svg";
import step3Img from "../../assets/process_step3.svg";

const CapitalProcess = () => {
  return (
   <section className="w-full bg-[#ECF3F2] py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
  <div className="max-w-6xl mx-auto space-y-14 md:space-y-16">

    {/* -------- Step 1 -------- */}
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

      {/* Image */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          src={step1Img}
          alt="Step 1"
          className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] object-contain"
        />
      </div>

      {/* Text */}
      <div className="w-full lg:w-2/3 text-center lg:text-left">

        <h3 className="text-[#1B3D36] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium mb-4">
          Capital Deployment Strategy
        </h3>

        <p className="text-[#000] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
          Capital raised will be allocated across:
        </p>

        <ul className="list-disc list-inside text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-2 space-y-1 text-left lg:text-left">
          <li>Seed and early-stage investments</li>
          <li>Select growth-stage opportunities</li>
          <li>Follow-on investments in high-performing portfolio companies</li>
        </ul>

        <p className="text-[#000] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mt-4">
          Our strategy emphasizes capital efficiency, scalable business models, and strong founder alignment.
        </p>

      </div>
    </div>

    {/* -------- Step 2 -------- */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">

      {/* Image */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          src={step2Img}
          alt="Step 2"
          className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] object-contain"
        />
      </div>

      {/* Text */}
      <div className="w-full lg:w-2/3 text-center lg:text-left">

        <h3 className="text-[#1B3D36] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium mb-4">
          Target Investors
        </h3>

        <p className="text-[#000] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
          We work with:
        </p>

        <ul className="list-disc list-inside text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-2 space-y-1 text-left lg:text-left">
          <li>High-Net-Worth Individuals</li>
          <li>Angel Investors</li>
          <li>Family Offices</li>
          <li>Institutional & Strategic Investors</li>
        </ul>

        <p className="text-[#000] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mt-4">
          Investment structures are designed to suit both individual deal participation and portfolio-based exposure.
        </p>

      </div>

    </div>

  </div>
</section>
  );
};

export default CapitalProcess;
