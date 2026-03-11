import React from "react";
import step1Img from "../../assets/process_step1.svg";
import step2Img from "../../assets/process_step2.svg";
import step3Img from "../../assets/process_step3.svg";

const CapitalProcess = () => {
  return (
    <section className="w-full bg-[#ECF3F2] py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container mx-auto space-y-16">
        {/* ---------------- Step 1 ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <img
            src={step1Img}
            className="w-[180px] sm:w-[220px]  mb-4 md:mb-0 mx-auto"
            alt="Step 1"
          />
          <div className="text-center md:text-left">
            <h3 className="text-[#1B3D36] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-medium mb-6">
              Capital Deployment Strategy
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[15px] md:text-[16px]  leading-relaxed">
              Capital raised will be allocated across:
            </p>
            <ul className="list-disc list-inside  text-[13px] sm:text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-2 space-y-1 text-left md:text-left">
              <li>Seed and early-stage investments</li>
              <li>Select growth-stage opportunities </li>
              <li>Follow-on investments in high-performing portfolio companies</li>
            </ul>
            <p className="text-[#000000] text-[14px] sm:text-[15px] md:text-[16px]  leading-relaxed mt-4">
              Our strategy emphasizes capital efficiency, scalable business models, and strong founder alignment.
            </p>
          </div>
        </div>

        {/* ---------------- Step 2 ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h3 className="text-[#1B3D36] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-medium mb-6">
              Target Investors
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              We work with:
            </p>
            <ul className="list-disc list-inside text-[13px] sm:text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-2 space-y-1 text-left md:text-left">
              <li>High-Net-Worth Individuals </li>
              <li>Angel Investors</li>
              <li>Family Offices</li>
              <li>Institutional & Strategic Investors</li>
            </ul>
            <p className="text-[#000000] text-[14px] sm:text-[15px] md:text-[16px]  leading-relaxed mt-4">
              Investment structures are designed to suit both individual deal participation and portfolio-based exposure.
            </p>
          </div>
          <img
            src={step2Img}
            className="w-[180px] sm:w-[220px]  mb-4 md:mb-0 mx-auto order-1 md:order-2"
            alt="Step 2"
          />
        </div>
      </div>
    </section>
  );
};

export default CapitalProcess;
