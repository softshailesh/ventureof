import React from "react";
import img2 from "../../assets/invest2.webp";

const WhyRaisingCapital = () => {
  return (
    <div>
      <section className="w-full  py-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h2
          className=" text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-medium text-center lg:mb-16 md:mb-16 sm:mb-12"
        >
          Why We Are Raising Capital
        </h2>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10  mb-16">
          <div style={{margin:"auto"}}>
            <p className="text-[#000000] text-[16px] leading-relaxed ">
              The startup ecosystem presents significant opportunities for investors who have access to quality deal flow and professional execution.
            </p>
            <p className="text-[#000000] text-[16px] leading-relaxed ">
              We are raising capital to:
            </p>
            <ul className="list-disc list-inside  text-[14px] md:text-[16px] leading-[24px] text-gray-700 mt-2 space-y-1">
              <li>Invest in early and growth-stage startups</li>
              <li>Build a diversified venture portfolio </li>
              <li>Support follow-on funding rounds</li>
              <li>Capture value through strategic exits </li>
            </ul>
            <p className="text-[#000000] text-[16px] leading-relaxed">
              Investor capital is deployed with a clear mandate, strong oversight, and active portfolio management.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={img2}
              alt="Team Meeting"
              className="w-full max-w-[430px] rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyRaisingCapital;
