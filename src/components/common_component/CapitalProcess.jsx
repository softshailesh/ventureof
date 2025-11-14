import React from "react";
import step1Img from "../../assets/process_step1.svg";
import step2Img from "../../assets/process_step2.svg";
import step3Img from "../../assets/process_step3.svg";

const CapitalProcess = () => {
  return (
    <section className="w-full bg-[#ECF3F2] py-10 px-4 sm:px-8 md:px-16 lg:px-24">

      {/* Heading */}
      <h2
        className="text-[#1B3D36] text-[40px] sm:text-[48px] font-medium text-center mb-16"
        style={{ fontFamily: "Inter" }}
      >
        Our Process
      </h2>

      {/* MAIN GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center text-center space-y-20 md:space-y-24">

          {/* Step 1 */}
          <div className="max-w-[260px] flex flex-col items-center">
            <img src={step1Img} className="w-[93px] h-[112px] mb-4" alt="Step 1" />
            <p className="text-[#000000] text-[16px] font-medium leading-relaxed">
              We review your investment opportunity to see if you are a good fit
              for our investors.
            </p>
          </div>

          {/* Step 3 (Left Side) */}
          <div className="max-w-[260px] flex flex-col items-center">
            <img src={step2Img} className="w-[121px] h-[119px] mb-4" alt="Step 2" />
            <p className="text-[#000000] text-[16px] font-medium leading-relaxed">
              For companies that are qualified and engage us, we list you in our
              broker-dealer marketplace, highlight your opportunity to our
              investor database, and continue advising until goals are reached.
            </p>
          </div>
        </div>

        {/* NUMBER LINE (HIDE ON MOBILE, SHOW ON DESKTOP) */}
        <div className="hidden md:flex flex-col items-center justify-center">

          {/* Step 1 Number */}
          <span className="text-[#FBB91D] font-semibold text-lg mb-2">1</span>

          {/* Line 1 */}
          <div className="w-[2px] h-[200px] bg-[#FBB91D]/60"></div>

          {/* Step 2 Number */}
          <span className="text-[#FBB91D] font-semibold text-lg my-2">2</span>

          {/* Line 2 */}
          <div className="w-[2px] h-[200px] bg-[#FBB91D]/60"></div>

          {/* Step 3 Number */}
          <span className="text-[#FBB91D] font-semibold text-lg mt-2">3</span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[300px] mx-auto md:mx-0 md:mt-32">

          <img
            src={step3Img}
            className="w-[119px] h-[123px] mb-4 mx-auto md:mx-0"
            alt="Step 3"
          />

          <p className="text-[#000000] text-[16px] font-medium leading-relaxed">
            If you are not prepared to raise at least $5M through a Reg D or Reg A+
            offering, our team will consult and advise you. Within 90 days, you will
            be fully prepared to raise the capital you need.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CapitalProcess;
